// Função chamada a cada segundo
function updateClock() {
    // Obtém a data e horas atuais do sistema
    const now = new Date();

    // Extrair horas, minutos e segundos
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatação para 2 dígitos (ex: 01, 02)
    // Se o número for menor que 10, é adicionado um '0' na frente
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Monta a String final no formato: HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Atualiza o conteúdo no elemento HTML
    document.getElementById('time').textContent = timeString;
}

// Configura a função para rodar automaticamente a cada 1000 milissegundos (1 segundo)
setInterval(updateClock, 1000);

// Chama a função imediatamente para não atrasar inicialmente
updateClock();