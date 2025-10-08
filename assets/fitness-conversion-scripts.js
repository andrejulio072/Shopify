/* === SCRIPTS DE CONVERSÃO PARA LOJA FITNESS === */

document.addEventListener('DOMContentLoaded', function() {

  // === 1. BARRA DE PROGRESSO PARA FRETE GRÁTIS ===
  function initFreeShippingBar() {
    const freeShippingThreshold = 9900; // R$ 99,00 em centavos
    const cartTotalElements = document.querySelectorAll('[data-cart-total]');
    const progressBars = document.querySelectorAll('.free-shipping-progress');

    function updateFreeShippingProgress() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          const cartTotal = cart.total_price;
          const remaining = Math.max(0, freeShippingThreshold - cartTotal);
          const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

          progressBars.forEach(bar => {
            const progressFill = bar.querySelector('.progress-fill');
            const messageElement = bar.querySelector('.shipping-message');

            if (progressFill) {
              progressFill.style.width = progress + '%';
            }

            if (messageElement) {
              if (remaining > 0) {
                messageElement.textContent = `Faltam R$ ${(remaining/100).toFixed(2).replace('.', ',')} para FRETE GRÁTIS!`;
                messageElement.className = 'shipping-message shipping-message--progress';
              } else {
                messageElement.textContent = '🎉 Você ganhou FRETE GRÁTIS!';
                messageElement.className = 'shipping-message shipping-message--success';
              }
            }
          });
        });
    }

    // Atualizar quando carrinho mudar
    document.addEventListener('cart:change', updateFreeShippingProgress);
    updateFreeShippingProgress();
  }

  // === 2. TIMER DE URGÊNCIA NA SESSÃO ===
  function initSessionTimer() {
    const timerElements = document.querySelectorAll('[data-session-timer]');
    const sessionDuration = 10 * 60 * 1000; // 10 minutos

    timerElements.forEach(element => {
      let startTime = localStorage.getItem('session_start');
      if (!startTime) {
        startTime = Date.now();
        localStorage.setItem('session_start', startTime);
      }

      function updateTimer() {
        const elapsed = Date.now() - parseInt(startTime);
        const remaining = Math.max(0, sessionDuration - elapsed);

        if (remaining > 0) {
          const minutes = Math.floor(remaining / 60000);
          const seconds = Math.floor((remaining % 60000) / 1000);
          element.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        } else {
          element.textContent = 'Tempo esgotado!';
          element.classList.add('timer-expired');
        }
      }

      updateTimer();
      setInterval(updateTimer, 1000);
    });
  }

  // === 3. NOTIFICAÇÃO DE COMPRA SOCIAL ===
  function initSocialProofNotifications() {
    const notifications = [
      'João de São Paulo acabou de comprar Whey Protein 900g',
      'Maria do Rio de Janeiro comprou Pré-Treino Energy',
      'Carlos de Belo Horizonte adquiriu Creatina Monohidratada',
      'Ana de Porto Alegre comprou Kit Massa Magra',
      'Pedro de Salvador adquiriu BCAA Recovery'
    ];

    function showNotification() {
      const notification = document.createElement('div');
      notification.className = 'social-proof-notification';
      notification.innerHTML = `
        <div class="notification-content">
          <span class="notification-icon">🔥</span>
          <span class="notification-text">${notifications[Math.floor(Math.random() * notifications.length)]}</span>
          <button class="notification-close">&times;</button>
        </div>
      `;

      document.body.appendChild(notification);

      // Mostrar notificação
      setTimeout(() => notification.classList.add('show'), 100);

      // Esconder automaticamente após 5 segundos
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 5000);

      // Botão de fechar
      notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      });
    }

    // Mostrar primeira notificação após 30 segundos
    setTimeout(showNotification, 30000);

    // Mostrar notificações a cada 2-3 minutos
    setInterval(showNotification, Math.random() * 60000 + 120000);
  }

  // === 4. CONTADOR DE VISUALIZAÇÕES ===
  function initViewCounter() {
    const productId = document.querySelector('[data-product-id]')?.getAttribute('data-product-id');
    if (!productId) return;

    // Simular contador de visualizações
    const viewCount = Math.floor(Math.random() * 50) + 20;
    const viewCounters = document.querySelectorAll('[data-view-counter]');

    viewCounters.forEach(counter => {
      counter.textContent = `${viewCount} pessoas visualizaram este produto hoje`;
    });
  }

  // === 5. INDICADOR DE ESTOQUE BAIXO ===
  function initLowStockIndicator() {
    const stockElements = document.querySelectorAll('[data-inventory-quantity]');

    stockElements.forEach(element => {
      const quantity = parseInt(element.getAttribute('data-inventory-quantity'));

      if (quantity <= 10 && quantity > 0) {
        const warning = document.createElement('div');
        warning.className = 'low-stock-warning';
        warning.innerHTML = `
          <span class="warning-icon">⚠️</span>
          <span>Restam apenas ${quantity} unidades!</span>
        `;
        element.appendChild(warning);
      }
    });
  }

  // === 6. SCROLL PARA REVIEWS ===
  function initScrollToReviews() {
    const reviewButtons = document.querySelectorAll('[data-scroll-to-reviews]');

    reviewButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const reviewsSection = document.querySelector('#reviews, .reviews, [data-reviews]');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // === 7. COPY TO CLIPBOARD ===
  function initCopyToClipboard() {
    const copyButtons = document.querySelectorAll('[data-copy]');

    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = button.textContent;
          button.textContent = '✓ Copiado!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        });
      });
    });
  }

  // === 8. WHATSAPP FLUTUANTE ===
  function initFloatingWhatsApp() {
    if (document.querySelector('.whatsapp-float')) return;

    const whatsappNumber = '5511999999999'; // Substituir pelo número real
    const whatsappButton = document.createElement('div');
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.innerHTML = `
      <a href="https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre os produtos."
         target="_blank" rel="noopener">
        <span class="whatsapp-icon">💬</span>
        <span class="whatsapp-text">Fale Conosco</span>
      </a>
    `;

    document.body.appendChild(whatsappButton);
  }

  // === 9. EXIT INTENT POPUP ===
  function initExitIntentPopup() {
    let exitIntentShown = false;

    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        showExitIntentPopup();
      }
    });

    function showExitIntentPopup() {
      const popup = document.createElement('div');
      popup.className = 'exit-intent-popup';
      popup.innerHTML = `
        <div class="popup-overlay">
          <div class="popup-content">
            <button class="popup-close">&times;</button>
            <h3>Espera! Não vá embora! 🛑</h3>
            <p>Ganhe <strong>15% OFF</strong> na sua primeira compra!</p>
            <div class="popup-form">
              <input type="email" placeholder="Seu melhor e-mail" required>
              <button type="submit">QUERO O DESCONTO</button>
            </div>
            <small>*Desconto válido apenas para novos clientes</small>
          </div>
        </div>
      `;

      document.body.appendChild(popup);
      setTimeout(() => popup.classList.add('show'), 100);

      // Fechar popup
      popup.querySelector('.popup-close').addEventListener('click', () => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
      });

      popup.querySelector('.popup-overlay').addEventListener('click', (e) => {
        if (e.target === popup.querySelector('.popup-overlay')) {
          popup.classList.remove('show');
          setTimeout(() => popup.remove(), 300);
        }
      });
    }
  }

  // === INICIALIZAR TODAS AS FUNCÕES ===
  initFreeShippingBar();
  initSessionTimer();
  initSocialProofNotifications();
  initViewCounter();
  initLowStockIndicator();
  initScrollToReviews();
  initCopyToClipboard();
  initFloatingWhatsApp();
  initExitIntentPopup();

});

