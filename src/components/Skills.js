// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import '../styles/components/Skills.scss'

// class Skills extends Component {
//   render() {
//     let i = 0
//     console.log(this.props.skills)
//     return (
//       <div className='page' id='Skills'>
//       <div className='slide'>
//         <h1>Skills</h1>
//         <main className={'main'}>
//           <div className={'skills-description'}>
//           Skills and Experience!
//           </div>
//            <br/>
//           <div className={'skills-logos-container'}>
//             {this.props.skills.map( s => {
//               i++
//               return <div className={'skill'} key={s} style={{backgroundImage: `url(${s})` }}></div>
//             })}
//           </div>

//         </main>
//       </div>
//       </div>
//     )
//   }
// }

// // export default Skills

// const mapStateToProps = (state) => ({
//   skills: state.skills
// })

// const mapDispatchToProps = dispatch => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Skills)

// // export default Skills
