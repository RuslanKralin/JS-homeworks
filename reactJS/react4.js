//   function ReactComponent(props) {
//   return <button>{props.text}</button>;
// }

// ReactDOM.render(
//   <ReactComponent text="name from props yes" />,
//   document.getElementById("root")
// );

// или
// function ReactComponent({text}) {
//     return <button>{text}</button>;
//   }
  
//   ReactDOM.render(
//     <ReactComponent text="name from props yes" />,
//     document.getElementById("root")
//   );
  


// Обработчики событий
// function ReactComponent({text}) {
//     function clickHandler() {
//   alert('hello from Minsk ')
//     }
//     return <button onClick={clickHandler}>{text}</button>;
//   }
  
//   ReactDOM.render(
//     <ReactComponent text="name from props yes" />,
//     document.getElementById("root")
//   );

function ReactComponent({text}) {
    function clickHandler(name) {
  alert(`Hello ${name}`)
    }

    function changeHandler(event){
        console.log(event.currentTarget.value)
    }

    return (
    <div>
    <button onClick={() =>clickHandler(name: 'Ruslan')}>{text} </button>
    <input onChange={changeHandler}type="text" placeholder="поле ввода"/>
    </div>
    )
    
  }
  
  ReactDOM.render(
    <ReactComponent text="name from props yes" />,
    document.getElementById("root")
  );