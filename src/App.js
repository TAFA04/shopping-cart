import React, { Component } from 'react';
import Cart from './containers/Cart'
import './App.css';
import Checkout from './components/CheckoutButton'

const items = [
  { id: 1, name: 'Trashcan', price: 44.75, quantity: 1 },
  { id: 2, name: 'Teddybear', price: 7.30, quantity: 1 },
  { id: 3, name: 'Microwave', price: 64.25, quantity: 1 },
]

class App extends Component {
  state = { items }
  onPlusClick = (itemId, updates) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id !== itemId) return item
        return { ...item, ...updates }
      })
    })
  }
  getTotalPrice = () => {
    const total = this.state.items
      .map(item => item.quantity * item.price)
      .reduce((a,b) => a+b)
    this.setState({ getTotalPrice: `${total}`
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Your Shopping Cart</h1>
        <Cart
          items={this.state.items}
          updateItem={this.onPlusClick}
        />
        <Checkout
          onClick={this.getTotalPrice}
        />
        <ul className="App">
          Your total price is: {this.state.getTotalPrice}
        </ul>
      </div>
    );
  }
}


export default App;
