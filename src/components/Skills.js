import React, { Component } from 'react'
import { connect } from 'react-redux'


class Skills extends Component {
  render() {
    let i = 0
    console.log(this.props.skills)
    return (
      <div className='page' id='Skills'>
      <div className='slide'>
        <h1>Skills</h1>
        <main className={'main'}>
          Here's some technologies I've worked with:
          {/* {this.props.skills.map( s => {
            i++
            return <div className={'skill'}>
              <img src={s} alt={i} />
              {i++}
            </div>
          })} */}

        </main> 
      </div>
      </div>
    )
  }
}

// export default Skills

const mapStateToProps = (state) => ({
  skills: state.skills
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Skills)




