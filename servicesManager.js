// دالة مساعدة لتوليد معرف فريد وآمن
function generateUniqueId() {
    return crypto.randomUUID();
}

async function getServices() {
    const db = await getDatabase();
    return db.services || [];
}

async function addService(service) {
    const db = await getDatabase();

    // تعديل: تم تغيير Date.now() لمنع تكرار المعرفات
    service.id = generateUniqueId();

    db.services.push(service);

    await saveDatabase(db);

    return service;
}

async function findService(id) {
    const db = await getDatabase();

    return db.services.find(x => x.id === id);
}

async function updateService(id, newData) {
    const db = await getDatabase();

    const service = db.services.find(x => x.id === id);

    if (!service)
        return false;

    Object.assign(service, newData);

    await saveDatabase(db);

    return true;
}

async function deleteService(id) {
    const db = await getDatabase();

    db.services = db.services.filter(x => x.id !== id);

    await saveDatabase(db);
}

async function clearServices() {
    const db = await getDatabase();

    db.services = [];

    await saveDatabase(db);
}

async function getOperations() {
    const db = await getDatabase();

    return db.operations || [];
}

async function addOperation(operation) {
    const db = await getDatabase();

    // تعديل: تم تغيير Date.now() لمنع تكرار المعرفات
    operation.id = generateUniqueId();
    operation.createdAt = new Date().toISOString();

    db.operations.push(operation);

    await saveDatabase(db);

    return operation;
}

async function findOperation(id) {
    const db = await getDatabase();

    return db.operations.find(x => x.id === id);
}

async function updateOperation(id, newData) {
    const db = await getDatabase();

    const operation = db.operations.find(x => x.id === id);

    if (!operation)
        return false;

    Object.assign(operation, newData);

    await saveDatabase(db);

    return true;
}

async function deleteOperation(id) {
    const db = await getDatabase();

    db.operations = db.operations.filter(x => x.id !== id);

    await saveDatabase(db);
}

async function clearOperations() {
    const db = await getDatabase();

    db.operations = [];

    await saveDatabase(db);
}