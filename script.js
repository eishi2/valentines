let isOpen = false;

        function toggleCard() {
            const card = document.getElementById('card');
            const btn = document.getElementById('openBtn');
            
            isOpen = !isOpen;
            
            if (isOpen) {
                card.classList.add('open');
                btn.textContent = 'Close Card';
                createConfetti();
            } else {
                card.classList.remove('open');
                btn.textContent = 'Open Card';
            }
        }

        function createConfetti() {
            const confettiPieces = 30;
            const colors = ['#ff6b9d', '#ff85a1', '#ffd700', '#ffb3c1', '#ff69b4'];

            for (let i = 0; i < confettiPieces; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s linear forwards`;
                
                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }
        }

        // Create floating hearts in background
        function createBackgroundHeart() {
            const heartContainer = document.getElementById('heartContainer');
            const floatingHeart = document.createElement('div');
            floatingHeart.classList.add('floating-heart');
            
            // Random heart emoji
            const hearts = ['❤️', '💖', '💗', '💕', '💝'];
            floatingHeart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Random horizontal position
            const randomLeft = Math.random() * 100;
            floatingHeart.style.left = randomLeft + '%';
            
            // Random animation duration (3-6 seconds)
            const duration = Math.random() * 3 + 3;
            floatingHeart.style.animationDuration = duration + 's';
            
            // Random animation delay
            const delay = Math.random() * 2;
            floatingHeart.style.animationDelay = delay + 's';
            
            // Random size variation
            const size = Math.random() * 0.6 + 0.7;
            floatingHeart.style.transform = `scale(${size})`;
            
            heartContainer.appendChild(floatingHeart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                floatingHeart.remove();
            }, (duration + delay) * 1000);
        }

        // Create background hearts continuously
        setInterval(createBackgroundHeart, 400);

        // Create initial background hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createBackgroundHeart();
            }, i * 200);
        }