// функциональные компоненты

const ReactElement = React.createElement('button', null, 'My button from function component 1')



function ReactComponent(){
    return ReactElement
}


ReactDOM.render(React.createElement(ReactComponent), document.getElementById('root'))
