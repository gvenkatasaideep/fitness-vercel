import { useState } from "react";

import SectionTitle from "../components/SectionTitle";


export default function Nutrition() {

    const [food, setFood] = useState("");

    const [calories, setCalories] = useState("");

    const [meals, setMeals] = useState([]);


    function addMeal(event) {

        event.preventDefault();

        const newMeal = {

            id: Date.now(),

            food: food,

            calories: Number(calories)

        };

        setMeals([...meals, newMeal]);

        setFood("");

        setCalories("");

    }


    const total = meals.reduce(
        (sum, meal) => sum + meal.calories,
        0
    );


    return (

        <>

            <SectionTitle
                title="Nutrition tracker"
                subtitle="Keep a simple record of the food you eat."
            />


            <div className="content-grid">

                <form
                    className="panel form-panel"
                    onSubmit={addMeal}
                >

                    <h3>Add a meal</h3>


                    <label>
                        Food item

                        <input
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                            placeholder="Example: Vegetable rice"
                            required
                        />
                    </label>


                    <label>
                        Calories (kcal)

                        <input
                            type="number"
                            min="0"
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            placeholder="Example: 350"
                            required
                        />
                    </label>


                    <button
                        className="button button-primary"
                        type="submit"
                    >
                        Add food
                    </button>

                </form>


                <section className="panel">

                    <div className="nutrition-total">

                        <div>
                            <span className="eyebrow">
                                LOGGED CALORIES
                            </span>

                            <h2>
                                {total} <small>kcal</small>
                            </h2>
                        </div>

                        <span className="nutrition-emoji">
                            🥗
                        </span>

                    </div>


                    <h3>Today's food log</h3>


                    {meals.length === 0 ? (

                        <p className="empty-state">
                            Your food entries will appear here.
                        </p>

                    ) : (

                        <ul className="food-list">

                            {meals.map((meal) => (

                                <li key={meal.id}>

                                    <span>{meal.food}</span>

                                    <strong>
                                        {meal.calories} kcal
                                    </strong>

                                </li>

                            ))}

                        </ul>

                    )}

                </section>

            </div>

        </>

    );

}