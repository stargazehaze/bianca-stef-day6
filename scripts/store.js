/* global cuid */
//eslint-disable-next-line no-unused vars
const store = (function () {
   //const foo = 'bar';

    const items = [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ];
    const hideCheckedItems = false;
    const searchTerm = '';
    return {
        items: items,
        hideCheckedItems: hideCheckedItems,
        searchTerm: searchTerm
    };
    const findById = function(id){
        return store.items.find(item => item.id === id);
    };
    const addItem = function(name){
        try {
            Item.push(this.items);
        }catch(e){

        }
    };
    const findAndToggleChecked = function(id){
        let item = this.findById(id);
        item.checked = !item.checked;
    };
    const findAndUpdateName = function(id, newName){
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
    
    return {
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete,
    };

}() );