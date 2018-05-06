import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './PlusButton.css'

export default class PlusButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="PlusButton" onClick={this.props.onClick}>+</button>
    )
  }
}
