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
  sattva: {
    labelHi: 'सत्त्व',
    labelEn: 'Sattva',
    defHi: 'प्रकाश, स्पष्टता और शान्ति देने वाला गुण। सत्त्व शुद्धि की ओर ले जाता है, पर उसकी आसक्ति भी बँधन बना सकती है।',
    defEn: 'The quality of clarity, light, and peace. Sattva leads toward purity, though even attachment to it can become a bond.',
    patterns: ['सात्त्विक', 'सत्त्व', '\\bsattva\\b', '\\bsattvic\\b'],
  },
  rajas: {
    labelHi: 'रज',
    labelEn: 'Rajas',
    defHi: 'गति, कर्म और इच्छा का गुण। रज सक्रियता देता है, पर अत्यधिक रज चंचलता, लालसा और बेचैनी उत्पन्न करता है।',
    defEn: 'The quality of motion, desire, and activity. Rajas drives action, but in excess it breeds restlessness and craving.',
    patterns: ['राजस', 'रज', '\\brajas\\b', '\\brajasic\\b'],
  },
  tamas: {
    labelHi: 'तम',
    labelEn: 'Tamas',
    defHi: 'अन्धकार, जड़ता और मोह का गुण। तम निद्रा, आलस्य और भ्रम की ओर ले जाता है; इसे पहचानना आवश्यक है।',
    defEn: 'The quality of darkness, inertia, and delusion. Tamas inclines toward sleep, laziness, and confusion; recognising it is essential.',
    patterns: ['तामस', 'तम', '\\btamas\\b', '\\btamasic\\b'],
  },
  kama: {
    labelHi: 'काम',
    labelEn: 'Kama',
    defHi: 'इच्छा, वासना, “चाहिए” की लालसा। गीता में काम क्रोध का मूल माना जाता है और आत्म-ज्ञान का बड़ा शत्रु।',
    defEn: 'Desire, craving, the restless “I want.” The Gita treats kama as a root of anger and a major obstacle to self-knowledge.',
    patterns: ['कामना', 'काम', '\\bkama\\b', '\\bcraving\\b'],
  },
  krodha: {
    labelHi: 'क्रोध',
    labelEn: 'Krodha',
    defHi: 'अपनी इच्छा के विरोध में उत्पन्न क्रोध। गीता में यह काम से उत्पन्न होता है और बुद्धि को ढक देता है।',
    defEn: 'Anger arising when desire is thwarted. In the Gita it springs from frustrated craving and clouds judgment.',
    patterns: ['क्रोध', '\\bkrodha\\b', '\\banger\\b'],
  },
  lobha: {
    labelHi: 'लोभ',
    labelEn: 'Lobha',
    defHi: '“और चाहिए” की अतृप्त भूख। गीता में लोभ, काम और क्रोध के साथ, आत्मा के तीन भीतरी शत्रुओं में गिना जाता है।',
    defEn: 'Greedy wanting, the hunger for “more.” The Gita counts lobha among the three inner enemies along with desire and anger.',
    patterns: ['लोभ', '\\blobha\\b', '\\bgreed\\b'],
  },
  raga: {
    labelHi: 'राग',
    labelEn: 'Raga',
    defHi: 'विषयों, व्यक्तियों या परिणामों से आसक्ति। राग-द्वेष के बिना ही मन की शान्ति और समता सम्भव है।',
    defEn: 'Attachment to objects, people, or outcomes. Equanimity becomes possible only when raga and dvesha loosen their hold.',
    patterns: ['राग', '\\braga\\b', '\\battachment\\b'],
  },
  dvesha: {
    labelHi: 'द्वेष',
    labelEn: 'Dvesha',
    defHi: 'घृणा, विरोध, “नहीं चाहिए” की कटु भावना। राग की तरह द्वेष भी मन को बाँधता है और स्पष्ट दृष्टि छीन लेता है।',
    defEn: 'Aversion, hatred, the bitter “I reject.” Like attachment, dvesha binds the mind and steals clear vision.',
    patterns: ['द्वेष', 'dvesha', 'dveṣa', '\\baversion\\b', '\\bmalice\\b'],
  },
  sanga: {
    labelHi: 'सङ्ग / आसक्ति',
    labelEn: 'Sanga',
    defHi: 'विषयों, विचारों या परिणामों से जुड़ाव। गीता में आसक्ति ही कर्म को बाँधती है; निष्कामता इसी सङ्ग को छोड़ती है।',
    defEn: 'Clinging to objects, thoughts, or results. Attachment is what binds action; selfless action releases this clinging.',
    patterns: ['आसक्ति', 'सङ्ग', 'संग', 'sanga', 'saṅga', 'clinging'],
  },
  ishvara: {
    labelHi: 'ईश्वर',
    labelEn: 'Ishvara',
    defHi: 'सर्वशक्तिमान, सर्वव्यापी परमात्मा। गीता में कृष्ण इसी ईश्वर के रूप में उपदेश देते हैं — सृष्टि के स्रोत और शरण।',
    defEn: 'The all-powerful, all-pervading Lord. In the Gita Krishna speaks as Ishvara — source of creation and final refuge.',
    patterns: ['ईश्वर', 'ईश्वरीय', 'ishvara', 'īśvara', 'the divine', 'the lord'],
  },
  avatar: {
    labelHi: 'अवतार',
    labelEn: 'Avatar',
    defHi: 'धर्म की रक्षा और अधर्म के नाश के लिए ईश्वर का अवतरण। यह केवल ऐतिहासिक घटना नहीं, सत्य के पुनः प्रकट होने का प्रतीक भी है।',
    defEn: 'The descent of God to protect dharma and restore righteousness. Not only a historical event but a symbol of truth returning when darkness rises.',
    patterns: ['अवतार', 'अवतरण', 'avatar', 'incarnation'],
  },
  adharma: {
    labelHi: 'अधर्म',
    labelEn: 'Adharma',
    defHi: 'धर्म का विरोध — अन्याय, अहंकार और हिंसा की दिशा। गीता में अधर्म बढ़ने पर ही अवतार की आवश्यकता बताई जाती है।',
    defEn: 'That which opposes dharma — injustice, egoism, and destructive action. The Gita says avatars appear when adharma grows strong.',
    patterns: ['अधर्म', 'adharma', 'unrighteousness'],
  },
  akarma: {
    labelHi: 'अकर्म',
    labelEn: 'Akarma',
    defHi: 'कर्म का त्याग नहीं, बल्कि ऐसी स्थिति जहाँ कर्म बँधन नहीं बनता। योगी कर्म करते हुए भी अकर्म की तरह रह सकता है।',
    defEn: 'Not inaction, but action that creates no bondage. The yogi may act fully yet remain, in effect, free from karmic entanglement.',
    patterns: ['अकर्म', 'akarma', 'inaction'],
  },
  dhyana: {
    labelHi: 'ध्यान',
    labelEn: 'Dhyana',
    defHi: 'एकाग्र चित्त से आत्मा या ईश्वर का चिन्तन। गीता में ध्यान योग का मार्ग है — मन को बार-बार शान्त केन्द्र की ओर लौटाना।',
    defEn: 'One-pointed contemplation of the self or God. In the Gita, dhyana is the path of meditation — returning the mind again and again to a still centre.',
    patterns: ['ध्यान', 'dhyana', 'meditation'],
  },
  tapas: {
    labelHi: 'तप',
    labelEn: 'Tapas',
    defHi: 'शारीरिक, वाचिक और मानसिक शुद्धि का अनुशासन। तप का अर्थ केवल कष्ट नहीं; आत्म-संयम और ईमानदार साधना है।',
    defEn: 'Discipline that purifies body, speech, and mind. Tapas is not mere hardship but honest self-restraint and spiritual effort.',
    patterns: ['तपस्या', 'तप', 'tapas', 'austerity'],
  },
  daan: {
    labelHi: 'दान',
    labelEn: 'Daan',
    defHi: 'बिना स्वार्थ, उचित समय और योग्य पात्र को देना। सात्त्विक दान हृदय की शुद्धि और समाज की सेवा दोनों है।',
    defEn: 'Giving without selfish motive, at the right time, to a worthy recipient. Sattvic charity purifies the heart and serves others.',
    patterns: ['दान', 'daan', 'dāna', 'charity'],
  },
  punya: {
    labelHi: 'पुण्य',
    labelEn: 'Punya',
    defHi: 'शुभ कर्मों का सुखद फल। पुण्य अच्छा है, पर गीता सिखाती है कि आत्म-ज्ञान से ऊपर उठने के लिए पुण्य-पाप दोनों के बंधन से मुक्त होना होगा।',
    defEn: 'The pleasant fruit of virtuous deeds. Punya is good, yet the Gita teaches that liberation requires freedom even from the bonds of merit and sin.',
    patterns: ['पुण्य', 'punya', 'merit'],
  },
  papa: {
    labelHi: 'पाप',
    labelEn: 'Papa',
    defHi: 'अधर्म से उत्पन्न कर्म और उसका दुःखद परिणाम। पाप का भय उपयोगी हो सकता है, पर अन्त में आत्म-ज्ञान ही मुक्त करता है।',
    defEn: 'Wrong action and its painful consequences. Fear of sin can guide conduct, but ultimately self-knowledge brings release.',
    patterns: ['पाप', 'papa', 'pāpa', 'sinful', '\\bsin\\b'],
  },
  buddhi: {
    labelHi: 'बुद्धि',
    labelEn: 'Buddhi',
    defHi: 'विवेक, निर्णय और आत्म-ज्ञान की शक्ति। स्थिर बुद्धि (स्थितप्रज्ञ) ही सुख-दुःख में सम रहने में सहायक होती है।',
    defEn: 'Discernment, judgment, and the power of self-knowledge. Steady buddhi helps one remain equal in pleasure and pain.',
    patterns: ['बुद्धि', 'बुद्धियोग', 'buddhi', 'buddhi yoga', 'intellect'],
  },
  manas: {
    labelHi: 'मन',
    labelEn: 'Manas',
    defHi: 'चिन्तन, भाव और इच्छाओं का केन्द्र। गीता में मन चंचल माना गया है, पर अभ्यास से इसे मित्र बनाया जा सकता है।',
    defEn: 'The centre of thought, feeling, and desire. The Gita calls the mind restless, yet through practice it can become a friend.',
    patterns: ['मनोगत', 'मन', 'manas', 'the mind'],
  },
  indriya: {
    labelHi: 'इन्द्रिय',
    labelEn: 'Indriya',
    defHi: 'ज्ञानेन्द्रियाँ और कर्मेन्द्रियाँ — बाहर की दुनिया से जुड़ने के द्वार। इन्हें वश में रखना ही आत्म-संयम का आधार है।',
    defEn: 'The senses of perception and action — doors to the outer world. Self-mastery begins with keeping them disciplined.',
    patterns: ['इन्द्रिय', 'indriya', 'indriyas', 'the senses', 'sense objects'],
  },
  kshetra: {
    labelHi: 'क्षेत्र / क्षेत्रज्ञ',
    labelEn: 'Kshetra',
    defHi: 'शरीर और उसका परिवेश “क्षेत्र” है; आत्मा “क्षेत्रज्ञ” — जानने वाला। इस भेद को समझना ही आत्म-ज्ञान की शुरुआत है।',
    defEn: 'The body and its field are kshetra; the soul is kshetrajna — the knower. Understanding this distinction begins self-knowledge.',
    patterns: ['क्षेत्रज्ञ', 'क्षेत्र', 'kshetrajna', 'kṣetra', 'the field'],
  },
  tatva: {
    labelHi: 'तत्त्व',
    labelEn: 'Tattva',
    defHi: 'वस्तु का सार, परम सत्य की वास्तविकता। “तत्त्व से जानना” का अर्थ सतही जानकारी नहीं, गहरी साक्षात् समझ है।',
    defEn: 'The essence of a thing, the reality of ultimate truth. To know in tattva is deep insight, not surface information.',
    patterns: ['तत्त्व', 'तत्त्वज्ञ', 'tattva', 'tattvataḥ', 'ultimate truth'],
  },
  vibhuti: {
    labelHi: 'विभूति',
    labelEn: 'Vibhuti',
    defHi: 'ईश्वर की महिमा, शोभा, बल और उत्कृष्टता की झलक। जहाँ भी श्रेष्ठता है, वहाँ विभूति देखी जा सकती है।',
    defEn: 'The glory, splendour, and excellence of God manifest in the world. Wherever excellence appears, vibhuti may be recognised.',
    patterns: ['विभूति', 'vibhuti', 'glory', 'splendour'],
  },
  vasudeva: {
    labelHi: 'वासुदेव',
    labelEn: 'Vasudeva',
    defHi: 'कृष्ण का नाम और परम सत्य का साकार स्वरूप। “वासुदेवः सर्वम्” — सब कुछ वासुदेव है — यह परम भक्ति का बोध है।',
    defEn: 'A name of Krishna and the personal form of supreme truth. “Vasudeva is all” is the highest insight of devotion.',
    patterns: ['वासुदेव', 'vasudeva', 'vāsudeva'],
  },
  mrityu: {
    labelHi: 'मृत्यु',
    labelEn: 'Mrityu',
    defHi: 'शरीर का अन्त, आत्मा का नहीं। गीता मृत्यु को वस्त्र-परिवर्तन की तरह देखना सिखाती है, भय की नहीं।',
    defEn: 'The end of the body, not of the soul. The Gita teaches seeing death as changing garments rather than as ultimate terror.',
    patterns: ['मृत्यु', 'mrityu', 'mṛtyu', 'death'],
  },
  janma: {
    labelHi: 'जन्म',
    labelEn: 'Janma',
    defHi: 'आत्मा का जन्म नहीं, शरीर का जन्म। जन्म-मरण का चक्र शरीरों का है; आत्मा अजन्मी और अविनाशी है।',
    defEn: 'Birth belongs to the body, not the soul. The cycle of birth and death applies to forms; the atma is unborn and imperishable.',
    patterns: ['पुनर्जन्म', 'जन्म', 'janma', 'birth', 'rebirth'],
  },
  shanti: {
    labelHi: 'शान्ति',
    labelEn: 'Shanti',
    defHi: 'बाहरी शोर की अनुपस्थिति नहीं, भीतर की गहरी स्थिरता। गीता की शान्ति आत्म-ज्ञान और समर्पण का फल है।',
    defEn: 'Not merely the absence of noise, but deep inner stillness. The Gita\'s shanti is the fruit of self-knowledge and surrender.',
    patterns: ['शान्ति', 'शांति', 'shanti', 'śānti', 'peace'],
  },
  dvandva: {
    labelHi: 'द्वन्द्व',
    labelEn: 'Dvandva',
    defHi: 'सुख-दुःख, शीत-उष्ण, लाभ-हानि जैसे विरोधी युग्म। इन द्वन्द्वों से मुक्त होकर ही मन स्थिर रह सकता है।',
    defEn: 'Pairs of opposites — pleasure and pain, heat and cold, gain and loss. The mind steadies by going beyond these dualities.',
    patterns: ['द्वन्द्व', 'dvandva', 'dualities', 'pairs of opposites'],
  },
  anasakti: {
    labelHi: 'अनासक्ति',
    labelEn: 'Anasakti',
    defHi: 'आसक्ति का अभाव — कर्म करते हुए भी परिणाम, वस्तु या “मेरा” से न बँधना। गीता में यही सर्वोच्च स्वतंत्रता है।',
    defEn: 'Freedom from clinging — acting without being bound to results, possessions, or “mine.” The Gita holds this the highest freedom.',
    patterns: ['अनासक्त', 'अनासक्ति', 'anasakti', 'non-attachment'],
  },
  vijnana: {
    labelHi: 'विज्ञान',
    labelEn: 'Vijnana',
    defHi: 'ज्ञान का जीवित अनुभव — सिद्धान्त को हृदय में उतारना। गीता में ज्ञान और विज्ञान दोनों से परम तत्त्व को समझने का प्रयास है।',
    defEn: 'Lived realisation of knowledge — making doctrine real in the heart. The Gita seeks the supreme through both jnana and vijnana.',
    patterns: ['विज्ञान', 'vijnana', 'vijñāna', 'realisation'],
  },
  kartavya: {
    labelHi: 'कर्तव्य',
    labelEn: 'Kartavya',
    defHi: 'वह कर्तव्य जो स्थिति, धर्म और सत्य से उत्पन्न हो। अर्जुन का संकट भी कर्तव्य और प्रेम के बीच का संघर्ष है।',
    defEn: 'Duty arising from one\'s situation, dharma, and truth. Arjuna\'s crisis is precisely the clash between duty and love.',
    patterns: ['कर्तव्य', 'kartavya', 'duty'],
  },
  titiksha: {
    labelHi: 'तितिक्षा',
    labelEn: 'Titiksha',
    defHi: 'सुख-दुःख, शीत-उष्ण को सहन करने की शक्ति। यह कठोरता नहीं, बल्कि समझ कि ये अनित्य हैं।',
    defEn: 'The power to endure pleasure, pain, heat, and cold. Not hardness, but understanding that such experiences are impermanent.',
    patterns: ['तितिक्ष', 'titiksha', 'titikṣā', 'endure', 'forbearance'],
  },
  deha: {
    labelHi: 'देह / शरीर',
    labelEn: 'Deha',
    defHi: 'आत्मा का वस्त्र, क्षणिक और परिवर्तनशील। गीता सिखाती है कि हम शरीर नहीं, शरीर के साक्षी हैं।',
    defEn: 'The garment of the soul — temporary and changing. The Gita teaches we are not the body but its witness.',
    patterns: ['शरीर', 'देह', 'deha', 'the body'],
  },
  jiva: {
    labelHi: 'जीव',
    labelEn: 'Jiva',
    defHi: 'ईश्वर का अंश, व्यक्तिगत चेतन आत्मा। हर जीव अनाथ नहीं; वह परम चेतना का अंश है।',
    defEn: 'The individual living soul, a spark of the Divine. No being is orphaned; each is a portion of supreme consciousness.',
    patterns: ['जीव', 'jiva', 'living being', 'living soul'],
  },
  akshara: {
    labelHi: 'अक्षर ब्रह्म',
    labelEn: 'Akshara Brahman',
    defHi: 'अविनाशी, अपरिवर्तनीय परम सत्य। “अक्षर” का अर्थ अक्षर नहीं, वह शाश्वत तत्त्व है जो कभी नष्ट नहीं होता।',
    defEn: 'The imperishable, unchanging supreme reality. Akshara here means the eternal Brahman, not merely a syllable or letter.',
    patterns: ['अक्षर ब्रह्म', 'अक्षर', 'akshara brahman', 'akshara', 'imperishable brahman'],
  },
  parampad: {
    labelHi: 'परम पद',
    labelEn: 'Param Pad',
    defHi: 'मोक्ष का शाश्वत लक्ष्य — वह स्थान या अवस्था जहाँ से लौटना नहीं होता। स्वर्ग क्षणिक है, परम पद शाश्वत है।',
    defEn: 'The supreme abode — the eternal goal of liberation from which there is no return. Heaven may be glorious, but param pad is lasting.',
    patterns: ['परम पद', 'परमपद', 'param pad', 'supreme abode', 'eternal abode'],
  },
  paramatma: {
    labelHi: 'परमात्मा',
    labelEn: 'Paramatma',
    defHi: 'सबके हृदय में विराजमान सर्वव्यापी आत्मा। व्यक्तिगत आत्मा (जीव) से परे, पर सबके भीतर उपस्थित परम चेतना।',
    defEn: 'The supreme Self dwelling in every heart. Beyond the individual soul yet present within all as universal consciousness.',
    patterns: ['परमात्मा', 'paramatma', 'paramātma', 'supreme self'],
  },
  loka: {
    labelHi: 'लोक',
    labelEn: 'Loka',
    defHi: 'स्वर्ग, पृथ्वी, ब्रह्मलोक आदि — विभिन्न स्तर के संसार। गीता सिखाती है कि अधिकांश लोक पुनरावर्ती हैं, केवल परम सत्य शाश्वत है।',
    defEn: 'Realms such as earth, heaven, or Brahma\'s world — levels of existence. The Gita teaches that most worlds are cyclic; only the supreme is eternal.',
    patterns: ['ब्रह्मलोक', 'लोकों', 'लोक', 'loka', 'realms'],
  },
  siddhi: {
    labelHi: 'सिद्धि / असिद्धि',
    labelEn: 'Siddhi',
    defHi: 'कर्म का सफल या असफल परिणाम, या योग की विशेष शक्तियाँ। गीता में सिद्धि और असिद्धि दोनों में सम भाव ही योग है।',
    defEn: 'Success or failure in action, or special yogic powers. In the Gita, yoga is equanimity toward both siddhi and failure alike.',
    patterns: ['असिद्धि', 'सिद्धि', 'siddhi', 'success and failure', 'success or failure'],
  },
  phala: {
    labelHi: 'फल / कर्मफल',
    labelEn: 'Phala',
    defHi: 'कर्म का परिणाम, “मुझे क्या मिलेगा” की चिंता। गीता फल की आसक्ति छोड़कर कर्म करने को सिखाती है।',
    defEn: 'The fruit or result of action — the anxious “what will I gain?” The Gita teaches acting without clinging to phala.',
    patterns: ['कर्मफल', 'फल की', 'फल', 'phala', 'fruits of action', 'the outcome'],
  },
  vishaya: {
    labelHi: 'विषय',
    labelEn: 'Vishaya',
    defHi: 'इन्द्रियों के सामने आने वाले पदार्थ — रूप, रस, गन्ध, शब्द, स्पर्श। विषय-चिन्तन ही आसक्ति की जड़ बनता है।',
    defEn: 'Sense objects — sights, tastes, sounds, and the rest. Brooding on vishayas is where attachment takes root.',
    patterns: ['विषयों', 'विषय', 'vishaya', 'viṣaya', 'sense objects'],
  },
  chitta: {
    labelHi: 'चित्त',
    labelEn: 'Chitta',
    defHi: 'मन का गहरा स्तर — स्मृति, भाव, संस्कारों का भंडार। योग में चित्त की शुद्धि और एकाग्रता महत्त्वपूर्ण है।',
    defEn: 'The deeper field of mind — memory, feeling, stored impressions. Yoga seeks the purification and one-pointedness of chitta.',
    patterns: ['चित्त', 'chitta', 'citta', 'consciousness field'],
  },
  chetana: {
    labelHi: 'चेतना',
    labelEn: 'Chetana',
    defHi: 'जीवन-शक्ति, जागरूकता, आत्म-साक्षी की उपस्थिति। गीता में सब प्राणियों में एक ही चेतना देखना ज्ञान है।',
    defEn: 'Life-force, awareness, the presence of conscious being. To see one consciousness in all beings is knowledge.',
    patterns: ['चेतना', 'chetana', 'consciousness'],
  },
  sat: {
    labelHi: 'सत्',
    labelEn: 'Sat',
    defHi: 'वास्तव में स्थित, अविनाशी सत्य। जो सत् है वह कभी नष्ट नहीं; जो असत् है उसका वास्तव में अस्तित्व नहीं।',
    defEn: 'Real, eternal being — that which truly exists and cannot be destroyed. What is asat never truly was.',
    patterns: ['असत्', 'सत्', 'real being', 'never destroyed', 'never truly was'],
  },
  avinashi: {
    labelHi: 'अविनाशी',
    labelEn: 'Avinashi',
    defHi: 'जो नष्ट नहीं हो सकता — आत्मा का स्वभाव। शरीर नाशवान है, पर आत्मा अविनाशी मानी जाती है।',
    defEn: 'That which cannot be destroyed — the nature of the soul. The body perishes, but the atma is held to be avinashi.',
    patterns: ['अविनाशी', 'अविनाशिता', 'avinashi', 'imperishable', 'indestructible'],
  },
  sakshi: {
    labelHi: 'साक्षी',
    labelEn: 'Sakshi',
    defHi: 'देखने वाला, करने वाला नहीं — आत्मा का स्वरूप। हम शरीर-मन की घटनाओं के साक्षी हैं, स्वयं वे घटनाएँ नहीं।',
    defEn: 'The witness, not the doer — the nature of the self. We witness the movements of body and mind without being those movements.',
    patterns: ['साक्षी', 'sakshi', 'sākṣī', 'the witness', 'witness'],
  },
  guru: {
    labelHi: 'गुरु',
    labelEn: 'Guru',
    defHi: 'तत्त्वदर्शी, जो अज्ञान से अज्ञान तक ले जा सके। गीता में गुरु से प्रणाम, प्रश्न और सेवा से ज्ञान लेने को कहा गया है।',
    defEn: 'One who sees truth and can lead from darkness to light. The Gita asks for reverence, sincere inquiry, and service to such a teacher.',
    patterns: ['गुरु', 'guru', 'spiritual teacher'],
  },
  arpana: {
    labelHi: 'अर्पण / समर्पण',
    labelEn: 'Arpana',
    defHi: 'ईश्वर को समर्पित करना — कर्म, फल, मन, सब कुछ। अर्पण का भाव ही कर्म को यज्ञ बनाता है।',
    defEn: 'Offering to God — action, results, mind, all of it. The spirit of arpana turns ordinary work into worship.',
    patterns: ['समर्पण', 'अर्पित', 'अर्पण', 'arpana', 'samarpan'],
  },
  upasana: {
    labelHi: 'उपासना',
    labelEn: 'Upasana',
    defHi: 'ईश्वर के निकट बैठकर — अर्थात् निरंतर ध्यान, प्रेम और श्रद्धा से उनका चिन्तन। उपासना केवल रीति नहीं, जीवंत संबंध है।',
    defEn: 'Sitting near God — continuous meditation, love, and remembrance. Upasana is not mere ritual but a living relationship.',
    patterns: ['उपासना', 'upasana', 'upāsana', 'worship'],
  },
  ananya: {
    labelHi: 'अनन्य भाव',
    labelEn: 'Ananya Bhava',
    defHi: 'विचलित किए बिना, एकमात्र ईश्वर में लगा हुआ मन। “अनन्य” का अर्थ है — दूसरे लक्ष्यों से बँटा हुआ नहीं।',
    defEn: 'Undivided devotion with the mind fixed on God alone. Ananya means not split among competing aims.',
    patterns: ['अनन्य', 'ananya', 'undivided devotion', 'without deviation'],
  },
  yogakshem: {
    labelHi: 'योगक्षेम',
    labelEn: 'Yoga-kshema',
    defHi: 'योग = जो मिला नहीं वह प्राप्त करना; क्षेम = जो मिला है उसकी रक्षा। भक्त के लिए ईश्वर दोनों का वचन देते हैं।',
    defEn: 'Yoga is attaining what one lacks; kshema is preserving what one has. For the devotee, God undertakes both.',
    patterns: ['योगक्षेम', 'yoga-kshema', 'yogakshem', 'what they lack'],
  },
  vishvarupa: {
    labelHi: 'विश्वरूप',
    labelEn: 'Vishvarupa',
    defHi: 'ईश्वर का समस्त ब्रह्माण्ड को समाहित करने वाला विशाल रूप। अर्जुन को यह दर्शन भय, विस्मय और श्रद्धा — तीनों — देता है।',
    defEn: 'God\'s universal form containing all creation. For Arjuna this vision brings fear, wonder, and reverence together.',
    patterns: ['विश्वरूप', 'vishvarupa', 'viśvarūpa', 'universal form', 'cosmic form'],
  },
  kala: {
    labelHi: 'काल',
    labelEn: 'Kala',
    defHi: 'समय, और विश्वरूप में “मैं काल हूँ” — सबको ग्रसने वाला महाकाल। काल से भय उठता है, पर गीता में यह ईश्वरीय शक्ति है।',
    defEn: 'Time — and in the cosmic vision, “I am Time,” the great devourer of all. Kala inspires fear, yet in the Gita it is divine power.',
    patterns: ['महाकाल', 'काल', 'kala', 'kāla', 'lord of time'],
  },
  sanshay: {
    labelHi: 'संशय',
    labelEn: 'Sanshaya',
    defHi: 'मन की दुविधा, “क्या सही है?” की अटक। अर्जुन का संशय मिटने पर ही वह युद्ध के लिए उठ पाता है; संशय अज्ञान का लक्षण है।',
    defEn: 'Doubt, the mind\'s hesitation about what is right. Arjuna rises to act only when sanshaya clears — doubt marks ignorance.',
    patterns: ['संशय', 'sanshaya', 'saṃśaya', 'doubt'],
  },
  ahimsa: {
    labelHi: 'अहिंसा',
    labelEn: 'Ahimsa',
    defHi: 'किसी भी प्राणी को हानि न पहुँचाने का संकल्प — शब्द, विचार और कर्म से। ज्ञानी के लक्षणों में अहिंसा प्रमुख है।',
    defEn: 'The resolve not to harm any being — in word, thought, or deed. Ahimsa is among the chief marks of the wise.',
    patterns: ['अहिंसा', 'ahimsa', 'ahiṃsā', 'non-violence'],
  },
  kshama: {
    labelHi: 'क्षमा',
    labelEn: 'Kshama',
    defHi: 'क्षति के बाद भी क्रोध न रखना, दूसरों की दुर्बलता को सहना। क्षमा कमजोरी नहीं, परिपक्व आत्म-संयम है।',
    defEn: 'Forgiveness — not holding anger after injury, bearing with others\' weakness. Kshama is not weakness but mature self-mastery.',
    patterns: ['क्षमा', 'kshama', 'kṣamā', 'forgiveness'],
  },
  mamata: {
    labelHi: 'ममता',
    labelEn: 'Mamata',
    defHi: '“मेरा” की भावना — वस्तु, व्यक्ति, फल पर अधिकार का भ्रम। ममता, कामना और अहंकार — शान्ति के तीन बंधन।',
    defEn: 'The sense of “mine” — possessiveness toward things, people, or results. Mamata binds the heart along with craving and ego.',
    patterns: ['ममता', 'mamata', 'mamatā', 'mine-ness', 'possessiveness'],
  },
  niyata: {
    labelHi: 'नियत कर्म',
    labelEn: 'Niyata Karma',
    defHi: 'अपनी स्थिति, वर्ण और कर्तव्य के अनुसार निर्धारित कर्म। आलस्य नहीं, बल्कि सही, विधि-सम्मत कार्य।',
    defEn: 'Prescribed duty according to one\'s role and situation — not laziness, but rightful, fitting action.',
    patterns: ['नियत कर्म', 'नियत', 'niyata', 'prescribed duty'],
  },
  ashvattha: {
    labelHi: 'अश्वत्थ',
    labelEn: 'Ashvattha',
    defHi: 'पीपल वृक्ष — गीता में संसार का रूपक। जड़ ऊपर (ईश्वर में), शाखाएँ नीचे; वेद उसके पत्ते। मोक्ष इस वृक्ष को काटकर मिलता है।',
    defEn: 'The sacred fig tree — a metaphor for samsara. Roots above in God, branches below; the Vedas are its leaves. Liberation comes by cutting this tree.',
    patterns: ['अश्वत्थ', 'ashvattha', 'aśvattha', 'sacred fig', 'world tree'],
  },
  daivi: {
    labelHi: 'दैवी सम्पदा',
    labelEn: 'Daivi Sampada',
    defHi: 'दिव्य गुण — अभय, शौच, दया, श्रद्धा, आत्म-संयम। दैवी प्रकृति मनुष्य को ऊपर उठाती है।',
    defEn: 'Divine qualities — fearlessness, purity, compassion, faith, self-control. Daivi nature lifts a person upward.',
    patterns: ['दैवी', 'daivi', 'daivī', 'divine nature', 'divine qualities'],
  },
  asuri: {
    labelHi: 'आसुरी प्रकृति',
    labelEn: 'Asuri Prakriti',
    defHi: 'अहंकार, काम, क्रोध, लोभ, अतृप्ति — अधर्म की ओर ले जाने वाला स्वभाव। गीता इसे पहचानने को कहती है, न कि छिपाने को।',
    defEn: 'Ego, desire, anger, greed, restlessness — temperament that leads toward adharma. The Gita asks us to recognise it honestly.',
    patterns: ['आसुरी', 'asuri', 'āsurī', 'demonic nature', 'demonic temperament'],
  },
  sankhya: {
    labelHi: 'सांख्य',
    labelEn: 'Sankhya',
    defHi: 'आत्मा-पुरुष और प्रकृति के भेद को समझने का दर्शन। गीता का दूसरा अध्याय “सांख्य योग” — ज्ञान और विवेक का मार्ग।',
    defEn: 'The path of discerning spirit from nature, purusha from prakriti. Chapter 2 is Sankhya Yoga — the way of knowledge and discrimination.',
    patterns: ['सांख्य', 'sankhya', 'sāṅkhya', 'discrimination'],
  },
  samadhi: {
    labelHi: 'समाधि',
    labelEn: 'Samadhi',
    defHi: 'मन की पूर्ण एकाग्रता, जहाँ “मैं” की चंचलता शान्त हो। योग का लक्ष्य — विचलन रहित, गहन स्थिर चेतना।',
    defEn: 'Complete one-pointedness of mind, where restless “I” grows still. The aim of yoga — deep, unmoving awareness.',
    patterns: ['समाधि', 'samadhi', 'samādhi'],
  },
  ekagrata: {
    labelHi: 'एकाग्रता',
    labelEn: 'Ekagrata',
    defHi: 'मन का एक ही बिन्दु पर टिका रहना। बिखरे मन से न तो ध्यान, न सही निर्णय, न शान्ति सम्भव।',
    defEn: 'One-pointedness — the mind resting on a single focus. Without ekagrata, neither meditation, right judgment, nor peace is possible.',
    patterns: ['एकाग्र', 'एकाग्रता', 'ekagrata', 'one-pointed', 'one-pointedness'],
  },
  adhogati: {
    labelHi: 'अधोगति',
    labelEn: 'Adhogati',
    defHi: 'आत्म-हानि, नीची ओर गिराव — काम, क्रोध, मोह के वश में जाना। गीता कहती है: अपने मन से उद्धार करो, अधोगति में मत जाओ।',
    defEn: 'Downfall, self-destruction — sinking under desire, anger, or delusion. The Gita says: lift yourself by your mind; do not fall.',
    patterns: ['अधोगति', 'adhogati', 'downfall', 'cast yourself down'],
  },
  antaryami: {
    labelHi: 'अन्तर्यामी',
    labelEn: 'Antaryami',
    defHi: 'सबके भीतर स्थित, सब जानने वाला परमात्मा। बाहर खोजने से पहले, गीता भीतर के साक्षी को पहचानने की ओर ले जाती है।',
    defEn: 'The indwelling Lord who knows all from within. Before seeking outwardly, the Gita turns us toward the witness inside.',
    patterns: ['अन्तर्यामी', 'antaryami', 'antaryāmī', 'indwelling lord'],
  },
  smaran: {
    labelHi: 'स्मरण',
    labelEn: 'Smaran',
    defHi: 'ईश्वर का स्मरण — केवल मृत्यु के समय के लिए नहीं, पूरे जीवन भर। अन्तिम क्षण पूरे जीवन के अभ्यास का फल होता है।',
    defEn: 'Remembrance of God — not only at death but through all of life. The final moment reflects a lifetime\'s practice.',
    patterns: ['स्मरण', 'smaran', 'smaraṇa', 'remembrance'],
  },
  kartritva: {
    labelHi: 'कर्तृत्व',
    labelEn: 'Kartritva',
    defHi: '“मैं करता हूँ” की भावना — अहंकार का मुख्य रूप। गीता सिखाती है कि गुण कर्म करते हैं, कर्तृत्व का गर्व मुक्ति में बाधा है।',
    defEn: 'The sense of doership — “I am acting” — the chief form of ego. The Gita teaches that gunas act; pride of authorship blocks freedom.',
    patterns: ['कर्तृत्व', 'कर्ता', 'kartritva', 'doership', 'the doer'],
  },
  parinam: {
    labelHi: 'परिणाम',
    labelEn: 'Parinam',
    defHi: 'कर्म का फल, परिवर्तन, अन्तिम नतीजा। गीता में अधिकार कर्म पर है, परिणाम पर पूर्ण दावा नहीं।',
    defEn: 'Result, outcome, the fruit of change. In the Gita one has authority over action, not full claim over parinam.',
    patterns: ['परिणाम', 'parinam', 'pariṇāma'],
  },
  dhira: {
    labelHi: 'धीर',
    labelEn: 'Dhira',
    defHi: 'स्थिर, सहनशील, विवेकी — जो सुख-दुःख और जन्म-मरण में विचलित नहीं होता। “धीर” वही है जो मोह से मुक्त देखता है।',
    defEn: 'The steady, patient, discerning one — undisturbed by pleasure, pain, birth, or death. The dhira sees clearly beyond delusion.',
    patterns: ['धीर', 'dhira', 'dhīra', 'steady person'],
  },
  parardharma: {
    labelHi: 'परधर्म',
    labelEn: 'Parardharma',
    defHi: 'दूसरे का धर्म, जो बाहर से आकर्षक दिखे। गीता कहती है: अपना धर्म, चाहे अपूर्ण हो, परधर्म से श्रेष्ठ है।',
    defEn: 'Another\'s dharma, however attractive it may look from outside. The Gita says one\'s own duty, though imperfect, is better.',
    patterns: ['परधर्म', 'parardharma', 'another.*dharma', 'another person.*duty'],
  },
  jnanayajna: {
    labelHi: 'ज्ञानयज्ञ',
    labelEn: 'Jnana-yajna',
    defHi: 'ज्ञान को अर्पित करना — सीखना, सोचना, सत्य को जीवन में उतारना। गीता में यह द्रव्ययज्ञ से भी श्रेष्ठ बताया गया है।',
    defEn: 'The sacrifice of knowledge — learning, reflecting, living truth. The Gita holds it higher even than material sacrifice.',
    patterns: ['ज्ञानयज्ञ', 'jnana-yajna', 'jnana yajna', 'sacrifice of knowledge'],
  },
  tatparya: {
    labelHi: 'तात्पर्य',
    labelEn: 'Tatparya',
    defHi: 'श्लोक का भीतरी अर्थ, केवल शाब्दिक अनुवाद नहीं। तात्पर्य वह गहरा संदेश है जो शब्दों के पीछे छिपा होता है।',
    defEn: 'The inner purport of a verse — not mere literal translation but the deeper message behind the words.',
    patterns: ['तात्पर्य', 'tatparya', 'tātparya'],
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
