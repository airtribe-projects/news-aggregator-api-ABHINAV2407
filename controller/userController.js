const { users } = require("../models/user");

function getUserPrefrence(req, res) {
  try {

    const { userId } = req.user;

    const user = users.find(u => u.userId === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      preferences: user.preferences
    });

  } catch (error) {
    return res.status(500).json({
      error: error
    });
  }
}

function updatePrefrences(req, res) {

  try {
    const userId = req.user.userId;
    const user = users.find(u => u.userId === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { preferences } = req.body
    user.preferences = preferences;

    return res.status(200).json({
      message: "Preferences updated successfully",
      preferences: user.preferences
    });

  } catch (error) {
    console.error("Update preferences error:", error);
    return res.status(500).json({
      error: error.message
    })
  }

}


module.exports = {
  getUserPrefrence,
  updatePrefrences
}