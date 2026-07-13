//=====================================
// MESSAGES
//=====================================

// جميع الرسائل
async function getMessages() {
    const db = await getDatabase();
    return db.messages || [];
}

// إضافة رسالة
async function addMessage(message) {
    const db = await getDatabase();

    message.id = crypto.randomUUID();
    message.date = new Date().toISOString();

    db.messages.push(message);

    await saveDatabase(db);

    return message;
}

// البحث عن رسالة
async function findMessage(id) {
    const db = await getDatabase();
    return db.messages.find(x => x.id === id);
}

// تعديل رسالة (تمت إضافتها للاكتمال)
async function updateMessage(id, data) {
    const db = await getDatabase();
    const message = db.messages.find(x => x.id === id);

    if (!message)
        return false;

    Object.assign(message, data);

    await saveDatabase(db);
    return true;
}

// حذف رسالة
async function deleteMessage(id) {
    const db = await getDatabase();

    db.messages = db.messages.filter(x => x.id !== id);

    await saveDatabase(db);
}

// حذف جميع الرسائل
async function clearMessages() {
    const db = await getDatabase();

    db.messages = [];

    await saveDatabase(db);
}


//=====================================
// NOTIFICATIONS
//=====================================

// جميع الإشعارات
async function getNotifications() {
    const db = await getDatabase();
    return db.notifications || [];
}

// إضافة إشعار
async function addNotification(notification) {
    const db = await getDatabase();

    notification.id = crypto.randomUUID();
    notification.date = new Date().toISOString();

    db.notifications.push(notification);

    await saveDatabase(db);

    return notification;
}

// البحث عن إشعار (تمت إضافتها للاكتمال)
async function findNotification(id) {
    const db = await getDatabase();
    return db.notifications.find(x => x.id === id);
}

// تعديل إشعار (تمت إضافتها للاكتمال)
async function updateNotification(id, data) {
    const db = await getDatabase();
    const notification = db.notifications.find(x => x.id === id);

    if (!notification)
        return false;

    Object.assign(notification, data);

    await saveDatabase(db);
    return true;
}

// حذف إشعار
async function deleteNotification(id) {
    const db = await getDatabase();

    db.notifications = db.notifications.filter(x => x.id !== id);

    await saveDatabase(db);
}

// حذف جميع الإشعارات
async function clearNotifications() {
    const db = await getDatabase();

    db.notifications = [];

    await saveDatabase(db);
}


//=====================================
// FILES
//=====================================

// جميع الملفات
async function getFiles() {
    const db = await getDatabase();
    return db.files || [];
}

// إضافة ملف
async function addFile(file) {
    const db = await getDatabase();

    file.id = crypto.randomUUID();
    file.date = new Date().toISOString();

    db.files.push(file);

    await saveDatabase(db);

    return file;
}

// البحث عن ملف (تمت إضافتها للاكتمال)
async function findFile(id) {
    const db = await getDatabase();
    return db.files.find(x => x.id === id);
}

// تعديل ملف (تمت إضافتها للاكتمال)
async function updateFile(id, data) {
    const db = await getDatabase();
    const file = db.files.find(x => x.id === id);

    if (!file)
        return false;

    Object.assign(file, data);

    await saveDatabase(db);
    return true;
}

// حذف ملف
async function deleteFile(id) {
    const db = await getDatabase();

    db.files = db.files.filter(x => x.id !== id);

    await saveDatabase(db);
}

// حذف جميع الملفات
async function clearFiles() {
    const db = await getDatabase();

    db.files = [];

    await saveDatabase(db);
}


//=====================================
// NOTES
//=====================================

// جميع الملاحظات
async function getNotes() {
    const db = await getDatabase();
    return db.notes || [];
}

// إضافة ملاحظة
async function addNote(note) {
    const db = await getDatabase();

    note.id = crypto.randomUUID();
    note.date = new Date().toISOString();

    db.notes.push(note);

    await saveDatabase(db);

    return note;
}

// البحث عن ملاحظة (تمت إضافتها للاكتمال)
async function findNote(id) {
    const db = await getDatabase();
    return db.notes.find(x => x.id === id);
}

// تعديل ملاحظة
async function updateNote(id, data) {
    const db = await getDatabase();

    const note = db.notes.find(x => x.id === id);

    if (!note)
        return false;

    Object.assign(note, data);

    await saveDatabase(db);

    return true;
}

// حذف ملاحظة
async function deleteNote(id) {
    const db = await getDatabase();

    db.notes = db.notes.filter(x => x.id !== id);

    await saveDatabase(db);
}

// حذف جميع الملاحظات
async function clearNotes() {
    const db = await getDatabase();

    db.notes = [];

    await saveDatabase(db);
}


//=====================================
// OPERATIONS LOG
//=====================================

// جميع العمليات
async function getOperations() {
    const db = await getDatabase();
    return db.operations || [];
}

// إضافة عملية
async function addOperation(action) {
    const db = await getDatabase();

    db.operations.push({
        id: crypto.randomUUID(),
        action: action,
        date: new Date().toISOString()
    });

    await saveDatabase(db);
}

// البحث عن عملية (تمت إضافتها للاكتمال)
async function findOperation(id) {
    const db = await getDatabase();
    return db.operations.find(x => x.id === id);
}

// حذف عملية محددة (تمت إضافتها للاكتمال)
async function deleteOperation(id) {
    const db = await getDatabase();
    db.operations = db.operations.filter(x => x.id !== id);
    await saveDatabase(db);
}

// حذف جميع العمليات
async function clearOperations() {
    const db = await getDatabase();

    db.operations = [];

    await saveDatabase(db);
}