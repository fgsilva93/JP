function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and Beard'; 
    list.appendChild(item);
}

$('#button-id').click(function() {
    let item = '<li class="red">Apple and Oranges</li>';
    $('#grocery-list').append(item); 
    //$('#grocery-list').append('<li>Apple and Oranges</li>'); 
});
///$('grocery list').appendChild('<li>Apple and Oranges</li>'); 

$('#style-me').click(function() {
    $('.red').css('color', "red");
})

$(document).ready(function() { // wait ntil its ready
    $('<div></div>').css({
        'background-color': 'red', 
        'height': '100px', 
        'width': '100px'
   }).insertAfter('#grocery-list');
})