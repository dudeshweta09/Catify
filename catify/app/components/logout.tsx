"use client";

import { useRouter } from "next/navigation";

const LogOut = () => {
  const router = useRouter();
  return (
    <button
      className=" mt-96 ml-2"
      onClick={() => {
        localStorage.setItem("loggedIn", JSON.stringify(false)),
          router.push("/");
      }}
    >
      LogOut!
    </button>
  );
};

export default LogOut;
