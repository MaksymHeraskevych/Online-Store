var plusBtn = document.getElementById('button_plus');
var numCount = document.getElementById('num_count');
var minusBtn = document.getElementById('button_minus');

plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
};
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
};


$('.window').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();

})
$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
    
})

$('.close').click(function() { 
    $('.overlay_popup, .popup').fadeOut();
})

