// Informações dos desenvolvedores
const developers = {
    dev1: {
        name: "Kelvis Duank",
        description: "Sou Kelvis Duank, um jovem de 16 anos do povo indígena Xakriabá, atualmente cursando o Ensino Médio Integrado com técnico em Informática para Internet no Instituto Federal Goiano - Campus Urutaí, e também faço parte do programa Programadores do Amanhã. Minha paixão pela tecnologia começou ainda na infância, e sigo cultivando esse interesse, sempre buscando aprender novas ferramentas e tendências. Nos meus momentos livres, além de explorar o mundo da tecnologia, gosto de praticar esportes, especialmente vôlei.",
        socials: `<a href="kelvisduankxkb.netlify.app" target="_blank">Portifólio</a>
                  <a href="https://github.com/Kelvisduank" target="_blank">GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.087-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.305-.535-1.535.117-3.2 0 0 1.005-.322 3.3 1.23a11.47 11.47 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.66 1.665.248 2.895.12 3.2.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.9-.015 3.3 0 .32.215.694.825.577C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z"/>
                     </svg>
                  </a>`
    },
    dev2: {
        name: "Lara",
        description: "Sou a Lara, estou no 2° Ano de informatica",
        socials: ".",
    },
    dev3: {
        name: "João Pedro",
        description: "Oi, Sou o João Pedro.. sou do 2° B de info",
        socials: ".",
    },
    dev4: {
        name: "Diogo Ribeiro",
        description: "Oi, eu sou o Diogo, estou no 2° Ano A de info.",

        socials: ".",
    },
   
};

// Função para abrir o modal
function openModal(devId) {
    const modal = document.getElementById("myModal");
    const devInfo = developers[devId];

    document.getElementById("modal-title").innerText = devInfo.name;
    document.getElementById("modal-description").innerText = devInfo.description;
    document.getElementById("modal-socials").innerHTML = devInfo.socials;

    modal.style.display = "block"; // Exibe o modal

    // Centraliza o modal na tela
    const modalContent = document.querySelector(".modal-content");
    const viewportHeight = window.innerHeight;
    const modalHeight = modalContent.offsetHeight;
    const topOffset = (viewportHeight - modalHeight) / 2;

    modalContent.style.marginTop = `${topOffset}px`; // Centraliza verticalmente
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none"; // Esconde o modal
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};