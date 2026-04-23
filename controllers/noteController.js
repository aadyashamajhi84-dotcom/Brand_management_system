const Note = require('../models/Note');
const Brand = require('../models/Brand');

exports.addNote = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ error: 'Brand not found' });

        const note = await Note.create({
            brand_id: brand._id,
            note: req.body.note
        });

        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
