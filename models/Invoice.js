// models/Invoice.js

const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    invoice: {
        type: String,
        required: true
    },
    taxable: {
        type: String,
        required: true
    },
    gross: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
