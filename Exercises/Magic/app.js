
class  Magic extends React.Component {

    state = {
        omens: [
          { name: 'Będziesz bogaty' },
          { name: 'Rozwiedziesz się' },
          { name: 'Adoptujesz psa' },
          { name: 'Przegrasz 5 złotych w zakładach' }
        ],
        selectedOmen: '',
        addedOmen:""
      };

      handleOmenViewing = () => {
        const randomIndex = Math.floor(Math.random() * this.state.omens.length);
        const selectedOmen = this.state.omens[randomIndex].name;
        this.setState({ selectedOmen });
      };

      handleNewOmen = (e) => {
        this.setState({
          addedOmen: e.target.value
      })
    }

    pushOmen = () => {
      const { addedOmen, omens } = this.state;
      omens.push({ name: addedOmen });
      this.setState({ omens, addedOmen: " " });
    }



    render(){
        return(
            <div>
                    <button className="button-1" role="button" onClick={this.handleOmenViewing}>Zobacz wrózbe</button>
                    <br />
                    <input onChange={this.handleNewOmen}type="text" /> <button onClick={this.pushOmen} class="button-1" role="button">Dodaj wrózbe</button>
                    <br />
                    {this.state.selectedOmen && <h1>Twoja wrózba to: {this.state.selectedOmen}</h1>}

            </div>
        )
    }
}

ReactDOM.render(<Magic />, document.getElementById('root'));