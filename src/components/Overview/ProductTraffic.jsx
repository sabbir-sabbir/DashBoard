import React from 'react'
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    Cell,
  } from "recharts";

  const CustomBar = (props) => {
    const { x, y, width, height } = props;
  
    return (
      <g>
        {/* Red Section (80% of the height) */}
        <rect
          x={x}
          y={y}
          width={width}
          height={0.8 * height}
          fill="red"
        />
        {/* Gray Section (15% of the height) */}
        <rect
          x={x}
          y={y + 0.8 * height}
          width={width}
          height={0.15 * height}
          fill="gray"
        />
        {/* Black Section (5% of the height) */}
        <rect
          x={x}
          y={y + 0.95 * height}
          width={width}
          height={0.05 * height}
          fill="black"
        />
      </g>
    );
  };
  

const ProductTraffic = () => {

    const data = [
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 75 },
        { month: 'Mar', value: 60 },
        { month: 'Apr', value: 80 },
        { month: 'May', value: 100 },
        { month: 'Jun', value: 90 },
        { month: 'Jul', value: 70 },
        { month: 'Aug', value: 85 },
        { month: 'Sep', value: 65 },
        { month: 'Oct', value: 95 },
        { month: 'Nov', value: 80 },
        { month: 'Dec', value: 110 }
      ];
  return (
    <>
    <section className="w-full h-auto py-2 px-2 bg-white rounded-lg drop-shadow-lg mt-2">
        <div className="  flex flex-col  items-center gap-2">
            {/* first col */}
            <div className="w-full flex justify-between items-center gap-3">
              <div><h1 className="text-[#FF3B30] text-[16px]">Product Traffic</h1></div>
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center gap-2">  <span className="w-[4px] h-[4px] bg-black rounded-full"></span> <h1>ALL</h1></div>
                <div className="flex justify-center items-center gap-2">  <span className="w-[4px] h-[4px] bg-gray-500 rounded-full"></span> <h1>SnowUI</h1></div>
                <div className="flex justify-center items-center gap-2">  <span className="w-[4px] h-[4px] bg-orange-600 rounded-full"></span> <h1>DashBoard</h1></div>
                <div><img className="w-5 h-5" src="Button.png" alt="icon" /></div>
              
              </div>
            </div>

            {/* second col */}
            <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductTraffic