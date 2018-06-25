$(function () {
    $('[data-rel="tooltip"]').tooltip();
    
    $('[data-rel="popover"]').popover({
        html:true,
        placement: 'right'
    });
    
    $('.preventDefault').on('click', function(e){
        e.preventDefault();
    });
                 
    $('a.dropdown-toggle').attr('href', '#');

    /* Handling alerts */
    $('.alert').hide();
    $('.alert').fadeIn('slow');
    var alertTimeout = setTimeout(function() {
        $('.alert:not(.keepopen)').fadeOut('slow');
    }, 5000);
    $('.alert').mouseover(function(){
        clearTimeout(alertTimeout);
    });
    $('.alert .close').click(function(){
        $(this).parent('.alert').fadeOut('slow');
    });
    /* Handling alerts */
    
    $('label').click(function() {
        $(this).parents("form").find('#' + $(this).attr("for")).focus();
    });    

    
    
});

jQuery.fn.outerHTML = function(s) {
    return s
    ? this.before(s).remove()
    : jQuery("<p>").append(this.eq(0).clone()).html();
};

jQuery.fn.valText = function(s) {
    var value = $(this).val();
    var valueInTag = '<p>' + value + '</p>';
    return $(valueInTag).text();
};