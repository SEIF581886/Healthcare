// ======================================
// Gammal Tech Database Manager
// ======================================

// قراءة قاعدة البيانات
async function getDatabase() {
    try {
        const data = await GammalTech.user.get();
        return data || {};
    } catch (error) {
        console.error("Error reading data:", error);
        return {};
    }
}

// حفظ قاعدة البيانات
async function saveDatabase(database) {
    try {
        await GammalTech.user.save(database);
        return true;
    } catch (error) {
        console.error("Error saving data:", error);
        return false;
    }
}

// إنشاء قاعدة البيانات الافتراضية
async function createDatabase() {
    const database = {
        profile: {
            id: Date.now(),
            name: "",
            email: "",
            phone: "",
            age: "",
            weight: "",
            height: "",

            health: {
                gender: "",
                bloodType: "",
                bloodPressure: "",
                heartRate: "",
                bloodSugar: "",
                hba1c: "",
                cholesterol: "",
                smoker: false,
                exercise: "",
                sleep: "",
                stress: "",

                familyHistory: [],
                diseases: [],
                medications: [],
                allergies: [],
                symptoms: [],

                scans: [],
                tests: [],
                documents: [],

                ai: {
                    lastAnalysis: "",
                    risks: [],
                    recommendations: [],
                    prevention: []
                }
            }
        },

        settings: {
            language: "Arabic",
            notifications: true,
            color: "#2563EB"
        },

        services: [],
        messages: [],
        notifications: [],
        files: [],
        notes: [],
        operations: []
    };

    await saveDatabase(database);
    console.log("Database created successfully");
}

// إعادة ضبط قاعدة البيانات
async function resetDatabase() {
    await createDatabase();
}


