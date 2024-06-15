let obj;
let index_of_champion;
let guessed = false;
function getRandomInt(min, max) 
{
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrayMaker()
{  
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", "http://localhost:3000/Characters", true); 
    xhr.getResponseHeader("Content-type", "application/json");  
    xhr.onload = function() { 
        obj = JSON.parse(this.responseText);  
    }
    xhr.send();
}
function Guessing()
{
    let Champion_name = document.getElementById('textInput').value;
    let option;
    for(i=0;i<obj.length;i++)
    {
        if(obj[i].name == Champion_name)
            {
                option = obj[i];
            }
    }
    if(Champion_name==obj[index_of_champion].name && option!=null && guessed==false)
        {
            guessed = true;
            Display(option);
            setTimeout(Guessed,1000);
        }
    else if (option!=null && guessed==false) 
        {
           Display(option);
        }
    option = null;
}
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Display(option) 
{
    let ul = document.getElementById("champion_display");
    let li = document.createElement("li");
    li.className = "li";
    let name = document.createElement("div");
    if (option.name == obj[index_of_champion].name) {
        name.className = "corr";
    } else {
        name.className = "incorr";
    }

    let type = document.createElement("div");
    if (option.type == obj[index_of_champion].type) {
        type.className = "corr";
    } else {
        type.className = "incorr";
    }

    let rarity = document.createElement("div");
    if (option.rarity == obj[index_of_champion].rarity) {
        rarity.className = "corr";
    } else {
        rarity.className = "incorr";
    }

    let range = document.createElement("div");
    if (option.range == obj[index_of_champion].range) {
        range.className = "corr";
    } else {
        range.className = "incorr";
    }

    let img = document.createElement("img");
    img.className = "img";
    let year_was_added = document.createElement("div");
    if (option.year_was_added < obj[index_of_champion].year_was_added) {
        year_was_added.className = "year_less";
    } else if (option.year_was_added > obj[index_of_champion].year_was_added) {
        year_was_added.className = "year_more";
    } else {
        year_was_added.className = "year_same";
    }

    name.textContent = option.name;
    type.textContent = option.type;
    rarity.textContent = option.rarity;
    range.textContent = option.range;
    year_was_added.textContent = option.year_was_added;
    img.src = option.sprite;

    ul.appendChild(li);
    li.appendChild(img);
    await sleep(1000); 
    li.appendChild(name);
    await sleep(1000); 
    li.appendChild(type);
    await sleep(1000); 
    li.appendChild(rarity);
    await sleep(1000); 
    li.appendChild(range);
    await sleep(1000); 
    li.appendChild(year_was_added);
}

function Guessed()
{
    let userClicked = confirm("Gratulacje, zgadłeś!!!");
    if (userClicked) {
        window.location.href="glowne_menu.html"
    }
}
function Init()
{
    arrayMaker();
    index_of_champion = getRandomInt(0,50);
}
document.addEventListener('DOMContentLoaded', function() {
    Init();
    const checkbox = document.getElementById('menu-toggle');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            onCheck();
        } else {
            onUncheck();
        }
    });

    function onCheck() {
        let menu = document.getElementById("menu");
        let show_menu = document.createElement('ul');
        show_menu.id = "show_menu";
        show_menu.className = "menu_shown"

        let menu_el_1 = document.createElement('li');
        let menu_el_2 = document.createElement('li');
        let menu_el_3 = document.createElement('li');
        menu_el_1.id = "sklep_id";
        menu_el_2.id = "galeria_id";
        menu_el_3.id = "menu_id";

        const menu_link_1 = document.createElement('a');
        const menu_link_2 = document.createElement('a');
        const menu_link_3 = document.createElement('a');
        menu_link_1.href = 'sklep-strony.html';
        menu_link_2.href = 'galeria_zadymiarzy.html';
        menu_link_3.href = 'glowne_menu.html';
        menu_link_1.textContent = 'Sklep strony';
        menu_link_2.textContent = 'Galeria zadymiarzy';
        menu_link_3.textContent = 'Menu glowne';

        menu_el_1.appendChild(menu_link_1);
        menu_el_2.appendChild(menu_link_2);
        menu_el_3.appendChild(menu_link_3);

        show_menu.appendChild(menu_el_1);
        show_menu.appendChild(menu_el_2);
        show_menu.appendChild(menu_el_3);
        menu.appendChild(show_menu);
    }

    function onUncheck() {
        const div = document.getElementById("menu");
        const ul = document.getElementById("show_menu");
        if (ul) {
            div.removeChild(ul);
        }
    }
});