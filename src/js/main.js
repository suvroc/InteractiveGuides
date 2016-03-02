$('.example a').click(function(event) {
    var selector = $(event.target).closests('a').attr('href');
    
    $('.guides .guide').hide(0, function() {
        $(selector.replace('.', '\\.')).show(0);
    });
})