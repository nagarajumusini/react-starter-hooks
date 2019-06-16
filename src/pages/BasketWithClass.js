import React, { Fragment } from 'react';
import { StateContext } from '../state';

class BasketWithClass extends React.Component {
  static contextType = StateContext;
  constructor(props) {
    super(props);
    this.state = {
      product : '',
      items: []
    }
    this.addProduct = this.addProduct.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
  }
  componentDidMount(){
    const [{basket}, dispatch] = this.context;
    this.setState({
      items: basket.items
    })
  }
  componentDidUpdate(prevProps, prevState){
    const [{basket}, dispatch] = this.context;
    if(basket.items !== this.state.items){
      this.setState({
        items: basket.items
      })
    }
  }
  onChangeProduct(e){
    this.setState({
      product: e.target.value
    })
  }
  addProduct(){
    const [{basket}, dispatch] = this.context;
    dispatch({
        type: 'addItem',
        payload: this.state.product
    })
  }
  render() {
    return (
      <Fragment>
        <h1>This bhasker class component</h1>
        {this.state.items.map(item => {
          return (
            <h3 key={item.id}>{item.name}</h3>
          )
        })}
        <input type="text" name="product" onChange={this.onChangeProduct} />
        <button
          onClick={this.addProduct}
        >
          Add product
        </button>
      </Fragment>
    )
  }
}

export default BasketWithClass;
