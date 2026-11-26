export default function Header({
    user,
    onLogout,
    onMenuClick
}) {

    return (
        <header className="topbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  <a className="navbar-brand" href="#">
    FitTrack
  </a>

  <span className="navbar-text text-white ms-auto">
    Your Fitness Journey
  </span>
</nav>

            <button
                className="mobile-menu"
                onClick={onMenuClick}
            >
                ☰
            </button>

            <div className="topbar-title">

                <span className="eyebrow">
                    YOUR HEALTH, YOUR PROGRESS
                </span>

                <h1>Fitness Dashboard</h1>

            </div>

            <div className="profile-area">

                <div className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="profile-name">

                    <strong>{user.name}</strong>

                    <span>
                        {user.role === "admin"
                            ? "Administrator"
                            : "Member"}
                    </span>

                </div>

                <button
                    className="button button-outline small-button"
                    onClick={onLogout}
                >
                    Log out
                </button>

            </div>

        </header>
    );
}