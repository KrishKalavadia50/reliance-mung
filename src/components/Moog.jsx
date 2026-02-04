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
      heroTitle: "મગ બીજ – ખેડૂત માહિતી",
      heroDesc: "મગ ના ઉત્પાદન ની સંપૂર્ણ માહિતી",
      quickTitle: "ઝડપી માહિતી",
      td1: "પાક અવધિ",
      td1Val: "60–70 દિવસ",
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
      fullTitle: "મગ ની ખેતી પદ્ધતિ",
      numberedSections: [
        {
          title: "જમીન અને આબોહવા",
          content:
            "ગુજરાતમાં મગનો પાક ખરીફ અને ઉનાળુ સીઝનમાં લેવામાં આવે છે. મગના પાકને રેતાળ ગોરાડુ અને મધ્યમ કાળી જમીન સૌથી વધુ માફક આવે છે. જમીનમાં સારા નિતારની વ્યવસ્થા હોવી જરૂરી છે. મગના પાકને ગરમ અને સૂકી આબોહવા અનુકૂળ આવે છે. વાવણી સમયે તાપમાન 25-30°સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે.",
        },
        {
          title: "ખેતરની તૈયારી",
          content:
            "ખેતરને એક થી બે વાર હળથી ખેડીને જમીનને ભરભરી બનાવો. પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો. જમીનની ફળદ્રુપતા વધારવા માટે હેક્ટર દીઠ 5-10 ટન છાણિયું ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો.",
        },
        {
          title: "વાવણી",
          content:
            "ખરીફ પાકજૂન-જુલાઈ મહિનામાં જ્યારે સારો વરસાદ થાય ત્યારે વાવણી કરવી જોઈએ. ઉનાળુ પાકફેબ્રુઆરી-માર્ચ મહિનામાં વાવણી કરી શકાય છે. બીજની માત્રા હેક્ટર દીઠ 15-20 કિલોગ્રામ રાખવી જોઈએ. બે હાર વચ્ચેનું અંતર 30-45 સેન્ટિમીટર અને બે છોડ વચ્ચેનું અંતર 10-15 સેન્ટિમીટર રાખો. બીજને 3–4 સેન્ટિમીટર ઊંડાઈએ વાવો. વાવણી પહેલાં બીજને રાઈઝોબિયમ કલ્ચર (Rhizobium culture) અને ફૂગનાશક દવાનો પટ આપો. આનાથી છોડમાં નાઇટ્રોજનનું સ્થાપન સારું થાય છે અને રોગોથી રક્ષણ મળે છે.",
        },
        {
          title: "ખાતર અને પોષણ",
          content:
            "મગનો પાક કઠોળ વર્ગનો હોવાથી તે હવામાંથી નાઇટ્રોજન મેળવી શકે છે. તેમ છતાં, શરૂઆતની વૃદ્ધિ માટે થોડા પ્રમાણમાં ખાતરની જરૂર પડે છે. જમીન પરીક્ષણના આધારે ખાતર આપવું વધુ સારું છે. સામાન્ય રીતે હેક્ટર દીઠ 20 કિલોગ્રામ નાઇટ્રોજન અને 40 કિલોગ્રામ ફોસ્ફરસ વાવણી વખતે પાયાના ખાતર તરીકે આપવું જોઈએ.",
        },
        {
          title: "સિંચાઈ",
          content:
            "મગના પાકને વધુ પાણીની જરૂર હોતી નથી. વાવણી પછી તરત જ હળવું પિયત આપો. ત્યારબાદ જમીનમાં ભેજની જરૂરિયાત મુજબ 10-15 દિવસના અંતરે પિયત આપતા રહો. ફૂલ આવવાના અને શીંગો બેસવાના સમયે પાણીની ખેંચ ન પડવા દો. ઉનાળુ પાકમાં પિયતની જરૂરિયાત વધુ રહે છે.",
        },
        {
          title: "નીંદણ નિયંત્રણ",
          content:
            "મગના પાકમાં વાવણીના 2-3 અઠવાડિયાં સુધી નીંદણ મુક્ત રાખવું જરૂરી છે. હાથથી અથવા આંતરખેડ કરીને નીંદણ દૂર કરી શકાય છે. રાસાયણિક નીંદણનાશક દવાઓનો ઉપયોગ પણ કરી શકાય છે.",
        },
        {
          title: "જીવાત અને રોગ નિયંત્રણ",
          content:
            "મગના પાકમાં મોલોમશી, સફેદ માખી, પાન ખાનારી ઇયળ અને શીંગો કોરી ખાનારી ઇયળ જેવી જીવાતોનો ઉપદ્રવ થઈ શકે છે. તેના નિયંત્રણ માટે યોગ્ય કીટનાશક દવાઓનો ઉપયોગ કરો. પીળો મોઝેક વાયરસ (Yellow Mosaic Virus) મગના પાકનો મુખ્ય રોગ છે. આ રોગ સફેદ માખી દ્વારા ફેલાય છે. તેના નિયંત્રણ માટે રોગ પ્રતિકારક જાતોની વાવણી કરવી અને સફેદ માખીનું નિયંત્રણ કરવું જરૂરી છે. પાનના ટપકાં અને ભૂકી છારો જેવા રોગો પણ મગના પાકને નુકસાન પહોંચાડી શકે છે. તેના નિયંત્રણ માટે યોગ્ય ફૂગનાશક દવાઓનો ઉપયોગ કરો.",
        },
        {
          title: "કાપણી",
          content:
            "જ્યારે 70-80% શીંગો પીળી થઈ જાય અને પાંદડા ખરી પડવા લાગે ત્યારે કાપણી કરવી જોઈએ. કાપણીમાં વિલંબ કરવાથી શીંગો તૂટી જવાનો અને દાણા ખરી પડવાનો ભય રહે છે. કાપણી કર્યા બાદ છોડને 2-3 દિવસ તડકામાં સૂકવો. ત્યારબાદ થ્રેસરની મદદથી દાણા છૂટા પાડો.",
        },
        {
          title: "અગત્ય ની નોંધ",
          content:
            "આ સામાન્ય મગની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા અને જમીનના પ્રકાર અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.",
        },
      ],
      title: "પાક અને વિવિધતાનું નામ",
      SubTitle:
        "ગુજરાત-4,5,6,7,8,10, સર્ટિફાઇડ, ફાઉન્ડેશન | મગ મહાલક્ષ્મી, મહારાજા, મહારાણી,  ટ્રૂથફુલ",
      CompanyName: "રિલાયન્સ સીડ (પ્રો.) કંપની",
      address:
        " સરનામું: ગીંગણી રોડ, તિરુપતિ બાયપાસ, શુભ હોન્ડા પાછળ, જામજોધપુર, જીલ્લો। જામનગર (ગુજરાત)",
      email: "ઈમેલ: rajujaviya269@gmail.com",
      footerTitle: "સંપર્ક / Inquiry",
      call: "કોલ કરો",
      whatsapp: "વોટ્સએપ",
    },

    hi: {
      heroTitle: "मूंग बीज – किसान जानकारी",
      heroDesc: "मग बनाने के बारे में पूरी जानकारी",
      quickTitle: "त्वरित जानकारी",
      td1: "फसल अवधि",
      td1Val: "60–70 दिन",
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
      fullTitle: "मूंग की खेती पद्धति",
      numberedSections: [
        {
          title: "मिट्टी और क्लाइमेट",
          content:
            "गुजरात में, मूंग खरीफ और गर्मी के मौसम में उगाया जाता है। रेतीली दोमट और मीडियम काली मिट्टी मूंग के लिए सबसे अच्छी होती है। मिट्टी में अच्छी ड्रेनेज होनी चाहिए। मूंग को गर्म और सूखा क्लाइमेट पसंद है। बुवाई के लिए 25-30°C और फसल की ग्रोथ के लिए 30-35°C टेम्परेचर सही रहता है।",
        },
        {
          title: "खेत की तैयारी",
          content:
            "मिट्टी को उपजाऊ बनाने के लिए खेत की एक या दो बार जुताई करें। पिछली फसल के बचे हुए हिस्से और खरपतवार हटा दें। मिट्टी की उपजाऊ क्षमता बढ़ाने के लिए, प्रति हेक्टेयर 5-10 टन गोबर या कम्पोस्ट डालें और जुताई करते समय इसे मिट्टी में मिला दें।",
        },
        {
          title: "बुवाई",
          content:
            "खरीफ की फसलें जून-जुलाई के महीनों में बोनी चाहिए जब अच्छी बारिश हो। गर्मी की फसलें फरवरी-मार्च के महीनों में बोई जा सकती हैं। बीज की मात्रा 15-20 रखनी चाहिए। किलोग्राम प्रति हेक्टेयर। दो लाइनों के बीच 30-45 सेंटीमीटर और दो पौधों के बीच 10-15 सेंटीमीटर की दूरी रखें। बीज 3–4 सेंटीमीटर की गहराई पर बोएं। बोने से पहले, बीजों को राइज़ोबियम कल्चर और फंगीसाइड से ट्रीट करें। इससे पौधे में नाइट्रोजन फिक्सेशन बेहतर होता है और यह बीमारियों से बचाता है।",
        },
        {
          title: "फर्टिलाइज़र और न्यूट्रिशन",
          content:
            "क्योंकि मूंग की फसल लेग्यूम फ़ैमिली से जुड़ी है, इसलिए यह हवा से नाइट्रोजन ले सकती है। हालांकि, शुरुआती ग्रोथ के लिए इसे थोड़ी मात्रा में फर्टिलाइज़र की ज़रूरत होती है। मिट्टी की जांच के आधार पर फर्टिलाइज़र देना बेहतर होता है। आम तौर पर, प्रति हेक्टेयर 20 किलोग्राम नाइट्रोजन और 40 किलोग्राम फ़ॉस्फ़ोरस इसे बुआई के समय बेसिक फर्टिलाइज़र के तौर पर देना चाहिए।",
        },
        {
          title: "इरिगेशन",
          content:
            "मूंग की फसल को ज़्यादा पानी की ज़रूरत नहीं होती है। बुआई के तुरंत बाद हल्की सिंचाई करें। फिर, मिट्टी की नमी की ज़रूरत के हिसाब से 10-15 दिनों के गैप पर सिंचाई करते रहें। फूल आने और फली लगने के समय पानी जमा हो जाता है। गर्मियों की फसलों में सिंचाई की ज़्यादा ज़रूरत होती है।",
        },
        {
          title: "खरपतवार कंट्रोल",
          content:
            "मूंगफली की फसल को बोने के बाद 2-3 हफ़्ते तक खरपतवार से मुक्त रखना चाहिए। खरपतवार को हाथ से या इंटर-कल्टीवेशन से हटाया जा सकता है। केमिकल हर्बिसाइड का भी इस्तेमाल किया जा सकता है।",
        },
        {
          title: "कीट और बीमारी कंट्रोल",
          content:
            "मूंगफली की फसल में मिलीबग, व्हाइटफ्लाई, पत्ती खाने वाले कैटरपिलर और फली में छेद करने वाले कैटरपिलर जैसे कीड़े लगने का खतरा रहता है। इसे कंट्रोल करने के लिए सही कीटनाशकों का इस्तेमाल करें। येलो मोज़ेक वायरस मूंग की फसल की एक बड़ी बीमारी है। यह बीमारी व्हाइटफ्लाई से फैलती है। इसे कंट्रोल करने के लिए, बीमारी रोकने वाली किस्में बोना और व्हाइटफ्लाई को कंट्रोल करना ज़रूरी है। लीफ स्पॉट और पाउडरी मिल्ड्यू जैसी बीमारियां भी मूंग की फसल को नुकसान पहुंचा सकती हैं। इसे कंट्रोल करने के लिए सही फंगीसाइड का इस्तेमाल करें।",
        },
        {
          title: "कटाई",
          content:
            "कटाई तब करनी चाहिए जब 70-80% फलियां पीली हो जाएं और पत्तियां गिरने लगें। कटाई में देरी करने से फलियां टूट सकती हैं और दाने झड़ सकते हैं। कटाई के बाद, पौधों को 2-3 दिन धूप में सुखाएं। फिर थ्रेशर की मदद से दानों को अलग कर लें।",
        },
        {
          title: "ज़रूरी नोट",
          content:
            "यह मूंग की खेती का एक आम तरीका है। आपके इलाके के मौसम और मिट्टी के हिसाब से इसमें थोड़ा बदलाव किया जा सकता है। ज़्यादा जानकारी के लिए अपने पास के एग्रीकल्चरल एडवाइजर या एग्रीकल्चरल यूनिवर्सिटी से संपर्क करना सही रहेगा।",
        },
      ],
      title: "फसल और विविधता का नाम",
      SubTitle:
        "गुजरात -4,5,6,7,8,10,सर्टिफाइड, फाउंडेशन | मूग महालक्ष्मी, महाराजा, महारानी, ट्रूथफुल",
      CompanyName: "रिलायंस सीड (प्रो.) कंपनी",
      address:
        " पता: गींगनी रोड, तिरुपति बाईपास, सुभ होंडा पीछे, जामजोधपुर, जिला। जामनगर (गुजरात)",
      email: "ईमेल: rajujaviya269@gmail.com",
      footerTitle: "संपर्क / Inquiry",
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप",
    },

    en: {
      heroTitle: "Mung Bean – Farmer Information",
      heroDesc: "Complete information about the production of mugs",
      quickTitle: "Quick Information",
      td1: "Crop Duration",
      td1Val: "60–70 Days",
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
      fullTitle: "Mung Bean Cultivation Method",
      numberedSections: [
        {
          title: "Soil and Climate",
          content:
            "In Gujarat, moong is grown in the Kharif and Summer seasons. Sandy loam and medium black soil are best suited for moong. The soil needs to have good drainage. Moong prefers a hot and dry climate. Temperatures of 25-30°C are ideal for sowing and 30-35°C for crop growth.",
        },
        {
          title: "Field preparation",
          content:
            "Plough the field once or twice to make the soil fertile. Remove the residues of the previous crop and weeds. To increase the fertility of the soil, apply 5-10 tonnes of cow dung or compost per hectare and mix it into the soil while ploughing.",
        },
        {
          title: "Sowing",
          content:
            "Kharif Crops should be sown in the months of June-July when there is good rainfall. Summer crops can be sown in the months of February-March. The seed rate should be kept at 15-20 kilograms per hectare. Keep the distance between two rows at 30-45 centimeters and the distance between two plants at 10-15 centimeters. Sow the seeds at a depth of 3–4 centimeters. Before sowing, treat the seeds with Rhizobium culture and fungicide. This improves nitrogen fixation in the plant and protects it from diseases.",
        },
        {
          title: "Fertilizer and Nutrition",
          content:
            "Since the moong crop belongs to the legume family, it can obtain nitrogen from the air. However, it requires a small amount of fertilizer for initial growth. It is better to provide fertilizer based on soil test. Generally, 20 kilograms of nitrogen and 40 kilograms of phosphorus per hectare It should be given as a basic fertilizer at the time of sowing.",
        },
        {
          title: "Irrigation",
          content:
            "Peanut crop does not require much water. Give light irrigation immediately after sowing. Then, keep irrigating at an interval of 10-15 days according to the moisture requirement of the soil. Do not let water stagnation occur during flowering and pod setting. The need for irrigation is more in summer crops.",
        },
        {
          title: "Weed control",
          content:
            "Peanut crop should be kept weed-free for 2-3 weeks after sowing. Weeds can be removed by hand or inter-cultivation. Chemical herbicides can also be used.",
        },
        {
          title: "Pest and disease control",
          content:
            "Peanut crop is prone to pests such as mealybugs, whiteflies, leaf-eating caterpillars and pod-boring caterpillars. It can be. Use appropriate pesticides to control it. Yellow Mosaic Virus is a major disease of mung bean crop. This disease is spread by whitefly. To control it, it is necessary to sow disease-resistant varieties and control whitefly. Diseases like leaf spot and powdery mildew can also damage the mung bean crop. Use appropriate fungicides to control it.",
        },
        {
          title: "Harvesting",
          content:
            "Harvesting should be done when 70-80% of the pods turn yellow and the leaves start falling off. Delaying harvesting can lead to pod breakage and grain loss. After harvesting, dry the plants in the sun for 2-3 days. Then separate the grains with the help of a thresher.",
        },
        {
          title: "Important Note",
          content:
            "This is a general mung bean cultivation method. It may be slightly modified according to the climate and soil type of your area. It is advisable to contact your nearest agricultural advisor or agricultural university for more information.",
        },
      ],
      title: "Crop and Variety Name",
      SubTitle:
        "Gujarat -4,5,6,7,8,10, Certified, Foundation | Moog Mahalakshmi, Maharaja, Maharani, Truthful",
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
          alt="Moog Logo"
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
        <div className="heroo">
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
            src="/images/2.png"
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

export default Moog;
