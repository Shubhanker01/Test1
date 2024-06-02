export default function Header() {
    return (

        <div className='bg-gray-600 w-full fixed top-0 left-0 h-[50px]'>
            <div className="flex">
                <div className="mt-[2px]">
                    <div className="w-[30px] h-[5px] rounded-lg bg-neutral-100 ml-2 mt-[5px]"></div>
                    <div className="w-[30px] h-[5px] rounded-lg bg-neutral-100 ml-2 mt-[5px]"></div>
                    <div className="w-[30px] h-[5px] rounded-lg bg-neutral-100 ml-2 mt-[5px]"></div>
                </div>
                <h1 className='text-3xl text-neutral-100 ml-[35px]'>ShopLift</h1>

            </div>
            <div className="relative top-[-25px] right-[-375px]">
                <a href="#" className="text-lg text-neutral-100 ml-[15px]">Products</a>
                <a href="#" className="text-lg text-neutral-100 ml-[15px]">Contact Us</a>
                <a href="#" className="text-lg text-neutral-100 ml-[15px]">About Us</a>
            </div>
        </div>

    )
}