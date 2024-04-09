
class  App extends React.Component {
    state = {  
        items: [
            {id:1, name:"sałatka", active:false },
            {id:2, name:"schabowy", active:false },
            {id:3, name:"zupa", active:false },
            {id:4, name:"kaszotto", active:false },
            {id:5, name:"brokuły", active:false },
            {id:6, name:"makaron", active:false },
        ]
    } 
    render() { 
        return (
            <React.Fragment>
                <Header items={this.state.items}/>
                <ListItems/>
            </React.Fragment>
        );
    }
}
 
