import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editorContent: '',
      notes: [
        { text: 'Primera nota importante' },
      ],
      selected: null,
    };
  }

  updateContent = (content) => {
    this.setState({ editorContent: content });
  }

  clearContent = () => {
    this.setState({
      editorContent: '',
      selected: null,
    });
  }

  saveContent = () => {
    const { selected, editorContent } = this.state;

    if (selected !== null)  {
      this.editNote(selected, editorContent);
    } else {
      this.newNote(editorContent);
    }
  }

  showNote = (index) => {
    this.setState(({ notes }) => ({
      editorContent: notes[index].text,
      selected: index,
    }));
  }

  newNote(content) {
    this.setState(state => ({
      notes: [{text: content}, ...state.notes],
    }), this.clearContent());
  }

  editNote(selected, content) {
    this.setState(state => {
      const updatedNotes = [...this.state.notes];

      updatedNotes[selected].text = content;

      return { notes: updatedNotes };
    }, this.clearContent());
  }

  removeNote = (selected) => {
    this.setState(state => {
      const updatedNotes = [...this.state.notes];

      updatedNotes.splice(selected, 1);

      return { notes: updatedNotes };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nevernote</h1>
        </header>
        <div className="notecontainer">
          <NoteList
            notes={this.state.notes}
            onSelect={this.showNote}
            onRemove={this.removeNote}
          />
          <NoteEditor
            content={this.state.editorContent}
            onContentChange={this.updateContent}
            onClearContent={this.clearContent}
            onSaveNote={this.saveContent}
          />
        </div>
      </div>
    );
  }
}

export default App;
