

const Cash = (props) => {
    const value = (props.cash / props.ratio * props.price).toFixed(2)
    return (
        <div>
        {props.title}{props.cash <= 0 ? "" : value }
    </div>
    )
}


class ExchangeCounter extends React.Component{

    state = {
        amount: "",
        product: "gas"
    }
    
    static defaultProps = {
        currencies : [
            {id:0, name:'zloty', ratio: 1, title: "wartosc w zlotówkach"},
            {id:1, name:'dollar', ratio: 3.6, title: "wartosc w dolarach"},
            {id:2, name:'euto', ratio: 4.6, title: "wartosc w euto"},
            {id:3, name:'funt', ratio: 5.6, title: "wartosc w funtach"}
            ] ,
            prices : {
                electricity: .51,
                gas: 4.76,
                oragnes: 3.50
            }
    }


    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }
    handleSelect= (e) => {
        this.setState({
            product: e.target.value,
            amount: ""
        })
    }

    selectPrice(select){
        const price = this.props.prices[select]
        return price
    }

    insertSuffix(select){
        if(select === "electricity"){
            return <em>kWh</em>
        } else if(select === "gas"){
            return <em>litrów</em>
        }else if (select === "oragnes"){
            return <em>kilogramów</em>
        }
    }

    render(){

        const {amount, product} = this.state

        const calculators= this.props.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={this.selectPrice(product)}/>
        ))


        return(
            <div className="app">
                <label>Wybierz product:
                    <select value={product} onChange={this.handleSelect}>
                    <option value="electricity">prad</option>
                    <option value="gas">benzyna</option>
                    <option value="oragnes">pomarancze</option>
                    </select>
                </label>
                <br></br>
                <label>
                    <input 
                    type="number" 
                    value={this.state.amount} 
                    onChange={this.handleChange}
                    />
                    {this.insertSuffix(this.state.product)}
                </label>
                {calculators}
            </div>
        )
    }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));