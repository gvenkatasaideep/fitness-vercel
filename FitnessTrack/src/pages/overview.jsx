
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";

export default function Overview({ user, records = [] }) {

    // Safely handle user information
    const userName = user?.name || "User";
    const firstName = userName.split(" ")[0];

    // Safely get user records
    const safeRecords = Array.isArray(records) ? records : [];

    const mine = safeRecords.filter(
        (record) => record.userEmail === user?.email
    );

    const today = mine[mine.length - 1] || {};

    const steps = Number(today.steps) || 0;
    const calories = Number(today.calories) || 0;
    const minutes = Number(today.minutes) || 0;

    return (
        <>
            <SectionTitle
                title={`Good day, ${firstName}!`}
                subtitle="Here is a quick look at your fitness activity."
            />

            <div className="welcome-banner">
                <div>
                    <span className="eyebrow">
                        KEEP MOVING FORWARD
                    </span>

                    <h2>Every movement counts.</h2>

                    <p>
                        Stay consistent today and get one step
                        closer to your goals.
                    </p>
                </div>

                <div className="banner-symbol">
                    ✦
                </div>
            </div>

            <div className="stats-grid">

                <StatCard
                    icon="👟"
                    label="Steps today"
                    value={steps.toLocaleString()}
                    note="Daily movement"
                />

                <StatCard
                    icon="🔥"
                    label="Calories burned"
                    value={`${calories} kcal`}
                    note="Estimated calories"
                />

                <StatCard
                    icon="⏱"
                    label="Active minutes"
                    value={`${minutes} min`}
                    note="Time spent moving"
                />

                <StatCard
                    icon="📈"
                    label="Activities logged"
                    value={mine.length}
                    note="Your saved records"
                />

            </div>

            <div className="content-grid">

                <section className="panel">

                    <h3>Today's focus</h3>

                    <p className="muted">
                        A balanced day includes movement,
                        hydration, and rest.
                    </p>

                    <div className="focus-row">
                        <span>Movement</span>
                        <strong>
                            {steps.toLocaleString()} steps
                        </strong>
                    </div>

                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${Math.min(
                                    (steps / 8000) * 100,
                                    100
                                )}%`
                            }}
                        />
                    </div>

                    <div className="focus-row">
                        <span>Active time</span>
                        <strong>{minutes} / 30 min</strong>
                    </div>

                    <div className="progress-track">
                        <div
                            className="progress-fill purple"
                            style={{
                                width: `${Math.min(
                                    (minutes / 30) * 100,
                                    100
                                )}%`
                            }}
                        />
                    </div>

                </section>

                <section className="panel">

                    <h3>Fitness reminders</h3>

                    <ul className="reminder-list">

                        <li>
                            <span>💧</span>
                            <div>
                                <strong>Drink water</strong>
                                <p>
                                    Stay hydrated throughout the day.
                                </p>
                            </div>
                        </li>

                        <li>
                            <span>🧘</span>
                            <div>
                                <strong>Take a stretch break</strong>
                                <p>
                                    Give your body time to recover.
                                </p>
                            </div>
                        </li>

                        <li>
                            <span>🌙</span>
                            <div>
                                <strong>Prioritize sleep</strong>
                                <p>
                                    Good rest supports fitness progress.
                                </p>
                            </div>  
                        </li>

                    </ul>

                </section>

            </div>
        </>
    );
}
