import React, { Component } from 'react';

class NoteEditor extends Component {
  handleChange = (e) => {
    const { value } = e.target;

    this.props.onContentChange(value);
  }

  render() {
    const { content, onClearContent, onSaveNote} = this.props;

    return (
      <section className="noteeditor">
        <div>
          <button onClick={onClearContent}>Limpiar</button>
          <button onClick={onSaveNote}>Guardar</button>
        </div>
        <textarea
          className="editor"
          placeholder="Nota..."
          value={content}
          rows="10"
          onChange={this.handleChange}
        ></textarea>
      </section>
    );
  }
}

export default NoteEditor;
