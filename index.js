//https://github.com/tc39/proposal-class-fields
import Car from './car.ts'
class Counter extends HTMLElement {
  x = 0
  clicked() {
    console.log('clicked'
    )
    this.x++
    window.requestAnimationFrame(this.render.bind(this))
  }
  constructor() {
    super()
    this.onclick = this.clicked.bind(this)
  }
  connectedCallback() {
    this.render()
  }
  render() {
    console.log('render called', this, this.textContext)
    this.innerHTML = this.x.toString()
  }
}
const car = new Car('hello', 'world')
car.drive()
//car.drive = () => console.log('hi')
// car.drive()
// car.x = 'yo'
var sum = car.sum(3,4)
console.log('sum is', sum)
window.customElements.define('num-counter', Counter)
