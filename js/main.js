// API classını import et
import { API } from "./api.js";
// UI classını import et
import { UI } from "./ui.js";

// API Clasını kullanabilmek için bunun örneğini al
const api = new API();

// UI classını kullanabilmek için bunun bir örneğini al
const ui = new UI();

// ! Sayfa yüklendiği an api isteği at
document.addEventListener("DOMContentLoaded", async () => {
  // Loaderı render et
  ui.renderLoader();
  // Api'dan şarkı verilerini al ve data değişkenine ata
  const songs = await api.getPopular();
  // Api'dan gelen veri ile cardları renderla
  ui.renderCards(songs);
});

// ! Form gönderildiğine inputtaki değere eriş ve api'dan inputtaki kelimeye ait şarkıları al
ui.form.addEventListener("submit", async (e) => {
  // Form gönderildiğinde sayfa yenilemesini engelle
  e.preventDefault();
  // Form gönderildiğinde inputtaki değere eriş
  const query = e.target[0].value;

  // Eğer query değeri yoksa api isteği atma
  if (!query.trim()) {
    alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz!!");

    // Fonksiyonu durdur
    return;
  }

  // Loaderı render et

  ui.renderLoader();

  // Title'ı dinamik şekilde renderla
  ui.title.innerText = `Results for ${query}`;

  // Form içerisinden elde edilen query değeri ile api'a istek at ve gelen veriyi data'ya aktar

  const songs = await api.getSearchMusics(query);

  // Aratılan şarkıları arayüze render et

  ui.renderCards(songs);
});

// ! Play ikonuna tıklanınca şarkı oynatma özelliği sağlayan fonksiyon

ui.list.addEventListener("click", (e) => {
  // Liste alanı içerisindeki play ikonuna tıklandıysa müzik çal
  if (e.target.className == "play") {
    // Play ikonunun kapsayıcısı olan card'a eriş
    const card = e.target.parentElement.parentElement;

    // Card'a atanan data özelliklerine [image,title,subtitle,mp3] eriş
    const songData = card.dataset;

    // Player alanını dinamik olarak renderla
    ui.renderPlayer(songData);
  }
});
