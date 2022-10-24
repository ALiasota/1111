const { Hero } = require("../models/heroes");
const updateHero = async (req, res) => {
  const { heroId } = req.params;
  if (!req.body) {
    res.status(400).json({
      message: `missing fields`,
    });
    return;
  }
  const result = await Hero.findByIdAndUpdate(heroId, req.body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({
      message: `Not found`,
    });
    return;
  }
  res.status(200).json({ result });
};

module.exports = updateHero;
