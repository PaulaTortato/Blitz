const taskValidation = (req, res, next) => {
  const { description } = req.body;
  if (description.length < 5) {
    return res.status(400)
    .json({ message: '"description" length must be at least 5 characters long' });
  }
  next();
};

module.exports = taskValidation;