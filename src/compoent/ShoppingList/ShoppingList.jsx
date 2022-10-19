import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShoppingList, listItem } from '../../Redux/ActionCreator';
import './ShoppingList.css';

const mapStateToProps = (state) => ({
    inputList: state.list.inputList,
    list: state.list.shoppingList
})

const mapDispatchToProps = dispatch => ({
    addItem: () => {dispatch(addToShoppingList())},
    listItem: (e) => {dispatch(listItem(e.target.value))}
})



class ShoppingList extends Component {

    componentDidMouunt() {
        addToShoppingList();
    }

    render() {
        const {inputList, addItem, list, listItem} = this.props;

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
                            <div className='input-group'>
                                {/* INPUT FIELD */}
                                <input type="text" className='form-control list-form'
                                                    value={inputList}
                                                    onChange={listItem}
                                                    />
                                <button type='submit' className='input-group-text' onClick={addItem} >ADD ITEM</button>
                            </div>
                        </div>
                        <div className="list-content">
                            <div className="row">
                                <div className="left-content">

                                    {list.length ?


                                    <div className="list-item">
                                        <h5>Your list items</h5>
                                        <ol>
                                        {list.map(listItem => {
                                            return (
                                                <div key={listItem.id}>
                                                    <li>{listItem.item}</li>
                                                </div>
                                                    )
                                                })}
                                        </ol>
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