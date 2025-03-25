import { useState } from "react";
import { CardComponent } from "../components/card";
import { useParties } from "../hooks/use-parties";
import Pagination from "@mui/material/Pagination";
import {PaginationComponent} from "../components/pagination-component.jsx";

export const PartiesPage = () => {
  const {
    filteredParties,
    isLoading,
    setSearchTerm,
    applyFilter,
    searchTerm,
    deleteFilter,
    isFiltered,
    organizerFilter,
    setOrganizerFilter,
    startDateFilter,
    setStartDateFilter,
    endDateFilter,
    setEndDateFilter,
    countryFilter,
    setCountryFilter,
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
      {/* Search and Filter Bar */}
      <div className="flex flex-wrap justify-center my-6 gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a party..."
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilter();
            }
          }}
        />

        {/* Country Filter */}
        <input
          type="text"
          placeholder="Search by Country..."
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilter();
            }
          }}
        />

        {/* Organizer Filter */}
        <input
          type="text"
          placeholder="Search by Organizer..."
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
          value={organizerFilter}
          onChange={(e) => setOrganizerFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilter();
            }
          }}
        />

        {/* Start Date Filter */}
        <input
          type="date"
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilter();
            }
          }}
        />

        {/* End Date Filter */}
        <input
          type="date"
          className="w-full sm:max-w-xs px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryPurple bg-darkGray text-white"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilter();
            }
          }}
        />

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          {isFiltered ? (
            <>
              <button
                className="px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
              <button
                className="px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
                onClick={deleteFilter}
              >
                Remove Filter
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700 transition"
              onClick={applyFilter}
            >
              Apply Filter
            </button>
          )}
        </div>
      </div>

      {/* Loading or Party Cards */}
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
                  country={party.nameCountry}
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
                                   currentPage={page}  className={"mt-5"}/>
            </div>
          )}
        </>
      )}
    </div>
  );
};
