"use client";
import{useEffect}from"react";
const PI="+201117322733",PD="0111 732 2733";
const WU=`https://wa.me/201117322733?text=${encodeURIComponent("مرحباً، لسه سجلت في مدن راس الحكمة — Modon")}`;
const LOGO="https://www.modon.com/images/modoncorporatelibraries/about-us/modon_ras-el-hekma_logo_white_rgb-(1).png";
export default function ThankYou(){
  useEffect(()=>{
    // ══ Google Ads Conversion ══
    // const w=window as any;if(w.gtag)w.gtag("event","conversion",{send_to:"AW-XXXXXXX/XXXXXXX"});
  },[]);
  return(
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#0e1e2a,#142838)",padding:"40px 24px",fontFamily:"'IBM Plex Sans Arabic',sans-serif",textAlign:"center",color:"#fff"}}>
      <img src={LOGO} alt="مدن Modon" style={{height:48,marginBottom:24}}/>
      <div style={{width:72,height:72,borderRadius:"50%",background:"rgba(42,124,142,.15)",border:"2px solid rgba(42,124,142,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:20}}>✓</div>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,5vw,40px)",fontWeight:600,marginBottom:10}}>شكراً! تم استلام طلبك</h1>
      <p style={{fontSize:14,color:"rgba(255,255,255,.6)",maxWidth:440,lineHeight:1.7,marginBottom:24}}>فريق <strong style={{color:"#3a9aae"}}>مدن راس الحكمة — Modon</strong> هيتواصل معاك قريب بتفاصيل وادي يم Wadi Yemm.</p>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
        <a href={WU} target="_blank" rel="noopener" style={{padding:"13px 26px",background:"#25d366",color:"#fff",borderRadius:10,fontSize:13,fontWeight:700,textDecoration:"none"}}>💬 واتساب مدن</a>
        <a href={`tel:${PI}`} style={{padding:"13px 26px",border:"1px solid rgba(42,124,142,.3)",color:"#3a9aae",borderRadius:10,fontSize:13,fontWeight:700,textDecoration:"none"}}>{PD}</a>
        <a href="/" style={{padding:"13px 26px",border:"1px solid rgba(255,255,255,.1)",color:"rgba(255,255,255,.5)",borderRadius:10,fontSize:12,textDecoration:"none"}}>← العودة</a>
      </div>
    </div>
  );
}
