require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET;

class UserController {
  // GET SPECIFIC USER DATA BY ID
  static getUser = async (req, res) => {
    try {
      const user = await UserModel.findById(req.data1.id).select({ password: 0 });
      res.status(201).json({
        status: 'success',
        message: 'successful',
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // NEW USER REGISTRATION
  static register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new UserModel({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // FOR USER LOGIN
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password);
          if (isMatched) {
            const token = jwt.sign({ ID: user.id }, process.env.JWT_SECRET);
            return res
              .status(201)
              .json({ status: "success", message: "Successfully Logged In!", token, user });
          }
          else {
            return res
              .status(401)
              .json({ status: "failed", message: "Email & Password does not Matched, Try Again!" });
          }
        }
        else {
          return res
            .status(401)
            .json({ status: "failed", message: "You are not Registered User, Please Register", redirect: "/register" });
        }
      }
      else {
        return res
          .status(401)
          .json({ status: "failed", message: "All Fields are Required!" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ status: "failed", message: error.message });
    }
  };
}

module.exports = UserController;