import { useEffect, useState } from 'react';
import './my-portfolio.css';
import Typed from 'typed.js';
import axios from 'axios';
import React from 'react';

export function MyPortFolio() {
  const [products, setProducts] = useState([]);
  const [addProject, setAddProject] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const[id,setId] = useState(0);

  useEffect(() => {
    axios.get("Projects.json")
      .then(response => setAddProject(response.data));

    axios.get("products.json")
      .then(response => setProducts(response.data));
  }, []);

  const nextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % addProject.length);
  };

  const previousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + addProject.length) % addProject.length);
  };

  useEffect(() => {
    const el = document.querySelector('.refName');
    const typed = new Typed(el, {
      strings: ['Web Developer.', 'Front-End Developer.', 'Mern Developer.'],
      typeSpeed: 70,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid page-color">
      <header className="heading">
        <nav className='d-flex justify-content-around p-3 mt-2'>
          <div>
            <span className='fw-bold fs-3'>Abhishek's Portfolio</span>
          </div>
          <div className='fs-4'>
            <a href='#home'><span className='me-4'>Home</span></a>
            <a href='#about'><span className='me-4'>About</span></a>
            <a href='#service'><span className='me-4'>Services</span></a>
            <a href='#project'><span className='me-4'>Projects</span></a>
            <a href='#contact'><span className='me-4'>Contact Me</span></a>
          </div>
        </nav>
      </header>
      
      <section id='home' className='firstSection d-flex justify-content-between align-items-center mt-5 mb-5'>
        <div className='leftSection mt-4'>
          Hi, My name is <span className='purple'> Abhishek </span>
          <div> and I am a Passionate </div>
          <span className='refName' />
          <div className='mt-4'>
          <a href="https://drive.google.com/file/d/1iOw_AQtL5s2vg7wxRja_rcmpqZRBy-M8/view?usp=drive_link" download="abhishek.pdf"><button class='btn m-2'>Download Resume</button></a>
          <a href="https://github.com/AbhishekC12" target="_blank" rel="noopener noreferrer"><button className='btn'>Visit GitHub</button></a>
          </div>
        </div>
        <div className='rightSection'>
          <img src='port-folio.png' width="400px" height="400px" alt='Portfolio' />
        </div>
      </section>
      <hr className='text-white hr-line'></hr>
      
      <fieldset id='about'  style={{marginTop:"80px"}}>
       <legend><div className='h4'> About Me  </div></legend>
      <section className='second-section text-white mb-5' style={{height:"70vh"}}>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-5 mb-3'>
              <div className='photo alert alert-info me-3'>
              </div>
            </div>
            <div className='col-md-7 alert alert-info mb-5'>
              <h4 style={{marginTop:"50px"}}>
                Abhishek Chungade is a graduate in <span style={{color:"blueviolet"}}>mechanical engineering</span>,
                with a passion for learning and adapting to new technologies,
                including front-end technologies such as <span style={{color:"blueviolet"}}> HTML5, CSS3, Bootstrap 5, JavaScript, Node.js, Express.js, MongoDB, and React 18, </span>
                where he has developed, maintained sites, and utilized features from React 18.
                He is continuously seeking opportunities to enhance his skills and stay updated with the latest trends in web development.
              </h4>
            </div>
          </div> 
      </section>
      </fieldset>
      
      <main id='service' style={{marginTop:"80px"}}>
  <fieldset className='mb-4'>
    <legend>Skills</legend>
    <div className='d-flex flex-wrap justify-content-center mt-3'>
        {products.map(product => (
      <div className="card card-style p-3 m-3" key={product.id} style={{ width: '240px' }}>
        <a href={product.link} target="_blank" rel="noopener noreferrer">
          <img src={product.image} style={{ height: '180px' }} key={product.title} title="Click to View on GitHub" />
        </a>
        <div className='card-footer mt-2'>
          <h5 className='text-center' style={{ height: '20px' }}>{product.title}</h5>
        </div>
      </div>
    ))}
    </div>
  </fieldset>
</main>

<article id='project' className='mb-5' style={{ marginTop: "20px" }}>
  <fieldset className='mb-5'>
    <legend>Projects</legend>
    <div className='card border-2 mt-3 p-3'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <button onClick={previousClick} className="btn btn-outline-primary bi bi-chevron-left"></button>
        <button onClick={nextClick} className="btn btn-outline-primary bi bi-chevron-right"></button>
      </div>
      <div className='d-flex justify-content-center'>
        {addProject.length > 0 && (
          <div className='card bg-light m-2 p-2' style={{ width: '350px' }}>
            <img key={addProject[currentIndex].title} src={addProject[currentIndex].image} className='card-img-top' height="250px" alt="Project" />
            <div className='card-header bg-dark text-white'>
              <p className='fw-bold mb-0 title'>{addProject[currentIndex].title}</p>
            </div>
            <div className='card-body text-dark'>
              <p className='description'>{addProject[currentIndex].description}</p>
            </div>
            <div className='card-footer'>
              <a href={addProject[currentIndex].link} className='btn btn-dark text-white w-100' target="_blank" rel="noopener noreferrer">Click to view</a>
            </div>
          </div>
        )}
      </div>
    </div>
  </fieldset>
</article>


      <fieldset style={{marginTop:"80px"}}>
        <legend className='h4' style={{width:"140px"}}>Contact Me</legend>
        <footer id='contact' className="footer mt-5">
        <div className="footer-content d-flex justify-content-around flex-wrap p-4">
          <div className="footer-section contact mb-4">
            <h2>Contact Me</h2>
            <p>Email: <a href="https://abhishekchungade12@gmail.com" target="_blank">abhishekchungade12@gmail.com</a></p>
            <p>Phone: 8208322540</p>
          </div>
          <div className="footer-section social mb-4">
            <h2>Follow Me</h2>
            <a href="https://github.com/AbhishekC12" target="_blank" rel="noopener noreferrer"><h6>GitHub</h6></a>
          </div>
        </div>
        <div className="footer-bottom p-3">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </footer>
      </fieldset>
    </div>
  );
}
