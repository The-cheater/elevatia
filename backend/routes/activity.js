import express from 'express';
import Activity from '../models/Activity.js';

const router = express.Router();

// Get User Activity
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const activities = await Activity.find({ userId });

    const activityData = {};
    activities.forEach(({ date, hours }) => {
      activityData[date] = hours;
    });

    res.json(activityData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity data' });
  }
});

// Update Activity
router.post('/update-hours', async (req, res) => {
  try {
    const { userId, hours } = req.body;
    const date = new Date().toISOString().split('T')[0];

    const existingActivity = await Activity.findOne({ userId, date });
    if (existingActivity) {
      existingActivity.hours += hours;
      await existingActivity.save();
    } else {
      await new Activity({ userId, date, hours }).save();
    }

    res.json({ message: 'Activity updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating activity' });
  }
});

export default router;
