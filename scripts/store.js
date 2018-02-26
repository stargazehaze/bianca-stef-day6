'use strict';
/* global Item, cuid */
//eslint-disable-next-line no-unused vars
const store = (function () {
  //const foo = 'bar';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true }];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    return store.items.find(item => item.id === id);
  };
  //something funny going on below here
  const addItem = function(name){
    try {
      Item.validateName(name);
      Item.create(name);
      this.items.push(name);
    }catch(e){
      console.log('This is an error.');
    }
  };
  const findAndToggleChecked = function(id){
    let item = this.findById(id);
    item.checked = !item.checked;
  };
  const findAndUpdateName = function(id, newName){
    let item = this.findById(id);
    try {
      Item.validateName();
      findById(item);
    }catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  };
  const findAndDelete = function(id){
    return this.items.filter(id);
  };
  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };
  const setSearchTerm = function(){
    //unsure out this question 5 bullet 1b
    return this.searchTerm = val(0);
  };
    
  return {
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm
  };

}() );