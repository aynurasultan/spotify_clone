const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "eb936d37c1msh23a801c1216d2d9p1f5fffjsna1063a68f2a4",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  // Function to get popular music from the API
  async getPopular() {
    // Send a request to the API and convert the returned data into a usable format for the project
    try {
      // Send a request to the API
      const response = await fetch(
        "https://shazam.p.rapidapi.com/search?term=abba",
        options
      );
      // Convert the response from the API to a JavaScript object
      const data = await response.json();

      // Convert the data received from the API into a format we can use in the project
      const formattedData = data.tracks.hits.map((item) => item.track);

      // Return the formatted data when the function is called
      return formattedData;
    } catch (error) {
      // If an error occurs, catch it and alert the user with an error message
      alert(error);
    }
  }

  // Function to get songs based on a search query from the API
  async getSearchMusics(query) {
    // Get songs from the API based on the search term and convert the data into a usable format for the project
    try {
      // Send a request to the API with the search term
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        options
      );
      // Convert the response from the API to a JavaScript object
      const data = await res.json();

      // Convert the data received from the API into a format we can use in the project
      const formattedData = data.tracks.hits.map((item) => item.track);

      // Return the formatted data when the function is called
      return formattedData;
    } catch (error) {
      // If an error occurs, catch it and alert the user with an error message
      alert(error);
    }
  }
}
