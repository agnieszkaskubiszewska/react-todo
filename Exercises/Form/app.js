class Form extends React.Component {

    state ={
        city:"Londyn",
        text:"",
        isLoved: true,
        number: "2"
    }

    
     handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    hangleTextChanges = e => {
        this.setState({
            text:e.target.value
        })
    }
    handleIsLovedChanges = e =>{
    this.setState({
        isLoved:e.target.checked
    })
}
    handleVisitsNumber = e => {
        this.setState({
            number: e.target.value
        })
    }

    render(){
        return (
            <div>
                <label >
                    Podaj miasto
                    <input value={this.state.city} type="text" onChange={this.handleCityChange}
                    />
                </label>
                <br />
                <br />
                <label>Napisz cos o tym miescie
                    <textarea value={this.state.text} onChange={this.hangleTextChanges}></textarea>
                </label>
                <br />
                <br />
                <label>Czy lubisz to miasto?
                    <input type="checkbox" checked= {this.state.isLoved} onChange={this.handleIsLovedChanges}/>
                </label>
                <br />
                <label> Ile razy byłaś w tym  mieście 
                    <select value={this.state.number} onChange={this.handleVisitsNumber} >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="More">More</option>
                    </select>
                </label>
            </div>
        )
    }
}


ReactDOM.render(<Form />, document.getElementById('root'));