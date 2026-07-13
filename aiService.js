//=====================================
// AI SERVICE
//=====================================

// اختبار الاتصال بالذكاء الاصطناعي
async function testAI() {
// دالة التحليل والتنبؤ بالأمراض قبل ظهورها
async function predictDisease() {
    try {
        // 1. جلب الملف الشخصي والطبي للمريض باستخدام الدالة المتوفرة عندك
        const profile = await getProfile(); 
        
        if (!profile || !profile.health) {
            console.error("لا توجد بيانات طبية مسجلة للمريض.");
            return "برجاء إدخال البيانات الطبية أولاً.";
        }

        console.log("جاري معالجة المؤشرات الحيوية وإرسالها للـ AI...");

        // 2. صياغة التوجيه الطبي بناءً على الهيكل المتاح في كودك
        const medicalPrompt = `
        أنت مساعد طبي ذكي خبير في التنبؤ بالأمراض الوقائية قبل ظهورها.
        بناءً على المؤشرات الحيوية والتاريخ المرضي الحالي للمريض التالي:
        - السن: ${profile.age}، الوزن: ${profile.weight}، الطول: ${profile.height}
        - الجنس: ${profile.health.gender}، فصيلة الدم: ${profile.health.bloodType}
        - ضغط الدم: ${profile.health.bloodPressure}، نبض القلب: ${profile.health.heartRate}
        - السكر الحركي: ${profile.health.bloodSugar}، التراكمي (HbA1c): ${profile.health.hba1c}
        - الكوليسترول: ${profile.health.cholesterol}
        - هل يدخن؟: ${profile.health.smoker ? 'نعم' : 'لا'}
        - التاريخ العائلي المرضي: ${JSON.stringify(profile.health.familyHistory)}
        - الأعراض الحالية الملاحظة: ${JSON.stringify(profile.health.symptoms)}

        المطلوب بدقة:
        1. التنبؤ بالأمراض المحتمل إصابته بها مستقبلاً.
        2. تحديد درجة خطورة التحليل (منخفضة / متوسطة / عالية).
        3. تقديم خطة وقائية مخصصة (توصيات فورية وتعديلات نمط الحياة).
        `;

        // 3. استدعاء الـ AI من الـ SDK (بناءً على توثيق ملفك المتاح GammalTech.ai)
        // ملاحظة: لو دالة ask هي المعتمدة استخدمها، أو استبدلها بـ chat حسب الـ SDK المتاح لديك
        const aiResponse = await GammalTech.ai.ask(medicalPrompt);

        console.log("تقرير التنبؤ الطبي جاهز:", aiResponse);
        
        // يمكنك هنا عرض الـ aiResponse في واجهة المستخدم (UI)
        return aiResponse;

    } catch (error) {
        console.error("خطأ أثناء تحليل التنبؤ:", error);
        return null;
    }
}
    try {

        // إرسال رسالة للذكاء الاصطناعي
        const response = await GammalTech.ai.ask("قل مرحباً فقط");

        console.log("AI Response:", response);

        return response;

    } catch (error) {

        console.error("AI Error:", error);

        return null;

    }

}
