class App extends React.Component {
    state = {
        availableProducts: 7,
        shopingCart: 1,
    }

    handleRemoveFromCart =() =>{
        this.setState({
            shopingCart:this.state.shopingCart -1
        })
    }    
    handleAddToCard =() =>{
        this.setState({
            shopingCart:this.state.shopingCart +1
        })
    }
    handleBuy =() =>{
        this.setState({
            availableProducts:this.state.availableProducts - this.state.shopingCart,
            shopingCart:0
        })
    }
    render() {
        return(
            <div>
            <button onClick={this.handleRemoveFromCart} disabled={this.state.shopingCart ? false : true}>-</button>
            <span style={this.state.shopingCart === 0 ? {opacity:0.3}: {}}> {this.state.shopingCart} </span>
            <button disabled={this.state.shopingCart ===this.state.availableProducts? true : false }   onClick={this.handleAddToCard}>+</button>
            {this.state.shopingCart > 0 && <button onClick={this.handleBuy}>KUP</button>}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))