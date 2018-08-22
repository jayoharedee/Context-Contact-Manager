import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const NotFound = () => (
  <React.Fragment>
    <Segment color="red">
      404 Page Not Found!
      <Segment circular style={square}>
        <Header as="h2">
          Page,
          <Header.Subheader>status</Header.Subheader>
        </Header>
      </Segment>
      <Segment circular inverted style={square}>
        <Header as="h2" inverted>
          Not Found!
          <Header.Subheader>404</Header.Subheader>
        </Header>
      </Segment>
    </Segment>
  </React.Fragment>
)

export default NotFound
