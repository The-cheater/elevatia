import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  hours: { type: Number, default: 0 },
});

export default mongoose.model('Activity', activitySchema);
