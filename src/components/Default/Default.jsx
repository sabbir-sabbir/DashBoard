import React from 'react'
import Cards from './Cards'
import AriaCharts from './AriaCharts'
import Traffic from './Traffic'


const Default = () => {
  return (
       <>
       <section>
          <div className="flex justify-between items-center">
            <div><h1>Overview</h1></div>
            <div>
               <select className="outline-none border-none">
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Today">Today</option>
               </select>
            </div>
          </div>
          <Cards/>
          <AriaCharts/>
          <Traffic/>
       </section>
       </>
  )
}

export default Default