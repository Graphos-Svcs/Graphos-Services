// main.js - الملف الرئيسي للوظائف
class GraphosApp {
    constructor() {
        this.currentLanguage = 'ar';
        this.services = [];
        this.init();
    }

    init() {
        this.initLoading();
        this.initNavigation();
        this.initServices();
        this.initLanguage();
        this.initScrollEffects();
        this.updateYear();
    }

    initLoading() {
        window.addEventListener('load', () => {
            const loadingBar = document.getElementById('loadingBar');
            let width = 0;
            
            const interval = setInterval(() => {
                width += 10;
                loadingBar.style.width = width + '%';
                
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loadingBar.style.opacity = '0';
                        setTimeout(() => loadingBar.remove(), 500);
                    }, 300);
                }
            }, 50);
        });
    }

    initNavigation() {
        // تأثير التمرير السلس
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // تأثير التمرير للهيدر
        window.addEventListener('scroll', () => {
            const header = document.getElementById('mainHeader');
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    initServices() {
        this.services = [
            {
                id: 1,
                name: 'تصميم الشعارات',
                icon: 'fas fa-palette',
                description: 'تصميم شعارات احترافية تعبر عن هوية علامتك التجارية',
                pricing: [
                    { duration: '4 أيام', price: 15 },
                    { duration: '3 أيام', price: 20 },
                    { duration: 'يومين', price: 25 },
                    { duration: 'يوم واحد', price: 30 },
                    { duration: '6-7 ساعات', price: 40 }
                ]
            },
            {
                id: 2,
                name: 'تصميم الفيديوهات',
                icon: 'fas fa-video',
                description: 'إنتاج فيديوهات إبداعية لتسويق منتجاتك وخدماتك',
                pricing: [
                    { duration: '30 ثانية', price: 20 },
                    { duration: '60 ثانية', price: 30 },
                    { duration: '90 ثانية', price: 40 },
                    { duration: '120 ثانية', price: 50 }
                ]
            },
            {
                id: 3,
                name: 'العروض التقديمية',
                icon: 'fas fa-desktop',
                description: 'تصميم شرائح احترافية لعروضك التقديمية',
                pricing: [
                    { duration: 'شريحة واحدة', price: 4, minSlides: 5 }
                ]
            },
            {
                id: 4,
                name: 'العرض الشامل',
                icon: 'fas fa-star',
                description: 'حزمة متكاملة تشمل شعار، فيديو، وعرض تقديمي',
                pricing: [
                    { duration: '10 شرائح + فيديو دقيقة + شعار', price: 65 },
                    { duration: '20 شريحة + فيديو دقيقتين + شعار', price: 115 }
                ]
            },
            {
                id: 5,
                name: 'أفكار المشاريع',
                icon: 'fas fa-lightbulb',
                description: 'تقديم أفكار إبداعية لمشاريعك وتطويرها',
                pricing: [
                    { duration: 'فكرة مشروع', price: 20 }
                ]
            },
            {
                id: 6,
                name: 'الترجمة',
                icon: 'fas fa-language',
                description: 'ترجمة احترافية لنصوصك بمختلف اللغات',
                pricing: [
                    { duration: 'نص دقيقة', price: 15 }
                ]
            },
            {
                id: 7,
                name: 'المواقع الإلكترونية',
                icon: 'fas fa-code',
                description: 'تصميم وتطوير مواقع إلكترونية متكاملة',
                pricing: [
                    { duration: 'موقع إلكتروني', price: 1500, originalPrice: 2000 }
                ]
            }
        ];

        this.renderServices();
    }

    renderServices() {
        const grid = document.getElementById('servicesGrid');
        if (!grid) return;

        grid.innerHTML = this.services.map(service => `
            <div class="service-card" data-service-id="${service.id}">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th>المدة/النوع</th>
                            <th>السعر</th>
                            <th>الإجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${service.pricing.map(item => `
                            <tr>
                                <td>${item.duration}</td>
                                <td class="price">
                                    ${item.price} ريال
                                    ${item.originalPrice ? 
                                        `<span class="original-price" style="text-decoration: line-through; color: #999; font-size: 0.9em; margin-right: 5px;">
                                            ${item.originalPrice} ريال
                                        </span>` : ''
                                    }
                                </td>
                                <td>
                                    <button class="add-to-cart" 
                                            data-service="${service.name}" 
                                            data-desc="${item.duration}" 
                                            data-price="${item.price}">
                                        <i class="fas fa-cart-plus"></i> إضافة
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <span class="negotiable">جميع الأسعار قابلة للتفاوض</span>
            </div>
        `).join('');

        // إضافة event listeners للأزرار
        this.initAddToCartButtons();
    }

    initAddToCartButtons() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const service = e.target.closest('.add-to-cart');
                const serviceName = service.dataset.service;
                const serviceDesc = service.dataset.desc;
                const servicePrice = parseFloat(service.dataset.price);

                // إضافة للسلة
                if (window.cartManager) {
                    window.cartManager.addToCart({
                        name: serviceName,
                        description: serviceDesc,
                        price: servicePrice
                    });
                }

                // تأثير visual
                this.showAddToCartEffect(e.target);
            });
        });
    }

    showAddToCartEffect(button) {
        button.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        button.style.background = 'var(--success)';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-cart-plus"></i> إضافة';
            button.style.background = '';
        }, 2000);
    }

    initLanguage() {
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            switcher.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        this.updateLanguageUI();
    }

    updateLanguageUI() {
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            const icon = switcher.querySelector('i');
            const text = switcher.querySelector('.lang-text') || switcher;
            
            if (this.currentLanguage === 'en') {
                text.textContent = 'العربية';
                document.documentElement.dir = 'ltr';
                document.documentElement.lang = 'en';
            } else {
                text.textContent = 'English';
                document.documentElement.dir = 'rtl';
                document.documentElement.lang = 'ar';
            }
        }
    }

    initScrollEffects() {
        // تأثير الظهور عند التمرير
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // مراقبة العناصر
        document.querySelectorAll('.service-card, .ai-feature').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    updateYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    window.graphosApp = new GraphosApp();
});