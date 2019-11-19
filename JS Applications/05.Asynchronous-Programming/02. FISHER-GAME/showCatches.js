function showAllCatches(allCatches) {
   Object.keys(allCatches).forEach(id => {
      const copy = elements.$exampleCatch().cloneNode(true);
      copy.setAttribute('data-id', id);
      copy.setAttribute('id', id);

      Object.keys(elements.$catch)
         .map(c => c.slice(1))
         .forEach(key => {
            copy.querySelector(`input.${key}`).value = allCatches[id][key];
         });

      elements.$catches().appendChild(copy);
   });

   [...document.querySelectorAll('button.delete')].forEach(b =>
      b.addEventListener('click', removeCatch)
   );

   [...document.querySelectorAll('button.update')].forEach(b =>
      b.addEventListener('click', updateCatch)
   );
   elements.$exampleCatch().remove();
}
