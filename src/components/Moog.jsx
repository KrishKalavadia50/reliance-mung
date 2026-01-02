import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../App.css";

function Moog() {

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
          labels: ["ખાતર જરૂરિયાત", "સિંચાઈ મહત્વ"],
          datasets: [{
            data: [55, 45],
            backgroundColor: ["#f57c00", "#ffd180"],
            borderWidth: 0
          }]
        },
        options: {
          cutout: "70%",
          plugins: {
            legend: { position: "bottom" }
          }
        }
      });
    }

    setLanguage("gu");

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const content = {
    gu: {
      heroTitle: "મગ બીજ – ખેડૂત માહિતી",
      heroDesc: "મગ ના ઉત્પાદન ની સંપૂર્ણ માહિતી",
      quickTitle: "ઝડપી માહિતી",
      td1: "પાક અવધિ", td1Val: "60–70 દિવસ",
      td2: "બીજ દર", td2Val: "15–20 કિગ્રા / હેક્ટર",
      td3: "યોગ્ય જમીન", td3Val: "રેતાળ ગોરાડુ, મધ્યમ કાળી",
      td4: "સિંચાઈ", td4Val: "3–4 વખત",
      td5: "મુખ્ય રોગ", td5Val: "પીળો મોઝેક વાયરસ",
      chartTitle: "ખાતર અને સિંચાઈ મહત્વ (%)",
      chartDesc: "ખાતર જરૂરિયાત : 55% | સિંચાઈ મહત્વ : 45%",
      fullTitle: "મગ ની ખેતી પદ્ધતિ",
      numberedSections: [
        { title: "જમીન અને આબોહવા", content: "ગુજરાતમાં મગનો પાક ખરીફ અને ઉનાળુ સીઝનમાં લેવામાં આવે છે. મગના પાકને રેતાળ ગોરાડુ અને મધ્યમ કાળી જમીન સૌથી વધુ માફક આવે છે. જમીનમાં સારા નિતારની વ્યવસ્થા હોવી જરૂરી છે. મગના પાકને ગરમ અને સૂકી આબોહવા અનુકૂળ આવે છે. વાવણી સમયે તાપમાન 25-30° સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે." },
        { title: "ખેતરની તૈયારી", content: "ખેતરને એક થી બે વાર હળથી ખેડીને જમીનને ભરભરી બનાવો. પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો. હેક્ટર દીઠ 5-10 ટન છાણિયું ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો." },
        { title: "વાવણી", content: "ખરીફ પાક: જૂન-જુલાઈ, ઉનાળુ પાક: ફેબ્રુઆરી-માર્ચ. બીજની માત્રા 15-20 કિગ્રા / હેક્ટર. અંતર: 30-45 × 10-15 સેમી. બીજને 3-4 સેમી ઊંડાઈએ વાવો. વાવણી પહેલાં રાઈઝોબિયમ કલ્ચર અને ફૂગનાશક દવાનો પટ આપો." },
        { title: "ખાતર અને પોષણ", content: "મગ કઠોળ પાક હોવાથી હવામાંથી નાઇટ્રોજન મેળવે છે. શરૂઆતમાં ખાતરની જરૂર રહે છે. હેક્ટર દીઠ 20 કિગ્રા નાઇટ્રોજન અને 40 કિગ્રા ફોસ્ફરસ આપવો." },
        { title: "સિંચાઈ", content: "મગને વધુ પાણીની જરૂર નથી. વાવણી પછી તરત હળવું પિયત. 10-15 દિવસના અંતરે પિયત. ફૂલ અને શીંગો સમયે પાણીની ખેંચ ન પડવા દો." },
        { title: "નીંદણ નિયંત્રણ", content: "પ્રથમ 2-3 અઠવાડિયા નીંદણ મુક્ત રાખો. હાથથી અથવા રાસાયણિક નીંદણનાશક ઉપયોગ કરો." },
        { title: "જીવાત અને રોગ નિયંત્રણ", content: "મોલોમશી, સફેદ માખી, પાન ખાનારી ઈયળનો ઉપદ્રવ થાય છે. પીળો મોઝેક વાયરસ મુખ્ય રોગ છે. યોગ્ય કીટનાશક અને ફૂગનાશક દવાઓનો ઉપયોગ કરો." },
        { title: "કાપણી", content: "70-80% શીંગો પીળી થાય ત્યારે કાપણી કરો. વિલંબ કરવાથી દાણા ખરી પડવાનો ભય. કાપણી બાદ 2-3 દિવસ સૂકવો અને થ્રેસરથી દાણા અલગ કરો." },
        { title: "અગત્ય ની નોંધ", content: "આ સામાન્ય મગની ખેતી પદ્ધતિ છે. વિસ્તાર મુજબ ફેરફાર થઈ શકે છે. વધુ માહિતી માટે કૃષિ સલાહકારનો સંપર્ક કરો." }
      ],
      footerTitle: "સંપર્ક / Inquiry"
    },

    hi: {
      heroTitle: "मूंग बीज – किसान जानकारी",
      heroDesc: "मग बनाने के बारे में पूरी जानकारी",
      quickTitle: "त्वरित जानकारी",
      td1: "फसल अवधि", td1Val: "60–70 दिन",
      td2: "बीज दर", td2Val: "15–20 कि.ग्रा / हेक्टेयर",
      td3: "उपयुक्त मिट्टी", td3Val: "रेतीली दोमट, मध्यम काली",
      td4: "सिंचाई", td4Val: "3–4 बार",
      td5: "मुख्य रोग", td5Val: "पीला मोज़ेक वायरस",
      chartTitle: "खाद और सिंचाई महत्व (%)",
      chartDesc: "खाद आवश्यकता : 55% | सिंचाई महत्व : 45%",
      fullTitle: "मूंग की खेती पद्धति",
      numberedSections: [
        { title: "भूमि और जलवायु", content: "गुजरात में मूंग की फसल खरीफ और गर्मी मौसम में ली जाती है। रेतीली दोमट और मध्यम काली मिट्टी मूंग के लिए सबसे उपयुक्त मानी जाती है। खेत में जल निकास की उचित व्यवस्था होनी चाहिए। मूंग को गर्म और शुष्क जलवायु पसंद है।" },
        { title: "खेत की तैयारी", content: "खेत को एक से दो बार हल चलाकर भुरभुरा बनाएं। पिछली फसल के अवशेष और खरपतवार हटा दें। प्रति हेक्टेयर 5–10 टन गोबर खाद या कम्पोस्ट मिलाएं।" },
        { title: "बुवाई", content: "खरीफ: जून–जुलाई, गर्मी: फरवरी–मार्च। बीज दर 15–20 कि.ग्रा / हेक्टेयर रखें। कतार दूरी 30–45 सेमी और पौध दूरी 10–15 सेमी रखें। बीज को 3–4 सेमी गहराई पर बोएं।" },
        { title: "खाद और पोषण", content: "मूंग एक दलहनी फसल है जो वायुमंडल से नाइट्रोजन लेती है। प्रारंभिक अवस्था में प्रति हेक्टेयर 20 कि.ग्रा नाइट्रोजन और 40 कि.ग्रा फॉस्फोरस देना लाभकारी रहता है।" },
        { title: "सिंचाई", content: "मूंग को अधिक पानी की आवश्यकता नहीं होती। बुवाई के तुरंत बाद हल्की सिंचाई करें। 10–15 दिन के अंतर पर सिंचाई करें। फूल और फलियों के समय पानी की कमी न होने दें।" },
        { title: "खरपतवार नियंत्रण", content: "पहले 2–3 सप्ताह तक खेत को खरपतवार मुक्त रखें। हाथ से निराई या उपयुक्त खरपतवारनाशक का प्रयोग करें।" },
        { title: "कीट और रोग नियंत्रण", content: "सफेद मक्खी, माहू और पत्ती खाने वाले कीट नुकसान पहुंचाते हैं। पीला मोज़ेक वायरस प्रमुख रोग है। अनुशंसित कीटनाशक और रोगनाशक का प्रयोग करें।" },
        { title: "कटाई", content: "जब 70–80 प्रतिशत फलियाँ पीली हो जाएं तब कटाई करें। देर करने पर दाने झड़ने की संभावना रहती है।" },
        { title: "महत्वपूर्ण सूचना", content: "यह मूंग की सामान्य खेती पद्धति है। क्षेत्र एवं मौसम के अनुसार बदलाव संभव है।" }
      ],
      footerTitle: "संपर्क / Inquiry"
    },

    en: {
      heroTitle: "Mung Bean – Farmer Information",
      heroDesc: "Complete information about the production of mugs",
      quickTitle: "Quick Information",
      td1: "Crop Duration", td1Val: "60–70 Days",
      td2: "Seed Rate", td2Val: "15–20 Kg / Hectare",
      td3: "Suitable Soil", td3Val: "Sandy loam, medium black soil",
      td4: "Irrigation", td4Val: "3–4 times",
      td5: "Major Disease", td5Val: "Yellow Mosaic Virus",
      chartTitle: "Fertilizer & Irrigation Importance (%)",
      chartDesc: "Fertilizer Requirement : 55% | Irrigation Importance : 45%",
      fullTitle: "Mung Bean Cultivation Method",
      numberedSections: [
        { title: "Soil and Climate", content: "In Gujarat, mung bean is cultivated during Kharif and summer seasons. Sandy loam and medium black soils with good drainage are ideal. Warm and dry climate is suitable for this crop." },
        { title: "Land Preparation", content: "Plough the field one to two times to make soil friable. Remove weeds and residues of previous crop. Apply 5–10 tons of farmyard manure or compost per hectare." },
        { title: "Sowing", content: "Kharif season: June–July, Summer season: February–March. Seed rate should be 15–20 kg per hectare. Maintain row spacing of 30–45 cm and plant spacing of 10–15 cm." },
        { title: "Fertilizer and Nutrition", content: "Mung bean is a leguminous crop and fixes nitrogen from the atmosphere. Apply 20 kg nitrogen and 40 kg phosphorus per hectare at initial stage." },
        { title: "Irrigation", content: "Mung requires less water. Provide light irrigation immediately after sowing. Irrigate at intervals of 10–15 days. Ensure adequate moisture during flowering and pod formation stages." },
        { title: "Weed Management", content: "Keep the field weed-free during first 2–3 weeks. Manual weeding or recommended herbicides can be used." },
        { title: "Pest and Disease Management", content: "Major pests include aphids, whiteflies, and leaf-eating caterpillars. Yellow Mosaic Virus is a major disease. Use recommended pesticides and disease management practices." },
        { title: "Harvesting", content: "Harvest the crop when 70–80% of pods turn yellow. Delayed harvesting may result in shattering losses." },
        { title: "Important Note", content: "This is a general mung bean cultivation guide. Practices may vary based on local conditions." }
      ],
      footerTitle: "Contact / Inquiry"
    }
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
      document.getElementById(`section${i + 1}`).innerHTML =
        `<strong>${i + 1}. ${sec.title}</strong><br>${sec.content}`;
    });

    document.getElementById("footerTitle").textContent = c.footerTitle;
  }

  return (
    <>
      <header>
        <img className="brand" src="/images/N-logo.png" alt="Moog Logo" width="200" />
        <div className="lang-container">
          <button className="lang-btn" onClick={() => setLanguage("gu")}>ગુજરાતી</button>
          <button className="lang-btn" onClick={() => setLanguage("hi")}>हिन्दी</button>
          <button className="lang-btn" onClick={() => setLanguage("en")}>English</button>
        </div>
      </header>

      <div className="container">
        <div className="hero">
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

        <div className="footer">
          <h3 id="footerTitle"></h3>
          <a href="tel:+919427268290" className="call">📞 Call</a>
          <a href="https://wa.me/9427268290" className="whatsapp">💬 WhatsApp</a>
        </div>
      </div>
    </>
  );
}

export default Moog;
