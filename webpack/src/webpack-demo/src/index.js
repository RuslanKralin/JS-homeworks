import _ from 'lodash';
import {showLog, showLog2,str} from './showLog';
function component() {
    const element = document.createElement('div');

   
    
    console.log('asdasd')
    alert('hello')
    showLog()
    showLog2()

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
