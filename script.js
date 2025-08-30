//your JS code here. If required.
// Example JS to show how you can access the selector class
document.querySelectorAll(".selector").forEach((el, index) => {
  console.log(`Paragraph with selector class #${index + 1}:`, el.textContent);
});
