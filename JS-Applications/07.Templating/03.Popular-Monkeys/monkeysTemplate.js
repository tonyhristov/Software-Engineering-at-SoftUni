function showInfo(id) {
   const currentElement = document.getElementById(id);
   currentElement.style.display =
      currentElement.style.display === 'none' ? 'block' : 'none';
}

(() => {
   renderMonkeyTemplate();

   async function renderMonkeyTemplate() {
      const source = await fetch(
         'http://127.0.0.1:5500/07.Templating/03.Popular-Monkeys/templates/all-monkeys.hbs'
      ).then(res => res.text());

      const template = Handlebars.compile(source);
      const context = { monkeys: window.monkeys };
      const monkeysHtml = template(context);

      document.getElementById('all-monkeys').innerHTML = monkeysHtml;
   }
})();
