exports.validateBrand = (req, res, next) => {
    const { brand_name, founder_name, category, monthly_revenue } = req.body;

    if (!brand_name || !founder_name || !category)
        return res.status(400).json({ error: 'brand_name, founder_name and category are required' });

    if (monthly_revenue < 0)
        return res.status(400).json({ error: 'monthly_revenue must be >= 0' });

    next();
};

exports.validateNote = (req, res, next) => {
    if (!req.body.note || req.body.note.trim() === '')
        return res.status(400).json({ error: 'Note cannot be empty' });
    next();
};
