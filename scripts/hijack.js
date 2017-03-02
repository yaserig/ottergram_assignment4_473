var array_of_links = [].slice.call(document.querySelectorAll('a'));

function disable_Click(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('You cannot click!!!');
    });
}

array_of_links.forEach(disable_Click);
