import './Footer.css'

function Footer() {

    const member =
        {
            name:'Andrew Madrigal',
            github: 'https://github.com/Andrizle/Yap.git',
            linkedin: 'https://www.linkedin.com/in/andrew-madrigal/'
        };

    return(
    <div id="footerBar">
      <div className='footerTeamDiv'>
        <p className='footerHeader'>Developmented By Andrew Madrigal</p>
        <div className='footerLinksContainer'>
          <a
            href={member.github}
            className='footerLink'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href={member.linkedin}
            className='footerLink'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
    )
  }

  export default Footer;
