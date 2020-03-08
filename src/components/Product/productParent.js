import React, { Component } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getProducts } from '../redux/actions/product'
import { getCategory } from '../redux/actions/category'
import NewModals from './addModal'
import EditModals from './editModal'
import NewNavbar from '../Layout/Navbar'
import DeleteModal from './deleteModal'
import { addToCart, addQuantity, reduceQuantity, deleteCart } from '../redux/actions/cart'


class ProductParent extends Component {

    state={
        idProduct:'',
        page: 1,
        limit:6,
    }

    onAddToCart=(data)=>{
        // console.log(data)
        this.props.dispatch(addToCart(data))
    }

    addQuantity = (id) =>{
        this.props.dispatch(addQuantity(id))
    }

    reduceQuantity = (id) =>{
        this.props.dispatch(reduceQuantity(id))
    }

    deleteCart = (data) => {
        this.props.dispatch(deleteCart(data))
    }

    getProducts = () =>{
        this.props.dispatch(getProducts(this.state.page, this.state.limit))
    }

    // getPagination = (event) =>{
    //     console.log(event.target.value)
    //     this.props.dispatch(pagination(event.target.value, this.state.limit))
    // }

    getCategory(){
        this.props.dispatch(getCategory())
    }

    componentDidMount(){
        if(!localStorage.getItem('isAuth')){
            this.props.history.push('/login');
        }
        this.getProducts()
        this.getCategory()
    }

    onClickHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value,
            idProduct:e.target.value,
            page:e.target.value
        })
    }

    onLogout(){
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('status');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    onChangeHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    // purchaseCheckout = (e) => {
    //     e.preventDefault()
    //     let product = [], data = {}

    //     data.id_user = localStorage.getItem('user-id')
    //     data.total = this.props.total
    //     this.props.carts.map((cart) => {
    //         delete cart.name_product
    //     })
    // }

    render(){
        const {products, categorys, carts, total} = this.props
        // const totalPage = Math.ceil(this.props.products.length/6)
        // console.log(totalPage)
        return(
                <div className="row">
                    <div className="col-md-9" style={{height:'100vh', overflowY:'scroll', overflowX:'hidden'}} >
                        <NewNavbar categorys={categorys} onClickl={this.onLogout.bind(this)} />
                        <EditModals idProduct={this.state.idProduct} categorys={categorys} />
                        <DeleteModal idProduct={this.state.idProduct} />
                        <div className="row" style={{paddingLeft:'50px'}}>
                        {products.map((product) =>
                            <div className="col-sm-4" key={product.id} style={{backgroundColor:'#d9d9d9', padding:'25px'}}>
                                <div className="card" style={{backgroundColor:'transparent', border:'0px solid black',margin:'-25px', width:'20rem'}} >
                                    <div className="card-body" style={{padding:'10px'}}>
                                        <img onClick={()=>this.onAddToCart(product)} src={product.image} className="card-img" height="180px" alt=""/>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <h5 className="card-title" style={{marginTop:'5px', fontSize:'16px'}}><b>{product.name}</b></h5>
                                                <p className="card-text" style={{marginTop:'-10px'}}>Rp. {product.price} </p>
                                            </div>
                                            <div className="col-md-2">
                                                <button onClick={this.onClickHandler} type="button" class="edit btn btn-outline-secondary btn-md" data-toggle="modal" data-target="#editModal" style={{marginLeft:'-20px'}} value={product.id} >
                                                        Edit
                                                </button>
                                            </div>
                                            <div className="col-md-3">
                                                <button onClick={this.onClickHandler} type="button" class="delete btn btn-outline-danger btn-md" data-toggle="modal" data-target="#deleteModal" style={{marginLeft:'-16px', marginTop:'6px'}} value={product.id}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <nav aria-label="Page navigation example" style={{marginLeft:'19rem'}}>
                            <ul className="pagination">
                                {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={this.getPagination(1)} value={1}>1</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={this.getPagination(2)} value={2}>2</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={this.getPagination(3)} value={3}>3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
                            </ul>
                        </nav>
                        </div>
                    </div>
                        <NewModals categorys={categorys} />
                    <div className="cartbar col-md-3 bg-light"  style={{height:'39.5rem', float:'right', overflowY:'scroll'}}>
                        <div style={{backgroundColor:'#d9d9d9', height:'4rem', marginLeft:'-14px'}}>
                            <center ><h5 style={{lineHeight:'4rem'}}>Cart</h5></center>
                        </div>
                        {carts.map((cart) =>
                            <li class="media">
                              <img src={cart.image} class="mr-3" alt="" style={{height:'64px', width:'64px'}} />
                              <div class="media-body">
                                <h5 class="mt-0 mb-1">{cart.name}</h5>
                                    Rp. {cart.price} 
                                <button type="button" class="btn btn-outline-secondary" onClick={()=>(this.reduceQuantity(cart.id))} style={{display:'inline', marginLeft:'10px'}}>-</button>
                                <div type="text" class="form-control" style={{width:'40px', display:'inline', backgroundColor:'transparent', border:'0px solid black'}} aria-describedby="basic-addon1" > {cart.qty} </div>
                                <button type="button" class="btn btn-outline-secondary" onClick={()=>(this.addQuantity(cart.id))}>+</button>
                                <div>
                                    <button type="button" class="btn btn-outline-danger">Remove</button>
                                </div>
                              </div>
                            </li> 
                        )}
                         <Row style={{ fontWeight: "bold" }}>
                            <Col sm={4} style={{ fontSize: "25px" }}>Total: </Col>
                            <Col sm={8} style={{ fontSize: "25px" }}>Rp. {total}</Col>
                            <div>cekout</div>
                        </Row>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products.products,
        categorys: state.categorys.categorys,
        carts: state.carts.carts,
        total: state.carts.total,
    }
}

export default connect(mapStateToProps)(ProductParent)