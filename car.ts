import logStuff from './settings'
class Car {
    @readonly
    drive() {
      console.log("vroom vroom")
    }
    @log('Something')
    sum(a, b) {
      return a + b
    }
}
function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}
function log(name) {
  return function (target, decoratedFunctionName, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function' && logStuff) {

      descriptor.value = function(...args) {
        console.log(name, decoratedFunctionName)
        console.log("Args: ", ...args)
        const result = original(...args)
        console.log("Result: " , result)
        return result
      }
    }
    return descriptor
  }
}

export default Car



//f(g(x))
