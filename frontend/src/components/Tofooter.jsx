
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../css/footer.css'
import Accordion from 'react-bootstrap/Accordion';
export default function ToFooter() {
  return (
    <>
<div className="openClose">
  
<Accordion defaultActiveKey="0" className='openit'>
  <p className='fqs'>FQS</p>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='fqsHeader'> <span>01</span>What software does a hair and beauty salon use?</Accordion.Header>
        <Accordion.Body>
        Hair & beauty salons use various software to manage their operations efficiently. Some common categories of software used in hair & beauty salons include:

Appointment Scheduling and Booking System: Essential for managing client appointments, featuring online booking, automated reminders, and stylist scheduling.
Point of Sale (POS) Systems: Used for processing payments and managing sales online and offline.
Customer Relationship Management (CRM) Software: Helps manage client data, track preferences and history, and engage with clients through marketing and loyalty programs.
The SimplyBook.me booking system offers comprehensive features to help hair and beauty salons manage appointment scheduling and keep track of client booking information. You can also complete online or onsite transactions through the POS system if you need to accept payment.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='fqsHeader'> <span>02</span>What is a hair and beauty salon appointment system?</Accordion.Header>
        <Accordion.Body>
        A hair and beauty salon booking system is software designed to streamline salon bookings and scheduling. Key features include:

Online Booking: Enables clients to book appointments online, eliminating the need for calls or in-person visits.
Calendar Management: Helps manage staff schedules and track appointment slots to prevent double bookings.
Client Management: Stores client information and preferences, aiding in personalizing services.
Automated Reminders: Sends reminders to reduce no-shows and improve operations.
SimplyBook.me is the booking system that enhances salon efficiency, improves customer experience, and varies from essential booking tools to complete salon management solutions.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header className='fqsHeader'> <span>03</span>What features does the SimplyBook.me booking system offer for hair and beauty salons?</Accordion.Header>
        <Accordion.Body>
        A hair and beauty salon booking system is software designed to streamline salon bookings and scheduling. Key features include:

Online Booking: Enables clients to book appointments online, eliminating the need for calls or in-person visits.
Calendar Management: Helps manage staff schedules and track appointment slots to prevent double bookings.
Client Management: Stores client information and preferences, aiding in personalizing services.
Automated Reminders: Sends reminders to reduce no-shows and improve operations.
SimplyBook.me is the booking system that enhances salon efficiency, improves customer experience, and varies from essential booking tools to complete salon management solutions.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header className='fqsHeader'> <span>04</span>How do salon owners choose an online salon booking system?</Accordion.Header>
        <Accordion.Body>
        A hair and beauty salon booking system is software designed to streamline salon bookings and scheduling. Key features include:

Online Booking: Enables clients to book appointments online, eliminating the need for calls or in-person visits.
Calendar Management: Helps manage staff schedules and track appointment slots to prevent double bookings.
Client Management: Stores client information and preferences, aiding in personalizing services.
Automated Reminders: Sends reminders to reduce no-shows and improve operations.
SimplyBook.me is the booking system that enhances salon efficiency, improves customer experience, and varies from essential booking tools to complete salon management solutions.
        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="1">
        <Accordion.Header className='fqsHeader'> <span>05</span>Why use hair and beauty salon booking software?</Accordion.Header>
        <Accordion.Body>
        A hair and beauty salon booking system is software designed to streamline salon bookings and scheduling. Key features include:

Online Booking: Enables clients to book appointments online, eliminating the need for calls or in-person visits.
Calendar Management: Helps manage staff schedules and track appointment slots to prevent double bookings.
Client Management: Stores client information and preferences, aiding in personalizing services.
Automated Reminders: Sends reminders to reduce no-shows and improve operations.
SimplyBook.me is the booking system that enhances salon efficiency, improves customer experience, and varies from essential booking tools to complete salon management solutions.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header className='fqsHeader'> <span>06</span>How do salon owners choose an online salon booking system?</Accordion.Header>
        <Accordion.Body>
        A hair and beauty salon booking system is software designed to streamline salon bookings and scheduling. Key features include:

Online Booking: Enables clients to book appointments online, eliminating the need for calls or in-person visits.
Calendar Management: Helps manage staff schedules and track appointment slots to prevent double bookings.
Client Management: Stores client information and preferences, aiding in personalizing services.
Automated Reminders: Sends reminders to reduce no-shows and improve operations.
SimplyBook.me is the booking system that enhances salon efficiency, improves customer experience, and varies from essential booking tools to complete salon management solutions.
        </Accordion.Body>
      </Accordion.Item>



    </Accordion>
</div>
    <div className="container_Footer">
        <div className="icons">
           <div> <FaInstagram/></div>
           <div> <FaFacebookF/></div>
           <div>  <FaFacebookMessenger/></div>
           <div>  <FaTwitter/></div>
           <div>  <FaYoutube /></div>
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/">News</Link> </li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Our Team</Link></li>
            </ul>
        </div>
        <div className="footering">
            <p>
                Copyright © 2025 :Designed by BIPIN SINGH
            </p>
        </div>
    </div>

      
    </>
  )
}
