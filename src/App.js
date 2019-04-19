import React, { Component } from 'react'
import { Header, Footer } from './presentational';
import Button from '@material-ui/core/Button';


// import './styles.css'
export default class App extends Component {
  render() {
    return (
    <>
      <Header />
          <div>
            test
    
        <Button variant="contained" color="primary">
          Hello World BUTTON
        </Button>

          </div>
      <Footer />
    </>
    )
  }
}
