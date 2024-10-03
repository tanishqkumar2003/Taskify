import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleSignin = () => {
        navigate("/signin");
    };

    const featureSectionRef = useRef(null);

    const scrollToFeatures = () => {
        if (featureSectionRef.current) {
            featureSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-100 font-sans">

            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1  className="text-4xl font-bold text-gray-800">Taskify</h1>
                    <div>
                        <button
                            
                            className="text-gray-800 hover:text-indigo-600 mx-4 cursor-pointer"
                            onClick={scrollToFeatures}
                        >
                            Features
                        </button>
                        <button onClick={handleSignin} className="text-gray-800 hover:text-indigo-600 mx-4">Login</button>
                        <button onClick={handleSignup} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Sign Up</button>
                    </div>
                </div>
            </nav>


            <section className="bg-indigo-600 text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl font-bold">Organize Your Day, Your Way</h1>
                    <p className="mt-4 text-lg">Stay productive and get things done with our easy-to-use to-do app!</p>
                    <a onClick={handleSignup} className="mt-6 inline-block bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-gray-200">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section
                ref={featureSectionRef}  // Attach ref to this section
                className="container mx-auto px-6 py-16"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">Easy Task Management</h3>
                        <p className="mt-4 text-gray-600">Quickly add, edit, and organize your tasks to stay on top of your day.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">Customizable Categories</h3>
                        <p className="mt-4 text-gray-600">Organize tasks into categories to keep everything neat and tidy.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">Reminders & Notifications</h3>
                        <p className="mt-4 text-gray-600">Get notified when it’s time to tackle your next task.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold">Start organizing your tasks today!</h2>
                    <p className="mt-4 text-lg">Sign up now and start getting things done.</p>
                    <a onClick={handleSignup} className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-500">
                        Sign Up for Free
                    </a>
                </div>
            </section>

            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-6 py-4 text-center">
                    <p className="text-sm">&copy; 2024 TodoApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
