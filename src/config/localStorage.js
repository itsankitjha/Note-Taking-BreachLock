const localStorage = async (operation, data) => {
  let allNotes = await (window.localStorage.getItem("notes")
    ? JSON.parse(window.localStorage.getItem("notes"))
    : []);

  if (operation === "addNotes") {
    allNotes.push(data);
    await window.localStorage.setItem("notes", JSON.stringify(allNotes));
    allNotes = await JSON.parse(window.localStorage.getItem("notes"));
  }
  if (operation === "deleteNote") {
    await window.localStorage.setItem(
      "notes",
      JSON.stringify(allNotes.filter((note) => note.id !== data))
    );
    allNotes = await JSON.parse(window.localStorage.getItem("notes"));
  }

  return allNotes.reverse();
};

export default localStorage;
