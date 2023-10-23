import './Note.css';

export default function Note({ noteStr, createdAt}) {
  const dateObj = new Date(createdAt);
  let dateStr = dateObj.toLocaleString();
  console.log(dateStr)
  return (
        <>
        {noteStr}   {dateStr}  <br/>
        </>
  );
}