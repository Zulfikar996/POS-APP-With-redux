import React, { Component } from 'react'


class NewNavbar extends Component{
    render(){
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{width:'63.6rem'}}>
                <a className="navbar-brand">FamiRest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/newHome">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/Category">Category</a>
                        <a className="nav-item nav-link" href="#">Sort By</a>
                        <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#exampleModal" style={{backgroundColor:'transparent', border:'0px solid black'}}>
                            <i className="material-icons" style={{color:'grey'}}>
                               add_to_queue
                            </i>
                        </button>
                        <div class="form-inline my-2 my-lg-0" style={{marginLeft:'25rem'}}>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NewNavbar