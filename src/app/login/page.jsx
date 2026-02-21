"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push("/admin/blogs")
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="border p-6 rounded-lg w-80 space-y-3 bg-white shadow"
            >
                <h1 className="text-xl font-bold text-center">Admin Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border w-full p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border w-full p-2 rounded"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
