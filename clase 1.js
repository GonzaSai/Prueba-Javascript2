//1) a)

function multiplicación (x, y)
{
    let numero = x * y
    return 'el resultado de 8 * 5 es ' + numero
}
console.log(multiplicación(8, 5))

//b)

function division(x,y)
{
    let numero2 = x / y
    return 'el resultado de 30 / 3 es ' + numero2
}
alert(division(30, 3))

//c)

function suma(x, y)
{
    let numero3 = x + y
    return 'el resultado de 10 + 31 es ' + numero3
}
console.log(suma(10,31))

//d)

function resta(x, y)
{
    let numero4 = x - y
    return 'el resultado de 48 - 22 es ' + numero4
}
alert(resta (48, 22))

//e)

function operación(x)
{
    let numero5= x * x + 5
    return 'el resultado 8 elevado a 2 + 5 es ' + numero5
}
console.log(operación (8))

//2)

function saludar()
{
    let nombre = prompt('Introduce tu nombre')
    return 'Bienvenido ' + nombre
}
alert(saludar())