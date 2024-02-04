"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export type UserDetails = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  function handleSave() {
    const existingAccount = JSON.parse(
      localStorage.getItem("userDetails") || "[]"
    );
    if (!userDetails.email && !userDetails.password) {
      return alert("please fill the details");
    } else if (existingAccount) {
      const emailValue = Object.values(existingAccount);
      for (const id of emailValue) {
        if (id.email === userDetails.email) {
          return alert("Account already exist!");
        }
      }
    }
    existingAccount.push(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(existingAccount));
  }

  function logInPage() {
    router.push("/");
  }

  return (
    <div className="w-full mx-auto md:w-1/2 py-10 px-5 md:px-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl text-gray-900">REGISTER</h1>
        <p>Enter your information to register</p>
      </div>
      <div>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">First name</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                value={firstName.charAt(0).toUpperCase() + firstName.slice(1)}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="John"
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">Last name</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                value={lastName.charAt(0).toUpperCase() + lastName.slice(1)}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Smith"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Email</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="johnsmith@example.com"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label className="text-xs font-semibold px-1">Password</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="************"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              onClick={() => handleSave()}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              onClick={() => logInPage()}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              HAVE AN ACCOUNT? LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
