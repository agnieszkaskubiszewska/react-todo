const PositiveMessage = () => <p> Mozesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p> Nie mozesz obejrzeć filmu.</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isSubmitted: false,
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isSubmitted: false
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.setState({
        isSubmitted:true
    })
  };

  displayMessage = () => {
    if (this.state.isSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };
  render() {
    return (
     <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
