document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target element's ID from the href attribute
            const targetId = this.getAttribute('href');

            // Check if it's an internal link (starts with #)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent the default jump behavior

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate the position to scroll to, adjusting for the header height
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    // Scroll smoothly to the target position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});