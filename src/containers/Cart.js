import React, { PureComponent } from 'react'
import Item, { itemShape } from '../components/CartItem'
import PropTypes from 'prop-types'
import './Cart.css'
import Clock from 'react-live-clock';


export default class Cart extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(itemShape).isRequired,
    updateItem: PropTypes.func.isRequired,
  }
  render() {
    const { items, updateItem } = this.props

    return (
      <div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <ul className="Cart">
          {items.map((item, index) => (
            <Item
              key={index}
              onChange={updateItem}
              { ...item }
            />
          ))}
        </ul>
      </div>
    )
  }
}
