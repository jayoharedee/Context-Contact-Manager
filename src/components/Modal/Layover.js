import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class LayoverModal extends Component {
  state = { open: false }

  close = () => this.setState({ open: false })

  render() {
    const { trigger, onDeleteClick } = this.props

    return (
      <Modal
        trigger={trigger}
        basic
        size="small"
        onClose={this.close}
      >
        <Header icon="archive" content="Archive Old Messages" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable
            automatic archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={this.close}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={onDeleteClick}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

LayoverModal.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  trigger: PropTypes.PropTypes.object.isRequired,
}

export default LayoverModal
