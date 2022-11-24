// классовые компоненты

const ReactElement2 = React.createElement('button', null, 'My button from class component 2')

class ReactComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(ReactElement2)
    }

}



 ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'))
  

