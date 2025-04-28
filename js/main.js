// Import the API class
import { API } from "./api.js";
// Import the UI class
import { UI } from "./ui.js";

// Create an instance of the API class to use it
const api = new API();

// Create an instance of the UI class to use it
const ui = new UI();

// ! When the page loads, send an API request
document.addEventListener("DOMContentLoaded", async () => {
  // Render the loader
  ui.renderLoader();
  // Get song data from the API and assign it to the data variable
  const songs = await api.getPopular();
  // Render the cards with the data received from the API
  ui.renderCards(songs);
});

// ! When the form is submitted, get the value from the input and get songs related to that word from the API
ui.form.addEventListener("submit", async (e) => {
  // Prevent the page from refreshing when the form is submitted
  e.preventDefault();
  // Get the value from the input when the form is submitted
  const query = e.target[0].value;

  // If there is no query value, don't send the API request
  if (!query.trim()) {
    alert("Please perform a valid search!!");

    // Stop the function
    return;
  }

  // Render the loader
  ui.renderLoader();

  // Dynamically render the title
  ui.title.innerText = `Results for ${query}`;

  // Send an API request with the query obtained from the form and get the data
  const songs = await api.getSearchMusics(query);

  // Render the searched songs on the UI
  ui.renderCards(songs);
});

// ! Function to play the song when the play icon is clicked
ui.list.addEventListener("click", (e) => {
  // If the play icon in the list area is clicked, play the music
  if (e.target.className == "play") {
    // Get the card containing the play icon
    const card = e.target.parentElement.parentElement;

    // Access the data attributes assigned to the card [image, title, subtitle, mp3]
    const songData = card.dataset;

    // Dynamically render the player section
    ui.renderPlayer(songData);
  }
});
