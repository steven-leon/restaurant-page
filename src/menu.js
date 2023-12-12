function menu (main) {
    const mainContainerMenu = document.createElement('div');
    mainContainerMenu.className = 'mainContainerMenu';
    main.appendChild(mainContainerMenu)

    const cardContainer = document.createElement('div');
    cardContainer.className = 'cardContainer';
    mainContainerMenu.appendChild(cardContainer);

    const menuInformation = [
        {img: 'menu1.jpg', title: '1/4 pollo', description: 'papas fritas + ensalada'},
        {img: 'menu2.jpg', title: '1/4 pollo', description: 'papas fritas + ensalada + gaseosa de 500ml'},
        {img: 'menu3.jpg', title: '1/2 pollo', description: 'papas fritas + ensalada'},
        {img: 'menu4.jpg', title: '1/2 pollo', description: 'papas fritas + ensalada + 2 gaseosas de 500 ml'},
        {img: 'menu5.jpg', title: 'Pollo oferta', description: 'papas fritas + ensalada + gaseosa de 1.5Lt'},
        {img: 'menu6.jpg', title: 'Combinado familiar', description: 'papas fritas+ ensalada + arroz chaufa + gaseosa de 1.5 Lt'},
    ];

    // const cardMenu = document.createElement('div');
    // cardMenu.className = 'cardMenu';
    // mainContainerMenu.appendChild(cardMenu);

    menuInformation.forEach(item => {
        
        const cardMenu = document.createElement('div');
        cardMenu.className = 'cardMenu';

        const menuImg = document.createElement('img');
        menuImg.className = 'menuImg';
        menuImg.src = './img/' + item.img;

        const menuTitle = document.createElement('p');
        menuTitle.className = 'menuTitle';
        const menuTitleContent = document.createTextNode(item.title);
        menuTitle.appendChild(menuTitleContent);

        const menuDescription = document.createElement('p');
        menuDescription.className = 'menuDescription';
        const menuDescriptionContent = document.createTextNode(item.description);
        menuDescription.appendChild(menuDescriptionContent);

        
        cardMenu.appendChild(menuImg);
        cardMenu.appendChild(menuTitle);
        cardMenu.appendChild(menuDescription);
        cardContainer.appendChild(cardMenu);
    })

    main.style.height = '100%'; 
}

export default menu;