// Função chamada a cada segundo
function updateClock() {
    // Obtém a data e horas atuais do sistema
    const now = new Date();

    // Extrair horas, minutos e segundos
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    /* Formatação para 2 dígitos (ex: 01, 02)
    // Se o número for menor que 10, é adicionado um '0' na frente
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds; */

    // Formatação para 12h com AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Converte 0h para 12h
    hours = hours.toString().padStart(2, '0');
    
    // Monta a String final no formato: HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Atualiza o conteúdo no elemento HTML
    document.getElementById('time').textContent = timeString;
    
    // Extrair dias, meses e ano
    const day = now.getDate().toString().padStart(2, '0');
    // getMonth() retorna um índice de 0 a 11, adiciona-se 1 para o mês correto
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    // Monta a String final no formato brasileiro: DD/MM/YYYY
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('date').textContent = dateString;
}

// Chama a função imediatamente para carregar
updateClock();

// Configura a função para rodar automaticamente a cada 1000 milissegundos (1 segundo)
setInterval(updateClock, 1000);