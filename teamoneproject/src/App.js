import logo from './assets/logo.svg';
import logonav from './assets/logonav.svg';
import bgimg from './assets/mainbackground.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="#header">
        <nav>
          <div className="logonav">
            <a href='#top'><img src={logonav} className="App-logo" alt="logo" /></a>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main id="#main">
        <img src={bgimg} className="bg-img" alt="background" />
        <div className="main-container">
          
          <div>
            <h1>We provide solutions for your business.</h1>
            <div className="buttons">
              <button type="button"><a href="#about">Get Started</a></button>
              <button type="button"><a href="#services">Our Services</a></button>
            </div>
          </div>
          <div className="main-img">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
      </main>

      <section className="about" id="about">
        <div className="titulo">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
        <div className="info-columns">
          <div className="info-col-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
            <div className="data">
              <div className="about-icons"><i className="fa fa-shopping-bag"></i></div>
              <div className="data-paragraph">
                <a href="#top">
                  <h4>Eiusmod Tempor</h4>
                </a>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi</p>
              </div>
            </div>
            <div className="data">
              <div className="about-icons"><i className="fa fa-photo"></i></div>
              <div className="data-paragraph">
                <a href="#top">
                  <h4>Magni Dolores</h4>
                </a>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id
                  est laborum</p>
              </div>
            </div>
            <div className="data">
              <div className="about-icons"><i className="fa fa-bar-chart"></i></div>
              <div className="data-paragraph">
                <a href="#top">
                  <h4>Dolor Sitema</h4>
                </a>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                  tarad limino ata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="titulo">
          <h2>Services</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="wc-1"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Lorem Ipsum</h4>
              </a>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate
                non
                provident</p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-2"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Dolor Sitema</h4>
              </a>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                tarad limino ata</p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-3"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Sed ut perspiciatis</h4>
              </a>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-4"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Magni Dolores</h4>
              </a>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est
                laborum</p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-5"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Nemo Enim</h4>
              </a>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti
                atque</p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-6"></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Eiusmod Tempor</h4>
              </a>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                est
                eligendi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="choose">
        <div className="titulo">
          <h2>Why choose us?</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="bc-container">
          <div className="bluecards">
            <i className="far fa-gem" aria-hidden="true"></i>
            <h4>Corporis dolorem</h4>
            <p>Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut
              voluptatibus.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <i className="fa fa-language" aria-hidden="true"></i>
            <h4>Voluptates dolores</h4>
            <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <i className="far fa-object-group" aria-hidden="true"></i>
            <h4>Eum ut aspernatur</h4>
            <p>Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</p>
            <div><a href="#top">Read more</a></div>
          </div>
        </div>
        <div className="numbers">
          <div>
            <h1>274</h1>
            <p>Clients</p>
          </div>
          <div>
            <h1>421</h1>
            <p>Projects</p>
          </div>
          <div>
            <h1>1,364</h1>
            <p>Hours Of Support</p>
          </div>
          <div>
            <h1>18</h1>
            <p>Hard Workers</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="titulo">
          <h2>Why choose us?</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="bc-container">
          <div className="bluecards">
            <i className="far fa-gem" aria-hidden="true"></i>
            <h4>Corporis dolorem</h4>
            <p>Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut
              voluptatibus.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <i className="fa fa-language" aria-hidden="true"></i>
            <h4>Voluptates dolores</h4>
            <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <i className="far fa-object-group" aria-hidden="true"></i>
            <h4>Eum ut aspernatur</h4>
            <p>Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</p>
            <div><a href="#top">Read more</a></div>
          </div>
        </div>
        <div className="numbers">
          <div>
            <h1>274</h1>
            <p>Clients</p>
          </div>
          <div>
            <h1>421</h1>
            <p>Projects</p>
          </div>
          <div>
            <h1>1,364</h1>
            <p>Hours Of Support</p>
          </div>
          <div>
            <h1>18</h1>
            <p>Hard Workers</p>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="titulo">
          <h2>Team</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="team-images">
          <div className="img-container">
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Ben Affleck</h2>
                  <p>Chief Executive Officer</p>
                  <div className="rrss-links">
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="rrss"><a href="https://es-la.facebook.com/"><i
                      className="fab fa-facebook-f"></i></a></div>
                    <div className="rrss"><a href="https://plus.google.com/about?hl=es"><i
                      className="fab fa-google-plus-g"></i></a></div>
                    <div className="rrss"><a href="https://ar.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Christian Bale</h2>
                  <p>Product Manager</p>
                  <div className="rrss-links">
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="rrss"><a href="https://es-la.facebook.com/"><i
                      className="fab fa-facebook-f"></i></a></div>
                    <div className="rrss"><a href="https://plus.google.com/about?hl=es"><i
                      className="fab fa-google-plus-g"></i></a></div>
                    <div className="rrss"><a href="https://ar.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Michael Keaton</h2>
                  <p>CTO</p>
                  <div className="rrss-links">
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="rrss"><a href="https://es-la.facebook.com/"><i
                      className="fab fa-facebook-f"></i></a></div>
                    <div className="rrss"><a href="https://plus.google.com/about?hl=es"><i
                      className="fab fa-google-plus-g"></i></a></div>
                    <div className="rrss"><a href="https://ar.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Adam West</h2>
                  <p>Accountant</p>
                  <div className="rrss-links">
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="rrss"><a href="https://es-la.facebook.com/"><i
                      className="fab fa-facebook-f"></i></a></div>
                    <div className="rrss"><a href="https://plus.google.com/about?hl=es"><i
                      className="fab fa-google-plus-g"></i></a></div>
                    <div className="rrss"><a href="https://ar.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="clients">
        <div className="titulo">
          <h2>Our Clients</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.
          </p>
        </div>
        <div className="clients-images">
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
          <div className="vinietas"></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="titulo">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-row">
          <div className="mapa">
            </div>
          <div className="contact-info">
            <div className="contact-data">
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div>
                <i className="far fa-envelope"></i>
                <p>info@example.com</p>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="form">
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-1">
        <div className="footer-columns">
          <div className="ft-col-1">
            <h1>WAYNE</h1>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
              darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
              fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>
          <div className="ft-col-2">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#header">Terms of service</a></li>
              <li><a href="#header">Privacy policy</a></li>
            </ul>
          </div>
          <div className="ft-col-3">
            <div>
              <h4>CONTACT US</h4>
              <p>Adam Street</p>
            </div>
            <div className="icons">
              <div className="rrss"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a></div>
              <div className="rrss"><a href="https://es-la.facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
              <div className="rrss"><a href="https://www.instagram.com/?hl=es-la"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="rrss"><a href="https://plus.google.com/about?hl=es"><i
                className="fab fa-google-plus-g"></i></a></div>
              <div className="rrss"><a href="https://ar.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></div>
            </div>
          </div>
          <div className="ft-col-4">
            <div>
              <h4>OUR NEWSLETTER</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam
                illum dolore
                legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="copyright">
        <p>© Copyright <span>Wayne Enterprises</span>.</p>
        <p>All Rights Reserved</p>
        <p>Designed by <a href="#header">...</a></p>
        <div>
          <div className="arrow"><a href="#top"><i className="fas fa-angle-up"></i></a></div>
        </div>
      </footer>

    </div>
  );
}

export default App;
