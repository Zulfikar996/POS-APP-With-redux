import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {deleteProduct} from '../redux/actions/product'

class DeleteModal extends Component{

    onSubmitHandler = (e)=>{
            
        e.preventDefault()
        
        const propsId = this.props.idProduct
        console.log(propsId)

        this.props.dispatch(deleteProduct( propsId ))

    }

    render(){
        return(
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Alert!!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Do you really want to delete this product?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <Form onSubmit={this.onSubmitHandler}>
                            <button type="submit" class="btn btn-danger">Detele</button>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(DeleteModal)
