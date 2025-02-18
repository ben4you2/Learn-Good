/*function generateLotteryNumber() {
  let number = "";
  for (let i = 0; i < 5; i++) {
    number += Math.floor(Math.random() * 10); // Generates a number from 0-9
  }
  document.getElementById("lottery-number").textContent = number;
}*/


document.addEventListener("DOMContentLoaded", () => {
  loadPreviousNumbers();
  updateFrequencyTable();
});

function generateLotteryNumber() {
  let number = "";
  for (let i = 0; i < 5; i++) {
    number += Math.floor(Math.random() * 10); // Generates a number from 0-9
    
  }

  // Display with animation
  let numberDisplay = document.getElementById("lottery-number");
  numberDisplay.classList.add("animate");
  setTimeout(() => numberDisplay.classList.remove("animate"), 300);
  numberDisplay.textContent = number;
  // Play sound
  document.getElementById("sound").play();

  // Store the number
  storeNumber(number);
}

function storeNumber(number) {
  let numbers = JSON.parse(localStorage.getItem("lotteryNumbers")) || [];
  numbers.unshift(number);
  if (numbers.length > 10) numbers.pop(); // Keep only the last 10

  localStorage.setItem("lotteryNumbers", JSON.stringify(numbers));
  loadPreviousNumbers();
  updateFrequencyTable();
}

function loadPreviousNumbers() {
  let numbers = JSON.parse(localStorage.getItem("lotteryNumbers")) || [];
  let list = document.getElementById("previous-numbers");
  list.innerHTML = numbers.map(num => `<li class="list-group-item">${num}</li>`).join("");
}

function updateFrequencyTable() {
  let numbers = JSON.parse(localStorage.getItem("lotteryNumbers")) || [];
  let frequency = Array(10).fill(0);

  numbers.forEach(num => {
    num.split('').forEach(digit => frequency[parseInt(digit)]++);
  });

  let table = document.getElementById("frequency-table");
  table.innerHTML = frequency.map((count, digit) =>
    `<tr><td>${digit}</td><td>${count}</td></tr>`).join("");
  
}

// script.js
async function fetchLotteryResults() {
  try {
    const response = await fetch('/api/lottery-results');
    const data = await response.json();
    // Process and display the data as needed
  } catch (error) {
    console.error('Error fetching lottery results:', error);
  }
}