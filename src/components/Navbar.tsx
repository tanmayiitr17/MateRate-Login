import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleHamberger = () => {
        console.log("first")
        setOpen(open => !open);
    }

    return (
        <div className="bg-[rgb(9,132,253)] flex items-center justify-between  py-[10px] px-[20px]">
            <div className="flex items-center text-[20px] font-[700] text-[#fff] cursor-pointer">
                <img src="https://nom.mathmaterate.com/static/media/Logo-lg.b059f4b405cf0d67d81c.png"
                    alt="logo"
                    className="!w-[50px] !h-[50px] mr-[10%]"
                />
                <span className="text-[rgb(255,214,0)]">M</span>ateRate
            </div>
            <div className="flex gap-[17px] text-[17px] text-[#fff] font-[500] max-sm:hidden">
                <span className="cursor-pointer hover:text-yellow-400">Home</span>
                <span className="cursor-pointer hover:text-yellow-400">About Us</span>
                <span className="cursor-pointer hover:text-yellow-400">Login</span>
            </div>
            <DensityMediumIcon className="!hidden !text-[#fff] !cursor-pointer max-sm:!block" onClick={handleHamberger} />
            {open &&
                <div className='bg-[rgb(9,132,253)] w-full fixed top-0 left-0 right-0 z-[100]'>
                    <CloseRoundedIcon className='!text-yellow-400 !cursor-pointer fixed top-0 right-0 !w-[10%] !h-[10%]' onClick={handleHamberger} />
                    <div className=" flex items-center flex-col gap-[17px] text-[17px] py-[7vh] text-[#fff] font-[500]">
                        <span className="cursor-pointer hover:text-yellow-400">Home</span>
                        <span className="cursor-pointer hover:text-yellow-400">About Us</span>
                        <span className="cursor-pointer hover:text-yellow-400">Login</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar