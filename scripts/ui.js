(function (window, document) {

    var layout   = document.getElementById('layout'),
        menuLinks = document.getElementsByClassName('menu-link-toggle');

    function toggleClass(element, className) {
        $(element).toggleClass(className);
    }

    for (var i = 0; i < menuLinks.length; i++)
    {
        var menuLink = menuLinks[i];
        menuLink.onclick = function (e) {
            var active = 'active';

            e.preventDefault();
            var menu_id = $(this).data('menu'),
              menu = document.getElementById(menu_id),
              layout_id = $(this).data('layout'),
              layout = document.getElementById(layout_id);
            toggleClass(layout, active);
            toggleClass(menu, active);
            toggleClass(menuLink, active);
        };
    }

}(this, this.document));
