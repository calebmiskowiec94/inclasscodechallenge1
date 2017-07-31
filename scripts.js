console.log('yes');
$('document').ready(function(){
  var counter = 0;
$('button').on('click',function(){
counter=counter+1;
$('body').append('<div>'+'<button id = "delete">'+"DELETE"+'</button>'+'<button>'+"swap"+'</button>'+"apples"+'<p>'+counter+'</P>'+'</div>');
$('#delete').remove('body');
});

});
