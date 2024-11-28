import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import tickerStar from '../assets/images/star.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import youtube from '../assets/images/youtube.png';
import x from '../assets/images/x.png';
import linkedin from '../assets/images/linkedin.png';
import cardData from './card-data';
import { Card } from './components/Card';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log('Form Submitted:', formData);
    setUser(formData.name);
    // Handle form submission logic here (e.g., sending data to an API)
  };

  const cards = cardData.map((card) => (
    <Card
      key={card.id}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
      heading={card.heading}
      content={card.content}
    />
  ));

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <div className="text-white c-outer-container max-w-screen-md">
        <div className="c-section1-container">
          <div className="c-section1-radial-gradient-container"></div>
          <div className="c-section1-img-container"></div>
          {/* Header */}
          <header className="c-header">
            <img src={logo} alt="Haptech logo." className="c-logo" />
          </header>

          {/* Hero Section */}
          <section className="c-section1">
            <div className="c-hero-header-container">
              <h2 className="c-hero-header">Revolutionizing Virtual Reality</h2>
              <p className="c-header-text">
                Next-Gen VR hardware for unmatched performance & advanced
                software solutions for seamless immersion
              </p>
            </div>
          </section>
        </div>
        <div className="c-section2-radial-gradient-container">
          <div className="ticker-container">
            <div className="ticker">
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Virtual Reality</div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Immersive Experiences</div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Next-Gen Hardware </div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Advanced Software</div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <section className="py-12 px-6 text-center c-section2">
            <h2 className="text-3xl font-bold text-teal-400 c-section-header">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-xl">
              At Haptech, we create the future of virtual reality, blending
              cutting-edge hardware with advanced software to deliver
              unparalleled immersive experiences.
            </p>
            <div className="mt-12 flex justify-center flex-wrap c-cards">
              {cards}
            </div>
          </section>
        </div>

        <div className="c-section3-radial-gradient-container">
          <div className="ticker-container ticker-section3">
            <div className="ticker">
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Virtual Reality</div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Immersive Experiences</div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Next-Gen Hardware </div>
              </div>
              <div className="ticker-option">
                <img
                  src={tickerStar}
                  alt="blue four point star."
                  className="section1-ticker-star"
                />
                <div>Advanced Software</div>
              </div>
            </div>
          </div>

          {/* Get Started Section */}
          <section className="py-12 px-6 text-center c-section3">
            <h2 className="text-3xl font-bold text-teal-400 c-section-header">
              Get Started with Haptech
            </h2>
            <p className="mt-4 text-xl">
              Ready to explore the future of virtual reality? Contact us to
              learn more or book a personalized demo with one of our VR experts.
            </p>
            {!user && (
              <button
                className="bg-teal-400 text-black px-6 py-3 mt-6 rounded-md hover:bg-teal-500"
                id="demoButton"
                onClick={handleOpenModal}
              >
                Request a Demo
              </button>
            )}
            {user && (
              <div id="request-submitted">
                {`Thank you ${user}, your details were submitted`}
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 c-footer">
          {/* <div className="c-footer-bg-img"></div> */}
          <div className="c-footer-logo-container">
            <img src={logo} alt="Haptech logo." className="c-footer-logo" />
          </div>
          <div className="c-footer-social">
            <button>
              <img src={facebook} alt="Facebook icon." />
            </button>
            <button>
              <img src={instagram} alt="Instagram icon." />
            </button>
            <button>
              <img src={youtube} alt="Youtube icon." />
            </button>
            <button>
              <img src={x} alt="X icon." />
            </button>
            <button>
              <img src={linkedin} alt="LinkedIn icon." />
            </button>
          </div>
          <div className="c-copyright">Copyright &copy; 2024 Haptech</div>
        </footer>
      </div>
    </>
  );
};

export default App;
