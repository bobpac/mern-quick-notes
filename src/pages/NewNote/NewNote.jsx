import { useState } from 'react';
import './NewNote.css';

export default function NewNote({ handleAddNote }) {
  const [content, setContent] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddNote(content);
  }

  return (
    <>
      <h1>Add New Note</h1>
      <div className="flexCtr">
        <form className="formCtr" onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={evt => setContent(evt.target.value)}
          />
          <button type="submit"> ADD NOTE </button>
        </form>
     </div>
    </>

  );
}