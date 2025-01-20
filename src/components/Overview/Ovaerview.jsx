import React from 'react'
import UsersChart from './UsersChart';
import DeviceTraffic from './DeviceTraffic';
import ProductTraffic from './ProductTraffic';

const Ovaerview = () => {
  const dataset = [
    {
      head: 'views',
      img: 'ArrowRise.png',
      num: 7265,
      poit: 11.01
    },
    {
      head: 'Visits',
      img: 'ArrowFall.png',
      num: 3671,
      poit: 11.01
    },
    {
      head: 'New Users',
      img: 'ArrowRise.png',
      num: 256,
      poit: 11.01
    },
    {
      head: 'Active Users',
      img: 'ArrowRise.png',
      num: 2318,
      poit: 11.01
    }
  
  ];
  return (
    <>
    <section>
        <div className="grid grid-cols-2 sm:grid-cols-4  items-center gap-8">
           
             {dataset.map((item, i)=> (
               <div key={i} className=" w-full h-auto py-1 px-4 rounded-xl  bg-gradient-to-b from-[#007AFF] to-[#007bffb4]">
                   <div className="flex justify-between items-center mb-4">
                    <div><p className="text-white ">{item.head}</p></div>
                    <div><img className="w-5 h-5 p-1 rounded-md bg-[#007AFF]  "   style={{
    backgroundImage: 'linear-gradient(to bottom, #FFFFFF66 40%, #FFFFFF00 0.01%, #FFFFFF00 0.01%, #FFFFFF1A 10%)',
    boxShadow: '0 0 1px 1px rgba(255, 255, 255, 0.2)',
  }} src={item.img} alt="" /></div>
                   </div>
                   <div className="flex justify-between items-end">
                    <div><h1 className="text-white">{item.num}</h1></div>
                    <div><p className="text-white">+{item.poit}%</p></div>
                   </div>
               </div>
             ))}
        </div>
       <UsersChart/>
       <DeviceTraffic/>
       <ProductTraffic/>

    </section>
    </>
  )
}

export default Ovaerview