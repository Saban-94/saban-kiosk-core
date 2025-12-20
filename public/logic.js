// public/logic.js

// ייבוא Firebase
import { db } from './js/firebase-config.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// אתחול אייקונים
lucide.createIcons();

// משתנה גלובלי למוצרים
let productsDB = [];

// === פונקציית אתחול: טעינת מוצרים מ-Firebase ===
async function initKiosk() {
    console.log("🔄 מתחיל טעינת מוצרים מ-Firebase...");
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        productsDB = []; // איפוס
        querySnapshot.forEach((doc) => {
            // הוספת המוצר למערך המקומי
            productsDB.push({ id: doc.id, ...doc.data() });
        });
        
        console.log(`✅ נטענו ${productsDB.length} מוצרים בהצלחה.`);
        
        // רינדור ראשוני אם אנחנו במסך הקטלוג
        if (!document.getElementById('catalog').classList.contains('hidden')) {
            renderCatalog();
        }
    } catch (error) {
        console.error("❌ שגיאה בטעינת מוצרים:", error);
        // במקרה של שגיאה, אפשר לטעון נתוני גיבוי מ-data.js אם רוצים
    }
}

// הפעלת האתחול מיד בטעינת הדף
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
        grid.innerHTML = `<div class="col-span-3 text-center text-gray-500">טוען מוצרים או שאין מוצרים במלאי...</div>`;
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

// === ניהול מודל מוצר ===
let currentProduct = null;

window.openProduct = function(id) {
    currentProduct = productsDB.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('modal-img').src = currentProduct.image;
    document.getElementById('modal-title').innerText = currentProduct.name;
    document.getElementById('modal-desc').innerText = currentProduct.shortDesc || '';
    document.getElementById('modal-full-desc').innerText = currentProduct.fullDesc || '';

    // רינדור מפרט טכני
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

    // כפתור וידאו (אם קיים לינק)
    const vidBtn = document.getElementById('modal-video-btn');
    if (currentProduct.video) {
        vidBtn.onclick = () => window.open(currentProduct.video.includes('http') ? currentProduct.video : `https://www.youtube.com/watch?v=${currentProduct.video}`, '_blank');
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

// === שאל מומחה ===
window.askExpert = function() {
    document.getElementById('chat-context-product').innerText = currentProduct.name;
    document.getElementById('ai-chat-overlay').classList.remove('hidden');
    document.getElementById('ai-chat-overlay').classList.add('flex');
}

window.closeChat = function() {
    document.getElementById('ai-chat-overlay').classList.add('hidden');
    document.getElementById('ai-chat-overlay').classList.remove('flex');
}

// === מנוע הדפסה ===
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
            
            <div style="margin:15px 0; font-size:24px; font-weight:bold;">
                מחיר: ₪${p.price || '---'}
            </div>
            
            <div style="text-align:left; font-size:12px; margin-bottom:15px;">
                <strong>מפרט טכני:</strong><br>
                ${specs.map(s => `- ${s.label}: ${s.value}`).join('<br>')}
            </div>

            <div style="border:1px solid black; padding:5px; font-weight:bold; margin-bottom:10px;">
                נא להציג בקופה
            </div>
            <div style="font-size:10px;">${new Date().toLocaleString()}</div>
        </div>
    `;
    
    document.getElementById('print-area').innerHTML = printContent;
    window.print();
}

// === מחשבון פרויקט ===
let sqm = 10;
window.updateCalc = function(delta) {
    sqm += delta;
    if(sqm < 1) sqm = 1;
    document.getElementById('calc-val').innerText = sqm;
    renderCalculator();
}

window.renderCalculator = function() {
    // דוגמה ללוגיקה בסיסית - בעתיד ניתן למשוך גם מחירי מוצרים מה-DB
    const bagsGlue = Math.ceil(sqm / 5);
    const setsSeal = Math.ceil(sqm / 12);
    
    const items = [
        { name: "SikaTop 107", qty: setsSeal, price: 180 },
        { name: "SikaCeram 255", qty: bagsGlue, price: 55 },
        { name: "Sika Tape", qty: 1, price: 120 }
    ];
    
    let html = '';
    items.forEach(i => {
        html += `<div class="flex justify-between border-b py-2 text-sm">
            <span>${i.name} (x${i.qty})</span>
            <span class="font-bold text-gray-400 hidden-price">הצג בהדפסה</span>
        </div>`;
    });
    
    document.getElementById('calc-results').innerHTML = html;
}

window.printCalc = function() {
    const bagsGlue = Math.ceil(sqm / 5);
    const setsSeal = Math.ceil(sqm / 12);
    const total = (bagsGlue * 55) + (setsSeal * 180) + 120;
    
    const printContent = `
        <div style="text-align:center; font-family:sans-serif; width:80mm; margin:0 auto;">
            <h2>רשימת פרויקט</h2>
            <div>עבור: ${sqm} מ"ר</div>
            <hr>
            <div style="text-align:right;">
            1. SikaTop 107 (x${setsSeal}) - ₪${setsSeal*180}<br>
            2. SikaCeram 255 (x${bagsGlue}) - ₪${bagsGlue*55}<br>
            3. Sika Tape (x1) - ₪120
            </div>
            <hr>
            <div style="font-size:20px; font-weight:bold;">סה"כ: ₪${total}</div>
        </div>
    `;
    document.getElementById('print-area').innerHTML = printContent;
    window.print();
}
