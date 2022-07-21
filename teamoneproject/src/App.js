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
            <h1>We provide DevOps as a Service. 
            </h1>
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
          <p>We offer DevOps support as an outsourcing service. 
          </p>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="wc-1"><img src={GlobeIcon} className="icons" alt="globe icon"/></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Basic</h4>
              </a>
              <p> Small companies, 
                StartUps, max. up to 25 developers  
                . Basic Service 8 hours of daily attention.
                </p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-2"><img src={CloudIcon} className="icons" alt="cloud icon"/></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Medium </h4>
              </a>
              <p>Medium size companies, maximum up to 150 developers  
                . Basic Service 8 hours of daily attention.
                </p>
            </div>
          </div>
          <div className="whitecards">
            <div className="wc-3"><img src={CircleNodesIcon} className="icons" alt="nodes icon"/></div>
            <div className="data-paragraph">
              <a href="#top">
                <h4>Special </h4>
              </a>
              <p>Large companies, maximum up to 500 developers  
                  Basic Service 8 hours of daily attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-title">
          <h2>WHY CHOOSE US?</h2>
          <p>We are a new company with great expertise,  and specialized in a very sensible pproduct in the market.
          We provide you with effective IT solutions that can easily become the backbone for your business’s success. Our technological solutions, made by expert IT talent, can fuel your business to reach higher levels.
          </p>
        </div>
        <div className="bc-container">
          <div className="bluecards">
            <h4>Experienced Team</h4>
            <p>WITH AN AVERAGE OF MORE THAN 5 YEARS OF EXPERIENCE, OUR DEVOPS ENGINEERS HAVE THE EXPERTISE YOUR PROJECTS NEED.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>Agile Methodologies</h4>
            <p>THE ONE PROJECT MANAGERS,  ARE CERTIFIED IN AND UTILIZE AGILE METHODOLOGIES.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>Top 10 IT Talent</h4>
            <p>WE THRIVE IN FINDING THE TOP 10 IT TALENT TO FULFILL EVERY PROJECT’S NEEDS. </p>
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
          <p>Prices are for reference purposes only.
                      </p>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="pricing-data">
              <h4>Basic ECONOMY</h4>
              <h3>$9.99</h3>
              <p>PER HOUR</p>
              <ul>
                <li>Only from M. to F. <span></span></li>
                <li>Only 8 hours a Day <span></span></li>
                <li>From 7.00 to 15:00hs <span></span></li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram <span></span></li>
                <li>Zoom/Met <span></span></li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>
            </div>
          </div>
          <div className="whitecards">
            <div className="pricing-data">
              <h4>Standard </h4>
              <h3>$15.00</h3>
              <p>PER HOUR</p>
              <ul>
              <li>Only from M. to F. <span></span></li>
                <li>Only 12 hours a Day <span></span></li>
                <li>From 7.00 to 19:00hs <span></span></li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram <span></span></li>
                <li>Zoom/Met <span></span></li>

              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>
            </div>
          </div>
          <div className="whitecards">
            <div className="pricing-data">
              <h4>FULL</h4>
              <h3>$29.99</h3>
              <p>PER HOUR</p>
              <ul>
                <li> 24/7 <span></span></li>
                <li> 365 days  <span></span></li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram <span></span></li>
                <li>Zoom/Met <span></span></li>



              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>              
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="team-title">
          <h2>TEAM</h2>
          <p>The best specialists in the market. </p>
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
          <p>Companies that trust in our service.
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
          <h1>CONTACT US,  
            AND DISCOVER WHY IS OOUTSOURCING A BETTER OPTION?</h1>
        </div>
        <div className="contact-content">
          <div className="contact-address">
            <h4>Office Address</h4>
            <p>Avenida Colon 440</p>
            <h4>Telephone Number</h4>
            <p>+54 351 111-3456</p>
            <h4>Office Hours</h4>
            <p>9:00 - 17:00
               / Monday to Friday
            </p>
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
                <li>Avenida Colon 440</li>
                <li>+54 351 5681199</li>
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
              <p>Sign up for our newsletter to get the latest news.</p>
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
