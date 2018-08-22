import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Header } from 'semantic-ui-react'
import axios from 'axios'

import { Consumer } from '../../context'
import ContactActions from './ContactActions'

class Contacts extends Component {
  onShowClick = id => {
    const contactsCopy = this.props.contacts.slice()

    const contacts = contactsCopy.map(item => {
      console.log(item.id)
      if (item.id === id) {
        item.hideInfo = !item.hideInfo
      }
      return item
    })

    this.setState({ contacts })
  }

  onDelete = async (id, dispatch) => {
    // delete to api with id param, attach response to payload
    // await axios.delete(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // )

    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    })
  }

  render() {
    return (
      <Consumer>
        {state => {
          const { contacts, dispatch } = state

          return (
            <React.Fragment>
              <Header as="h3" dividing>
                Your Contacts
              </Header>
              <Card.Group stackable itemsPerRow={2}>
                {contacts.map((contact, index) => {
                  return (
                    <Card color={contact.color} key={contact.id}>
                      <Card.Content>
                        <ContactActions
                          onShowClick={this.onShowClick.bind(
                            this,
                            contact.id
                          )}
                          onDeleteClick={this.onDelete.bind(
                            this,
                            contact.id,
                            dispatch
                          )}
                          hideInfo={contact.hideInfo}
                          contact={contact}
                        />

                        <Card.Header>{contact.name}</Card.Header>
                        {contact.hideInfo ? (
                          ''
                        ) : (
                          <React.Fragment>
                            <Card.Meta>{contact.email}</Card.Meta>
                            <Card.Description>
                              {contact.phone}
                            </Card.Description>
                          </React.Fragment>
                        )}
                      </Card.Content>
                    </Card>
                  )
                })}
              </Card.Group>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default Contacts
