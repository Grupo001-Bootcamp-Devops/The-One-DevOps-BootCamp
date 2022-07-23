import logo from './assets/logo.svg';
import logonav from './assets/logonav.svg';
import menuIcon from './assets/icons/menu.png';
import closeIcon from './assets/icons/close.png';
import GlobeIcon from './assets/icons/globe-solid.png';
import CloudIcon from './assets/icons/cloud-solid.png';
import CircleNodesIcon from './assets/icons/circle-nodes-solid.png';
import partner1 from './assets/partners/partner-1.png';
import partner2 from './assets/partners/partner-2.png';
import partner3 from './assets/partners/partner-3.png';
import partner4 from './assets/partners/partner-4.png';
import partner5 from './assets/partners/partner-5.png';
import partner6 from './assets/partners/partner-6.png';
import partner7 from './assets/partners/partner-7.png';
import partner8 from './assets/partners/partner-8.png';
import team1 from './assets/team/team-andres.jfif';
import team2 from './assets/team/team-juan.jfif';
import team3 from './assets/team/team-martin.jfif';
import team4 from './assets/team/team-flor.jfif';
import team5 from './assets/team/team-brian.jfif';
import team6 from './assets/team/team-marce.jfif';
import bgimg from './assets/mainbackground.jpg';
import LinkedInIcon from './assets/icons/linkedin-in-brands.png';
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
              <li><a href="#partners">Our partners</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="menu-overlay" id="menu-overlay">
              <ul class="overlay">
                <li><a href="#top">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#partners">Our partners</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
                <div class="close"><a href="#top"><img src={closeIcon} className="close" alt="close menu"/></a></div>
            </div>
        </nav>
      </header>

      <main id="top">
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
        <div className="title">
          <h2>OUR SERVICES</h2>
          <h4>We offer DevOps support as an outsourcing service. 
          </h4>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="wc-1"><img src={CircleNodesIcon} className="icons" alt="globe icon"/></div>
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
            <div className="wc-3"><img src={GlobeIcon} className="icons" alt="nodes icon"/></div>
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
        <div className="title">
          <h2>WHY CHOOSE US?</h2>
          <h4>We are a new company with great expertise,  and specialized in a very sensible pproduct in the market.
          We provide you with effective IT solutions that can easily become the backbone for your business’s success. Our technological solutions, made by expert IT talent, can fuel your business to reach higher levels.
          </h4>
        </div>
        <div className="bc-container">
          <div className="bluecards">
            <h4>EXPERIENCED TEAM</h4>
            <p>With an average of more than 5 years of experience, our DevOps Engineers have the experience your projects need.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>AGILE METHODOLOGIES</h4>
            <p>The One project managers, are certified in and utilize Agile methodologies.</p>
            <div><a href="#top">Read more</a></div>
          </div>
          <div className="bluecards">
            <h4>TOP 10 IT TALENT</h4>
            <p>We thrieve in finding the Top 10 IT Talent to fulfill project's needs. </p>
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
        <div className="title">
          <h2>PRICING</h2>
          <h4>Prices are for reference purposes only.
        </h4>
        </div>
        <div className="wc-container">
          <div className="whitecards">
            <div className="pricing-data">
              <h4>BASIC ECONOMY</h4>
              <h3>$9.99</h3>
              <p>PER HOUR</p>
              <ul>
                <li>Only from M. to F.</li>
                <li>From 7.00 to 15:00hs</li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram</li>
                <li>Zoom/Meet</li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>
            </div>
          </div>
          <div className="whitecards">
            <div className="pricing-data">
              <h4>STANDRARD</h4>
              <h3>$15.00</h3>
              <p>PER HOUR</p>
              <ul>
              <li>Only from M. to F.</li>
                <li>From 7.00 to 19:00hs</li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram</li>
                <li>Zoom/Meet</li>

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
                <li>24/7</li>
                <li>365 days</li>
                <li>Support: <span>Yes</span></li>
                <li>WhatsApp/Telegram</li>
                <li>Zoom/Meet</li>
              </ul>
              <a href="#top"><button className='pricing-button' type="button">GET IT</button></a>              
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="title">
          <h2>TEAM</h2>
          <h4>The best specialists in the market.</h4>
        </div>
        <div className="team-images">
          <div className="img-container">
            <img src={team1} className="team-img" alt="team member"/>
              <div className="img-cont-hover">
                <div className="img-cont-info">
                  <h2>Andres Dominguez</h2>
                  <p>Product Owner</p>
                  <div className="rrss-links">
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/dominguez-andres/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/Batimeunnescafe"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:andres.bmth.bt@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
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
                  <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/strack-juan/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/ZorroFeroz"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:juanstrack@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
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
                  <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/mfguzzi/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/flofina"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:mf.guzzi@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
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
                  <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/martin-manzanelli/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/mmanza"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:m_manzanelli@hotmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
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
                  <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://twitter.com/?lang=es"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
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
                  <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/"><img src={LinkedInIcon} className="icons" alt="Linkedin icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/MisDiasdeDevOps"><img src={GitHubIcon} className="icons" alt="GitHub icon"/></a></div>
                    <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="mailto:4familias@gmail.com"><img src={MailIcon} className="icons" alt="Mail icon"/></a></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="title">
          <h2>OUR PARTNERS</h2>
          <h4>We work with the following technologies.
          </h4>
        </div>
        <div className="partners-images">
          <a target='_blank' rel='noopener noreferrer' href="https://aws.amazon.com/es/"><div class="vinietas"><img src={partner1} className="partners-img" alt="aws logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://azure.microsoft.com/es-es/"><div class="vinietas"><img src={partner2} className="partners-img" alt="azure logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://cloud.google.com/gcp/"><div class="vinietas"><img src={partner3} className="partners-img" alt="gcp logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://www.docker.com/"><div class="vinietas"><img src={partner4} className="partners-img" alt="docker logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://kubernetes.io/"><div class="vinietas"><img src={partner5} className="partners-img" alt="kubernetes logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://github.com/"><div class="vinietas"><img src={partner6} className="partners-img" alt="github logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://www.atlassian.com/"><div class="vinietas"><img src={partner7} className="partners-img" alt="atlassian logo"/></div></a>
          <a target='_blank' rel='noopener noreferrer' href="https://www.terraform.io/"><div class="vinietas"><img src={partner8} className="partners-img" alt="terraform logo"/></div></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="title">
          <h2>CONTACT US</h2>
          <h4>And discover why is outsourcing a better option.</h4>
        </div>
        <div className="contact-content">
          <div className="contact-address">
            <h4>Office Address</h4>
            <p>Avenida Colon 440</p>
            <h4>Telephone Number</h4>
            <p>+54 351 111-3456</p>
            <h4>Office Hours</h4>
            <p>9:00 - 17:00</p>
            <p>Monday to Friday</p>
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
                <textarea required name="message" rows="5" maxlength="150" placeholder=""
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
              <div className="rrss"><a target='_blank' rel='noopener noreferrer' href="https://github.com/Grupo001-Bootcamp-Devops"><img src={GitHubIcon} alt="github icon"/></a>
              </div>
            </div>
          </div>
          <div className="ft-col-4">
            <div className='subscribe'>
              <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
              <input required className="subscribe-input" type="email" name="email" placeholder="Your Email"
              data-msg="Please enter a valid email"/>
              <p>Sign up to get the latest news.</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="copyright">
        <p>© Copyright <a target='_blank' rel='noopener noreferrer' href='https://github.com/Grupo001-Bootcamp-Devops'><span>THE ONE cloud architecture</span></a></p>
        <p>All Rights Reserved</p>
        <div>
          <div className="arrow"><a href="#top"><img src={Arrow} alt="arrow icon"/></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
