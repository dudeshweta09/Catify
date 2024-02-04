"use client";
import Link from "next/link";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserDetails } from "./registerdata";

const LogData = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function LogIn() {
    const getdata = JSON.parse(localStorage.getItem("userDetails") ?? "[]");
    const loggedIn =
      getdata?.filter((ud: UserDetails) => {
        return ud.email == username && ud.password == password;
      })?.length > 0;
    if (loggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(true));
      alert("you are logged in");
      router.push("/breed");
    } else {
      alert("Invalid Credentials!");
    }
  }
  return (
    <>
      <div className="mt-10">
        <h1 className=" w-1/2 mx-auto text-center font-bold text-4xl">Login</h1>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={() => LogIn()}
      >
        <div className="w-full max-w-xs mx-auto my-auto">
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                type="text"
                placeholder="Username"
                area-describedby="usernameHelp"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="******************"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between mt-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mx-auto w-1/2 focus:shadow-outline focus:outline-none"
                type="button"
              >
                <Link href="./register">Create New Account</Link>
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default LogData;
