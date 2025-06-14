        // Create stars
        function createStars() {
          const starsContainer = document.getElementById('stars');
          const starCount = 100;
          
          for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size (1-3px)
            const size = Math.random() * 2 + 1;
            
            // Random animation duration (3-8s)
            const duration = Math.random() * 5 + 3;
            
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--duration', `${duration}s`);
            
            // Random delay
            star.style.animationDelay = `${Math.random() * 5}s`;
            
            starsContainer.appendChild(star);
          }
        }
        
        // Payment option selection
        document.querySelectorAll('.payment-option').forEach(option => {
          option.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.payment-option').forEach(opt => {
              opt.classList.remove('selected', 'pulse');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected', 'pulse');
            
            // Show QRIS container if QRIS is selected
            const qrisContainer = document.getElementById('qrisContainer');
            if (this.dataset.type === 'qris') {
              qrisContainer.style.display = 'block';
            } else {
              qrisContainer.style.display = 'none';
            }
          });
        });
        
        // Copy to clipboard function
        function copyToClipboard(text) {
          navigator.clipboard.writeText(text).then(() => {
            // Show copied notification
            const notification = document.createElement('div');
            notification.textContent = 'Berhasil Menyalin';
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            notification.style.color = 'white';
            notification.style.padding = '10px 20px';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '1000';
            notification.style.animation = 'fadeInOut 2s ease-in-out';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
              notification.remove();
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy: ', err);
          });
        }
        
        // Show QRIS function
        function showQRIS() {
          const qrisContainer = document.getElementById('qrisContainer');
          qrisContainer.style.display = 'block';
          
          // Select the QRIS option
          document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('selected', 'pulse');
          });
          
          document.querySelector('.payment-option[data-type="qris"]').classList.add('selected', 'pulse');
        }
        
        // Process payment function
        function processPayment() {
  const url = 'https://wa.me/6285718171265';
  window.open(url, '_blank', 'noopener,noreferrer');
}
        
        // Join channel functio
        
        // Initialize stars when page loads
        window.addEventListener('load', createStars);
        
        // Add fadeInOut animation to style
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
                20% { opacity: 1; transform: translateX(-50%) translateY(0); }
                80% { opacity: 1; transform: translateX(-50%) translateY(0); }
                100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            }
        `;
        document.head.appendChild(style);