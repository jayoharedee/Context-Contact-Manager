import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import { Provider } from './context'

import Header from './components/Header/'
import Contact from './components/Contact/'
import AddContact from './components/Contact/AddContact'
import NotFound from './components/NotFound/'

import './styles.css'

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <Container>
            <Switch>
              <Route exact path="/" component={Contact} />
              <Route
                exact
                path="/contact/add"
                component={AddContact}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
