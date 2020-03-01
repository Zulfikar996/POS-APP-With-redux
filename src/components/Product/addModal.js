import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {addProduct} from '../redux/actions/product'

class NewModals extends Component{

        state={
            name: '',
            category: 0,
            price:'-',
            stock:'-',
            image:''
        }
        
        onChangeImageHandler = (e)=>{
            this.setState({image:e.target.files[0]})
        }
        
        onChangeHandler = (e)=>{
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

            this.props.dispatch(addProduct(data))

        }

    render(){
        return(
            <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <Form onSubmit={this.onSubmitHandler}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChangeHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label onChange={this.onChangeHandler}>Category</Form.Label>
                                    <Form.Control as="select">
                                        <option value={1}>Food</option>
                                        <option value={2}>Drink</option>
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
                                <Button variant="primary" type="submit">
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

export default connect()(NewModals)