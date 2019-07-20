'use strict';
/* global $, shoppingList, api */

const api = (function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ahmike';
  
  function getItems() {
    return fetch(`${BASE_URL}/items`)
      .catch(err => {
        return shoppingList.handleError(err);
      });
  }

  function createItem(name) {
    const newItem = JSON.stringify({
      name
    });

    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem})
      .catch(err => {
        return shoppingList.handleError(err);
      });
  }

  function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    })
      .catch(err => {
        return shoppingList.handleError(err);
      });
  }

  function deleteItem(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .catch(err => {
        return shoppingList.handleError(err);
      });
  }


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());