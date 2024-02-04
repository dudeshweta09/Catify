import React from "react";
import InputBar from "../components/input";
import SideBar from "../components/sidebar";
import FetchButton from "../components/fetchbutton";
import { Metadata } from "next";
import AuthGuard from "../components/authguard";
import LogOut from "../components/logout";
export const metadata: Metadata = {
  title: "One Place For Cats",
};
async function getStaticProps() {
  const response = await fetch(
    "https://guide-cat-api.sanity-io.vercel.app/cats"
  );
  if (!response) {
    throw new Error("No Data Found....");
  }
  return response.json();
}

export interface Data {
  breed: string;
}

export default async function BreedList() {
  const response: Array<Data> = await getStaticProps();

  return (
    <AuthGuard>
      <>
        <div className=" h-44 my-1 mx-1">
          <SideBar />
        </div>
        <div className=" bg-slate-200 h-14 mx-auto w-2/4 flex">
          <p className=" mt-4">https:/catify/breed/</p>{" "}
          <InputBar data={response} />
          <p className=" mt-4"> /images/random</p>
          <span>
            <FetchButton />
          </span>
        </div>
        <LogOut />
      </>
    </AuthGuard>
  );
}
