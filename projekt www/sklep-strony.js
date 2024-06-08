let cart = [];
let totalSum = 0;

class Produkt {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

function dodaj_do_koszyka(name, image, price) {
    let produkt = new Produkt(name, image, price);
    cart.push(produkt);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function display_cart() {
    let ul = document.getElementById("ul");
    ul.innerHTML = "";
    cart.forEach(produkt => {
        let button = document.createElement("button");
        button.textContent = "Usuń";
        button.onclick = () => usun(produkt);

        let li1 = document.createElement("li");
        li1.textContent = produkt.name;

        let li2 = document.createElement("li");
        let img = document.createElement("img");
        img.src = produkt.image;
        li2.appendChild(img);

        let li3 = document.createElement("li");
        li3.textContent = "Cena: " + produkt.price + " zł";

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(button);
    });
}

function calculate_sum() {
    totalSum = 0;
    let div = document.getElementById("suma");
    cart.forEach(produkt => {
        totalSum += produkt.price;
    });
    div.textContent = "Razem: " + totalSum + " zł";
}

function usun(produkt) {
    let index = cart.indexOf(produkt);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    display_cart();
    calculate_sum();
}

function load_cart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    display_cart();
    calculate_sum();
}

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