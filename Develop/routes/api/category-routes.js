const router = require('express').Router();
const { Category, Product } = require('../../models');
const path = require('path');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll();
   res.json(categoryData)
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id);
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
     .then((category) => {
       
       res.status(200).json(category);
     })
     .catch((err) => {
       console.log(err);
       res.status(400).json(err);
     });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
