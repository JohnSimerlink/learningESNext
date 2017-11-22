import logStuff from './settings'

@logClass
class Car {
    id;
    constructor(){
      this.id = Math.random()
    }
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
        console.log(target, typeof target, target instanceof Car)
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

function logClass(originalConstructor) {
  const newConstructor = (...args) => {
    console.log("Constructor arguments for ", originalConstructor.name, ": ", ...args)
    return new originalConstructor(...args)
  }
  // newConstructor.prototype = originalConstructor.prototype
  return <any> newConstructor
}

export default Car



//f(g(x))
