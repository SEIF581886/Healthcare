//=====================================
// AI SERVICE
//=====================================

// اختبار الاتصال بالذكاء الاصطناعي
async function testAI() {
    try {
        const response = await GammalTech.ai.ask("قل مرحباً فقط باللغة العربية واثبت أنك تعمل بشكل صحيح.");
        console.log("AI Response:", response);
        return response;
    } catch (error) {
        console.error("AI Error:", error);
        return null;
    }
}

// دالة التحليل والتنبؤ بالأمراض قبل ظهورها
async function predictDisease() {
    try {
        // 1. جلب الملف الشخصي والطبي للمريض باستخدام الدالة المتوفرة عندك
        const profile = await getProfile(); 
        
        if (!profile || !profile.health || !profile.name) {
            console.error("لا توجد بيانات طبية مسجلة للمريض.");
            return "برجاء إدخال أو شحن بيانات مريض أولاً عبر القائمة المنسدلة.";
        }

        console.log("جاري معالجة المؤشرات الحيوية وإرسالها للـ AI...");

        // 2. صياغة التوجيه الطبي بناءً على الهيكل المتاح في كودك والمليء بالمؤشرات الدقيقة
        const medicalPrompt = `
        أنت مساعد طبي ذكي وباحث خبير في الطب الوقائي والتنبؤ بالأمراض قبل ظهورها.
        بناءً على المؤشرات الحيوية والتاريخ المرضي الحالي للمريض التالي:
        - الاسم المستعار: ${profile.name}
        - السن: ${profile.age || 'غير محدد'} سنة، الوزن: ${profile.weight || 'غير محدد'} كجم، الطول: ${profile.height || 'غير محدد'} سم
        - الجنس: ${profile.health.gender || 'غير محدد'}، فصيلة الدم: ${profile.health.bloodType || 'غير محدد'}
        - ضغط الدم: ${profile.health.bloodPressure || 'غير محدد'}، نبض القلب: ${profile.health.heartRate || 'غير محدد'} نبضة/دقيقة
        - السكر العشوائي: ${profile.health.bloodSugar || 'غير محدد'} ملجم/ديسيلتر، التراكمي (HbA1c): ${profile.health.hba1c || 'غير محدد'}%
        - الكوليسترول: ${profile.health.cholesterol || 'غير محدد'} ملجم/ديسيلتر
        - هل يدخن؟: ${profile.health.smoker ? 'نعم' : 'لا'}
        - مستوى الرياضة: ${profile.health.exercise || 'غير محدد'}، عدد ساعات النوم: ${profile.health.sleep || 'غير محدد'}
        - مستوى التوتر العصبي: ${profile.health.stress || 'غير محدد'}
        - التاريخ العائلي المرضي: ${JSON.stringify(profile.health.familyHistory || [])}
        - الأمراض الحالية المشخصة: ${JSON.stringify(profile.health.diseases || [])}
        - الأعراض الحالية الملاحظة: ${JSON.stringify(profile.health.symptoms || [])}

        المطلوب بدقة عالية:
        1. التنبؤ العلمي بالأمراض المحتمل إصابة هذا المريض بها مستقبلاً إذا استمر على نفس النمط.
        2. تقييم وتحديد "مستوى خطورة الحالة العامة" (منخفضة / متوسطة / خطرة جداً).
        3. تقديم توصيات طبية ووقائية فورية، تعديلات مخصصة لنمط الحياة، والتحاليل الفورية التي ينصح بإجرائها للاطمئنان.
        
        اكتب التقرير بلغة عربية طبية واضحة وبشكل منظم للغاية في نقاط.
        `;

        // 3. استدعاء الـ AI من الـ SDK المعتمد لديك
        const aiResponse = await GammalTech.ai.ask(medicalPrompt);

        console.log("تقرير التنبؤ الطبي جاهز:", aiResponse);
        
        return aiResponse;

    } catch (error) {
        console.error("فشل استخراج التنبؤ الطبي:", error);
        return "حدث خطأ أثناء التواصل مع سيرفر الذكاء الاصطناعي. تأكد من تسجيل دخولك أولاً.";
    }
}
