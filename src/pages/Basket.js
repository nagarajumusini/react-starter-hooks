import React, {Fragment, useContext, useState} from 'react';
import { StateContext } from '../state';

function Basket() {
    const [{basket}, dispatch] = useContext(StateContext);
    const [product, setProduct] = useState({});

    const onChangeProduct = (ev) => {
        setProduct(ev.target.value);
    }
    const addProduct = () => {
        dispatch({
            type: 'addItem',
            payload: product
        })
    }
  return (
    <Fragment>
        <h1>This is Basket functional component</h1>
        {basket.items.map(item => {
            return (
                <h3 key={item.id}>{item.name}</h3>
            )
        })}
         <input type="text" name="product" onChange={onChangeProduct}/>
        <button
            onClick={addProduct}
            >
            Add product
            </button>
    </Fragment>
  );
}

export default Basket;
