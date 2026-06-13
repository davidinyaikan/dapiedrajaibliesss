// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== INTERSECTION OBSERVER UNTUK ANIMASI SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua cards
document.querySelectorAll('.prestasi-card, .hobi-card, .galeri-item').forEach(card => {
    observer.observe(card);
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Simple validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show success message
            const btn = contactForm.querySelector('.btn-primary');
            const originalText = btn.textContent;
            btn.textContent = '✓ Pesan Terkirim!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
        } else {
            alert('Mohon isi semua field terlebih dahulu!');
        }
    });
}

// ========== SOCIAL LINKS FUNCTIONALITY ==========
const whatsappLink = document.querySelector('.social-link.whatsapp');
const instagramLink = document.querySelector('.social-link.instagram');
const tiktokLink = document.querySelector('.social-link.tiktok');

// Update links - ganti dengan data Anda
if (whatsappLink) {
    whatsappLink.href = 'https://wa.me/6281234567890'; // Ganti nomor WA
    whatsappLink.addEventListener('click', (e) => {
        // Bisa tambahkan tracking atau animasi di sini
    });
}

if (instagramLink) {
    instagramLink.href = 'https://instagram.com/username'; // Ganti username
}

if (tiktokLink) {
    tiktokLink.href = 'https://tiktok.com/@username'; // Ganti username
}

// ========== SMOOTH SCROLL UNTUK BUTTON ==========
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== ANIMASI LOADING PAGE ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations for elements yang visible
    const cards = document.querySelectorAll('.prestasi-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 100);
    });
});

// ========== PARALLAX EFFECT (OPTIONAL) ==========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ========== GALLERY IMAGE LOADER ==========
// Jika Anda ingin menambahkan foto asli di galeri, uncomment bagian ini
/*
const galleryImages = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    'path/to/image4.jpg',
    'path/to/image5.jpg',
    'path/to/image6.jpg'
];

document.querySelectorAll('.galeri-item').forEach((item, index) => {
    if (galleryImages[index]) {
        const img = document.createElement('img');
        img.src = galleryImages[index];
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        item.innerHTML = '';
        item.appendChild(img);
    }
});
*/

// ========== COUNTER ANIMASI (OPTIONAL) ==========
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========== COPY EMAIL TO CLIPBOARD (OPTIONAL) ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// ========== PREVENT RIGHT CLICK (OPTIONAL) ==========
// Uncomment jika ingin disable right click
/*
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
*/

// ========== LOG INITIALIZATION ==========
console.log('✓ Portfolio website loaded successfully!');
console.log('✓ Mobile menu toggle active');
console.log('✓ Smooth scrolling enabled');
console.log('✓ Form validation ready');

// Animasi pada saat page load selesai
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ All scripts initialized!');
});