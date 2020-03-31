import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/product";
import { getCategory } from "../redux/actions/category";
import NewModals from "./addModal";
import NewNavbar from "../Layout/Navbar";
import PurchaseModal from "./purchaseModal";
import empty from "../image/empty-cart.png";
import {
  addToCart,
  addQuantity,
  reduceQuantity,
  deleteCart,
  buy
} from "../redux/actions/cart";

class ProductParent extends Component {
  state = {
    idProduct: "",
    page: 1,
    limit: 6,
    onhidden: true
  };

  convertToRupiah = angka => {
    var rupiah = "";
    var angkarev = angka
      .toString()
      .split("")
      .reverse()
      .join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("") +
      ",-"
    );
  };

  onAddToCart = data => {
    this.props.dispatch(addToCart(data));
  };

  addQuantity = id => {
    this.props.dispatch(addQuantity(id));
  };

  reduceQuantity = id => {
    this.props.dispatch(reduceQuantity(id));
  };

  deleteCart = data => {
    this.props.dispatch(deleteCart(data));
  };

  getProducts = () => {
    this.props.dispatch(getProducts(this.state.page, this.state.limit));
  };

  getCategory() {
    this.props.dispatch(getCategory());
  }

  componentDidMount() {
    if (!localStorage.getItem("isAuth")) {
      this.props.history.push("/login");
    }
    this.getProducts();
    this.getCategory();
  }

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      idProduct: e.target.value,
      page: e.target.value
    });
  };

  onLogout() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    localStorage.removeItem("isAuth");
    this.props.history.push("/login");
  }

  onChangeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changePage = page => {
    this.props.dispatch(getProducts(page, this.state.limit));
  };

  onSubmit = async () => {
    const data = {
      products: this.props.carts
    };
    await this.props.dispatch(buy(data));
  };

  render() {

    const Checkout = () => {
      if (carts.length !== 0) {
        return (
          <Row style={{ fontWeight: "bold" }}>
            <Col sm={3} style={{ fontSize: "20px" }}>
              Total:{" "}
            </Col>
            <Col sm={9} style={{ fontSize: "20px" }}>
              {this.convertToRupiah(total)}
            </Col>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "28%"
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: 150 }}
                data-toggle="modal"
                data-target="#purchase"
              >
                Checkout
              </button>
            </div>
          </Row>
        );
      } else {
        return (
          <Row style={{marginLeft: -140 }}>
            <img src={empty} style={{width: 600}} />
          </Row>
        );
      }
    };
    const { products, categorys, carts, total, pages } = this.props;
    return (
      <div className="row">
        <div
          className="col-md-9"
          style={{ height: "100vh", overflowX: "hidden" }}
        >
          <NewNavbar categorys={categorys} onClick={this.onLogout.bind(this)} />
          <PurchaseModal carts={carts} onClick={this.onSubmit.bind(this)} total={total} />
          <div className="row" style={{ paddingLeft: "50px" }}>
            {products.map(product => (
              <div
                className="col-sm-4"
                key={product.id}
                style={{ backgroundColor: "#d9d9d9", padding: "25px" }}
              >
                <div
                  className="card"
                  style={{
                    backgroundColor: "transparent",
                    border: "0px solid black",
                    margin: "-25px",
                    width: "20rem"
                  }}
                >
                  <div className="card-body" style={{ padding: "10px" }}>
                    <img
                      onClick={() => this.onAddToCart(product)}
                      src={product.image}
                      className="card-img"
                      height="180px"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-md-7">
                        <h5
                          className="card-title"
                          style={{ marginTop: "5px", fontSize: "16px" }}
                        >
                          <b>{product.name}</b>
                        </h5>
                        <p className="card-text" style={{ marginTop: "-10px" }}>
                          {this.convertToRupiah(product.price)}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <nav
              aria-label="Page navigation example"
              style={{
                marginLeft: "28rem",
                position: "absolute",
                marginTop: "32rem"
              }}
            >
              <ul className="pagination">
                {pages.map((page, index) => (
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    key={index}
                    onClick={() => this.changePage(page)}
                    style={{ marginLeft: "1px" }}
                  >
                    {page}
                  </button>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <NewModals categorys={categorys} />
        <div
          className="cartbar col-md-3 bg-light"
          style={{ height: "39.5rem", float: "right", overflowY: "scroll", overflowX: "hidden" }}
        >
          <div
            style={{
              backgroundColor: "#d9d9d9",
              height: "4rem",
              marginLeft: "-14px"
            }}
          >
            <center>
              <h5 style={{ lineHeight: "4rem" }}>Cart</h5>
            </center>
          </div>
          {carts.map(cart => (
            <li class="media">
              <img
                src={cart.image}
                class="mr-3"
                alt=""
                style={{ height: "64px", width: "64px" }}
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1">{cart.name}</h5>
                {this.convertToRupiah(cart.price)}
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={() => this.reduceQuantity(cart.id)}
                  style={{ display: "inline", marginLeft: "10px" }}
                >
                  -
                </button>
                <div
                  type="text"
                  class="form-control"
                  style={{
                    width: "40px",
                    display: "inline",
                    backgroundColor: "transparent",
                    border: "0px solid black"
                  }}
                  aria-describedby="basic-addon1"
                >
                  {" "}
                  {cart.qty}{" "}
                </div>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={() => this.addQuantity(cart.id)}
                >
                  +
                </button>
                <div>
                  <span
                    style={{ border: "transparent", cursor: "pointer" }}
                    onClick={() => this.deleteCart(cart.id)}
                  >
                    <i className="material-icons" style={{ color: "grey" }}>
                      {" "}
                      delete
                    </i>
                  </span>
                </div>
              </div>
            </li>
          ))}
          <Checkout />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    categorys: state.categorys.categorys,
    carts: state.carts.carts,
    total: state.carts.total,
    pages: state.products.totalPages
  };
};

export default connect(mapStateToProps)(ProductParent);
