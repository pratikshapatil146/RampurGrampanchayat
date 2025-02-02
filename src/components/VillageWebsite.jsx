import React, { useState, useEffect } from 'react';
import './VillageWebsite.css'
import villageInfo from './villageInfo'

export default function VillageWebsite() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [billDetails, setBillDetails] = useState({
    name: "",
    mobile: "",
    amount: "",
  });

  const handleChange = (e) => {
    setBillDetails({ ...billDetails, [e.target.name]: e.target.value });
  };

  const handlePayBill = () => {
    alert(`Payment of ₹ ${billDetails.amount} initiated for ${billDetails.name}`);
  };


  const images = [
    { src: '/images/grampanchayat.jpg', caption: 'Grampanchayar Karyalay - Rampur' },
    { src: '/images/adarshGram.jpg', caption: 'ArashGram award winner' },
    { src: '/images/village-god2.jpg', caption: 'Village-God - Maruti Temple' },
    { src: '/images/hanuman.jpg', caption: 'Hanuman Murti' },
    { src: '/images/library.jpg', caption: 'Laibrary of Rampur' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);


  const renderContent = () => {
    switch (activeSection) {
      case 'population':
        return (
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Village Demographics</h2>
            <table className='table'>
              <thead>
                <tr>
                  <th className='th'>Category</th>
                  <th className='th'>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(villageInfo.population).map(([key, value]) => (
                  <tr key={key}>
                    <td className='td'>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                    <td className='td'>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <img
                src="/images/village-map.png"
                alt="Village Map"
                style={{
                  width: '70%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  marginBottom: '2rem'
                }}
              />
            </div>
          </div>
        );

      case 'hospital':
        return (
          <div>
            <h2>{villageInfo.hospital.name}</h2>
            <div className='card'>
              <p>Available Doctors: {villageInfo.hospital.doctors}</p>
              <p>Total Beds: {villageInfo.hospital.beds}</p>
              <h3>Services:</h3>
              <ul>
                {villageInfo.hospital.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <p>Timing: {villageInfo.hospital.timing}</p>
            </div>
          </div>
        );

      case 'dairy':
        return (
          <div>
            <h2>Milk Collection Centers</h2>
            <table className='table'>
              <thead>
                <tr>
                  <th className='th'>Center</th>
                  <th className='th'>Daily Collection</th>
                  <th className='th'>Members</th>
                </tr>
              </thead>
              <tbody>
                {villageInfo.dairy.collections.map((center, index) => (
                  <tr key={index}>
                    <td className='td'>{center.center}</td>
                    <td className='td'>{center.dailyCollection}</td>
                    <td className='td'>{center.members}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'board':
        return (
          <div>
            <h2>Gram Panchayat Board Members</h2>
            <table className='table'>
              <thead>
                <tr>
                  <th className='th'>Name</th>
                  <th className='th'>Designation</th>
                  <th className='th'>Department</th>
                  <th className='th'>Contact</th>
                </tr>
              </thead>
              <tbody>
                {villageInfo.boardMembers.map((member, index) => (
                  <tr key={index}>
                    <td className='td '>{member.name}</td>
                    <td className='td '>{member.designation}</td>
                    <td className='td '>{member.department}</td>
                    <td className='td '>{member.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'schemes':
        return (
          <div>
            <h2>Village Schemes</h2>
            {villageInfo.schemes.map((scheme, index) => (
              <div key={index} className='card'>
                <h3>{scheme.name}</h3>
                <p>{scheme.details}</p>
              </div>
            ))}
          </div>
        );

      case 'announcements':
        return (
          <div>
            <h2>Latest Announcements</h2>
            {villageInfo.announcements.map((announcement, index) => (
              <div key={index} className='card'>
                <h3>{announcement.title}</h3>
                <p>Date: {announcement.date}</p>
                <p>{announcement.details}</p>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div>
            <h2>All Certifications</h2>
            <ul>
              <li><a href="/birth-certificate">Birth Certificate</a></li>
              <li><a href="/death-certificate">Death Certificate</a></li>
              <li><a href="/marriage-certificate">Marriage Certificate</a></li>
              <li><a href="/caste-certificate">Caste Certificate</a></li>
            </ul>
          </div>
        );

      case 'paybills':
        return (
          <div>
            <h2>Pay Bills</h2>
            <div className='billSection'>
              <h3>Water Bill</h3>
              <input type="text" name="name" placeholder="Enter Name" value={billDetails.name} onChange={handleChange} />
              <input type="text" name="mobile" placeholder="Enter Mobile Number" value={billDetails.mobile} onChange={handleChange} />
              <input type="number" name="amount" placeholder="Enter Amount" value={billDetails.amount} onChange={handleChange} />
              <button onClick={handlePayBill}>Pay Bill</button>
            </div>
            <div className='billSection'>
              <h3>Gharphala Patti</h3>
              <input type="text" name="name" placeholder="Enter Name" value={billDetails.name} onChange={handleChange} />
              <input type="text" name="mobile" placeholder="Enter Mobile Number" value={billDetails.mobile} onChange={handleChange} />
              <input type="number" name="amount" placeholder="Enter Amount" value={billDetails.amount} onChange={handleChange} />
              <button onClick={handlePayBill}>Pay Bill</button>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div className='card'>
              <h2>Welcome to {villageInfo.name}</h2>
              <div className='homepageInfo'>
                <figure style={{
                  flexBasis: "50%", marginRight: "1rem", '@media (maxwidth: 768px)': {
                    flexBasis: "100%", // Full width on mobile
                    marginRight: "0", // Remove right margin on mobile
                  }
                }}>
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].caption}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "8px",
                      transition: "opacity 0.5s ease-in-out"
                    }}
                  />
                  <figcaption style={{ fontSize: "1rem", color: "#333", fontWeight: "bold" }}>
                    {images[currentImageIndex].caption}
                  </figcaption>
                </figure>
                <div style={{
                  flexBasis: "50%", marginLeft: '1rem', '@media (maxwidth: 768px)': {
                    marginLeft: '0', // Remove left margin on mobile
                    marginTop: '1rem', // Add space between items on mobile
                  },
                }}>
                  <p><strong>District:</strong> {villageInfo.district}</p>
                  <p><strong>Established:</strong> {villageInfo.established}</p>
                  <p><strong>Total Population:</strong> {villageInfo.population.total}</p>
                </div>
              </div>
              <p>
                Nestled in the heart of a lush green valley, the village of Rampur is a picturesque settlement that blends tradition with modernity. The village is known for its vibrant culture, serene landscapes, and close-knit community. The residents are mostly engaged in agriculture, with fields of rice, wheat, and sugarcane dominating the surroundings. The village also boasts a number of traditional handlooms, where local artisans weave exquisite fabrics.
              </p>
            </div>
            <div className='boardmembersSection'>
              {villageInfo.boardMembers.map((member, index) => (
                <div
                  className='cardOfMember'
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "60%",
                      height: "auto",
                      borderRadius: "50%",
                      marginBottom: "0.5rem"
                    }}
                  />
                  <h3 style={{ fontSize: "1rem" }}>{member.name}</h3>
                  <p style={{ fontSize: "0.9rem" }}><strong>Designation:</strong> {member.designation}</p>
                  <p style={{ fontSize: "0.9rem" }}><strong>Contact:</strong> {member.contact}</p>
                </div>
              ))}
            </div>
            <div className='card'>
              <h2>Recent Achievements</h2>
              <ul>
                {villageInfo.achievements.map((achievement, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='villageWebsite'>
      <div className='navbar'>
        <div className='navLeft'>
          <img
            src="/images/Mahatma_Gandhi_photo.jpg"
            alt="Gandhi"
            className='navImage'
          />
          <img
            src="/images/ambedkar.jpg"
            alt="Ambedkar"
            className='navImage'
          />
          <img
            src="/images/shivaji-maharaj.jpg"
            alt="Shivaji Maharaj"
            className='navImage'
          />
        </div>
        <h1>Grampanchayat Rampur</h1>
        <div>
          <img
            src="/images/ashokstambh.jpg"
            alt="Ashok Stambh"
            className='navRight'
          />
          {/* <span style={styles.navLink} onClick={() => setActiveSection('home')}>Home</span>
          <span style={styles.navLink} onClick={() => setActiveSection('certifications')}>All Certifications</span>
          <span style={styles.navLink} onClick={() => setActiveSection('paybills')}>Pay Bills</span> */}
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <button className={`hamburger ${sidebarOpen ? 'open' : 'closed'}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
        <div className='sidebarContent'>
          {sidebarOpen && (
            <div style={{ marginTop: '3rem' }}>
              <div className='sidebarItem' onClick={() => setActiveSection('home')}>
                🏠 Home
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('hospital')}>
                🏥 Hospital
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('dairy')}>
                🥛 Dairy
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('board')}>
                👥 Board Members
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('population')}>
                📊 Village Data
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('schemes')}>
                📜 Schemes
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('announcements')}>
                📢 Announcements
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('certifications')}>
                📑 All Certifications
              </div>
              <div className='sidebarItem' onClick={() => setActiveSection('paybills')}>
                💳 Pay Bills
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='mainContent'>
        <div className='contentArea'>
          {renderContent()}
        </div>
        <footer className='customFooter'>
          © 2024 {villageInfo.name} Gram Panchayat. All rights reserved.
        </footer>
      </div>
    </div>
  );
}