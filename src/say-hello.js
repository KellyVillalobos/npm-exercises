import $ from 'jquery';

export const sayHello = () => $('body').append('Hello from say-hello.js');
// sayHello();

export const backgroundColor =  () => $('body').css('background-color', 'red');


const data ={
    name: 'kelly villalobos',
    age: 39,
    dob: ''
}