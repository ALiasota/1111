const { Hero } = require("../models/heroes");
const removeHero = async (req, res) => {
  const { heroId } = req.params;
  const result = await Hero.findByIdAndRemove(heroId);
  if (!result) {
    res.status(404).json({
      message: `Not found`,
    });
    return;
  }
  res.status(200).json({
    message: `Hero deleted`,
  });
};

module.exports = removeHero;
