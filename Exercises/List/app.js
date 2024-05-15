class List extends React.Component {
    render() {
      return (
        <div>
          <ul>
            <div className="listItem">
              <li>Poksładac pranie</li>
              <button>Usuń</button>
            </div>
            <br />
            <div className="listItem">
              <li>Odkurzyc</li>
              <button>Usuń</button>
            </div>
            <br />
            <div className="listItem">
              <li>Pokoj Oliwii</li>
              <button>Usuń</button>
            </div>
            <br />
            <div className="listItem">
              <li>Mycie podług</li>
              <button>Usuń</button>
            </div>
          </ul>
          <br />
        </div>
      );
    }
  }
  
  ReactDOM.render(<List />, document.getElementById('root'));
  



  //zrobic liste rzeczy do wyswietlenia które beda sie wyswietlac w li defaultowo 
  //zrobic metode ze na click beda sie usuwac z tablicy 
  //przerobic to na komponenty 