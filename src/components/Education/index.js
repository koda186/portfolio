import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { withGetScreen } from 'react-getscreen'
import "./index.css";


class Education extends React.Component {
  render() {
    if (this.props.isMobile()) {
      return (
            <Container>
              <div style="text-align:center"><h1>EDUCATION</h1></div>
              <h3>School</h3>
              <b>Name:</b> St. Edward's University <br />
              <b>Degree:</b> Bachelor of Science - BS <br />
              <b>Major:</b> Computer Science <br />

              <h3>Lang's</h3>
              Assembly Language
              • Bash
              • C
              • C++
              • <b>Java </b>
              • JavaScript
              • NoSQL
              • PHP
              • <b>Python </b>
              • Swift
              • SQL

              <h3>Tech</h3>
              <b>DBMS:</b> MongoDB • MySQL <br />
              <b>Frameworks/Libraries:</b> Bootstrap
              • Django <br />
              • Express
              • Mongoose
              • Node
              • React

              <h3>Tools</h3>
              Docker
              • Cloud computing: DigitalOcean Droplet
              • Git (Bitbucket, GitHub)
              • IDE's: Eclipse, IntelliJ, PyCharm, VS Code, Xcode
              • Postman
              • Slack
              • Tmux
              • Trello
              • Vim
              • VirtualBox

              <h3>Courses</h3>
              Algorithms & Data Structures
              • Component-Based Programming
              • Computer Security & Privacy
              • Computing Sciences Concepts I/II + Lab
              • Database Theory
              • Intro Computer Organization & Architecture
              • Operating Systems
              • Program Languages
              • Senior Research Project
              • Software Engineering Ⅰ/II + Research
              • Web Programming

              <h3>Other</h3>
              Agile Software Development
              • Backlogging/Sprints Planning
              • CI/CD
              • HackerRank: Problem Solving Gold Badge
              • IoT (Raspberry Pi)
              • Linux distributions: Ubuntu
              • Nginx configuration
              • Scrum Team/Master
              • SDLC
              • System Diagram & Design Artifacts
              • UCD
              • Unit/Integration Testing

            </Container>
        
      );
    } else {
      return (
            <Container>
              <Row>
                <Col>
                  <table >
                    <tr>
                      <td className="edu-field"><h3>School</h3></td>
                      <td><b>Name:</b> St. Edward's University <br />
                        <b>Degree:</b> Bachelor of Science - BS <br />
                        <b>Field of Study:</b> Computer Science <br />
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Lang's</h3></td>
                      <td>
                        Assembly Language
                        • Bash
                        • C
                        • Cplus-plus
                        • <b>Java </b>
                        • JavaScript
                        • NoSQL
                        • PHP
                        • <b>Python </b>
                        • Swift
                        • SQL
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Tech</h3></td>
                      <td>

                        <b>DBMS:</b> MongoDB • MySQL <br />
                        <b>Frameworks/Libraries:</b> Bootstrap
                          • Django <br />
                          • Express
                          • Flask
                          • Mongoose
                          • Node
                          • React
                      </td>
                    </tr>
                    {/* <tr>
                      <td className="edu-field"><h3>DBMs</h3></td>
                      <td>
                        MongoDB
                          • MySQL

                      </td>
                    </tr> */}
                    <tr>
                      <td className="edu-field"><h3>Tools</h3></td>
                      <td>
                        Docker
                        • Cloud computing: DigitalOcean Droplet
                        • GDB
                        • Git (Bitbucket, GitHub) <br />
                        • IDE's: Eclipse, IntelliJ, PyCharm, VS Code, Xcode
                        • Postman
                        • Slack
                        • Tmux
                        • Trello <br />
                        • Vim
                        • VirtualBox
                      </td>
                    </tr>

                  </table>
                </Col>
                <Col>
                  <table >
                    <tr>
                      <td className="edu-field"><h3>Courses</h3></td>
                      <td>
                        Algorithms & Data Structures <br />
                        • Component-Based Programming <br />
                        • Computer Security & Privacy <br />
                        • Computing Sciences Concepts I/II + Lab <br />
                        • Database Theory
                        • Intro Computer Organization & Architecture
                        • Operating Systems
                        • Program Languages
                        • Senior Research Project
                        • Software Engineering Ⅰ/II + Research
                        • Web Programming
                      </td>
                    </tr>

                    <tr>
                      <td className="edu-field"><h3>Other</h3></td>
                      <td>
                        Agile Software Development <br />
                        • Backlogging/Sprints Planning
                        • CI/CD <br />
                        • HackerRank: Problem Solving Gold Badge
                        • IoT (Raspberry Pi)
                        • Linux distributions: Ubuntu
                        • Nginx configuration <br />
                        • Scrum Team/Master
                        • SDLC
                        • System Diagram & Design Artifacts
                        • UCD <br />
                        • Unit/Integration Testing
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Container>
 
      )
    }
  }
}

export default withGetScreen(Education);