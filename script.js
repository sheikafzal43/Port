AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
        
        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        
        // Copyright Year
        document.getElementById('currentYear').textContent = new Date().getFullYear();

