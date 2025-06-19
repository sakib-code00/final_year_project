import Settings from '../models/Settings.js';

export const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    const { siteTitle, logo } = req.body;
    if (siteTitle !== undefined) settings.siteTitle = siteTitle;
    if (logo !== undefined) settings.logo = logo;
    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
