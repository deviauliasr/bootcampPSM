import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlahPaket: 0,
      food: "Nasi + Ayam Krispy/Spicy",
      drink: "FruitTea Lemon",
      totalHarga: 0,
      harga: 45000,
    };
  }

  tambah = (event) => {
    const input = document.getElementById("quantity").value;
    this.setState({ jumlahPaket: input });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.jumlahPaket !== this.state.jumlahPaket) {
      this.setState({ totalHarga: this.state.jumlahPaket * 45000 });
    } else if (prevState.food !== this.state.food) {
      this.setState({ totalHarga: this.state.jumlahPaket * 45000 + 8500 });
    } else if (prevState.drink !== this.state.drink) {
      this.setState({ totalHarga: this.state.jumlahPaket * 45000 + 5000 });
    } else if (prevProps !== this.props) {
      this.setState({ totalHarga: this.state.jumlahPaket * 45000 + 3000 });
    }
    console.log("Props Sebelumnya", prevProps);
    console.log("Props Sekarang", this.props);
    console.log("State Sebelumnya", prevState);
    console.log("State Sekarang", this.state);
  }

  render() {
    console.log("DETAIL");
    return (
      <>
        <p>Paket Panas 1</p>
        <p>Harga : {this.state.harga}</p>
        <ul>
          <li>{this.state.food}</li>
          <li>{this.state.drink}</li>
          <li>{this.props.upgrade}</li>
        </ul>
        <label>Qty : </label>
        <input type="Text" id="quantity" placeholder={this.state.jumlahPaket}></input>
        <button onClick={this.tambah}>Checkout</button>
        <p>Jumlah Paket : {this.state.jumlahPaket}</p>
        <p>Total Harga : {this.state.totalHarga}</p>
        <button onClick={() => this.setState({ food: "French Fries + Ayam Krispy/Spicy" })}>Upgrade Food (+8.5k)</button>
        <button onClick={() => this.setState({ drink: "Coffee Float" })}>Upgrade Drink (+5k)</button>
      </>
    );
  }
}

export default Class;
