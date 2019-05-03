import React from 'react'


const Slide = (props) => {
    return <div className='page' id={props.slideID}>
    <div className='slide'>
        <h1>{props.slideTitle}</h1>
        <main className={'main'}>
            {props.mainContent}
        </main>
        </div>
    </div>
}

export default Slide