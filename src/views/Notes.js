import React, { useEffect, useState } from "react";
import Header from "components/Header";
import { Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import NotesCreater from "components/NotesCreater";
import Dispatcher from "utils/Dispatcher";
import { addNote, deleteNote, fetchNotes } from "store/slices/noteSlice";
import NoteCard from "components/NoteCard";
import { searchFor } from "utils/search";

function Notes() {
  const [showCreateNoteDialog, setShowCreateNoteDialog] = useState(false);
  const [allNotes, setAllNotes] = useState([]);
  const [rawNotes, setRawNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Dispatcher(fetchNotes);
      setRawNotes(response);
      setAllNotes(response);
    })();
  }, []);

  const handleSearchInput = (e) => {
    const query = e.target.value;

    setAllNotes(searchFor(query, rawNotes));
  };
  const handleAddNoteButtonClick = () => setShowCreateNoteDialog(true);
  const handleCloseDialog = () => setShowCreateNoteDialog(false);
  const handleAddNote = async (noteData) => {
    const response = await Dispatcher(addNote, noteData);
    setRawNotes(response);
    setAllNotes(response);
    setShowCreateNoteDialog(false);
  };
  const handleDeleteNote = async (id) => {
    const response = await Dispatcher(deleteNote, id);
    setRawNotes(response);
    setAllNotes(response);
  };
  return (
    <>
      <Container>
        <Header pageName={"Notes"} handleSearchInput={handleSearchInput} />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6} md={6} textAlign="left">
            <Button variant="contained" onClick={handleAddNoteButtonClick}>
              Add Note
            </Button>
          </Grid>
          <Grid item xs={6} md={6} textAlign="right">
            {/* <Button variant="outline">Sort</Button> */}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          {allNotes.length > 0 ? (
            allNotes.map((note) => {
              return (
                <Grid item xs={12} md={12} textAlign="left" key={note.id}>
                  {" "}
                  <NoteCard note={note} handleDeleteNote={handleDeleteNote} />
                </Grid>
              );
            })
          ) : (
            <Typography sx={{ marginLeft: "10%" }}>
              Nothing here! Please click on the above button to add notes
            </Typography>
          )}
        </Grid>
        <NotesCreater
          open={showCreateNoteDialog}
          handleCloseDialog={handleCloseDialog}
          handleAddNote={handleAddNote}
        />
      </Container>
    </>
  );
}

export default Notes;
