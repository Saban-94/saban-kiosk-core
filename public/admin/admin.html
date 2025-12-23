<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sika Studio AI - Commander</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    
    <style>
        body { font-family: 'Heebo', sans-serif; background-color: #f1f5f9; color: #0f172a; height: 100vh; display: flex; overflow: hidden; }
        .sidebar { width: 280px; background: white; border-left: 1px solid #e2e8f0; display: flex; flex-direction: column; z-index: 20; box-shadow: 4px 0 24px rgba(0,0,0,0.02); }
        .nav-item { display: flex; items-center; gap: 12px; padding: 16px 24px; color: #64748b; font-weight: 500; cursor: pointer; transition: all 0.2s; border-right: 4px solid transparent; }
        .nav-item:hover { background: #f8fafc; color: #0f172a; }
        .nav-item.active { background: #eff6ff; color: #2563eb; border-right-color: #2563eb; font-weight: 700; }
        .main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; padding: 24px; gap: 24px; }
        .view-panel { display: none; height: 100%; flex-direction: column; }
        .view-panel.active { display: flex; }
        .input-std { width: 100%; border: 1px solid #cbd5e1; padding: 12px; border-radius: 12px; outline: none; background: #fff; font-size: 14px; transition: 0.2s; }
        .input-std:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 24px; border-radius: 12px; font-weight: 700; transition: 0.2s; cursor: pointer; font-size: 14px; }
        .btn-primary { background: #2563eb; color: white; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); }
        .btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }
        .btn-magic { background: linear-gradient(135deg, #6366f1, #a855f7); color: white; border: none; }
        .btn-magic:hover { filter: brightness(110%); transform: scale(1.02); }
        .preview-device { width: 320px; height: 600px; background: #fff; border-radius: 40px; border: 8px solid #1e293b; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); overflow: hidden; position: relative; margin: auto; display: flex; flex-direction: column; }
        .preview-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 24px; background: #1e293b; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; z-index: 50; }
        .p-card-mini { border-radius: 16px; background: white; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; }
        .p-card-mini img { height: 120px; margin: 0 auto 10px; object-fit: contain; }
    </style>
</head>
<body>

    <div class="sidebar">
        <div class="p-8 border-b border-gray-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">S</div>
            <div><h1 class="text-xl font-black text-gray-900 tracking-tight">SIKA STUDIO</h1><p class="text-xs text-blue-500 font-bold uppercase">AI Powered</p></div>
        </div>
        <nav class="flex-1 py-6 space-y-2">
            <div class="nav-item active" onclick="safeApp.switchView('products')"><i data-lucide="package"></i> ניהול מוצרים</div>
            <div class="nav-item" onclick="safeApp.switchView('brands')"><i data-lucide="tag"></i> מותגים</div>
        </nav>
        <div class="p-6 bg-gray-50 border-t text-center text-xs text-gray-400 font-bold" id="statusMsg">טוען מערכת...</div>
    </div>

    <div class="main-content">
        
        <div id="view-products" class="view-panel active h-full flex-row gap-6">
            <div class="flex-1 flex flex-col gap-6 h-full overflow-hidden">
                <header class="flex justify-between items-center">
                    <h2 class="text-3xl font-black text-gray-900">מוצרים</h2>
                    <button onclick="safeApp.newProd()" class="btn btn-primary"><i data-lucide="plus"></i> חדש</button>
                </header>

                <div class="flex-1 flex gap-6 overflow-hidden">
                    <div class="w-1/3 bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
                        <div class="p-3 border-b"><input oninput="safeApp.filterP(this.value)" class="input-std bg-gray-50" placeholder="חיפוש..."></div>
                        <div id="pList" class="flex-1 overflow-y-auto"></div>
                    </div>

                    <div class="flex-1 bg-white rounded-2xl border border-gray-200 p-6 overflow-y-auto relative">
                        <input type="hidden" id="pid">
                        
                        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 mb-6 flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-indigo-900 text-sm">✨ מחולל AI אוטומטי</h4>
                                <p class="text-xs text-indigo-600">הזן שם מוצר ולחץ על הקסם</p>
                            </div>
                            <button onclick="safeApp.askGemini()" class="btn btn-magic shadow-lg shadow-indigo-200">
                                <i data-lucide="sparkles"></i> צור תוכן
                            </button>
                        </div>

                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div><label class="text-xs font-bold mb-1 block">שם מוצר</label><input id="pName" class="input-std" oninput="safeApp.updatePreview()"></div>
                                <div><label class="text-xs font-bold mb-1 block">מותג</label><select id="pBrand" class="input-std" onchange="safeApp.updatePreview()"></select></div>
                            </div>
                            
                            <div><label class="text-xs font-bold mb-1 block">קטגוריה</label>
                                <select id="pCat" class="input-std">
                                    <option value="sealing">איטום</option><option value="glues">דבקים</option>
                                    <option value="concrete">בטון</option><option value="flooring">ריצוף</option>
                                </select>
                            </div>

                            <div><label class="text-xs font-bold mb-1 block">תיאור שיווקי</label><textarea id="pDesc" class="input-std h-24" oninput="safeApp.updatePreview()"></textarea></div>
                            
                            <div>
                                <label class="text-xs font-bold mb-1 block">תמונה URL</label>
                                <input id="pImg" class="input-std" placeholder="https://..." oninput="safeApp.updatePreview()">
                            </div>

                            <div class="bg-gray-50 p-4 rounded-xl border">
                                <h4 class="font-bold text-sm mb-3">מפרט טכני</h4>
                                <div class="grid grid-cols-3 gap-3">
                                    <input id="tCov" class="input-std" placeholder="כיסוי" oninput="safeApp.updatePreview()">
                                    <input id="tDry" class="input-std" placeholder="ייבוש" oninput="safeApp.updatePreview()">
                                    <input id="tThick" class="input-std" placeholder="עובי" oninput="safeApp.updatePreview()">
                                </div>
                            </div>
                            
                            <div class="flex gap-3 pt-4 border-t">
                                <button onclick="safeApp.saveProd()" class="btn btn-primary flex-1">שמור שינויים</button>
                                <button onclick="safeApp.delProd()" class="btn bg-red-50 text-red-600 border border-red-100">מחק</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[340px] flex flex-col items-center justify-center bg-gray-100 rounded-2xl border border-gray-200">
                <h3 class="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Live Preview</h3>
                <div class="preview-device">
                    <div class="preview-notch"></div>
                    <div class="flex-1 bg-slate-50 p-4 overflow-y-auto no-scrollbar">
                        <div class="flex justify-between items-center mb-6 mt-8">
                            <div class="w-8 h-8 bg-black rounded-lg text-white flex items-center justify-center font-bold text-xs">S</div>
                            <div class="w-8 h-8 bg-white rounded-full border"></div>
                        </div>
                        <div class="p-card-mini" id="prevCard">
                            <div class="bg-gray-50 rounded-lg p-4 mb-3">
                                <img id="prevImg" src="https://placehold.co/200" class="mx-auto mix-blend-multiply">
                            </div>
                            <div class="text-[10px] font-bold text-gray-400 uppercase mb-1" id="prevBrand">BRAND</div>
                            <h3 class="font-black text-gray-900 text-lg leading-tight mb-2" id="prevName">שם המוצר</h3>
                            <p class="text-xs text-gray-500 line-clamp-3 mb-3" id="prevDesc">תיאור המוצר יופיע כאן...</p>
                            <div class="grid grid-cols-3 gap-1 text-[9px] bg-gray-100 rounded-lg p-2">
                                <div><b class="block text-gray-400">כיסוי</b><span id="prevCov">-</span></div>
                                <div><b class="block text-gray-400">ייבוש</b><span id="prevDry">-</span></div>
                                <div><b class="block text-gray-400">עובי</b><span id="prevThick">-</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="view-brands" class="view-panel"><h2 class="text-2xl font-bold">ניהול מותגים (בקרוב)</h2></div>
    </div>

    <script>
        // Safety Wrapper
        window.safeApp = {
            switchView: () => console.log('App loading...'),
            newProd: () => {},
            saveProd: () => {},
            delProd: () => {},
            filterP: () => {},
            updatePreview: () => {},
            askGemini: () => alert("המערכת עדיין נטענת...")
        };
    </script>

    <script type="module">
        // Import check
        try {
            // שים לב לנתיבים: הנקודותיים .. אומרות "לך תיקייה אחת אחורה"
            // זה עובד רק אם הקובץ הזה נמצא בתיקיית admin והקבצים האחרים בתיקיית js
            const { db } = await import('../js/firebase-config.js');
            const { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot } = await import("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js");
            const { askGeminiAdmin } = await import('../js/gemini-service.js'); // טוען את השירות עם המפתח

            lucide.createIcons();
            document.getElementById('statusMsg').innerText = "מערכת מחוברת 🟢";

            const app = {
                prods: [],
                
                init: () => {
                    app.loadBrands();
                    app.loadProds();
                },

                switchView: (v) => {
                    document.querySelectorAll('.view-panel').forEach(e => e.classList.remove('active'));
                    document.querySelectorAll('.nav-item').forEach(e => e.classList.remove('active'));
                    document.getElementById('view-'+v).classList.add('active');
                },

                askGemini: async () => {
                    const name = document.getElementById('pName').value;
                    if(!name) return alert("נא להזין שם מוצר");

                    const btn = document.querySelector('.btn-magic');
                    const origText = btn.innerHTML;
                    btn.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> חושב...`;
                    lucide.createIcons();

                    const json = await askGeminiAdmin(name);
                    
                    if(json) {
                        document.getElementById('pDesc').value = json.marketingDesc;
                        document.getElementById('pCat').value = json.category;
                        document.getElementById('tCov').value = json.tech?.coverage || '';
                        document.getElementById('tDry').value = json.tech?.drying || '';
                        document.getElementById('tThick').value = json.tech?.thickness || '';
                        app.updatePreview();
                        alert("✨ הנתונים מולאו בהצלחה!");
                    }
                    
                    btn.innerHTML = origText;
                    lucide.createIcons();
                },

                loadProds: () => {
                    onSnapshot(collection(db, "products"), snap => {
                        const l = document.getElementById('pList'); l.innerHTML = ""; app.prods = [];
                        snap.forEach(d => {
                            const p = {id:d.id, ...d.data()}; app.prods.push(p);
                            l.innerHTML += `
                            <div onclick="safeApp.editP('${p.id}')" class="p-3 border-b hover:bg-gray-50 cursor-pointer flex gap-3 items-center group">
                                <img src="${p.image}" class="w-10 h-10 object-contain bg-gray-100 rounded p-1" onerror="this.src='https://placehold.co/50'">
                                <div class="flex-1 min-w-0">
                                    <div class="font-bold text-sm truncate text-gray-800">${p.name}</div>
                                    <div class="text-xs text-gray-500">${p.brand}</div>
                                </div>
                            </div>`;
                        });
                    });
                },

                editP: (id) => {
                    const p = app.prods.find(x => x.id === id);
                    document.getElementById('pid').value = id;
                    document.getElementById('pName').value = p.name;
                    document.getElementById('pBrand').value = p.brand;
                    document.getElementById('pCat').value = p.category;
                    document.getElementById('pDesc').value = p.marketingDesc;
                    document.getElementById('pImg').value = p.image;
                    document.getElementById('tCov').value = p.tech?.coverage||'';
                    document.getElementById('tDry').value = p.tech?.drying||'';
                    document.getElementById('tThick').value = p.tech?.thickness||'';
                    app.updatePreview();
                },

                newProd: () => {
                    document.getElementById('pid').value = "";
                    document.querySelectorAll('#view-products input:not(#pSearch), #view-products textarea').forEach(i => i.value="");
                    document.getElementById('pImg').value = "https://placehold.co/400";
                    app.updatePreview();
                },

                updatePreview: () => {
                    document.getElementById('prevName').innerText = document.getElementById('pName').value || "שם המוצר";
                    document.getElementById('prevBrand').innerText = document.getElementById('pBrand').value || "מותג";
                    document.getElementById('prevDesc').innerText = document.getElementById('pDesc').value || "תיאור...";
                    document.getElementById('prevImg').src = document.getElementById('pImg').value || "https://placehold.co/200";
                    document.getElementById('prevCov').innerText = document.getElementById('tCov').value || "-";
                    document.getElementById('prevDry').innerText = document.getElementById('tDry').value || "-";
                    document.getElementById('prevThick').innerText = document.getElementById('tThick').value || "-";
                },

                saveProd: async () => {
                    const id = document.getElementById('pid').value;
                    const d = {
                        name: document.getElementById('pName').value, brand: document.getElementById('pBrand').value, category: document.getElementById('pCat').value,
                        marketingDesc: document.getElementById('pDesc').value, image: document.getElementById('pImg').value,
                        tech: { coverage: document.getElementById('tCov').value, drying: document.getElementById('tDry').value, thickness: document.getElementById('tThick').value }
                    };
                    if(id) await updateDoc(doc(db, "products", id), d); else await addDoc(collection(db, "products"), d);
                    app.newProd();
                    alert("נשמר!");
                },

                delProd: async () => { if(confirm("למחוק?")) await deleteDoc(doc(db, "products", document.getElementById('pid').value)); app.newProd(); },
                
                filterP: (t) => { t=t.toLowerCase(); Array.from(document.getElementById('pList').children).forEach(e=>{e.style.display=e.innerText.toLowerCase().includes(t)?'flex':'none'}); },

                loadBrands: () => {
                    onSnapshot(collection(db, "brands"), snap => {
                        const s = document.getElementById('pBrand'); s.innerHTML = "";
                        snap.forEach(d => {
                            const b = d.data();
                            const o = document.createElement('option'); o.value=b.name; o.innerText=b.name; s.appendChild(o);
                        });
                    });
                }
            };

            // Expose to window
            window.safeApp = app;
            app.init();

        } catch (error) {
            console.error("Critical Init Error:", error);
            document.getElementById('statusMsg').innerText = "שגיאת טעינה (בדוק קונסול)";
            document.getElementById('statusMsg').classList.add('text-red-500');
            alert("שגיאה בטעינת הקבצים:\n" + error.message + "\n\nוודא שקובץ admin.html נמצא בתיקיית admin ולא בתיקייה הראשית!");
        }
    </script>
</body>
</html>
