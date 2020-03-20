$("#submit").click(function () { 
    if ($('#room-number').val() != ''){
        $('#room-number').css('borderColor','green');
        $('.details-table').removeClass('d-none');
    }
    else{
        $('#room-number').css('borderColor','red');
    }
});