import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://www.facebook.com/nagarasa.mithilan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/Miththilan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://twitter.com/miththilan3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/miththilan/?hl=en" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/nagarasa-miththilan-17a24515b/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
         </Col>
  );
}

export default SocialIcons;
