// index.js
'use strict';
/* global shoppingList, cuid, api, store, $*/

// eslint-disable-next-line no-unused-vars
// const store = {
//   items: [
//     { id: cuid(), name: 'apples', checked: false },
//     { id: cuid(), name: 'oranges', checked: false },
//     { id: cuid(), name: 'milk', checked: true },
//     { id: cuid(), name: 'bread', checked: false }
//   ],
//   hideCheckedItems: false,
//   searchTerm: ''
// };

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(error => {
      console.error(error.message);
      let msg = error.message;
      alert(`${msg}`);
    });
}


$(main);

