class Form extends React.Component {

    state ={
        city:"Londyn",
        text:"",
        isLoved: true,
        number: "2"
    }

    
    handleChange = (e) => {
        console.log(e.target.type)
        if(e.target.type ==="checkbox"){
            this.setState({
                [e.target.name] : e.target.checked
            })
        } else
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <div>
                <label >
                    Podaj miasto
                    <input name='city' value={this.state.city} type="text" onChange={this.handleChange}
                    />
                </label>
                <br />
                <br />
                <label>Napisz cos o tym miescie
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br />
                <br />
                <label>Czy lubisz to miasto?
                    <input name="isLoved"type="checkbox" checked= {this.state.isLoved} onChange={this.handleChange}/>
                </label>
                <br />
                <label> Ile razy byłaś w tym  mieście 
                    <select name="number" value={this.state.number} onChange={this.handleChange} >
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