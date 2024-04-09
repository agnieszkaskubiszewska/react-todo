
class  App extends React.Component {
    state = {  
        items: [
            {id:1, name:"sałatka", active:true },
            {id:2, name:"schabowy", active:true },
            {id:3, name:"zupa", active:true },
            {id:4, name:"kaszotto", active:true },
            {id:5, name:"brokuły", active:true },
            {id:6, name:"makaron", active:true },
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
 
