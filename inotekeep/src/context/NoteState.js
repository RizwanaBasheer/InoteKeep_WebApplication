import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = props => {
  const host = "http://192.168.1.3:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  // auth-token is required for this step
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };


  // Add a Note
  // auth-token is required for this step
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({title, description, tag}),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };


  // Delete a Note
  const deleteNote = async id => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(json);

    //return only those notes whose id does not match with the given id
    const newNotes = notes.filter(note => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };


};

export default NoteState;