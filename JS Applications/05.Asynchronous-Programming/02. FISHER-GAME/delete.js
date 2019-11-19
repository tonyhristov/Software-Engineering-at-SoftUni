function removeCatch(e) {
   const id = e.currentTarget.parentNode.getAttribute('data-id');
   catches.del(id).then(() => {
      alert(`Successfully Deleted => click "Load" to see`);
      window.location.reload();
   });
}
