import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {addProduct} from '../redux/actions/product'
import { getCategory } from '../redux/actions/category'


class NewModals extends Component{

        state={
            name: '',
            category: 0,
            price:'-',
            stock:'-',
            image:''
        }
        
        
        getCategory(){
            this.props.dispatch(getCategory())
        }
        
        componentDidMount(){
            this.getCategory()
        }
        onChangeImageHandler = (e)=>{
            console.log(e.target.files[0])
            this.setState({
                image:e.target.files[0]
            })
        }
        
        onChangeHandler = (e)=>{
            console.log(e.target.value)
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        
        
        onSubmitHandler = (e)=>{
            e.preventDefault()

            let data = new FormData()
            data.append("name", this.state.name)
            data.append("price", this.state.price)
            data.append("category", this.state.category)
            data.append("stock", this.state.stock)
            data.append("image", this.state.image)

            console.log(this.state)

            this.props.dispatch(addProduct(data))

        }

    render(){
        const { categorys } = this.props;
        return(
            <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <Form >
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChangeHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control name="category" onChange={this.onChangeHandler} as="select">
                                        <option selected value={0} disabled>Choose...</option>
                                        { categorys.map((category, index) => 
                                        <option key={index} value={category.id}>
                                            {category.name}
                                        </option>
                                    )}
                                        {/* <option value={1}>Food</option>
                                        <option value={2}>Drink</option> */}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Price" name="price" onChange={this.onChangeHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Stock" name="stock" onChange={this.onChangeHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" placeholder="Enter image file" name="image" onChange={this.onChangeImageHandler} />
                                </Form.Group>
                                <Button onClick={this.onSubmitHandler} data-dismiss="modal" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        categorys: state.categorys.categorys
    }
}

export default connect(mapStateToProps)(NewModals)