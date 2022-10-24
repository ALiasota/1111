const { Hero } = require("../models/heroes");

const getHeroById = async (req, res) => {
  const { heroId } = req.params;
  const result = await Hero.findById(heroId);

  if (!result) {
    res.status(404).json({ message: `Not found` });

    return;
  }

  res.json(result);
};

module.exports = getHeroById;
