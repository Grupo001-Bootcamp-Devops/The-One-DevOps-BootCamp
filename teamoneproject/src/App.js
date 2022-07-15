import logo from './assets/logo.svg';
import logonav from './assets/logonav.svg';
import menuIcon from './assets/icons/menu.png';
import closeIcon from './assets/icons/close.png';
import GlobeIcon from './assets/icons/globe-solid.png';
import CloudIcon from './assets/icons/cloud-solid.png';
import CircleNodesIcon from './assets/icons/circle-nodes-solid.png';
import client1 from './assets/clients/client-1.png';
import client2 from './assets/clients/client-2.png';
import client3 from './assets/clients/client-3.png';
import client4 from './assets/clients/client-4.png';
import client5 from './assets/clients/client-5.png';
import client6 from './assets/clients/client-6.png';
import client7 from './assets/clients/client-7.png';
import client8 from './assets/clients/client-8.png';
import team1 from './assets/team/team-andres.jfif';
import team2 from './assets/team/team-juan.jfif';
import team3 from './assets/team/team-martin.jfif';
import team4 from './assets/team/team-flor.jfif';
import team5 from './assets/team/team-brian.jfif';
import team6 from './assets/team/team-marce.jfif';
import bgimg from './assets/mainbackground.jpg';
import LinkedInIcon from './assets/icons/linkedin-in-brands.png';
import TwitterIcon from './assets/icons/twitter-brands.png';
import MailIcon from './assets/icons/envelope-solid.png';
import GitHubIcon from './assets/icons/github-brands.png';
import Arrow from './assets/icons/arrow-up-solid.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="#header">
        <nav>
          <div className="logonav">
            <a href='#top'><img src={logonav} className="logo-icon" alt="logo" /></a>
            <div class="menu-icon" id="menu-icon">
              <a href="#menu-overlay"><img src={menuIcon} className="menu-icon" alt="menu" /></a>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="menu-overlay" id="menu-overlay">
              <ul class="overlay">
                <li><a href="#top">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
                <div class="close"><a href="#top"><img src={closeIcon} className="close" alt="close menu"/></a></div>
            </div>
        </nav>
      </header>

      <main>
        <img src={bgimg} className="bg-img" alt="background" />
        <div className="main-container">
          <div className="main-title">
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

      <section className="services" id="services">
        <div className="services-title">
          <h2>OUR SERVICES</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="wc-1"><img src={GlobeIcon} className="icons" alt="globe icon"/></div>
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
            <div className="wc-2"><img src={CloudIcon} className="icons" alt="cloud icon"/></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Dolor Sitema</h4>
              </a>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                tarad limino ata</p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-3"><img src={CircleNodesIcon} className="icons" alt="nodes icon"/></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Sed ut perspiciatis</h4>
              </a>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-title">
          <h2>WHY CHOOSE US?</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="bc-container">
          <div className="bluecards">
            <h4>Corporis dolorem</h4>
            <p>Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut
              voluptatibus. Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>Voluptates dolores</h4>
            <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut
              voluptatibus.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>Eum ut aspernatur</h4>
            <p>Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. </p>
            <div><a href="#top">Read more</a></div>
          </div>
        </div>
        <div className="numbers">
          <div className="numbers-box">
            <h1>274</h1>
            <p>Clients</p>
          </div>
          <div className="numbers-box">
            <h1>421</h1>
            <p>Projects</p>
          </div>
          <div className="numbers-box">
            <h1>1,364</h1>
            <p>Hours Of Support</p>
          </div>
          <div className="numbers-box">
            <h1>18</h1>
            <p>Hard Workers</p>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="services-title">
          <h2>PRICING</h2>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
          </p>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="pricing-data">
              <h4>ECONOMY</h4>
              <h3>$9.99</h3>
              <p>PER MONTH</p>
              <ul>
                <li>Bandwidth: <span>1GB</span></li>
                <li>Onlinespace: <span>50MB</span></li>
                <li>Support: <span>NO</span></li>
                <li>Domain: <span>1</span></li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>
            </div>
          </div>
          <div className="whitecards">
            <div className="pricing-data">
              <h4>DELUXE</h4>
              <h3>$19.99</h3>
              <p>PER MONTH</p>
              <ul>
              <li>Bandwidth: <span>10GB</span></li>
                <li>Onlinespace: <span>500MB</span></li>
                <li>Support: <span>NO</span></li>
                <li>Domain: <span>10</span></li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>
            </div>
          </div>
          <div className="whitecards">
            <div className="pricing-data">
              <h4>ULTIMATE</h4>
              <h3>$29.99</h3>
              <p>PER MONTH</p>
              <ul>
                <li>Bandwidth: <span>100GB</span></li>
                <li>Onlinespace: <span>2GB</span></li>
                <li>Support: <span>YES</span></li>
                <li>Domain: <span>UNLIMITED</span></li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>              
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="team-title">
          <h2>TEAM</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="team-images">
          <div className="img-container">
            <img src={team1} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Andres Dominguez</h2>
                  <p>Product Owner</p>
                  <div className="rrss-links">
                    <div className="rrss"><a href="https://www.linkedin.com/in/dominguez-andres/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:andres.bmth.bt@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            <img src={team2} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Juan Strack</h2>
                  <p>Scrum Master</p>
                  <div className="rrss-links">
                  <div className="rrss"><a href="https://www.linkedin.com/in/strack-juan/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:juanstrack@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            <img src={team3} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Martin Manzanelli</h2>
                  <p>Dev Team</p>
                  <div className="rrss-links">
                  <div className="rrss"><a href="https://www.linkedin.com/in/martin-manzanelli/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:m_manzanelli@hotmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            <img src={team4} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Florencia Guzzi</h2>
                  <p>Dev Team</p>
                  <div className="rrss-links">
                  <div className="rrss"><a href="https://www.linkedin.com/in/mfguzzi/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:mf.guzzi@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            <img src={team5} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Brian Sosa</h2>
                  <p>Dev Team</p>
                  <div className="rrss-links">
                  <div className="rrss"><a href="https://www.linkedin.com/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="img-container">
            <img src={team6} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Marcelo Piroddi</h2>
                  <p>Dev Team</p>
                  <div className="rrss-links">
                  <div className="rrss"><a href="https://www.linkedin.com/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a href="https://twitter.com/?lang=es"><img src={TwitterIcon} className="icons" alt="Twitter icon"/></a></div>
                    <div className="rrss"><a href="mailto:4familias@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="clients" id="clients">
        <div className="clients-title">
          <h2>OUR CLIENTS</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.
          </p>
        </div>
        <div className="clients-images">
            <div class="vinietas"><img src={client1} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client2} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client3} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client4} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client5} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client6} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client7} className="clients-img" alt="client logo"/></div>
            <div class="vinietas"><img src={client8} className="clients-img" alt="client logo"/></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-title">
          <h2>CONTACT US</h2>
        </div>
        <div className="contact-content">
          <div className="contact-address">
            <h4>Office Address</h4>
            <p>440 Terry Ave N, Seattle, WA 98109</p>
            <h4>Telephone Number</h4>
            <p>+1 206-266-1000</p>
            <h4>Working Hours</h4>
            <p>7:30 - 18:00</p>
          </div>
          <div className="form">
            <form action="">
                <div class="form-row">
                    <input required className="short" type="text" name="name" minlength="4" placeholder="Your Name"
                        data-msg="Please enter at least 4 chars"/>
                    <input required className="short" type="email" name="email" placeholder="Your Email"
                        data-msg="Please enter a valid email"/>
                </div>
                <input required type="text" name="subject" minlength="4" placeholder="Subject"/>
                <textarea required name="message" rows="5" maxlength="150" placeholder="Message"
                    data-msg="Please write something for us"></textarea>
                <input className="send" type="submit" value="Send Message"/>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer-1">
        <div className="footer-columns">
          <div className="ft-col-1">
            <a href='#top'><img src={logo} className="logo" alt="logo" /></a>
          </div>
          <div className="ft-col-2">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="ft-col-3">
              <h4>CONTACT US</h4>
              <ul>
                <li>440 Terry Ave N, SEA</li>
                <li>+1 206-266-1000</li>
              </ul> 
            <div className="icons">
              <div className="rrss"><a href="https://github.com/Grupo001-Bootcamp-Devops"><img src={GitHubIcon} alt="github icon"/></a>
              </div>
            </div>
          </div>
          <div className="ft-col-4">
            <div>
              <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
              <input required className="subscribe" type="email" name="email" placeholder="Your Email"
              data-msg="Please enter a valid email"/></div>
              <p>Sign up for our weekly newsletter to get the latest news.</p>
          </div>
        </div>
      </footer>

      <footer className="copyright">
        <p>© Copyright <span>THE ONE cloud architecture</span></p>
        <p>All Rights Reserved</p>
        <div>
          <div className="arrow"><a href="#top"><img src={Arrow} alt="arrow icon"/></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
