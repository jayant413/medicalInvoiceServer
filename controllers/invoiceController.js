// controllers/invoiceController.js

const Invoice = require('../models/Invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
    try {
        const { userId, date, invoice, taxable, gross } = req.body;

        if (!userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const newInvoice = new Invoice({
            userId,
            date: new Date(date),
            invoice,
            taxable,
            gross
        });

        await newInvoice.save();
        res.status(200).json(newInvoice);
    } catch (error) {
        console.log('[INVOICE_POST]', error);
        res.status(500).json({ message: 'Internal error' });
    }
};

// Get invoices for a user
exports.getInvoices = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const userInvoices = await Invoice.find({ userId }).sort({ date: -1 });
        res.status(200).json(userInvoices);
    } catch (error) {
        console.log('[INVOICE_GET]', error);
        res.status(500).json({ message: 'Internal error' });
    }
};


exports.deleteInvoiceById = async (req, res) => {
    try {
        const { invoiceId } = req.params;

        if (!invoiceId) {
            return res.status(400).json({ message: 'Invoice ID is required' });
        }

        const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId);

        if (!deletedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        console.log('[INVOICE_DELETE]', error);
        res.status(500).json({ message: 'Internal error' });
    }
};