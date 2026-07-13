//=====================================
// PROFILE
//=====================================

// جلب الملف الشخصي
async function getProfile() {
    const db = await getDatabase();
    return db.profile || {};
}

// تحديث الملف الشخصي (تم التعديل لإرجاع البيانات المحدثة)
async function updateProfile(data) {
    const db = await getDatabase();

    db.profile = {
        ...(db.profile || {}),
        ...data
    };

    await saveDatabase(db);
    return db.profile;
}


//=====================================
// SETTINGS
//=====================================

// جلب الإعدادات
async function getSettings() {
    const db = await getDatabase();
    return db.settings || {};
}

// تحديث الإعدادات (تم التعديل لإرجاع البيانات المحدثة)
async function updateSettings(data) {
    const db = await getDatabase();

    db.settings = {
        ...(db.settings || {}),
        ...data
    };

    await saveDatabase(db);
    return db.settings;
}


//=====================================
// SEARCH
//=====================================

// البحث داخل أي جدول
async function search(tableName, key, value) {
    const db = await getDatabase();

    if (!db[tableName])
        return [];

    return db[tableName].filter(item => item[key] === value);
}

// البحث باستخدام جزء من النص
async function searchContains(tableName, key, value) {
    const db = await getDatabase();

    if (!db[tableName])
        return [];

    return db[tableName].filter(item =>
        String(item[key])
            .toLowerCase()
            .includes(String(value).toLowerCase())
    );
}


//=====================================
// DATABASE
//=====================================

// عدد العناصر داخل جدول
async function count(tableName) {
    const db = await getDatabase();

    if (!db[tableName])
        return 0;

    return db[tableName].length;
}

// معلومات عن قاعدة البيانات (تم التعديل لحمايتها من الانهيار بقاعدة الـ Safe Access)
async function databaseInfo() {
    const db = await getDatabase();

    return {
        users: db.users?.length || 0,
        services: db.services?.length || 0,
        operations: db.operations?.length || 0,
        messages: db.messages?.length || 0,
        notifications: db.notifications?.length || 0,
        files: db.files?.length || 0,
        notes: db.notes?.length || 0
    };
}


//=====================================
// BACKUP
//=====================================

// إنشاء نسخة احتياطية
async function createBackup() {
    const db = await getDatabase();
    return JSON.stringify(db);
}

// استرجاع نسخة احتياطية (تم التعديل لإضافة حماية ضد الملفات التالفة)
async function restoreBackup(json) {
    try {
        const db = JSON.parse(json);
        await saveDatabase(db);
        return true;
    } catch (error) {
        console.error("فشل استرجاع النسخة الاحتياطية بسبب صيغة غير صحيحة", error);
        return false;
    }
}


//=====================================
// HELPERS
//=====================================

// إنشاء ID عشوائي
function createId() {
    return crypto.randomUUID();
}

// التاريخ الحالي
function now() {
    return new Date().toISOString();
}

// تنظيف قاعدة البيانات
async function clearDatabase() {
    await saveDatabase({
        profile: {},
        settings: {},
        users: [],
        services: [],
        messages: [],
        notifications: [],
        files: [],
        notes: [],
        operations: []
    });
}


//=====================================
// EXPORTS (اختياري)
//=====================================

console.log("Gammal Tech Database Ready ✅");