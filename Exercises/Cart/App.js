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
    
    render() {
        return(
            <div>
            <button onClick={this.handleRemoveFromCart} disabled={this.state.shopingCart ? false : true}>-</button>
            <span> {this.state.shopingCart} </span>
            <button disabled={this.state.shopingCart ===this.state.availableProducts? true : false }   onClick={this.handleAddToCard}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))