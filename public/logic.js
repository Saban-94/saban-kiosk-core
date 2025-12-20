// public/logic.js

// יבוא ספריות והגדרות
import { db } from './js/firebase-config.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// אתחול אייקונים
lucide.createIcons();

let productsDB = [];

// === טעינת נתונים ===
async function initKiosk() {
    console.log("🔄 טוען קטלוג...");
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        productsDB = [];
        querySnapshot.forEach((doc) => {
            productsDB.push({ id: doc.id, ...doc.data() });
        });
        console.log(`✅ נטענו ${productsDB.length} מוצרים.`);
        
        // אם אנחנו כבר במסך הקטלוג, נרנדר אותו
        if (!document.getElementById('catalog').classList.contains('hidden')) {
            renderCatalog();
        }
    } catch (error) {
        console.error("❌ שגיאה בטעינה:", error);
    }
}
initKiosk();

// === פונקציות גלובליות (חשופות ל-HTML) ===

// 1. ניווט
window.showSection = function(id) {
    document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if (id === 'catalog') renderCatalog();
    lucide.createIcons();
}

// 2. רינדור הקטלוג
function renderCatalog() {
    const grid = document.getElementById('products-grid');
    if (productsDB.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center text-gray-500">טוען נתונים...</div>`;
        return;
    }
    
    grid.innerHTML = productsDB.map(p => {
        // לוגיקה לסטטוס (Ribbon)
        let ribbonHTML = '';
        if (p.status && p.status !== 'standard') {
            const labels = { 'recommended': 'מומלץ', 'sale': 'מבצע', 'new': 'חדש' };
            const colors = { 'recommended': 'bg-yellow-400 text-black', 'sale': 'bg-red-600 text-white', 'new': 'bg-blue-600 text-white' };
            ribbonHTML = `<div class="absolute top-4 left-0 ${colors[p.status]} text-[10px] font-bold px-3 py-1 rounded-r-lg shadow-md z-10">${labels[p.status]}</div>`;
        }

        return `
        <div onclick="openProduct('${p.id}')" class="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col h-full border border-gray-100 relative overflow-hidden group">
            ${ribbonHTML}
            <div class="h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-4 p-4 group-hover:bg-gray-100 transition">
                <img src="${p.image}" class="max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="flex justify-between items-start">
                <div>
                     <div class="text-xs font-bold text-gray-400 uppercase tracking-wider">${p.brand || 'Sika'}</div>
                     <h3 class="font-bold text-lg leading-tight mb-2">${p.name}</h3>
                </div>
            </div>
            
            <p class="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">${p.marketingDesc || p.shortDesc || ''}</p>
            
            <div class="flex gap-2 text-[10px] text-gray-500 mb-3 bg-gray-50 p-2 rounded">
                <div class="flex items-center gap-1"><i data-lucide="maximize" size="10"></i> ${p.coverage || p.tech?.coverage || '-'}</div>
                <div class="flex items-center gap-1"><i data-lucide="clock" size="10"></i> ${p.drying || p.tech?.drying || '-'}</div>
            </div>

            <button class="w-full bg-black text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#E3000F] transition">
                ${p.ctaText || 'פרטים נוספים'} <i data-lucide="arrow-left" size="14"></i>
            </button>
        </div>
    `}).join('');
    lucide.createIcons();
}

// 3. פתיחת דף מוצר (MODAL)
let currentProduct = null;

