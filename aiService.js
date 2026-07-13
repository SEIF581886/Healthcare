//=====================================
// AI SERVICE
//=====================================

// اختبار الاتصال بالذكاء الاصطناعي
async function testAI() {
    try {

        // التأكد من تسجيل الدخول
        await GammalTech.login();

        // إرسال رسالة بسيطة للذكاء الاصطناعي
        const response = await GammalTech.ai.ask("قل مرحباً فقط");

        console.log("AI Response:", response);

        return response;

    } catch (error) {

        console.error("AI Error:", error);

        return null;

    }
}