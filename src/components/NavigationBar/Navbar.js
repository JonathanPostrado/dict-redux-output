import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { reset } from '../../redux/reducer/userSlice';
import './Navbar.css';

const Navbar = () => {

    // const users = useSelector(state => state.user.loginUsers);
    // const profile = users?.[0]?.name;

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = (e) => {
        dispatch(reset())
        history.push("/login")
        e.preventDefault()
    }


    return (
        <div>
            <nav class="bgColor">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center">
                                <h3 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Simple Redux-CRUD App</h3>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    
                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Home</Link>
                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/addUser">Add User Info</Link>
                                    {/* <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/editUser">Edit User Info</Link> */}
                                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/userList">List of Users</Link>
                                    <button onClick={(e) => handleLogout(e)} className="text-red-300 hover:bg-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Log out </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
