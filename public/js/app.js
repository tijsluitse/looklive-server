$(document).ready(function(){
    
    $('.product').first().addClass('product-active');
    $(".productIndicator[data-uuid='"+$('.product').first().data('uuid')+"']").addClass('productIndicator-active');

    $('.productIndicator').on('click', function(e){
        var id = $(e.currentTarget).data('uuid');
        $('.productIndicator-active').removeClass('productIndicator-active');
        $(e.currentTarget).addClass('productIndicator-active');
        $('.product.product-active').removeClass('product-active');
        $(".product[data-uuid='"+id+"']").addClass('product-active');
    });
    
});
