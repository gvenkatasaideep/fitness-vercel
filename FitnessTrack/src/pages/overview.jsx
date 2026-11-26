
import React from "react";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";

export default function Overview({ user, records = [] }) {
  const myRecords = records.filter(
    (record) => record.userEmail === user?.email
  );

  const totalSteps = myRecords.reduce(
    (sum, record) => sum + Number(record.steps || 0), 0
  );

  const totalCalories = myRecords.reduce(
    (sum, record) => sum + Number(record.calories || 0), 0
  );

  const totalMinutes = myRecords.reduce(
    (sum, record) => sum + Number(record.activeMinutes || 0), 0
  );

  const dailyGoal = 6000;
  const today = new Date().toISOString().slice(0, 10);

  const todaySteps = myRecords
    .filter((record) => record.date === today)
    .reduce((sum, record) => sum + Number(record.steps || 0), 0);

  const progress = Math.min(
    Math.round((todaySteps / dailyGoal) * 100), 100
  );

  const weeklyData = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));

    const dateString = date.toISOString().slice(0, 10);

    const steps = myRecords
      .filter((record) => record.date === dateString)
      .reduce((sum, record) => sum + Number(record.steps || 0), 0);

    return {
      day: date.toLocaleDateString("en", { weekday: "short" }),
      steps
    };
  });

  const maxSteps = Math.max(
    ...weeklyData.map((item) => item.steps),
    dailyGoal
  );

  return (

    
    <div className="overview-page">
        <div className="container-fluid mt-4">
  <h2 className="mb-4">Dashboard Overview</h2>

  <div className="row g-3">
    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Daily Steps</h5>
          <h2 className="text-primary">5000</h2>
          <p className="text-muted">Your daily step count</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Calories Burned</h5>
          <h2 className="text-success">350</h2>
          <p className="text-muted">Calories burned today</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Active Minutes</h5>
          <h2 className="text-warning">45</h2>
          <p className="text-muted">Today's activity</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <SectionTitle
        title={`Welcome, ${user?.name || "Member"}!`}
        subtitle="Your health journey starts with small daily steps."
      />

      <div className="stat-card">
  <span className="stat-label">Total Steps</span>
  <h3>{totalSteps.toLocaleString()}</h3>
  <span className="stat-note">All recorded activities</span>
</div>

<div className="stat-card">
  <span className="stat-label">Calories Burned</span>
  <h3>{totalCalories.toLocaleString()}</h3>
  <span className="stat-note">Total recorded calories</span>
</div>

<div className="stat-card">
  <span className="stat-label">Active Minutes</span>
  <h3>{totalMinutes.toLocaleString()}</h3>
  <span className="stat-note">Total activity duration</span>
</div>

      <div className="overview-grid">
        <section className="panel">
          <h3>Today's Step Goal</h3>

          <div className="goal-number">
            {todaySteps.toLocaleString()} / {dailyGoal.toLocaleString()}
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="muted">
            {progress}% completed
          </p>

          <p>
            {todaySteps >= dailyGoal
              ? "Great job! You reached your daily step goal."
              : `You need ${(dailyGoal - todaySteps).toLocaleString()} more steps to reach your goal.`}
          </p>
        </section>

        <section className="panel">
          <h3>Weekly Activity</h3>

          <div className="weekly-chart">
            {weeklyData.map((item) => (
              <div className="chart-column" key={item.day}>
                <span className="chart-value">
                  {item.steps > 0 ? item.steps : ""}
                </span>

                <div className="chart-bar-area">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${Math.max(
                        (item.steps / maxSteps) * 100,
                        item.steps > 0 ? 5 : 0
                      )}%`
                    }}
                  />
                </div>

                <span className="chart-day">{item.day}</span>
              </div>
            
            ))}

          </div>
        </section>
      </div>

      <section className="panel daily-tip">
        <h3>Daily Fitness Tip</h3>
        <p>
          Stay consistent! A short walk, enough water, and proper rest
          can make a difference in your fitness journey.
        </p>
      </section>

      <section className="panel">
        <h3>Recent Activity</h3>

        {myRecords.length === 0 ? (
          <p className="muted">
            No activity records yet. Visit Activity to add your first record.
          </p>
        ) : (
          <div className="activity-table-wrap">
            <table className="fitness-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Steps</th>
                  <th>Calories</th>
                  <th>Active Minutes</th>
                </tr>
              </thead>

              <tbody>
                {[...myRecords].reverse().slice(0, 5).map((record) => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>{Number(record.steps || 0).toLocaleString()}</td>
                    <td>{record.calories || 0} kcal</td>
                    <td>{record.activeMinutes || 0} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
    
  );
}
