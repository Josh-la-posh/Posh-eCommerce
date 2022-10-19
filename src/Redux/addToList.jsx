import * as ActionTypes from './ActionTypes';

const initialState = {
    inputList: '',
    shoppingList: localStorage.getItem('List') 
    ? JSON.parse(localStorage.getItem('List')) 
    : []
}

export const List = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.LISTITEM:
            return {
                ...state,
                inputList: action.payload
            }
        case ActionTypes.ADDTOSHOPPINGLIST:
            const inputList = state.inputList
            const shoppingList = [...action.payload.shoppingList];
            const existingItem = shoppingList.filter(listItem => listItem.item.toLowerCase() === inputList.toLowerCase());
            if (!inputList) {
                alert('Please add an item to your Shopping List')
            } else if (inputList.length < 3) {
                alert('Item should be greater than 3 characters')
            } else if (existingItem.length) {
                alert('Hey!!! You have this item added to your Shopping List. Check item ' + existingItem[0].id);
                console.log(existingItem)
            } else {
                const newItem = {id: shoppingList.length + 1, item:inputList}
                shoppingList.push(newItem)
                localStorage.setItem('List', JSON.stringify(shoppingList))
            }
            
            return {
                ...state,
                shoppingList
            }
        default:
            return state;
    }
}