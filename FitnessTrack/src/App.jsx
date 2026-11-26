import { useEffect, useState } from "react";


// Import reusable components

import Auth from "./components/Auth";

import Header from "./components/Header";

import Sidebar from "./components/Sidebar";


// Import user pages

import Overview from "./pages/overview.jsx";

import Activity from "./pages/Activity";

import Workouts from "./pages/Workouts";

import Nutrition from "./pages/Nutrition";

import Goals from "./pages/Goals";


// Import admin pages

import AdminUsers from "./pages/AdminUsers";

import AdminRecords from "./pages/AdminRecords";


// Import Local Storage functions

import {
    addDemoAdmin,
    clearSession,
    getRecords,
    getSession,
    getUsers,
    saveRecords
} from "./utils/storage";


// Main application component

export default function App() {


    // Store logged-in user

    const [user, setUser] = useState(null);


    // Store the currently selected page

    const [activePage, setActivePage] = useState("overview");


    // Store fitness records

    const [records, setRecords] = useState([]);


    // Store registered users

    const [users, setUsers] = useState([]);


    // Control mobile menu

    const [menuOpen, setMenuOpen] = useState(false);


    // Load saved information when the app starts

    useEffect(() => {

        addDemoAdmin();

        setUser(getSession());

        setRecords(getRecords());

        setUsers(getUsers());

    }, []);


    // Handle successful login

    function handleLogin(loggedInUser) {

        setUser(loggedInUser);

        setUsers(getUsers());

        setActivePage("overview");

    }


    // Handle logout

    function handleLogout() {

        clearSession();

        setUser(null);

        setActivePage("overview");
        
    }


    // Add a new fitness record

    function handleAddRecord(record) {

        const updatedRecords = [
            ...records,
            record
        ];

        setRecords(updatedRecords);

        saveRecords(updatedRecords);

    }


    // Navigate between pages

    function navigate(page) {

        setActivePage(page);

        setMenuOpen(false);

    }


    // Display login page if no user is logged in

    if (!user) {

        return <Auth onLogin={handleLogin} />;

    }


    // Decide which page should be displayed

    function renderPage() {

        switch (activePage) {

            case "activity":

                return (
                    <Activity
                        user={user}
                        records={records}
                        onAddRecord={handleAddRecord}
                    />
                );


            case "workouts":

                return <Workouts />;


            case "nutrition":

                return <Nutrition />;


            case "goals":

                return <Goals />;


            case "admin-users":

                return (
                    <AdminUsers
                        users={users}
                    />
                );


            case "admin-records":

                return (
                    <AdminRecords
                        records={records}
                    />
                );


            default:

                return (
                    <Overview user={user} records={records} />
                );

        }

    }


    // Main website layout

    return (

        <div className="app-shell">


            <Sidebar
                role={user.role}
                activePage={activePage}
                onNavigate={navigate}
                isOpen={menuOpen}
            />


            {menuOpen && (

                <button
                    className="sidebar-overlay"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                />

            )}


            <main className="main-area">


                <Header
                    user={user}
                    onLogout={handleLogout}
                    onMenuClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                />


                <div className="page-content">

                    {renderPage()}

                </div>


                <footer className="footer">

                    © {new Date().getFullYear()}
                    {" "}FitTrack. Keep moving forward.

                </footer>


            </main>

        </div>

    );

}