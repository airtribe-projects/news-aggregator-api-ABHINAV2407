const bcrypt = require('bcrypt');
const jwt = require("../config/jwtConfig")
const { users } = require("../models/user")
const uuid = require("uuid");

async function userSignupHandler(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = req.body
    newUser.password = hashedPassword
    newUser.userId = uuid.v4();

    users.push(newUser);
    return res.status(200).json({
      message: "User signup successful",
      user: {
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      error: "Internal server error"
    });
  }
}


async function userLoginHandler(req, res) {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.generateToken({
      userId: user.userId,
      email: user.email
    });

    res.status(200).json({
      success: true,
      token
    });

  } catch {
    console.error("login error:", error);
    return res.status(500).json({
      error: "Internal server error"
    });
  }

}



module.exports = {
  userSignupHandler,
  userLoginHandler
};