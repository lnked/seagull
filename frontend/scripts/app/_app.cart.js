let app = app || {};

((body => {
    "use strict";

    app.cart = {

        init: function()
        {
            app.quantity.make({
                afterClick: function($element) {
                    // $element.addClass('is-disabled');
                },
                complete: function($element, id, count) {
                    // $element.removeClass('is-disabled');

                    // const $product = $element.closest('.j-product');
                    // const $amount = $product.find('.j-product-amount');

                    // $amount.html(currency($amount.data('price') * count));

                    // _this_.calculate();

                    // console.log("id :", id, $amount.data('price'), count);
                }
            });
        }

    };

}))(document.body);
