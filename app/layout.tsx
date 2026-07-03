import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "مدن راس الحكمة — وادي يم | Modon Ras El Hekma — Wadi Yemm",
  description: "مدن راس الحكمة Modon Ras El Hekma — أكبر مدينة ساحلية في مصر. ٤٤ كم ساحل، ١٧ منطقة سكنية، استثمار ٣٥ مليار دولار. وادي يم Wadi Yemm أول إطلاق. فيلات وتاون هاوس وشاليهات وشقق. مدن Modon — مطار دولي، مارينا، ملاعب جولف، منطقة حرة.",
  keywords: "مدن,Modon,مدن راس الحكمة,Modon Ras El Hekma,وادي يم,Wadi Yemm,راس الحكمة,فيلات مدن,شاليهات مدن,مدن مصر,Modon Egypt,الساحل الشمالي,شقق مدن راس الحكمة",
  openGraph: {
    title: "مدن راس الحكمة — Modon Ras El Hekma | وادي يم Wadi Yemm",
    description: "مدن Modon — ٤٤ كم ساحل، ١٧ منطقة، وادي يم أول إطلاق. فيلات وتاون هاوس وشاليهات. استثمار ٣٥ مليار دولار.",
    locale: "ar_EG", type: "website",
    images: ["https://www.modon.com/images/modoncorporatelibraries/banners/reh-landing-page.webp"],
  },
};
export default function L({children}:{children:React.ReactNode}){return(
  <html lang="ar" dir="rtl"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"/>
    {/* ══ Google Ads Tag ══ */}
    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX" /> */}
    {/* <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-XXXXXXX');`}} /> */}
  </head><body>{children}</body></html>
);}
