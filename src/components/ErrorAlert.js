import Swal from "sweetalert2";
// import "components/alerts/alerts.css";
export function ErrorAlerts(message) {
  let errorMessage = message.message ? message.message : message;
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMessage,
    // footer: '<a href="">Why do I have this issue?</a>',
  });
}
