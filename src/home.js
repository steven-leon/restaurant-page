function home(main){
    const mainContainerHome = document.createElement('div');
    mainContainerHome.className = 'mainContainerHome';
    main.appendChild(mainContainerHome);

    const containerInfo = document.createElement('div');
    containerInfo.className = 'containerInfo';
    mainContainerHome.appendChild(containerInfo);

    const firstParagraph = document.createElement('p');
    firstParagraph.className = 'firstParagraph';
    firstParagraph.textContent = 'Best pollos a la brasa in your country'
    containerInfo.appendChild(firstParagraph);

    const secondParagraph = document.createElement('p');
    secondParagraph.className = 'secondParagraph';
    secondParagraph.textContent = 'Made with passion since 1950';
    containerInfo.appendChild(secondParagraph);

    const imageHome = document.createElement('img');
    imageHome.className = 'imageHome';
    imageHome.src = './img/chef.jpg'
    containerInfo.appendChild(imageHome);

    const orderParagraph = document.createElement('p');
    orderParagraph.className = 'orderParagraph';
    orderParagraph.textContent = 'Order online or visit us!';
    containerInfo.appendChild(orderParagraph);

    main.style.height = '100vh'; 
}

export default home;