import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/fahadkhanpic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Web Developer", "Software Engineer", "Software Developer" ];
  const period = 2000;

  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mohammed Fahad Khan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a passionate software developer with a strong foundation in building scalable and efficient applications. I specialize in full-stack development, problem-solving, and collaborating with teams to deliver innovative solutions. Continuously learning and adapting to new technologies, I aim to contribute to impactful projects in the tech industry.</p>
                  <p>Currently, I'm looking to expand my expertise in cloud computing and work on large-scale distributed systems. I am eager to contribute to real-world projects and grow in the field of software development.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <div className="banner-buttons">
          <a href="https://drive.google.com/file/d/1lAa4CRKryeu4U3ewJQ-BuzCNzpMDuxfG/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
            <button className="banner-btn mycv-btn">My Resume</button>
          </a>
          <button className="banner-btn" onClick={handleToggleDetails}>
            {showDetails ? "Hide My Details" : "My Details"}
          </button>
          {showDetails && (
            <div className="details-box">
              <p><strong>Email:</strong> fahad@gmail.com</p>
              <p><strong>Phone:</strong> +91-9876543210</p>
            </div>
          )}
        </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg}  className="banner-image" alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
