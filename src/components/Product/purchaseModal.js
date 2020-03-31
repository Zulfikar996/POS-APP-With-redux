import React, { Component } from "react";
import { connect } from "react-redux";

class PurchaseModal extends Component {
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
  render() {
    const { carts, onClick, total } = this.props;
    return (
      <div
        className="modal fade"
        id="purchase"
        tabindex="-1"
        role="dialog"
        aria-labelledby="purchaseLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="purchaseLabel">
                CHECKOUT
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {carts.map(cart => (
                <p style={{fontSize: 14}}>
                  <div className="row">
                      <div className="col-1"></div>
                    <div className="col-5">
                      |<br />| {cart.name}
                    </div>
                    <div className="col-4">
                      <br />
                      {cart.qty} x {this.convertToRupiah(cart.price)}
                    </div>
                  </div>
                </p>
              ))}
              <div className="row">
                <div
                  className="col-6"
                  style={{ fontWeight: "bold", fontSize: 20 }}
                >
                  Total:
                </div>
                <div className="col-4">{this.convertToRupiah(total)}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "yellow",
                  border: "transparent",
                  color: "black"
                }}
                onClick={onClick}
                data-dismiss="modal"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                style={{
                  backgroundColor: "red",
                  border: "transparent",
                  color: "white"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.carts.carts
  };
};

export default connect()(PurchaseModal);
