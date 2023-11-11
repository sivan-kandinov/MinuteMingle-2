export function ProfileBox(props) {
    return (
        <main>
            <div className="min-w-screen mb-5 shadow-m p-6 w-2/3 min-h-0 h-full bg-white items-center fixed left-0 top-0 flex justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
                <div className="relative bg-white h-full w-3/4 shadow">
                    <div className="w-full block text-center pr-7">
                        {/* Image at the top */}
                        <div>
                            <img src="/happy_guy.jpeg" className="w-full h-auto rounded" />
                        </div>
                        {/* name under image */}
                        <div>
                            <p className="text-lg font-bold text-black">Joseph</p>
                        </div>
                        {/* Interests section */}
                        <div className="bg-gray-500 rounded-md shadow-md border p-4">
                            <p className="text-lg font-bold text-black">Interests</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="display-block w-full mt-10 rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-6">
                    <p className="text-base text-neutral-600 dark:text-neutral-200">
                        This is some text within a card body.
                    </p>
                </div>
            </div>
        </main>
        
    );
}

export default ProfileBox;
