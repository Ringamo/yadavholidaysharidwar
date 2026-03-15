import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        packages: 'Tour Packages',
        taxi: 'Taxi Services',
        charDham: 'Char Dham Yatra',
        gallery: 'Gallery',
        contact: 'Contact',
        planTrip: 'Plan Your Trip'
      },
      hero: {
        badge: 'Pan-India Service Available',
        title1: 'Extraordinary',
        title2: 'travel experiences.',
        subtitle: 'Exploring India is an unforgettable adventure. From Haridwar to every corner of the nation.',
        cta: 'Enquire Now',
        call: 'Call Us'
      },
      stats: {
        customers: 'Total Customers',
        experience: 'Years Of Experience',
        destinations: 'Total Destinations',
        rating: 'Average Rating'
      },
      intro: {
        badge: 'Best location',
        title: 'All India tourism',
        description: 'Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people from Haridwar to Kanyakumari.'
      },
      whyChoose: {
        title: 'Why Choose Yadav Holidays?',
        subtitle: 'We go the extra mile to make your journey special.',
        expTitle: '15+ Years Experience',
        expDesc: "Deep knowledge of India's terrain and spiritual significance across all states.",
        custTitle: 'Customer First Approach',
        custDesc: 'Personalized attention to every traveler, ensuring comfort and satisfaction throughout India.',
        taxiTitle: 'Reliable Taxi Service',
        taxiDesc: 'Well-maintained vehicles and experienced drivers for your safety on any Indian road.'
      },
      packages: {
        title: 'Featured Tour Packages',
        viewAll: 'View All Packages',
        from: 'From',
        viewPackage: 'View Package',
        charDham: {
          title: 'Complete Char Dham Yatra',
          duration: '11 Nights / 12 Days',
        },
        rajasthan: {
          title: 'Royal Rajasthan Heritage Tour',
          duration: '7 Nights / 8 Days',
        },
        kerala: {
          title: 'Kerala Backwaters & Hills',
          duration: '5 Nights / 6 Days',
        },
        kedarnath: {
          title: 'Kedarnath Special Tour',
          duration: '3 Nights / 4 Days',
        },
        goa: {
          title: 'Vibrant Goa Beach Vacation',
          duration: '3 Nights / 4 Days',
        },
      },
      taxi: {
        title: 'Our Taxi Services',
        subtitle: 'Premium vehicles for safe and comfortable travel across India.',
        sedan: {
          type: 'Sedan (Swift Dzire/Etios)',
          desc: 'Perfect for small families and Pan-India outstation tours.',
        },
        suv: {
          type: 'SUV (Innova Crysta/Ertiga)',
          desc: 'Comfortable for long distance All India journeys.',
        },
        tempo: {
          type: 'Tempo Traveller',
          desc: 'Best for large groups and All India pilgrimage tours.',
        },
      },
      footer: {
        desc: 'Your trusted travel partner for Pan-India tours. Specializing in Char Dham Yatra, All India taxi services, and customized heritage tours across the nation.',
        quickLinks: 'Quick Links',
        popularTours: 'Popular Tours',
        contactUs: 'Contact Us',
        rights: 'All rights reserved.'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        about: 'हमारे बारे में',
        packages: 'टूर पैकेज',
        taxi: 'टैक्सी सेवाएं',
        charDham: 'चार धाम यात्रा',
        gallery: 'गैलरी',
        contact: 'संपर्क',
        planTrip: 'यात्रा की योजना बनाएं'
      },
      hero: {
        badge: 'अखिल भारतीय सेवा उपलब्ध',
        title1: 'असाधारण',
        title2: 'यात्रा अनुभव।',
        subtitle: 'भारत की खोज एक अविस्मरणीय साहसिक कार्य है। हरिद्वार से देश के हर कोने तक।',
        cta: 'अभी पूछताछ करें',
        call: 'हमें कॉल करें'
      },
      stats: {
        customers: 'कुल ग्राहक',
        experience: 'वर्षों का अनुभव',
        destinations: 'कुल गंतव्य',
        rating: 'औसत रेटिंग'
      },
      intro: {
        badge: 'सर्वश्रेष्ठ स्थान',
        title: 'अखिल भारतीय पर्यटन',
        description: 'असाधारण प्राकृतिक सुंदरता, समृद्ध संस्कृति का आनंद लें, और हरिद्वार से कन्याकुमारी तक स्थानीय लोगों की मित्रता का अनुभव करें।'
      },
      whyChoose: {
        title: 'यादव हॉलिडेज क्यों चुनें?',
        subtitle: 'हम आपकी यात्रा को विशेष बनाने के लिए अतिरिक्त प्रयास करते हैं।',
        expTitle: '15+ वर्षों का अनुभव',
        expDesc: 'सभी राज्यों में भारत के भूभाग और आध्यात्मिक महत्व का गहरा ज्ञान।',
        custTitle: 'ग्राहक प्रथम दृष्टिकोण',
        custDesc: 'प्रत्येक यात्री पर व्यक्तिगत ध्यान, पूरे भारत में आराम और संतुष्टि सुनिश्चित करना।',
        taxiTitle: 'विश्वसनीय टैक्सी सेवा',
        taxiDesc: 'किसी भी भारतीय सड़क पर आपकी सुरक्षा के लिए अच्छी तरह से रखरखाव वाले वाहन और अनुभवी ड्राइवर।'
      },
      packages: {
        title: 'विशेष टूर पैकेज',
        viewAll: 'सभी पैकेज देखें',
        from: 'से',
        viewPackage: 'पैकेज देखें',
        charDham: {
          title: 'पूर्ण चार धाम यात्रा',
          duration: '11 रातें / 12 दिन',
        },
        rajasthan: {
          title: 'रॉयल राजस्थान हेरिटेज टूर',
          duration: '7 रातें / 8 दिन',
        },
        kerala: {
          title: 'केरल बैकवाटर्स और हिल्स',
          duration: '5 रातें / 6 दिन',
        },
        kedarnath: {
          title: 'केदारनाथ विशेष टूर',
          duration: '3 रातें / 4 दिन',
        },
        goa: {
          title: 'जीवंत गोवा बीच वेकेशन',
          duration: '3 रातें / 4 दिन',
        },
      },
      taxi: {
        title: 'हमारी टैक्सी सेवाएं',
        subtitle: 'पूरे भारत में सुरक्षित और आरामदायक यात्रा के लिए प्रीमियम वाहन।',
        sedan: {
          type: 'सेडान (स्विफ्ट डिजायर/एटिओस)',
          desc: 'छोटे परिवारों और अखिल भारतीय आउटस्टेशन दौरों के लिए बिल्कुल सही।',
        },
        suv: {
          type: 'एसयूवी (इनोवा क्रिस्टा/अर्टिगा)',
          desc: 'लंबी दूरी की अखिल भारतीय यात्राओं के लिए आरामदायक।',
        },
        tempo: {
          type: 'टेम्पो ट्रैवलर',
          desc: 'बड़े समूहों और अखिल भारतीय तीर्थ यात्राओं के लिए सर्वश्रेष्ठ।',
        },
      },
      footer: {
        desc: 'अखिल भारतीय दौरों के लिए आपका भरोसेमंद यात्रा साथी। चार धाम यात्रा, अखिल भारतीय टैक्सी सेवाओं और देश भर में अनुकूलित विरासत दौरों में विशेषज्ञता।',
        quickLinks: 'त्वरित लिंक',
        popularTours: 'लोकप्रिय टूर',
        contactUs: 'संपर्क करें',
        rights: 'सर्वाधिकार सुरक्षित।'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
