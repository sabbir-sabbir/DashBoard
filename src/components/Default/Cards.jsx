import React from 'react'

const Cards = () => {
  return (
    <>
    <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-1 sm:gap-3 mt-2">
            <div><img src="Card1.png" alt="card-png" /></div>
            <div><img src="Card2.png" alt="card-png" /></div>
            <div><img src="Card3.png" alt="card-png" /></div>
            <div><img src="Card4.png" alt="card-png" /></div>
        </div>
    </section>
    </>
    
  )
}

export default Cards