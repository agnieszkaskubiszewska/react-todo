class Clicker extends React.Component {

    state = {
        number: 0,
    }

handleClick = ()=> {
this.setState({
    number: this.state.number + 1
})
console.log(this.state.number + "metoda")
}
    render(){
        console.log(this.state.number + "render")
        return(
            <div>
                <button onClick={this.handleClick}>Podbij o jeden</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }

}

ReactDOM.render(<Clicker />, document.getElementById('root'))