import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} height="100" width="100"/>
        <div className="proj-txtx">
        <a href="https://github.com/FahadKhan2004" target="_blank"><h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
