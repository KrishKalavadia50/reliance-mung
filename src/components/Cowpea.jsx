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
      heroTitle: "ચોળી (શાકભાજી) – ખેડૂત માહિતી",
      heroDesc: "ચોળી ના ઉત્પાદન ની સંપૂર્ણ ખેતી પદ્ધતિ",
      quickTitle: "ઝડપી માહિતી",
      td1: "પાક અવધિ",
      td1Val: "45–65 દિવસ",
      td2: "બીજ દર",
      td2Val: "8–10 કિગ્રા / હેક્ટર",
      td3: "યોગ્ય તાપમાન",
      td3Val: "20°C થી 35°C",
      td4: "સિંચાઈ (ઉનાળુ)",
      td4Val: "5–6 વખત",
      td5: "મુખ્ય રોગ",
      td5Val: "મોઝેક રોગ, પાન કથિરી",
      chartTitle: "ખાતર અને સિંચાઈ મહત્વ (%)",
      chartDesc: "ખાતર જરૂરિયાત : 60% | સિંચાઈ મહત્વ : 40%",
      fullTitle: "ચોળી ની ખેતી પદ્ધતિ (વિગતવાર)",
      numberedSections: [
        {
          title: "આબોહવા",
          content: "ચોળી ગરમ અને અર્ધ-શુષ્ક હવામાન વાળો પાક છે. અનુકૂળ તાપમાન 20°C થી 30°C સુધી હોય છે. ઉનાળામાં તાપમાન 40°C થી ઉપર જાય તો મોઝેક રોગ આવવાની શક્યતા રહે છે. ચોમાસામાં સતત વરસાદ અને વાદળછાયું વાતાવરણ હોય તો વેલા વધુ થાય છે, જેને ઉપરથી કાપી (Nipping) લેવા પડે છે.",
        },
        {
          title: "માટી અને ખેતરની તૈયારી",
          content: "ચોળી સારા નિતારવાળી રેતાળ, ગોરાડુ અને મધ્યમ કાળી અથવા થોડી ભારે જમીનમાં ઉગાડી શકાય છે. એક ઊંડી ખેડાણ પછી 2-3 વાર ખેડ મારી જમીન સમતલ કરવી. 10-12 ટન/હેક્ટર છાણિયું ખાતર ઉમેરવું.",
        },
        {
          title: "વાવણીનો સમય",
          content: "ખરીફ: જૂન-જુલાઈ. રવી: ઓક્ટોબર. ઉનાળુ: ફેબ્રુઆરી માસ દરમિયાન વાવણી કરી શકાય છે.",
        },
        {
          title: "બીજ દર અને માવજત",
          content: "1 હેક્ટર માટે 8-10 કિલો બીજ પૂરતા છે. બીજને થાયરમ (2 ગ્રામ) + કાર્બેન્ડાઝીમ (1 ગ્રામ) થી માવજત કરો. બીજને રાઈઝોબિયમ કલ્ચરથી 10 ગ્રામ/કિલો મુજબ પટ આપવો ઇચ્છનીય છે.",
        },
        {
          title: "ખાતર વ્યવસ્થાપન",
          content: "પ્રતિ હેક્ટર 15-20 કિલો નાઈટ્રોજન, 50-60 કિલો ફોસ્ફરસ અને 50-60 કિલો પોટાશ આપવું.",
        },
        {
          title: "સિંચાઈ",
          content: "ખરીફમાં વરસાદ ખેંચાય તો જ સિંચાઈ આપવી. ફૂલ આવવા, શીંગો બનવા અને દાણા ભરાવાના તબક્કા મહત્વના છે. ઉનાળાના પાકમાં 5-6 સિંચાઈની જરૂર પડે છે.",
        },
        {
          title: "નીંદણ નિયંત્રણ",
          content: "વાવણી પછી બીજ ઉગ્યા પહેલા પેન્ડીમેથાલિન @ 0.75 - 1 કિગ્રા / હેક્ટર મુજબ આપવું. વાવણી પછી 35 દિવસે હાથેથી નીંદામણ કરાવવું.",
        },
        {
          title: "જીવાત અને રોગ નિયંત્રણ",
          content: "ચુસિયા જીવાત માટે ડાયમેથોએટ 30 ઇસી @ 1.7 મિલી/લિટર. પોડ બોરર માટે એમામેક્ટીન બેન્ઝોએટ 5% એસજી @ 220 ગ્રામ/હેક્ટર અથવા ઇન્ડોક્સાર્બનો છંટકાવ કરવો. સફેદ માખી માટે ઇમિડાક્લોપ્રિડનો ઉપયોગ કરવો.",
        },
        {
          title: "કાપણી",
          content: "શાકભાજી તરીકે લીલી શીંગોની વીણી રવી અને ઉનાળામાં 45-50 દિવસ પછી અને ખરીફમાં 60 થી 65 દિવસ પછી કરી શકાય છે.",
        },
      ],
      title: "પાક અને વિવિધતાનું નામ",
      SubTitle: "ચોળી (COWPEA) - પુસા ફાલ્ગુની, રેશમ - પ્રમાણિત અને ફાઉન્ડેશન / ટ્રૂથફુલ",
      CompanyName: "રિલાયન્સ સીડ (પ્રો.) કંપની",
      address: "સરનામું: ગીંગણી રોડ, તિરુપતિ બાયપાસ, શુભ હોન્ડા પાછળ, જામજોધપુર, જીલ્લો: જામનગર (ગુજરાત)",
      email: "ઈમેલ: rajujaviya269@gmail.com",
      footerTitle: "સંપર્ક / Inquiry",
      call: "કોલ કરો",
      whatsapp: "વોટ્સએપ",
    },
    hi: {
      heroTitle: "चोरी (સબ્જી) – किसान जानकारी",
      heroDesc: "चोरी (Cowpea) उत्पादन की संपूर्ण जानकारी",
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
      td5Val: "मोज़ेक रोग, सफेद मक्खी",
      chartTitle: "खाद और सिंचाई महत्व (%)",
      chartDesc: "खाद आवश्यकता : 60% | सिंचाई महत्व : 40%",
      fullTitle: "चोरी की खेती पद्धति",
      numberedSections: [
        {
          title: "जलवायु",
          content: "चोरी एक गर्म और अर्ध-शुष्क जलवायु वाली फसल है। अनुकूल तापमान 20°C से 30°C है। 40°C से ऊपर तापमान होने पर मोज़ेक रोग की संभावना बढ़ जाती है। मानसून में अधिक बारिश से बेल बढ़ने पर 'निपिंग' (ऊपर से काटना) आवश्यक है।",
        },
        {
          title: "मिट्टी और खेत की तैयारी",
          content: "अच्छी जल निकासी वाली रेतीली, दोमट और मध्यम काली मिट्टी उपयुक्त है। गहरी जुताई के बाद 2-3 बार जुताई करें। 10-12 टन प्रति हेक्टेयर गोबर की खाद डालें।",
        },
        {
          title: "बुवाई का समय",
          content: "खरीफ: जून-जुलाई, रबी: अक्टूबर, और गर्मियों में फरवरी के दौरान बुवाई की जा सकती है।",
        },
        {
          title: "बीज दर और उपचार",
          content: "8-10 किलो बीज प्रति हेक्टेयर पर्याप्त है। बीज को थायरम (2 ग्राम) + कार्बेन्डाजिम (1 ग्राम) से उपचारित करें। राइजोबियम कल्चर (10 ग्राम/किग्रा) का उपयोग भी हितकारी है।",
        },
        {
          title: "उर्वरक (खाद)",
          content: "15-20 किलो नाइट्रोजन, 50-60 किलो फास्फोरस और 50-60 किलो पोटाश प्रति हेक्टेयर का उपयोग करें।",
        },
        {
          title: "सिंचाई",
          content: "खरीफ में आवश्यकतानुसार सिंचाई करें। फूल आने और फली बनने के समय नमी अनिवार्य है। ग्रीष्मकालीन फसल में 5-6 सिंचाई की आवश्यकता होती है।",
        },
        {
          title: "खरपतवार नियंत्रण",
          content: "बुवाई के बाद अंकुरण से पहले पेंडीमेथालिन (0.75-1 किग्रा/हेक्टेयर) का छिड़काव करें। 35 दिन बाद हाथ से निराई करें।",
        },
        {
          title: "कीट और रोग नियंत्रण",
          content: "रस चूसक कीटों के लिए डायमेथोएट 30 ईसी का छिड़काव करें। फली छेदक के लिए इमामेक्टिन बेंजोएट या इंडोक्साकार्ब का प्रयोग करें। मोज़ेक के लिए सफेद मक्खी का नियंत्रण करें।",
        },
        {
          title: "कटाई",
          content: "सब्जी के लिए हरी फलियों की तुड़ाई रबी/गर्मी में 45-50 दिन और खरीफ में 60-65 दिन बाद की जा सकती है।",
        },
      ],
      title: "फसल और किस्म का नाम",
      SubTitle: "चोरी (COWPEA) - पुसा फाल्गुनी, रेशम - प्रमाणित एवं फाउंडेशन",
      CompanyName: "रिलायंस सीड (प्रो.) कंपनी",
      address: "पता: गींगनी रोड, तिरुपति बाईपास, शुभ होंडा के पीछे, जामजोधपुर, जिला: जामनगर (गुजरात)",
      email: "ईमेल: rajujaviya269@gmail.com",
      footerTitle: "संपर्क / Inquiry",
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप",
    },
    en: {
      heroTitle: "Cowpea (Vegetable) – Farmer Info",
      heroDesc: "Complete Cultivation Guide for Cowpea",
      quickTitle: "Quick Info",
      td1: "Crop Duration",
      td1Val: "45–65 Days",
      td2: "Seed Rate",
      td2Val: "8–10 Kg / Hectare",
      td3: "Ideal Temp",
      td3Val: "20°C to 35°C",
      td4: "Irrigation (Summer)",
      td4Val: "5–6 Times",
      td5: "Major Disease",
      td5Val: "Mosaic Virus, Aphids",
      chartTitle: "Fertilizer & Irrigation Importance (%)",
      chartDesc: "Fertilizer Req : 60% | Irrigation Importance : 40%",
      fullTitle: "Cowpea Cultivation Method",
      numberedSections: [
        {
          title: "Climate",
          content: "Cowpea is a warm and semi-arid climate crop. Ideal temperature ranges from 20°C to 30°C. Temperatures above 40°C increase the risk of Mosaic virus. In monsoon, excessive vine growth requires 'Nipping'.",
        },
        {
          title: "Soil and Field Preparation",
          content: "Suitable for well-drained sandy loam and medium black soils. After one deep ploughing, perform 2-3 secondary tillings. Add 10-12 tons/hectare of farmyard manure.",
        },
        {
          title: "Sowing Time",
          content: "Kharif: June-July; Rabi: October; Summer: February.",
        },
        {
          title: "Seed Rate and Treatment",
          content: "8-10 kg seed per hectare. Treat seeds with Thiram (2g) + Carbendazim (1g). Use Rhizobium culture at 10g/kg of seed for better nitrogen fixation.",
        },
        {
          title: "Fertilizer Requirement",
          content: "Apply 15-20 kg Nitrogen, 50-60 kg Phosphorus, and 50-60 kg Potash per hectare.",
        },
        {
          title: "Irrigation",
          content: "Irrigate Kharif crops only if rainfall is delayed. Critical stages: flowering and pod filling. Summer crops require 5-6 irrigations.",
        },
        {
          title: "Weed Control",
          content: "Apply Pendimethalin @ 0.75-1 kg/ha as pre-emergence. Conduct hand weeding 35 days after sowing.",
        },
        {
          title: "Pest and Disease Control",
          content: "For sucking pests, use Dimethoate 30 EC. For pod borers, use Emamectin Benzoate 5% SG or Indoxacarb. Control Whitefly for Mosaic prevention.",
        },
        {
          title: "Harvesting",
          content: "Green pods for vegetables can be harvested in 45-50 days (Rabi/Summer) and 60-65 days (Kharif).",
        },
      ],
      title: "Crop and Variety Name",
      SubTitle: "COWPEA - Pusa Falguni, Resham - Certified & Foundation",
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