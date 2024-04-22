

const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div>
        {props.title}{props.cash <= 0 ? "" : value }
    </div>
    )
}


class ExchangeCounter extends React.Component{

    state = {
        amount: "",
    }
    
    currencies = [
        {id:1, name:'dollar', ratio: 3.6, title: "wartosc w dolarach"},
        {id:2, name:'euto', ratio: 4.6, title: "wartosc w euto"},
        {id:3, name:'funt', ratio: 5.6, title: "wartosc w funtach"}
        ]


    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }


    render(){

        const {amount} = this.state

        const calculators= this.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
        ))


        return(
            <div className="app">
                <label>
                    <input 
                    type="number" 
                    value={this.state.amount} 
                    onChange={this.handleChange}
                    />
                </label>
                {calculators}
            </div>
        )
    }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));