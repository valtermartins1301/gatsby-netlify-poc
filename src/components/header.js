import { Link as LinkRaw } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {css} from '@emotion/core'
import styled from '@emotion/styled'

// Text
const baseText = css`
  margin: 0 auto;
`
const Text = styled.h1`
  ${baseText}
`

// Link
const baseLink = css`
  text-decoration: none;
  color: white;
`
const Link = styled(LinkRaw)`
  ${baseLink}
`

// HEADER
const baseHeader = css`
  margin-bottom: 1.45rem;
  height: 2.75em;
  text-align: center;
  background-image: linear-gradient(48deg,#44a19e,#34d089);
`

const Header = styled.header`
  ${baseHeader}
`


// ---------------------------------
const HeaderRaw = ({ siteTitle }) => (
  <Header>
    <Text>
      <Link to="/">
        {siteTitle}
      </Link>
    </Text>
  </Header>
)

HeaderRaw.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderRaw.defaultProps = {
  siteTitle: ``,
}

export default HeaderRaw
