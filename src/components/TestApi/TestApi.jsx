fetch('https://api.publicapis.org/entries', {
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });