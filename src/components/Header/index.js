import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const pathname = window.location.pathname

const page = 'home'

const setCurrent = { page }

const changePage = (e, target) => {
  setCurrent.page = target.name
}

const Branding = ({ branding }) => (
  <Menu fluid borderless>
    <Menu.Item
      as={Link}
      to="/contact/add"
      key="red"
      color="purple"
      name="add"
      active={setCurrent.page === 'add'}
      onClick={changePage}
    />
    <Menu.Item
      key="home"
      name="home"
      color="purple"
      position="right"
      as={Link}
      to="/"
      active={setCurrent.page === 'home'}
      onClick={changePage}
    />
  </Menu>
)

Branding.defaultProps = {
  branding: 'My App',
}

Branding.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Branding
