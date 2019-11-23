import React from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'


const Recipe = ({cartItems, addShipping, substractShipping}) => {
    const getTotalPrice = () => cartItems.reduce((acc, item)=> acc+(item.price*item.qty), 0)
    return (
        <div className="price-container">
            <div className="support-field">{''}</div>
            <div className="price-details">
                <div className="price-section">
                    <div>ENTER PROMOTION CODE</div>
                    <div className="promo-code">
                    <input type="text" value="AJ10"/>
                        <button type="button">APPLY</button>
                    </div>
                </div>
                <div className="price-section">
                    <div>
                       SUB TOTAL:
                    </div>
                    <div>
                    $ {getTotalPrice()}
                    </div>
                </div>
                <div className="price-section">
                    <div>
                        PROMOTION CODE AJ10 APPLIED:
                    </div>
                    <div>
                    $ {getTotalPrice()/10}
                    </div>
                </div>
                <div className="price-section">
                    <div>
                        ESTIMATED TOTAL:
                    </div>
                    <div>
                    $ {getTotalPrice() - (getTotalPrice()/10)}
                    </div>
                </div>
                <div className="checkout">
                    <button className="button">Checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    cartItems: state.items
})

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
