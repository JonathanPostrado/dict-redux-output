import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addUserReducer } from "../../redux/reducer/userCrudSlice";
import "./AddUser.css";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleStatus = (e) => setStatus(e.target.value);

  const usersAmount = useSelector((state) => state.users.usersInfo.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        addUserReducer({
          id: usersAmount + 1,
          name,
          username,
          email,
          phone,
          location,
          status
        })
      );

      setError(null);
      history.push("/userList");
      alert("Record Successfully Saved")

    } else {
      setError("Fill in all fields");
    }

    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setLocation("");
    setStatus("");

  };

  return (
    // <div className="container">
    //   <div className="row">
    //     <h1>Add user</h1>
    //   </div>
    //   <div className="row">
    //     <div className="three columns">
    //       <label htmlFor="nameInput">Name</label>
    //       <input
    //         className="u-full-width"
    //         type="text"
    //         placeholder="test@mailbox.com"
    //         id="nameInput"
    //         onChange={handleName}
    //         value={name}
    //       />
    //       <label htmlFor="emailInput">Email</label>
    //       <input
    //         className="u-full-width"
    //         type="email"
    //         placeholder="test@mailbox.com"
    //         id="emailInput"
    //         onChange={handleEmail}
    //         value={email}
    //       />
    //       {error && error}
    //       <button onClick={handleClick} className="button-primary">
    //         Add user
    //       </button>
    //     </div>
    //   </div>
    // </div>

      <div class="overflow-hidden relative flex items-center min-h-screen bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
          <div class="absolute inset-x-auto w-full z-10">
            {/* <div class="w-2/3 mx-auto shadow-md rounded-md p-4 bg-white">
              <div class="flex gap-2 flex-col md:flex-row center mt-10">

                
              </div>
              <div class="flex justify-center mt-6">
                <button class="bg-red-900 text-white font-extrabold text-lg rounded-full px-6 py-3">Rechercher</button>
              </div>
          </div> */}

<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-4xl font-semibold">Add User Information</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="mt-5 py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            
            {/* Input for Name */}
              <div class="relative">
                <input onChange={handleName} value={name} autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
              </div>

            {/* Input for Username */} 
              <div class="relative">
                <input onChange={handleUsername} value={username} autocomplete="off" id="username" name="username" type="text" class="mt-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />
                <label for="username" class="mt-3 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
              </div>

            {/* Input for Email */}
              <div class="relative">
                <input onChange={handleEmail} value={email} autocomplete="off" id="email" name="email" type="text" class="mt-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" />
                <label for="email" class="mt-3 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
              </div>

            {/* Input for Phone */}
              <div class="relative">
                <input onChange={handlePhone} value={phone} autocomplete="off" id="phone" name="phone" type="text" class="mt-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Phone" />
                <label for="phone" class="mt-3 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone</label>
              </div>

            {/* Input for Location */}
              <div class="relative">
                <input onChange={handleLocation} value={location} autocomplete="off" id="location" name="location" type="text" class="mt-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Location" />
                <label for="location" class="mt-3 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Location</label>
              </div>

            {/* Input for Status */}  
              <div class="relative">
                <input onChange={handleStatus} value={status} autocomplete="off" id="status" name="status" type="text" class="mt-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Status" />
                <label for="status" class="mt-3 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Status</label>
              </div>
              
              {error && error}

            {/* Button */}
						<div class="flex justify-center">
							<button onClick={handleClick} class="bg-blue-500 text-white rounded-md px-2 py-1 mt-5">Add User</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


        </div>
    </div>
  );
}
