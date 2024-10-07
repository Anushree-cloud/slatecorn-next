"use client";
import { Button, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../../store/reducers/notes";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

function EditForm({ noteId }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentNote = useSelector((state) => state.notes.listing.find((note) => note.id === noteId))
  console.log('14=>',currentNote, noteId)
  const [currentTitle, setCurrentTitle] = useState(currentNote.title);
  const [currentdescription, setCurrentDescription] = useState(currentNote.description);
    
  const updateNote = (id, title, description) => {
    dispatch(editNote({ id, title, description }));
    router.push('/');
  };

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 20 }}>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={currentdescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
        multiline
        rows={4}
      />
      <Button onClick={() => updateNote(noteId, currentTitle, currentdescription)}>
        Update
      </Button>
      <Button onClick={() => router.push('/')}>Cancel</Button>
    </Card>
  );
}

export default EditForm;
