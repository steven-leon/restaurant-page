import home from './home';
import menu from './menu';
import contact from './contact';
function loadWeb(){

    //header
    const header = document.createElement('header');
    document.body.appendChild(header);

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Norkys';
    headerH1.className = 'headerH1';
    header.appendChild(headerH1);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const pages = ['Home', 'Menu', 'Contact'];
   

    pages.forEach(function (page) {
        const li = document.createElement('li');
        li.className = 'headerLi';
        li.textContent = page;
        ul.appendChild(li);

        
    });

    //main
    const main = document.createElement('main');
    document.body.appendChild(main);

    ul.addEventListener('click', function (event) {
        // Verificar si el clic proviene de un elemento li
        if (event.target.tagName === 'LI') {
            const clickedElement = event.target.textContent.toLowerCase();

            // Eliminar el contenido existente
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }

            // Mostrar el contenido basado en el elemento clickeado
            switch (clickedElement) {
                case 'home':
                    home(main);
                    
                    break;
                case 'menu':
                    menu(main);
                    
                    break;
                case 'contact':
                    contact(main);
                    
                    break;
                default:
                    // Manejar otros casos o no hacer nada
                    break;
            }
        }
    });


    // Mostrar el contenido del home por defecto
    home(main)

    
   

    

    //footer
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2023 Steven Leon';
    document.body.appendChild(footer);
    
   
}

export default loadWeb;