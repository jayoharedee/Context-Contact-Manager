import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import { Layover, Form } from '../Modal/'
import EditContact from '../Contact/EditContact'

class ContactActions extends Component {
  state = { open: false }

  render() {
    const { hideInfo, onShowClick, onDeleteClick } = this.props

    const showInfo = (
      <Icon
        name={`${hideInfo ? 'arrow up' : 'arrow down'}`}
        onClick={onShowClick}
        style={{ cursor: 'pointer' }}
      />
    )

    const handleModalClick = () => {
      this.setState(prevState => {
        return {
          open: !prevState.open,
        }
      })
    }

    const editUser = (
      <Icon
        name={'edit outline'}
        onClick={handleModalClick}
        style={{ cursor: 'pointer' }}
      />
    )

    const deleteUser = (
      <Icon name="user delete" style={{ cursor: 'pointer' }} />
    )

    const editContact = <EditContact />

    return (
      <React.Fragment>
        {showInfo}
        <Form
          trigger={editUser}
          open={this.state.open}
          onClick={handleModalClick}
          header="Edit Yourself"
          content={editContact}
        />
        <Layover
          trigger={deleteUser}
          onDeleteClick={onDeleteClick}
          closeOnDocumentClick
        />
      </React.Fragment>
    )
  }
}

ContactActions.propTypes = {
  hideInfo: PropTypes.bool,
  onShowClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default ContactActions
