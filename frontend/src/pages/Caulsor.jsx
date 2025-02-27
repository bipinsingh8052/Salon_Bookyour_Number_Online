
import '../css/caulsor.css'
import { GiHairStrands } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GiBed } from "react-icons/gi";
import { RiBrushAiLine } from "react-icons/ri";
import { GiFingernail } from "react-icons/gi";
export default function Caulsor() {
  return (
    <>
    <div className='herosection'>
        <div className="herosection_inner">
            <h1>Booking software for hair salons</h1>
            <p>Great salon software helps you satisfy your customers’ needs. Barbar Booking number is built to assist you with this—it stores customer details, staff and service information, and appointment histories while managing your schedules so you can prioritize the customer in front of you.</p>
            <button>TRY BOOKINGS NOW</button>
        </div>
      
    </div>

    <div className="second_herosection">
        <div className="second_inner_herosection">
            <h1>A <span> diverse range of beauty services </span>, suitable of any size, or number of locations</h1>
            <p>All-in-One Online Booking for Services, Product Sales, and Consultations</p>
            <div className="second_inner_carts">
                <div className="hero_carts">
                    <p><FaRegEye/></p>
                    <span>Eyelash extension</span>
                </div>
                <div className="hero_carts">
                    <p>< GiHairStrands style={{color:" rgb(28, 24, 24)"}}/></p>
                    <span>Hair salons</span>
                </div>
                <div className="hero_carts">
                    <p><GiBed/></p>
                    <span>Spa salons</span>
                </div>
                <div className="hero_carts">
                    <p><RiBrushAiLine/></p>
                    <span>Beauty salons</span>
                </div>
                <div className="hero_carts">
                    <p><GiFingernail/></p>
                    <span>Nail salons</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
