'use strict';
/* global shoppingList, cuid, api, store, $*/

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => {
      return shoppingList.handleError(err);
    });
}


$(main);

