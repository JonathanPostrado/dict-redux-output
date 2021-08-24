import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../redux/reducer/userSlice';
import './login.css'

import { useHistory } from "react-router";

    const user = {
    username: '',
    password: ''
    }

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [account, setAccount] = useState(user)

    const invalidLogin = useSelector(state => state.user.invalidLogin)

    useEffect(() => {
        if (invalidLogin!==null) {
        if (invalidLogin) {
            alert("Username or password incorrect")
            dispatch(reset())
        } else {
            history.push("/")
        }
        }
    },[history, invalidLogin]) // eslint-disable-line

    const handleInput = (e) => {
        const accountCopy = {...account}
        accountCopy[e.target.name] = e.target.value
        setAccount(accountCopy)
    }

    return (
        

        <div class="overflow-hidden relative flex items-center min-h-screen">
        <div class="AddUserBG absolute bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 w-full h-1/2 z-0 top-0" ></div>
          <div class="absolute inset-x-auto w-full z-10">
            <div class="w-1/2 mx-auto shadow-md rounded-md p-4 bg-white">
              <div class="flex gap-2 flex-col md:flex-row center mt-10">

                <div class="relative flex-1">
                  <input value={account.username} onChange={handleInput} id="username" name="username" type="text" class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label for="username" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Username: </label>
                </div>

                <div class="relative flex-1">
                  <input value={account.password} onChange={handleInput} id="password" name="password" type="password" class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label for="password" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Password: </label>
                </div>
                
            </div>
              <div class="flex justify-center mt-6">
                <button type="button" onClick={() => dispatch(login(account))} class="bg-red-900 text-white font-extrabold text-lg rounded-full px-6 py-3">Login</button>
              </div>
          </div>
        </div>
    </div>

    )

}

export default Login;