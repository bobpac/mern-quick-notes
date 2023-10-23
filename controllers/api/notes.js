const Note = require('../../models/note');

module.exports = {
  add,
  getAll
};

async function add(req, res) {
  console.log(`controllers/api/notes.js/add: req.body.note = ${req.body.note}`);
  try {
    // Add the note to the db
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note);
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAll(req, res) {
  console.log(`controllers/api/notes.js/getAll: req = ${req}`);
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