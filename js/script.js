// ╔══════════════════════════════════════╗
// ║  TOOLPRIME - NETLIFY SOLID SCRIPT     ║
// ║  21 Tools Embedded - Works Everywhere ║
// ╚══════════════════════════════════════╝

console.log("✅ ToolPrime Loaded!");

// ========== ALL 21 TOOLS EMBEDDED ==========
const TOOLS = [
    ["tools/image/png-to-jpg-converter/","image","PNG to JPG","🖼️"],
    ["tools/image/image-compressor/","image","Image Compressor","🗜️"],
    ["tools/image/image-resizer/","image","Image Resizer","📐"],
    ["tools/text/word-counter/","text","Word Counter","📝"],
    ["tools/security/password-generator/","security","Password Generator","🔑"],
    ["tools/url/qr-generator/","url","QR Generator","📱"],
    ["tools/calculator/age-calculator/","calculator","Age Calculator","🎂"],
    ["tools/calculator/bmi-calculator/","calculator","BMI Calculator","⚖️"],
    ["tools/developer/json-formatter/","developer","JSON Formatter","📋"],
    ["tools/developer/website-to-apk/","developer","Website to APK","📲"],
    ["tools/developer/url-encoder/","developer","URL Encoder","🔗"],
    ["tools/developer/base64-encoder/","developer","Base64 Encoder","🔐"],
    ["tools/developer/json-to-csv/","developer","JSON to CSV","🔄"],
    ["tools/fun/dice-roller/","fun","Dice Roller","🎲"],
    ["tools/converter/unit-converter/","converter","Unit Converter","📏"],
    ["tools/design/color-picker/","design","Color Picker","🎨"],
    ["tools/design/color-picker-from-image/","design","Color from Image","🖼️"],
    ["tools/seo/meta-tag-generator/","seo","Meta Tags","🏷️"],
    ["tools/pdf/pdf-to-image/","pdf","PDF to Image","📄"],
    ["tools/pdf/image-to-pdf/","pdf","Image to PDF","📑"],
    ["tools/time/stopwatch-timer/","time","Stopwatch Timer","⏱️"]
    ["tools/fun/admin-test-tool/","fun"],
];

const CATS = {
    image:"Image", text:"Text", developer:"Dev", security:"Security",
    calculator:"Calc", url:"URL", converter:"Convert", fun:"Fun",
    design:"Design", seo:"SEO", pdf:"PDF", time:"Time"
    "admin-test-tool":"🧪",
};

let all=[], active="all";

// ========== INSTANT LOAD (No fetch!) ==========
(function init(){
    const cats = new Set();
    TOOLS.forEach(([p,c,n,i]) => {
        cats.add(c);
        all.push({name:n, cat:c, icon:'<span style="font-size:2rem">'+i+'</span>', link:p+"index.html"});
    });
    
    document.getElementById("tt").textContent = all.length;
    document.getElementById("tc").textContent = cats.size;
    
    let h = '<button class="cat-btn active" data-c="all">All ('+all.length+')</button>';
    cats.forEach(c => {
        const n = all.filter(t=>t.cat===c).length;
        h += '<button class="cat-btn" data-c="'+c+'">'+CATS[c]+' ('+n+')</button>';
    });
    document.getElementById("cats").innerHTML = h;
    
    document.getElementById("cats").onclick = e => {
        const b = e.target.closest(".cat-btn"); if(!b)return;
        document.querySelectorAll(".cat-btn").forEach(t=>t.classList.remove("active"));
        b.classList.add("active"); active=b.dataset.c; filter();
    "admin-test-tool":"🧪",
};
    
    render(all);
    console.log("✅ Loaded "+all.length+" tools!");
})();

function render(arr){
    const g = document.getElementById("grid"), em = document.getElementById("empty");
    if(!arr.length){ g.style.display="none"; em.style.display="block"; return; }
    g.style.display="grid"; em.style.display="none";
    g.innerHTML = arr.map(t=>
        '<a href="'+t.link+'" class="card">'+
        '<div class="icon">'+t.icon+'</div>'+
        '<div class="name">'+t.name+'</div>'+
        '<span class="tag">'+CATS[t.cat]+'</span>'+
        '</a>'
    ).join("");
}

function filter(){
    const q = document.getElementById("sq").value.toLowerCase().trim();
    let f = all; if(active!=="all") f = f.filter(t=>t.cat===active);
    if(q) f = f.filter(t=>t.name.toLowerCase().includes(q));
    render(f);
}

document.getElementById("sq").oninput = filter;
document.getElementById("sq").onkeydown = e => { if(e.key==="Escape"){ e.target.value=""; filter(); }
    "admin-test-tool":"🧪",
};

