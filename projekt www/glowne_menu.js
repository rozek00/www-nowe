document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('menu-toggle');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            onCheck();
        } else {
            onUncheck();
        }
    });

    function onCheck() {
        let div = document.getElementById("menu");
        let show_menu = document.createElement('ul');
        show_menu.id = "show_menu";
        show_menu.className = "menu_shown"

        let menu_el_1 = document.createElement('li');
        let menu_el_2 = document.createElement('li');
        menu_el_1.id = "sklep_id";
        menu_el_2.id = "galeria_id";

        const menu_link_1 = document.createElement('a');
        const menu_link_2 = document.createElement('a');
        menu_link_1.href = 'sklep-strony.html';
        menu_link_2.href = 'galeria_zadymiarzy.html';
        menu_link_1.textContent = 'Sklep strony';
        menu_link_2.textContent = 'Galeria zadymiarzy';

        menu_el_1.appendChild(menu_link_1);
        menu_el_2.appendChild(menu_link_2);

        show_menu.appendChild(menu_el_1);
        show_menu.appendChild(menu_el_2);

        div.appendChild(show_menu);
    }

    function onUncheck() {
        const div = document.getElementById("menu");
        const ul = document.getElementById("show_menu");
        if (ul) {
            div.removeChild(ul);
        }
    }
});
