export function getPartials() {
   return {
      header: './views/common/header.hbs',
      footer: './views/common/footer.hbs',
   };
}

export function setHeaderInfo(ctx) {
   ctx.isAuth = sessionStorage.getItem('authtoken') !== null;
   ctx.username = sessionStorage.getItem('username');
}

function fadeAway(box) {
   const fadeEffect = setInterval(() => {
      if (!box.style.opacity) {
         box.style.opacity = 1;
      }

      if (box.style.opacity > 0) {
         box.style.opacity -= 0.1;
      } else {
         clearInterval(fadeEffect);
         box.style.opacity += 1;
         box.style.display = 'none';
      }
   }, 40);
}

export function displaySuccess(message) {
   const successBox = document.getElementById('successBox');

   successBox.style.display = 'block';
   successBox.textContent = message;

   setTimeout(() => {
      fadeAway(successBox);
   }, 1500);
}

export function displayLoading() {
   const loadingBox = document.getElementById('loadingBox');

   loadingBox.style.display = 'block';

   setTimeout(() => {
      fadeAway(loadingBox);
   }, 5000);
}

export function displayError(message) {
   const errorBox = document.getElementById('errorBox');

   errorBox.style.display = 'block';
   errorBox.textContent = message;

   setTimeout(() => {
      fadeAway(errorBox);
   }, 1500);
}
