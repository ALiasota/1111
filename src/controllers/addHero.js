const { Hero } = require("../models/heroes");

const addHero = async (req, res) => {
  const result = await Hero.create(req.body);
  res.status(201).json(result);
};

module.exports = addHero;
