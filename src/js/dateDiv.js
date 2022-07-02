'use strict';
// [FIXME] switch to github secrets to hide api key
// const locationAPIKey = `at_6rjlSTsU7HWzYADPzCCz9Gwy3wh3V`;
const weatherAPIKey = `Cvxmc2Ogrv8h1fX7NH36GFk0zWn8roJA`;

// Date Elements
const dateDivEl = document.querySelector(`.date-div`);
const currentLocationEl = document.querySelector(`.current-location`);
const currentDayEl = document.querySelector(`.current-day`);
const currentDateEl = document.querySelector(`.current-date`);
const weatherIconEl = document.querySelector(`.weather-icon`);

// Get User's location data and sets location text and weathe icon
const getIPAddressData = async () => {
  fetch(
    ` https://geo.ipify.org/api/v2/country,city?apiKey=${locationAPIKey}&ipAddress=`
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      setWeatherIcon(
        getCityWeather(data.location.city + ', ' + data.location.region)
      );
      currentLocationEl.textContent = `${data.location.city}`;
    })
    .catch(err => console.log(err));
};

// Get unique key id to user's nearest city location
const getCityKey = async city => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${weatherAPIKey}&q=${city}`
  );
  const cityData = await response.json();
  return cityData[0];
};

// Get weather data and set weather icon
const getWeather = async location => {
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${weatherAPIKey}`
  );
  const weatherData = await response.json();

  return weatherData[0];
};

// Collects the Weather Icon for that location
const getCityWeather = async city => {
  const cityObject = await getCityKey(city);
  const cityWeather = await getWeather(cityObject.Key);
  // console.log(cityObject);
  // console.log(cityWeather);
  // console.log(cityWeather.WeatherIcon);

  return cityWeather.WeatherIcon;
};

// Displays a weather icon to html element
const setWeatherIcon = async weatherIcon => {
  const iconNumber = await weatherIcon;

  if (iconNumber <= 2) {
    weatherIconEl.src = `../svg/animated weather icons/day.svg`;
  } else if (iconNumber >= 3 && iconNumber <= 5) {
    weatherIconEl.src = `../svg/animated weather icons/cloudy-day-2.svg`;
  } else if (iconNumber >= 6 && iconNumber <= 11) {
    weatherIconEl.src = `../svg/animated weather icons/cloudy.svg`;
  } else if (iconNumber >= 12 && iconNumber <= 14) {
    weatherIconEl.src = `../svg/animated weather icons/rainy-4.svg`;
  } else if (iconNumber >= 15 && iconNumber <= 17) {
    weatherIconEl.src = `../svg/animated weather icons/thunder.svg`;
  } else if (iconNumber === 18) {
    weatherIconEl.src = `../svg/animated weather icons/rainy-6.svg`;
  } else if (iconNumber === 19) {
    weatherIconEl.src = `../svg/animated weather icons/rainy-7.svg`;
  } else if (iconNumber >= 20 && iconNumber <= 21) {
    weatherIconEl.src = `../svg/animated weather icons/snowy-1.svg`;
  } else if (iconNumber >= 22 && iconNumber <= 25) {
    weatherIconEl.src = `../svg/animated weather icons/snowy-6.svg`;
  } else if (iconNumber >= 26 && iconNumber <= 29) {
    weatherIconEl.src = `../svg/animated weather icons/rainy-7.svg`;
  } else if (iconNumber === 32) {
    weatherIconEl.src = `../svg/animated weather icons/cloudy.svg`;
  } else if (iconNumber >= 33 && iconNumber <= 38) {
    weatherIconEl.src = `../svg/animated weather icons/cloudy-night-3.svg`;
  } else if (iconNumber >= 39 && iconNumber <= 40) {
    weatherIconEl.src = `../svg/animated weather icons/rainy-6.svg`;
  } else if (iconNumber >= 41 && iconNumber <= 42) {
    weatherIconEl.src = `../svg/animated weather icons/thunder.svg`;
  } else if (iconNumber >= 43 && iconNumber <= 44) {
    weatherIconEl.src = `../svg/animated weather icons/snowy-6.svg`;
  }
};

// ///////////// //
// DATE SETTINGS //
// ///////////// //
const setDate = date => {
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let month = [];

  // set today's day to html
  currentDayEl.textContent = `${days[date.getDay()]}`;

  // set month to html
  const str = String(date).split(` `);
  const char = str[1].split(``);

  for (let i = 0; i < 3; i++) {
    month.push(char[i].toUpperCase());
  }

  currentDateEl.textContent = `${month.join(``)} ${str[2]}`;
};

const setGreeting = time => {
  const greetingEl = document.querySelector(`.greeting`);
  if (time >= 4 && time <= 10) {
    greetingEl.textContent = `Good morning`;
  } else if (time >= 11 && time <= 17) {
    greetingEl.textContent = `Good afternoon`;
  } else if ((time >= 18 && time <= 23) || (time >= 0 && time <= 3)) {
    greetingEl.textContent = `Good evening`;
  }
};

// /////////////////////
if (dateDivEl.children.length === 0) {
  dateDivEl.remove();
} else {
  setDate(new Date());
  setGreeting(new Date().getHours());
  // [NOTE] Uncomment to use location api.  Each use takes 1 unit.  Free users get 1000 units.s
  // getIPAddressData();
}

// /////////////////////
// [TODO] Create condition where src isn't changed by API, then adjust dateDiv
//  Remove weather icon img element if no tokens are present in APIs
// if (weatherIconEl.getAttribute(`src`) === ``) {
//   weatherIconEl.remove();
//   currentDayEl.style.transform = `translateY(120%)`;
//   currentDateEl.style.transform = `translateY(250%)`;
// }
