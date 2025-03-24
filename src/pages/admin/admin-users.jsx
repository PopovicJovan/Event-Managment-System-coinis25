import {useUsers} from "../../hooks/use-users.js";
import {useState} from "react";
import Pagination from "@mui/material/Pagination";
import {useNavigate} from "react-router-dom";
import {usersService} from "../../services/users-service.js";


export const AdminUsers = () => {
    const {users, loading} = useUsers();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 10;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const showDetails = (id) => navigate(`/admin/users/${id}`);
    const banUser = (id) => usersService.banUser(id);

    return (
        <>
            <div className={"w-full overflow-x-auto"}>
                {!loading && <>
                    <table className="w-full border-collapse rounded-lg shadow-lg table-auto bg-white ">
                        <thead>
                            <tr className="bg-green-600 text-white text-left">
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                    <tbody>
                        {users.slice((page-1)*itemsPerPage, page*itemsPerPage).map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100 ">
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4 break-words whitespace-normal">{user.firstName + " " + user.lastName}</td>
                                <td className="px-6 py-4 ">{user.email}</td>
                                <td className="px-6 py-4 flex flex-col lg:flex-row justify-center gap-2">
                                    <button className="w-full lg:w-1/2 px-3 py-1
                                            text-sm text-white bg-blue-500
                                            hover:bg-blue-600 rounded"
                                            onClick={() => showDetails(user.id)}>
                                        Show details
                                    </button>
                                    <button className="w-full lg:w-1/2 px-3 py-1
                                            text-sm text-white bg-red-500
                                             hover:bg-red-600 rounded"
                                            onClick={() => banUser(user.id)}>
                                        Ban user
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center my-6 text-white">
                    <Pagination
                        count={Math.ceil(users.length / itemsPerPage)}
                        page={page}
                        onChange={(_, v) => handlePageChange(_, v)}
                        color="secondary"
                    />
                </div>
                </>
                }

            </div>
        </>
    );
}