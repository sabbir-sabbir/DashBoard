import React from 'react'

const Projects = () => {
   
  return (
    <>
    <section className="w-full h-auto py-2 px-2 bg-white rounded-lg drop-shadow-lg mt-2">
        <div className="flex flex-col  items-center gap-2">
            {/* first cols */}
           <div className="w-full flex justify-between items-center gap-3">
           <div><h1 className="text-[#FF3B30] text-[16px]">Projects</h1></div>
          <div><img className="w-5 h-5" src="Button.png" alt="icon" /></div>  
           </div>

           {/* second-cols */}
           <div   className="w-full ">
           <table className="table-auto w-full ">
        <thead>
          <tr className="">
            <th className=" px-4 py-2 text-left text-gray-400/55 font-semibold text-[11px]">Maneger</th>
            <th className=" px-4 py-2 text-left text-gray-400/55 font-semibold text-[11px]">Date</th>
            <th className=" px-4 py-2 text-left text-gray-400/55 font-semibold text-[11px]">Amout</th>
            <th className=" px-4 py-2 text-left text-gray-400/55 font-semibold text-[11px]">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white ">
            <td className=" px-4 py-2 text-[10px]">ByeWind</td>
            <td className=" px-4 py-2 text-[10px]">Jun 24, 2024</td>
            <td className=" px-4 py-2 text-[10px]">Row 1, Data 3</td>
            <td className=" px-4 py-2 text-[10px] text-[#AF52DE] ">In progress</td>
          </tr>
          <tr className="bg-gray-400/40 ">
            <td className=" px-4 py-2 text-[10px]">Natali Craig</td>
            <td className=" px-4 py-2 text-[10px]">Feb 24, 2024</td>
            <td className=" px-4 py-2 text-[10px]">Row 2, Data 3</td>
            <td className=" px-4 py-2 text-[10px] text-[#34C759]">Completed</td>
          </tr>
          <tr className="bg-white">
            <td className=" px-4 py-2 text-[10px]">Orlando Diggs</td>
            <td className=" px-4 py-2 text-[10px]">Jun 24, 2024</td>
            <td className=" px-4 py-2 text-[10px]">$942.00</td>
            <td className=" px-4 py-2 text-[10px] text-[#007AFF]">Pending</td>
          </tr>
          <tr className="bg-gray-400/40">
            <td className=" px-4 py-2 text-[10px]">Andi Lane</td>
            <td className=" px-4 py-2 text-[10px]">Jul 24, 2024</td>
            <td className=" px-4 py-2 text-[10px]">$942.00</td>
            <td className=" px-4 py-2 text-[10px] text-[#FFCC00] ">Aproved</td>
          </tr>
          <tr className="bg-white">
            <td className=" px-4 py-2 text-[10px]">Drew Cano</td>
            <td className=" px-4 py-2 text-[10px]">Apr 24, 2024</td>
            <td className=" px-4 py-2 text-[10px]">$942.00</td>
            <td className=" px-4 py-2 text-[10px] text-[#00000066]/40 ">Recived</td>
          </tr>
        </tbody>
      </table>
           </div>
        </div>
    </section>
    </>
  )
}

export default Projects