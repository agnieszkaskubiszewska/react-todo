class ListItems extends React.Component {


    state = {
        items:["jabłko", "sliwka", "gruszka"]
    }

    render(){
        return(
            <ul>
                {this.state.items.map(item => <li key={item}>{item}</li>)}
            </ul>
        )
    }
}
ReactDOM.render(<ListItems />, document.getElementById('root'));