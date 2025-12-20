// public/logic.js

// 1. ייבוא Firebase
import { db } from './js/firebase-config.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 2. אתחול אייקונים
lucide.createIcons();

let productsDB = [];

// === טעינת מוצרים מ-Firebase ===
async function initKiosk() {
    console.log("🔄 טוען קטלוג...");
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        productsDB = [];
        querySnapshot.forEach((doc) => {
            productsDB.push({ id: doc.id, ...doc.data() });
        });
        console.log(`✅ נטענו ${productsDB.length} מוצרים.`);
        
        // רינדור אם אנחנו במסך הקטלוג
        if (!document.getElementById('catalog').classList.contains('hidden')) {
            renderCatalog();
        }
    } catch (error) {
        console.error("❌ שגיאה בטעינה:", error);
    }
}
initKiosk();

// === לוגיקת ניווט ===
window.showSection = function(id) {
    document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if (id === 'catalog') renderCatalog();
}

// === רינדור קטלוג ===
function renderCatalog() {
    const grid = document.getElementById('products-grid');
    if (productsDB.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center text-gray-500">טוען נתונים...</div>`;
        return;
    }
    grid.innerHTML = productsDB.map(p => `
        <div onclick="openProduct('${p.id}')" class="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col h-full border border-gray-100">
            <div class="h-40 flex items-center justify-center bg-gray-50 rounded-lg mb-4 p-4">
                <img src="${p.image}" class="max-h-full object-contain mix-blend-multiply" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
            </div>
            <h3 class="font-bold text-lg leading-tight mb-2">${p.name}</h3>
            <p class="text-sm text-gray-500 mb-4 flex-1">${p.shortDesc || ''}</p>
            <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-[#E3000F] font-bold text-sm">
                <span>לפרטים נוספים &rarr;</span>
                <i data-lucide="eye" size="16"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// === פתיחת דף מוצר (MODAL) ===
let currentProduct = null;

window.openProduct = function(id) {
    currentProduct = productsDB.find(p => p.id === id);
    if (!currentProduct) return;

    // מילוי נתונים
    document.getElementById('modal-img').src = currentProduct.image;
    document.getElementById('modal-title').innerText = currentProduct.name;
    document.getElementById('modal-desc').innerText = currentProduct.shortDesc || '';
    document.getElementById('modal-full-desc').innerText = currentProduct.fullDesc || '';

    // מפרט טכני
    const specs = currentProduct.specs || [];
    const specsHTML = specs.map(s => `
        <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div class="text-[#E3000F]"><i data-lucide="${s.icon || 'check'}"></i></div>
            <div>
                <div class="text-[10px] text-gray-400 font-bold uppercase">${s.label}</div>
                <div class="font-bold text-sm">${s.value}</div>
            </div>
        </div>
    `).join('');
    document.getElementById('modal-specs').innerHTML = specsHTML;

    // === התיקון הקריטי: חיבור לנגן הפנימי ===
    const vidBtn = document.getElementById('modal-video-btn');
    if (currentProduct.video && currentProduct.video.length > 2) {
        // כאן אנחנו קוראים לפונקציה החדשה playVideoInKiosk במקום window.open
        vidBtn.onclick = () => playVideoInKiosk(currentProduct.video);
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

// === 🎬 נגן וידאו פנימי (חדש!) ===

// פונקציית עזר לחילוץ ID מיוטיוב
function getYouTubeID(url) {
    if (!url) return null;
    // תומך בכל סוגי הלינקים של יוטיוב (רגיל, מקוצר, embed)
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

window.playVideoInKiosk = function(url) {
    const videoID = getYouTubeID(url);
    
    if (!videoID) {
        console.error("Invalid YouTube URL:", url);
        return alert("לא ניתן לנגן סרטון זה (קישור לא תקין)");
    }

    const modal = document.getElementById('video-player-modal');
    const iframe = document.getElementById('youtube-frame');

    // הרכבת הלינק לנגן עם הגדרות Autoplay וניקיון ממשק
    iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
    }, 10);
}

window.closeVideo = function() {
    const modal = document.getElementById('video-player-modal');
    const iframe = document.getElementById('youtube-frame');

    modal.classList.add('opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = ""; // חשוב! עוצר את הסאונד
    }, 500);
}

// === פונקציות נוספות (צ'אט, הדפסה, מחשבון) ===

window.askExpert = function() {
    document.getElementById('chat-context-product').innerText = currentProduct.name;
    document.getElementById('ai-chat-overlay').classList.remove('hidden');
    document.getElementById('ai-chat-overlay').classList.add('flex');
}

window.closeChat = function() {
    document.getElementById('ai-chat-overlay').classList.add('hidden');
    document.getElementById('ai-chat-overlay').classList.remove('flex');
}

window.printProduct = function() {
    const p = currentProduct;
    const specs = p.specs || [];
    const printContent = `
        <div style="text-align:center; font-family:sans-serif; width:80mm; margin:0 auto;">
            <h2 style="margin:0;">Sika Expert Center</h2>
            <div style="font-size:12px; margin-bottom:10px;">ח.סבן חומרי בניין</div>
            <div style="border-bottom:1px dashed #000; margin-bottom:10px;"></div>
            <h3 style="margin:5px 0;">${p.name}</h3>
            <div style="font-size:12px;">מק"ט: ${p.id}</div>
            <div style="text-align:left; font-size:12px; margin-bottom:15px;">
                <strong>מפרט טכני:</strong><br>
                ${specs.map(s => `- ${s.label}: ${s.value}`).join('<br>')}
            </div>
            <div style="font-size:10px;">${new Date().toLocaleString()}</div>
        </div>`;
    document.getElementById('print-area').innerHTML = printContent;
    window.print();
}

// מחשבון
let sqm = 10;
window.updateCalc = function(delta) {
    sqm += delta;
    if(sqm < 1) sqm = 1;
    document.getElementById('calc-val').innerText = sqm;
    renderCalculator();
}

window.renderCalculator = function() {
    const bagsGlue = Math.ceil(sqm / 5);
    const setsSeal = Math.ceil(sqm / 12);
    const items = [
        { name: "SikaTop 107", qty: setsSeal },
        { name: "SikaCeram 255", qty: bagsGlue },
        { name: "Sika Tape", qty: 1 }
    ];
    let html = '';
    items.forEach(i => {
        html += `<div class="flex justify-between border-b py-2 text-sm"><span>${i.name} (x${i.qty})</span><span class="font-bold text-gray-400">הצג בהדפסה</span></div>`;
    });
    document.getElementById('calc-results').innerHTML = html;
}

window.printCalc = function() {
    const bagsGlue = Math.ceil(sqm / 5);
    const setsSeal = Math.ceil(sqm / 12);
    const printContent = `
        <div style="text-align:center; font-family:sans-serif; width:80mm; margin:0 auto;">
            <h2>רשימת פרויקט</h2>
            <div>עבור: ${sqm} מ"ר</div>
            <hr>
            <div style="text-align:right;">
            1. SikaTop 107 (x${setsSeal})<br>
            2. SikaCeram 255 (x${bagsGlue})<br>
            3. Sika Tape (x1)
            </div>
        </div>`;
    document.getElementById('print-area').innerHTML = printContent;
    window.print();
}
