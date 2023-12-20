document.addEventListener("DOMContentLoaded", function(event) {
  // Ensure body is empty before writing the string
  document.body.innerHTML = "";

  // Write the string to the body
  document.body.textContent = "DOM load success";
});
