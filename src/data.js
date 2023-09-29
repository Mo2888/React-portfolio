import React from "react";
import ui from "./assets/ui-design.png"
import web from "./assets/website-design.png"
import app from "./assets/app-design.png"
import {AiOutlineMobile,AiOutlineColumnWidth,
  AiFillFormatPainter,AiFillEdit,AiOutlineCloseCircle,AiOutlineDollar} from "react-icons/ai"
import Portfolio1 from "./assets/portfolio2.jpeg";
import Portfolio2 from "./assets/portfolio4.jpeg";
import Portfolio3 from "./assets/portfolio6.jpeg";
import {FaHouseChimneyUser,FaUserLarge,FaRegHourglassHalf,FaMeteor,FaSatelliteDish} from "react-icons/fa6"

const sublinks = [
  {
    name:"home",
    icon:<FaHouseChimneyUser/>
  },
  {
    name:"about",
    icon:<FaUserLarge/>
  },
  {
    name:"services",
    icon:<FaRegHourglassHalf/>
  },
  {
    name:"portfolio",
    icon:<FaMeteor/>
  },
 
  {
    name:"contact",
    icon:<FaSatelliteDish/>
  },
];
 export const skills = [
  {
    img:ui,
    text:"UI / UX Design ",
    des :"Lorem ipsum dolor, sit amet consectetur adipisicing elit"
  },
  {
    img:web,
    text:"Website Design",
    des :"Lorem ipsum dolor, sit amet consectetur adipisicing elit"
  },
  {
    img:app,
    text:"App Design",
    des :"Lorem ipsum dolor, sit amet consectetur adipisicing elit"
  },
];
export const services = [
  {
    icon:<AiOutlineMobile/>,
    head:"Mobile Site ",
    text :"Responsive Web with All Phone And Easy to Use On Devices"
  },
  {
    icon:<AiOutlineColumnWidth/>,
    head:"Responsve Web ",
    text :"Responsive Web with All Computers And Easy to Use On Devices "
  },
  {
    icon:<AiFillFormatPainter/>,
    head:"Beautiful Colors ",
    text :"Comfrotable Colores For The Eye And Wonderful The Art Of Choosing Colors "
  },
  {
    icon:<AiFillEdit />,
    head:"Simble Code",
    text :"Simple And Easy Code That You Can Use At Any Time And Modify it"
  },
  {
    icon:<AiOutlineCloseCircle/>,
    head:"Not Error ",
    text :"There Are No Mistakes In The Work Because Of The Great Experience"
  }, {
    icon:<AiOutlineDollar />,
    head:"Win Money ",
    text :"There Are No Mistakes In The Work Because Of The Great Experience"
  },

];
export const portfolio = [
  {
    img:Portfolio1,
    name:"Template 1",
    des:"CSS incorporates custom variables and global rules for consistent styling. Section-specific styles prioritize responsiveness and aesthetics, covering header, landing, features, services, portfolio, about, contact, and footer.",
    url:" https://mo2888.github.io/template-1/ "
  },
  {
    img:Portfolio2,
    name:"Template 2 ",
    des:"in javascript :The code toggles menus, manages sliders and scroll-to-top behavior, handles tabbed content, and updates the copyright year dynamically.",
    url:"https://mo2888.github.io/template-2/"
  },
  {
    img:Portfolio3,
    name:"Keeper App",
    des:"#simple react app Use on it : Hooks ,Handel whit Form ,Delete Note Add Note .",
    url:" https://mo2888.github.io/keeper-app/"
  }
]



export default sublinks;
