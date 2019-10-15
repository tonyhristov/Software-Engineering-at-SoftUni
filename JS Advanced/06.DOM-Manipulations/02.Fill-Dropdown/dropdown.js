function addItem() {
   const textField = document.getElementById('newItemText');
   const valueField = document.getElementById('newItemValue');
   const selectElement = document.getElementById('menu');

   const option = document.createElement('option');
   option.value = valueField.value;
   option.textContent = textField.value;
   selectElement.appendChild(option);

   valueField.value = '';
   textField.value = '';
}