window.openProduct = function(id) {
    currentProduct = productsDB.find(p => p.id === id);
    if (!currentProduct) return;

    // מילוי נתונים
    document.getElementById('modal-img').src = currentProduct.image;
    document.getElementById('modal-title').innerText = currentProduct.name;
    document.getElementById('modal-desc').innerText = currentProduct.marketingDesc || currentProduct.shortDesc || '';
    document.getElementById('modal-full-desc').innerText = currentProduct.fullDesc || 'מידע נוסף זמין אצל היועץ.';

    // מפרט טכני בתוך המודל
    // תמיכה לאחור בפורמט specs וגם בפורמט tech החדש
    const cov = currentProduct.coverage || currentProduct.tech?.coverage || "-";
    const dry = currentProduct.drying || currentProduct.tech?.drying || "-";
    const thick = currentProduct.thickness || currentProduct.tech?.thickness || "-";
    
    document.getElementById('modal-specs').innerHTML = `
        <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div class="text-[#E3000F]"><i data-lucide="maximize"></i></div>
            <div><div class="text-[10px] text-gray-400 font-bold uppercase">כיסוי</div><div class="font-bold text-sm">${cov}</div></div>
        </div>
        <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div class="text-[#E3000F]"><i data-lucide="clock"></i></div>
            <div><div class="text-[10px] text-gray-400 font-bold uppercase">ייבוש</div><div class="font-bold text-sm">${dry}</div></div>
        </div>
        <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div class="text-[#E3000F]"><i data-lucide="layers"></i></div>
            <div><div class="text-[10px] text-gray-400 font-bold uppercase">עובי</div><div class="font-bold text-sm">${thick}</div></div>
        </div>
    `;

    // כפתור וידאו
    const vidBtn = document.getElementById('modal-video-btn');
    if (currentProduct.video && currentProduct.video.length > 2) {
        vidBtn.onclick = () => window.playVideoInKiosk(currentProduct.video);
        vidBtn.classList.remove('hidden');
    } else {
        vidBtn.classList.add('hidden');
    }

    document.getElementById('product-modal').classList.add('open');
    lucide.createIcons();
}

window.closeModal = function() {
    document.getElementById('product-modal').classList.remove('open');
}

// 4. נגן וידאו פנימי
function getYouTubeID(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

window.playVideoInKiosk = function(url) {
    const videoID = getYouTubeID(url);
    if (!videoID) return alert("לא ניתן לנגן סרטון זה");

    const modal = document.getElementById('video-player-modal');
    const iframe = document.getElementById('youtube-frame');
    iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

window.closeVideo = function() {
    const modal = document.getElementById('video-player-modal');
    const iframe = document.getElementById('youtube-frame');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = "";
    }, 500);
}

// 5. פונקציות נוספות (צ'אט, מחשבון, הדפסה)
window.askExpert = function() {
    document.getElementById('chat-context-product').innerText = currentProduct ? currentProduct.name : "כללי";
    document.getElementById('ai-chat-overlay').classList.remove('hidden');
    document.getElementById('ai-chat-overlay').classList.add('flex');
}

window.closeChat = function() {
    document.getElementById('ai-chat-overlay').classList.add('hidden');
    document.getElementById('ai-chat-overlay').classList.remove('flex');
}

window.printProduct = function() {
    if(!currentProduct) return;
    const p = currentProduct;
    const printContent = `
        <div style="text-align:center; font-family:sans-serif; width:80mm; margin:0 auto;">
            <h2>Sika Expert Center</h2>
            <hr>
            <h3>${p.name}</h3>
            <div>מק"ט: ${p.id}</div>
            <br>
            <div style="text-align:right;">
                <strong>נתונים טכניים:</strong><br>
                כיסוי: ${p.tech?.coverage || p.coverage || '-'}<br>
                ייבוש: ${p.tech?.drying || p.drying || '-'}<br>
            </div>
            <br>
            <div style="font-size:10px;">${new Date().toLocaleString()}</div>
        </div>`;
    document.getElementById('print-area').innerHTML = printContent;
    window.print();
}

let sqm = 10;
window.updateCalc = function(delta) {
    sqm += delta;
    if(sqm < 1) sqm = 1;
    document.getElementById('calc-val').innerText = sqm;
    renderCalculator();
}

window.renderCalculator = function() {
    // לוגיקה פשוטה לדוגמה
    const bags = Math.ceil(sqm / 5);
    document.getElementById('calc-results').innerHTML = `
        <div class="flex justify-between border-b py-2 text-sm">
            <span>חומר איטום (x${bags})</span>
            <span class="font-bold">לכיסוי ${sqm} מ"ר</span>
        </div>`;
}

window.printCalc = function() {
    document.getElementById('print-area').innerHTML = `<h1>רשימת חומרים עבור ${sqm} מ"ר</h1>`;
    window.print();
}
