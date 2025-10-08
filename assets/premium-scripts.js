/*
========================================
🚀 PREMIUM SHOPIFY JAVASCRIPT
International Fitness Brand Inspired
Modern Interactions & UX Enhancements
========================================
*/

(function() {
  'use strict';

  // DOM READY
  document.addEventListener('DOMContentLoaded', function() {
    initPremiumFeatures();
  });

  function initPremiumFeatures() {
    initMobileMenu();
    initQuickAdd();
    initScrollEffects();
    initAnimations();
    initLazyLoading();
    initNewsletterForm();
    initProductTabs();
    initSmoothScroll();
    initSearchOverlay();
    initCartDrawer();
    initTooltips();
    initLoadingStates();
  }

  // ===============================
  // MOBILE MENU
  // ===============================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const menuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;

    if (!menuToggle || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('active');
      body.style.overflow = 'hidden';
      menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = mobileMenu.classList.contains('active');
      isOpen ? closeMenu() : openMenu();
    });

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    // Close on overlay click
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ===============================
  // QUICK ADD FUNCTIONALITY
  // ===============================
  function initQuickAdd() {
    const quickAddButtons = document.querySelectorAll('.quick-add-btn');
    
    quickAddButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productId = this.dataset.productId;
        const variantId = this.dataset.variantId;
        
        if (!variantId) {
          // Redirect to product page if no variant specified
          const productUrl = this.dataset.productUrl;
          if (productUrl) {
            window.location.href = productUrl;
          }
          return;
        }

        addToCart(variantId, 1, this);
      });
    });
  }

  function addToCart(variantId, quantity, button) {
    const originalText = button.textContent;
    button.textContent = 'Adicionando...';
    button.disabled = true;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: variantId,
        quantity: quantity
      })
    })
    .then(response => response.json())
    .then(data => {
      button.textContent = '✓ Adicionado';
      button.classList.add('success');
      
      // Update cart count
      updateCartCount();
      
      // Show success notification
      showNotification('Produto adicionado ao carrinho!', 'success');
      
      // Reset button after 2 seconds
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.classList.remove('success');
      }, 2000);
    })
    .catch(error => {
      console.error('Error:', error);
      button.textContent = 'Erro - Tente novamente';
      button.classList.add('error');
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.classList.remove('error');
      }, 3000);
      
      showNotification('Erro ao adicionar produto. Tente novamente.', 'error');
    });
  }

  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
          element.textContent = cart.item_count;
          element.style.display = cart.item_count > 0 ? 'flex' : 'none';
        });
      })
      .catch(error => console.error('Error updating cart count:', error));
  }

  // ===============================
  // SCROLL EFFECTS
  // ===============================
  function initScrollEffects() {
    const header = document.querySelector('.premium-header');
    if (!header) return;

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add/remove scrolled class
      if (scrollTop > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide/show header on scroll direction
      if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }

      lastScrollTop = scrollTop;
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===============================
  // SCROLL ANIMATIONS
  // ===============================
  function initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Don't unobserve to allow re-animation
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('[class*="animate-"], .fade-in, .slide-up, .slide-left, .slide-right');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // ===============================
  // LAZY LOADING
  // ===============================
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // ===============================
  // NEWSLETTER FORM
  // ===============================
  function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form, .premium-footer__newsletter-form');
    
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        if (!email || !isValidEmail(email)) {
          showNotification('Por favor, insira um e-mail válido.', 'error');
          return;
        }

        button.textContent = 'Enviando...';
        button.disabled = true;

        // Simulate API call (replace with actual newsletter service)
        setTimeout(() => {
          button.textContent = '✓ Inscrito';
          form.querySelector('input[type="email"]').value = '';
          showNotification('Obrigado! Você foi inscrito na newsletter.', 'success');
          
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 3000);
        }, 1500);
      });
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ===============================
  // PRODUCT TABS
  // ===============================
  function initProductTabs() {
    const tabContainers = document.querySelectorAll('.product-tabs');
    
    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab-button');
      const contents = container.querySelectorAll('.tab-content');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.dataset.tab;
          
          // Remove active class from all tabs and contents
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          
          // Add active class to clicked tab and corresponding content
          this.classList.add('active');
          const targetContent = container.querySelector(`[data-tab-content="${targetId}"]`);
          if (targetContent) {
            targetContent.classList.add('active');
          }
        });
      });
    });
  }

  // ===============================
  // SMOOTH SCROLL
  // ===============================
  function initSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          
          const headerHeight = document.querySelector('.premium-header')?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===============================
  // SEARCH OVERLAY
  // ===============================
  function initSearchOverlay() {
    const searchTrigger = document.querySelector('.search-trigger');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-overlay input');

    if (!searchTrigger || !searchOverlay) return;

    function openSearch() {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput?.focus(), 100);
    }

    function closeSearch() {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    searchTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      openSearch();
    });

    if (searchClose) {
      searchClose.addEventListener('click', closeSearch);
    }

    // Close on overlay click
    searchOverlay?.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
        closeSearch();
      }
    });
  }

  // ===============================
  // CART DRAWER
  // ===============================
  function initCartDrawer() {
    const cartTriggers = document.querySelectorAll('.cart-trigger');
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartClose = document.querySelector('.cart-drawer-close');

    if (!cartDrawer) return;

    function openCart() {
      cartDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateCartDrawer();
    }

    function closeCart() {
      cartDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }

    cartTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
      });
    });

    if (cartClose) {
      cartClose.addEventListener('click', closeCart);
    }

    // Close on overlay click
    cartDrawer.addEventListener('click', function(e) {
      if (e.target === cartDrawer) {
        closeCart();
      }
    });
  }

  function updateCartDrawer() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        // Update cart drawer content
        // This would need to be implemented based on your cart drawer HTML structure
        console.log('Cart updated:', cart);
      })
      .catch(error => console.error('Error updating cart drawer:', error));
  }

  // ===============================
  // TOOLTIPS
  // ===============================
  function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', showTooltip);
      element.addEventListener('mouseleave', hideTooltip);
    });
  }

  function showTooltip(e) {
    const text = e.target.dataset.tooltip;
    if (!text) return;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

    e.target._tooltip = tooltip;
  }

  function hideTooltip(e) {
    if (e.target._tooltip) {
      e.target._tooltip.remove();
      delete e.target._tooltip;
    }
  }

  // ===============================
  // LOADING STATES
  // ===============================
  function initLoadingStates() {
    const loadingElements = document.querySelectorAll('.loading-trigger');
    
    loadingElements.forEach(element => {
      element.addEventListener('click', function() {
        this.classList.add('loading');
        
        // Remove loading class after action completes
        setTimeout(() => {
          this.classList.remove('loading');
        }, 2000);
      });
    });
  }

  // ===============================
  // NOTIFICATION SYSTEM
  // ===============================
  function showNotification(message, type = 'info', duration = 4000) {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(notif => notif.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification__content">
        <span class="notification__icon">${getNotificationIcon(type)}</span>
        <span class="notification__message">${message}</span>
        <button class="notification__close">&times;</button>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 400px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      border-left: 4px solid ${getNotificationColor(type)};
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;

    notification.querySelector('.notification__content').style.cssText = `
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      font-size: 14px;
      color: #2c3e50;
    `;

    notification.querySelector('.notification__close').style.cssText = `
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #6c757d;
      margin-left: auto;
    `;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    const timeout = setTimeout(() => {
      removeNotification(notification);
    }, duration);

    // Manual close
    notification.querySelector('.notification__close').addEventListener('click', () => {
      clearTimeout(timeout);
      removeNotification(notification);
    });
  }

  function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }

  function getNotificationIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  }

  function getNotificationColor(type) {
    const colors = {
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8'
    };
    return colors[type] || colors.info;
  }

  // ===============================
  // UTILITY FUNCTIONS
  // ===============================
  
  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Format currency
  function formatCurrency(amount, currency = 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency
    }).format(amount / 100);
  }

  // ===============================
  // GLOBAL FUNCTIONS (accessible from other scripts)
  // ===============================
  window.PremiumShopify = {
    showNotification,
    addToCart,
    updateCartCount,
    formatCurrency,
    debounce,
    throttle
  };

})();