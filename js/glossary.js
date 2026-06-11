// ─────────────────────────────────────────────
// GLOSSARY — terms often confused in Gita study
// patterns: regex strings (longer / specific first in file order)
// ─────────────────────────────────────────────
const GLOSSARY = {
  karmayoga: {
    labelHi: 'कर्मयोग',
    labelEn: 'Karma Yoga',
    defHi: 'कर्म करते हुए भी फल, अहंकार और आसक्ति से मुक्त रहना। गीता में यह केवल कार्य नहीं, कार्य का भीतरी भाव है।',
    defEn: 'The yoga of action performed without attachment to results, ego, or selfish motive. In the Gita it is not mere activity but the inner spirit of offering in action.',
    patterns: ['कर्मयोग', 'कर्म योग', 'karma yoga', 'karma-yoga'],
  },
  nishkama: {
    labelHi: 'निष्काम कर्म',
    labelEn: 'Nishkama Karma',
    defHi: 'बिना फल की इच्छा के किया गया कर्म। अधिकार केवल प्रयास पर है, परिणाम ईश्वर के हाथ में।',
    defEn: 'Action done without desire for personal reward. One has authority over effort, not over outcomes.',
    patterns: ['निष्काम कर्म', 'निष्काम', 'nishk[aā]ma karma', 'selfless action'],
  },
  svadharma: {
    labelHi: 'स्वधर्म',
    labelEn: 'Svadharma',
    defHi: 'अपना कर्तव्य, अपनी प्रकृति और स्थिति के अनुसार धर्म। दूसरे का धर्म अपना नहीं होता।',
    defEn: 'One\'s own duty according to nature, role, and circumstance. Another person\'s dharma cannot rightly replace one\'s own.',
    patterns: ['स्वधर्म', 'स्व-धर्म', 'svadharma', 'sva-dharma', 'one\'s own dharma', 'own duty'],
  },
  dharma: {
    labelHi: 'धर्म',
    labelEn: 'Dharma',
    defHi: 'सही कर्तव्य, नैतिक आधार और जीवन का उचित मार्ग। गीता में यह केवल रीति-रिवाज नहीं, बल्कि सत्य के अनुसार जीने की रीति है।',
    defEn: 'Righteous duty, moral order, and the fitting way to live. In the Gita it is not mere ritual custom but alignment with truth and responsibility.',
    patterns: ['धर्मक्षेत्र', 'धर्मभूमि', 'धर्म', '\\bdharma\\b'],
  },
  karma: {
    labelHi: 'कर्म',
    labelEn: 'Karma',
    defHi: 'कर्म का अर्थ केवल “भाग्य” नहीं; यहाँ कर्म का अर्थ कार्य, कर्तृत्व और उसके परिणामों की श्रृंखला है।',
    defEn: 'Not merely “fate.” In the Gita, karma means action, agency, and the chain of deeds and their consequences.',
    patterns: ['कर्मफल', 'कर्म', '\\bkarma\\b'],
  },
  yoga: {
    labelHi: 'योग',
    labelEn: 'Yoga',
    defHi: 'योग का अर्थ केवल आसन नहीं; गीता में योग मन की एकाग्रता, समता और ईश्वर से योग (जुड़ाव) है।',
    defEn: 'Not posture alone. In the Gita, yoga is inner union, steadiness of mind, and harmony with the Divine.',
    patterns: ['योगाभ्यास', 'योग', '\\byoga\\b'],
  },
  atma: {
    labelHi: 'आत्मा',
    labelEn: 'Atma',
    defHi: 'शरीर, मन और बुद्धि से परे सच्चा स्व। गीता में आत्मा अविनाशी, अजन्मी और शाश्वत मानी जाती है।',
    defEn: 'The true self beyond body, mind, and intellect. In the Gita the atma is held to be immortal, unborn, and eternal.',
    patterns: ['आत्मा', '\\batma\\b', '\\batman\\b', 'the self', '\\bsoul\\b'],
  },
  moksha: {
    labelHi: 'मोक्ष',
    labelEn: 'Moksha',
    defHi: 'जन्म-मरण, बंधन और अज्ञान से मुक्ति। यह केवल स्वर्ग नहीं, बल्कि शाश्वत शान्ति और परम सत्य की प्राप्ति है।',
    defEn: 'Liberation from bondage, ignorance, and the cycle of birth and death. More than heaven, it is lasting peace and union with the supreme truth.',
    patterns: ['मोक्ष', '\\bmoksha\\b', '\\bliberation\\b'],
  },
  bhakti: {
    labelHi: 'भक्ति',
    labelEn: 'Bhakti',
    defHi: 'ईश्वर के प्रति प्रेम, श्रद्धा और समर्पण का मार्ग। ज्ञान और कर्म से भी कई स्थानों पर इसे श्रेष्ठ बताया गया है।',
    defEn: 'The path of love, faith, and surrender to God. In many passages the Gita holds it higher even than knowledge or action alone.',
    patterns: ['भक्ति', 'भक्त', '\\bbhakti\\b', '\\bdevotion\\b'],
  },
  sannyasa: {
    labelHi: 'संन्यास',
    labelEn: 'Sannyasa',
    defHi: 'बाहरी त्याग की अपेक्षा गीता में भीतरी संन्यास को महत्त्व दिया जाता है — फल, अहंकार और आसक्ति का त्याग।',
    defEn: 'Outward renunciation matters less than inner sannyasa in the Gita: giving up attachment, ego, and clinging to results.',
    patterns: ['संन्यास', 'संन्यासी', 'sannyasa', 'sannyasi', '\\brenunciation\\b'],
  },
  maya: {
    labelHi: 'माया',
    labelEn: 'Maya',
    defHi: 'ईश्वरीय शक्ति जिससे सृष्टि प्रकट होती है और जो वास्तविकता को ढक सकती है। अज्ञान से ही माया बंधन बनती है।',
    defEn: 'Divine power by which creation appears and by which reality may be veiled. Bondage arises when maya is mistaken for the final truth.',
    patterns: ['माया', 'maya'],
  },
  guna: {
    labelHi: 'गुण',
    labelEn: 'Guna',
    defHi: 'प्रकृति के तीन गुण — सत्त्व, रज और तम — जो मन, कर्म और भाव को प्रभावित करते हैं। इन्हें पहचानना ही उनसे ऊपर उठने की शुरुआत है।',
    defEn: 'The three qualities of nature — sattva, rajas, and tamas — shaping mind, action, and temperament. Recognising them is the first step beyond them.',
    patterns: ['गुणों', 'गुण', 'sattva', 'rajas', 'tamas', '\\bgunas?\\b', 'three gunas'],
  },
  brahman: {
    labelHi: 'ब्रह्म',
    labelEn: 'Brahman',
    defHi: 'परम, अविनाशी सत्य जिसमें सब निहित है। व्यक्तिगत ईश्वर और निर्गुण परम तत्त्व दोनों की ओर यह शब्द संकेत करता है।',
    defEn: 'The supreme, imperishable reality in which all rests. The term points toward both the personal Lord and the transcendent absolute.',
    patterns: ['ब्रह्म', 'brahman'],
  },
  jnana: {
    labelHi: 'ज्ञान',
    labelEn: 'Jnana',
    defHi: 'केवल सूचना नहीं, आत्मा और परम तत्त्व का साक्षात्कार। गीता में ज्ञान कर्म और भक्ति को शुद्ध करता है।',
    defEn: 'Not mere information, but insight into the self and the supreme. In the Gita, knowledge purifies action and devotion.',
    patterns: ['ज्ञान', 'jnana', '\\bknowledge\\b'],
  },
  sthitaprajna: {
    labelHi: 'स्थितप्रज्ञ',
    labelEn: 'Sthita-prajna',
    defHi: 'स्थिर बुद्धि वाला योगी जो सुख-दुःख, लाभ-हानि में सम रहता है और कामनाओं से मुक्त है।',
    defEn: 'One of steady wisdom who remains equipoised in pleasure and pain, gain and loss, free from restless craving.',
    patterns: ['स्थितप्रज्ञ', 'sthita-prajna', 'steady wisdom'],
  },
  vairagya: {
    labelHi: 'वैराग्य',
    labelEn: 'Vairagya',
    defHi: 'विषयों से भागना नहीं, बल्कि आसक्ति का कम होना। अभ्यास के साथ मन को शान्त और नियंत्रित करने की शक्ति।',
    defEn: 'Not fleeing the world, but loosening attachment to it. With practice it steadies and disciplines the mind.',
    patterns: ['वैराग्य', 'vairagya', '\\bdetachment\\b'],
  },
  abhyasa: {
    labelHi: 'अभ्यास',
    labelEn: 'Abhyasa',
    defHi: 'बार-बार, धैर्यपूर्वक चुना गया अभ्यास। गीता में ध्यान, योग और श्रद्धा सभी के लिए यह आवश्यक है।',
    defEn: 'Repeated, patient practice chosen again and again. The Gita treats it as essential for meditation, yoga, and faith.',
    patterns: ['अभ्यास', 'abhyasa', '\\bpractice\\b'],
  },
  shraddha: {
    labelHi: 'श्रद्धा',
    labelEn: 'Shraddha',
    defHi: 'अन्ध विश्वास नहीं, बल्कि सत्य की ओर खुला, गहरा विश्वास। श्रद्धा से ही उपासना, दान और तप का भाव तय होता है।',
    defEn: 'Not blind belief, but open and deep trust toward truth. Faith shapes worship, charity, and austerity.',
    patterns: ['श्रद्धा', 'shraddha', 'shraddhā', '\\bfaith\\b'],
  },
  tyaga: {
    labelHi: 'त्याग',
    labelEn: 'Tyaga',
    defHi: 'कर्म का त्याग नहीं, बल्कि फल, ममता और अहंकार का त्याग। गीता में सच्चा त्याग भीतर होता है।',
    defEn: 'Not abandoning action, but relinquishing fruits, possessiveness, and ego. True tyaga is inward.',
    patterns: ['त्याग', 'त्यागी', 'tyaga', '\\brenounc'],
  },
  yajna: {
    labelHi: 'यज्ञ',
    labelEn: 'Yajna',
    defHi: 'केवल वेदिक अग्नि-कुण्ड नहीं; गीता में यज्ञ का अर्थ निष्काम कर्म, समर्पण और जीवन को पवित्र करना है।',
    defEn: 'Not only the Vedic fire ritual. In the Gita, yajna means selfless action, offering, and sanctifying life itself.',
    patterns: ['यज्ञ', 'yajna', 'yajña', '\\bsacrifice\\b'],
  },
  prakriti: {
    labelHi: 'प्रकृति',
    labelEn: 'Prakriti',
    defHi: 'सृष्टि की प्रकृति, गुणों और पदार्थों की शक्ति। पुरुष से भिन्न, यह परिवर्तनशील क्षेत्र है।',
    defEn: 'Material nature, the field of gunas and elements. Distinct from purusha, it is the changing realm of becoming.',
    patterns: ['प्रकृति', 'prakriti', 'prakṛti', '\\bnature\\b'],
  },
  purusha: {
    labelHi: 'पुरुष / पुरुषोत्तम',
    labelEn: 'Purusha',
    defHi: 'चेतना का सिद्धांत और परम पुरुष — पुरुषोत्तम। शरीर-क्षेत्र से परे जानने वाला और सर्वोच्च व्यक्तित्व।',
    defEn: 'The conscious principle and the Supreme Person, Purushottama: the knower beyond the field and the highest Lord.',
    patterns: ['पुरुषोत्तम', 'पुरुष', 'purushottama', 'purusha'],
  },
  ahankara: {
    labelHi: 'अहंकार',
    labelEn: 'Ahankara',
    defHi: '“मैं करता हूँ” का भ्रम। गीता में अहंकार कर्म के बंधन का मूल कारण माना जाता है।',
    defEn: 'The illusion “I am the doer.” The Gita treats ego as a root cause of bondage in action.',
    patterns: ['अहंकार', 'ahankara', 'ahaṃkāra', '\\bego\\b'],
  },
  sansara: {
    labelHi: 'संसार',
    labelEn: 'Samsara',
    defHi: 'जन्म-मरण और इच्छा-कर्म के चक्र में बँधा संसार। मोक्ष इसी चक्र से मुक्ति है।',
    defEn: 'The world bound to the cycle of birth, death, desire, and action. Moksha is release from this wheel.',
    patterns: ['संसार', 'samsara', 'samsāra', 'the world'],
  },
  moksha_related_sharanagati: {
    labelHi: 'शरणागति',
    labelEn: 'Sharanagati',
    defHi: 'सर्वभाव से ईश्वर की शरण में आना। गीता के अन्त में यही परम उपदेश है — स्वयं को उसके हवाले करना।',
    defEn: 'Complete surrender to God with one\'s whole being. The Gita\'s final teaching is to entrust oneself entirely to the Divine.',
    patterns: ['शरणागति', 'sharanagati', 'śaraṇa', '\\bsurrender\\b'],
  },
  moha: {
    labelHi: 'मोह',
    labelEn: 'Moha',
    defHi: 'अज्ञान से उत्पन्न मोह जो सत्य को ढक देता है। अर्जुन का विषाद भी इसी मोह का परिणाम है।',
    defEn: 'Delusion born of ignorance that veils what is real. Arjuna\'s grief at the opening of the Gita arises from this very moha.',
    patterns: ['मोहित', 'मोह', 'moha', '\\bdelusion\\b'],
  },
  samatva: {
    labelHi: 'समता',
    labelEn: 'Samatva',
    defHi: 'सुख-दुःख, सिद्धि-असिद्धि में समान भाव। गीता में इसे योग की पहचान कही गई है।',
    defEn: 'Equanimity in pleasure and pain, success and failure. The Gita calls this evenness yoga itself.',
    patterns: ['समता', 'समान भाव', 'समत्व', 'samatva', 'equanimity', 'evenness'],
  },
  vishada: {
    labelHi: 'विषाद',
    labelEn: 'Vishada',
    defHi: 'अर्जुन विषाद योग का विषाद — कर्तव्य और प्रेम के टकराव से उत्पन्न गहरा शोक। गीता इसी संकट में जन्मी।',
    defEn: 'The grief of Arjuna — deep sorrow where duty and love collide. The Gita is born in this very crisis.',
    patterns: ['विषाद', 'vishada', 'viṣāda', '\\bgrief\\b'],
  },
};

