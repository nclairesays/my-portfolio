import React, { Component } from 'react'
import {
    Paper,
    Typography,
    TextField,
    Button 
  } from '@material-ui/core'

export default class Footer extends Component {
//   render() {
//     return (
    //   <h1>
    //     FOOTER
    //   </h1>
//     <Typography variant='display1' align='center' gutterBottom>
//     FOOTER
//   </Typography>
//     )
//   }
// }
state = {
    exercises: [],
    title: ''
  }

handleChange = ({ target: { name, value } }) =>
this.setState({
  [name]: value
})
render() {
const { title } = this.state
return (
    <Paper>
 <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
  <form>
    <TextField
      name='title'
      label='Exercise'
      value={title}
      onChange={this.handleChange}
      margin='normal'
    />
    
<Button
          type='submit'
          color='primary'
          variant='raised'
        >
          Create
        </Button>
      </form>
    </Paper>
        )
  }
}