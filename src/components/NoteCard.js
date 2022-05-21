import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Close } from "@mui/icons-material";

export default function NoteCard({ note, handleDeleteNote }) {
  return (
    <Card sx={{}}>
      <Close
        sx={{
          float: "right",
          margin: 1,
          fontSize: 16,
          color: "rgba(0, 0, 0, 0.6)",
          cursor: "pointer",
        }}
        onClick={() => {
          handleDeleteNote(note.id);
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{}}>
          {note.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="caption" color="text.secondary">
          {note.date}
        </Typography>
      </CardActions>
    </Card>
  );
}
