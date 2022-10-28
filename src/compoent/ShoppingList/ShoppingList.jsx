import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShoppingList, listItem, removeFromShoppingList } from '../../Redux/ActionCreator';
import './ShoppingList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = (state) => ({
    inputList: state.list.inputList,
    list: state.list.shoppingList
})

const mapDispatchToProps = dispatch => ({
    listItem: (e) => {dispatch(listItem(e.target.value))},
    addItem: (e) => {dispatch(addToShoppingList(e.preventDefault()))},
    removeItem: (item) => {dispatch(removeFromShoppingList(item))}
})



class ShoppingList extends Component {

    componentDidMouunt() {
        addToShoppingList();
        removeFromShoppingList();
    }

    render() {
        const {inputList, addItem, list, listItem, removeItem} = this.props;

        return(
            <div className='shoppingList'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 heading">
                            <h2>SHOPPING LIST</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="list-body">
                        <h3>Create a shopping list</h3>
                        <div className="input">
                            <form className='input-group'>
                                {/* INPUT FIELD */}
                                <input type="text" className='form-control list-form'
                                                    value={inputList}
                                                    onChange={listItem}
                                                    />
                                <button type='submit' className='input-group-text' onClick={addItem} >ADD ITEM</button>
                            </form>
                        </div>
                        <div className="list-content">
                            <div className="row">
                                <div className="left-content">

                                    {list.length ?
                                    
                                    <div className="list">
                                        <h4>Your list items</h4>
                                        <ul>
                                        {list.map(listItem => {
                                            return (
                                                <div key={listItem.id}>
                                                    <li>
                                                        <div className='list-item'>
                                                            <p>{listItem.item}</p>
                                                            <span onClick={()=>removeItem(listItem)}><FontAwesomeIcon icon='trash' className='remove-list' /></span>
                                                        </div>
                                                    </li>
                                                </div>
                                                    )
                                                })}
                                        </ul>
                                    </div>

                                    : <div className="empty-list">
                                        <h3>Your shopping list is empty</h3>
                                        <p>Add an Item to your list</p>
                                    </div>
                                    }

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);