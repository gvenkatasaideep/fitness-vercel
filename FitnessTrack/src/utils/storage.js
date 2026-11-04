
const USERS_KEY = "fittrack_users";
const SESSION_KEY = "fittrack_session";
const RECORDS_KEY = "fittrack_records";

// Get all registered users
export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Save users
export function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Get logged-in user
export function getSession() {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
}

// Save logged-in user
export function saveSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

// Clear login session
export function clearSession() {
    localStorage.removeItem(SESSION_KEY);
}

// Get fitness records
export function getRecords() {
    return JSON.parse(localStorage.getItem(RECORDS_KEY)) || [];
}

// Save fitness records
export function saveRecords(records) {
    localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

// Create default admin account
export function addDemoAdmin() {
    const users = getUsers();

    const adminExists = users.some(
        (user) => user.email === "admin@fittrack.com"
    );

    if (!adminExists) {
        users.push({
            id: Date.now(),
            name: "Admin",
            email: "admin@fittrack.com",
            password: "Admin123!",
            role: "admin"
        });

        saveUsers(users);
    }
}
