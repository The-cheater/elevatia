const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Route to handle Google login
router.post("/login", async (req, res) => {
  const { googleId, username, email } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ googleId });

    // If the user doesn't exist, create a new user
    if (!user) {
      user = new User({
        googleId,
        username,
        email,
        hoursSpent: 0,
        activity: {}, // Initialize empty activity object
      });
      await user.save();
    }

    // Send the user data back to the frontend
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Route to update hours spent
router.post("/update-hours", async (req, res) => {
  const { googleId, hours } = req.body;

  try {
    // Find the user and update their hours spent
    const user = await User.findOneAndUpdate(
      { googleId },
      { $inc: { hoursSpent: hours } }, // Increment hours spent
      { new: true } // Return the updated user
    );

    // Update activity data for the current date
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    await User.findOneAndUpdate(
      { googleId },
      { $inc: { [`activity.${today}`]: hours } }, // Increment hours for today
      { new: true }
    );

    // Send the updated user data back to the frontend
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Route to get user activity data for the heatmap
router.get("/activity/:googleId", async (req, res) => {
  try {
    const user = await User.findOne({ googleId: req.params.googleId });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Send the user's activity data
    res.json({
      activity: user.activity || {}, // Return activity data or empty object
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Route to get user data (for dashboard)
router.get("/user/:googleId", async (req, res) => {
  try {
    const user = await User.findOne({ googleId: req.params.googleId });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Send the user data
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;