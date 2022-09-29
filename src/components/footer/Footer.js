import React, { Component }  from 'react';

class Footer extends React.Component {
    render(){
        return(
        <div>
            <section className="google-map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" className="map-iframe" style={{border: 0}} allowFullScreen loading="lazy" width="100%" height={400} />
            </section>
            <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h5 className="text-white">
                    <i className="bi-geo-alt-fill me-2" />
                    State of Rio de Janeiro, Brazil
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