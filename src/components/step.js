import React from "react"
import PropTypes from "prop-types"
import {css} from '@emotion/core'
import styled from '@emotion/styled'

const STEPS = ['1', '2', '3', '4'];

// Navigation
const baseNav = css`
  text-align: center;
`
const Nav = styled.nav`
  ${baseNav}
`

// orderedList
const baseOrderedList = css`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`
const OrderedList = styled.ol`
  ${baseOrderedList}
`
// list item
const baseItemList = css`
  padding: 0 0 1.2rem;
  height: 1.25rem;
  width: 1.25rem;
  margin: 0 1.2em;
  border-radius: 50%;
  color: #a6a6a6;
  border: .0625em solid #a6a6a6;
  font-size: .75em;
`
const activeItem = ({active}) => active && css`
  font-weight: bold;
  color: #767676; 
  border: .125em solid #767676;
`

const ListItem = styled.li`
  ${baseItemList}
  ${activeItem}
`

// --------------------------
const Step = ({ selected }) => (
  <Nav>
    <OrderedList>
      {STEPS.map((step, index) => {
        const active = selected === step;

        return <ListItem key={index} active={active}>
          {step}
        </ListItem>
      })}
    </OrderedList>
  </Nav>
)

Step.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default Step
