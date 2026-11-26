
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Activity({ user, records = [], onAddRecord }) {
  const [form, setForm] = useState({
    steps: "",
    calories: "",
    activeMinutes: "",
    note: ""
  });

  const [message, setMessage] = useState("");

  const myRecords = records.filter(
    (record) => record.userEmail === user?.email
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      form.steps === "" ||
      form.calories === "" ||
      form.activeMinutes === ""
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const newRecord = {
      id: Date.now(),
      userEmail: user.email,
      date: new Date().toISOString().slice(0, 10),
      steps: Number(form.steps),
      calories: Number(form.calories),
      activeMinutes: Number(form.activeMinutes),
      note: form.note
    };

    onAddRecord(newRecord);

    setForm({
      steps: "",
      calories: "",
      activeMinutes: "",
      note: ""
    });

    setMessage("Activity saved successfully!");
  }

  return (
    <div className="activity-page">
        <div className="container mt-4">
  <h2 className="mb-4">Track Your Activity</h2>

  <div className="card shadow-sm">
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label className="form-label">Steps</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter steps"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Calories Burned</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter calories"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Active Minutes</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter active minutes"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Activity
        </button>
      </form>
    </div>
  </div>
</div>
      <SectionTitle
        title="Activity Tracking"
        subtitle="Record your daily movement and review your activity history."
      />

      <div className="activity-layout">
        <section className="panel">
          <h3>Add Today's Activity</h3>

          <form onSubmit={handleSubmit} className="activity-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Steps</label>
                <input
                  type="number"
                  name="steps"
                  min="0"
                  placeholder="Example: 6500"
                  value={form.steps}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Calories Burned (kcal)</label>
                <input
                  type="number"
                  name="calories"
                  min="0"
                  placeholder="Example: 320"
                  value={form.calories}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Active Minutes</label>
                <input
                  type="number"
                  name="activeMinutes"
                  min="0"
                  placeholder="Example: 45"
                  value={form.activeMinutes}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Activity Note</label>
                <input
                  type="text"
                  name="note"
                  placeholder="Example: Evening walk"
                  value={form.note}
                  onChange={handleChange}
                />
              </div>
            </div>

            {message && (
              <p className="form-message">{message}</p>
            )}

            <button type="submit" className="button button-primary">
              Save Activity
            </button>
          </form>
        </section>

        <section className="panel">
          <h3>Activity History</h3>

          {myRecords.length === 0 ? (
            <p className="muted">
              No activities yet. Add your first activity.
            </p>
          ) : (
            <div className="activity-table-wrap">
              <table className="fitness-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Steps</th>
                    <th>Calories</th>
                    <th>Minutes</th>
                    <th>Note</th>
                  </tr>
                </thead>

                <tbody>
                  {[...myRecords].reverse().map((record) => (
                    <tr key={record.id}>
                      <td>{record.date}</td>
                      <td>{record.steps}</td>
                      <td>{record.calories} kcal</td>
                      <td>{record.activeMinutes} min</td>
                      <td>{record.note || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
