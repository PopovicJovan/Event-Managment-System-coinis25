import {useState} from "react";
import registerImage from "../assets/undraw_login.svg";


export const RegisterPopup = ({className}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"flex justify-center items-center h-screen bg-black " + className}>
            <div className="w-5/6 md:w-3/6 bg-gray-900 p-8 rounded-lg shadow-lg flex items-center">
                <div className="w-6/6 hidden lg:block">
                    <img src={registerImage} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center text-white mb-6 uppercase">
                        Register
                    </h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setUser(e.target.value)}
                            className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
                        />
                    </div>
                    <button className="w-full p-3  bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer mb-4">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}