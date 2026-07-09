// دالة لحفظ البيانات في داتا بيز جمال تك .1 //
async function addPatientToDatabase(name, age, diagnosis) {
    try {
        // طلب تسجيل الدخول أولاً للتأكد من هوية المستخدم على السيرفر
        await GammalTech.login();

        let database = await GammalTech.user.get() || { patients: [] };

        database.patients.push({
            id: database.patients.length + 1,
            name: name,
            age: age,
            diagnosis: diagnosis
        });

        await GammalTech.user.save(database);
        alert("تم حفظ المريض في الداتا بيز بنجاح!");

    } catch (error) {
        console.error("خطأ في الحفظ:", error);
    }
}

// .2 لقط البيانات من الخانات عند الضغط على الزرار //
document.getElementById('patientForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const diagnosis = document.getElementById('patientDiagnosis').value;

    await addPatientToDatabase(name, age, diagnosis);

    document.getElementById('patientForm').reset(); // تنظيف الخانات
});