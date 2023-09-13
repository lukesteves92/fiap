const fetch = require("node-fetch"); 

//API Keys
const googleMapsApiKey = "";
const bookingApiKey = "";
 
function searchHotels(lat, long) {
  const bookingApiEndpoint = `https://distribution-xml.booking.com/2.0/json/hotels?latitude=${latitude}&longitude=${longitude}&radius=10&apikey=${bookingApiKey}`;
 
  fetch(bookingApiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      
    })
    .catch((error) => {
    
    });
}
 
function doSearch() {
  const userAddress = document.getElementById("campo-de-busca").value;
 
  const geocodingEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(enderecoUsuario)}&key=${googleMapsApiKey}`;
 
  fetch(geocodingEndpoint)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK" && data.results.length > 0) {
        const resultado = data.results[0];
        const lat = resultado.geometry.location.lat;
        const long = resultado.geometry.location.lng;
        console.log(`Latitude: ${lat}, Longitude: ${long}`);
 
        searchHotels(lat, long);
      } else {
        console.error("Não foi possível obter coordenadas para o endereço fornecido.");
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao chamar a API de Geocodificação do Google Maps:", error);
    });
}
