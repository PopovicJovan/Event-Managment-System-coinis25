import {Button} from "antd";
import userImage from "../assets/user_image.jpg";
import {Calendar, Lock, Mail} from "lucide-react";
import {SpinLoader} from "./spin-loader.jsx";
import {useNavigate} from "react-router-dom";


const SingleUser = ({user, error, showLogout=true, logout}) => {
    return (
        <div>
            {user ? (
                (
                    (
                        <>
                            <div className="flex items-center justify-center min-h-200 bg-bgColor">
                                <div className="w-full max-w-lg bg-gray-900 shadow-lg rounded-xl p-6 text-center">
                                    <div className="mx-auto mb-4">
                                        <img
                                            src={user.image ? user.image : userImage}
                                            alt={`Name's profile`}
                                            className="w-48 h-48 rounded-full object-cover border-4 border-purple-700 mx-auto shadow-md"
                                        />
                                    </div>

                                    <p className="text-white font-medium mb-4">@{user.username}</p>

                                    <div className="space-y-3 text-left px-4">
                                        <div className="flex items-center text-gray-700">
                                            <Mail className="mr-3 text-purple-700" size={20} />
                                            <span className="truncate text-white">{user.email}</span>
                                        </div>

                                        <div className="flex items-center text-gray-700">
                                            <Calendar className="mr-3 text-purple-700" size={20} />
                                            <span className="text-white">Joined {user.created_at}</span>
                                        </div>

                                        <div className="flex items-center text-gray-700">
                                            <Lock className="mr-3 text-purple-700" size={20} />
                                            <span className="text-white">{user.admin ? "Admin" : "User"}</span>
                                        </div>
                                    </div>

                                    {showLogout && (
                                        <div className="mt-6">
                                            <button
                                                onClick={logout}
                                                className="bg-purple-700 text-white px-6 py-2 rounded-2xl hover:bg-purple-900 transition duration-300 ease-in-out"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ))
            ) : error ? (
                <div className="error-message">
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
            ) : (
                <SpinLoader />
            )}
        </div>
    );
}


export default SingleUser;