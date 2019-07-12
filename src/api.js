function getData(url) {
  return fetch(url).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
  });
}

export default getData;
