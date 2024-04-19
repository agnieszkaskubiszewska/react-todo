
class  App extends React.Component {
    state = {  
        items: [
            {id:1, name:"sałatka", active:true },
            {id:2, name:"schabowy", active:false },
            {id:3, name:"zupa", active:false },
            {id:4, name:"kaszotto", active:false },
            {id:5, name:"brokuły", active:false },
            {id:6, name:"makaron", active:true },
        ]
    } 

    handleChangeStatus = (id) => {
        const items = this.state.items.map( item => {
            if(id === item.id) {
                item.active = !item.active
            }
            return item
        })
        this.setState({
            items
        })
    }   

    render() { 
        return (
            <React.Fragment>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
            </React.Fragment>
        );
    }
}
 
