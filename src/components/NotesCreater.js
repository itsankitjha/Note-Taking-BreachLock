import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DatePickerInput from "./DatePickerInput";
import moment from "moment";

export default function NotesCreater(props) {
  const [open, setOpen] = React.useState(props.open);
  const [date, setDate] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    if (props.open === true) {
      handleClickOpen();
    }
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.handleCloseDialog();
    setOpen(false);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleAddNote = async () => {
    const noteData = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      date: date ? moment(date).format("LL") : moment(new Date()).format("LL"),
    };
    await props.handleAddNote(noteData);
    setTitle("");
    setContent("");
    setOpen(false);
    props.handleCloseDialog();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Note</DialogTitle>
        <DialogContent>
          {/* <DialogContentText></DialogContentText> */}
          <br />
          <DatePickerInput handleDateChange={handleDateChange} />
          <TextField
            autoFocus
            margin="dense"
            value={title}
            id="name"
            label="Note Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ marginTop: "30px" }}
            id="outlined-multiline-static"
            autoFocus
            margin="dense"
            value={content}
            label="Note Content"
            type="textBox"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNote} disabled={!title || !content}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
