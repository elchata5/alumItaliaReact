import logo from './logo.svg';
import './App.css';
import Porfolio from './components/Porfolio';
import React, { Component }  from 'react';

function App() {
    return (
      <div>
        <main>
          <section className="hero" id="hero">
            <div className="heroText">
              <h1 className="text-white mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay={800}>
                Aluminio Italia 
              </h1>
              <p className="text-secondary-white-color" data-aos="fade-up" data-aos-delay={1000}>
                cerramientos <strong className="custom-underline">website</strong>
              </p>
            </div>
            <div className="videoWrapper">
              <video autoPlay loop muted className="custom-video" poster="videos/792bd98f3e617786c850493560e11c45.jpg">
                <source src="videos/814dc43e870597176cad645798825c03.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overlay" />
          </section>
          <section className="section-padding pb-0" id="about">
            <div className="container mb-5 pb-lg-5">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-3" data-aos="fade-up">Let us create...</h2>
                </div>
                <div className="col-lg-6 col-12 mt-3 mb-lg-5">
                  <p className="me-4" data-aos="fade-up" data-aos-delay={300}>You may contribute <a rel="nofollow" href="http://paypal.me/templatemo" target="_blank">a small amount</a> via PayPal if <a rel="nofollow" href="https://templatemo.com/tm-567-nomad-force" target="_parent">Nomad Force Template</a> is useful for you. This will absolutely help us to keep creating better CSS templates for you. <br /><br />We provide you 100% free templates on TemplateMo website. Images are provided by FreePik and Unsplash websites.</p>
                </div>
                <div className="col-lg-6 col-12 mt-lg-3 mb-lg-5">
                  <p data-aos="fade-up" data-aos-delay={500}>This Bootstrap 5 layout is free to use for your business. You are allowed to edit it in any way you like. However, please do not redistribute this template ZIP file for a template download purpose on any other website such as Free CSS collections.</p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-12 p-0">      
                  <img src="images/elena-rabkina-eVVzwsNhNf4-unsplash.jpg" className="img-fluid about-image" alt="" />
                </div>
                <div className="col-lg-3 col-12 bg-dark">  
                  <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
                    <h3 className="text-white mb-3" data-aos="fade-up">We’re - idealists and strategic thinkers.</h3>
                    <p className="text-secondary-white-color" data-aos="fade-up">Over six years in the video business</p>
                    <div className="mt-3 custom-links">
                      <a href="#news" className="text-white custom-link" data-aos="zoom-in" data-aos-delay={100}>Read News &amp; Events</a>
                      <a href="#contact" className="text-white custom-link" data-aos="zoom-in" data-aos-delay={300}>Work with Us</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-0">  
                  <section id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="images/people/studio-shot-beautiful-happy-retired-caucasian-female-with-pixie-hairdo-crossing-arms-her-chest-having-confident-look-smiling-broadly.jpg" className="img-fluid team-image" alt="" />
                        <div className="team-thumb bg-warning">
                          <h3 className="text-white mb-0">Susane R.</h3>
                          <p className="text-secondary-white-color mb-0">Founding Partner</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="images/people/project-leder-with-disabilities-looking-front-sitting-immobilized-wheelchair-business-office-room.jpg" className="img-fluid team-image" alt="" />
                        <div className="team-thumb bg-primary">
                          <h3 className="text-white mb-0">Morgan S.</h3>
                          <p className="text-secondary-white-color mb-0">CEO &amp; Investor</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="images/people/asia-business-woman-feeling-happy-smiling-looking-camera-while-relax-home-office.jpg" className="img-fluid team-image" alt="" />
                        <div className="team-thumb bg-success">
                          <h3 className="text-white mb-0">Naomi W.</h3>
                          <p className="text-secondary-white-color mb-0">Art Director</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="images/people/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait.jpg" className="img-fluid team-image" alt="" />
                        <div className="team-thumb bg-info">
                          <h3 className="text-white mb-0">Robinson H.</h3>
                          <p className="text-secondary-white-color mb-0">Sales &amp; Marketing</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="images/people/working-business-lady.jpg" className="img-fluid team-image" alt="" />
                        <div className="team-thumb bg-danger">
                          <h3 className="text-white mb-0">Jane M.</h3>
                          <p className="text-secondary-white-color mb-0">Project Management</p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <Porfolio />
          <section className="news section-padding" id="news">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-5 text-center" data-aos="fade-up">News &amp; Events</h2>
                </div>
                <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                  <div className="news-thumb" data-aos="fade-up">
                    <a href="news-detail.html" className="news-image-hover news-image-hover-warning">
                      <img src="images/news/caroline-lm-uqveD8dYPUM-unsplash.jpg" className="img-fluid large-news-image news-image" alt="" />
                    </a>
                    <div className="news-category bg-warning text-white">News</div>
                    <div className="news-text-info">
                      <h5 className="news-title">
                        <a href="news-detail.html" className="news-title-link">The rise of the gig economy spells the end for these workers the old system</a>
                      </h5>
                      <span className="text-muted">22 hours ago</span>
                    </div>
                  </div> 
                </div>
                <div className="col-lg-6 col-12">
                  <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                    <div className="news-top w-100">
                      <a href="news-detail.html" className="news-image-hover news-image-hover-primary">
                        <img src="images/news/jean-philippe-delberghe-MmanXAs1sKw-unsplash.jpeg" className="img-fluid news-image" alt="" />
                      </a>
                      <div className="news-category bg-primary text-white">Events</div>
                    </div>
                    <div className="news-bottom w-100">
                      <div className="news-text-info">
                        <h5 className="news-title">
                          <a href="news-detail.html" className="news-title-link">Job Opportunities: Digital, Marketing</a>
                        </h5>
                        <div className="d-flex flex-wrap">
                          <span className="text-muted me-2">
                            <i className="bi-geo-alt-fill me-1 mb-2 mb-lg-0" />
                            Alaska,
                          </span>
                          <span className="text-muted">August 6, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                    <div className="news-top w-100" data-aos="fade-up">
                      <a href="news-detail.html" className="news-image-hover news-image-hover-success">
                        <img src="images/news/maria-stewart-p4tj0g-_aMM-unsplash.jpeg" className="img-fluid news-image" alt="" />
                      </a>
                      <div className="news-category bg-success text-white">News</div>
                    </div>
                    <div className="news-bottom w-100">
                      <div className="news-text-info">
                        <h5 className="news-title">
                          <a href="news-detail.html" className="news-title-link">What happened to new viral video?</a>
                        </h5>
                        <span className="text-muted">6 days ago</span>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </section>
          <section className=" contact section-padding" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-12 mx-auto">
                  <h2 className="mb-4 text-center" data-aos="fade-up">Dont' be shy, write to us</h2>
                  <form action="#" method="post" className="contact-form" role="form" data-aos="fade-up">
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <label htmlFor="name" className="form-label">Name <sup className="text-danger">*</sup></label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />
                      </div>
                      <div className="col-lg-6 col-6">
                        <label htmlFor="email" className="form-label">Email <sup className="text-danger">*</sup></label>
                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                      </div>
                      <div className="col-12 my-4">
                        <label htmlFor="message" className="form-label">How can we help?</label>
                        <textarea name="message" rows={6} className="form-control" id="message" placeholder="Tell us about the project" required defaultValue={""} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="services" className="form-label">Services<sup className="text-danger">*</sup></label>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-check">
                          <input type="checkbox" id="checkbox1" name="checkbox1" className="form-check-input" />
                          <label className="form-check-label" htmlFor="checkbox1">Branding</label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 my-2 my-lg-0">
                        <div className="form-check">
                          <input type="checkbox" id="checkbox2" name="checkbox2" className="form-check-input" />
                          <label className="form-check-label" htmlFor="checkbox2">Digital Experiences</label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-check">
                          <input type="checkbox" id="checkbox3" name="checkbox3" className="form-check-input" />
                          <label className="form-check-label" htmlFor="checkbox3">Web Development</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12 mx-auto mt-5">
                      <button type="submit" className="form-control">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

export default App;
