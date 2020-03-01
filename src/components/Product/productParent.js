import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../redux/actions/product'
import NewModals from './addModal'


class ProductParent extends Component {

    getProducts(){
        this.props.dispatch(getProducts())
    }

    componentDidMount(){
        this.getProducts()
    }

    render(){
        const {products} = this.props
        return(
                <div className="row">
                    <div className="col-md-9" >
                        <div className="row" style={{paddingLeft:'50px'}}>
                        {products.map((product) =>
                            <div className="col-sm-4" key={product.id} style={{backgroundColor:'#d9d9d9', padding:'25px'}}>
                                <div className="card" style={{backgroundColor:'transparent', border:'0px solid black',margin:'-25px', width:'20rem'}} >
                                    <div className="card-body" style={{padding:'10px'}}>
                                        <img src={product.image} className="card-img" height="180px" alt=""/>
                                        <div className='row'>
                                            <div className='col-md-9'>
                                                <h5 className="card-title" style={{marginTop:'5px'}}>{product.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                        <NewModals />
                    <div className="cartbar col-md-3 bg-light" style={{height:'36rem'}}>
                        zulul
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products.products
    }
}

export default connect(mapStateToProps)(ProductParent)