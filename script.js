function submitForm() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if (title === "" || desc === "") {
    alert("Please fill required fields!");
    return;
  }

  alert("Job Submitted Successfully 🚀");
}