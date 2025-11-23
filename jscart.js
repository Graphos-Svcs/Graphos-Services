// cart.js - نظام إدارة السلة
class CartManager {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        this.loadCart();
        this.renderCart();
        this.initCheckout();
    }

    addToCart(item) {
        this.items.push({
            ...item,
            id: Date.now() + Math.random(),
            quantity: 1
        });
        
        this.saveCart();
        this.renderCart();
        this.showNotification('تمت إضافة الخدمة إلى السلة');
    }

    removeFromCart(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.renderCart();
        this.showNotification('تم حذف الخدمة من السلة');
    }

    updateQuantity(itemId, newQuantity) {
        const item = this.items.find(item => item.id === itemId);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
            this.saveCart();
            this.renderCart();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.renderCart();
        this.showNotification('تم تفريغ السلة');
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getDiscount() {
        const total = this.getTotal();
        if (total > 200) return total * 0.1; // 10% خصم للمشتريات فوق 200 ريال
        return 0;
    }

    getFinalTotal() {
        return this.getTotal() - this.getDiscount();
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');
        const emptyCart = document.getElementById('emptyCart');
        const checkoutButton = document.getElementById('checkoutButton');

        if (this.items.length === 0) {
            emptyCart.style.display = 'block';
            cartSummary.style.display = 'none';
            checkoutButton.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        cartSummary.style.display = 'block';
        checkoutButton.style.display = 'block';

        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-desc">${item.description}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} ريال</div>
                    <button class="remove-item" onclick="cartManager.removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        // تحديث الإجماليات
        document.getElementById('subtotal').textContent = this.getTotal().toFixed(2) + ' ريال';
        document.getElementById('discount').textContent = this.getDiscount().toFixed(2) + ' ريال';
        document.getElementById('total').textContent = this.getFinalTotal().toFixed(2) + ' ريال';
    }

    initCheckout() {
        document.getElementById('checkoutButton').addEventListener('click', () => {
            this.processCheckout();
        });
    }

    processCheckout() {
        if (this.items.length === 0) {
            this.showNotification('السلة فارغة', 'error');
            return;
        }

        const total = this.getFinalTotal();
        const services = this.items.map(item => `${item.name} - ${item.description}`).join('\n');

        // محاكاة عملية الدفع
        this.showPaymentModal(total, services);
    }

    showPaymentModal(total, services) {
        const modal = document.createElement('div');
        modal.className = 'payment-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        modal.innerHTML = `
            <div class="modal-content" style="
                background: white;
                padding: 2rem;
                border-radius: 15px;
                max-width: 500px;
                width: 90%;
                text-align: center;
            ">
                <h3 style="color: var(--primary); margin-bottom: 1rem;">إتمام عملية الشراء</h3>
                <div style="margin-bottom: 1.5rem;">
                    <p>الخدمات المطلوبة:</p>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: right;">
                        ${services.split('\n').map(service => `<div>• ${service}</div>`).join('')}
                    </div>
                    <p style="font-size: 1.2rem; font-weight: bold; color: var(--secondary);">
                        الإجمالي: ${total.toFixed(2)} ريال
                    </p>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="this.closest('.payment-modal').remove()" style="
                        padding: 0.8rem 1.5rem;
                        border: 2px solid #ccc;
                        background: transparent;
                        border-radius: 8px;
                        cursor: pointer;
                    ">إلغاء</button>
                    <button onclick="cartManager.confirmPayment()" style="
                        padding: 0.8rem 1.5rem;
                        background: var(--success);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                    ">تأكيد الدفع</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    confirmPayment() {
        this.showNotification('تم proces