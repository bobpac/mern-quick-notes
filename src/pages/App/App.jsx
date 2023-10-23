import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as notesAPI from '../../utilities/notes-api';
import AuthPage from '../AuthPage/AuthPage';
import NewNote from '../NewNote/NewNote';
import AllNotes from '../AllNotes/AllNotes';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, []);

  async function handleAddNote(noteStr) {
    const noteData = {
      'note': noteStr
    }
    console.log(`handleAddNote: noteData=${noteData.note}`)
    const note = await notesAPI.add(noteData);
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <AllNotes notes={notes}/>
            <NewNote handleAddNote={handleAddNote}/>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
