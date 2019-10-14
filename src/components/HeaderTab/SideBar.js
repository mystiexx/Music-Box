import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {MdAlbum} from 'react-icons/md'

export class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar">
                    <div className="web-title p-3">
                        <h6>Music Box</h6>
                    </div>
                    <div className="web-links p-4">
                        <Form className="form">
                            <Form.Control type="text" className="form" placeholder="Search..."/>
                        </Form>

                        <div className="links d-flex flex-column p-5">

                            <h6 className="text-center">Recent Plays</h6>
                            <MdAlbum/>
                            <h6 className="text-center">Albums</h6>

                            <h6 className="text-center">Artist</h6>
                    
                            <h6 className="text-center">Songs</h6>

                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default SideBar;
