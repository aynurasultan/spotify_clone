export class UI {
  // Constructor method
  constructor() {
    // Access HTML elements
    this.list = document.querySelector("#list");
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  // Function to render the interface based on song data from the API
  renderCards(songs) {
    // Reset the content of the song list area in HTML
    this.list.innerHTML = "";
    // Use the provided song data to create HTML for each song
    songs.forEach((song) => {
      // Create a card element
      const card = document.createElement("div");

      // Add the "card" class to the created element
      card.classList.add("card");

      // Assign the song's image, music, title, and artist or band information to the card
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.image = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Define the HTML content for the created element. Make each song card's content dynamic
      card.innerHTML = `   
              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>
            `;

      // Append the created card with its defined content and class to the list in the HTML
      // Using `this` is necessary to access the structure within the class
      this.list.appendChild(card);
    });
  }

  // Function to render a loader
  renderLoader() {
    this.list.innerHTML = ` 
      <div class="loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
      </div>`;
  }

  // Function to toggle animation
  toggleAnimation() {
    // Access the image inside the player
    const image = document.querySelector(".info img");
    // If the image doesn't have the "animate" class, add it; if it has it, remove it
    image.classList.toggle("animate");
  }

  // Function to dynamically render the player section
  renderPlayer(song) {
    // Dynamically render the player section using the values provided as parameters

    this.player.innerHTML = ` 
      <div class="info">
        <img
          src="${song.image}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio
        controls
        autoplay
        src="${song.mp3}"
      ></audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    // To add animation to the song image based on its play state, add event listeners for play and pause to the audio tag
    const audio = document.querySelector("audio");

    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }
}
