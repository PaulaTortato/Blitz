const registerValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (firstName.length < 3) {
    return res.status(200)
    .json({ message: '"firstName" length must be at least 3 characters long' });
  }
  if (lastName.length < 3) {
    return res.status(200)
    .json({ message: '"lastName" length must be at least 3 characters long' });
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.com$/)) {
    return res.status(200).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(200)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = registerValidation;