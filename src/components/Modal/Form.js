import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'semantic-ui-react'

class Form extends Component {
  render() {
    const { header, content, open, trigger, onClick } = this.props
    return (
      <React.Fragment>
        <Modal open={open} trigger={trigger}>
          <Modal.Header>{header}</Modal.Header>
          <Modal.Content>{content}</Modal.Content>
          <Modal.Actions>
            <Button onClick={onClick} negative>
              No
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    )
  }
}

Form.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  trigger: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Form
