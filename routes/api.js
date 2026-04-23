const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brandController');
const noteController = require('../controllers/noteController');
const { validateBrand, validateNote } = require('../middleware/validator');

router.post('/brands', validateBrand, brandController.createBrand);
router.get('/brands', brandController.getBrands);
router.get('/brands/summary', brandController.summary);
router.get('/brands/:id', brandController.getSingleBrand);
router.patch('/brands/:id/status', brandController.updateStatus);

router.post('/brands/:id/notes', validateNote, noteController.addNote);

module.exports = router;
