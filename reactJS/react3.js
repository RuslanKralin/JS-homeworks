// работаем через JSX
const ReactElement2 = React.createElement(
  "button",
  null,
  "My button from class component 2"
);

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.text}</button>;
  }
}

ReactDOM.render(<ReactComponent text = 'name from props'/>, document.getElementById("root"));

