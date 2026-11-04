import { useState } from "react";

import SectionTitle from "../components/SectionTitle";


const workoutList = [

    {
        title: "Brisk walking",
        type: "Cardio",
        duration: "30 min",
        level: "Beginner",
        icon: "🚶"
    },

    {
        title: "Bodyweight strength",
        type: "Strength",
        duration: "25 min",
        level: "Intermediate",
        icon: "💪"
    },

    {
        title: "Full body stretching",
        type: "Flexibility",
        duration: "15 min",
        level: "Beginner",
        icon: "🧘"
    },

    {
        title: "Cycling",
        type: "Cardio",
        duration: "40 min",
        level: "Intermediate",
        icon: "🚴"
    }

];


export default function Workouts() {

    const [completed, setCompleted] = useState([]);


    function toggleWorkout(title) {

        setCompleted((current) =>

            current.includes(title)

                ? current.filter((item) => item !== title)

                : [...current, title]

        );

    }


    return (

        <>

            <SectionTitle
                title="Workout plans"
                subtitle="Choose an activity and track your completed workouts."
            />


            <div className="workout-grid">

                {workoutList.map((workout) => (

                    <article
                        className="workout-card"
                        key={workout.title}
                    >

                        <div className="workout-icon">
                            {workout.icon}
                        </div>

                        <span className="tag">
                            {workout.type}
                        </span>

                        <h3>{workout.title}</h3>

                        <p className="muted">
                            {workout.duration} • {workout.level}
                        </p>


                        <button
                            className={`button ${
                                completed.includes(workout.title)
                                    ? "button-success"
                                    : "button-primary"
                            }`}
                            onClick={() => toggleWorkout(workout.title)}
                        >

                            {completed.includes(workout.title)
                                ? "✓ Completed"
                                : "Mark as completed"}

                        </button>

                    </article>

                ))}

            </div>

        </>

    );

}