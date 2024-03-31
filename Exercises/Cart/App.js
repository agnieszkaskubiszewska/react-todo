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
        const {shopingCart,availableProducts} = this.state
        return(
            <div>
            <button onClick={this.handleRemoveFromCart} disabled={shopingCart ? false : true}>-</button>
            <span style={shopingCart === 0 ? {opacity:0.3}: {}}> {shopingCart} </span>
            <button disabled={shopingCart ===availableProducts? true : false }   onClick={this.handleAddToCard}>+</button>
            {shopingCart > 0 && <button onClick={this.handleBuy}>KUP</button>}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))