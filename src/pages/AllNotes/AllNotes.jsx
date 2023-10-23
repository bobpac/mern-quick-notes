import Note from '../Note/Note';
import React, {Component} from 'react';
import { useTable } from 'react-table';

export default function AllNotes({ notes }) {
  notes.length ? console.log(`notes = ${JSON.stringify(notes)}`) : console.log('No notes yet');
  
  const myNotes = notes.map(note =>
    <Note 
       key = {note._id}
       noteStr = {note.note}
       createdAt = {note.createdAt}/>
    )
  return (
    <>
   { notes.length ? 
      <>
        <h1>Notes</h1> 
        {myNotes}
      </>
    : 
    <h1>No Notes Yet</h1>
    }
    </>
  );
}