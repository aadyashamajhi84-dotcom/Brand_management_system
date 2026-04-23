const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name: { type: String, required: true },
    founder_name: { type: String, required: true },
    category: { type: String, required: true },
    monthly_revenue: { type: Number, default: 0, min: 0 },
    website: String,
    status: {
        type: String,
        enum: ['SUBMITTED','UNDER_REVIEW','SHORTLISTED','ACCEPTED','REJECTED'],
        default: 'SUBMITTED'
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Brand', brandSchema);
