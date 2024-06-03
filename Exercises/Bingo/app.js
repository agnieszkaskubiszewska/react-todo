
class  Bingo extends React.Component {

    state = {
        update: [
            { name: 'Taski nie są w odpowiedniej kolumnie' },
            { name: 'Złe opisy zadania' },
            { name: 'Bład na prodzie' },
            { name: 'Jeszcze nie ma releasa' },
            { name: 'Releas za tydzien' },
            { name: 'Dominik mozesz to sprawdzic' }
          ],
          currentIndex: 0
      };

      handleCos = () => {
        const currentIndex = this.state.currentIndex;
        const selectedBingo = this.state.update[currentIndex].name;
        const nextIndex= (currentIndex + 1) % this.state.update.length;
        this.setState({selectedBingo, currentIndex: nextIndex});
      }

    render(){
        return(
            <div>
                <button className="button" onClick={this.handleCos}>1</button>
                <button className="button" onClick={this.handleCos}>2</button>
                <button className="button"  onClick={this.handleCos}>3</button>
                <br />
                <button  className="button"  onClick={this.handleCos}>4</button>
                <button className="button"  onClick={this.handleCos}>5</button>
                <button className="button"  onClick={this.handleCos}>6</button>
                <br />
                {<h1>Dzisiaj czeka nas: {this.state.selectedBingo}</h1>}

            </div>
        )
    }
}


ReactDOM.render(<Bingo />, document.getElementById('root'));