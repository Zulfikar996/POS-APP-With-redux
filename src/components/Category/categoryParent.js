import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../redux/actions/category'

import { Container, Row, Button, Table } from 'react-bootstrap';
import AddCategoryModals from './addCategory'
import EditCategoryModals from './editCategory'
import CategoryNavbar from '../Layout/categoryNavbar'
import DeleteCategoryModal from './deleteCategory'


class CategoryParent extends Component {

    state={
        idCategory:''
    }

    getCategory(){
        this.props.dispatch(getCategory())
    }

    componentDidMount(){
        this.getCategory()
    }

    onClickHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            idCategory:e.target.value
        })
    }

    render(){
        const { categorys } = this.props;
        return(
            <Row>

            <CategoryNavbar />
            <Container>
            <AddCategoryModals />
            <EditCategoryModals idCategory={this.state.idCategory} />
            <DeleteCategoryModal idCategory={this.state.idCategory} />
                <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { categorys.map((category, index) => 
                            <tr key={index}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td><Button onClick={this.onClickHandler} data-toggle="modal" data-target="#editCategoryModal" variant="danger" value={category.id} variant="warning">Edit</Button> - 
                                <Button onClick={this.onClickHandler} data-toggle="modal" data-target="#deleteCategoryModal" variant="danger" value={category.id}>Delete</Button></td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
                
            </Container>
            </Row>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        categorys: state.categorys.categorys
    }
}

export default connect(mapStateToProps)(CategoryParent)