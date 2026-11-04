import { useState } from "react";

import SectionTitle from "../components/SectionTitle";


export default function Activity({
    user,
    records,
    onAddRecord
}) {

    const [steps, setSteps] = useState("");

    const [calories, setCalories] = useState("");

    const [minutes, setMinutes] = useState("");

    const [note, setNote] = useState("");


    const mine = records
        .filter((record) => record.userEmail === user.email)
        .slice()
        .reverse();


    function submitActivity(event) {

        event.preventDefault();

        onAddRecord({

            userEmail: user.email,

            userName: user.name,

            steps: Number(steps),

            calories: Number(calories),

            minutes: Number(minutes),

            note: note,

            date: new Date().toLocaleDateString()

        });


        setSteps("");

        setCalories("");

        setMinutes("");

        setNote("");

    }


    return (

        <>

            <SectionTitle
                title="Activity tracking"
                subtitle="Record your daily movement and review your activity history."
            />


            <div className="content-grid activity-layout">

                <form
                    className="panel form-panel"
                    onSubmit={submitActivity}
                >

                    <h3>Add today's activity</h3>


                    <label>
                        Steps

                        <input
                            type="number"
                            min="0"
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            required
                            placeholder="Example: 6500"
                        />
                    </label>


                    <label>
                        Calories burned (kcal)

                        <input
                            type="number"
                            min="0"
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            required
                            placeholder="Example: 320"
                        />
                    </label>


                    <label>
                        Active minutes

                        <input
                            type="number"
                            min="0"
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}
                            required
                            placeholder="Example: 45"
                        />
                    </label>


                    <label>
                        Activity note

                        <input
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Example: Evening walk"
                        />
                    </label>


                    <button
                        className="button button-primary"
                        type="submit"
                    >
                        Save activity
                    </button>

                </form>


                <section className="panel">

                    <h3>Activity history</h3>

                    {mine.length === 0 ? (

                        <p className="empty-state">
                            No activities yet. Add your first activity.
                        </p>

                    ) : (

                        <div className="table-wrap">

                            <table>

                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Steps</th>
                                        <th>Calories</th>
                                        <th>Minutes</th>
                                    </tr>
                                </thead>


                                <tbody>

                                    {mine.map((record, index) => (

                                        <tr key={`${record.date}-${index}`}>

                                            <td>{record.date}</td>

                                            <td>{record.steps}</td>

                                            <td>{record.calories}</td>

                                            <td>{record.minutes}</td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </section>

            </div>

        </>

    );
}