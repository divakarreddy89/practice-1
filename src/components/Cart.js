import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, editItem } from './actions/cartActions'
import Recipe from './Recipe';
import EditItem from './Edit';
import './Cart.scss';


class Cart extends Component {
    state = {
        modalOpen: false,
        editItem: {},
        size: 's',
        qty: 1
    }
    handleEditItem = (item)=> {
        this.setState({
            modalOpen: true,
            editItem: item
        })
    }
    handleQty(qty) {
        this.setState({
            qty
        })
    }
    handleSize(size) {
        this.setState({
            size
        })
    }
    modalClose() {
        this.setState({
            modalOpen: false
        })
    }

    handleEdit(item) {
        const { editItem } = this.props;
        const { size , qty } = this.state;
        this.setState({
            modalOpen: false
        })
        editItem({...item, size, qty:Number(qty)})
    }

    render() {
        const { cartItems = [], removeItem } = this.props;
        const { modalOpen, editItem, size, qty } = this.state;
      return (
        <div className="container">
          <div className="shop-items">
            <div className="item-heading">
                <div>{cartItems.length} ITEMS</div>
                    <div>
                        <p>SIZE</p>
                        <p>QTY</p>
                        <p>PRICE</p>
                    </div>
                </div>
                <ul className="shop-collection">
                    {cartItems.map(item=>(
                        <li className="collection-item" key={item.id}>
                            <div className="item-theme">
                                <div className="item-img"> 
                                    <img src={item.img} alt={item.img} className=""/>
                                </div>
                                <div>
                                    <p className="title">{item.title.toUpperCase()}</p>
                                    <p>Style #: <b>{item.style}</b></p>
                                    <p>Color: <b>{item.color}</b></p>
                                    <div className="item-actions">
                                    <button className="edit" onClick={()=>{this.handleEditItem(item)}}>EDIT</button>
                                    <div className="divider"></div>
                                    <button className="remove" onClick={()=>{removeItem(item.id)}}>REMOVE</button>
                                    <div className="divider"></div>
                                    <button className="save">SAVE FOR LATER</button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-details-container">
                                <div className="item-details">
                                    <p>{item.size.toUpperCase()}</p>
                                    <p>
                                      <b>{item.qty}</b>
                                    </p> 
                                    <p>
                                    <b>$ {item.qty * item.price}</b>
                                    </p>
                                </div>
                            </div>
                        </li>  
                    ))}
                </ul>
            </div> 
            <Recipe />
            <EditItem 
                modal={modalOpen}
                item={editItem}
                size={size}
                qty={qty}
                handleQty={(qty)=>this.handleQty(qty)}
                handleSize={(size)=>this.handleSize(size)}
                handleEdit={(item)=>this.handleEdit(item)}
                modalClose={()=>this.modalClose()}
                />          
        </div>
        )
    }

};

const mapStateToProps = (state)=>({
    cartItems: state.items
})
const mapDispatchToProps = (dispatch)=>({
    removeItem: (id)=>{ dispatch(removeItem(id)) },
    editItem: (item)=>{ dispatch(editItem(item)) }
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)