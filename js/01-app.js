//Almacenarlo en el localStorage
localStorage.setItem('nombre', 'Ariel Tecay');


const producto = {
    nombre: 'Shampoo',
    cantidad: 5
}
/* console.log(typeof producto); */

const strProduct = JSON.stringify(producto)

localStorage.setItem('productos', strProduct)
/* console.log(typeof strProduct); */

const meses = ['Enero', 'Febrero', 'Marzo']
/* console.log(typeof meses); */
strMeses = JSON.stringify(meses)
localStorage.setItem('meses', strMeses)

//Sacarlo del localStorage
const localMeses = localStorage.getItem('meses')
console.log(typeof localMeses);
const strLocalMeses = JSON.parse(localMeses)
console.log(typeof strLocalMeses);

//Remover item
localStorage.removeItem('nombre')

strLocalMeses.push('Abril')
localStorage.setItem('meses', JSON.stringify(strLocalMeses))