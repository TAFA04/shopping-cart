import React, { PureComponent } from 'react'
import './CartItem.css'
import PropTypes from 'prop-types'
import PlusButton from './PlusButton'

export const itemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
})

export default class Item extends PureComponent {
  static propTypes = {
    ...itemShape.isRequired,
    onChange: PropTypes.func.isRequired
  }
  incrementQuantity = () => {
    const { id, quantity, onChange } = this.props
    onChange(id, { quantity: quantity + 1 })
  }
  render() {
    const { name, price, quantity } = this.props

    return (
      <li className="Item">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <p className="quantity">{quantity}</p>
        <PlusButton onClick={this.incrementQuantity} />
      </li>
    )
  }
}
