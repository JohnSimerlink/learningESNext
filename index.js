`x1`
//https://github.com/tc39/proposal-class-fields
class Counter extends HTMLElement {
  clicked() {
    console.log('clicked'
    )
    this.x++
    window.requestAnimationFrame(this.render.bind(this))
  }
  constructor() {
    super()
    this.onclick = this.clicked.bind(this)
    this.x = 0
  }
  connectedCallback() {
    this.render()
  }
  render() {
    console.log('render called', this, this.textContext)
    this.innerHTML = this.x.toString()
  }
}
window.customElements.define('num-counter', Counter)