// ====================================================================
// دالة حقن 10 حالات مرضية وهمية ومتنوعة لاختبار التنبؤ بالذكاء الاصطناعي
// ====================================================================
async function injectPatientData(patientIndex) {
    // مصفوفة تحتوي على 10 بروفايلات لمرضى مختلفين تماماً لمشاهدة قوة الـ AI في التنبؤ
    const patients = [
        // 1. مريض يعاني من بوادر سكري وضغط مرتفع
        {
            name: "أحمد السيد (بوادر سكري وضغط)",
            age: "48", weight: "96", height: "172",
            health: {
                gender: "ذكر", bloodType: "O+", bloodPressure: "145/92", heartRate: "82",
                bloodSugar: "155", hba1c: "6.8", cholesterol: "230", smoker: true,
                exercise: "نادر جداً", sleep: "5 ساعات غير منتظمة", stress: "مرتفع",
                familyHistory: ["السكري من الدرجة الأولى (الأب)"], diseases: [], medications: [],
                allergies: ["البنسلين"], symptoms: ["إرهاق مستمر", "عطش زائد ليلاً"]
            }
        },
        // 2. شابة رياضية خالية من الأمراض (حالة سليمة تماماً)
        {
            name: "سارة محمود (رياضية سليمة)",
            age: "24", weight: "58", height: "165",
            health: {
                gender: "أنثى", bloodType: "A+", bloodPressure: "115/75", heartRate: "62",
                bloodSugar: "85", hba1c: "4.9", cholesterol: "160", smoker: false,
                exercise: "جري وفتنس 4 مرات أسبوعياً", sleep: "8 ساعات عميقة", stress: "منخفض",
                familyHistory: [], diseases: [], medications: [], allergies: [], symptoms: []
            }
        },
        // 3. مدخن شره يعاني من مشاكل في الصدر والجهاز التنفسي
        {
            name: "خالد العتيبي (مشاكل تنفسية ومدخن)",
            age: "56", weight: "82", height: "178",
            health: {
                gender: "ذكر", bloodType: "B-", bloodPressure: "130/80", heartRate: "88",
                bloodSugar: "110", hba1c: "5.6", cholesterol: "210", smoker: true,
                exercise: "لا يوجد", sleep: "6 ساعات", stress: "متوسط",
                familyHistory: ["سرطان الرئة (الجد)"], diseases: ["حساسية الصدر الربوية"],
                medications: ["بخاخ فنتولين عند اللزوم"], allergies: [], symptoms: ["سعال جاف مستمر وخاصة صباحاً", "ضيق تنفس عند صعود الدرج"]
            }
        },
        // 4. مريض كوليسترول حاد ومهدد بأمراض القلب والشرايين
        {
            name: "محمد عبد الرحمن (خطر أمراض القلب والدهون)",
            age: "52", weight: "102", height: "170",
            health: {
                gender: "ذكر", bloodType: "AB+", bloodPressure: "150/95", heartRate: "90",
                bloodSugar: "120", hba1c: "5.9", cholesterol: "290", smoker: true,
                exercise: "لا يوجد", sleep: "5 ساعات مع شخير متقطع", stress: "مرتفع جداً",
                familyHistory: ["جلطة قلبية (الأب)", "تصلب الشرايين (العم)"], diseases: [], medications: [],
                allergies: [], symptoms: ["ألم خفيف وثقل في الصدر عند الانفعال", "تنميل في الذراع الأيسر أحياناً"]
            }
        },
        // 5. شابة تعاني من أنيميا حادة وضعف عام
        {
            name: "فاطمة الزهراء (أنيميا حادة وضعف مؤشرات حيوية)",
            age: "19", weight: "45", height: "160",
            health: {
                gender: "أنثى", bloodType: "O-", bloodPressure: "90/60", heartRate: "95",
                bloodSugar: "75", hba1c: "4.7", cholesterol: "140", smoker: false,
                exercise: "لا يوجد", sleep: "10 ساعات مع خمول", stress: "متوسط بسبب الدراسة",
                familyHistory: ["فقر الدم البحر المتوسط (الأخت)"], diseases: [], medications: [],
                allergies: [], symptoms: ["دوار شديد عند الوقوف المفاجئ", "تساقط شعر حاد", "برودة شديدة في الأطراف"]
            }
        },
        // 6. مريض يعاني من أرق مزمن وضغط عصبي حاد
        {
            name: "عمر فاروق (أرق وضغط عصبي حاد)",
            age: "35", weight: "75", height: "180",
            health: {
                gender: "ذكر", bloodType: "A-", bloodPressure: "135/85", heartRate: "85",
                bloodSugar: "105", hba1c: "5.4", cholesterol: "185", smoker: false,
                exercise: "مشي متقطع", sleep: "3 إلى 4 ساعات متقطعة", stress: "حرج ومرتفع للغاية",
                familyHistory: ["مرض الاكتئاب (الخال)"], diseases: ["القولون العصبي"], medications: [],
                allergies: [], symptoms: ["صداع نصفي متكرر", "اضطرابات هضمية مستمرة", "تشتت وانفعال سريع"]
            }
        },
        // 7. سيدة تعاني من السمنة المفرطة وخمول الغدة الدرقية المحتمل
        {
            name: "منى علي (سمنة مفرطة وخمول غدة محتمل)",
            age: "42", weight: "115", height: "158",
            health: {
                gender: "أنثى", bloodType: "B+", bloodPressure: "138/88", heartRate: "72",
                bloodSugar: "125", hba1c: "6.1", cholesterol: "245", smoker: false,
                exercise: "معدومة الحركة", sleep: "9 ساعات", stress: "متوسط",
                familyHistory: ["خمول الغدة الدرقية (الأم)"], diseases: [], medications: [],
                allergies: [], symptoms: ["زيادة غير مبررة في الوزن رغم قلة الأكل", "جفاف شديد في الجلد", "إمساك مزمن"]
            }
        },
        // 8. مريض سكر من النوع الثاني غير منضبط
        {
            name: "سليمان الحسن (مرض السكر النوع الثاني غير منضبط)",
            age: "60", weight: "88", height: "174",
            health: {
                gender: "ذكر", bloodType: "O+", bloodPressure: "140/90", heartRate: "78",
                bloodSugar: "260", hba1c: "8.4", cholesterol: "215", smoker: false,
                exercise: "لا يوجد", sleep: "6 ساعات", stress: "متوسط",
                familyHistory: ["السكري من النوع الثاني (جميع الأخوة)"], diseases: ["السكري منذ 5 سنوات"],
                medications: ["ميتفورمين 1000 ملجم"], allergies: [], symptoms: ["تنميل وحرقة في باطن القدمين", "ضبابية مؤقتة في الرؤية"]
            }
        },
        // 9. مريض شاب مدمن مشروبات طاقة ومأكولات سريعة
        {
            name: "يوسف هشام (نمط حياة غير صحي ومشروبات طاقة)",
            age: "22", weight: "85", height: "175",
            health: {
                gender: "ذكر", bloodType: "A+", bloodPressure: "132/82", heartRate: "102",
                bloodSugar: "115", hba1c: "5.8", cholesterol: "205", smoker: false,
                exercise: "لا يوجد", sleep: "سهر مستمر ونوم بالنهار", stress: "متوسط",
                familyHistory: ["الضغط المرتفع (الأب)"], diseases: [], medications: [],
                allergies: [], symptoms: ["خفقان سريع ومفاجئ في القلب", "حموضة وارتجاع مريئي مستمر"]
            }
        },
        // 10. شيخ مسن يعاني من ضعف وظائف الكلى والضغط
        {
            name: "الحاج عبد الله (مسن يعاني من مشاكل كلى وضغط)",
            age: "74", weight: "70", height: "168",
            health: {
                gender: "ذكر", bloodType: "AB-", bloodPressure: "155/85", heartRate: "68",
                bloodSugar: "130", hba1c: "6.4", cholesterol: "220", smoker: false,
                exercise: "مشي خفيف جداً", sleep: "5 ساعات", stress: "منخفض",
                familyHistory: [], diseases: ["ارتفاع ضغط الدم المزمن"], medications: ["أملوديبين 5 ملجم"],
                allergies: ["الأسبرين"], symptoms: ["تورم خفيف في القدمين في نهاية اليوم", "كثرة التبول ليلاً"]
            }
        }
    ];

    const selectedPatient = patients[patientIndex];
    if (!selectedPatient) {
        alert("خطأ: المريض المختار غير موجود.");
        return;
    }

    // بناء كائن قاعدة البيانات متضمناً البروفايل المختار بدقة
    const database = {
        profile: {
            id: Date.now(),
            name: selectedPatient.name,
            email: "test_patient@gammal.tech",
            phone: "01122334455",
            age: selectedPatient.age,
            weight: selectedPatient.weight,
            height: selectedPatient.height,
            health: selectedPatient.health
        },
        settings: {
            language: "Arabic",
            notifications: true,
            color: "#2563EB"
        },
        services: [],
        messages: [],
        notifications: [],
        files: [],
        notes: [],
        operations: []
    };

    // حفظ المريض في الـ Gammal Tech Database
    await saveDatabase(database);
    console.log(`تم شحن بيانات المريض: ${selectedPatient.name} بنجاح! ✅`);
    alert(`تم شحن بيانات المريض [ ${selectedPatient.name} ] بنجاح في قاعدة البيانات!\nيمكنك الآن النقر على زر "بدء التنبؤ بالأمراض" لترى تحليل الـ AI لهذا البروفايل الخاص.`);
}
