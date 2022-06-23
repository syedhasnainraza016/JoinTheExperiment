const User = require("../../../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register Account
const Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("re", req.body);
    const check = await User.findOne({ email: email }).exec();

    if (check)
      return res.status(208).json({
        status: false,
        message: "This email already used.",
      });

    // Password Hash
    const hashPassword = await bcrypt.hash(password, 10);
    let role = "user";
    // Create account object
    const newAccount = new User({
      email: email,
      password: hashPassword,
      role: role,
    });

    // Save information
    const saveAccount = await newAccount.save();
    if (saveAccount)
      return res.status(201).json({
        status: true,
        message: "Successfully account created",
      });
  } catch (error) {
    if (error) next(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("req", req.body);
    // Account find using email
    let account = await User.findOne({ email }).exec();

    // Compare with password

    const result = await bcrypt.compare(password, account.password);
    console.log("result", account);
    if (result) {
      // Generate JWT token
      const token = await jwt.sign(
        { id: account._id, email: account.email, role: account.role },
        "SECRET",
        { expiresIn: "1d" }
      );
      if (token) {
        return res.status(200).json({
          message: "Login Successfully",
          status: true,
          data: { token, account },
        });
      }
    }

    return res.status(404).json({
      status: false,
      message: "Invalid e-mail or password",
    });
  } catch (error) {
    if (error) next(error);
  }
};

const Logout = async (req, res) => {
  try {
    // Split token
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, "SECRET");

    // Find account using account id and role
    let account = await User.findOne({
      $and: [{ _id: decode.id }, { role: decode.role }],
    });
    if (!account) {
      return res.status(404).json({
        status: false,
        message: "Invalid token",
      });
    }

    // Find account and null token field
    const updateToken = await Doctor.findByIdAndUpdate(
      { _id: decode.id },
      { $set: { access_token: null, status: "offline" } }
    );
    if (!updateToken) {
      return res.status(404).json({
        status: false,
        message: "Invalid token",
      });
    }

    res.status(200).json({
      status: true,
      message: "Successfully logged out",
    });
  } catch (error) {
    if (error) {
      res.status(501).json({
        status: false,
        message: error.message,
      });
    }
  }
};

module.exports = {
  Register,
  Login,
  Logout,
};
