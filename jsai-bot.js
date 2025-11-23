// ai-bot.js - نظام الذكاء الاصطناعي المتقدم
class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.conversation = [];
        this.isTyping = false;
        this.init();
    }

    init() {
        this.createParticles();
        this.initEventListeners();
        this.loadConversation();
    }

    createParticles() {
        const container = document.getElementById('floatingParticles');
        if (!container) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
                opacity: ${Math.random() * 0.3 + 0.1};
            `;
            container.appendChild(particle);
        }
    }

    initEventListeners() {
        // toggle chatbot
        document.getElementById('aiToggle').addEventListener('click', () => {
            this.toggleChat();
        });

        // close chatbot
        document.getElementById('closeChat').addEventListener('click', () => {
            this.closeChat();
        });

        // send message
        document.getElementById('sendMessage').addEventListener('click', () => {
            this.sendMessage();
        });

        // enter key
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // clear chat
        document.getElementById('clearChat').addEventListener('click', () => {
            this.clearChat();
        });

        // quick actions
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.dataset.msg;
                document.getElementById('chatInput').value = message;
                this.sendMessage();
            });
        });
    }

    toggleChat() {
        const chatbot = document.getElementById('aiChatbot');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            chatbot.classList.add('active');
            document.getElementById('chatInput').focus();
        } else {
            chatbot.classList.remove('active');
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('aiChatbot').classList.remove('active');
    }

    async sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;

        // إضافة رسالة المستخدم
        this.addMessage(message, 'user');
        input.value = '';

        // محاكاة الكتابة
        this.showTypingIndicator();

        // محاكاة استجابة الذكاء الاصطناعي
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateAIResponse(message);
            this.addMessage(response, 'bot');
        }, 1500);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const timestamp = new Date().toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${text}</div>
                <div class="message-time">${timestamp}</div>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // حفظ المحادثة
        this.conversation.push({ sender, text, timestamp });
        this.saveConversation();
    }

    showTypingIndicator() {
        this.isTyping = true;
        const messagesContainer = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateAIResponse(userMessage) {
        const responses = {
            greetings: [
                "مرحباً بك! أنا مساعد Graphos AI. سأكون سعيداً بمساعدتك في مشروعك التصميمي.",
                "أهلاً وسهلاً! كيف يمكنني مساعدتك في خدمات التصميم اليوم؟",
                "مرحباً! أنا هنا لمساعدتك في تحقيق رؤيتك التصميمية."
            ],
            pricing: [
                "أسعارنا تبدأ من 15 ريال لتصميم الشعارات مع خيارات تسليم متعددة. جميع الأسعار قابلة للتفاوض!",
                "لدينا باقات متنوعة تناسب جميع الميزانيات. هل تريد معرفة السعر لخدمة محددة؟",
                "نقدم عروض أسعار تنافسية مع خصومات على الحزم المتكاملة. أي خدمة تهمك تحديداً؟"
            ],
            services: [
                "نقدم: تصميم شعارات، فيديوهات، عروض تقديمية، أفكار مشاريع، ترجمة، ومواقع إلكترونية. أي منها تفضل؟",
                "خدماتنا تشمل التصميم الجرافيكي، إنتاج الفيديو، التطوير الإلكتروني، والاستشارات الإبداعية.",
                "لدينا 7 خدمات رئيسية تغطي جميع احتياجاتك التصميمية والإبداعية. ما المجال الذي تبحث عنه؟"
            ],
            default: [
                "هذا يبدو مثيراً للاهتمام! يمكنني مساعدتك في تطوير هذه الفكرة وتحويلها إلى واقع ملموس.",
                "رائع! دعنا نناقش متطلباتك بالتفصيل لنقدم لك الحل الأمثل.",
                "أفهم ما تبحث عنه. هل يمكنك مشاركة المزيد من التفاصيل لمساعدتك بشكل أفضل؟",
                "هذا مجال تخصصنا! سنعمل معاً لتحقيق أفضل النتائج لمشروعك."
            ]
        };

        userMessage = userMessage.toLowerCase();

        if (userMessage.includes('مرحبا') || userMessage.includes('اهلا') || userMessage.includes('hello')) {
            return this.getRandomResponse(responses.greetings);
        } else if (userMessage.includes('سعر') || userMessage.includes('كم') || userMessage.includes('price')) {
            return this.getRandomResponse(responses.pricing);
        } else if (userMessage.includes('خدم') || userMessage.includes('service') || userMessage.includes('ماذا')) {
            return this.getRandomResponse(responses.services);
        } else {
            return this.getRandomResponse(responses.default);
        }
    }

    getRandomResponse(responsesArray) {
        return responsesArray[Math.floor(Math.random() * responsesArray.length)];
    }

    saveConversation() {
        localStorage.setItem('aiConversation', JSON.stringify(this.conversation));
    }

    loadConversation() {
        const saved = localStorage.getItem('aiConversation');
        if (saved) {
            this.conversation = JSON.parse(saved);
            // يمكن إضافة منطق لتحميل المحادثة السابقة
        }
    }

    clearChat() {
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.innerHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-text">مرحباً! أنا مساعد Graphos AI. كيف يمكنني مساعدتك في مشروعك التصميمي اليوم؟</div>
                    <div class="message-time">الآن</div>
                </div>
            </div>
        `;
        this.conversation = [];
        localStorage.removeItem('aiConversation');
    }
}

// تهيئة المساعد AI
document.addEventListener('DOMContentLoaded', () => {
    window.aiAssistant = new AIAssistant();
});