function contact (main) {
    const mainContainerContact = document.createElement('div');
    mainContainerContact.className = 'mainContainerContact';
    main.appendChild(mainContainerContact)

    const containerContact = document.createElement('div');
    containerContact.className = 'containerContact';
    mainContainerContact.appendChild(containerContact);

    const containerPhone = document.createElement('div');
    containerPhone.className = 'containerPhone';
    const phoneLogo = document.createElement('img');
    const phoneNumber = document.createElement('p');
    phoneLogo.className = 'phoneLogo';
    phoneLogo.src = './img/phone.svg';
    phoneNumber.className = 'phoneNumber';
    phoneNumber.textContent = '(01)436-3213';
    containerPhone.appendChild(phoneLogo);
    containerPhone.appendChild(phoneNumber);

    const containerAddress = document.createElement('div');
    containerAddress.className = 'containerAddress';
    const addressLogo = document.createElement('img');
    const addressText = document.createElement('p');
    addressLogo.className = 'addressLogo';
    addressLogo.src = './img/home.svg';
    addressText.className = 'addressText';
    addressText.textContent = 'Av. Paracas Nro.236 Urb.Los Recaudadores – Ate – Lima';
    containerAddress.appendChild(addressLogo);
    containerAddress.appendChild(addressText);

    const iframeMap = document.createElement('iframe');
    iframeMap.className = 'iframeMap';
    iframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.522109143917!2d-76.9875407!3d-12.0763669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c63621b46767%3A0xc64704f7bfe852e6!2sParacas%20236%2C%20Lima%2015022!5e0!3m2!1ses!2spe!4v1702335430580!5m2!1ses!2spe";


    containerContact.appendChild(containerPhone);
    containerContact.appendChild(containerAddress);
    containerContact.appendChild(iframeMap);
    main.style.height = '100vh'; 
}

export default contact;