const Brand = require('../models/Brand');
const Note = require('../models/Note');

const statusFlow = ['SUBMITTED','UNDER_REVIEW','SHORTLISTED','ACCEPTED','REJECTED'];

exports.createBrand = async (req, res) => {
    try {
        const brand = await Brand.create(req.body);
        res.status(201).json(brand);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBrands = async (req, res) => {
    try {
        const { status, category } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (category) filter.category = category;

        const brands = await Brand.find(filter);
        res.json(brands);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleBrand = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ error: 'Brand not found' });

        const notes = await Note.find({ brand_id: brand._id });

        res.json({
            ...brand.toObject(),
            notes
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ error: 'Brand not found' });

        const newStatus = req.body.status;
        const currentIndex = statusFlow.indexOf(brand.status);
        const newIndex = statusFlow.indexOf(newStatus);

        if (newIndex === -1)
            return res.status(400).json({ error: 'Invalid status' });

        if (brand.status === 'ACCEPTED' || brand.status === 'REJECTED')
            return res.status(400).json({ error: 'Final status cannot be changed' });

        if (newIndex !== currentIndex + 1)
            return res.status(400).json({ error: 'Invalid status transition' });

        brand.status = newStatus;
        await brand.save();

        res.json(brand);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.summary = async (req, res) => {
    try {
        const total = await Brand.countDocuments();
        const submitted = await Brand.countDocuments({ status: 'SUBMITTED' });
        const under_review = await Brand.countDocuments({ status: 'UNDER_REVIEW' });
        const shortlisted = await Brand.countDocuments({ status: 'SHORTLISTED' });
        const accepted = await Brand.countDocuments({ status: 'ACCEPTED' });
        const rejected = await Brand.countDocuments({ status: 'REJECTED' });

        res.json({ total, submitted, under_review, shortlisted, accepted, rejected });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
