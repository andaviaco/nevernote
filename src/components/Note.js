import React from 'react';


const Note = ({ text, onSelect, onRemove }) => (
  <li className="noteitem">
    <button style={{ float: 'right' }} onClick={onRemove}>X</button>

    <div onClick={onSelect}>
      { text }
    </div>
  </li>
);

export default Note;