// Longest patterns first to prefer specific matches
const GLOSSARY_MATCHERS = Object.entries(GLOSSARY)
  .flatMap(([id, entry]) =>
    entry.patterns.map(pattern => ({
      id,
      pattern,
      len: pattern.length,
      isRegex: /\\[bBdDwWsS]/.test(pattern) || pattern.includes('['),
    }))
  )
  .sort((a, b) => b.len - a.len);

function escapeGlossHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function collectGlossaryMatches(text) {
  const matches = [];
  const lower = text.toLowerCase();

  for (const { id, pattern, isRegex } of GLOSSARY_MATCHERS) {
    if (isRegex) {
      const regex = new RegExp(pattern, 'gi');
      let m;
      let guard = 0;
      while ((m = regex.exec(text)) !== null) {
        if (m[0].length === 0) {
          regex.lastIndex++;
          continue;
        }
        matches.push({ start: m.index, end: m.index + m[0].length, id });
        if (++guard > 100) break;
      }
    } else {
      const needle = pattern.toLowerCase();
      let from = 0;
      while (from < text.length) {
        const idx = lower.indexOf(needle, from);
        if (idx === -1) break;
        matches.push({ start: idx, end: idx + pattern.length, id });
        from = idx + pattern.length;
      }
    }
  }
  matches.sort((a, b) => {
    const lenA = a.end - a.start;
    const lenB = b.end - b.start;
    if (lenB !== lenA) return lenB - lenA;
    return a.start - b.start;
  });
  const kept = [];
  for (const m of matches) {
    if (!kept.some(k => m.start < k.end && m.end > k.start)) kept.push(m);
  }
  kept.sort((a, b) => a.start - b.start);
  return kept;
}

function annotateGlossary(text, lang) {
  if (!text) return '';
  const matches = collectGlossaryMatches(text);
  let out = '';
  let pos = 0;
  for (const m of matches) {
    out += escapeGlossHtml(text.slice(pos, m.start));
    const slice = text.slice(m.start, m.end);
    out += `<span class="gloss-term" data-term="${m.id}" data-lang="${lang}" tabindex="0">${escapeGlossHtml(slice)}</span>`;
    pos = m.end;
  }
  out += escapeGlossHtml(text.slice(pos));
  return out;
}
