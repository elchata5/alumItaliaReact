import React, { Component }  from 'react';

class Footer extends React.Component {
    render(){
        return(
        <div>
            <section className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13089.231666212054!2d-57.9771973!3d-34.8987215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcaf6d3e6d0b324f7!2sAluminio%20Italia!5e0!3m2!1ses-419!2sar!4v1664571223636!5m2!1ses-419!2sar" className="map-iframe" style={{border: 0}} allowFullScreen loading="lazy" width="100%" height={400} />
            </section>
            <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h5 className="text-white">
                    <i className="bi-geo-alt-fill me-2" />
                    Tolosa, La Plata
                  </h5>
                  <a href="mailto:info@company.com" className="custom-link mt-3 mb-5">
                    info@company.com
                  </a>
                </div>
                <div className="col-6">
                  <p className="copyright-text mb-0">Copyright © Nomad Force 2021 
                    <br /><br />Design: <a href="https://templatemo.com/page/1" target="_parent">TemplateMo</a></p>
                </div>
                <div className="col-lg-3 col-5 ms-auto">
                  <ul className="social-icon">
                    <li><a href="#" className="social-icon-link bi-facebook" /></li>
                    <li><a href="#" className="social-icon-link bi-twitter" /></li>
                    <li><a href="#" className="social-icon-link bi-whatsapp" /></li>
                    <li><a href="#" className="social-icon-link bi-instagram" /></li>
                    <li><a href="#" className="social-icon-link bi-youtube" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        )
    }

}

export default Footer;