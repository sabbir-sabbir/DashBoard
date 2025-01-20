import React from 'react'
import { BarChart, Bar, XAxis, YAxis,  Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
  

const Traffic = () => {
   const piData = [
    {
      name: 'United States',
      val: 52.1
    },
    {
      name: 'Canada',
      val: 52.1
    },
    {
      name: 'Mexico',
      val: 52.1
    },
    {
      name: 'Other',
      val: 52.1
    }
   ]

    const data = [
        { name: "Linux", traffic: 10000, color: "#8A7DF3" },  
        { name: "Mac", traffic: 25000, color: "#69DAC6" },     
        { name: "iOS", traffic: 20000, color: "#000000" },     
        { name: "Windows", traffic: 30000, color: "#84A8F8" }, 
        { name: "Android", traffic: 15000, color: "#ACC6F0" },
        { name: "Other", traffic: 20000, color: "#69D9A8" },           
      ];


  return (
    <section className="grid grid-cols-[auto,300px] h-auto py-2   mt-2">
        {/* first div */}
         <div className="bg-[#F9F9FA] rounded-lg">
            <div className="ml-10 pt-4"><h1 className="text-[14px] font-semibold text-black">Traffic by Device</h1></div>
         <div className="mt-2" style={{ width: "90%", height: 280 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          barCategoryGap="12%"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
         
         <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: "#666" }} 
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis tick={{ fontSize: 8, fill: "#00000066" }}  axisLine={false} 
            tickLine={false}/>
          <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0)" }} />
          
       
          <Bar dataKey="traffic" radius={[10, 10, 10, 10]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
         </div>



         {/* sec div */}
        <div className="bg-[#F9F9FA] rounded-lg ml-2 ">
        <div className="ml-10 pt-4"><h1 className="text-[14px] font-semibold text-black">Traffic by Device</h1></div>
           <div className="flex justify-between items-center gap-5 mt-16">
            <img className="w-[115px] h-[115px] " src="pi.png" alt="pi" />
            <div className="">
              {piData.map((pi, i)=> (
                     <div key={i} className="flex justify-between items-center gap-3 px-5">
                       <div className="flex flex-col gap-4"><p className="text-black text-[12px]">{pi.name}</p></div>
                       <div><p className="text-black text-[12px]">{pi.val}%</p></div>
                     </div>
              ))}
            </div>
           </div>
        </div>
    </section>
  )
}

export default Traffic