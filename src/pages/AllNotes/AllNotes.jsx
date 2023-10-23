
export default function AllNotes({ notes }) {
  notes.length ? console.log(`notes = ${notes}`) : console.log('No notes yet');
  return (
    <>
    { notes.length ? 
    <h1>Notes</h1> 
    : 
    <h1>No Notes Yet</h1>
    }
    </>
  );
}