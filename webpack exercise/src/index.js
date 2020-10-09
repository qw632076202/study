import { funA } from './a'
import './index.css'

function component() {
    var element = document.createElement('div');
    var sonEle = document.createElement('div');
    sonEle.classList.add('sonclass')

    element.innerHTML = "hello webpack"
    element.classList.add('hello')
    element.appendChild(sonEle)

    return element;
}

document.body.appendChild(component());
funA()