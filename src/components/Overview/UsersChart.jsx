import React from 'react'
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";

const UsersChart = () => {
   
    const data = [
        { name: "Jan", value: 20 },
        { name: "Feb", value: 40 },
        { name: "Mar", value: 30 },
        { name: "Apr", value: 60 },
        { name: "May", value: 50 },
        { name: "Jun", value: 70 },
      ];
  return (
        <>
        <section>
           

            {/* chart */}
            <div className="bg-white p-3 rounded-lg drop-shadow-lg mt-2">
            <div className="w-full h-auto py-1  flex justify-between items-center gap-2 mt-2">
                <div className="flex justify-center items-center gap-3">
                    <h1 className="text-[#AF52DE] text-[16px]">Users</h1>
                    <h1 className="text-[#00000066]/40 text-[16px]" >Pojects</h1>
                    <h1 className="text-[#00000066]/40 text-[16px]" >Oparating status</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="w-auto h-auto py-1 px-1 rounded-md text-[12px] bg-gray-400/10">
                    <select className="bg-none bg-transparent outline-none">
                        <option value="Week">Week</option>
                    </select>
                    </div>
                   <div className="flex justify-center items-center gap-[0.5] w-auto h-auto py-1 px-1 bg-gray-400/10 rounded-md text-[12px]">
                    <div><img className="w-3 h-3" src="select.png" alt="icon" /></div>
                   <select className="bg-none bg-transparent outline-none">
                        <option value=""></option>
                    </select>
                   </div>
                   <div className="w-auto h-auto  px-2 rounded-md bg-gray-400/10 flex justify-center items-center text-[12px]"><p className="mb-2 ">...</p></div>
                   
                </div>
            </div>
            <ResponsiveContainer width="100%" height={290}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 10, left: 6, bottom: 10 }}
      >

        <XAxis dataKey="name" />
        <YAxis hide={true} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8A2BE2"
          strokeWidth={2}
          dot={{
            stroke: "black",
            strokeWidth: 2,
            r: 5,
            fill: "#fff",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
            </div>
        </section>
        </>
  )
}

export default UsersChart