// import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import './footer.css';

/**
 * Primary UI component for user interaction
 */
export const Footer = ({  label, }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div className="footer">
    <div className="copyright">
    <span>  {label}</span>
      
    <ul className="footer-bottom-links">
        <li><a href="/privacy-policy">Privacy | </a></li>
        <li><a href="/terms-and-conditions-general">Terms &amp; Conditions | </a></li>
        <li><a className="country-name" href="/locale">Canada</a></li>
    </ul>
</div>
</div>
  );
};

Footer.propTypes = {

  label: PropTypes.string.isRequired,
};

Footer.defaultProps = {
};
