let a = 'nepe'
const B = { a: 'pito' }
let c =  a

const pizzaConPollo = function (f) {
    let d = 'no existo'
    B.a = 'pollo'
    console.log('a existe', a)
    console.log('b existe', B.a)
    console.log('c existe')
    console.log('e existe', e)
    
}

// console.log('de no existe', d)
let e = 'pollo'

pizzaConPollo(e)
