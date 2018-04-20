import React, { Component } from 'react';
import Note from './Note';


class NoteList extends Component {
  renderNotes(notes) {
    return this.props.notes.map((note, i) => (
      <Note
        key={i}
        text={note.text}
        onSelect={() => this.props.onSelect(i)}
        onRemove={() => this.props.onRemove(i)}
      />
    ));
  }

  render() {
    return (
      <section className="notelist">
        <h2>Notas</h2>
        <ul className="list">
          {this.renderNotes(this.props.notes)}
        </ul>
      </section>
    );
  }
}

export default NoteList;
