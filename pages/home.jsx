import ProfileBox from '../src/components/ProfileBox/ProfileBox';
import RightArrow from '../src/components/Icons/RightArrow';
// relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]

export default function Home() {
  return (
    <main className="flex bg-gray-100 min-h-screen items-center flex-col p-24">
      <div className="z-10 w-full  justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 text-lg top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto  lg:rounded-xl lg:p-4">
          Make Friends&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className = "flex justify-center relative w-full h-screen"> 
        <div className="flex justify-center items-center">
          <ProfileBox/>
        </div>
        <div className="absolute top-1/2 right-24">
          <RightArrow/>
        </div>
      </div>

    </main>
  );
}
