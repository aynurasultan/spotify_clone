import { API } from "./api.js";
import { UI } from "./ui.js";

const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  // Show the loader initially
  ui.renderLoader();

  // Fetch popular songs
  const songs = await api.getPopular();

  // Render the songs
  ui.renderCards(songs);
});

ui.form.addEventListener("submit", async (e) => {
  // Prevent page refresh when the form is submitted
  e.preventDefault();

  // Get the value from the input when the form is submitted
  const query = e.target[0].value;

  // If the query is empty, don't make the API request
  if (!query.trim()) {
    alert("Please enter a valid search term!");

    // Stop the function
    return;
  }

  // Render the loader
  ui.renderLoader();

  // Dynamically update the title
  ui.title.innerText = `Results for ${query}`;

  // Make the API request with the query from the form and assign the returned data to 'songs'
  const songs = await api.getSearchMusics(query);

  // Render the searched songs on the UI
  ui.renderCards(songs);
});

// ! Function to play the song when the play icon is clicked

ui.list.addEventListener("click", (e) => {
  // If the play icon inside the list is clicked, play the song
  if (e.target.className == "play") {
    // Access the card containing the play icon
    const card = e.target.parentElement.parentElement;

    // Access the data attributes assigned to the card [image, title, subtitle, mp3]
    const songData = card.dataset;

    // Dynamically render the player section
    ui.renderPlayer(songData);
  }
});
