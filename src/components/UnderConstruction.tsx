import { ReactElement, useState } from 'react';
import './UnderConstruction.scss';
import PhotoBlob from '../assets/photo-blob.png';
import cv from '../assets/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebookSquare,
  faYoutubeSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

export function UnderConstruction(): ReactElement {
  const [isEnglish, setIsEnglish] = useState(true);
  const content = {
    name: 'Mateusz Dominiak',
    position: 'Javascript Developer',
    text: isEnglish ? 'This website is currently' : `Strona jest aktualnie`,
    underConstructionText: isEnglish ? 'under construction' : 'w budowie',
    oldWebsiteText: isEnglish
      ? 'Visit my old website'
      : 'Odwiedź moją starą stronę',
    buttonText: isEnglish ? 'Download CV' : 'Pobierz CV',
    cvUrl: isEnglish ? 'AHAA' : 'AAAAAAA',
  };

  const socialIcons = [
    { link: 'https://github.com/gitmatheo', icon: faGithubSquare },
    { link: 'https://www.linkedin.com/in/mateusz-dominiak/', icon: faLinkedin },
    {
      link: 'https://www.facebook.com/mateuszdominiak',
      icon: faFacebookSquare,
    },
    { link: 'https://www.youtube.com/user/matteuszd', icon: faYoutubeSquare },
  ];

  function handleChangeLanguage() {
    setIsEnglish((prevLang) => !prevLang);
  }

  return (
    <div className="under-construction">
      <div className="btn-container">
        <button
          className={isEnglish ? 'btn btn--active' : 'btn'}
          onClick={handleChangeLanguage}
        >
          EN
        </button>
        <button
          className={!isEnglish ? 'btn btn--active' : 'btn'}
          onClick={handleChangeLanguage}
        >
          PL
        </button>
      </div>
      <section className="container">
        <div className="text">
          <h3>{content.position} </h3>
          <h1>{content.name}</h1>
          <h2>
            {content.text} <strong>{content.underConstructionText}</strong>
          </h2>
          <a
            href="https://gitmatheo.github.io/MyPortfolio-Website/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="website-arrow">➔</span>
            <span className="website-text">{content.oldWebsiteText}</span>
          </a>
          <div className="cv">
            <a className="btn" href={cv} target="_blank" rel="noreferrer">
              {content.buttonText}
            </a>

            <div>
              {' '}
              {socialIcons.map(({ link, icon }) => (
                <a key={link} href={link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="social-icon" icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="photo">
          <img src={PhotoBlob} alt="Author" />
        </div>
      </section>
    </div>
  );
}
