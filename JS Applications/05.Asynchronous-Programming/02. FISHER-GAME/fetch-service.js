const catches = (function() {
   const url = `https://fisher-game.firebaseio.com/catches/`;
   function mkUrl(id) {
      return `${url}${id}.json`;
   }

   const get = data => {
      return fetch(mkUrl('')).then(res => res.json());
   };

   const post = data => {
      const headers = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      };

      return fetch(mkUrl(''), headers).then(res => res.json());
   };

   const put = (id, data) => {
      const headers = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      };

      return fetch(mkUrl(id), headers).then(res => res.json());
   };

   const del = id => {
      const headers = { method: 'DELETE' };

      return fetch(mkUrl(id), headers).then(res => res.json());
   };

   return {
      get,
      post,
      put,
      del,
   };
})();
