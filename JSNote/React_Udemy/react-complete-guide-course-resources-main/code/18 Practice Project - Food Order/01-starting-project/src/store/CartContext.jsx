import { createContext, useReducer } from 'react';

//create such a new context object, and a  provider property, which is a component
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});
// 定义 reducer 函数，用于处理不同的动作类型
function cartReducer(state, action) {
    if (action.type == 'ADD_ITEM'){
        // state.items.push()
        const existingCartItemIndex = state.items.findIndex((item)=>{
            return item.id === action.item.id
        });
        //avoid editing the existing state in memery
        const updatedItems = [...state.items];
        //already exist an item
        if (existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems }
    }

    if (action.type == 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item)=>{
            return item.id === action.id
        });
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if(existingItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex,1 );
        }else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {...state, items: updatedItems };
    }

    return state;
}

//function component, 通过上下文（Context）向整个应用的子组件提供购物车的状态信息和操作函数。
export function CartContextProvider({ children }){
    // useReducer 接收一个 reducer 函数和初始状态作为参数，并返回当前的状态和一个 dispatch 函数。reducer 函数根据不同的动作类型来处理状态更新，并返回新的状态。
    //cart 存储着当前的状态，它是通过 useReducer 中传递的 cartReducer 函数进行状态更新的。
    const [ cart, dispatchCartAction ] = useReducer(cartReducer, {items: [] });

//这两个函数内部通过 dispatchCartAction 函数派发了 'ADD_ITEM' 和 'REMOVE_ITEM' 两种动作类型，并传递了相应的数据，来触发购物车状态的更新。
    function addItem(item){
        dispatchCartAction({ type: 'ADD_ITEM', item: item});
    }

    function removeItem(id){
        dispatchCartAction({ type: 'REMOVE_ITEM', id});
    }
    //创建了一个名为 cartContext 的对象，包含了购物车的状态信息和操作函数。这个对象会被传递给 CartContext.Provider 的 value 属性，
    const cartContext = {
        items: cart.items,
        //它们分别用于分发添加和删除项目的动作。这样做是为了确保在 cartContext 对象中，这些函数将作为值存储，所以必须使用回调函数调用，而不是直接调用，并在需要时被调用。
        // addItem,
        addItem: (item) => {
          return  dispatchCartAction({type: 'ADD_ITEM', item: item})
        },
        removeItem
    };

    console.log(cartContext);
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
//will export CartContext and CartContextProvider at the same time.
export default CartContext;