/* ============================================================
   Velora Car Care — i18n (English / Arabic)
   Language choice is stored in localStorage under "site-lang"
   so it stays the same when the user moves between pages.
   ============================================================ */

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_stats: "Stats",
    nav_comparison: "Before & After",
    nav_services: "Services",
    nav_benefits: "Benefits",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_book: "Book Now",

    // Hero
    hero_eyebrow: "Premium Auto Care",
    hero_title: "Luxury car care for every drive.",
    hero_desc:
      "From deep cleaning and detailing to oil changes, electrical maintenance, and pre-sale inspections, Velora brings showroom-level care to your vehicle.",
    hero_btn_explore: "Explore Services",
    hero_btn_book: "Book a Service",

    // About
    about_eyebrow: "About Us",
    about_title: "Detailing expertise with real craftsmanship.",
    about_p1:
      "Velora is a premium automotive care studio designed for drivers who want their vehicles to look, feel, and perform at their best. We combine professional detailing, mechanical care, and customer-focused support in one trusted environment.",
    about_p2:
      "Our mission is simple: deliver a clean, safe, and confident driving experience using careful inspections, premium products, and the latest care standards.",
    about_h1_title: "Professional Standard",
    about_h1_desc: "Care routines built around precision and long-lasting results.",
    about_h2_title: "Customer Care",
    about_h2_desc: "Clear communication, trusted advice, and dependable scheduling.",

    // KPI
    kpi_eyebrow: "Our Impact",
    kpi_title: "Trusted by thousands of drivers.",
    kpi_label_cars: "Cars Serviced",
    kpi_label_satisfaction: "% Satisfaction",
    kpi_label_services: "Services Completed",
    kpi_label_years: "Years Experience",

    // Comparison
    comparison_eyebrow: "Before & After",
    comparison_title: "See the transformation.",
    comparison_car1: "Car 1",
    comparison_car2: "Car 2",
    comparison_before: "Before",
    comparison_after: "After",

    // Services
    services_eyebrow: "Services",
    services_title: "Complete care for your vehicle.",
    services_desc: "Select one or more services below.",
    service_select: "Select Service",
    service_selected: "Selected — Tap to remove",
    service_starting_at: "Starting at",

    // Benefits
    benefits_eyebrow: "After Service",
    benefits_title: "Benefits that keep your vehicle in prime condition.",
    benefit1_title: "Vehicle Data Storage",
    benefit1_desc:
      "Your complete vehicle history is securely stored in our system. We maintain detailed records of every service, repair, and maintenance performed on your car. This makes it easy to track your vehicle's health and access past information whenever you need it.",
    benefit2_title: "Maintenance Reminders",
    benefit2_desc:
      "We keep you informed about your vehicle's maintenance schedule. Our team sends timely reminders about upcoming services, oil changes, inspections, and warranty dates. Never miss an important maintenance deadline again.",
    benefit3_title: "Future Discounts",
    benefit3_desc:
      "Loyalty matters at Velora. Every service you book earns you rewards and exclusive discounts on future visits. Our valued customers enjoy special pricing, priority scheduling, and access to premium services at reduced rates.",

    // Reviews
    reviews_eyebrow: "Customer Reviews",
    reviews_title: "Trusted by drivers who care about their vehicles.",

    // Footer
    footer_desc:
      "Premium care for modern drivers — from deep cleaning to intelligent maintenance and mechanical peace of mind.",
    footer_quicklinks: "Quick Links",
    footer_services_heading: "Services",
    footer_service1: "Exterior Cleaning",
    footer_service2: "Interior Cleaning",
    footer_service3: "Oil Change",
    footer_service4: "Electrical Repair",
    footer_service5: "Pre-Sale Inspection",
    footer_contact_heading: "Contact",
    footer_address: "Obour City, Egypt",
    footer_copyright: "© 2026 Velora Car Care. All rights reserved.",

    // Booking dock (floating cart)
    booking_dock_title: "Your Booking",
    booking_dock_total: "Total",
    booking_dock_book_now: "Book Now",
    booking_dock_alert: "Please select at least one service before booking.",
    booking_dock_subtitle_zero: "0 services selected",
    booking_dock_subtitle_n: (n) => `${n} service${n > 1 ? "s" : ""} selected`,

    // Language toggle
    lang_toggle_label: "العربية",

    // Contact page
    contact_eyebrow: "Contact Us",
    contact_title: "We are here for your vehicle.",
    contact_desc:
      "Need a trusted car care partner? Reach out anytime and we will help you choose the right service for your vehicle.",
    contact_card1_title: "WhatsApp",
    contact_card1_desc: "Quickly chat with our team for service availability, pricing, and support.",
    contact_card1_link: "Chat on WhatsApp",
    contact_card2_title: "Phone Call",
    contact_card2_desc: "Speak directly with our team for fast booking and assistance.",
    contact_card2_link: "Call Now",
    contact_card3_title: "Email",
    contact_card3_desc: "Send your inquiry and we will contact you as soon as possible.",
    contact_card3_link: "Email Us",

    // Booking page
    booking_eyebrow: "Booking",
    booking_title: "Reserve your service",
    booking_desc: "Complete your details and confirm your appointment.",
    label_phone: "Customer Phone Number",
    label_plate: "Car Number / Plate Number",
    label_cartype: "Car Type",
    option_select_cartype: "Select Car Type",
    option_sedan: "Sedan",
    option_suv: "SUV",
    option_sports: "Sports Car",
    option_luxury: "Luxury",
    option_truck: "Truck",
    option_other: "Other",
    label_name: "Customer Name",
    label_mileage: "Vehicle Mileage / KM",
    label_date: "Booking Date",
    label_time: "Booking Time",
    btn_confirm: "Confirm Booking",
    btn_back: "Back to Services",
    booking_summary_title: "Booking Summary",
    booking_summary_desc: "Submit your form to receive a queue number.",
    selected_services_title: "Selected Services",
    summary_total: "Total",
    modal_success_title: "Your booking has been registered successfully.",
    modal_go_home: "Go to Home",
    modal_error_title: "Customer Already Registered",
    modal_error_desc: "Your data is already registered. Please review your information.",
    modal_review_btn: "Review Information",

    // Booking page dynamic messages (book.js)
    msg_select_service: "Please select at least one service before booking.",
    msg_past_date: "Please choose today's date or a future date for your booking.",
    msg_existing_notice:
      "Your information is already registered. Please review your existing booking details.",
    msg_existing_modal:
      "Your data is already registered. Please review/check your existing information.",
    msg_no_services: "No services selected. Please return to the Services page.",
    modal_queue_label: "Your queue number is:",
    modal_detail_customer: "Customer",
    modal_detail_queue: "Queue Number",
    modal_detail_vehicle: "Vehicle",
    modal_detail_plate: "Plate",
    modal_detail_appointment: "Appointment",
    modal_detail_total: "Total Price",

    // Services data (script.js)
    services: [
      {
        id: 1,
        tag: "Car Cleaning",
        icon: "🧽",
        title: "Exterior Detailing",
        description: "Hand wash, clay bar, and premium polish for a showroom finish.",
        price: 120,
        image: "image/carwashOUT.jpg"
      },
      {
        id: 2,
        tag: "Car Cleaning",
        icon: "🧴",
        title: "Interior Detailing",
        description: "Deep vacuum, upholstery care, and full interior sanitization.",
        price: 140,
        image: "image/carwashingINSIDE.jpg"
      },
      {
        id: 3,
        tag: "Maintenance",
        icon: "🛢️",
        title: "Oil Change",
        description: "Complete oil and filter replacement using premium-grade oil.",
        price: 180,
        image: "image/Oilchange.jpg"
      },
      {
        id: 4,
        tag: "Diagnostics",
        icon: "⚡",
        title: "Electrical Fault Maintenance",
        description: "Full electrical diagnosis, fault tracing, and expert repair.",
        price: 220,
        image: "image/Electrick.jpg"
      },
      {
        id: 5,
        tag: "Inspection",
        icon: "🔍",
        title: "Pre-Sale Car Inspection",
        description: "Thorough multi-point check-up before you sell or buy a vehicle.",
        price: 260,
        image: "image/cheack.jpg"
      }
    ],

    // Reviews data (script.js)
    reviews: [
      { name: "Omar H.", rating: "★★★★★", comment: "The car was spotless inside and out. The team was very professional and the service felt premium from start to finish." },
      { name: "Hassan K.", rating: "★★★★★", comment: "I booked an inspection before selling my car and the report was thorough. The experience was smooth and honest." },
      { name: "Yousef A.", rating: "★★★★★", comment: "Their detailing work is exceptional. My car looks better than the day I bought it." },
      { name: "Nadim R.", rating: "★★★★★", comment: "The oil change and diagnostics were quick, transparent, and affordable. I'll definitely return." },
      { name: "Ali M.", rating: "★★★★★", comment: "Great attention to detail and amazing customer service. My car feels brand new." },
      { name: "Fahad S.", rating: "★★★★★", comment: "Very clean process, excellent communication, and a premium finish. Highly recommended." },
      { name: "Karim M.", rating: "★★★★★", comment: "Professional team, quality service, and they really care about customer satisfaction." },
      { name: "Amr Z.", rating: "★★★★★", comment: "Best car care service I've ever used. The attention to detail is incredible." },
      { name: "Jamal K.", rating: "★★★★★", comment: "Worth every penny. My car looks showroom-ready and runs perfectly. Highly trusted." }
    ]
  },

  ar: {
    // Navbar
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_stats: "إحصائياتنا",
    nav_comparison: "قبل وبعد",
    nav_services: "خدماتنا",
    nav_benefits: "المميزات",
    nav_reviews: "آراء العملاء",
    nav_contact: "تواصل معنا",
    nav_book: "احجز الآن",

    // Hero
    hero_eyebrow: "عناية متميزة بالسيارات",
    hero_title: "عناية فاخرة بسيارتك في كل رحلة.",
    hero_desc:
      "من التنظيف العميق والتلميع إلى تغيير الزيت والصيانة الكهربائية وفحص ما قبل البيع، تقدّم فيلورا لسيارتك عناية بمستوى صالات العرض.",
    hero_btn_explore: "استكشف خدماتنا",
    hero_btn_book: "احجز خدمة",

    // About
    about_eyebrow: "من نحن",
    about_title: "خبرة في التلميع بحرفية حقيقية.",
    about_p1:
      "فيلورا هو مركز عناية متميز بالسيارات مصمم للسائقين الذين يريدون لسياراتهم أن تبدو وتشعر وتعمل بأفضل حالاتها. نجمع بين التلميع الاحترافي، والعناية الميكانيكية، ودعم يركز على العميل في بيئة موثوقة واحدة.",
    about_p2:
      "مهمتنا بسيطة: نقدّم تجربة قيادة نظيفة وآمنة وواثقة من خلال فحوصات دقيقة، ومنتجات فاخرة، وأحدث معايير العناية بالسيارات.",
    about_h1_title: "معايير احترافية",
    about_h1_desc: "روتين عناية مبني على الدقة ونتائج تدوم طويلاً.",
    about_h2_title: "رعاية العملاء",
    about_h2_desc: "تواصل واضح، ونصائح موثوقة، ومواعيد يمكن الاعتماد عليها.",

    // KPI
    kpi_eyebrow: "إنجازاتنا",
    kpi_title: "موثوق به من آلاف السائقين.",
    kpi_label_cars: "سيارة تمت خدمتها",
    kpi_label_satisfaction: "% نسبة الرضا",
    kpi_label_services: "خدمة مكتملة",
    kpi_label_years: "سنوات خبرة",

    // Comparison
    comparison_eyebrow: "قبل وبعد",
    comparison_title: "شاهد الفرق بنفسك.",
    comparison_car1: "السيارة 1",
    comparison_car2: "السيارة 2",
    comparison_before: "قبل",
    comparison_after: "بعد",

    // Services
    services_eyebrow: "خدماتنا",
    services_title: "عناية شاملة لسيارتك.",
    services_desc: "اختر خدمة واحدة أو أكثر من القائمة أدناه.",
    service_select: "اختر الخدمة",
    service_selected: "تم الاختيار — اضغط للإزالة",
    service_starting_at: "يبدأ من",

    // Benefits
    benefits_eyebrow: "بعد الخدمة",
    benefits_title: "مزايا تحافظ على سيارتك في أفضل حالاتها.",
    benefit1_title: "حفظ بيانات السيارة",
    benefit1_desc:
      "يتم تخزين السجل الكامل لسيارتك بأمان في نظامنا. نحتفظ بسجلات تفصيلية لكل خدمة وإصلاح وصيانة تمت لسيارتك، مما يسهّل متابعة حالتها والرجوع إلى بياناتها السابقة في أي وقت.",
    benefit2_title: "تذكيرات الصيانة",
    benefit2_desc:
      "نبقيك على اطلاع دائم بجدول صيانة سيارتك. يرسل فريقنا تذكيرات في الوقت المناسب بالخدمات القادمة وتغييرات الزيت والفحوصات ومواعيد الضمان، حتى لا يفوتك أي موعد صيانة مهم.",
    benefit3_title: "خصومات مستقبلية",
    benefit3_desc:
      "الولاء يهمنا في فيلورا. كل خدمة تحجزها تمنحك مكافآت وخصومات حصرية على زياراتك القادمة. يستمتع عملاؤنا المميزون بأسعار خاصة، وأولوية في المواعيد، وإمكانية الوصول لخدمات فاخرة بأسعار مخفضة.",

    // Reviews
    reviews_eyebrow: "آراء العملاء",
    reviews_title: "موثوق به من السائقين المهتمين بسياراتهم.",

    // Footer
    footer_desc:
      "عناية متميزة للسائقين العصريين — من التنظيف العميق إلى الصيانة الذكية وراحة بال ميكانيكية كاملة.",
    footer_quicklinks: "روابط سريعة",
    footer_services_heading: "الخدمات",
    footer_service1: "تنظيف خارجي",
    footer_service2: "تنظيف داخلي",
    footer_service3: "تغيير الزيت",
    footer_service4: "إصلاح كهربائي",
    footer_service5: "فحص ما قبل البيع",
    footer_contact_heading: "تواصل معنا",
    footer_address: "مدينة العبور، مصر",
    footer_copyright: "© 2026 فيلورا لعناية السيارات. جميع الحقوق محفوظة.",

    // Booking dock (floating cart)
    booking_dock_title: "حجزك",
    booking_dock_total: "الإجمالي",
    booking_dock_book_now: "احجز الآن",
    booking_dock_alert: "برجاء اختيار خدمة واحدة على الأقل قبل الحجز.",
    booking_dock_subtitle_zero: "تم اختيار 0 خدمة",
    booking_dock_subtitle_n: (n) => (n === 1 ? "تم اختيار خدمة واحدة" : `تم اختيار ${n} خدمات`),

    // Language toggle
    lang_toggle_label: "English",

    // Contact page
    contact_eyebrow: "تواصل معنا",
    contact_title: "نحن هنا من أجل سيارتك.",
    contact_desc:
      "تبحث عن شريك موثوق للعناية بسيارتك؟ تواصل معنا في أي وقت وسنساعدك على اختيار الخدمة المناسبة لسيارتك.",
    contact_card1_title: "واتساب",
    contact_card1_desc: "تواصل سريعًا مع فريقنا لمعرفة توفر الخدمة والأسعار والدعم.",
    contact_card1_link: "تواصل عبر واتساب",
    contact_card2_title: "اتصال هاتفي",
    contact_card2_desc: "تحدث مباشرة مع فريقنا للحجز السريع والمساعدة.",
    contact_card2_link: "اتصل الآن",
    contact_card3_title: "البريد الإلكتروني",
    contact_card3_desc: "أرسل استفسارك وسنتواصل معك في أقرب وقت ممكن.",
    contact_card3_link: "راسلنا",

    // Booking page
    booking_eyebrow: "الحجز",
    booking_title: "احجز خدمتك",
    booking_desc: "أكمل بياناتك وأكّد موعدك.",
    label_phone: "رقم هاتف العميل",
    label_plate: "رقم لوحة السيارة",
    label_cartype: "نوع السيارة",
    option_select_cartype: "اختر نوع السيارة",
    option_sedan: "سيدان",
    option_suv: "دفع رباعي",
    option_sports: "سيارة رياضية",
    option_luxury: "فاخرة",
    option_truck: "شاحنة",
    option_other: "أخرى",
    label_name: "اسم العميل",
    label_mileage: "عداد المسافة (كم)",
    label_date: "تاريخ الحجز",
    label_time: "وقت الحجز",
    btn_confirm: "تأكيد الحجز",
    btn_back: "العودة إلى الخدمات",
    booking_summary_title: "ملخص الحجز",
    booking_summary_desc: "أرسل النموذج لتحصل على رقم دورك.",
    selected_services_title: "الخدمات المختارة",
    summary_total: "الإجمالي",
    modal_success_title: "تم تسجيل حجزك بنجاح.",
    modal_go_home: "الذهاب للرئيسية",
    modal_error_title: "العميل مسجل بالفعل",
    modal_error_desc: "بياناتك مسجلة بالفعل. برجاء مراجعة معلوماتك.",
    modal_review_btn: "مراجعة المعلومات",

    // Booking page dynamic messages (book.js)
    msg_select_service: "برجاء اختيار خدمة واحدة على الأقل قبل الحجز.",
    msg_past_date: "برجاء اختيار تاريخ اليوم أو تاريخ لاحق لحجزك.",
    msg_existing_notice: "بياناتك مسجلة بالفعل. برجاء مراجعة تفاصيل حجزك الحالية.",
    msg_existing_modal: "بياناتك مسجلة بالفعل. برجاء مراجعة/التحقق من معلوماتك الحالية.",
    msg_no_services: "لم يتم اختيار أي خدمة. برجاء العودة إلى صفحة الخدمات.",
    modal_queue_label: "رقم دورك هو:",
    modal_detail_customer: "العميل",
    modal_detail_queue: "رقم الدور",
    modal_detail_vehicle: "السيارة",
    modal_detail_plate: "رقم اللوحة",
    modal_detail_appointment: "الموعد",
    modal_detail_total: "السعر الإجمالي",

    // Services data (script.js)
    services: [
      {
        id: 1,
        tag: "تنظيف السيارات",
        icon: "🧽",
        title: "تلميع خارجي",
        description: "غسيل يدوي، وكلاي بار، وتلميع فاخر للحصول على لمسة صالة العرض.",
        price: 120,
        image: "image/carwashOUT.jpg"
      },
      {
        id: 2,
        tag: "تنظيف السيارات",
        icon: "🧴",
        title: "تلميع داخلي",
        description: "شفط عميق، والعناية بالمقاعد، وتعقيم كامل للمقصورة الداخلية.",
        price: 140,
        image: "image/carwashingINSIDE.jpg"
      },
      {
        id: 3,
        tag: "الصيانة",
        icon: "🛢️",
        title: "تغيير الزيت",
        description: "تغيير كامل للزيت والفلتر باستخدام زيت فاخر.",
        price: 180,
        image: "image/Oilchange.jpg"
      },
      {
        id: 4,
        tag: "الفحص الفني",
        icon: "⚡",
        title: "صيانة الأعطال الكهربائية",
        description: "تشخيص كهربائي كامل، وتحديد الأعطال، وإصلاح على يد خبراء.",
        price: 220,
        image: "image/Electrick.jpg"
      },
      {
        id: 5,
        tag: "الفحص",
        icon: "🔍",
        title: "فحص السيارة قبل البيع",
        description: "فحص شامل متعدد النقاط قبل بيع أو شراء سيارتك.",
        price: 260,
        image: "image/cheack.jpg"
      }
    ],

    // Reviews data (script.js)
    reviews: [
      { name: "عمر ح.", rating: "★★★★★", comment: "كانت السيارة نظيفة تمامًا من الداخل والخارج. الفريق كان محترفًا جدًا وشعرت بخدمة فاخرة من البداية للنهاية." },
      { name: "حسن ك.", rating: "★★★★★", comment: "حجزت فحصًا قبل بيع سيارتي وكان التقرير شاملاً. كانت التجربة سلسة وصادقة." },
      { name: "يوسف أ.", rating: "★★★★★", comment: "أعمال التلميع لديهم استثنائية. سيارتي أصبحت تبدو أفضل من يوم شرائها." },
      { name: "نديم ر.", rating: "★★★★★", comment: "كان تغيير الزيت والفحص سريعًا وشفافًا وبسعر مناسب. بالتأكيد سأعود مرة أخرى." },
      { name: "علي م.", rating: "★★★★★", comment: "اهتمام رائع بالتفاصيل وخدمة عملاء ممتازة. سيارتي تشعر وكأنها جديدة تمامًا." },
      { name: "فهد س.", rating: "★★★★★", comment: "إجراءات نظيفة جدًا، وتواصل ممتاز، ولمسة نهائية فاخرة. أنصح به بشدة." },
      { name: "كريم م.", rating: "★★★★★", comment: "فريق محترف، وخدمة عالية الجودة، ويهتمون فعلاً برضا العملاء." },
      { name: "عمرو ز.", rating: "★★★★★", comment: "أفضل خدمة عناية بالسيارات جربتها على الإطلاق. الاهتمام بالتفاصيل مذهل." },
      { name: "جمال ك.", rating: "★★★★★", comment: "يستحق كل قرش. سيارتي أصبحت جاهزة لصالة العرض وتعمل بشكل مثالي. جدير بالثقة الكاملة." }
    ]
  }
};

// ---------- Core helpers ----------

function getLang() {
  return localStorage.getItem("site-lang") || "en";
}

function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key] !== undefined)
    ? translations[lang][key]
    : translations.en[key];
}

function applyLanguage(lang) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dir);
  document.body.classList.toggle("lang-ar", lang === "ar");

  // Plain text elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (typeof value === "string") el.textContent = value;
  });

  // Placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = t(key);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  // Language toggle button label(s)
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    const labelEl = btn.querySelector(".lang-toggle-label") || btn;
    labelEl.textContent = t("lang_toggle_label");
  });
}

function setLanguage(lang) {
  localStorage.setItem("site-lang", lang);
  applyLanguage(lang);
  // Let page-specific scripts (dynamic services/reviews, booking summary, etc.)
  // know the language changed so they can re-render their own content.
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function initLanguageToggle() {
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(getLang() === "ar" ? "en" : "ar");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(getLang());
  initLanguageToggle();
});
