import React, { Component } from 'react'


class CategoryNavbar extends Component{
    render(){
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{width:'100%'}}>
                <a className="navbar-brand">FamiRest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/newHome">Home <span className="sr-only">(current)</span></a>
                        <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#categoryModal" style={{backgroundColor:'transparent', border:'0px solid black'}}>
                            <i className="material-icons" style={{color:'grey'}}>add_to_queue</i>
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default CategoryNavbar