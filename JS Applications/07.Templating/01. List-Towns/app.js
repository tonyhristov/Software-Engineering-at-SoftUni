const elements = {
   $container: () => document.getElementById('root'),
   $loadBtn: () => document.getElementById('btnLoadTowns'),
   $towns: () => document.getElementById('towns'),
};

(function() {
   elements.$loadBtn().addEventListener('click', async function(e) {
      e.preventDefault();
      const towns = elements.$towns().value.split(', ');

      const source = await fetch(
         'http://127.0.0.1:5500/07.Templating/01.%20List-Towns/towns.hbs'
      ).then(res => res.text());

      const template = Handlebars.compile(source);
      const context = { towns };
      const townsHtml = template(context);

      elements.$container().innerHTML = townsHtml;
   });
})();
