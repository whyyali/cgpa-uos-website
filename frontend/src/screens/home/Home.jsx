
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-80 h-80 lg:w-96 lg:h-80 border-[#1679AB] border-2 bg-[#C5FF95] rounded-lg">
                <div className="w-full flex items-end gap-4 p-3 lg:p-4">
                    <img src="/images/uni.jpg" alt="" className="h-28 w-28 lg:h-24 lg:w-24 rounded-full" />
                    <div>
                        <h1 className="text-[#074173] text-lg lg:text-2xl font-bold">UOS SAHIWAL</h1>
                        <p className="text-sm text-[#1679AB]">University of Sahiwal is an HEC- & PHEC-recognized government sector university in Sahiwal, Pakistan.</p>
                    </div>
                </div>
                <div className="px-4 lg:py-2 flex flex-col gap-y-1 lg:gap-y-2">
                    <h2 className="text-sm text-[#1679AB]">Enter Your ID</h2>
                    <input type="text" className="py-2 px-2 border-[#1679AB] text-[#1679AB] outline-none border-2 rounded-lg hover:outline-none" placeholder="xxxxxxxxxx" />
                    <button className="p-2 bg-[#1679AB] text-black-500 rounded-lg">Search</button>
                </div>
                <div className="flex my-2 lg:my-0 w-full items-start justify-end">
                    <a href="/signin" className="px-2 py-1 bg-yellow-300 border-transparent-300 border-2 rounded-lg mr-4 lg:mr-4 underline-none hover:text-[#1679AB] hover:bg-transparent hover:border-[#1679AB] hover:border-2">Admin</a>
                </div>
            </div>
        </div>
    )
}

export default Home