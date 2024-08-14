// routes/invoiceRoutes.js

const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// POST request to create a new invoice
router.post('/', invoiceController.createInvoice);

// GET request to fetch invoices for a user
router.get('/', invoiceController.getInvoices);

module.exports = router;
