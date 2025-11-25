// data.js
const websiteData = {
    // إعدادات الموقع
    settings: {
        siteName: "Graphos Services",
        siteEmail: "Graphos.svcs@gmail.com",
        sitePhone: "+966 53 368 2916",
        whatsappNumber: "966533682916",
        language: "ar",
        theme: "light"
    },
    
    // محتوى الموقع
    content: {
        home: {
            title_ar: "منصتك الرقمية الاحترافية",
            title_en: "Your Professional Digital Platform",
            description_ar: "مرحباً بك في Graphos Services - منصتك الشاملة لتحويل الأفكار إلى واقع ملموس. نقدم حلول تصميم وإبداع متكاملة باستخدام أحدث تقنيات الذكاء الاصطناعي. شعارات، فيديوهات، عروض تقديمية، ومواقع إلكترونية بجودة استثنائية.",
            description_en: "Welcome to Graphos Services - your comprehensive platform for turning ideas into reality. We provide integrated design and creative solutions using the latest AI technologies. Logos, videos, presentations, and websites with exceptional quality."
        },
        about: {
            title_ar: "منصة إبداعية رائدة",
            title_en: "Creative Leading Platform",
            description_ar: "Graphos Services ليست مجرد منصة عادية، بل هي رفيقك الإبداعي في رحلة تحويل الأفكار إلى واقع ملموس. نؤمن بأن كل فكرة تستحق أن ترى النور، وكل مشروع يستحق أن يظهر بأفضل صورة.",
            description_en: "Graphos Services is not just an ordinary platform, but your creative companion in the journey of turning ideas into reality. We believe that every idea deserves to see the light, and every project deserves to appear in the best form."
        }
    },
    
    // الخدمات
    services: [
        {
            id: 1,
            name_ar: "تصميم الشعارات الاحترافية",
            name_en: "Professional Logo Design",
            icon: "fas fa-palette",
            description_ar: "تصميم شعارات فريدة تعبر عن هوية علامتك التجارية بدقة وإبداع",
            description_en: "Unique logo designs that perfectly represent your brand identity",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "4 أيام", duration_en: "4 days", price: 15 },
                { duration_ar: "3 أيام", duration_en: "3 days", price: 20 },
                { duration_ar: "يومين", duration_en: "2 days", price: 25 },
                { duration_ar: "24 ساعة", duration_en: "24 hours", price: 30 },
                { duration_ar: "6-7 ساعات", duration_en: "6-7 hours", price: 40 }
            ],
            features_ar: ["3 مسودات مختلفة", "ملفات متعددة (PNG, JPG, SVG, AI)", "دليل الألوان والخطوط", "حقوق الملكية 100%"],
            features_en: ["3 different drafts", "Multiple files (PNG, JPG, SVG, AI)", "Color and font guide", "100% ownership rights"]
        },
        {
            id: 2,
            name_ar: "إنتاج الفيديوهات التسويقية",
            name_en: "Marketing Video Production",
            icon: "fas fa-video",
            description_ar: "إنتاج فيديوهات إبداعية عالية الجودة لتسويق منتجاتك وخدماتك",
            description_en: "Creative high-quality video production for marketing your products and services",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "30 ثانية", duration_en: "30 seconds", price: 20 },
                { duration_ar: "60 ثانية", duration_en: "60 seconds", price: 30 },
                { duration_ar: "90 ثانية", duration_en: "90 seconds", price: 40 },
                { duration_ar: "120 ثانية", duration_en: "120 seconds", price: 50 }
            ],
            features_ar: ["جودة 4K", "مؤثرات بصرية متقدمة", "موسيقى احترافية", "نصوص متحركة"],
            features_en: ["4K quality", "Advanced visual effects", "Professional music", "Animated texts"]
        },
        {
            id: 3,
            name_ar: "العروض التقديمية المتطورة",
            name_en: "Advanced Presentations",
            icon: "fas fa-desktop",
            description_ar: "تصميم عروض تقديمية احترافية وجذابة تعزز رسالتك وتؤثر في جمهورك",
            description_en: "Professional and engaging presentation designs that enhance your message and impact your audience",
            image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "10 شرائح", duration_en: "10 slides", price: 15 },
                { duration_ar: "20 شريحة", duration_en: "20 slides", price: 25 },
                { duration_ar: "30 شريحة", duration_en: "30 slides", price: 35 },
                { duration_ar: "مخصص", duration_en: "Custom", price: 50 }
            ],
            features_ar: ["تصميم احترافي", "رسوم بيانية متحركة", "قوالب مبتكرة", "توافق مع جميع الأجهزة"],
            features_en: ["Professional design", "Animated charts", "Innovative templates", "Compatible with all devices"]
        },
        {
            id: 4,
            name_ar: "تصميم المواقع الإلكترونية",
            name_en: "Website Design",
            icon: "fas fa-code",
            description_ar: "تصميم وتطوير مواقع إلكترونية متكاملة متجاوبة مع جميع الأجهزة",
            description_en: "Complete website design and development responsive to all devices",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "موقع متكامل", duration_en: "Complete website", price: 1500, original_price: 2000 }
            ],
            features_ar: ["تصميم متجاوب", "تحسين محركات البحث", "لوحة تحكم سهلة", "شهادة SSL"],
            features_en: ["Responsive design", "SEO optimization", "Easy control panel", "SSL certificate"]
        },
        {
            id: 5,
            name_ar: "الباقة الشاملة المتكاملة",
            name_en: "Comprehensive Full Package",
            icon: "fas fa-gem",
            description_ar: "حزمة متكاملة تشمل شعار، فيديو، وعرض تقديمي بخصم خاص",
            description_en: "Complete package including logo, video, and presentation with special discount",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "شعار + فيديو 60ث + 10 شرائح", duration_en: "Logo + 60s video + 10 slides", price: 65 },
                { duration_ar: "شعار + فيديو 120ث + 20 شرائح", duration_en: "Logo + 120s video + 20 slides", price: 115 }
            ],
            features_ar: ["توفير 30%", "تصميم متناسق", "تسليم أسرع", "دعم مميز"],
            features_en: ["Save 30%", "Consistent design", "Faster delivery", "Premium support"]
        },
        {
            id: 6,
            name_ar: "إعطاء فكرة",
            name_en: "Idea Generation",
            icon: "fas fa-lightbulb",
            description_ar: "تقديم أفكار إبداعية ومبتكرة لمشاريعك وعلامتك التجارية",
            description_en: "Providing creative and innovative ideas for your projects and brand",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
            pricing: [
                { duration_ar: "فكرة واحدة", duration_en: "One idea", price: 20 }
            ],
            features_ar: ["فكرة إبداعية فريدة", "مناسبة لمشروعك", "تطوير الفكرة معك", "تسليم خلال 24 ساعة"],
            features_en: ["Unique creative idea", "Tailored to your project", "Idea development with you", "Delivery within 24 hours"]
        }
    ],
    
    // المحفظة
    portfolio: [
        {
            id: 1,
            title_ar: "تصميم شعار لمطعم",
            title_en: "Restaurant Logo Design",
            image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=400&h=250&fit=crop",
            description_ar: "تصميم شعار مبتكر لمطعم يقدم المأكولات العربية الأصيلة",
            description_en: "Innovative logo design for a restaurant serving authentic Arabic cuisine"
        },
        {
            id: 2,
            title_ar: "فيديو تسويقي لتطبيق",
            title_en: "App Marketing Video",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
            description_ar: "إنتاج فيديو تسويقي جذاب لتطبيق جوال مبتكر",
            description_en: "Engaging marketing video production for an innovative mobile app"
        },
        {
            id: 3,
            title_ar: "موقع إلكتروني لشركة",
            title_en: "Company Website",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            description_ar: "تصميم موقع إلكتروني متكامل لشركة تقنية ناشئة",
            description_en: "Complete website design for a emerging technology company"
        },
        {
            id: 4,
            title_ar: "عرض تقديمي لمشروع",
            title_en: "Project Presentation",
            image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=250&fit=crop",
            description_ar: "تصميم عرض تقديمي احترافي لمشروع استثماري كبير",
            description_en: "Professional presentation design for a major investment project"
        }
    ],
    
    // الإحصائيات
    analytics: {
        totalVisits: 0,
        popularService: "",
        avgVisitTime: 0,
        lastVisit: null,
        visitHistory: [],
        aiInteractions: []
    },
    
    // التخصيصات
    customizations: {
        customCSS: "",
        customJS: "",
        customHTML: "",
        logo: null,
        colors: {
            primary: "#0a0a0a",
            secondary: "#d4af37",
            accent: "#f8f9fa"
        },
        backgrounds: {
            hero: "",
            services: "",
            about: ""
        }
    },
    
    // معلومات النظام
    lastUpdated: new Date().toISOString(),
    version: "3.0.0"
};