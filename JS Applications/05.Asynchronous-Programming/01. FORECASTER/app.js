import { weatherFetch } from './/fetch.js';

const elements = {
   $location: () => document.getElementById('location'),
   $submit: () => document.getElementById('submit'),
   $current: () => document.getElementById('current'),
   $upcoming: () => document.getElementById('upcoming'),
   $forecast: () => document.getElementById('forecast'),
   $content: () => document.getElementById('content'),
};

const weatherSymbols = {
   sunny: `☀`,
   partlysunny: `⛅`,
   overcast: `☁`,
   rain: `☂`,
   degrees: `°`,
};

function attachEvents() {
   elements.$submit().addEventListener('click', loadWeatherInfo);

   function loadWeatherInfo() {
      const location = elements.$location().value;

      weatherFetch()
         .locations()
         .then(locations => {
            return destructuringData(locations, location);
         })
         .then(([today, upcoming]) => {
            displayWeatherInfo(today, upcoming);
         })
         .catch(handleError);
   }

   function displayWeatherInfo(today, upcoming) {
      elements.$forecast().style.display = 'block';

      const { condition, low, high } = today.forecast;
      const { name } = today;
      const symbol = getNormalizedSymbol(condition);

      const $divForecastWrapper = createHtmlElement('div', ['forecasts']);

      const $spanWrapper = spanWrapper(
         low,
         high,
         symbol,
         condition,
         'condition',
         name
      );

      $divForecastWrapper.append($spanWrapper);
      elements.$current().appendChild($divForecastWrapper);

      displayUpcomingWeatherInfo(upcoming);
   }

   function displayUpcomingWeatherInfo(upcoming) {
      const $divWrapper = createHtmlElement('div', ['forecast-info']);

      upcoming.forecast.forEach(obj => {
         const { condition, low, high } = obj;
         const symbol = getNormalizedSymbol(obj.condition);
         const $spanUpcoming = spanWrapper(
            low,
            high,
            symbol,
            condition,
            'upcoming'
         );
         $divWrapper.appendChild($spanUpcoming);
      });
      elements.$upcoming().appendChild($divWrapper);
   }

   function spanWrapper(low, high, symbol, condition, className, name) {
      const degreesInfo = `${low}${weatherSymbols.degrees}/${high}${weatherSymbols.degrees}`;
      const wrapper = createHtmlElement('span', [className]);

      const $spanSymbol = createHtmlElement(
         'span',
         ['symbol'],
         weatherSymbols[symbol]
      );
      const $spanName = createHtmlElement('span', ['forecast-data'], name);
      const $spanDegree = createHtmlElement(
         'span',
         ['forecast-data'],
         degreesInfo
      );
      const $spanCondition = createHtmlElement(
         'span',
         ['forecast-data'],
         condition
      );

      wrapper.append($spanSymbol, $spanName, $spanDegree, $spanCondition);
      return wrapper;
   }

   function destructuringData(locations, location) {
      const { code, name } = locations.find(obj => obj.name === location);
      return Promise.all([
         weatherFetch().today(code),
         weatherFetch().upcoming(code),
      ]);
   }

   function getNormalizedSymbol(symbol) {
      return symbol
         .split('')
         .filter(c => c !== ' ')
         .map(c => c.toLowerCase())
         .join('');
   }

   function createHtmlElement(tagName, classNames, textContent) {
      const element = document.createElement(tagName);

      if (classNames) {
         element.classList.add(...classNames);
      }

      if (textContent) {
         element.textContent = textContent;
      }

      return element;
   }

   function handleError() {
      elements.$forecast().style.display = 'block';
      const message = `Error`;
      const $error = createHtmlElement('h1', [], message);
      elements.$forecast().appendChild($error);
   }
}

attachEvents();
