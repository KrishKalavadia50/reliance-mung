import React, { useEffect, useRef } from "react";
import Chart, { SubTitle, Title } from "chart.js/auto";
import "../App.css";

function Til() {
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
  }, []);

  const content = {
    gu: {
      heroTitle: "તલ ની ખેતી પધ્ધતિ",
      heroDesc: "તલ ના ઉત્પાદન ની સંપૂર્ણ માહિતી",
      quickTitle: "ઝડપી માહિતી",
      td1: "પાક અવધિ",
      td1Val: "90–115 દિવસ",
      td2: "બીજ દર",
      td2Val: "2–3 કિગ્રા / હેક્ટર (ખરીફ), 5–6 કિગ્રા / હેક્ટર (ઉનાળુ)",
      td3: "યોગ્ય જમીન",
      td3Val: "રેતાળ ગોરાડુ, ગોરાડુ અને મધ્યમ કાળી જમીન",
      td4: "સિંચાઈ",
      td4Val: "3–4 વખત (ફૂલ આવતી વખતે અને ડોડા બેસે ત્યારે મહત્વપૂર્ણ)",
      td5: "મુખ્ય રોગ",
      td5Val: "પીળો મોઝેક વાયરસ, પાનના ટપકાં, મૂળનો સડો",
      chartTitle: "ખાતર અને સિંચાઈ મહત્વ (%)",
      chartDesc: "ખાતર જરૂરિયાત : 55% | સિંચાઈ મહત્વ : 45%",
      fullTitle: "તલ ની ખેતી પદ્ધતિ",
      numberedSections: [
        {
          title: "જમીન અને આબોહવા",
          content:
            "તલના પાકને ગોરાડુ, રેતાળ ગોરાડુ અને મધ્યમ કાળી જમીન સૌથી વધુ અનુકૂળ આવે છે. સારા નિતારવાળી જમીન તલના પાક માટે ખૂબ જ જરૂરી છે, કારણ કે પાણી ભરાઈ રહેવાથી છોડને નુકસાન થાય છે. તલના પાકને ગરમ અને સૂકી આબોહવા માફક આવે છે. વાવણી સમયે તાપમાન 25-30° સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે.",
        },
        {
          title: "ખેતરની તૈયારી",
          content:
            "ખેતરને 2-3 વાર હળથી ખેડીને જમીનને ભરભરી બનાવો. પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો. જમીનની ફળદ્રુપતા વધારવા માટે હેક્ટર દીઠ 5-10 ટન છાણિયું ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો. ઉનાળુ તલ માટે ખેતરમાં ભેજ જાળવી રાખવા માટે વાવણી પહેલાં હળવું પિયત આપવું ફાયદાકારક છે.",
        },
        {
          title: "વાવણી",
          content:
            "ખરીફ પાક:જૂન-જુલાઈ મહિનામાં જ્યારે સારો વરસાદ થાય ત્યારે વાવણી કરવી જોઈએ. રવિ પાક-ઓક્ટોબર-નવેમ્બર મહિનામાં જ્યારે ઠંડીની શરૂઆત થાય ત્યારે વાવણી કરવામાં આવે છે. ઉનાળુ પાક:ફેબ્રુઆરી-માર્ચ મહિનામાં વાવણી કરી શકાય છે. બીજની માત્રા હેક્ટર દીઠ 5-6 (ઉનાળુ), 2-2.5 (ચોમાસું) કિલો ગ્રામ રાખવી જોઈએ. તલના બીજ ખૂબ જ નાના હોવાથી ઓછી માત્રામાં જરૂર પડે છે. બે હાર વચ્ચેનું અંતર 45-60 સેન્ટિમીટર અને બે છોડ વચ્ચેનું અંતર 15-20 સેન્ટિમીટર રાખો. બીજને 1-2 સેન્ટિમીટર ઊંડાઈએ વાવો. વધારે ઊંડાઈએ વાવવાથી ઉગવામાં તકલીફ થઈ શકે છે. વાવણી પહેલાં બીજને થાયરમ (Thiram) અથવા કાર્બેન્ડાઝિમ (Carbendazim) જેવી ફૂગનાશક દવાનો પટ આપો. બીજને રેતી અથવા રાખ સાથે ભેળવીને વાવવાથી સમાન અંતરે વાવણી કરી શકાય છે.",
        },
        {
          title: "ખાતર અને પોષણ",
          content:
            "જમીન પરીક્ષણના આધારે ખાતર આપવું વધુ સારું છે. સામાન્ય રીતે હેક્ટર દીઠ40-60 કિલોગ્રામ નાઇટ્રોજન, 20-30 કિલોગ્રામ ફોસ્ફરસ અને 20 કિલોગ્રામ પોટાશની જરૂર પડે છે. નાઇટ્રોજનનો અડધો ભાગ અને ફોસ્ફરસ તથા પોટાશનો પૂરો ભાગ વાવણી વખતે પાયાના ખાતર તરીકે આપો. બાકીને નાઇટ્રોજન બે હપ્તામાં, પ્રથમ પિયત વખતે અને ફૂલ આવવાની શરૂઆત થાય ત્યારે આપો.",
        },
        {
          title: "સિંચાઈ",
          content:
            "તલના પાકને ઓછી સિંચાઈની જરૂર પડે છે, પરંતુ કટોકટીના સમયે પાણીની ખેંચ ન પડવી જોઈએ. વાવણી પછી તરત જ હળવું પિયત આપો. ત્યારબાદ જમીનમાં ભેજની જરૂરિયાત મુજબ 15-20 દિવસના અંતરે પિયત આપતા રહો. ફૂલ આવવાના અને ડોડવા બેસવાના સમયે પિયતની ખેંચ ન પડવા દો. ખરીફ પાકને સામાન્ય રીતે વરસાદ આધારિત ખેતી કરવામાં આવે છે, પરંતુ જો વરસાદ ખેંચાય તો પૂરક સિંચાઈ આપવી જરૂરી છે. ઉનાળુ પાકમાં 8-10 દિવસના અંતરે નિયમિત પિયત આપવું પડે છે.",
        },
        {
          title: "નીંદણ નિયંત્રણ",
          content:
            "તલના પાકમાં શરૂઆતના 30-40 દિવસ સુધી નીંદણ મુક્ત રાખવું ખૂબ જ જરૂરી છે, કારણ કે આ સમયગાળા દરમિયાન નીંદણ પાકની વૃદ્ધિને અવરોધે છે. હાથથી અથવા આંતરખેડ કરીને નીંદણ દૂર કરી શકાય છે. રાસાયણિક નીંદણનાશક દવાઓનો ઉપયોગ પણ કરી શકાય છે. દવા વાવણી પહેલાં જમીનમાં ભેળવી દેવાથી નીંદણનું નિયંત્રણ કરી શકાય છે.",
        },
        {
          title: "જીવાત અને રોગ નિયંત્રણ",
          content:
            "તલના પાકમાં મોલોમશી, સફેદ માખી, પાન ખાનારી ઇયળ અને ડોડવા કોરી ખાનારી ઇયળ જેવી જીવાતોનો ઉપદ્રવ થઈ શકે છે. તેના નિયંત્રણ માટે યોગ્ય કીટનાશક દવાઓનો ઉપયોગ કરો. પાનના ટપકાં, ભૂકી છારો અને મૂળનો સડો જેવા રોગો પણ તલના પાકને નુકસાન પહોંચાડી શકે છે. રોગના નિયંત્રણ માટે રોગ પ્રતિકારક જાતોની વાવણી કરવી અને યોગ્ય ફૂગનાશક દવાઓનો ઉપયોગ કરવો જરૂરી છે.",
        },
        {
          title: "કાપણી",
          content:
            "જ્યારે પાકના પાંદડા પીળા થવા લાગે અને ડોડવા પીળાશ પડતા લીલા રંગના થાય ત્યારે કાપણી કરવી જોઈએ. વધુ પડતી પાકવા દેવાથી ડોડવા ફાટી જાય છે અને દાણા ખરી પડે છે. છોડને જમીન નજીકથી કાપી લો અને નાના ઢગલા બનાવીને 2-3 દિવસ તડકામાં સૂકવો. ત્યારબાદ બળદ અથવા ટ્રેક્ટરથી ચલાવવામાં આવતા થ્રેસરની મદદથી દાણા છૂટા પાડો.",
        },
        {
          title: "અગત્ય ની નોંધ",
          content:
            "આ સામાન્ય તલની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા અને જમીનના પ્રકાર અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.",
        },
      ],
      title: "પાક અને વિવિધતાનું નામ",
      SubTitle: "ગુજરાત-૧,૨,૩,૪,૫,૬, ૧૦, સર્ટિફાઇડ, ફાઉન્ડેશન | તલ અંબર, રુદ્રાક્ષ, અલ્ટો, માણેક, ટ્રૂથફુલ",
      CompanyName: "રિલાયન્સ સીડ (પ્રો.) કંપની",
      address:" સરનામું: ગીંગણી રોડ, તિરુપતિ બાયપાસ, શુભ હોન્ડા પાછળ, જામજોધપુર, જીલ્લો। જામનગર (ગુજરાત)",
      email: "ઈમેલ: rajujaviya269@gmail.com",
      footerTitle: "સંપર્ક / Inquiry",
      call: "કોલ કરો",
      whatsapp: "વોટ્સએપ",
    },

    hi: {
      heroTitle: "तिल की खेती की विधि",
      heroDesc: "तिल की खेती के बारे में पूरी जानकारी",
      quickTitle: "त्वरित जानकारी",
      td1: "फसल अवधि",
      td1Val: "90–115 दिन",
      td2: "बीज दर",
      td2Val: "2–3 कि.ग्रा / हेक्टेयर (खरीफ), 5–6 कि.ग्रा / हेक्टेयर (गर्मी)",
      td3: "उपयुक्त मिट्टी",
      td3Val: "रेतीली दोमट, मध्यम काली मिट्टी",
      td4: "सिंचाई",
      td4Val: "3–4 बार (फूल आने और फलियां बनने के समय महत्वपूर्ण)",
      td5: "मुख्य रोग",
      td5Val: "पीला मोज़ेक वायरस, पाननाटपकां, मूलनो सडो",
      chartTitle: "खाद और सिंचाई महत्व (%)",
      chartDesc: "खाद आवश्यकता : 55% | सिंचाई महत्व : 45%",
      fullTitle: "मूंग की खेती पद्धति",
      numberedSections: [
        {
          title: "भूमि और जलवायु",
          content:
            "तिल की फसलें दोमट, रेतीली दोमट और मीडियम काली मिट्टी के लिए सबसे अच्छी होती हैं। तिल की फसल के लिए अच्छी पानी निकलने वाली मिट्टी ज़रूरी है, क्योंकि पानी भरने से पौधे को नुकसान होता है। तिल की फसलें गर्म और सूखे मौसम को पसंद करती हैं। बुआई के समय 25-30°C और फसल के बढ़ने के लिए 30-35°C का तापमान सही माना जाता है।",
        },
        {
          title: "खेत की तैयारी",
          content:
            "मिट्टी को उपजाऊ बनाने के लिए खेत की 2-3 बार जुताई करें। पिछली फसल के बचे हुए हिस्से और खरपतवार हटा दें। मिट्टी की उपजाऊ शक्ति बढ़ाने के लिए, प्रति हेक्टेयर 5-10 टन गोबर की खाद या कम्पोस्ट डालें और जुताई करते समय मिट्टी में मिला दें। गर्मियों में तिल की खेती के लिए, खेत में नमी बनाए रखने के लिए बुवाई से पहले हल्की सिंचाई करना फायदेमंद होता है।",
        },
        {
          title: "बुवाई",
          content:
            "खरीफ की फसल: बुवाई जून-जुलाई के महीने में करनी चाहिए जब अच्छी बारिश हो। रबी की फसल- बुवाई अक्टूबर-नवंबर के महीने में की जाती है जब ठंड शुरू होती है। गर्मी की फसल: बुवाई फरवरी-मार्च के महीने में की जा सकती है। बीज की मात्रा 5-6 (गर्मी), 2-2.5 (मानसून) kg प्रति हेक्टेयर रखनी चाहिए। तिल के बीज बहुत छोटे होते हैं, इसलिए कम मात्रा की ज़रूरत होती है। दो लाइनों के बीच की दूरी 45-60 सेंटीमीटर और दो पौधों के बीच की दूरी 15-20 सेंटीमीटर रखें। बीजों को 1-2 सेंटीमीटर की गहराई पर बोएं। ज़्यादा गहराई पर बोने से अंकुरण में दिक्कत आ सकती है। बुवाई से पहले बीजों पर थीरम या कार्बेन्डाजिम जैसे फफूंदनाशक का लेप लगा दें। बीजों को रेत या राख में मिलाकर बोने से बराबर दूरी पर बुवाई की जा सकती है।",
        },
        {
          title: "खाद और पोषण",
          content:
            "मिट्टी की जांच के आधार पर खाद डालना बेहतर है। आम तौर पर, हर हेक्टेयर में 40-60 kg नाइट्रोजन, 20-30 kg फॉस्फोरस और 20 kg पोटाश की ज़रूरत होती है। नाइट्रोजन की आधी मात्रा और फॉस्फोरस और पोटाश की पूरी मात्रा बुआई के समय बेसल खाद के तौर पर डालें। बाकी नाइट्रोजन दो हिस्सों में डालें, पहले सिंचाई के समय और फिर फूल आने पर।",
        },
        {
          title: "सिंचाई",
          content:
            "तिल की फसल को कम सिंचाई की ज़रूरत होती है, लेकिन मुश्किल समय में पानी की कमी नहीं होनी चाहिए। बुवाई के तुरंत बाद हल्की सिंचाई करें। फिर मिट्टी की नमी की ज़रूरत के हिसाब से 15-20 दिन के गैप पर सिंचाई करते रहें। फूल आने और कल्ले निकलने के समय सिंचाई की कमी न होने दें। खरीफ की फसलें आम तौर पर बारिश पर निर्भर होती हैं, लेकिन अगर बारिश की कमी हो, तो एक्स्ट्रा सिंचाई ज़रूरी है। गर्मियों की फसलों को 8-10 दिन के गैप पर रेगुलर सिंचाई की ज़रूरत होती है।",
        },
        {
          title: "खरपतवार नियंत्रण",
          content:
            "तिल की फसल को पहले 30-40 दिनों तक खरपतवार से मुक्त रखना बहुत ज़रूरी है, क्योंकि इस समय खरपतवार फसल की ग्रोथ में रुकावट डालते हैं। खरपतवार को हाथ से या इंटर-कल्टीवेशन से हटाया जा सकता है। केमिकल हर्बिसाइड का भी इस्तेमाल किया जा सकता है। बुवाई से पहले मिट्टी में दवा मिलाकर खरपतवार को कंट्रोल किया जा सकता है।",
        },
        {
          title: "कीट और रोग नियंत्रण",
          content:
            "तिल की फसल पर मिलीबग, व्हाइटफ्लाई, लीफहॉपर और लीफमाइनर जैसे कीड़े लग सकते हैं। इन्हें कंट्रोल करने के लिए सही पेस्टिसाइड का इस्तेमाल करें। लीफ स्पॉट, पाउडरी मिल्ड्यू और रूट रॉट जैसी बीमारियां भी तिल की फसल को नुकसान पहुंचा सकती हैं। बीमारी को कंट्रोल करने के लिए, बीमारी रोकने वाली किस्में बोना और सही फंगिसाइड का इस्तेमाल करना ज़रूरी है।",
        },
        {
          title: "कटाई",
          content:
            "फसल की कटाई तब करनी चाहिए जब फसल की पत्तियां पीली पड़ने लगें और फलियां पीली-हरी हो जाएं। ज़्यादा पकने से फलियां फट जाती हैं और बीज गिर जाते हैं। पौधों को ज़मीन के पास से काटकर छोटे-छोटे ढेर बनाकर 2-3 दिन धूप में सुखाएं। फिर बैल या ट्रैक्टर से चलने वाले थ्रेसर की मदद से बीज अलग कर लें।",
        },
        {
          title: "महत्वपूर्ण सूचना",
          content:
            "यह तिल की खेती का एक आम तरीका है। यह आपके इलाके के मौसम और मिट्टी के टाइप के हिसाब से थोड़ा अलग हो सकता है। ज़्यादा जानकारी के लिए, अपने सबसे पास के एग्रीकल्चरल एडवाइज़र या एग्रीकल्चरल यूनिवर्सिटी से संपर्क करना सही रहेगा।",
        },
      ],
      title: "फसल और विविधता का नाम",
      SubTitle: "गुजरात-1,2,3,4,5,6, 10,सर्टिफाइड, फाउंडेशन | तिल अंबर, रुद्राक्ष, अल्टो, मानेक, ट्रूथफुल",
      CompanyName: "रिलायंस सीड (प्रो.) कंपनी",
      address:" पता: गींगनी रोड, तिरुपति बाईपास, सुभ होंडा पीछे, जामजोधपुर, जिला। जामनगर (गुजरात)",
      email: "ईमेल: rajujaviya269@gmail.com",
      footerTitle: "संपर्क / Inquiry",
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप",
    },

    en: {
      heroTitle: "Sesame cultivation method",
      heroDesc: "Complete information about the production of sesame",
      quickTitle: "Quick Information",
      td1: "Crop Duration",
      td1Val: "90–115 Days",
      td2: "Seed Rate",
      td2Val: "2–3 Kg / Hectare (Kharif), 5–6 Kg / Hectare (Summer)",
      td3: "Suitable Soil",
      td3Val: "Sandy loam, medium black soil",
      td4: "Irrigation",
      td4Val:
        "3-4 times (especially important during flowering and pod formation)",
      td5: "Major Disease",
      td5Val: "Yellow mosaic virus, Pananatpakan, Root rot",
      chartTitle: "Fertilizer & Irrigation Importance (%)",
      chartDesc: "Fertilizer Requirement : 55% | Irrigation Importance : 45%",
      fullTitle: "Mung Bean Cultivation Method",
      numberedSections: [
        {
          title: "Soil and Climate",
          content:
            "Sesame crops thrive best in loamy, sandy loam, and medium black soils. Well-drained soil is essential for sesame cultivation, as waterlogging damages the plant. Sesame crops prefer warm and dry weather. A temperature of 25-30°C at sowing time and 30-35°C during crop growth is considered ideal.",
        },
        {
          title: "Field Preparation",
          content:
            "Plough the field 2-3 times to make the soil fertile. Remove crop residues and weeds from the previous crop. To improve soil fertility, apply 5-10 tons of farmyard manure or compost per hectare and mix it into the soil during ploughing. For summer sesame cultivation, light irrigation before sowing is beneficial to maintain soil moisture.",
        },
        {
          title: "Sowing",
          content:
            "Kharif crop: Sowing should be done in June-July when there is sufficient rainfall. Rabi crop: Sowing is done in October-November when the cold season begins. Summer crop: Sowing can be done in February-March. The seed rate should be 5-6 kg (summer), 2-2.5 kg (monsoon) per hectare. Sesame seeds are very small, hence a low seed rate is required. Maintain a spacing of 45-60 cm between rows and 15-20 cm between plants. Sow the seeds at a depth of 1-2 cm. Sowing at greater depths can hinder germination. Treat the seeds with a fungicide like Thiram or Carbendazim before sowing. Mixing the seeds with sand or ash before sowing helps in uniform sowing.",
        },
        {
          title: "Fertilization and Nutrition",
          content:
            "It is best to apply fertilizers based on soil testing. Generally, 40-60 kg of nitrogen, 20-30 kg of phosphorus, and 20 kg of potash are required per hectare. Apply half the amount of nitrogen and the full amount of phosphorus and potash as basal fertilizer at the time of sowing. Apply the remaining nitrogen in two installments, first at the time of first irrigation and then at flowering.",
        },
        {
          title: "Irrigation",
          content:
            "Sesame crop requires less irrigation, but there should be no water stress during critical periods. Give a light irrigation immediately after sowing. Then continue irrigating at intervals of 15-20 days depending on the soil moisture requirement. Ensure there is no water shortage during flowering and branching. Kharif crops are generally rain-fed, but if there is a lack of rain, supplementary irrigation is necessary. Summer crops require regular irrigation at intervals of 8-10 days.",
        },
        {
          title: "Weed Control",
          content:
            "It is very important to keep the sesame crop weed-free for the first 30-40 days, as weeds hinder crop growth during this period. Weeds can be removed manually or through inter-cultivation. Chemical herbicides can also be used. Weeds can be controlled by incorporating herbicides into the soil before sowing.",
        },
        {
          title: "Pest and Disease Control",
          content:
            "Sesame crops can be affected by pests such as mealybugs, whiteflies, leafhoppers, and leaf miners. Use appropriate pesticides to control them. Diseases such as leaf spot, powdery mildew, and root rot can also damage the sesame crop. To control diseases, it is important to sow disease-resistant varieties and use appropriate fungicides.",
        },
        {
          title: "Harvesting",
          content:
            "The crop should be harvested when the leaves start turning yellow and the pods become yellowish-green. Over-ripening causes the pods to burst and the seeds to fall out. Cut the plants close to the ground, make small bundles, and dry them in the sun for 2-3 days. Then separate the seeds using a bullock-drawn or tractor-driven thresher.",
        },
        {
          title: "Important Note",
          content:
            "This is a general method of sesame cultivation. It may vary slightly depending on the climate and soil type of your region. For more detailed information, it is advisable to contact your nearest agricultural advisor or agricultural university.",
        },
      ],
      title: "Crop and Variety Name",
      SubTitle: "Gujarat-1,2,3,4,5,6, 10, Certified, Foundation | Til Amber, Rudraksh, Alto, Manek, Truthful",
      CompanyName: "RELIANCE SEED (PRO.) COMPANY",
      address:" ADDRESS: GINGANI ROAD, TIRUPATI BYPASS, BEHIND SUBH HONDA. JAMAJODHPUR, DIST. JAMNAGAR (GUJARAT)",
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
        <div className="hero">
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
          <h2 id="title" style={{color: "#e65100", textAlign: "center"}}></h2>
          <h4 id="SubTitle" style={{textAlign: 'center'}}></h4>
          <img
            src="/images/1.png"
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

export default Til;