// === CSS PARA OS SCRIPTS ===
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  /* Free Shipping Progress Bar */
  .free-shipping-progress {
    background: #e9ecef;
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
    margin: 10px 0;
  }

  .progress-fill {
    background: linear-gradient(135deg, #FF6B35 0%, #E74C3C 100%);
    height: 100%;
    transition: width 0.5s ease;
  }

  .shipping-message {
    font-weight: 600;
    margin-top: 8px;
  }

  .shipping-message--progress {
    color: #E74C3C;
  }

  .shipping-message--success {
    color: #28A745;
  }

  /* Social Proof Notifications */
  .social-proof-notification {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    padding: 15px 20px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    max-width: 350px;
  }

  .social-proof-notification.show {
    transform: translateX(0);
  }

  .notification-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .notification-icon {
    font-size: 1.2rem;
  }

  .notification-text {
    flex: 1;
    font-size: 0.9rem;
    color: #2c3e50;
  }

  .notification-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #6c757d;
  }

  /* Low Stock Warning */
  .low-stock-warning {
    background: #fff3cd;
    color: #856404;
    padding: 10px 15px;
    border-radius: 8px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  /* WhatsApp Float */
  .whatsapp-float {
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 1000;
  }

  .whatsapp-float a {
    background: #25D366;
    color: white;
    padding: 15px 20px;
    border-radius: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
    transition: all 0.3s ease;
    font-weight: 600;
  }

  .whatsapp-float a:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
    color: white;
  }

  /* Exit Intent Popup */
  .exit-intent-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .exit-intent-popup.show {
    opacity: 1;
    visibility: visible;
  }

  .popup-overlay {
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .popup-content {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    max-width: 500px;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }

  .exit-intent-popup.show .popup-content {
    transform: scale(1);
  }

  .popup-close {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #6c757d;
  }

  .popup-form {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }

  .popup-form input {
    flex: 1;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
  }

  .popup-form button {
    background: linear-gradient(135deg, #FF6B35 0%, #E74C3C 100%);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .social-proof-notification {
      left: 10px;
      right: 10px;
      max-width: none;
    }

    .whatsapp-float {
      bottom: 80px;
      right: 15px;
    }

    .popup-content {
      padding: 30px 20px;
    }

    .popup-form {
      flex-direction: column;
    }
  }
`;

document.head.appendChild(styleSheet);
