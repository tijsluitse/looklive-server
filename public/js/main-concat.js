/* Code thanks to Dennis van Bennekom */
(function() {
    function init() {
        var links = document.querySelectorAll('a[data-url]');

        [].forEach.call(links, function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                var url = event.currentTarget.getAttribute('data-url');
                var href = event.currentTarget.href;

                history.pushState(null, null, href);

                loadPage(url);
            });
        });

        window.addEventListener('popstate', function(event) {
            var url = '/api' + window.location.pathname;

            if (url === '/api/') {
                url = '/api/feed';
            }

            loadPage(url)
        });
    }

    function loadPage(url, href) {
        var wrapper = document.querySelector('main');

        fetch(url)
            .then(response => response.text())
            .then(text => {
                wrapper.innerHTML = text;
                ready();
            });
    }

    function appearance() {
        // Appearance page
        var products = document.querySelectorAll('.product');

        products[0].classList.add('product-active');

        var firstIndicator = document.querySelector('.productIndicator[data-uuid="' + products[0].dataset.uuid + '"]');

        firstIndicator.classList.add('productIndicator-active');

        var indicators = document.querySelectorAll('.productIndicator');

        [].forEach.call(indicators, function(indicator) {
            indicator.addEventListener('click', function(event) {
                var id = event.target.dataset.uuid;

                var currentIndicatorActive = document.querySelector('.productIndicator-active');
                currentIndicatorActive.classList.remove('productIndicator-active');

                var newIndicatorActive = event.target;
                newIndicatorActive.classList.add('productIndicator-active');

                var currentActive = document.querySelector('.product-active');
                currentActive.classList.remove('product-active');

                var newActive = document.querySelector('.product[data-uuid="' + id + '"]');
                newActive.classList.add('product-active');
            });
        });
    }

    function ready() {
        init();

        if (window.location.pathname === '/') {
            feed();
        }

        // Credit: Robert van Steen
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        ready();
    }, false);
}());