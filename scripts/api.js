//api.js

'use strict';

const api = (function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ahmike';

  function getItems() {
    return fetch(`${BASE_URL}/items`)
    // .then(response => response.json());
    // .catch(error => console.log(error));
  }

  function createItem(name) {
    const newItem = JSON.stringify({
      name
    });

    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem});
  }

  return {
    getItems,
    createItem,
  };
}());