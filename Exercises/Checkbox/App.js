const ValidationMessage = (props) => <p>{props.txt}</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    let message = null;

    if (this.state.isSubmitted) {
      if (this.state.isConfirmed) {
        message = <ValidationMessage txt="Mozesz obejrzeć film. Zapraszamy!" />;
      } else {
        message = <ValidationMessage txt="Nie mozesz obejrzeć filmu" />;
      }
    }

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
        {message}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
