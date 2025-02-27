const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Route to handle user login
router.post('/login', async (req, res) => {
  const { googleId, username, email } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ googleId });

    // If the user doesn't exist, create a new user
    if (!user) {
      user = new User({ googleId, username, email });
      await user.save();
    }

    // Return the user data
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to update hours spent
router.post("/update-hours", async (req, res) => {
    const { googleId, hours } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { googleId },
        { $inc: { hoursSpent: hours } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

module.exports = router;