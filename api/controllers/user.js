import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const userData = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userData = await User.findById(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const usersData = await User.find();
    res.status(200).json(usersData);
  } catch (err) {
    next(err);
  }
};
