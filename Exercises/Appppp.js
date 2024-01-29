class Message extends React.Component {
 constructor(props){
    super(props)
    this.state = {
        messageIsActive:false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
 }


    handleMessageButton(){
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render(){
        const text = "Lorem ipsum dolor sit amet."
        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? "Ukryj" : "Pokaz"}</button>
                <p>{this.state.messageIsActive && text}</p>
                </React.Fragment>
                
        );
        
    }



}



ReactDOM.render(<Message/> , document.getElementById('root'))