/*
Template format for a listener

const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/

let count = 0;

const counterDisplay = document.getElementById('counterBox');
const incrementButton = document.getElementById('incrementBtn');
const resetButton = document.getElementById('resetBtn');

incrementButton.addEventListener('click', function() {
  count++;
  counterDisplay.textContent = count;
});
resetButton.addEventListener('click', function() {
  count = 0;
  counterDisplay.textContent = count;
})