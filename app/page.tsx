import Image from "next/image";
import photo from "../public/photo.jpg"
import logo from "../public/logo.jpg";
import anam from "../public/anam.jpg";
import UI from "../public/download.jpeg"
import Web from "../public/web.jpeg";
import app from "../public/app.jpeg";
import graphic from "../public/graphic.jpeg";
import quote1 from "../public/quote1.jpeg";
import quote2 from "../public/quote2.jpeg";
import quote3 from "../public/quote3.jpeg";
import quote4 from "../public/quote4.jpeg";;
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
<main>    
  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <Image src={logo} alt="logo" height={50}/>
          <h1><b>A</b>roy</h1>
       </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link color px-2 ">Home</a></li>
        <li><a href="#About" className="nav-link color px-2 ">About Me</a></li>
        <li><a href="#Services" className="nav-link color px-2">Services</a></li>
        <li><a href="#Projects" className="nav-link color px-2">Projects</a></li>
        <li><a href="#Testimonials" className="nav-link color px-2">Testimonials</a></li>
        <li><a href="#Contact" className="nav-link color px-2">Contact</a></li>

      </ul>

       <Link href="My_Resume.pdf" target="_blank" rel="noopener noreferrer"  type="button" className="btn primary">Download CV</Link>
    </header>
  </div>

  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6 " >
       <Image src={photo} alt="photo"  placeholder="blur" className="img"/> <br/>
       <div className="container">
        <div className="justify-between align-text-center justify-items-center  m-4 p-5">
        
        <Link href={"https://www.facebook.com/"} target="_blank">
       <FaFacebook size={30}/>
       </Link>
  
       <Link href={"https://x.com/home"} target="_blank">
       <FaTwitter size={30}/>
       </Link>  

       <Link href={"https://www.instagram.com/"} target="_blank">
       <FaInstagram size={30}/>
       </Link> 

       <Link href={"https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"} target="_blank">
       <FaLinkedin size={30}/>
       </Link></div> </div>
      </div>
      <div className="col-lg-6 ">
        <p><b className="pb-2 p-5">Hi I am <br /></b>
        <b className="p p-5">Anam Dev Roy</b>
        </p>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">UI & UX <br />
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 p-4">Designer</h1></h1>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn primary btn-lg px-4 me-md-2">Hire Me</button>
        </div>
      </div>
    </div>

    <div className="row flex-lg-row align-items-center g-5 py-5" id="About">
      <div className="col-10 col-sm-8 col-lg-6 p-5" >
       <Image src={anam} alt="photo"  placeholder="blur" height={362} className="img"/>
      </div>
      <div className="col-lg-6 p-10 ">

        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    
      </div>
    </div>

    <div className="container px-4 py-5" id="Services">
    <h2 className="pb-2 border-bottom ac">Services</h2>
    <p className="ac">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <div>
          <Image src={UI} alt="UI" width={250} />
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">UI/UX</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <Image src={Web} alt="Web"  width={250} height={166}/>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
        <Image src={app} alt="Web"  width={250} height={166}/>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">App Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
        <Image src={graphic} alt="Web"  width={250} height={166}/>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      </div>
  </div>
  <div className="container px-4 py-5" id="Projects">
    <h2 className="pb-2 border-bottom ac">My Projects</h2>
    <p className="ac">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <div className="d-flex gap-2 justify-content-center py-5">
  <button className="btn primary rounded-pill px-3" type="button">All</button>
  <button className="btn primary rounded-pill px-3" type="button">UI/UX</button>
  <button className="btn primary rounded-pill px-3" type="button" >Web Design</button>
  <button className="btn primary rounded-pill px-3" type="button">App Design</button>
  <button className="btn primary rounded-pill px-3" type="button">Graphic Design</button>
</div>
</div>
    <div className="container px-4 py-5" id="Testimonials">
    <h2 className="pb-2 border-bottom ac">Testimonials</h2>
    <p className="ac">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

    </div>
    <div className="container">
    <div className="carousel-inner">
      <div className="carousel-item active">
    <Image src={quote1} alt="anam" height={550}/>
      </div>
      <div className="carousel-item">
        <Image src={quote2} alt="quote2" height={550} width={1168}/>
      </div>
      <div className="carousel-item">
        <Image src={quote3} alt="quote3" height={550} width={1168}/>
      </div>
      <div className="carousel-item">
        <Image src={quote4} alt="quote4" height={550} width={1168}/>
      </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    <div className="container my-5" id="Contact">
  <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">

    <h1 className="text-body-emphasis">Lets Design Together</h1>
    <p className="col-lg-6 mx-auto mb-4">
      This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
    </p>
    <div className="container my-5 p-3 ">
    <input type="search" placeholder="Enter Your Email" aria-label="Search" className="mx-3"></input>
    <a href="mailto:anamdevroy1@gmail.com"  className="btn primary" type="button" >
      Contact Me
    </a></div>
  </div>
</div>
    <div className="container">
  <footer className="py-3 my-4">
    <div className="container">
    <footer className="d-flex flex-wrap align-items-center justify-content-center ">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <Image src={logo} alt="logo" height={50}/>
          <h1><b>A</b>roy</h1>
       </a>
      </div>
      </footer>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 " >
        <li><a href="#" className="nav-link color px-2 ">Home</a></li>
        <li><a href="#About" className="nav-link color px-2 ">About Me</a></li>
        <li><a href="#Services" className="nav-link color px-2">Services</a></li>
        <li><a href="#Projects" className="nav-link color px-2">Projects</a></li>
        <li><a href="#Testimonials" className="nav-link color px-2">Testimonials</a></li>
        <li><a href="#Contact" className="nav-link color px-2">Contact</a></li>

      </ul>

      <div className="container">
    <footer className="d-flex flex-wrap align-items-center justify-content-center ">
      <div className="col-md-3 mb-2 mb-md-0 p-5">
      <Link href={"https://www.facebook.com/"} target="_blank">
       <FaFacebook size={30} />
       </Link>
  
       <Link href={"https://x.com/home"} target="_blank">
       <FaTwitter size={30}/>
       </Link>  

       <Link href={"https://www.instagram.com/"} target="_blank">
       <FaInstagram size={30}/>
       </Link> 

       <Link href={"https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"} target="_blank">
       <FaLinkedin size={30}/>
       </Link>
      </div>
      </footer>
    </div>

    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-start py-3 my-4">

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>
    <p className="text-center text-body-secondary prime">© 2024 <b className="p">Aroy </b>All Rights Reserved, Inc</p>
  </footer>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
  </main>
  );
}