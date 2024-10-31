$('#dashboard').css('display','block');
$('#customer-form').css('display','none');
$('#item-form').css('display','none');

$('#dashboard-nav').on('click',function(){
    $('#dashboard').css('display','block');
    $('#customer-form').css('display','none');
    $('#item-form').css('display','none');
});

$('#customer-nav').on('click',function(){
    $('#dashboard').css('display','none');
    $('#customer-form').css('display','block');
    $('#item-form').css('display','none');
});

$('#item-nav').on('click',function(){
    $('#dashboard').css('display','none');
    $('#customer-form').css('display','none');
    $('#item-form').css('display','block');
});