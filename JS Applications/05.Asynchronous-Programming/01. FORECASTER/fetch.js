export function weatherFetch() {
   const url = `https://judgetests.firebaseio.com/`;

   function composeUrl(locationsOrForecast, day, code) {
      if (locationsOrForecast === 'locations') {
         return `${url}${locationsOrForecast}.json`;
      } else {
         return `${url}${locationsOrForecast}/${day}/${code}.json`;
      }
   }

   return {
      locations: () =>
         fetch(composeUrl('locations', '', '')).then(res => res.json()),
      today: code =>
         fetch(composeUrl('forecast', 'today', code)).then(res => res.json()),
      upcoming: code =>
         fetch(composeUrl('forecast', 'upcoming', code)).then(res =>
            res.json()
         ),
   };
}
