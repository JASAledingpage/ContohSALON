document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                const mobileMenu = document.getElementById('mobile-menu');
                const mainNav = document.querySelector('.main-nav');
                if (mobileMenu && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Optional: animate hamburger icon
        });
    }

    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animasi Fade-in saat scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Dummy "Add to Cart" functionality (hanya contoh, tidak ada backend)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);

            alert(`"${productName}" (Rp ${productPrice.toLocaleString('id-ID')}) telah ditambahkan ke keranjang Anda! (Fungsi ini adalah contoh dan tidak benar-benar menyimpan data.)`);
            // Di sini Anda bisa menambahkan logika untuk keranjang belanja sesungguhnya
            // Misalnya: menyimpan ke localStorage, menampilkan notifikasi, dll.
        });
    });

    // Testimonial Slider (dasar, bisa dikembangkan dengan Swiper.js/Slick Carousel)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        // Implementasi sederhana untuk menunjukkan bahwa ini adalah area slider.
        // Untuk fungsionalitas slider otomatis/panah, akan membutuhkan lebih banyak JS.
        // Misal, Anda bisa menambahkan tombol panah dan mengubah `scrollLeft`
        // atau menggunakan library seperti Swiper.js untuk fitur lengkap.
    }
});

