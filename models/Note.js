const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    brand_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
    note: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('Note', noteSchema);
