// التنقل المتحرك
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // تبديل القائمة
    navLinks.classList.toggle('active');

    // تحريك خطوط البرجر
    burger.classList.toggle('toggle');
});

// إغلاق القائمة عند النقر على رابط
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// نظام التبويب للخدمات
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة الفعالية من جميع الأزرار
        tabBtns.forEach(btn => btn.classList.remove('active'));

        // إضافة الفعالية للزر المحدد
        btn.classList.add('active');

        // إخفاء جميع أقسام المحتوى
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // إظهار قسم المحتوى المحدد
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// تأثير التمرير للشريط العلوي
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// التمرير السلس عند النقر على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تأثير التحميل
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});