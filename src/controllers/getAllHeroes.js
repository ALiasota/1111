const { Hero } = require('../models/heroes');

const getAllHeroes = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  // const result = await Hero.find({}, '', {
  //   skip,
  //   limit: Number(limit),
  // });
  const result = await Hero.find().skip(skip).limit(limit);
  // const shownDocuments = result.length;
  // const totalDocuments = await Hero.countDocuments({});
  // console.log(totalDocuments);
  // console.log(shownDocuments);
  if (result.length === 0) {
    res.status(400).json({
      message: `The list of heroes is empty`,
    });
    return;
  }
  res.json(result);
};

module.exports = getAllHeroes;
