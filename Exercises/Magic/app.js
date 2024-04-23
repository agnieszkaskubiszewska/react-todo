class  Magic extends React.Component {
    render(){
        return(
            <div>
                    <button class="button-1" role="button">Zobacz wrózbe</button>
                    <br />
                    <input type="text" /> <button class="button-1" role="button">Dodaj wrózbe</button>
                    <br />
                    <h1></h1>

            </div>
        )
    }
}


ReactDOM.render(<Magic />, document.getElementById('root'));