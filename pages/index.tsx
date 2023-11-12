import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import RightArrow from './components/RightArrow'
import Navbar from '../pages/components/Navbar.jsx';

type ConnectionStatus = {
  isConnected: boolean
}

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise
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
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 right-36">
        <RightArrow />
      </div>
      <div className="bg-gray-200">
        <div className="mx-auto mt-10 w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
              <img className="rounded-t-lg" src="/images/happy_guy.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                {/* HAVE TO REPLACE WITH THE ACTUAL PERSON'S NAME */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeremy, 22</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Interests:</p>
          </div>
        </div>
      </div>
    </div>
);
}
