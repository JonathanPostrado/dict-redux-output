import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeUserReducer } from "../../redux/reducer/userCrudSlice";


const Searchbar = ({filter}) => {

    const dispatch = useDispatch();

    const { usersInfo } = useSelector((state) => state.users);


    const handleDelete = (id) => {
        dispatch(removeUserReducer({ id }));
    };

    const searchUser = usersInfo.filter(user => (filter==="")?true:user.toString().toLowerCase().includes(filter.toLowerCase()))
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
    ))



    return (
        <div>
            {searchUser}
        </div>
    )
}

export default Searchbar;
