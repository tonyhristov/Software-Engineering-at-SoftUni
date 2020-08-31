function updateCatch(e) {
   const id = e.currentTarget.parentNode.getAttribute('data-id');

   let inputs = document.getElementById(id).getElementsByTagName('input');
   let newContent = {
      angler: inputs[0].value,
      weight: inputs[1].value,
      species: inputs[2].value,
      location: inputs[3].value,
      bait: inputs[4].value,
      captureTime: inputs[5].value,
   };

   catches.put(id, newContent).then(() => {
      alert(`Successfully Updated => click "Load" to see`);
      window.location.reload();
   });
}
