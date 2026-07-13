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

// إنشاء قاعدة البيانات
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
