import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Contact from '../images/contact.jpg'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div>
                    <img style={{ maxWidth:"100%"}} src={Contact}></img>
                    <p></p>
                </div>
                <div><Footer/></div>
            </div>
        )
    }
}
