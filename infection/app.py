from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torchvision.transforms as transforms
from PIL import Image
import os
import json
import torchvision.models as models
import torch.nn as nn

app = Flask(__name__)
CORS(app)

# Load model architecture first
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = models.resnet18(weights=None)  # Don't load pretrained weights
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 25)  # Adjust for your 25 classes

# Then load the state dict
model.load_state_dict(torch.load("skin_infection_model.pth", map_location=device))
model = model.to(device)
model.eval()  # Now you can call eval()

# Load remedies
with open('remedies.json') as f:
    remedies = json.load(f)

# Image transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])
])

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    try:
        image = Image.open(file.stream).convert("RGB")
        image = transform(image).unsqueeze(0).to(device)
        
        with torch.no_grad():
            outputs = model(image)
            _, predicted = torch.max(outputs, 1)
            confidence = torch.nn.functional.softmax(outputs, dim=1)[0] * 100
        
        class_labels = sorted(os.listdir("dataset"))
        prediction = class_labels[predicted.item()]
        
        return jsonify({
            'prediction': prediction,
            'remedy': remedies.get(prediction, {}).get('remedies', ["No remedy information available"])[0],
            'confidence': round(confidence[predicted.item()].item(), 2)
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)