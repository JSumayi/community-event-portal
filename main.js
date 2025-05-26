// Log welcome message
console.log("Welcome to the Community Portal");

// Show alert when page is fully loaded
window.onload = function () {
  alert("Page fully loaded!");
};

// Declare basic event info
const eventName = "Clean-Up Marathon";
const eventDate = "2025-06-20";
let seatsAvailable = 30;

console.log(`${eventName} on ${eventDate} has ${seatsAvailable} seats.`);
seatsAvailable--;
console.log(`Seats left: ${seatsAvailable}`);

// Array of events with consistent category
const events = [
  { name: "Tree Plantation", date: "2025-06-10", seats: 10, category: "Environment" },
  { name: "Beach Cleanup", date: "2025-07-15", seats: 25, category: "Environment" }
];

// Log upcoming events with available seats
events.forEach(event => {
  if (event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

// Handle case where no seats are left
try {
  if (events[0].seats <= 0) throw new Error("No seats left!");
} catch (err) {
  console.error("Registration Error:", err.message);
}

// Function to add a new event
function addEvent(name, category) {
  events.push({ name, category });
}

// Function to simulate user registration
function registerUser(eventName) {
  console.log(`Registered for ${eventName}`);
}

// Filter events by category and use a callback to display them
function filterEventsByCategory(cat, callback) {
  const filtered = events.filter(event => event.category === cat);
  callback(filtered);
}

// Closure example for tracking categories
function categoryTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${category} registrations: ${count}`);
  };
}

const trackMusic = categoryTracker("Music");
trackMusic(); 
trackMusic();

// Constructor function with prototype method
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const e = new Event("Tech Fest", "2025-08-01", 50);
console.log(Object.entries(e));

// Copy of events for future use
let allEvents = [];
allEvents.push({ name: "Music Fest", category: "Music" });

const musicEvents = allEvents.filter(e => e.category === "Music");
const formatted = allEvents.map(e => `Workshop on ${e.name}`);

// Dynamically display event cards with register buttons
const section = document.getElementById("eventList");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.date}`;
  card.style.padding = "10px";
  card.style.border = "1px solid black";
  card.style.margin = "10px 0";
  card.style.backgroundColor = "#fff";

  const btn = document.createElement("button");
  btn.textContent = "Register";
  btn.onclick = () => register(event.name); // Show alert on click
  card.appendChild(document.createElement("br"));
  card.appendChild(btn);

  section.appendChild(card);
});

// Register function to show alert
function register(name) {
  alert(`Registered for ${name}`);
}

// Fetch example (GET)
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Fetch example with async/await
async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

// Arrow function with default parameter
const greet = (name = "Guest") => console.log(`Hello, ${name}`);

// Destructuring example
const { name, date } = { name: "Tech Expo", date: "2025-09-01" };

// Spread operator
const eventsCopy = [...events];

// Handle form submission
document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  const { name, email } = e.target.elements;

  if (!name.value || !email.value) {
    alert("Please fill all fields");
  } else {
    alert(`Thanks ${name.value}, you've registered with ${email.value}`);
    name.value = "";
    email.value = "";
  }
});

// Simulated POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ name: 'John' }),
  headers: { 'Content-type': 'application/json' }
})
  .then(res => res.json())
  .then(data => console.log('Success', data))
  .catch(err => console.error('Error', err));
