import React, { Fragment, PureComponent } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import Sketch from '../assets/sketches/sketch.js'
import { Helmet } from 'react-helmet'
import '../assets/Sass/globalstyle.scss'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'P5 Reactron',
      spiel: 'Welcome to the electron p5 react app',
      info: 'This text is coming from a constructor/ super prop inside a class component'
    }
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>P5 Reactron</title>
          <meta name="description" content="creative business consultancy for start-ups, scale-ups & entrepreneurs." />
          <meta name="keywords" content="Digital Wonderland, Blog Page, Brighton, London, UK, Web Design Experts, UX Design, UI Design, Business Transformation, Affordable web design, Brand Identity, Branding, Visual Identity, Web Design, Mobile app, Saas, Wordpress, React, Vue, Angular, javascript, js, node, service, ecommerce, digital agency, experts, expertise, local, national, international" />
          <meta name="author" content="Sean King, Sorn King, Digital Wonderland" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Row>
          <Col>
            <Sketch />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default App
