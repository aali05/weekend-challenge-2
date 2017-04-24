$( document ).ready(docReady);
function docReady() {
  console.log('JQ up and running');
// object
var objectToSend = {
  x: null,
  y: null,
  type: null
}; //end objectToSend
// event listeners
$('.clear').on('click', emptyInput);
$('.equalsButton').on('click', equals);
$('.numberButton').on('click', number);
$('.operatorButton').on('click', operate);
// function to clear input
function emptyInput(){
  console.log('clear has been clicked');
  $('.inputOutput').val('');
} // end emptyInput
// function for equalsButton
function equals() {
console.log('equals has been clicked');
objectToSend.y = $('.inputOutput').val();
console.log('sending', objectToSend);
$.ajax({
  type: 'POST',
  url: '/calculate',
  data: objectToSend ,
  success: function (response) {
    console.log('back from server with:', response);
    // have response print on DOM
    $('.inputOutput').val(response.number);
  }
  });
}//end equals

function number() {
  var value = $( this ).data( 'value' );
  console.log( 'in numberButton on click:', value );
  var currentNumber = $( '.inputOutput').val();
  $( '.inputOutput').val( currentNumber + value );
} //end number
function operate() {
  console.log('add, multiply, subtract, or divide have been clicked')
  var type = $( this ).data( 'type' );
  objectToSend.x = $( '.inputOutput' ).val();
  objectToSend.type = type;
  console.log( 'operatorButton on click:', objectToSend );
  $( '#inputOutput' ).val( '' );
  emptyInput();
} // end operate



}; // end docReady
