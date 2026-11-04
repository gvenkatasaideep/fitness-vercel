const userLinks = [
    { id: "overview", label: "Overview", icon: "▦" },
    { id: "activity", label: "Activity", icon: "⌁" },
    { id: "workouts", label: "Workouts", icon: "◎" },
    { id: "nutrition", label: "Nutrition", icon: "◒" },
    { id: "goals", label: "Goals & Reports", icon: "⚑" }
];


const adminLinks = [
    { id: "overview", label: "Overview", icon: "▦" },
    { id: "admin-users", label: "Manage Users", icon: "♙" },
    { id: "admin-records", label: "Fitness Records", icon: "▤" }
];


export default function Sidebar({
    role,
    activePage,
    onNavigate,
    isOpen
}) {

    const links = role === "admin"
        ? adminLinks
        : userLinks;


    return (
        <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

            <div className="brand">

                <div className="brand-mark">
                    F
                </div>

                <div>
                    <strong>FitTrack</strong>

                    <span>FITNESS & WELLNESS</span>
                </div>

            </div>


            <p className="nav-heading">
                WORKSPACE
            </p>


            <nav className="nav-list">

                {links.map((link) => (

                    <button
                        key={link.id}
                        className={`nav-link ${
                            activePage === link.id ? "active" : ""
                        }`}
                        onClick={() => onNavigate(link.id)}
                    >

                        <span className="nav-icon">
                            {link.icon}
                        </span>

                        {link.label}

                    </button>

                ))}

            </nav>


            <div className="sidebar-bottom">

                <div className="sidebar-tip">

                    <span>✦ DAILY TIP</span>

                    <p>
                        Small steps every day lead to big results.
                    </p>

                </div>

                <p className="sidebar-version">
                    FitTrack • Version 1.0
                </p>

            </div>

        </aside>
    );
}