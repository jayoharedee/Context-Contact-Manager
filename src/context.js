import React, { Component } from 'react'
import axios from 'axios'

import UID from './common/UID/'

const Context = React.createContext()

const reducer = (state, action) => {
  const contacts = state.contacts.slice()
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        contacts: [...contacts, action.payload],
      }
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: contacts.filter(
          contact => contact.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: UID(),
        name: 'Bob Smith',
        email: 'bob@mail.com',
        phone: '1-770-736-8031',
        hideInfo: false,
      },
      {
        id: UID(),
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        hideInfo: false,
      },
      {
        id: UID(),
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        hideInfo: false,
      },
    ],
    dispatch: action =>
      this.setState(state => reducer(state, action)),
    set: (name, value) => this.setState({ name: value }),
  }

  async componentDidMount() {
    // const getUsers = await axios.get(
    //   'https://jsonplaceholder.typicode.com/users'
    // )
    // this.setState({ contacts: getUsers.data })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
