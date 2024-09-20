document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Scroll event to handle bouncing elements
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.bounce');
        const scrollPosition = window.scrollY;

        elements.forEach((el, index) => {
            // Calculate bounce based on scroll position
            const offset = (scrollPosition + index * 100) % 100; // Modulo keeps it in a reasonable range
            const bounce = Math.sin(offset / 100 * Math.PI) * 10; // Sin wave for smooth bouncing

            // Apply transform with the bounce value
            el.style.transform = `translateY(${bounce}px)`;
        });
    });

    // Handle mouse movement for parallax effect
    document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('.parallax');
        const mouseX = e.clientX; // Get the horizontal mouse position
        const mouseY = e.clientY; // Get the vertical mouse position

        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.01; // Default speed
            const xPos = (mouseX - window.innerWidth / 2) * speed; // Calculate horizontal movement
            const yPos = (mouseY - window.innerHeight / 2) * speed; // Calculate vertical movement
            
            // Apply transform with calculated position
            el.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the target section by the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky header behavior with animation
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const stickyPoint = header.offsetTop; // Get the header's position from the top

        if (window.pageYOffset > stickyPoint) {
            header.classList.add('sticky'); // Add sticky class when scrolled past the header
        } else {
            header.classList.remove('sticky'); // Remove sticky class when back to the top
        }
    });
});
