import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../App.css";

function Cowpea() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("inputChart");

    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["ખાતર જરૂરિયાત (Fertilizer)", "સિંચાઈ મહત્વ (Irrigation)"],
          datasets: [
            {
              // Based on image data: high fertilizer variety and specific 5-6 irrigation cycles
              data: [60, 40],
              backgroundColor: ["#4CAF50", "#81C784"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "70%",
          plugins: {
            legend: { position: "bottom" },
          },
        },
      });
    }

    setLanguage("gu");

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [setLanguage]);

  const content = {
  gu: {
    heroTitle: "ચોળી – ખેતી પદ્ધતિ",
    heroDesc: "ચોળી પાક માટે સંપૂર્ણ અને વિગતવાર ખેતી માર્ગદર્શન",
    quickTitle: "ઝડપી માહિતી",
    td1: "પાક અવધિ",
    td1Val: "45–65 દિવસ",
    td2: "બીજ દર",
    td2Val: "8–10 કિગ્રા / હેક્ટર",
    td3: "યોગ્ય તાપમાન",
    td3Val: "20°C થી 35°C",
    td4: "સિંચાઈ (ઉનાળો)",
    td4Val: "5–6 વખત",
    td5: "મુખ્ય રોગ",
    td5Val: "પીળો મોઝેક રોગ",
    chartTitle: "ખાતર અને સિંચાઈ મહત્વ (%)",
    chartDesc: "ખાતર જરૂરિયાત : 60% | સિંચાઈ મહત્વ : 40%",
    fullTitle: "ચોળી (ચાઉલી) ની ખેતી પદ્ધતિ (વિગતવાર)",
    numberedSections: [
      {
        title: "આબોહવા",
        content: "ચોળી ગરમ અને અર્ધ-શુષ્ક હવામાનવાળી પાક છે. ચોળી માટે અનુકૂળ તાપમાન 20°C થી 30°C સુધી હોય છે. ચોળીના ઉત્પાદન માટે દિવસનું તાપમાન 25°C થી 35°C અનુકૂળ આવે છે. ઉનાળામાં દિવસનું તાપમાન 40°C થી ઉપર જાય તો મોઝેક રોગ આવવાની શક્યતા રહે છે. (ચોમાસુ ઋતુમાં સતત વરસાદ અને વાદળછાયું હવામાન હોવાથી રોગની શક્યતા રહે છે, તેથી ઊંચા ઉપજ માટે કાળજી રાખવી પડે.)",
      },
      {
        title: "માટી",
        content: "ચોળી સારા નિકાલવાળી રેતાળ, ગોરાડુ અને મધ્યમ કાળી અથવા થોડીઘણી ભારે જમીનમાં સફળતાપૂર્વક ઉગાડી શકાય છે.",
      },
      {
        title: "ખેતરની તૈયારી",
        content: "ખેડ કરી જમીન પલટાવો. 2–3 વાર હલ મારી જમીન સમતલ કરો. 10–12 ટન/હેક્ટર ગોબર ખાતર ઉમેરો.",
      },
      {
        title: "વાવણી સમય",
        content: "ખરીફ ઋતુમાં જૂન–જુલાઈ અને રવિ ઋતુમાં ઑક્ટોબર તેમજ ઉનાળામાં ફેબ્રુઆરી–માર્ચ સમયગાળામાં વાવણી કરી શકાય છે.",
      },
      {
        title: "બીજ દર અને માવજત",
        content: "1 હેક્ટર વાવણી માટે 8–10 કિલો બીજ પૂરતું છે. બીજને થાયરમ (2 ગ્રામ) + કાર્બેન્ડાઝીમ (1 ગ્રામ) થી માવજત કરો. બીજને રાઇઝોબિયમ કલ્ચરથી 10 ગ્રામ/કિલો બીજની દરે માવજત કરવી લાભદાયક છે.",
      },
      {
        title: "ખાતર",
        content: "પ્રતિ હેક્ટર 15–20 કિલોગ્રામ નાઈટ્રોજન, 40–50 કિલોગ્રામ ફોસ્ફરસ અને 40–50 કિલોગ્રામ પોટાશ આપવું.",
      },
      {
        title: "સિંચાઈ",
        content: "ખરીફ ઋતુમાં સામાન્ય રીતે સિંચાઈની જરૂર નથી, પરંતુ લાંબા સમય સુધી વરસાદ ન પડે તો ફૂલ આવતાં, શિંગો બનતાં અને દાણા ભરાવાની અવસ્થાએ સિંચાઈ આપવી જોઈએ. ઉનાળાના પાકમાં 5–6 સિંચાઈની જરૂર પડે છે.",
      },
      {
        title: "નિંદામણ",
        content: "વાવણી પછી બીજ ઉગ્યા પહેલાં પેન્ડીમેથાલિન @ 0.75–1 કિગ્રા/હેક્ટર પ્રમાણે આપવું. વાવણી પછી 35 દિવસ પછી હાથે નિંદામણ કરવી.",
      },
      {
        title: "જીવાત/રોગ",
        content: "રસચુસક જીવાત નિયંત્રણ માટે ડાયમેથોએટ 30 ઇસી @ 1.7 મી.લી./લિટર પાણીમાં છંટકાવ કરો. ફળછેડક માટે ઇમામેક્ટિન બેન્ઝોયેટ 5 એસજી @ 220 ગ્રામ/હેક્ટર અથવા ઈન્ડોક્સાકાર્બ 14.5 એસસી @ 333 મી.લી./હેક્ટરની દરે છંટકાવ કરો. મોઝેક રોગ માટે સફેદ માખી નિયંત્રણ માટે થાઈમેથોક્સામ 25 ડબ્લ્યુજી @ 0.2 ગ્રામ/લિટર પાણીમાં છંટકાવ કરો અને 10 દિવસ પછી ફરી છંટકાવ કરો.",
      },
      {
        title: "કાપણી",
        content: "કાચી શીંગો તરીકે કાપણી લીલી શીંગો બન્યા પછી ખરીફ ઋતુમાં 45–50 દિવસ પછી અને રવિ ઋતુમાં 60 થી 65 દિવસ પછી કરી શકાય છે.",
      },
      {
        title: "અગત્ય ની નોંધ",
        content: "આ પાકની ખેતી પદ્ધતિ તમારા વિસ્તારની આબોહવા, જમીનના પ્રકાર અને ઋતુ અનુસાર થોડી ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર અથવા કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.",
      },
    ],
    title: "પાક અને વિવિધતાનું નામ",
    SubTitle: "ચોળી (COWPEA) - પુસા ફાલ્ગુની, રેશમ - સર્ટિફાઇડ, ફાઉન્ડેશન | ટ્રૂથફુલ",
    CompanyName: "રિલાયન્સ સીડ (પ્રો.) કંપની",
    address: "સરનામું: ગીંગણી રોડ, તિરુપતિ બાયપાસ, શુભ હોન્ડા પાછળ, જામજોધપુર, જીલ્લો: જામનગર (ગુજરાત)",
    email: "ઈમેલ: rajujaviya269@gmail.com",
    footerTitle: "સંપર્ક / Inquiry",
    call: "કોલ કરો",
    whatsapp: "વોટ્સએપ",
  },

  hi: {
    heroTitle: "लोबिया – खेती विधि",
    heroDesc: "लोबिया फसल के लिए संपूर्ण और विस्तृत खेती मार्गदर्शन",
    quickTitle: "त्वरित जानकारी",
    td1: "फसल अवधि",
    td1Val: "45–65 दिन",
    td2: "बीज दर",
    td2Val: "8–10 किग्रा / हेक्टेयर",
    td3: "उपयुक्त तापमान",
    td3Val: "20°C से 35°C",
    td4: "सिंचाई (गर्मी)",
    td4Val: "5–6 बार",
    td5: "मुख्य रोग",
    td5Val: "पीला मोज़ेक रोग",
    chartTitle: "खाद और सिंचाई महत्व (%)",
    chartDesc: "खाद आवश्यकता : 60% | सिंचाई महत्व : 40%",
    fullTitle: "लोबिया की खेती विधि (विस्तार से)",
    numberedSections: [
      {
        title: "जलवायु",
        content: "लोबिया एक गर्म और अर्ध-शुष्क जलवायु वाली फसल है। लोबिया के लिए उत्तम तापमान 20°C से 30°C है। उत्पादन के लिए दिन का तापमान 25°C से 35°C अनुकूल रहता है। गर्मियों में जब तापमान 40°C से ऊपर होता है, तो मोज़ेक रोग होने की संभावना रहती है। (मानसून में लगातार बारिश और बादल छाए रहने से पौधों में रोग बढ़ सकते हैं।)",
      },
      {
        title: "मिट्टी",
        content: "लोबिया अच्छी जल निकासी वाली रेतीली, दोमट और मध्यम काली या थोड़ी भारी मिट्टी में सफलतापूर्वक उगाई जा सकती है।",
      },
      {
        title: "खेत की तैयारी",
        content: "एक गहरी जुताई के बाद 2–3 बार जुताई कर मिट्टी को समतल करें। 10–12 टन/हेक्टेयर गोबर की खाद डालें।",
      },
      {
        title: "बुवाई का समय",
        content: "खरीफ मौसम में जून–जुलाई, रबी मौसम में अक्टूबर और गर्मियों में फरवरी–मार्च में बुवाई की जा सकती है।",
      },
      {
        title: "बीज दर और उपचार",
        content: "एक हेक्टेयर के लिए 8–10 किलोग्राम बीज पर्याप्त होता है। बीज को थायरम (2 ग्राम) + कार्बेन्डाजिम (1 ग्राम) से उपचारित करें। बीज को राइजोबियम कल्चर से 10 ग्राम/किलोग्राम बीज की दर से उपचार करना लाभकारी है।",
      },
      {
        title: "उर्वरक",
        content: "प्रति हेक्टेयर 15–20 किलोग्राम नाइट्रोजन, 40–50 किलोग्राम फॉस्फोरस और 40–50 किलोग्राम पोटाश डालें।",
      },
      {
        title: "सिंचाई",
        content: "खरीफ मौसम में सामान्यतः सिंचाई की आवश्यकता नहीं होती, लेकिन यदि लंबे समय तक वर्षा न हो तो फूल आने, फल बनने और दाना भरने की अवस्था में सिंचाई करनी चाहिए। गर्मी की फसल में 5–6 सिंचाइयों की आवश्यकता होती है।",
      },
      {
        title: "खरपतवार नियंत्रण",
        content: "बुवाई के बाद अंकुरण से पहले पेंडिमेथालिन @ 0.75–1 किग्रा/हेक्टेयर की दर से प्रयोग करें। बुवाई के 35 दिन बाद हाथ से निराई करें।",
      },
      {
        title: "कीट एवं रोग",
        content: "रसचूसक कीटों के नियंत्रण हेतु डायमेथोएट 30 ईसी @ 1.7 मि.ली./लीटर पानी में छिड़काव करें। फलछेदक कीट के लिए इमामेक्टिन बेंजोएट 5 एसजी @ 220 ग्राम/हेक्टेयर या इंडोक्साकार्ब 14.5 एससी @ 333 मि.ली./हेक्टेयर की दर से छिड़काव करें। मोज़ेक रोग के लिए सफेद मक्खी नियंत्रण हेतु थायमेथोक्साम 25 डब्ल्यूजी @ 0.2 ग्राम/लीटर पानी में छिड़काव करें और 10 दिन बाद पुनः छिड़काव करें।",
      },
      {
        title: "कटाई",
        content: "हरी फलियों की कटाई खरीफ मौसम में लगभग 45–50 दिन बाद तथा रबी मौसम में 60–65 दिन बाद की जा सकती है।",
      },
      {
        title: "अत्यंत महत्वपूर्ण नोट",
        content: "इस फसल की खेती विधि क्षेत्र की जलवायु, मिट्टी के प्रकार और मौसम के अनुसार थोड़ी भिन्न हो सकती है। अधिक जानकारी के लिए कृषि विशेषज्ञ या कृषि विश्वविद्यालय से संपर्क करें।",
      },
    ],
    title: "फसल का नाम",
    SubTitle: "चोरी (COWPEA) - पुसा फाल्गुनी, रेशम - सर्टिफाइड, फाउंडेशन | ट्रूथफुल",
    CompanyName: "रिलायंस सीड (प्रो.) कंपनी",
    address: "पता: गींगनी रोड, तिरुपति बाईपास, शुभ होंडा के पीछे, जामजोधपुर, जिला: जामनगर (गुजरात)",
    email: "ईमेल: rajujaviya269@gmail.com",
    footerTitle: "संपर्क / Inquiry",
    call: "कॉल करें",
    whatsapp: "व्हाट्सएप",
  },

  en: {
    heroTitle: "Cowpea – Cultivation Practices",
    heroDesc: "Complete and detailed cultivation guide for Cowpea",
    quickTitle: "Quick Information",
    td1: "Crop Duration",
    td1Val: "45–65 Days",
    td2: "Seed Rate",
    td2Val: "8–10 Kg / Hectare",
    td3: "Ideal Temperature",
    td3Val: "20°C to 35°C",
    td4: "Irrigation (Summer)",
    td4Val: "5–6 Times",
    td5: "Major Disease",
    td5Val: "Yellow Mosaic Disease",
    chartTitle: "Fertilizer & Irrigation Importance (%)",
    chartDesc: "Fertilizer Requirement : 60% | Irrigation Importance : 40%",
    fullTitle: "Cowpea Cultivation Practices (Detailed)",
    numberedSections: [
      {
        title: "Climate",
        content: "Cowpea is a warm-season crop and grows well in warm and semi-arid climates. The optimum temperature for cowpea growth is between 20°C and 30°C. For better yield, the day temperature should be between 25°C and 35°C. When the temperature exceeds 40°C during summer, the chances of mosaic disease increase. (Continuous rainfall and cloudy weather during the monsoon may increase disease incidence.)",
      },
      {
        title: "Soil",
        content: "Cowpea can be successfully grown in well-drained sandy loam, loamy, and medium black or slightly heavy soils.",
      },
      {
        title: "Field Preparation",
        content: "Plough the field deeply once and then 2–3 times to make the soil fine and level. Apply 10–12 tonnes per hectare of well-decomposed farmyard manure.",
      },
      {
        title: "Sowing Time",
        content: "Sowing can be done during June–July in the Kharif season, October in the Rabi season, and February–March during summer.",
      },
      {
        title: "Seed Rate and Treatment",
        content: "A seed rate of 8–10 kg per hectare is sufficient. Treat seeds with Thiram (2 g) + Carbendazim (1 g). Seed treatment with Rhizobium culture at 10 g per kg of seed is beneficial.",
      },
      {
        title: "Fertilizer",
        content: "Apply 15–20 kg Nitrogen, 40–50 kg Phosphorus, and 40–50 kg Potash per hectare.",
      },
      {
        title: "Irrigation",
        content: "In the Kharif season, irrigation is generally not required. However, if there is no rainfall for a long period, irrigation should be given at flowering, pod formation, and grain filling stages. In summer crops, 5–6 irrigations are required.",
      },
      {
        title: "Weed Management",
        content: "Apply Pendimethalin @ 0.75–1 kg/ha after sowing and before seed germination. Hand weeding should be done 35 days after sowing.",
      },
      {
        title: "Pest and Disease Management",
        content: "For sucking pests, spray Dimethoate 30 EC @ 1.7 ml per liter of water. For pod borer control, spray Emamectin Benzoate 5 SG @ 220 g/ha or Indoxacarb 14.5 SC @ 333 ml/ha. For mosaic disease, control whitefly by spraying Thiamethoxam 25 WG @ 0.2 g per liter of water and repeat the spray after 10 days.",
      },
      {
        title: "Harvesting",
        content: "Green pods can be harvested about 45–50 days after sowing in the Kharif season and 60–65 days after sowing in the Rabi season.",
      },
      {
        title: "Important Note",
        content: "Cultivation practices may vary slightly depending on local climate, soil type, and season. For detailed guidance, consult local agricultural experts or agricultural universities.",
      },
    ],
    title: "Crop Name",
    SubTitle: "Cowpea - Pusa Falguni, Resham - Certified & Foundation | Truthful",
    CompanyName: "RELIANCE SEED (PRO.) COMPANY",
    address: "ADDRESS: GINGANI ROAD, TIRUPATI BYPASS, BEHIND SUBH HONDA, JAMAJODHPUR, DIST. JAMNAGAR (GUJARAT)",
    email: "Email: rajujaviya269@gmail.com",
    footerTitle: "Contact / Inquiry",
    call: "Call",
    whatsapp: "WhatsApp",
  },
};


  function setLanguage(lang) {
    const c = content[lang];
    document.title = c.heroTitle;
    document.getElementById("heroTitle").textContent = c.heroTitle;
    document.getElementById("heroDesc").textContent = c.heroDesc;
    document.getElementById("quickTitle").textContent = c.quickTitle;
    document.getElementById("td1").textContent = c.td1;
    document.getElementById("td1Val").textContent = c.td1Val;
    document.getElementById("td2").textContent = c.td2;
    document.getElementById("td2Val").textContent = c.td2Val;
    document.getElementById("td3").textContent = c.td3;
    document.getElementById("td3Val").textContent = c.td3Val;
    document.getElementById("td4").textContent = c.td4;
    document.getElementById("td4Val").textContent = c.td4Val;
    document.getElementById("td5").textContent = c.td5;
    document.getElementById("td5Val").textContent = c.td5Val;
    document.getElementById("chartTitle").textContent = c.chartTitle;
    document.getElementById("chartDesc").textContent = c.chartDesc;
    document.getElementById("fullTitle").textContent = c.fullTitle;

    c.numberedSections.forEach((sec, i) => {
      const el = document.getElementById(`section${i + 1}`);
      if (el) {
        el.innerHTML = `<strong>${i + 1}. ${sec.title}</strong><br>${sec.content}`;
      }
    });

    document.getElementById("title").textContent = c.title;
    document.getElementById("SubTitle").textContent = c.SubTitle;
    document.getElementById("CompanyName").textContent = c.CompanyName;
    document.getElementById("address").textContent = c.address;
    document.getElementById("email").textContent = c.email;
    document.getElementById("footerTitle").textContent = c.footerTitle;
    document.getElementById("call").textContent = c.call;
    document.getElementById("whatsapp").textContent = c.whatsapp;
  }

  return (
    <>
      <header>
        <img className="brand" src="/images/N-logo.png" alt="Cowpea Logo" width="200" />
        <div className="lang-container">
          <button className="lang-btn" onClick={() => setLanguage("gu")}>ગુજરાતી</button>
          <button className="lang-btn" onClick={() => setLanguage("hi")}>हिन्दी</button>
          <button className="lang-btn" onClick={() => setLanguage("en")}>English</button>
        </div>
      </header>

      <div className="container">
        <div className="heroooo">
          <h1 id="heroTitle"></h1>
          <p id="heroDesc"></p>
        </div>

        <div className="card">
          <h2 id="quickTitle"></h2>
          <table>
            <tbody>
              <tr><td id="td1"></td><td id="td1Val"></td></tr>
              <tr><td id="td2"></td><td id="td2Val"></td></tr>
              <tr><td id="td3"></td><td id="td3Val"></td></tr>
              <tr><td id="td4"></td><td id="td4Val"></td></tr>
              <tr><td id="td5"></td><td id="td5Val"></td></tr>
            </tbody>
          </table>
        </div>

        <div className="card chartBox">
          <h2 id="chartTitle"></h2>
          <canvas id="inputChart"></canvas>
          <p id="chartDesc" style={{ marginTop: "10px" }}></p>
        </div>

        <div className="card">
          <h2 id="fullTitle"></h2>
          {[...Array(9)].map((_, i) => (
            <div key={i} id={`section${i + 1}`} className="section"></div>
          ))}
        </div>

        <div className="Crop">
          <h2 id="title" style={{ color: "#e65100", textAlign: "center" }}></h2>
          <h4 id="SubTitle" style={{ textAlign: "center" }}></h4>
          <img
            src="/images/chori.png" 
            alt="Cowpea Variety"
            style={{ display: "block", margin: "auto", maxWidth: "100%" }}
          />
        </div>

        <div className="footer">
          <div className="Company">
            <h2 id="CompanyName"></h2>
            <p id="address"></p>
            <p id="email"></p>
          </div>
          <h3 id="footerTitle"></h3>
          <a href="tel:+919427268290" id="call" className="call">Call</a>
          <a href="https://wa.me/9427268290" id="whatsapp" className="whatsapp">WhatsApp</a>
        </div>
      </div>
    </>
  );
}

export default Cowpea;