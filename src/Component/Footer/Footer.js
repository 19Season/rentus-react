import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Nav defaultActiveKey="/home"  bg="light" variant="light"    className="flex-column">
                    <div style={{display:"flex", margin:"auto"}}>
  <Nav.Link href="/" target="_blank"><GitHubIcon/>GitHub</Nav.Link>
  <Nav.Link eventKey="link-1" title="facebook"><FacebookIcon/>Facebook</Nav.Link>
  <Nav.Link eventKey="link-2"><InstagramIcon/>Instagram</Nav.Link>
  <Nav.Link style={{textDecoration:"none",color:"grey"}} target="_blank" href="https://www.instagram.com/seasonadhikari">Developed By Season Adhikari
  </Nav.Link>
  </div>
</Nav>
            </div>
        )
    }
}
