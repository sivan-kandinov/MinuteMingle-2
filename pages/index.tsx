"use client";

import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import RightArrow from "./components/RightArrow";
import { useEffect, useState } from "react";
import Image from "next/image";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [person, setPerson] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>("/images/happy_guy.jpg");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/api/randomUser");
      const json = await res.json();
      setPerson(json);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 right-[10%]">
        <RightArrow person={person} setPerson={setPerson} setPicture={setPicture}/>
      </div>
      <div className="bg-gray-200">
        <div className="mx-auto mt-10 w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src={picture}
            alt="picture of a person"
            id="profilePic"
            className="rounded-t-lg transition duration-500 "
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {person && person.basicInfo.firstName}{" "}
              {person && person.basicInfo.lastName},{" "}
              {person && person.basicInfo.age}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Major(s): {person && person.academicInfo.majors}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Minor(s): {person && person.academicInfo.minors}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Courses: {person && person.academicInfo.classes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
