export type Lang = 'en' | 'ar'

export const T = {
  en: {
    nav: {
      home: 'Home', about: 'About', services: 'Services',
      pricing: 'Pricing', gallery: 'Gallery',
      testimonials: 'Reviews', faq: 'FAQ', contact: 'Contact',
      book: 'Book Now', langToggle: 'عربي',
    },
    hero: {
      badge: 'Al-Sawadi Beach · Barka, Oman',
      line1: 'Discover Oman',
      line2: 'From The Sky',
      sub: "Premium ultralight flights, skydiving & aerial photography over Oman's breathtaking coastlines — crafted by Ibrahim Al-Ghafri. Fair warning: you may never want to land.",
      cta1: 'Book Now',
      cta2: 'Contact Us',
      scroll: 'Scroll',
    },
    stats: [
      { n: '500+', label: 'Flights Completed' },
      { n: '8 yrs', label: 'Experience' },
      { n: '4.9 ★', label: 'Rating' },
      { n: '100%', label: 'Safety Record' },
    ],
    about: {
      label: 'About',
      title: 'Meet Ibrahim Al-Ghafri',
      body: "Ibrahim Al-Ghafri is Oman's premier aviation adventurer — a licensed ultralight pilot, competitive free-fall skydiver, certified parachute rigger, and aerial photographer. With over 8 years of experience taking passengers above Oman's breathtaking coastlines, he has created unforgettable moments for hundreds of adventurers. (And yes, he lands safely every single time.)",
      rolesTitle: 'Roles',
      roles: ['Pilot ✈️', 'Skydiver 🪂', 'Rigger 🔧', 'Aerial Photographer 📷'],
      teamsTitle: 'Teams',
      teams: ['Oman Free Jump Team', 'Aerial Phenomena Team'],
    },
    services: {
      label: 'What We Offer',
      title: 'Our Services',
      items: [
        { icon: '✈️', title: 'Joy Flights', desc: 'Ultralight aircraft rides over Al-Sawadi Beach and the stunning Barka coastline — breathtaking views from above.' },
        { icon: '🪂', title: 'Skydiving', desc: 'Tandem and free-fall skydiving experiences for thrill-seekers of all levels, from first-timers to trained divers.' },
        { icon: '📷', title: 'Aerial Photography', desc: 'Professional aerial photography and cinematic 4K videography for events, real estate, and personal memories.' },
        { icon: '🔧', title: 'Parachute Rigging', desc: 'Expert parachute packing, maintenance, and certification by certified rigger Ibrahim Al-Ghafri.' },
        { icon: '🌏', title: 'Training Camps', desc: 'International skydiving training camps and events (e.g. Thailand) for serious skydivers.' },
        { icon: '🎪', title: 'Events & Displays', desc: 'Aerial demonstrations and flyovers for national events, festivals, and private functions.' },
      ],
    },
    pricing: {
      label: 'Pricing & Booking',
      title: 'Choose Your Package',
      perPerson: 'per person',
      hoursTitle: 'Working Hours',
      hours: [
        { day: 'Daily', time: '4:00 PM – 7:00 PM' },
        { day: 'Friday & Saturday', time: 'Morning & Evening sessions' },
      ],
      note: '⚠ Advance booking required',
      packageLabel: 'Package',
      bookWA: 'Book via WhatsApp',
      bookIG: 'Book via Instagram',
      packages: [
        {
          num: '01', emoji: '✈️', featured: false, featuredLabel: '',
          name: 'The Experience', subtitle: 'التجربة',
          price: '25', currency: 'OMR',
          features: ['With photography & video editing', '15–20 min flight'],
          note: '⏱ Duration depends on wind speed',
        },
        {
          num: '02', emoji: '🎂', featured: true, featuredLabel: '🎂 Special Package',
          name: 'Birthday Package', subtitle: 'باقة عيد ميلاد',
          price: '50', currency: 'OMR',
          features: ['With photography & video editing', 'Special birthday experience', 'Decorated themed experience'],
          note: '',
        },
        {
          num: '03', emoji: '🌿', featured: false, featuredLabel: '',
          name: 'Salalah Khareef', subtitle: 'خريف ظفار',
          price: '30', currency: 'OMR',
          features: ['With photography & video editing', '15–20 min flight', 'Seasonal Salalah Khareef package'],
          note: '⏱ Duration depends on wind speed',
        },
      ],
    },
    gallery: {
      label: 'Gallery',
      title: 'Life at Altitude',
    },
    testimonials: {
      label: 'Reviews',
      title: 'Voices From the Sky',
      items: [
        {
          quote: "Told my mum I was 'going to the beach'. Technically not a lie. The view from 300 metres made me forget I was terrified five minutes earlier. Ibrahim is suspiciously calm — but he absolutely knows what he's doing.",
          name: 'Mohammed Al-Hinae', meta: 'Joy Flight · 2025', initials: 'MH',
        },
        {
          quote: "I cried twice. Once from nerves before takeoff, and again when I saw Al-Sawadi from above. Ibrahim noticed and said 'the view does that to everyone.' He was right. 10/10, would cry again.",
          name: 'Salma Al-Balushi', meta: 'Aerial Package · 2024', initials: 'SB',
        },
        {
          quote: "My friends bet I'd back out. I didn't. I came back the next day too. They owe me five rials and a sincere apology. Ibrahim — you changed my life. My bank balance has mixed feelings, but my soul is at peace.",
          name: 'Khalid Al-Riyami', meta: 'Skydiving · 2025', initials: 'KR',
        },
      ],
    },
    faq: {
      label: 'Got Questions?',
      title: 'Real Questions, Honest Answers',
      subtitle: 'No spin. Just the truth — with the occasional smile.',
      meter: {
        label: 'Typical passenger fear level',
        scared: '😰 Before',
        brave: 'After 😎',
        note: '✈️ Average transformation time: ~90 seconds after takeoff',
      },
      ctaText: "Still on the fence? That's okay — the view takes care of that in about 30 seconds.",
      ctaBtn: 'Book My Flight Now',
      categories: [
        {
          heading: '😬 Before You Fly',
          items: [
            {
              q: "Is it actually safe? I scare easily.",
              a: "Safer than Oman's highway roundabouts — and considerably more fun. Ibrahim has logged 500+ flights with a perfect safety record. The only casualties so far? A few hairdos that didn't survive the wind.",
            },
            {
              q: "What if I panic mid-air and completely lose it?",
              a: "It happens more than you'd think. We've had stoic businessmen gripping the harness like it personally owed them money, and 'confident' teenagers who forgot what confident meant about 30 seconds in. Ibrahim has seen it all and talked everyone through it calmly. You're in good hands — and if you ask nicely, he'll tell you a terrible joke to distract you.",
            },
            {
              q: "Can I ask to land early if I change my mind?",
              a: "Absolutely. You're not trapped (despite what the harness might suggest). Say the word and you come down. No judgment, no screenshot sent to your family group chat. Scout's honour. Fun fact though: less than 2% of passengers ever actually ask to cut the flight short once they see the view.",
            },
            {
              q: "What should I wear? And what should I definitely NOT wear?",
              a: "Wear: comfortable clothes, closed shoes, your most adventurous attitude. Do NOT wear: heels, loose scarves that could double as propellers, or your 'I'm too cool for this' expression. The sky has a way of rearranging faces.",
            },
            {
              q: "I have a health condition. Can I still fly?",
              a: "Please consult your doctor first — your safety comes before everything. For healthy adults the flight is smooth and peaceful. Honestly, the traffic on the way here is more stressful.",
            },
            {
              q: "What if I need the bathroom mid-flight?",
              a: "Avoid large drinks before flying. Flights are 15–20 minutes — you'll be fine. We are not equipped for in-flight catering or facilities. This is a paragliding operation, not Emirates.",
            },
          ],
        },
        {
          heading: '🛬 After You Land',
          items: [
            {
              q: "Why do I suddenly want to quit my job and become a pilot?",
              a: "The Sky Effect™. Fully documented, completely real, and surprisingly contagious. We recommend sleeping on any major career decisions for at least 48 hours. That said — Ibrahim started exactly where you are right now. Just saying.",
            },
            {
              q: "Is it normal to want to go again immediately?",
              a: "100% normal. We've had passengers who booked the next slot before unclipping their harness. We call them 'lifers'. Welcome to the club — membership is free, flights are not.",
            },
            {
              q: "My friends don't believe how incredible it was. What do I do?",
              a: "Show them the photos and video we captured — included in every package. If they're still sceptical, bring them next time. Peer pressure, but make it scenic and 300 metres above sea level.",
            },
            {
              q: "I'm already planning to come back. How do I book?",
              a: "Now we're talking. Hit the WhatsApp button below — Ibrahim will confirm your slot faster than you can say 'I want to fly again'.",
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Get in Touch',
      title: 'Contact Us',
      location: 'Al-Sawadi Beach, Barka, Oman',
      whatsapp: '+968 93283983',
      instagram: '@fly.om_',
      form: {
        name: 'Full Name', phone: 'Phone Number',
        message: 'Message', date: 'Preferred Date', send: 'Send Message',
      },
    },
    footer: {
      desc: "Oman's premier aviation adventure. Certified, cinematic, unforgettable.",
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      rights: '© 2025 fly.om_  ·  All rights reserved',
      serviceLinks: ['Joy Flights', 'Skydiving', 'Aerial Photography', 'Parachute Rigging'],
      companyLinks: ['About Ibrahim', 'Safety Standards', 'Gallery', 'Reviews'],
      contactLinks: ['WhatsApp', 'Instagram', 'Al-Sawadi Beach'],
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية', about: 'من نحن', services: 'الخدمات',
      pricing: 'الأسعار', gallery: 'المعرض',
      testimonials: 'آراء العملاء', faq: 'الأسئلة', contact: 'تواصل معنا',
      book: 'احجز الآن', langToggle: 'English',
    },
    hero: {
      badge: 'شاطئ السوادي · بركاء، عُمان',
      line1: 'اكتشف عُمان',
      line2: 'من السماء',
      sub: 'رحلات طيران مميزة، قفز حر، وتصوير جوي احترافي فوق سواحل عُمان الخلّابة مع الطيار إبراهيم الغافري. تحذير عادل: قد لا ترغب في الهبوط أبداً.',
      cta1: 'احجز الآن',
      cta2: 'تواصل معنا',
      scroll: 'تمرير',
    },
    stats: [
      { n: '+500', label: 'رحلة مكتملة' },
      { n: '٨ سنوات', label: 'خبرة' },
      { n: '٤.٩ ★', label: 'تقييم' },
      { n: '١٠٠٪', label: 'سجل أمان' },
    ],
    about: {
      label: 'من نحن',
      title: 'إبراهيم الغافري',
      body: 'إبراهيم الغافري طيار طائرات خفيفة مرخّص، وقافز حر منافس، ومعبّئ مظلات معتمد، ومصوّر جوي محترف. مع أكثر من ٨ سنوات من الخبرة في تحليق الركاب فوق سواحل عُمان الخلّابة، أبهر إبراهيم مئات المغامرين بلحظات لا تُنسى. (ونعم، يهبط بأمان في كل مرة.)',
      rolesTitle: 'المناصب',
      roles: ['طيار ✈️', 'قافز حر 🪂', 'معبّئ مظلات 🔧', 'مصوّر جوي 📷'],
      teamsTitle: 'الفرق',
      teams: ['فريق عُمان للقفز الحر', 'فريق الظواهر الجوية'],
    },
    services: {
      label: 'ما نقدّمه',
      title: 'خدماتنا',
      items: [
        { icon: '✈️', title: 'جولات الطيران', desc: 'رحلات بالطائرة الخفيفة فوق شاطئ السوادي وساحل بركاء الرائع — مناظر خلّابة من الأعلى.' },
        { icon: '🪂', title: 'القفز الحر', desc: 'تجارب قفز حر ثنائي وانفرادي للمغامرين من جميع المستويات.' },
        { icon: '📷', title: 'التصوير الجوي', desc: 'تصوير جوي احترافي وفيديو سينمائي ٤K للفعاليات والعقارات والذكريات الشخصية.' },
        { icon: '🔧', title: 'صيانة المظلات', desc: 'تعبئة وصيانة وشهادة المظلات من قِبل المعبّئ المعتمد إبراهيم الغافري.' },
        { icon: '🌏', title: 'المعسكرات التدريبية', desc: 'معسكرات تدريبية دولية وفعاليات قفز حر (مثل تايلاند) للقافزين الجادين.' },
        { icon: '🎪', title: 'الفعاليات والعروض', desc: 'عروض جوية وطيران استعراضي للفعاليات الوطنية والمهرجانات والمناسبات الخاصة.' },
      ],
    },
    pricing: {
      label: 'الأسعار والحجز',
      title: 'اختر باقتك',
      perPerson: 'للشخص الواحد',
      hoursTitle: 'مواعيد العمل',
      hours: [
        { day: 'يومياً', time: 'من ٤:٠٠ م إلى ٧:٠٠ م' },
        { day: 'الجمعة والسبت', time: 'جلسات صباحية ومسائية' },
      ],
      note: '⚠ الحجز المسبق إلزامي',
      packageLabel: 'الباقة',
      bookWA: 'احجز عبر واتساب',
      bookIG: 'احجز عبر إنستغرام',
      packages: [
        {
          num: '٠١', emoji: '✈️', featured: false, featuredLabel: '',
          name: 'التجربة', subtitle: 'The Experience',
          price: '25', currency: 'ر.ع.',
          features: ['مع التصوير والمونتاج', 'من ١٥ إلى ٢٠ دقيقة'],
          note: '⏱ التوقيت يعتمد على سرعة الهواء',
        },
        {
          num: '٠٢', emoji: '🎂', featured: true, featuredLabel: '🎂 باقة مميزة',
          name: 'باقة عيد ميلاد', subtitle: 'Birthday Package',
          price: '50', currency: 'ر.ع.',
          features: ['مع التصوير والمونتاج', 'تجربة عيد ميلاد خاصة', 'ديكور ثيم مميز'],
          note: '',
        },
        {
          num: '٠٣', emoji: '🌿', featured: false, featuredLabel: '',
          name: 'خريف ظفار', subtitle: 'Salalah Khareef',
          price: '30', currency: 'ر.ع.',
          features: ['مع التصوير والمونتاج', 'من ١٥ إلى ٢٠ دقيقة', 'باقة موسمية خاصة لخريف ظفار'],
          note: '⏱ التوقيت يعتمد على سرعة الهواء',
        },
      ],
    },
    gallery: {
      label: 'المعرض',
      title: 'الحياة على الارتفاع',
    },
    testimonials: {
      label: 'آراء العملاء',
      title: 'أصوات من السماء',
      items: [
        {
          quote: 'قلت لوالدتي إنني ذاهب إلى "الشاطئ". وهذا صحيح تقنياً. المنظر من ارتفاع ٣٠٠ متر جعلني أنسى تماماً أنني كنت أرتجف من الخوف قبل خمس دقائق. إبراهيم هادئ بشكل مريب — لكنه يعرف تماماً ما يفعل.',
          name: 'محمد الهنائي', meta: 'رحلة طيران · ٢٠٢٥', initials: 'مح',
        },
        {
          quote: 'بكيت مرتين. مرة من التوتر قبل الإقلاع، ومرة حين رأيت السوادي من الأعلى. لاحظ إبراهيم وقال: "المنظر يفعل هذا بالجميع". كان محقاً تماماً. ١٠ من ١٠، سأبكي مجدداً بكل سرور.',
          name: 'سلمى البلوشية', meta: 'حزمة جوية · ٢٠٢٤', initials: 'سل',
        },
        {
          quote: 'راهنني أصدقائي على أنني سأتراجع. لم أفعل. وعدت في اليوم التالي أيضاً. يدينونني بخمسة رياﻻت واعتذار. إبراهيم — غيّرت حياتي. رصيدي البنكي له رأي آخر، لكن روحي في سلام تام.',
          name: 'خالد الريامي', meta: 'قفز حر · ٢٠٢٥', initials: 'خر',
        },
      ],
    },
    faq: {
      label: 'أسئلة وأجوبة',
      title: 'أسئلة حقيقية، إجابات صريحة',
      subtitle: 'بدون تلميع — فقط الحقيقة، مع ابتسامة أحياناً.',
      meter: {
        label: 'مستوى الخوف عند معظم الركاب',
        scared: '😰 قبل',
        brave: 'بعد 😎',
        note: '✈️ متوسط وقت التحول: نحو ٩٠ ثانية بعد الإقلاع',
      },
      ctaText: 'لا تزال مترددًا؟ لا بأس — المنظر من الأعلى يعالج ذلك في نحو ٣٠ ثانية.',
      ctaBtn: 'احجز رحلتي الآن',
      categories: [
        {
          heading: '😬 قبل الإقلاع',
          items: [
            {
              q: 'هل هو آمن فعلاً؟ أنا أخاف بسهولة.',
              a: 'أكثر أماناً من دوّارات الطريق العُماني — وأكثر متعةً بكثير. أكمل إبراهيم أكثر من ٥٠٠ رحلة بسجل أمان مثالي. الضحايا الوحيدون حتى الآن؟ بعض تسريحات الشعر التي أفسدها الهواء.',
            },
            {
              q: 'ماذا لو أصابني الذعر في الجو وفقدت أعصابي تماماً؟',
              a: 'يحدث هذا أكثر مما تتخيل. رأى إبراهيم مدراء تنفيذيين وقورين يمسكون بحزام الأمان كأنه دَيْن مستحق لهم، ومراهقين "شجعان" نسوا معنى الشجاعة بعد ثلاثين ثانية. مرّ بكل شيء وتحدث مع الجميع بهدوء تام. أنت بأيدٍ أمينة — وإن طلبت، يمكنه إخبارك بنكتة سيئة لتشتيت انتباهك.',
            },
            {
              q: 'هل يمكنني طلب الهبوط مبكراً إن غيّرت رأيي؟',
              a: 'بالتأكيد. لست محاصراً (رغم ما قد يوحي به حزام الأمان). قل الكلمة وننزل. لا حكم، ولا لقطة شاشة ترسل لمجموعة العائلة. وعد شرف. إحصائية مسلّية: أقل من ٢٪ من الركاب يطلبون فعلاً اختصار الرحلة بعد أن يروا المنظر.',
            },
            {
              q: 'ماذا أرتدي؟ وما الذي يجب ألّا أرتديه؟',
              a: 'ارتدِ: ملابس مريحة، وأحذية مغلقة، وثقة بالنفس. لا ترتدِ: كعوباً عالية، أوشحة فضفاضة قد تتحول إلى مراوح، أو تعبير "أنا فوق مستوى المغامرة". السماء لها طريقتها في إعادة ترتيب التعابير.',
            },
            {
              q: 'لدي حالة صحية. هل لا يزال بإمكاني الطيران؟',
              a: 'يرجى استشارة طبيبك أولاً — سلامتك تأتي قبل كل شيء. للبالغين الأصحاء، الرحلة سلسة وهادئة. بصراحة، زحمة السير في الطريق إلى هنا أكثر إجهاداً.',
            },
            {
              q: 'ماذا لو احتجت الحمام أثناء الرحلة؟',
              a: 'تجنّب الإكثار من السوائل قبل الطيران. الرحلات من ١٥ إلى ٢٠ دقيقة — ستتدبّر الأمر. نحن لسنا مجهزين لتقديم وجبات أو مرافق أثناء الطيران. نحن رحلات باراغلايدينغ، لسنا طيران عُمان.',
            },
          ],
        },
        {
          heading: '🛬 بعد الهبوط',
          items: [
            {
              q: 'لماذا أريد فجأة أن أترك عملي وأصبح طياراً؟',
              a: 'تأثير السماء™. موثّق، حقيقي، ومعدٍ بشكل مدهش. نوصي بالانتظار ٤٨ ساعة على الأقل قبل اتخاذ أي قرارات مهنية. لكن في المقابل — إبراهيم بدأ بالضبط من حيث أنت الآن. نقول فقط.',
            },
            {
              q: 'هل من الطبيعي أن أريد الطيران مرة أخرى فوراً؟',
              a: 'طبيعي ١٠٠٪. لدينا ركاب حجزوا الجلسة التالية قبل أن يفكوا حزام الأمان. نسميهم "المدمنين". مرحباً بك في النادي — العضوية مجانية، والرحلات لا.',
            },
            {
              q: 'أصدقائي لا يصدقون كم كانت التجربة رائعة. ماذا أخبرهم؟',
              a: 'أرهم الصور والفيديو اللذين التقطناهما (مضمّنان في كل باقة). إن كانوا لا يزالون متشككين، أحضرهم في المرة القادمة. ضغط الأقران، لكن بمنظر خلّاب على ارتفاع ٣٠٠ متر فوق مستوى البحر.',
            },
            {
              q: 'أخطط بالفعل للعودة. كيف أحجز؟',
              a: 'هذا هو الكلام. اضغط على زر واتساب أدناه — سيؤكد إبراهيم موعدك أسرع مما تقول "أريد الطيران مجدداً".',
            },
          ],
        },
      ],
    },
    contact: {
      label: 'تواصل معنا',
      title: 'تواصل معنا',
      location: 'شاطئ السوادي، بركاء، عُمان',
      whatsapp: '٩٦٨ ٩٣٢٨٣٩٨٣+',
      instagram: '@fly.om_',
      form: {
        name: 'الاسم الكامل', phone: 'رقم الهاتف',
        message: 'الرسالة', date: 'التاريخ المفضّل', send: 'إرسال الرسالة',
      },
    },
    footer: {
      desc: 'تجربة المغامرة الجوية الأولى في عُمان. معتمدة وسينمائية ولا تُنسى.',
      services: 'الخدمات',
      company: 'الشركة',
      contact: 'التواصل',
      rights: '© ٢٠٢٥ fly.om_  ·  جميع الحقوق محفوظة',
      serviceLinks: ['جولات الطيران', 'القفز الحر', 'التصوير الجوي', 'صيانة المظلات'],
      companyLinks: ['من نحن', 'معايير السلامة', 'المعرض', 'آراء العملاء'],
      contactLinks: ['واتساب', 'إنستغرام', 'شاطئ السوادي'],
    },
  },
}
