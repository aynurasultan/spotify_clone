const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d2849b9dd5msh676b2ffc75c6606p1c96d9jsn049d6a2a38a0",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  async getPopular() {
    try {
      const response = await fetch(
        "https://shazam.p.rapidapi.com/auto-complete?term=kiss",
        options
      );

      const data = await response.json();
      const formattedData = data.tracks.hits.map((item) => item.track);

      return formattedData;
    } catch (error) {
      alert(error);
    }
  }

  async getSearchMusics(query) {
    try {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        options
      );

      const data = await res.json();
      const formattedData = data.tracks.hits.map((item) => item.track);

      return formattedData;
    } catch (error) {
      alert(error);
    }
  }
}
