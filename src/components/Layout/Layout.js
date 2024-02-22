import React from 'react'
import Header from './header'

const Layout = ({ List })=>{
    return(
        <>
        <Header/>
        <div>{ List }</div>
        </>
    )
}

export default Layout