import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import RightArrow from './components/RightArrow'

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
      <button className="absolute top-[25px] left-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      </button>
      <div className="bg-gray-200 pt-5">
        <div className="mx-auto w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
              <img className="rounded-t-lg" src="/images/happy_guy.jpg" alt="" />
          </a>
          <div className="pt-5 px-5 pb-3">
              <a href="#">
                {/* HAVE TO REPLACE WITH THE ACTUAL PERSON'S NAME */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeremy, 22</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Major(s):</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Minor(s):</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Courses:</p>
          </div>
          <div className="flex mb-4 justify-center">            
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-black bg-gray-200 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-400 dark:text-white dark:bg-black dark:hover:bg-gray-500 dark:focus:ring-gray-600">
              Become Study Buddies with Jeremy!
            </a>          
          </div>
        </div>
      </div>
    </div>
);
}
