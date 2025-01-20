import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,

    Tooltip,
    ResponsiveContainer,
    Cell
  } from "recharts";

const DeviceTraffic = () => {

    const data = [
        { name: "Linux", value: 2 },
        { name: "Mac", value: 3 },
        { name: "iOS", value: 2 },
        { name: "Windows", value: 4 },
        { name: "Android", value: 1 },
        { name: "Other", value: 3},
      ];
  return (
    <>
    <section className="grid grid-cols-1 sm:grid-cols-2  gap-3 px-2 py-2">
        {/* first col */}
        
        <div className="py-2 px-1 bg-white drop-shadow-lg rounded-lg">
        <div className="flex justify-between items-center mt-2 mx-3 ">
                <div><h1 className="text-[13px] text-[#007AFF]">Device Traffic</h1></div>
                <div><img className="w-5 h-5" src="Button.png" alt="icon" /></div>
            </div>
        <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
      
        {/* X Axis */}
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9, fill: "#666" }}
        />
        {/* Y Axis */}
        <YAxis hide={true} />
        {/* Tooltip */}
        <Tooltip cursor={{ fill: "transparent" }} />
        {/* Bars with custom colors */}
        <Bar dataKey="value" radius={[12, 12,12, 12]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === "Android" ? "#007AFF" : "#D1D5DB"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer> 
        </div>

        {/* second col */}
        <div className="py-2 px-1 bg-white drop-shadow-lg rounded-lg">
        <div className="flex justify-between items-center mt-2 mx-3 ">
                <div><h1 className="text-[13px] text-[#34C759]">Device Traffic</h1></div>
                <div><img className="w-5 h-5" src="Button.png" alt="icon" /></div>
            </div>
        <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >

        {/* X Axis */}
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9, fill: "#666" }}
        />
        {/* Y Axis */}
        <YAxis hide={true} />
        {/* Tooltip */}
        <Tooltip cursor={{ fill: "transparent" }} />
        {/* Bars with custom colors */}
        <Bar dataKey="value" radius={[12, 12,12, 12]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === "Android" ? "#007AFF" : "#D1D5DB"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
        </div>
    </section>
    </>
  )
}

export default DeviceTraffic