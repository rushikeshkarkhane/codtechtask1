import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import AdminNav from './AdminNav'
function Adminlogin() {
  const [email, setemail] = useState(null)
  const [pass, setpass] = useState(null)
  const [error, seterror] = useState(null)
  const navigate = useNavigate();
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/admin/';

  const handlelogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8000", {
        email, password: pass
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
      })
      if (response.data.status === "successadm" && response.status === 200) {
        navigate("/admin/dashboard")       
      }

    } catch (error) {
      alert(error)
    }

  }
  const emailchange = (e) => {
    setemail(e.target.value)
  }
  const passwordchange = (e) => {
    setpass(e.target.value)
  }
  return (
    <>
    {isLoginPage && <AdminNav />}
    <div className="flex justify-center items-center h-[40rem]">
      <div className="bg-slate-200 dark:bg-slate-950 sm:w-72 md:w-72 lg:w-[30%] px-10 py-10 rounded-md">

        <form class="" method="post">
          <label for="website-admin" class="block mb-2 text-3xl mb-5 font-medium text-gray-900 dark:text-white text-center">Login As Admin</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="email" onChange={emailchange} name="admemail" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Admin Email" />
          </div>
          <div class="flex my-6">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" class="w-4 h-4">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
              </svg>

            </span>
            <input type="password" onChange={passwordchange} name="admpassword" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" />
          </div>
          <div class="flex my-6">
            <input type="submit" onClick={handlelogin} value="Login" id="website-admin" class="rounded-lg bg-slate-300 dark:bg-slate-900 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Login" />
          </div>
        </form>
      </div>
    </div>

</>
  )
}

export default Adminlogin