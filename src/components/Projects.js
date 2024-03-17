import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Yumm from "../assets/img/yumm.png";
import WhatsApp from "../assets/img/chatbot.png";
import SignUs from "../assets/img/signus.png";
import Taskify from "../assets/img/taskify.png";
import Iut from "../assets/img/iut.png"
import Foodity from "../assets/img/foodity.png"
import Flight from "../assets/img/flight.png"
import Orion from "../assets/img/orion.png"
import Prototype from "../assets/img/prototype.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Yumm",
      description: "Design & Development",
      imgUrl: Yumm,
    },
    {
      title: "WhatsApp Chatbot",
      description: "Design & Development",
      imgUrl: WhatsApp,
    },
    {
      title: "SignUs",
      description: "Design & Development",
      imgUrl: SignUs,
    },
    {
      title: "Taskify",
      description: "Design & Development",
      imgUrl: Taskify,
    },
    {
      title: "Teachme",
      description: "Design & Development",
      imgUrl: Taskify,
    },
    {
      title: "Handpose",
      description: "Design & Development",
      imgUrl: Taskify,
    },
  ];

  const uiProjects = [
    {
      title: "Iut SIS",
      description: "Design & Development",
      imgUrl: Iut,
    },
    {
      title: "Foodity",
      description: "Design & Development",
      imgUrl: Foodity,
    },
    {
      title: "Flight booking",
      description: "Design & Development",
      imgUrl: Flight,
    },
    {
      title: "Orion CV",
      description: "Design & Development",
      imgUrl: Orion,
    },
    {
      title: "Prototype",
      description: "Design & Development",
      imgUrl: Prototype,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          uiProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
