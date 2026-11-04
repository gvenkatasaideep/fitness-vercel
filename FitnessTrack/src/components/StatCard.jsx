export default function StatCard({
    icon,
    label,
    value,
    note
}) {

    return (
        <article className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <p className="stat-label">
                {label}
            </p>

            <h3>{value}</h3>

            <p className="stat-note">
                {note}
            </p>

        </article>
    );
}