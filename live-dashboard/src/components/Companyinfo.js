import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../components/img/Talescope-T-O.png';
import {
  faPhone,
  faEnvelope,
  faFax,
  faBuilding,
  faGlobe,
  faLocationDot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Companyinfo() {
  const handleSaveContact = () => {
    const vCardData = 
`BEGIN:VCARD
VERSION:3.0
N:Talescope Consulting Pvt.Ltd;;;
FN:Talescope Consulting Pvt.Ltd
ORG:Talescope Consulting Pvt.Ltd
TEL;TYPE=WORK,VOICE:+91 8123891091
TEL;TYPE=CELL,VOICE:+91 7659856344
EMAIL:asif@talescope.io
ADR;TYPE=WORK:;;BR Enclave, Singasandra, Bangalore - 560068
URL:https://talescope.io
END:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "contact.vcf";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.avatar}>
          <img style={styles.logo} src={Logo} alt="" />
        </div>
        <h1 style={styles.name}>Talescope Consulting Pvt.Ltd</h1>
        <p style={styles.description}>Your Empowering Talent, Elevating Businesses</p>
        <div style={styles.buttons}>
          <a href="tel:+918123891091" style={styles.button}>
            <FontAwesomeIcon icon={faPhone} style={styles.buttonIcon} /> Phone
          </a>
          <a href="mailto:asif@talescope.io" style={styles.button}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.buttonIcon} /> Email
          </a>
          <a href="https://talescope.io" target="_blank" rel="noopener noreferrer" style={styles.button}>
            <FontAwesomeIcon icon={faGlobe} style={styles.buttonIcon} /> Website
          </a>
        </div>
      </div>

      {/* Details Section */}
      <div style={styles.details}>
        {[
          { icon: faPhone, title: "Phone (Work)", value: "+91 8123891091", link: "tel:+918123891091" },
          { icon: faPhone, title: "Phone", value: "+91 7659856344", link: "tel:+917659856344" },
          { icon: faEnvelope, title: "Email", value: "asif@talescope.io", link: "mailto:asif@talescope.io" },
          { icon: faBuilding, title: "Organization", value: "Talescope Consulting Pvt.Ltd" },
          { icon: faLocationDot, title: "Address", value: "BR Enclave, Singasandra, Bangalore - 560068" },
          { icon: faGlobe, title: "Website", value: "talescope.io", link: "https://talescope.io" },
        ].map((item, index) => (
          <div key={index} style={styles.detailItem}>
            <div style={styles.iconWrapper}>
              <FontAwesomeIcon icon={item.icon} style={styles.icon} />
            </div>
            <div>
              <p style={styles.detailTitle}>{item.title}</p>
              {item.link ? (
                <a
                  href={item.link}
                  style={styles.detailLink}
                  target={item.icon === faGlobe ? "_blank" : "_self"}
                  rel={item.icon === faGlobe ? "noopener noreferrer" : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <p style={styles.detailText}>{item.value}</p>
              )}
            </div>
          </div>
        ))}

        {/* Social Links */}
        <div style={styles.socialLinks}>
          <p style={styles.detailTitle}>Page Link</p>
          <div style={styles.socialIcons}>
            <a href="https://www.instagram.com/talescope.io/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/people/Talescope-Consulting-Private-Limited/61570880603991/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/company/talescopeai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Save to Contacts */}
        <button style={styles.saveButton} onClick={handleSaveContact}>
          <FontAwesomeIcon icon={faPlus} style={styles.saveButtonIcon} /> Save
          to contacts
        </button>
      </div>
    </div>
  );
}



const styles = {
  // Updated styles
  container: {
    fontFamily: "poppins-semibold, poppins, sans-serif",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f4f7f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  divider: {
    border: "0",
    height: "1px",
    backgroundColor: "#000",
    margin: "10px 0",
  },
  detailItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    paddingBottom: "20px", // Add padding for spacing above the border
  borderBottom: "1px solid #bcbcbc", // Add the bottom border
  },
  iconWrapper: {
    width: "40px",
    height: "40px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginRight: "15px",
  },
  icon: {
    fontSize: "20px",
    color: "#ff914d",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#ff914d",
    padding: "20px",
    borderRadius: "10px 10px 0 0",
    color: "#fff",
  },
  avatar: {
    width: "80px",
    height: "80px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    margin: "0 auto 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60px",
  },
  name: {
    margin: "5px 0",
    fontSize: "30px",
    fontWeight: "bold",
  },
  position: {
    margin: "5px 0",
    fontSize: "14px",
  },
  description: {
    fontSize: "14px",
    margin: "10px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#fff",
    color: "#ff914d",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "12px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    transition: "all 0.3s",
  },
  details: {
    padding: "20px",
  },
  icon: {
    fontSize: "20px",
    color: "#ff914d",
  },
  detailTitle: {
    fontWeight: "bold",
    margin: 0,
    fontSize: "14px",
    color: "#8a8a8a",
  },
  detailText: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "normal",
  },
  detailLink: {
    fontSize: "14px",
    fontWeight: "normal",
    textDecoration: "none",
    color: "#000",
    marginTop: "0",
  },
  socialLinks: {
    textAlign: "center",
    margin: "20px 0",
  },
  socialTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "10px",
    color: "#5da9e9",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialIcon: {
    fontSize: "24px",
    color: "#ff914d",
    textDecoration: "none",
    transition: "all 0.3s",
  },
  saveButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto 0",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ff914d",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s",
    width: "100%",
  },
  saveButtonIcon: {
    marginRight: "10px",
  },
};
