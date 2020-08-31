function attachEventsListeners() {
   const convertFrom = {
      days: days => {
         const hours = days * 24;
         const minutes = hours * 60;
         const seconds = minutes * 60;

         return [hours, minutes, seconds];
      },
      hours: hours => {
         const days = hours / 24;
         const minutes = hours * 60;
         const seconds = minutes * 60;

         return [days, minutes, seconds];
      },
      minutes: minutes => {
         const hours = minutes / 60;
         const days = hours / 24;
         const seconds = minutes * 60;

         return [days, hours, seconds];
      },
      seconds: seconds => {
         const minutes = seconds / 60;
         const hours = minutes / 60;
         const days = hours / 24;

         return [days, hours, minutes];
      },
   };

   const daysField = document.getElementById('days');
   const hoursField = document.getElementById('hours');
   const minutesField = document.getElementById('minutes');
   const secondsField = document.getElementById('seconds');

   function converter(
      currentInputField,
      unit,
      firstResultField,
      secondResultField,
      thirdResultField
   ) {
      const value = Number(currentInputField.value);

      let [firstUnit, secondUnit, ThirdUnit] = convertFrom[unit](value);

      firstResultField.value = firstUnit;
      secondResultField.value = secondUnit;
      thirdResultField.value = ThirdUnit;
   }

   document
      .getElementById('daysBtn')
      .addEventListener('click', () =>
         converter(daysField, 'days', hoursField, minutesField, secondsField)
      );

   document
      .getElementById('hoursBtn')
      .addEventListener('click', () =>
         converter(hoursField, 'hours', daysField, minutesField, secondsField)
      );

   document
      .getElementById('minutesBtn')
      .addEventListener('click', () =>
         converter(minutesField, 'minutes', daysField, hoursField, secondsField)
      );

   document
      .getElementById('secondsBtn')
      .addEventListener('click', () =>
         converter(secondsField, 'seconds', daysField, hoursField, minutesField)
      );
}
