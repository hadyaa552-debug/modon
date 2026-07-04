"use client";
import{useState,useEffect,useRef,FormEvent}from"react";
import{useRouter}from"next/navigation";

const P="01117322733",PD="0111 732 2733",PI="+201117322733",WN="201117322733";
const WM="مرحباً، محتاج تفاصيل مدن راس الحكمة — Modon Ras El Hekma — وادي يم Wadi Yemm";
const WU=`https://wa.me/${WN}?text=${encodeURIComponent(WM)}`;
const WK="ee750b36-1c4d-465e-a364-9cd12ffb4246";

function trackCall(l="call"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_call",{event_category:"contact",event_label:l});}
function trackWA(l="wa"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_whatsapp",{event_category:"contact",event_label:l});}
function trackLead(l="form"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","generate_lead",{event_category:"lead",event_label:l});}

const CDN="https://www.modon.com/images/modoncorporatelibraries/";
const I={
  hero:CDN+"banners/reh-landing-page.webp",promo:CDN+"about-us/ras-el-hekma-promo2.webp",
  map:CDN+"maps/ras-el-hekma-map.webp",logo:CDN+"about-us/modon_ras-el-hekma_logo_white_rgb-(1).png",
  g1:CDN+"about-us/reh1.webp",g2:CDN+"about-us/reh2.webp",g3:CDN+"about-us/reh3.webp",
  g4:CDN+"about-us/reh4.webp",g5:CDN+"about-us/reh5.webp",g6:CDN+"about-us/reh6.webp",
  about:CDN+"about-us/1.webp",
};
const FAQS=[
  {q:"أين تقع مدن راس الحكمة — Modon Ras El Hekma؟",a:"مدن راس الحكمة Modon Ras El Hekma على ساحل البحر المتوسط غرب الإسكندرية. ٤٤ كم ساحل ذهبي في موقع استراتيجي على الساحل الشمالي. وادي يم Wadi Yemm أول إطلاق في مدن."},
  {q:"ما هو وادي يم — Wadi Yemm؟",a:"وادي يم Wadi Yemm هو أول منطقة سكنية من ١٧ منطقة في مدن راس الحكمة Modon. إطلالة بحرية ساحرة، بوليفاردات مشاة، حمامات سباحة، ومساحات خضراء. مدن Modon — حياة متوسطية عصرية."},
  {q:"ما أنواع وحدات مدن راس الحكمة — Modon؟",a:"فيلات فاخرة، تاون هاوس، شاليهات، وشقق سكنية. مدن Modon توفر تنوع كامل في وادي يم Wadi Yemm وباقي المناطق الـ ١٧."},
  {q:"ما حجم استثمار مدن راس الحكمة — Modon Ras El Hekma؟",a:"استثمار أولي ٣٥ مليار دولار من ADQ. إجمالي الاستثمارات المتوقعة يتجاوز ١٥٠ مليار دولار. مدن Modon — أكبر مشروع ساحلي في مصر."},
  {q:"ما البنية التحتية في مدن — Modon Ras El Hekma؟",a:"مطار دولي جديد، شبكة طرق وسكك حديدية سريعة، مارينا عالمية، ملاعب جولف، فنادق دولية، منطقة حرة واستثمارية. مدن راس الحكمة — مدينة متكاملة."},
  {q:"ما التصميم المعماري لمدن — Modon؟",a:"تصميم يجمع بين الفخامة العالمية والتراث المحلي البدوي. مدن Modon تدمج العمارة التقليدية مع الوظائف العصرية. وادي يم Wadi Yemm — أناقة متوسطية."},
];
const NAV=[["#about","المشروع"],["#wadiyemm","وادي يم"],["#gallery","المعرض"],["#amenities","المرافق"],["#contact","سجل"]];
const PhI=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Chv=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>;

export default function Home(){
  const router=useRouter();
  const[fq,sFq]=useState<number|null>(null);const[mn,sMn]=useState(false);
  const[fs,sFs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[pop,sPop]=useState(false);const[ps,sPs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[ck,sCk]=useState(false);const[prv,sPrv]=useState(false);
  const pr=useRef(false);const fr=useRef<HTMLFormElement>(null);const pfr=useRef<HTMLFormElement>(null);
  useEffect(()=>{document.querySelectorAll(".fin").forEach(el=>{new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add("vis")},{threshold:.1}).observe(el)});try{if(!localStorage.getItem("md_ck"))sCk(true)}catch{sCk(true)}},[]);
  useEffect(()=>{if(pr.current)return;const os=()=>{if(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)>=.55)go()};const t=setTimeout(()=>go(),16000);window.addEventListener("scroll",os,{passive:true});function go(){if(pr.current)return;pr.current=true;sPop(true);document.body.classList.add("p-on");window.removeEventListener("scroll",os);clearTimeout(t)}return()=>{window.removeEventListener("scroll",os);clearTimeout(t)}},[]);
  function cp(){sPop(false);document.body.classList.remove("p-on")}
  async function sub(r:React.RefObject<HTMLFormElement|null>,ss:(s:any)=>void,src:string){if(!r.current)return;ss("sending");const fd=new FormData(r.current);const pl:Record<string,string>={};fd.forEach((v,k)=>pl[k]=v.toString());try{const res=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(pl)});const d=await res.json();if(d.success){ss("sent");trackLead(src);r.current.reset();if(src==="main_form")setTimeout(()=>router.push("/thank-you"),800)}else throw 0}catch{ss("error")}}

  return(<>
    <header className="hd"><div className="hd-in">
      <a className="hd-logo" href="#hero"><img src={I.logo} alt="مدن راس الحكمة Modon Ras El Hekma"/><div><div className="hd-logo-t">MODON</div><div className="hd-logo-s">مدن · راس الحكمة</div></div></a>
      <nav className="hd-nav">{NAV.map(([h,l])=><a key={h} href={h}>{l}</a>)}</nav>
      <div className="hd-acts"><a className="hd-call" href={`tel:${PI}`} onClick={()=>trackCall("hd")}><PhI/><span>{PD}</span></a><a className="hd-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hd")}>💬 واتساب</a><button className="hd-mob" onClick={()=>sMn(!mn)}>☰</button></div>
    </div>{mn&&<div style={{background:"#0e1e2a",padding:"10px 20px"}}>{NAV.map(([h,l])=><a key={h} href={h} onClick={()=>sMn(false)} style={{display:"block",padding:"9px 0",color:"rgba(255,255,255,.65)",textDecoration:"none",fontSize:"13px",borderBottom:"1px solid rgba(255,255,255,.03)"}}>{l}</a>)}</div>}</header>

    <section className="hero" id="hero"><div className="hero-bg"><img src={I.hero} alt="مدن راس الحكمة — Modon Ras El Hekma وادي يم Wadi Yemm"/><div className="hero-ov"/></div>
    <div className="hero-ct">
      <p className="hero-tag">Modon · مدن للتطوير العقاري</p>
      <h1 className="hero-h">مدن <em>راس الحكمة</em><br/>Modon <em>Ras El Hekma</em></h1>
      <p className="hero-p">مدن راس الحكمة Modon Ras El Hekma — أكبر مدينة ساحلية جديدة في مصر. ٤٤ كم ساحل ذهبي، ١٧ منطقة سكنية متميزة، واستثمار ٣٥ مليار دولار. وادي يم Wadi Yemm — أول إطلاق في مدن.</p>
      <p className="hero-kw">مدن · Modon · مدن راس الحكمة · Modon Ras El Hekma · وادي يم · Wadi Yemm · الساحل الشمالي</p>
      <div className="hero-stats">
        <div className="hero-st"><strong>٤٤ كم</strong><span>ساحل ذهبي</span></div>
        <div className="hero-st"><strong>١٧</strong><span>منطقة سكنية</span></div>
        <div className="hero-st"><strong>$35B</strong><span>استثمار</span></div>
        <div className="hero-st"><strong>وادي يم</strong><span>أول إطلاق</span></div>
      </div>
      <div className="hero-btns"><a className="b-teal" href="#contact">سجل اهتمامك</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hero")}>💬 واتساب</a><a className="b-ghost" href="#wadiyemm">وادي يم</a></div>
    </div></section>

    <div className="trust"><div className="trust-in">
      <div className="trust-i"><strong>٤٤</strong> كم ساحل</div><div className="trust-i"><strong>١٧</strong> منطقة</div>
      <div className="trust-i"><strong>$35B</strong> استثمار</div><div className="trust-i"><strong>$150B+</strong> إجمالي متوقع</div>
    </div></div>

    <section className="sec about" id="about"><div className="sec-in">
      <div className="fin" style={{textAlign:"center"}}><span className="sec-tag">Modon Ras El Hekma · مدن راس الحكمة</span>
        <h2 className="sec-h" style={{textAlign:"center"}}>مدينة ساحلية <em>تعيد تعريف المستقبل</em></h2>
        <p className="sec-p c">مدن راس الحكمة Modon Ras El Hekma — على خلفية البحر المتوسط الفيروزي وبعراقة الثقافة المصرية. مدينة جديدة تعيد تعريف الحياة الساحلية العصرية. ٤٤ كم ساحل ذهبي مصممة حول ١٧ منطقة سكنية فريدة. مدن Modon — مكان لمن يبحث عن حياة مفعمة بالطاقة والجمال.</p>
      </div>
      <div className="about-grid fin">
        <div className="about-img"><img src={I.about} alt="مدن Modon — حياة ساحلية متوسطية في راس الحكمة"/></div>
        <div className="about-pts">
          {[{i:"🌊",t:"٤٤ كم ساحل ذهبي",d:"مدن راس الحكمة — Modon Ras El Hekma على أطول ساحل ذهبي في مصر"},{i:"✈️",t:"مطار دولي جديد",d:"مطار دولي جنوب مدن Modon — وصول سلس براً وبحراً وجواً"},{i:"⛳",t:"مارينا وملاعب جولف",d:"مرافق عالمية داخل مدن — فنادق دولية ومارينا ومنتجعات صحية"},{i:"💼",t:"منطقة حرة واستثمارية",d:"إعفاءات ضريبية وحوافز للمستثمرين في مدن راس الحكمة Modon"}].map((x,i)=>
            <div key={i} className="about-pt"><div className="about-pt-i">{x.i}</div><div><h3>{x.t}</h3><p>{x.d}</p></div></div>
          )}
        </div>
      </div>
      <div className="about-stats fin">
        {[{v:"44km",l:"ساحل — مدن Modon"},{v:"17",l:"منطقة سكنية"},{v:"$35B",l:"استثمار ADQ"},{v:"$150B+",l:"إجمالي متوقع"}].map((s,i)=>
          <div key={i} className="about-stat"><strong>{s.v}</strong><span>{s.l}</span></div>
        )}
      </div>
    </div></section>

    <section className="sec" id="wadiyemm" style={{background:"var(--color-cream)"}}><div className="sec-in fin" style={{textAlign:"center"}}>
      <span className="sec-tag">Wadi Yemm · وادي يم</span>
      <h2 className="sec-h" style={{textAlign:"center"}}><em>وادي يم</em> — الفصل الأول في مدن</h2>
      <p className="sec-p c">وادي يم Wadi Yemm — أول إطلاق من ١٧ منطقة في مدن راس الحكمة Modon Ras El Hekma. حياة ساحلية أنيقة مع بوليفاردات مشاة وحمامات سباحة ومساحات خضراء. وادي يم — إيقاع هادئ للحياة العصرية.</p>
      <div className="about-grid" style={{marginTop:28}}>
        <div className="about-img"><img src={I.promo} alt="وادي يم مدن — Wadi Yemm Modon Ras El Hekma"/></div>
        <div>
          <div className="about-pts">
            {[{i:"🏡",t:"فيلات وتاون هاوس",d:"وادي يم Wadi Yemm — وحدات فاخرة متنوعة في مدن"},{i:"🌴",t:"بوليفاردات مشاة",d:"مساحات خضراء ومسارات تربط كل أنحاء وادي يم — مدن Modon"},{i:"🏊",t:"حمامات سباحة Waterfront",d:"إطلالات بحرية ساحرة في أول منطقة من مدن راس الحكمة"},{i:"🏗️",t:"تصميم متوسطي فريد",d:"عمارة تجمع الفخامة العالمية والتراث المحلي — Modon"}].map((x,i)=>
              <div key={i} className="about-pt"><div className="about-pt-i">{x.i}</div><div><h3>{x.t}</h3><p>{x.d}</p></div></div>
            )}
          </div>
          <a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("wadiyemm")} style={{width:"100%",justifyContent:"center",marginTop:14}}>💬 استفسر عن وادي يم — Wadi Yemm</a>
        </div>
      </div>
    </div></section>

    <div className="band"><h3>سجل اهتمامك في مدن راس الحكمة — Modon Ras El Hekma</h3><p>وادي يم Wadi Yemm — أول إطلاق · ١٧ منطقة · ٤٤ كم ساحل · $35B استثمار</p>
      <div className="band-btns"><a className="b-teal" href="#contact">سجل الآن</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mid")}>💬 واتساب</a><a className="b-ghost" href={`tel:${PI}`} onClick={()=>trackCall("mid")}><PhI/> اتصل</a></div>
    </div>

    <section className="sec gal" id="gallery"><div className="sec-in fin" style={{textAlign:"center"}}>
      <span className="sec-tag">معرض مدن · Modon Gallery</span>
      <h2 className="sec-h" style={{textAlign:"center"}}>معرض <em>مدن راس الحكمة</em></h2>
      <div className="gal-grid">
        <div className="gal-it big"><img src={I.g1} alt="مدن راس الحكمة — Modon Ras El Hekma Beach"/><div className="gal-cap">مدن — Modon Beach</div></div>
        <div className="gal-it"><img src={I.g2} alt="مدن Modon منظر بحري"/><div className="gal-cap">مدن — Sea View</div></div>
        <div className="gal-it"><img src={I.g3} alt="وادي يم Wadi Yemm"/><div className="gal-cap">وادي يم — Wadi Yemm</div></div>
        <div className="gal-it"><img src={I.g4} alt="مدن راس الحكمة فيلات"/><div className="gal-cap">مدن — Villas</div></div>
        <div className="gal-it"><img src={I.g5} alt="Modon Ras El Hekma"/><div className="gal-cap">Modon — Lifestyle</div></div>
        <div className="gal-it big"><img src={I.map} alt="خريطة مدن راس الحكمة Modon Map"/><div className="gal-cap">خريطة مدن — Modon Master Plan</div></div>
      </div>
    </div></section>

    <section className="am" id="amenities"><div className="am-in fin" style={{textAlign:"center"}}>
      <span className="sec-tag" style={{color:"var(--color-teal-light)"}}>مرافق مدن · Modon Amenities</span>
      <h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>مرافق <em style={{color:"var(--color-teal-light)"}}>مدن راس الحكمة</em></h2>
      <div className="am-grid">{[{i:"✈️",n:"مطار دولي"},{i:"⛵",n:"مارينا عالمية"},{i:"⛳",n:"ملاعب جولف"},{i:"🏨",n:"فنادق دولية"},{i:"🏫",n:"مدارس"},{i:"💼",n:"مرافق أعمال"},{i:"🏥",n:"مراكز صحية"},{i:"🎭",n:"أماكن ترفيهية"},{i:"🌊",n:"٤٤ كم ساحل"},{i:"🏖️",n:"منتجعات"},{i:"💰",n:"منطقة حرة"},{i:"🛣️",n:"شبكة طرق سريعة"}].map((x,i)=>
        <div key={i} className="am-c"><div className="am-c-i">{x.i}</div><div className="am-c-n">{x.n}</div></div>
      )}</div>
    </div></section>

    <section className="sec faq"><div className="sec-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{textAlign:"center"}}>أسئلة عن <em>مدن</em> — Modon Ras El Hekma FAQ</h2>
      <div className="faq-list">{FAQS.map((x,i)=><div key={i} className="faq-i"><button className={`faq-q ${fq===i?"op":""}`} onClick={()=>sFq(fq===i?null:i)}><span>{x.q}</span><span className="arr"><Chv/></span></button><div className={`faq-a ${fq===i?"op":""}`}><p>{x.a}</p></div></div>)}</div>
    </div></section>

    <div className="disc"><p>هذا الموقع يقدم معلومات عن مدن راس الحكمة — Modon Ras El Hekma. أسعار استرشادية وقابلة للتغيير. التعاقد مع المطور مباشرة.</p></div>

    <section className="ct" id="contact"><div className="sec-in fin">
      <div style={{textAlign:"center"}}><span className="sec-tag" style={{color:"var(--color-teal-light)"}}>سجل اهتمامك</span><h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>احجز في <em style={{color:"var(--color-teal-light)"}}>مدن راس الحكمة</em></h2></div>
      <div className="ct-wrap">
        <div className="ct-left">
          <p>سجّل في مدن راس الحكمة — Modon Ras El Hekma — وادي يم Wadi Yemm وفريق المبيعات هيتواصل معاك.</p>
          <a className="ct-row" href={`tel:${PI}`} onClick={()=>trackCall("ct")}><PhI/><span>{PD}</span></a>
          <a className="ct-row" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("ct")}>💬 واتساب مدن — Modon</a>
          <div style={{marginTop:14}}><a className="b-wa" href={WU} target="_blank" rel="noopener" style={{width:"100%",justifyContent:"center"}} onClick={()=>trackWA("ct_big")}>💬 واتساب الآن — مدن Modon</a></div>
        </div>
        <div className="ct-form"><div className="cf-title">سجل في مدن — Modon Ras El Hekma</div>
          <form ref={fr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(fr,sFs,"main_form")}} style={{textAlign:"right"}}>
            <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Lead — مدن راس الحكمة Modon Ras El Hekma وادي يم"/><input type="hidden" name="from_name" value="Modon REH Landing"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
            <div className="cf-row"><div className="cf-f"><label>الاسم *</label><input name="name" placeholder="اسمك" required/></div><div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required/></div></div>
            <div className="cf-f"><label>نوع الوحدة</label><select name="unit_type"><option value="غير محدد">اختر</option><option value="فيلا">فيلا</option><option value="تاون هاوس">تاون هاوس</option><option value="شاليه">شاليه</option><option value="شقة">شقة</option></select></div>
            {fs==="sent"?<div style={{textAlign:"center",padding:"14px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-teal-light)",fontWeight:700}}>تم — جاري التحويل</p></div>
            :<button type="submit" className="cf-sub" disabled={fs==="sending"}>{fs==="sending"?"جاري...":"سجل الآن — مدن Modon"}</button>}
            {fs==="error"&&<p style={{color:"#ef4444",fontSize:10,textAlign:"center",marginTop:6}}>خطأ — <a href={WU} target="_blank" style={{color:"var(--color-teal-light)"}}>واتساب</a></p>}
            <p style={{fontSize:8,color:"rgba(255,255,255,.2)",textAlign:"center",marginTop:8}}>بإرسال النموذج توافق على <button onClick={()=>sPrv(true)} type="button" style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:8}}>سياسة الخصوصية</button></p>
          </form>
        </div>
      </div>
    </div></section>

    <footer className="ft"><div>
      <img src={I.logo} alt="مدن Modon" style={{height:36,marginBottom:12,opacity:.6}}/>
      <p className="ft-t">مدن راس الحكمة — Modon Ras El Hekma. وادي يم Wadi Yemm أول إطلاق. ٤٤ كم ساحل، ١٧ منطقة. أسعار استرشادية.</p>
      <div className="ft-links"><button onClick={()=>sPrv(true)}>سياسة الخصوصية</button><a href="#about">المشروع</a><a href="#wadiyemm">وادي يم</a></div>
      <p className="ft-cr">© 2026 Modon · مدن · Modon Ras El Hekma · مدن راس الحكمة · وادي يم Wadi Yemm</p>
    </div></footer>

    <div className="float-btns"><a className="float-btn fwa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("float")}>💬</a><a className="float-btn fcall" href={`tel:${PI}`} onClick={()=>trackCall("float")}>📞</a></div>

    <div className={`p-bk ${pop?"on":""}`} onClick={cp}/><div className={`p-dlg ${pop?"on":""}`}><button className="p-x" onClick={cp}>✕</button>
      <p style={{fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"var(--color-teal-light)",marginBottom:8}}>🌊 مدن راس الحكمة — Modon</p>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:6}}>سجل في وادي يم — Wadi Yemm</h2>
      <p style={{fontSize:11,color:"rgba(255,255,255,.5)",marginBottom:14}}>أول إطلاق في مدن Modon — ٤٤ كم ساحل، ١٧ منطقة</p>
      {ps==="sent"?<p style={{textAlign:"center",color:"var(--color-teal-light)",fontWeight:700,padding:16}}>✓ تم</p>
      :<form ref={pfr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(pfr,sPs,"popup").then(()=>setTimeout(cp,2500))}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Popup — مدن Modon وادي يم"/><input type="hidden" name="from_name" value="Modon Popup"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="cf-f"><label>الاسم *</label><input name="name" placeholder="اسمك" required style={{padding:10,fontSize:11}}/></div>
        <div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required style={{padding:10,fontSize:11}}/></div>
        <button type="submit" className="cf-sub" disabled={ps==="sending"} style={{marginTop:4}}>{ps==="sending"?"...":"سجل — مدن Modon"}</button>
        <a href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("popup")} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginTop:10,padding:10,borderRadius:8,background:"#25d366",color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none"}}>💬 واتساب مدن — Modon</a>
      </form>}
    </div>

    {prv&&<><div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,.6)"}} onClick={()=>sPrv(false)}/><div style={{position:"fixed",zIndex:301,top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(520px,92vw)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:16,padding:"28px 24px"}}>
      <button onClick={()=>sPrv(false)} style={{position:"absolute",top:10,left:10,background:"#f0f0f0",border:"none",borderRadius:"50%",width:28,height:28,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:12}}>سياسة الخصوصية</h2>
      <div style={{fontSize:11,lineHeight:1.8,color:"var(--color-muted)"}}>
        <p style={{marginBottom:8}}>نجمع الاسم والهاتف فقط عند تعبئة النموذج — للتواصل بخصوص مدن Modon راس الحكمة ووادي يم Wadi Yemm.</p>
        <p style={{marginBottom:8}}>بياناتك مشفرة ومحمية. لا نبيع بياناتك.</p>
        <p>تواصل: <a href={`tel:${PI}`} style={{color:"var(--color-teal)"}}>{PD}</a></p>
      </div></div></>}

    {ck&&<div className="ck"><p>نستخدم cookies لتحسين تجربتك. <button onClick={()=>sPrv(true)} style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:10}}>سياسة الخصوصية</button></p>
      <div className="ck-btns"><button className="ck-ok" onClick={()=>{sCk(false);try{localStorage.setItem("md_ck","1")}catch{}}}>موافق</button><button className="ck-no" onClick={()=>sCk(false)}>رفض</button></div>
    </div>}

    <nav className="mbar"><div className="mbar-in"><a className="m-call" href={`tel:${PI}`} onClick={()=>trackCall("mob")}><PhI/>{PD}</a><a className="m-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mob")}>💬</a><a className="m-book" href="#contact">سجل</a></div></nav>
  </>);
}
