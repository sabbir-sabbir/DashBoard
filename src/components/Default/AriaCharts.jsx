import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
 
  Legend
} from "recharts";



 const AriaCharts = () => {
 const traffic = [
  {
    name: 'Google',
    img: 'dash1.png'
  },
  {
    name: 'YouTube',
    img: 'dash2.png'
  },
  {
    name: 'Instagram',
    img: 'dash3.png'
  },
  {
    name: 'Pinterest',
    img: 'dash43.png'
  },
  {
    name: 'Facebook',
    img: 'dash5.png'
  },
  {
    name: 'Twitter',
    img: 'dash6.png'
  },
 ]

  const ranData = [
    { name: "Jan", thisYear: 10000, lastYear: 5000 },
    { name: "Feb", thisYear: 12000, lastYear: 11000 },
    { name: "Mar", thisYear: 20000, lastYear: 20000 },
    { name: "Apr", thisYear: 12000, lastYear: 16000 },
    { name: "May", thisYear: 22000, lastYear: 26000 },
    { name: "Jun", thisYear: 16000, lastYear: 19000 },
    { name: "Jul", thisYear: 25000, lastYear: 30000 },
  ];
  return (
    <section
    className="grid grid-cols-[auto,200px] h-auto py-2   mt-2"
  >
    {/* Section One */}
    <div style={{ width: "100%", height: "300px" }}>
  <ResponsiveContainer>
    <AreaChart
      data={ranData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      {/* Gradient for "This Year" */}
      <defs>
        <linearGradient id="colorThisYear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#000" stopOpacity={0} />
        </linearGradient>

        {/* Gradient for "Last Year" */}
        <linearGradient id="colorLastYear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* X and Y Axes */}
      <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#555" }} axisLine={false} // Hides the X-axis line
            tickLine={false}/>
      <YAxis tick={{ fontSize: 8, fill: "#555" }} axisLine={false} // Hides the X-axis line
            tickLine={false}/>

      {/* Tooltip */}
      <Tooltip />

      {/* Legend */}
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        iconSize={5}
      />

      {/* Line for "This Year" */}
      <Area
        type="monotone"
        dataKey="thisYear"
        stroke="#000"
        strokeWidth={1}
        fill="url(#colorThisYear)"
        fillOpacity={0.5}
        name="This Year"
      />

      {/* Line for "Last Year" */}
      <Area
        type="monotone"
        dataKey="lastYear"
        stroke="#8884d8"
        strokeWidth={1}
        fill="url(#colorLastYear)"
        fillOpacity={0.5}
        name="Last Year"
        strokeDasharray="2 2"
      />
    </AreaChart>
  </ResponsiveContainer>
</div>



    {/* Section Two */}
    <div className="px-4 py-2">
     <div className="w-full h-auto bg-[#F9F9FA]">
      <div><h1 className="text-center text-[14px] text-black">Traffic by Website</h1></div>
      <div className="grid grid-cols-1 gap-2 px-2">
          {traffic.map((items, index)=> (
               <div key={index} className="flex justify-center items-center gap-2">
                     <div><h1 className="text-[12px] text-black">{items.name}</h1></div>  
                     <div><img src={items.img} alt="" /></div> 
               </div>
          ))}
      </div>

     </div>
    </div>
  </section>
  
  )
}


export default AriaCharts;

