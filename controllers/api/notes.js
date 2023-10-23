const Note = require('../../models/note');

module.exports = {
  create,
  getAll
};

async function create(req, res) {
  try {
    // Add the note to the db
    const note = await Note.create(req.body);
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAll(req, res) {
  try {
    // Get all the notes from the db
    const notes = await Note.find({
      user: req.user._id
    });
    res.json(notes)

  } catch (err) {
    res.status(400).json(err);
  }
}