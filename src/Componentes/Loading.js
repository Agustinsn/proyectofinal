import React from 'react'
import {Spinner} from 'reactstrap'

function Loading() {
    return (
        <div
        style={{
        position:'fixed',
        top:'0',
        left:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:'99'
        }}
        >
        <Spinner type="grow" style={{width:'50px'}} color="primary"/>
        
        </div>
    )
}

export default Loading
