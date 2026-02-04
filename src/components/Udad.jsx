import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../App.css";

function Udad() {
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
          datasets: [
            {
              data: [55, 45],
              backgroundColor: ["#f57c00", "#ffd180"],
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
      heroTitle: "અડદ બીજ – ખેડૂત માહિતી",
      heroDesc: "અડદ ના ઉત્પાદન ની સંપૂર્ણ માહિતી",
      quickTitle: "ઝડપી માહિતી",
      td1: "પાક અવધિ",
      td1Val: "70–80 દિવસ",
      td2: "બીજ દર",
      td2Val: "15–20 કિગ્રા / હેક્ટર",
      td3: "યોગ્ય જમીન",
      td3Val: "રેતાળ ગોરાડુ, મધ્યમ કાળી",
      td4: "સિંચાઈ",
      td4Val: "3–4 વખત",
      td5: "મુખ્ય રોગ",
      td5Val: "પીળો મોઝેક વાયરસ",
      chartTitle: "ખાતર અને સિંચાઈ મહત્વ (%)",
      chartDesc: "ખાતર જરૂરિયાત : 55% | સિંચાઈ મહત્વ : 45%",
      fullTitle: "અડદ ની ખેતી પદ્ધતિ",
      numberedSections: [
        {
          title: "જમીન અને આબોહવા",
          content:
            "અડદ પાકને સારી નિકાસવાળી મધ્યમ કાળી જમીન વધુ અનુકૂળ છે. જમીનમાં કાર્બનિક તત્વ વધારે હોય તો પાક વધારે સારું થાય છે. અડદ પાક માટે હલકીથી મધ્યમ કાળી જમીન યોગ્ય છે. વાવણી સમયે તાપમાન 25–30 ડિગ્રી સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30–35 ડિગ્રી સેલ્સિયસ યોગ્ય ગણાય છે.",
        },
        {
          title: "ખેતરની તૈયારી",
          content:
            "જમીનને 2 થી 3 વાર હળ ચલાવી ભુરભુરી બનાવવી. ખેતરમાં પાણી ભરાવ ન થાય તેવી વ્યવસ્થા કરવી. જમીનમાં 6 થી 10 ટન પ્રતિ હેક્ટર સડેલું છાણ ખાતર અથવા કંપોસ્ટ ખાતર ભેળવવું. ઉનાળુ પાક માટે છેલ્લી હળ સાથે પાટા ચલાવી જમીન સમતલ ક",
        },
        {
          title: "વાવણી",
          content:
            "ખરીફ: જૂન–જુલાઈમાં સારો વરસાદ થયા પછી વાવણી કરવી. ઉનાળુ: ફેબ્રુઆરી–માર્ચમાં વાવણી કરવી. બીજનો દર: હેક્ટર દીઠ 15–20 કિ.ગ્રા. વાવણી અંતર: હરોળથી હરોળ 30–45 સેમી અને છોડથી છોડ 10–15 સેમી. વાવણી ઊંડાઈ 4–5 સેમી રાખવી. વાવણી પહેલાં બીજને રાઈઝોબિયમ કલ્ચર (Rhizobium culture) અને થાયરમ (Thiram) અથવા કાર્બેન્ડેઝિમ (Carbendazim)થી ઉપચાર કરવો. રાઈઝોબિયમ ઉપચાર નાઈટ્રોજન સ્થિરિકરણમાં મદદરૂપ થાય છે.",
        },
        {
          title: "ખાતર અને પોષણ",
          content:
            "અડદ પાક દાળ પાક હોવાથી નાઈટ્રોજન ઓછી માત્રામાં જરૂરી હોય છે. સામાન્ય રીતે હેક્ટર દીઠ 20 કિ.ગ્રા નાઈટ્રોજન અને 40 કિ.ગ્રા ફોસ્ફરસ પૂરતું રહે છે. જમીન પરીક્ષણના આધારે ખાતરનો ઉપયોગ કરવો.",
        },
        {
          title: "સિંચાઈ",
          content:
            "ખરીફ પાકમાં સામાન્ય રીતે સિંચાઈની જરૂર પડતી નથી. ઉનાળુ પાકમાં જરૂર મુજબ 2–3 સિંચાઈ કરવી. ફૂલ આવવાની અને ફળી બંધાવાની અવસ્થાએ પાણી આપવું મહત્વપૂર્ણ છે.",
        },
        {
          title: "નીંદણ નિયંત્રણ",
          content:
            "શરૂઆતના 20–25 દિવસ પાકને નીંદણથી મુક્ત રાખવો. હાથથી નીંદણ કાઢવું અથવા જરૂર મુજબ નીંદણનાશક દવાઓનો ઉપયોગ કરવો.",
        },
        {
          title: "જીવાત અને રોગ નિયંત્રણ",
          content:
            "પીળો મોઝેક રોગ (Yellow Mosaic Virus) અડદનો મુખ્ય રોગ છે. રોગપ્રતિકારક જાતો વાવવી. સફેદ માખીનો નિયંત્રણ કરવા યોગ્ય કીટનાશક દવાનો ઉપયોગ કરવો. પાંદડાં ખાનાર ઇયળ માટે યોગ્ય દવાનો છંટકાવ કરવો.",
        },
        {
          title: "કાપણી",
          content:
            "જ્યારે 70–80% શીંગો પાકી જાય અને પીળી થવા લાગે ત્યારે કાપણી કરવી. કાપણી પછી પાકને સારી રીતે સૂકવી ગોઠવવો. મોડું કાપણી કરવાથી શીંગ ફાટવાની શક્યતા રહે છે.",
        },
        {
          title: "અગત્ય ની નોંધ",
          content:
            "આ સામાન્ય મગની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા અને જમીનના પ્રકાર અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.",
        },
      ],
      title: "પાક અને વિવિધતાનું નામ",
      SubTitle:
        "યુરીડ ટી-9, જીએયુ-1, 4, ગુજરાત-2 પ્રમાણિત અને ફાઉન્ડેશન કાલાસોના ખરો / ટ્રૂથફુલ",
      CompanyName: "રિલાયન્સ સીડ (પ્રો.) કંપની",
      address:
        " સરનામું: ગીંગણી રોડ, તિરુપતિ બાયપાસ, શુભ હોન્ડા પાછળ, જામજોધપુર, જીલ્લો। જામનગર (ગુજરાત)",
      email: "ઈમેલ: rajujaviya269@gmail.com",
      footerTitle: "સંપર્ક / Inquiry",
      call: "કોલ કરો",
      whatsapp: "વોટ્સએપ",
    },

    hi: {
      heroTitle: "उड़द बीज – किसान जानकारी",
      heroDesc: "उड़द बनाने के बारे में पूरी जानकारी",
      quickTitle: "त्वरित जानकारी",
      td1: "फसल अवधि",
      td1Val: "70–80 दिन",
      td2: "बीज दर",
      td2Val: "15–20 कि.ग्रा / हेक्टेयर",
      td3: "उपयुक्त मिट्टी",
      td3Val: "रेतीली दोमट, मध्यम काली",
      td4: "सिंचाई",
      td4Val: "3–4 बार",
      td5: "मुख्य रोग",
      td5Val: "पीला मोज़ेक वायरस",
      chartTitle: "खाद और सिंचाई महत्व (%)",
      chartDesc: "खाद आवश्यकता : 55% | सिंचाई महत्व : 45%",
      fullTitle: "उड़द की खेती पद्धति",
      numberedSections: [
        {
          title: "मिट्टी और क्लाइमेट",
          content:
            "उड़द की खेती के लिए गर्म और आर्द्र जलवायु उपयुक्त होती है। अंकुरण के लिए 25–30°से. तथा वृद्धि के लिए 25–35°से. तापमान आदर्श है। 60–75 से.मी. वर्षा वाले क्षेत्रों में उड़द की खेती अधिक सफल होती है। उड़द के लिए अच्छी जल निकास वाली दोमट या हल्की काली मिट्टी उपयुक्त होती है। मिट्टी का पीएच मान 6.5 से 7.8 के बीच होना चाहिए। भारी और लवणीय मिट्टी उड़द की खेती के लिए उपयुक्त नहीं है।",
        },
        {
          title: "खेत की तैयारी",
          content:
            "ग्रीष्मकाल (अप्रैल–मई) में खेत की 2–3 बार जुताई कर मिट्टी को भुरभुरा बनाएं। प्रत्येक जुताई के बाद खेत को समतल करें। अंतिम जुताई के समय 5–10 टन सड़ी गोबर खाद या कम्पोस्ट प्रति हेक्टेयर मिलाएं।",
        },
        {
          title: "बुवाई",
          content:
            "बुवाई से पहले बीज का फफूंदनाशक (कार्बेन्डाजिम या थायरम 2–3 ग्राम/किग्रा बीज) से उपचार करें। राइजोबियम और फॉस्फेट सोल्यूबिलाइजिंग बैक्टीरिया कल्चर से उपचार लाभकारी है। खरीफ बुवाई: जून–जुलाई (मानसून के साथ)। रबी/गर्मी बुवाई: फरवरी–मार्च। कतार से कतार दूरी 30–45 सेमी और पौधे से पौधे की दूरी 10–15 सेमी रखें। बीज दर 15–20 किग्रा/हेक्टेयर।",
        },
        {
          title: "फर्टिलाइज़र और न्यूट्रिशन",
          content:
            "मिट्टी परीक्षण के आधार पर उर्वरकों का प्रयोग करें। सामान्यतः 20 किग्रा नाइट्रोजन, 40 किग्रा फास्फोरस और 20 किग्रा पोटाश प्रति हेक्टेयर पर्याप्त होता है। बुवाई के समय उर्वरकों को ड्रिल विधि से दें। जिंक की कमी वाले क्षेत्रों में 25 किग्रा जिंक सल्फेट प्रति हेक्टेयर डालें। जैविक खाद का प्रयोग लाभकारी है।",
        },
        {
          title: "इरिगेशन",
          content:
            "खरीफ फसल में सामान्यतः सिंचाई की आवश्यकता नहीं होती। ग्रीष्मकालीन फसल में आवश्यकता अनुसार सिंचाई करें। फूल आने और फली बनने की अवस्था में सिंचाई आवश्यक है। खेत में जलभराव से बचें।",
        },
        {
          title: "खरपतवार कंट्रोल",
          content:
            "बुवाई के 3 दिन बाद पेंडीमिथालिन 0.75 लीटर/हेक्टेयर का छिड़काव करें। 20–25 दिन बाद एक निराई-गुड़ाई करें। आवश्यकता पड़ने पर 15 और 30 दिन पर दो बार निराई करें।",
        },
        {
          title: "कीट और बीमारी कंट्रोल",
          content:
            "पीला मोज़ेक वायरस से बचाव के लिए प्रतिरोधी किस्में बोएं। सफेद मक्खी नियंत्रण हेतु इमिडाक्लोप्रिड या थायमेथोक्साम का छिड़काव करें। फली छेदक कीट के लिए इंडोक्साकार्ब या स्पिनोसैड का प्रयोग करें। पत्तियों के रोग हेतु फफूंदनाशक का छिड़काव करें।",
        },
        {
          title: "कटाई",
          content:
            "जब अधिकांश फलियां पीली पड़ने लगें तब कटाई करें। देर से कटाई करने पर फलियां फट सकती हैं। कटाई के बाद अच्छी तरह सुखाकर भंडारण करें। औसत उपज 8–10 क्विंटल प्रति हेक्टेयर होती है।",
        },
        {
          title: "ज़रूरी नोट",
          content:
            "यह मूंग की खेती का एक आम तरीका है। आपके इलाके के मौसम और मिट्टी के हिसाब से इसमें थोड़ा बदलाव किया जा सकता है। ज़्यादा जानकारी के लिए अपने पास के एग्रीकल्चरल एडवाइजर या एग्रीकल्चरल यूनिवर्सिटी से संपर्क करना सही रहेगा।",
        },
      ],
      title: "फसल और विविधता का नाम",
      SubTitle:
        "यूरिड टी-9, जीएयू-1, 4, गुजरात-2 प्रमाणित एवं फाउंडेशन कालासोना सत्य / ट्रूथफुल",
      CompanyName: "रिलायंस सीड (प्रो.) कंपनी",
      address:
        " पता: गींगनी रोड, तिरुपति बाईपास, सुभ होंडा पीछे, जामजोधपुर, जिला। जामनगर (गुजरात)",
      email: "ईमेल: rajujaviya269@gmail.com",
      footerTitle: "संपर्क / Inquiry",
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप",
    },

    en: {
      heroTitle: "Urad Bean – Farmer Information",
      heroDesc: "Complete information about the production of Urad",
      quickTitle: "Quick Information",
      td1: "Crop Duration",
      td1Val: "70–80 Days",
      td2: "Seed Rate",
      td2Val: "15–20 Kg / Hectare",
      td3: "Suitable Soil",
      td3Val: "Sandy loam, medium black soil",
      td4: "Irrigation",
      td4Val: "3–4 times",
      td5: "Major Disease",
      td5Val: "Yellow Mosaic Virus",
      chartTitle: "Fertilizer & Irrigation Importance (%)",
      chartDesc: "Fertilizer Requirement : 55% | Irrigation Importance : 45%",
      fullTitle: "Urad Bean Cultivation Method",
      numberedSections: [
        {
          title: "Soil and Climate",
          content:
            "A warm and humid climate is suitable for urad bean cultivation. The ideal temperature for germination is 25–30°C, and for growth 25–35°C. Areas receiving 60–75 cm of annual rainfall are most suitable. Well-drained loamy to light black soil is ideal. Soil pH should be between 6.5 and 7.8. Heavy and saline soils are not suitable for cultivation.",
        },
        {
          title: "Field preparation",
          content:
            "During summer (April–May), plough the field 2–3 times to make the soil friable. Level the field after each ploughing. Apply 5–10 tons of well-decomposed farmyard manure or compost per hectare during the last ploughing.",
        },
        {
          title: "Sowing",
          content:
            "Treat seeds before sowing with fungicides (Carbendazim or Thiram @ 2–3 g per kg of seed). Treat seeds with Rhizobium and Phosphate Solubilizing Bacteria (PSB) culture for better yield. Kharif sowing: June–July (with the onset of monsoon). Summer sowing: February–March. Row spacing: 30–45 cm; plant spacing: 10–15 cm. Seed rate: 15–20 kg per hectare. Sowing depth: 4–5 cm.",
        },
        {
          title: "Fertilizer and Nutrition",
          content:
            "Apply fertilizers based on soil test results. Generally, 20 kg nitrogen, 40 kg phosphorus, and 20 kg potash per hectare are sufficient. Apply fertilizers at the time of sowing using the drill method. In zinc-deficient soils, apply 25 kg zinc sulphate per hectare. The use of organic manure is beneficial.",
        },
        {
          title: "Irrigation",
          content:
            "The Kharif crop usually does not require irrigation. The summer crop requires irrigation as needed. Irrigation at flowering and pod formation stages is critical. Avoid waterlogging in the field.",
        },
        {
          title: "Weed control",
          content:
            "Spray Pendimethalin @ 0.75 liter per hectare within 3 days after sowing (pre-emergence). Carry out one hand weeding or intercultivation after 20–25 days. If necessary, repeat weeding at 15 and 30 days.",
        },
        {
          title: "Pest and disease control",
          content:
            "Yellow Mosaic Virus is the major disease of urad bean. Use resistant varieties to control the disease. Control whitefly using Imidacloprid or Thiamethoxam. For pod borer control, spray Indoxacarb or Spinosad. Use appropriate fungicides for leaf diseases.",
        },
        {
          title: "Harvesting",
          content:
            "Harvest the crop when 70–80% of the pods turn yellow and mature. Delayed harvesting may cause pod shattering. • Dry the harvested crop properly before storage. The average yield is 8–10 quintals per hectare.",
        },
        {
          title: "Important Note",
          content:
            "This is a general mung bean cultivation method. It may be slightly modified according to the climate and soil type of your area. It is advisable to contact your nearest agricultural advisor or agricultural university for more information.",
        },
      ],
      title: "Crop and Variety Name",
      SubTitle:
        "URID T-9, GAU-1, 4, Gujarat-2 Certified & Foundation KALASONA Pure / Truthful",
      CompanyName: "RELIANCE SEED (PRO.) COMPANY",
      address:
        " ADDRESS: GINGANI ROAD, TIRUPATI BYPASS, BEHIND SUBH HONDA. JAMAJODHPUR, DIST. JAMNAGAR (GUJARAT)",
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
      document.getElementById(`section${i + 1}`).innerHTML = `<strong>${
        i + 1
      }. ${sec.title}</strong><br>${sec.content}`;
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
        <img
          className="brand"
          src="/images/N-logo.png"
          alt="Urad Logo"
          width="200"
        />
        <div className="lang-container">
          <button className="lang-btn" onClick={() => setLanguage("gu")}>
            ગુજરાતી
          </button>
          <button className="lang-btn" onClick={() => setLanguage("hi")}>
            हिन्दी
          </button>
          <button className="lang-btn" onClick={() => setLanguage("en")}>
            English
          </button>
        </div>
      </header>

      <div className="container">
        <div className="herooo">
          <h1 id="heroTitle"></h1>
          <p id="heroDesc"></p>
        </div>

        <div className="card">
          <h2 id="quickTitle"></h2>
          <table>
            <tbody>
              <tr>
                <td id="td1"></td>
                <td id="td1Val"></td>
              </tr>
              <tr>
                <td id="td2"></td>
                <td id="td2Val"></td>
              </tr>
              <tr>
                <td id="td3"></td>
                <td id="td3Val"></td>
              </tr>
              <tr>
                <td id="td4"></td>
                <td id="td4Val"></td>
              </tr>
              <tr>
                <td id="td5"></td>
                <td id="td5Val"></td>
              </tr>
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
            src="/images/Kalasona.png"
            alt="Til Crop"
            style={{ display: "block", margin: "auto", maxWidth: "100%" }}
          />
        </div>

        <div className="footer">
          <div className="Company">
            <h2 id="CompanyName">RELIANCE SEED (PRO.) COMPANY</h2>
            <p id="address">
              ADDRESS: GINGANI ROAD TIRUPATI BYPASS, BEHIND SUBH HONDA.
              JAMAJODHPUR, DIST. JAMNAGAR (GUJARAT)
            </p>
            <p id="email">Email: rajujaviya269@gmail.com</p>
          </div>
          <h3 id="footerTitle"></h3>
          <a href="tel:+919427268290" id="call" className="call">
            Call
          </a>
          <a href="https://wa.me/9427268290" id="whatsapp" className="whatsapp">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default Udad;
