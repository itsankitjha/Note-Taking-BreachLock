import localStorage from "config/localStorage";

export const requestApi = async (resourcePath, method, params) => {
  switch (resourcePath) {
    case "/fetchNotes":
      return localStorage("getNotes");
    case "/addNote":
      return localStorage("addNotes", params);
    case "/deleteNote":
      return localStorage("deleteNote", params);

    default:
      break;
  }
};
