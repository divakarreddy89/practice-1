import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'


const initState = {
    items: [
        {id:1,title:'Winter body', color: 'blue',qty: 1, style:'MS12345', size: 's', price:110, img:Item1},
        {id:2,title:'Adidas', color: 'blue', qty: 1, style:'MS12345', size: 's', price:80, img: Item2},
        {id:3,title:'Vans', color: 'blue', qty: 1, style:'MS12345', size: 's', price:120, img: Item3},
        {id:4,title:'White', color: 'blue', qty: 1, style:'MS12345', size: 's',  price:260, img:Item4},
        {id:5,title:'Cropped-sho', color: 'blue', qty: 1, style:'MS12345', size: 's', price:160, img: Item5},
        {id:6,title:'Blues', color: 'blue', qty: 1, style:'MS12345', size: 's', price:90 ,img: Item6}
    ]

}

const cartReducer= (state = initState, action)=> {
  const { type, payload = [] } = action;
  switch (type) {
    case 'ADD_TO_CART':
      return {items: [Object.assign({}, payload), ...state.items.filter(item => item.id !== payload.id)]};
    case 'REMOVE_ITEM':
    console.log(state.items.filter(item => item.id !== payload.id))
        return { items: state.items.filter(item => item.id !== payload.id) }
    default:
      return state;
  }
    
}

export default cartReducer
