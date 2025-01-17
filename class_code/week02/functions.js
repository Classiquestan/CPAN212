function sayHi(name) {
    console.log(`How are you ${name}`)
}

const sayHi2 = (name) => {
    console.log(`Howdy ${name}`)
}

const sayHi3 = (name) => {
    return (`sup, ${name}`)
}

module.exports ={sayHi, sayHi2, sayHi3}