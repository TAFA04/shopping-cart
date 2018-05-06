import React from 'react'
import { shallow } from 'enzyme'
import PlusButton from './PlusButton'
import sinon from 'sinon'

describe('<PlusButton />', () => {
  const onClickSpy = sinon.spy()
  const button = shallow(<PlusButton onClick={onClickSpy} />)

  it('has a wrapping button tag', () => {
    expect(button).toHaveTagName('button')
  })

  it('has a class name PlusButton', () => {
    expect(button).toHaveClassName('PlusButton')
  })

  it('shows "+"', () => {
    expect(button).toHaveText('+')
  })
  
  it('clicking the button calls `onClick`', () => {
    button.simulate('click')                                      // SIMULATE A CLICK
    expect(onClickSpy.callCount).toBe(1)                          // CHECK IF SPY WAS CALLED ONCE
  })
})
