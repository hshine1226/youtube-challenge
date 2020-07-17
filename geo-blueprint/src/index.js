const loading = document.getElementById("js-loading");

const API_URL = "http://ip-api.com/json/";

const getMyLocation = async () => {
  try {
    const response = await fetch(API_URL);
    const location = await response.json();
    console.log(location);
    const country = location.country;
    const region = location.regionName;
    setTimeout(function () {
      loading.innerHTML = `You are located in ${region}, ${country} `;
    }, 2000);
  } catch (err) {
    console.log(err);
  }
};

getMyLocation();
