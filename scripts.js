document.addEventListener('DOMContentLoaded', () => {
    let coinCount = 0;
    let dailyRewardDay = 1;
    
    // Elementos del DOM
    const coin = document.getElementById('coin');
    const coinCountDisplay = document.getElementById('coinCount');
    const rewardPopup = document.getElementById('rewardPopup');
    const rewardDayDisplay = document.getElementById('rewardDay');
    const claimRewardButton = document.getElementById('claimReward');

    // Tap para ganar monedas
    coin.addEventListener('click', () => {
        coinCount++;
        coinCountDisplay.textContent = `Coins: ${coinCount}`;
    });

    // Mostrar pop-up de recompensa diaria
    const showDailyRewardPopup = () => {
        rewardDayDisplay.textContent = dailyRewardDay;
        rewardPopup.classList.remove('hidden');
    };

    // Reclamar recompensa diaria
    claimRewardButton.addEventListener('click', () => {
        // Lógica para aumentar las monedas
        coinCount += dailyRewardDay * 10; // Por ejemplo, el día 1 da 10 monedas, el día 2 da 20, etc.
        coinCountDisplay.textContent = `Coins: ${coinCount}`;
        
        dailyRewardDay = (dailyRewardDay % 7) + 1; // Resetea al día 1 después del 7
        rewardPopup.classList.add('hidden');
    });

    // Simula mostrar la recompensa diaria después de un tiempo (aquí lo hacemos manual)
    setTimeout(showDailyRewardPopup, 1000); // Mostrar el popup después de 1 segundo
});
