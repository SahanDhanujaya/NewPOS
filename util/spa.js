$('#dashboard').css.display = 'block';
$('#customer-form').css.display = 'none';

$('#dashboard-nav').on('click',()=>{
    $('#dashboard').css.display = 'block';
    $('#customer-form').css.display = 'none';
});

$('#customer-nav').on('click',()=>{
    $('#dashboard').css.display = 'none';
    $('#customer-form').css.display = 'block';
});
