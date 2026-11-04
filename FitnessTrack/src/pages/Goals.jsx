import { useState } from "react";

import SectionTitle from "../components/SectionTitle";


export default function Goals() {

    const [stepGoal, setStepGoal] = useState(8000);

    const [waterGoal, setWaterGoal] = useState(8);

    const [workoutGoal, setWorkoutGoal] = useState(5);


    return (

        <>

            <SectionTitle
                title="Goals & reports"
                subtitle="Set practical targets for your fitness journey."
            />


            <section className="panel goals-panel">

                <h3>Your personal goals</h3>


                <div className="goal-setting">

                    <div>
                        <strong>Daily step target</strong>

                        <p className="muted">
                            A movement target for each day.
                        </p>
                    </div>

                    <input
                        type="number"
                        min="1000"
                        step="500"
                        value={stepGoal}
                        onChange={(e) =>
                            setStepGoal(Number(e.target.value))
                        }
                    />

                </div>


                <div className="goal-setting">

                    <div>
                        <strong>Daily glasses of water</strong>

                        <p className="muted">
                            A reminder to stay hydrated.
                        </p>
                    </div>

                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={waterGoal}
                        onChange={(e) =>
                            setWaterGoal(Number(e.target.value))
                        }
                    />

                </div>


                <div className="goal-setting">

                    <div>
                        <strong>Workouts per week</strong>

                        <p className="muted">
                            Plan a consistent weekly routine.
                        </p>
                    </div>

                    <input
                        type="number"
                        min="1"
                        max="14"
                        value={workoutGoal}
                        onChange={(e) =>
                            setWorkoutGoal(Number(e.target.value))
                        }
                    />

                </div>

            </section>


            <div className="stats-grid goal-summary">

                <article className="stat-card">
                    <div className="stat-icon">👟</div>
                    <p className="stat-label">Step goal</p>
                    <h3>{stepGoal.toLocaleString()}</h3>
                    <p className="stat-note">steps per day</p>
                </article>

                <article className="stat-card">
                    <div className="stat-icon">💧</div>
                    <p className="stat-label">Water goal</p>
                    <h3>{waterGoal}</h3>
                    <p className="stat-note">glasses per day</p>
                </article>

                <article className="stat-card">
                    <div className="stat-icon">🏋️</div>
                    <p className="stat-label">Workout goal</p>
                    <h3>{workoutGoal}</h3>
                    <p className="stat-note">sessions per week</p>
                </article>

            </div>

        </>

    );

}