import { useState } from "react";

import {
    getUsers,
    saveUsers,
    saveSession
} from "../utils/storage";


export default function Auth({ onLogin }) {

    const [mode, setMode] = useState("login");

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");


    function handleSubmit(event) {

        event.preventDefault();

        setMessage("");

        const cleanEmail = email.trim().toLowerCase();

        const users = getUsers();


        // SIGNUP PROCESS

        if (mode === "signup") {

            if (!name.trim()) {
                setMessage("Please enter your name.");
                return;
            }

            const exists = users.some(
                (user) => user.email === cleanEmail
            );

            if (exists) {
                setMessage("Account already exists.");
                return;
            }


            const newUser = {

                id: Date.now(),

                name: name.trim(),

                email: cleanEmail,

                password: password,

                role: "user"

            };


            saveUsers([...users, newUser]);

            saveSession(newUser);

            onLogin(newUser);

            return;
        }


        // LOGIN PROCESS

        const foundUser = users.find(
            (user) =>
                user.email === cleanEmail &&
                user.password === password
        );


        if (!foundUser) {

            setMessage("Incorrect email or password.");

            return;
        }


        saveSession(foundUser);

        onLogin(foundUser);

    }


    return (

        <main className="auth-page">

            <section className="auth-intro">

                <div className="brand auth-brand">

                    <div className="brand-mark">
                        F
                    </div>

                    <div>
                        <strong>FitTrack</strong>
                        <span>FITNESS & WELLNESS</span>
                    </div>

                </div>


                <div className="auth-copy">

                    <span className="eyebrow">
                        BUILD HEALTHY HABITS
                    </span>

                    <h1>
                        Your fitness journey, made simple.
                    </h1>

                    <p>
                        Track your daily activity, plan workouts,
                        monitor nutrition, and celebrate every step.
                    </p>

                </div>

            </section>


            <section className="auth-panel">

                <form
                    className="auth-card"
                    onSubmit={handleSubmit}
                >

                    <h2>
                        {mode === "login"
                            ? "Sign in to FitTrack"
                            : "Create your account"}
                    </h2>


                    {mode === "signup" && (

                        <label>
                            Full name

                            <input
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="Your name"
                                required
                            />

                        </label>

                    )}


                    <label>
                        Email address

                        <input
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder="you@example.com"
                            required
                        />

                    </label>


                    <label>
                        Password

                        <input
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Enter password"
                            minLength="6"
                            required
                        />

                    </label>


                    {message && (
                        <p className="form-message">
                            {message}
                        </p>
                    )}


                    <button
                        className="button button-primary full-button"
                        type="submit"
                    >
                        {mode === "login"
                            ? "Sign in"
                            : "Create account"}
                    </button>


                    <p className="auth-switch">

                        {mode === "login"
                            ? "New to FitTrack?"
                            : "Already have an account?"}

                        <button
                            type="button"
                            className="text-button"
                            onClick={() => {
                                setMode(
                                    mode === "login"
                                        ? "signup"
                                        : "login"
                                );

                                setMessage("");
                            }}
                        >
                            {mode === "login"
                                ? "Create account"
                                : "Sign in"}
                        </button>

                    </p>


                    <div className="demo-login">

                        <strong>Demo admin login</strong>

                        <span>admin@fittrack.com</span>

                        <span>Password: Admin123!</span>

                    </div>

                </form>

            </section>

        </main>

    );
}