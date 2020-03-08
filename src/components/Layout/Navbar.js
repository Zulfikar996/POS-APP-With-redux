import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import { filterProduct } from '../redux/actions/product'

class NewNavbar extends Component{
    
    state={
        name: '',
        category: '',
    }
    
    filterCategory = event => {
        this.setState({
          category: event.target.value
        })
        console.log(event.target.value)
        this.props.dispatch(filterProduct(event.target.value, this.state.name))
      }
    
      searchProduct = event => {
        this.setState({
          name: event.target.value
        })
        console.log(event.target.value)
        this.props.dispatch(filterProduct(this.state.category, event.target.value))
      }
    
    onChangeHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const {categorys, onClickl} = this.props
        const ValidasiForm = () => {
            if (localStorage.getItem('Status') == '1'){
                return(
                    <Fragment>
                        <span ><Link to="/category" className="nav-item nav-link" >Category</Link></span>
                        <button type="button" className="add btn btn-outline-light" data-toggle="modal" data-target="#exampleModal" style={{backgroundColor:'transparent', border:'0px solid black'}}>
                            <i className="material-icons" style={{color:'grey'}}>
                            add_to_queue
                            </i>
                        </button>
                    </Fragment>
                )
            }
            else {
                return(
                    <Fragment />
                )
            }
        }
        return(
            <Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{width:'63.6rem', height:'63px'}}>
                <a className="navbar-brand">FamiRest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/newHome">Home <span className="sr-only">(current)</span></a>
                        <ValidasiForm />
                        <span to="/login"><Link className="nav-item nav-link" onClick={onClickl}>Logout</Link></span>
                        <div className="input-group mb-3" style={{marginLeft:'20em', height:'30px', marginTop:'9px'}}>
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect01">Filter</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" onChange={this.filterCategory}>
                            <option selected value={0} disabled>Choose...</option>
                            <option selected value={''}>All</option>
                                        { categorys.map((category, index) => 
                                        <option key={index} value={category.name}>
                                            {category.name}
                                        </option>
                                    )}
                            </select>
                            </div>
                        <div className="form-inline my-2 my-lg-0">
                            <input onChange={this.searchProduct} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                </div>
            </nav>
            </Fragment>
        )
    }
}

export default connect()(NewNavbar)