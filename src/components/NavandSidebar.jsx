import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Default from './Default/Default';
import Ovaerview from './Overview/Ovaerview';


const NavandSidebar = () => {
   const [Page, setPage ] = useState(false);

   const changePage = ()=> {
     setPage(!Page)
   }



  const contacts = [
    {
      img: 'p1.png',
      name: 'Natali Craig'
    },
    {
      img: 'p2.png',
      name: 'Drew Cano'
    },
    {
      img: 'p3.png',
      name: 'Andi Lane'
    },
    {
      img: 'p4.png',
      name: 'Koray Okumus'
    },
    {
      img: 'p5.png',
      name: 'Kate Morrison'
    },
    {
      img: 'p6.png',
      name: 'Melody Macy'
    }
  ];

  const [showNav, setShowNav] = useState(false)

  const handleclick =()=>  {
      setShowNav(!showNav)
  
  }

  return (
   <>
<section className="w-screen h-auto bg-[#0000001A]/10 p-2">
  <div className="grid grid-cols-1 md:grid-cols-[100px, auto, 100px] sm:grid-cols-[212px,auto,212px] h-full">
    {/* left sidebar */}
    <div className=" hidden sm:bg-white sm:py-2 sm:px-[8px] sm:rounded-l-lg sm:flex sm:flex-col sm:items-center sm:border-r-2 sm:border-[#0000001A]/10">
      <div className="flex justify-center items-center gap-2">
        <div>
          <img src="logo.png" alt="logo" />
        </div>
        <div>
          <h2 className="text-black">ByeWind</h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
        <div>
          <p className="text-[#00000033]/10">Favorites</p>
        </div>
        <div>
          <p className="text-[#00000033]/10">Recently</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 border-2 rounded-full bg-[#00000033]/10"></div>
          <p className="text-[#000000]/100 text-[14px]">Overview</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 border-2 rounded-full bg-[#00000033]/10"></div>
          <p className="text-[#000000]/100 text-[14px]">Projects</p>
        </div>
      </div>
      <div className="mt-4 text-start">
        <h2 className="text-[#00000066]/40 text-[14px]">Dashboards</h2>
      </div>
      <div className="w-full h-auto my-2 flex flex-col">
        <div className="flex items-center gap-2 justify-center w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img className="w-[15px] h-[15px]" src="pieicon.png" alt="" />
          </div>
          <div className="text-[14px] text-[#000000]/100">
            <h1>Overview</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="ec.png" alt="ec-icon" />
          </div>
          <div>
            <h1>eCommerce</h1>
          </div>
        </div>
      </div>
      <div className="mt-2 text-start hover:bg-gray-400/10">
        <h2 className="text-[#00000066]/40 text-[14px]">Pages</h2>
      </div>
      <div className="w-full h-auto my-2 flex flex-col">
        <div className="flex items-center gap-2 justify-center w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="profile.png" alt="profile-icon" />
          </div>
          <div>
            <h1 className="cursor-pointer" onClick={handleclick}>
              User Profile
            </h1>
          </div>
        </div>
        {showNav && (
          <div className="w-full h-auto my-2 flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-start gap-3">
              <div className="hover:bg-gray-400/10 px-8 py-1 rounded-[12px]">
                <h1>Overview</h1>
              </div>
              <div className="hover:bg-gray-400/10 px-8 py-1 rounded-[12px]">
                <h1>Projects</h1>
              </div>
              <div className="hover:bg-gray-400/10 px-8 py-1 rounded-[12px]">
                <h1>Campaigns</h1>
              </div>
              <div className="hover:bg-gray-400/10 px-8 py-1 rounded-[12px]">
                <h1>Documents</h1>
              </div>
              <div className="hover:bg-gray-400/10 px-8 py-1 rounded-[12px]">
                <h1>Followers</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-auto my-2 flex flex-col">
        <div className="flex items-center gap-2 ml-7 w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="acc.png" alt="account-icon" />
          </div>
          <div>
            <h1>Account</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="cor.png" alt="corporate-icon" />
          </div>
          <div>
            <h1>Corporate</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-6 w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="blog.png" alt="blog-icon" />
          </div>
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-6 w-[170px] h-[36px] rounded-[12px] hover:bg-gray-400/10">
          <div>
            <img src="miniarrow.png" alt="arrow-icon" />
          </div>
          <div>
            <img className="w-[15px] h-[13px]" src="social.png" alt="social-icon" />
          </div>
          <div>
            <h1>Social</h1>
          </div>
        </div>
      </div>
    </div>

   
    <div className="bg-white h-13 flex flex-col  px-1 py-2">
    <div className="bg-white h-11 flex items-center px-3 md:px-4 mb-3 border-b-2 border-gray-500/10">
  <div className="flex justify-between w-full">
    {/* left */}
    <div className="flex items-center gap-1 md:gap-4">
      <div>
        <img className=" w-4 h-4" src="sidebar.png" alt="sidebar-icon" />
      </div>
      <div>
        <img className="  w-4 h-4" src="star.png" alt="star-icon" />
      </div>
      <div className="flex items-center gap-2">
        <NavLink> <h1 className=" text-[12px] sm:text-[14px] md:text-[16px] text-[#00000066]/40">DashBoards</h1></NavLink>
        <span>/</span>
        <NavLink className=" text-[12px] sm:text-[14px] md:text-[16px]">Default</NavLink>
        <span>/</span>
        <NavLink className=" text-[12px] sm:text-[14px] md:text-[16px]" onClick={changePage} >Overview</NavLink>
      </div>
    </div>

    {/* right */}
    <div className="flex items-center mr-5 md:mr-2">
      <div className=" w-[100px] h-[20px] px-2  md:w-[190px] md:h-[28px] md:px-4  rounded-lg flex items-center ">
        <img className=" w-2 h-2 md:w-4 md:h-4 absolute ml-1" src="search.png" alt="search-icon" />
         <input className="outline-none bg-gray-400/40 w-full rounded-lg px-6 " type="text" placeholder="Search"  />
      </div>
      <div className="flex items-center gap-1 md:gap-2">
      <div><img src="sun.png" alt="sun-icon" /></div>
      <div><img  src="bcup.png" alt="backup-icon" /></div>
      <div><img  src="ring.png" alt="bell-icon" /></div>
      <div><img  src="sidebar.png" alt="sidebar-icon" /></div>
      </div>
      
    </div>
  </div>
</div>

{/* second or defaoult body section */}
<div className="w-full h-auto py-1 px-2">
  { Page ? <Ovaerview/> : <Default/>}
     
</div>
     
    </div>





    {/* right sidebar */}
    <div className=" hidden   sm:bg-white sm:py-2 sm:px-[8px] sm:border-l-2 sm:border-[#0000001A]/10 sm:flex sm:flex-col sm:items-center">
      <div >
        <h1 className="text-[#000000]/100 text-start ">Notifications</h1>
      </div>
      <div className=" flex flex-col justify-start items-start gap-4 p-4">
  <div className="flex items-center gap-2">
    <div className="bg-[#EDEEFC] p-2 rounded-lg">
      <img className="w-3 h-3" src="bug.png" alt="bug-icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">You fixed a bug.</h1>
      <p className="text-[#00000066]/40 text-[10px]">Just now</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div className="bg-[#E6F1FD] p-2 rounded-lg">
      <img className="w-3 h-3" src="User.png" alt="user-icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">New user registered.</h1>
      <p className="text-[#00000066]/40 text-[10px]">59 minutes ago</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div className="bg-[#EDEEFC] p-2 rounded-lg">
      <img className="w-3 h-3" src="bug.png" alt="bug-icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">You fixed a bug.</h1>
      <p className="text-[#00000066]/40 text-[10px]">12 hours ago</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div className="bg-[#EDEEFC] p-2 rounded-lg">
      <img className="w-3 h-3" src="Broadcast.png" alt="broadcast-icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Andi Lane subscribed to you.</h1>
      <p className="text-[#00000066]/40 text-[10px]">Today, 11:59 AM</p>
    </div>
  </div>
</div>


{/* Activities */}

<div>
  <div className="pl-3"><h1 className="text-[#000000]/100 text-start">Activities</h1></div>
  <div className=" flex flex-col justify-start items-start gap-4 p-4">
  <div className="flex items-center gap-2">
    <div >
      <img src="a1.png" alt="icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Changed the style.</h1>
      <p className="text-[#00000066]/40 text-[10px]">Just now</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div >
      <img  src="a2.png" alt="icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Released a new version.</h1>
      <p className="text-[#00000066]/40 text-[10px]">59 minutes ago</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div >
      <img  src="a3.png" alt="bug-icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Submitted a bug.</h1>
      <p className="text-[#00000066]/40 text-[10px]">12 hours ago</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div >
      <img  src="a4.png" alt="icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Modified A data in Page X.</h1>
      <p className="text-[#00000066]/40 text-[10px]">Today, 11:59 AM</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div>
      <img src="a5.png" alt="icon" />
    </div>
    <div className="flex flex-col leading-tight">
      <h1 className="text-[14px]">Deleted a page in Project X.</h1>
      <p className="text-[#00000066]/40 text-[10px]">Feb 2, 2024</p>
    </div>
  </div>
</div>
</div>

{/* contacts */}
   <div className="grid grid-cols-1 gap-2 w-full">
    <div className="ml-4"><h1 className="text-[#000000]/100 text-start  ">Contact</h1></div>
    {contacts.map((item, i)=> (
         <div className="flex items-center gap-2 mt-3 ml-5" key={i}>
              <div><img src={item.img} alt="img" /></div>
              <div><h1 className="text-[#000000]/100 text-[14px]">{item.name}</h1></div>
         </div>
    ))}
   </div>
      
    </div>
  </div>
</section>


   </>
  )
}

export default NavandSidebar