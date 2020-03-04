import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../redux/actions/product'
import { getCategory } from '../redux/actions/category'
import NewModals from './addModal'
import EditModals from './editModal'
import NewNavbar from '../Layout/Navbar'
import DeleteModal from './deleteModal'
import { addToCart } from '../redux/actions/cart'


class ProductParent extends Component {

    state={
        idProduct:'',
    }

    onAddToCart=(data)=>{
        // console.log(data)
        this.props.dispatch(addToCart(data))
    }

    getProducts(){
        this.props.dispatch(getProducts())
    }

    getCategory(){
        this.props.dispatch(getCategory())
    }

    componentDidMount(){
        this.getProducts()
        this.getCategory()
    }

    onClickHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            // [e.target.name]:e.target.value,
            idProduct:e.target.value
        })
    }

    render(){
        const {products, categorys} = this.props
        return(
                <div className="row">
                    <div className="col-md-9" style={{height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
                        <NewNavbar categorys={categorys} />
                        <EditModals idProduct={this.state.idProduct} categorys={categorys} />
                        <DeleteModal idProduct={this.state.idProduct} />
                        <div className="row" style={{paddingLeft:'50px'}}>
                        {products.map((product) =>
                            <div className="col-sm-4" key={product.id} style={{backgroundColor:'#d9d9d9', padding:'25px'}}>
                                <div className="card" style={{backgroundColor:'transparent', border:'0px solid black',margin:'-25px', width:'20rem'}} onClick={()=>this.onAddToCart(product)} >
                                    <div className="card-body" style={{padding:'10px'}}>
                                        <img src={product.image} className="card-img" height="180px" alt=""/>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <h5 className="card-title" style={{marginTop:'5px'}}>{product.name}</h5>
                                                <p className="card-text" style={{marginTop:'-10px'}}>Rp. {product.price} </p>
                                            </div>
                                            <div className="col-md-2">
                                                <button onClick={this.onClickHandler} type="button" class="edit btn btn-outline-secondary btn-md" data-toggle="modal" data-target="#editModal" style={{marginLeft:'-10px'}} value={product.id} >
                                                        Edit
                                                </button>
                                            </div>
                                            <div className="col-md-3">
                                                <button onClick={this.onClickHandler} type="button" class="delete btn btn-outline-danger btn-md" data-toggle="modal" data-target="#deleteModal" style={{marginLeft:'-10px', marginTop:'7px'}} value={product.id}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                        <NewModals categorys={categorys} />
                    <div className="cartbar col-md-3 bg-light"  style={{height:'39.5rem', float:'right', overflowY:'hidden'}}>
                        <div style={{backgroundColor:'#d9d9d9', height:'4rem', marginLeft:'-14px'}}>
                            <center ><h5 style={{lineHeight:'4rem'}}>Cart</h5></center>
                        </div>
                        <img src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" style={{ width:'450px', marginLeft:'-60px'}}/>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products.products,
        categorys: state.categorys.categorys
    }
}

export default connect(mapStateToProps)(ProductParent)