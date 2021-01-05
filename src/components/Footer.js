import React, { Component } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Footer extends Component {
  render() {
    return (
      <div className="main">
        <div className="footer">
          <div className="center">
            <div className="copyright">
              <span><a href="mailto:saebompak@gmail.com" target="_blank"><MailOutlineIcon fontSize="large" /></a></span>
              <span><a href="https://www.linkedin.com/in/saebompak" target="_blank"><LinkedInIcon fontSize="large" /></a></span>
              <span><a href="https://github.com/saebomp" target="_blank"><GitHubIcon style={{ fontSize: 29 }} /></a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Footer;
