const express = require('express');
const router = express.Router();
const validation = require('../../middlewares/validations');
const heroesSchema = require('../../models/schemes');
const ctrlWrapper = require('../../middlewares/ctrlWrapper');

const {
  getAllHeroes,
  addHero,
  removeHero,
  getHeroById,
  updateHero,
} = require('../../controllers');

router.get('/', ctrlWrapper(getAllHeroes));
router.get('/:heroId', ctrlWrapper(getHeroById));
router.post('/', validation(heroesSchema), ctrlWrapper(addHero));
router.patch('/:heroId', validation(heroesSchema), ctrlWrapper(updateHero));
router.delete('/:heroId', ctrlWrapper(removeHero));
module.exports = router;
