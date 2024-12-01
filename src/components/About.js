import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import schoolLogo from "../assets/img/school-logo.png";  // Add your school logo in the assets folder
import intermediateLogo from "../assets/img/intermediate-logo.png";  // Add your intermediate logo
import collegeLogo from "../assets/img/college-logo.png";  // Add your college logo

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <h5><p>I'm a passionate software developer with a focus on creating innovative and efficient solutions. Below is a glimpse of my educational background and achievements.</p>
                    </h5>
                  <div className="education">
                    <h3>Education</h3>
                    <div className="education-item">
                      <img src={schoolLogo} alt="School Logo" className="education-logo" />
                      <div className="education-details">
                        <h5>School: Hyderabad Institute of Excellence--91.1%</h5>
                      </div>
                    </div>
                    <div className="education-item">
                      <img src={intermediateLogo} alt="Intermediate Logo" className="education-logo" />
                      <div className="education-details">
                        <h5>Intermediate: Sri Chaitanya --98.4%</h5>
                      </div>
                    </div>
                    <div className="education-item">
                      <img src={collegeLogo} alt="College Logo" className="education-logo" />
                      <div className="education-details">
                        <h5>College: Vasavi College of Engineering --8.92 CGPA</h5>
                      </div>
                    </div>
                  </div>

                  <div className="achievements">
                    <p><h3>&nbsp;               Skills</h3></p>
                    <p>Awarded Honorable Mention in the Modeled United Nations committee hosted by my college.</p>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
