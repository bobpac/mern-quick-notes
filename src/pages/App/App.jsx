import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <AllNotes notes={notes}/>
            <NewNote />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
