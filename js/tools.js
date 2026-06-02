// ╔══════════════════════════════════════╗
// ║  TOOLPRIME - COLORFUL TOOLS LIST      ║
// ╚══════════════════════════════════════╝

const TOOLS = [
    ["tools/image/png-to-jpg-converter/","image","PNG to JPG","IMG","#0071e3","#e8f4fd"],
    ["tools/image/image-compressor/","image","Image Compressor","CMP","#34c759","#e8f8ed"],
    ["tools/image/image-resizer/","image","Image Resizer","RSZ","#ff9500","#fff8f0"],
    ["tools/text/word-counter/","text","Word Counter","TXT","#af52de","#f6f0fc"],
    ["tools/security/password-generator/","security","Password Generator","KEY","#ff3b30","#fff0f0"],
    ["tools/url/qr-generator/","url","QR Generator","QR","#ff9500","#fff8f0"],
    ["tools/calculator/age-calculator/","calculator","Age Calculator","AGE","#ff2d55","#fff0f3"],
    ["tools/calculator/bmi-calculator/","calculator","BMI Calculator","BMI","#30d158","#e8f8ed"],
    ["tools/developer/json-formatter/","developer","JSON Formatter","JSON","#0071e3","#e8f4fd"],
    ["tools/developer/website-to-apk/","developer","Website to APK","APK","#8e44ad","#f5f0fa"],
    ["tools/developer/url-encoder/","developer","URL Encoder","URL","#16a085","#e8f6f3"],
    ["tools/developer/base64-encoder/","developer","Base64 Encoder","B64","#2c3e50","#eaecee"],
    ["tools/developer/json-to-csv/","developer","JSON to CSV","CSV","#e67e22","#fef5ec"],
    ["tools/fun/dice-roller/","fun","Dice Roller","DICE","#e74c3c","#fdedec"],
    ["tools/converter/unit-converter/","converter","Unit Converter","UNIT","#3498db","#eaf2f8"],
    ["tools/design/color-picker/","design","Color Picker","CLR","#9b59b6","#f5f0f8"],
    ["tools/design/color-picker-from-image/","design","Color from Image","IMG2","#1abc9c","#e8f8f5"],
    ["tools/seo/meta-tag-generator/","seo","Meta Tags","SEO","#27ae60","#e9f7ef"],
    ["tools/pdf/pdf-to-image/","pdf","PDF to Image","PDF","#c0392b","#f9ebea"],
    ["tools/pdf/image-to-pdf/","pdf","Image to PDF","IMG2PDF","#2980b9","#eaf2f8"],
    ["tools/time/stopwatch-timer/","time","Stopwatch Timer","TIME","#f39c12","#fef9f0"],
];

const CATS={image:"Image",text:"Text",developer:"Dev",security:"Security",calculator:"Calc",url:"URL",converter:"Convert",fun:"Fun",design:"Design",seo:"SEO",pdf:"PDF",time:"Time"};
let all=[],active="all";

(function init(){
    const cats=new Set();
    TOOLS.forEach(([p,c,n,i,color,bg])=>{
        cats.add(c);
        const badge='<span style="display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:'+bg+';color:'+color+';border-radius:10px;font-weight:700;font-size:0.78rem;letter-spacing:0.5px">'+i+'</span>';
        all.push({name:n,cat:c,icon:badge,link:p+"index.html"});
    });
    document.getElementById("tt").textContent=all.length;
    document.getElementById("tc").textContent=cats.size;
    let h='<button class="cat-btn active" data-c="all">All ('+all.length+')</button>';
    cats.forEach(c=>{const n=all.filter(t=>t.cat===c).length;h+='<button class="cat-btn" data-c="'+c+'">'+CATS[c]+' ('+n+')</button>';});
    document.getElementById("cats").innerHTML=h;
    document.getElementById("cats").onclick=e=>{const b=e.target.closest(".cat-btn");if(!b)return;document.querySelectorAll(".cat-btn").forEach(t=>t.classList.remove("active"));b.classList.add("active");active=b.dataset.c;filter();};
    render(all);
})();

function render(arr){const g=document.getElementById("grid"),em=document.getElementById("empty");if(!arr.length){g.style.display="none";em.style.display="block";return}g.style.display="grid";em.style.display="none";g.innerHTML=arr.map(t=>'<a href="'+t.link+'" class="card"><div class="icon">'+t.icon+'</div><div class="name">'+t.name+'</div><span class="tag">'+CATS[t.cat]+'</span></a>').join("");}
function filter(){const q=document.getElementById("sq").value.toLowerCase().trim();let f=all;if(active!=="all")f=f.filter(t=>t.cat===active);if(q)f=f.filter(t=>t.name.toLowerCase().includes(q));render(f);}
document.getElementById("sq").oninput=filter;document.getElementById("sq").onkeydown=e=>{if(e.key==="Escape"){e.target.value="";filter();}};

