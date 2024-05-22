class App extends React.Component {
    state = {  
        items: [
            {id:1, name:"Magda  "},
            {id:2, name:"Bartek  "},
            {id:3, name:"Michał  "},
        ]
    } 

    removeItem = (id) => {
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.id !== id)
        }));
    }

    render() { 
        return (
            <React.Fragment>
                <Persons items={this.state.items} removeItem={this.removeItem}/>
            </React.Fragment>
        );
    }
}

const Persons = (props) => {
    const items = props.items.map(item => (
        <Item key={item.id} id={item.id} name={item.name} removeItem={props.removeItem}/>
    ));
    return (
        <div className="list">
            <ul>{items}</ul>
        </div>
    );
};

const Item = (props) => (
    <>
    <li>
        {props.name}
        {props.id}
        <button onClick={() => props.removeItem(props.id)}>Usuń</button>
        <br></br>
    </li>
    </>

);

ReactDOM.render(<App />, document.getElementById('root'));