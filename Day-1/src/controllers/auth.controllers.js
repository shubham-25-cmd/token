const { registerService, loginService, getAccessTokenService } = require("../services/auth.service");

const registerController = async (req, res) => {
  try {
    const { accessToken, refreshToken, newUser } = await registerService(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      message: "user registered successfully",
      user: newUser,
      accessToken,
    });
  } catch (error) {
    if (error.message === "User already exists with this email") {
      return res.status(409).json({ message: error.message });
    }
    return res.status(400).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { accessToken, refreshToken, isExisted } = await loginService(email, password);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "user logged in successfully",
      user: isExisted,
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

const getAccessTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({
        message: "unauthorized access",
      });
    }
    const accessToken = await getAccessTokenService(refreshToken);
    return res.status(200).json({
      message: "Access token generated successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized access",
    });
  }
};

module.exports = { registerController, loginController, getAccessTokenController };