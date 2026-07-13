//=====================================
// AI SERVICE
//=====================================

// اختبار الاتصال بالذكاء الاصطناعي
async function testAI() {

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
