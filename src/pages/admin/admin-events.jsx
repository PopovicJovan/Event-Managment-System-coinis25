import {useParties} from "../../hooks/use-parties.js";
import {useState} from "react";
import {CardComponent} from "../../components/card.jsx";
import Pagination from "@mui/material/Pagination";
import {PaginationComponent} from "../../components/pagination-component.jsx";

export const AdminEvents = () => {
    const {
        filteredParties,
        isLoading,
        setSearchTerm,
        applyFilter,
        searchTerm,
        deleteFilter,
        isFiltered,
    } = useParties();
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    const handleChange = (event, value) => {
        setPage(value);
    };

    const paginatedParties = filteredParties.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="flex justify-center my-6">
                <input
                    type="text"
                    placeholder="Search for a party..."
                    className="w-full max-w-lg px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            applyFilter();
                        }
                    }}
                />
                {isFiltered ? (
                    <>
                        <button
                            className="ml-4 px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
                            onClick={applyFilter}
                        >
                            Search
                        </button>

                        <button
                            className="ml-4 px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
                            onClick={deleteFilter}
                        >
                            Remove Filter
                        </button>
                    </>
                ) : (
                    <button
                        className="ml-4 px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
                        onClick={applyFilter}
                    >
                        Search
                    </button>
                )}
            </div>

            {isLoading ? (
                <h1 className="text-center text-white">Loading ...</h1>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedParties.length > 0 ? (
                            paginatedParties.map((party) => (
                                <CardComponent
                                    key={party.id}
                                    title={party.nameParty}
                                    organizer={party.nameOrganizer}
                                    image={party.urlImageFull}
                                    dateStart={party.dateStart}
                                    dateEnd={party.dateEnd}
                                    id={party.id}
                                    isAdmin={true}
                                />
                            ))
                        ) : (
                            <h2 className="text-center text-white col-span-full">
                                No parties found.
                            </h2>
                        )}
                    </div>

                    {/* Pagination */}
                    {filteredParties.length > itemsPerPage && (
                        <div className="flex justify-center my-6 text-white">
                            <PaginationComponent totalLength={filteredParties.length}
                                                 perPage={itemsPerPage} handlePageChange={handleChange}
                                                 currentPage={page} className={"my-5"} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
