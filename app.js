// Creating a JavaScript variable:
let myButton = document.getElementById('best-btin');

// Creating a jQuery variable: 
let $myButton = $('#best-btn'); 

// Selecting Elements 

//Typical DOM selection: 
let el =document.getElementById('someID');
let elements = document.getElementsByClassName('box');

// In JQuery: 
let $el = $('#someID');
let $elements = $('.box');

// Creating Elements 

let para = document.createElement('p');
let msg = document.createTextNode('I am a text node!');
para.apeendChild(msg);

// jQuery:
let msg = 'I am test!';
$('<p>' + msg + '</p>').appendTo('#someElementId');


// Modifying Elements 

// add, toogle, or remove c;ess with Jquery
$('h1').addClass('big-red');
$('h1').toggleClass('big-red');
$('h1').removeClass('big-red');

//add attributes 
$('ul').att('id', 'grocery-list');
$('img#cat-1').att('src', 'link'); 

//Styling Elements

//changing font size 
$('p').css('font-size', '3em');

// changing mutliple properties
$('p').css({
    'background-color': 'red',
    'color': 'white',
    'font-size': '3em'
});

//Returns the value -does not set
$('p').css('background-color');

//Setting/Getting Text Values

//these two statements yield the same result 
$('<p>I am a paragragh with text!</p>');
$('<p></p>').text('I am a paragragh with text!');

// Get the values for the email and password inputs
$('#email').val();
$('#pwd').val();

//Set the email and password inputs to these values
$('#email').val('me@gmail.com');
$('#pwd').val('********'); 

//Inserting elements 

let $para = $('<p> Para is a paragraph.</p>'); 

$('body').append($para); //Add to the end of the body
$('body').prepend($para); //Add to the top of the body

$($para).append('body'); //Add to the end of the body
$($para).PependTo('body'); //Add to the top of the body

$('#box').after($para);  //Add after (and outside of) #box
$('#box').before($para);  //Add before (and outside of) #box

//Event Handilng 

let btn = document.getElementById('submit');
btn.addEventListener('click', function() {
    header.appendChild(para);
});

//JQuery:
$('button#submit').click(function () {
    $header.append($para);
})

//DOMContentLoaded: ready method
$(document).ready(function() {
    $('#someID').css('background-color');
    $('#someID').css('background-color', 'blue'); 
});
