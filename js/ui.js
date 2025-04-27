export class UI {
  constructor() {
    this.list = document.querySelector("#list");
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  renderCards(songs) {
    // Clear the content of the list container
    this.list.innerHTML = "";

    // Create a card for each song
    songs.forEach((song) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Store song data in dataset attributes
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.image = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Set the inner HTML of the card
      card.innerHTML = `
        <figure>
          <img src="${song.images.coverarthq}" alt="card-image" />
          <div class="play">
            <i class="bi bi-play-fill"></i>
          </div>
        </figure>
        <div class="card-info">
          <h4>${song.title}</h4>
          <h4>${song.subtitle}</h4>
        </div>
      `;

      // Add the card to the list
      this.list.appendChild(card);
    });
  }

  renderLoader() {
    // Show a loading animation while data is being fetched
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
      </div>
    `;
  }

  toggleAnimation() {
    // Add or remove animation class on the song image
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
  }

  renderPlayer(song) {
    // Render the selected song in the player section
    this.player.innerHTML = `
      <div class="info">
        <img src="${song.image}" alt="" />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio controls autoplay src="${song.mp3}"></audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;

    // Add animation when the song is played or paused
    const audio = document.querySelector("audio");
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }
}
