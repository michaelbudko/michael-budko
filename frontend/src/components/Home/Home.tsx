import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import FortiCoinLogo from '../../assets/logos/FortiCoin.png';
import SleepTrackerLogo from '../../assets/logos/SleepTracker.png';
import SteganographyLogo from '../../assets/logos/steganography.png';


const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
      <div>Michael Budko</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" className="search-input" placeholder="Search..." style={{ padding: '5px', margin: '0 10px', border: 'none', borderRadius: '5px' }} />
        <button>Search</button>
      </div>
    </header>
  );
};

const ProjectCard = ({ imgSrc, title, description, link }: { imgSrc: string; title: string; description: string; link: string }) => {
  return (
    <div className="project flex-grow-1 width-10" style={{ marginBottom: '20px' }}>
      <img src={imgSrc} alt={title} style={{ width: '100px', height: '100px', objectFit: 'fill' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={() => window.location.href = link}>View Site</Button>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className='hero' style={{ padding: '50px', backgroundColor: '#f5f5f5' }}>
        <h1 className='mb-3'>Projects</h1>
        <div className="d-flex">
            <ProjectCard imgSrc={FortiCoinLogo} title="FortiCoin" description="Buy, send, receive crypto" link="https://forticoin.com" />
            <ProjectCard imgSrc={SleepTrackerLogo} title="SleepTracker" description="View real-time sleep metrics" link="https://sleep.michaelbudko.com" />
            <ProjectCard imgSrc={SteganographyLogo} title="Steganography" description="Store secret text in images" link="https://steganography.michaelbudko.com" />
            {/* Add more projects as needed */}
        </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;