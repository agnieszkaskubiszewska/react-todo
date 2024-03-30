const ValidationMessage = (props) => <p>{props.txt}</p>;

const displayMessage = (isConfirmed, isSubmitted) => {
  if (isSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Mozesz obejrzeć film. Zapraszamy!" />;
    } else {
      return <ValidationMessage txt="Nie mozesz obejrzeć filmu" />;
    }
  } else {
    return null;
  }
};

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
    const { isConfirmed, isSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
