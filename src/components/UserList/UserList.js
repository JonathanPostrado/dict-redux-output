import React, { useState } from 'react';
import { removeUserReducer } from "../../redux/reducer/userCrudSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const { usersInfo } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleSearch = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }

  const handleDelete = (id) => {
    dispatch(removeUserReducer({ id }));
  };

  return (

    <div class="mx-auto py-20 px-20 bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 h-screen w-full">
      <h1 class="text-3xl py-4 border-b mb-10">User Information List</h1>
      <div class="mb-4 flex justify-between items-center">
        <div class="flex-1 pr-4">
          <div class="relative md:w-1/3">
            <input value={filter} onChange={handleSearch} type="search"
              class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="Search..." />
            <div class="absolute top-0 left-0 inline-flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
          </div>
        </div>
      </div>

		<div class="tableDiv overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
      {loading ? (
            "Loading..."
          ) : (
			<table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
				<thead>
					<tr class="text-left">
            {/* <th class="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
							<label
								class="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
								<input type="checkbox" class="form-checkbox focus:outline-none focus:shadow-outline" />
							</label>
						</th> */}
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">ID</th>
						<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">NAME</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">USERNAME</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">EMAIL</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">PHONE</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">LOCATION</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">STATUS</th>
            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">ACTIONS</th>
					</tr>
				</thead>
        <tbody>
          {usersInfo.filter(user =>
            (filter==="")
            ?
            true
            :
            user.name.toLowerCase().includes(filter.toLowerCase())
            ||
            user.username.toLowerCase().includes(filter.toLowerCase())
            ||
            user.email.toLowerCase().includes(filter.toLowerCase())
            ||
            user.phone.toLowerCase().includes(filter.toLowerCase())
            ||
            user.location.toLowerCase().includes(filter.toLowerCase())
            ||
            user.status.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, name, username, email, phone, location, status}, i) => (

            <tr key={i}>
              {/* <td class="border-dashed border-t border-gray-200 px-3">
								<label
									class="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
									<input type="checkbox" class="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline" />
								</label>
							</td> */}
              <td class="border-dashed border-t border-gray-200 userId">
                <span class="text-gray-700 px-6 py-3 flex items-center">{id}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 Name">
                <span class="text-gray-700 px-6 py-3 flex items-center" >{name}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 lastName">
                <span class="text-gray-700 px-6 py-3 flex items-center">{username}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 emailAddress">
                <span class="text-gray-700 px-6 py-3 flex items-center">{email}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 Phone">
                <span class="text-gray-700 px-6 py-3 flex items-center">{phone}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 Location">
                <span class="text-gray-700 px-6 py-3 flex items-center">{location}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 Status">
                <span class="text-gray-700 px-6 py-3 flex items-center">{status}</span>
              </td>
              <td class="border-dashed border-t border-gray-200 Actions">
                <Link to={`/editUser/${id}`}>
                  <button class="text-green-500 hover:text-green-300 mx-2">
                    <i class="material-icons-outlined text-base">edit</i>
                  </button>
                </Link>
                <button onClick={() => handleDelete(id)} class="text-red-500 hover:text-red-300 ml-2">
                    <i class="material-icons-round text-base">delete_outline</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
			</table>
          )}
		</div>
  </div>
  );
}

export default UserList;