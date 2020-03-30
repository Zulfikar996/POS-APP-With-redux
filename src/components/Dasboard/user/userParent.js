import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Row, Button, Table, Col } from "react-bootstrap";
import NewNavbar from "../../Layout/Navbar";
import { getUser } from "../../redux/actions/user";
// import AddCategoryModals from "./addCategory";
// import EditCategoryModals from "./editCategory";
// import DeleteCategoryModal from "./deleteCategory";

class UserParent extends Component {
  state = {
    idUser: ""
  };

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      idUser: e.target.value
    });
  };

  onLogout() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    localStorage.removeItem("isAuth");
    this.props.history.push("/login");
  }

  getUsers = () => {
    this.props.dispatch(getUser());
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <Row>
        <Col sm="1">
          <div>
            <button
              type="button"
              className="add btn btn-outline-light"
              data-toggle="modal"
              data-target="#categoryModal"
              style={{
                backgroundColor: "transparent",
                border: "0px solid black",
                marginLeft: "7rem",
                marginTop: "7rem",
                possition: "fixed"
              }}
            >
              <i className="material-icons" style={{ color: "grey" }}>
                {" "}
                add_to_queue
              </i>
            </button>
          </div>
          <div></div>
        </Col>
        <Container>
          <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
          {/* <AddCategoryModals /> */}
          {/* <EditCategoryModals idUser={this.state.idUser} />
          <DeleteCategoryModal idUser={this.state.idUser} /> */}
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}></Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id_chasier}</td>
                  <td>{user.name}</td>
                  <td>{user.Status}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle="modal"
                      data-target="#editCategoryModal"
                      variant="danger"
                      value={user.id}
                      variant="warning"
                    >
                      Edit
                    </Button>{" "}
                    -
                    <Button
                      onClick={this.onClickHandler}
                      data-toggle="modal"
                      data-target="#deleteCategoryModal"
                      variant="danger"
                      value={user.id}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

export default connect(mapStateToProps)(UserParent);
