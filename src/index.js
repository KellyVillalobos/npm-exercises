const $ = require('jquery');

const sayHello = () => console.log('Hello!');

sayHello();

$(document).ready(function () {
    $('body').html('<p>Goodbye!</p>');
});
