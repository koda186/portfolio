import React from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { withGetScreen } from 'react-getscreen'
import "./index.css";


class Education extends React.Component {
  render() {
    if (this.props.isMobile()) {
      return (
            <div className="flex-container">
              <h3>School</h3>
              <b>Name:</b> St. Edward's University <br />
              <b>Degree:</b> Bachelor of Science - BS <br />
              <b>Major:</b> Computer Science <br />

              <h3>Lang's </h3>
              • Assembly Language
              • Bash
              • C
              • <b>Cplus-plus </b> <br />
              • <b>Java </b>
              • JavaScript
              • NoSQL
              • PHP
              • <b>Python </b> <br />
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
              • Docker
              • Git (Bitbucket, GitHub)
              • Postman
              • Slack <br />
              • Trello
              • Vim
              • VirtualBox
              <b>Cloud computing: </b> DigitalOcean Droplet <br />
              <b>IDE's: </b> Eclipse, IntelliJ, PyCharm, VS Code, Xcode

              <h3>Courses</h3>
              • Algorithms & Data Structures
              • Component-Based Programming
              • Computer Security & Privacy
              • Computing Sciences Concepts I/II + Lab
              • Database Theory
              • Computer Organization & Architecture
              • Operating Systems
              • Program Languages
              • Senior Research Project
              • Software Engineering Ⅰ/II + Research
              • Web Programming

              <h3>Other</h3>
              • Agile Software Development <br />
              • System Diagram & Design Artifacts <br />
              • Scrum Team/Master
              • SDLC
              • UCD <br />
              • Backlogging/Sprints Planning
              • CI/CD <br />
              • Nginx configuration <br />
              • Unit/Integration Testing <br />
              <b>Protocols: </b> MQTT, REST, HTTP, and Websocket <br />
              <b>IoT: </b> (Raspberry Pi, Arduino) <br />
              <b>Linux distributions: </b> Ubuntu, Raspbian, Kali

            </div>

      );
    } else {
      return (
            <div className="education">
              <Row>
                <Col>
                  <table >
                    <tbody>
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
                        • Assembly Language
                        • Bash
                        • C
                        • <b>Cplus-plus </b> <br />
                        • <b>Java </b>
                        • JavaScript
                        • NoSQL
                        • PHP
                        • <b>Python </b> <br />
                        • Swift
                        • SQL
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Tech</h3></td>
                      <td>

                        <b>DBMS:</b> • MongoDB • MySQL <br />
                        <b>Frameworks/Libraries:</b> • Bootstrap
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
                        • MongoDB
                        • MySQL
                      </td>
                    </tr> */}
                    <tr>
                      <td className="edu-field"><h3>Tools</h3></td>
                      <td>
                        • Docker
                        • Git (Bitbucket, GitHub)
                        • Postman
                        • Slack <br />
                        • Trello
                        • Vim
                        • VirtualBox <br />
                        <b>Cloud computing: </b> DigitalOcean Droplet <br />
                        <b>IDE's: </b> Eclipse, IntelliJ, PyCharm, VS Code, Xcode
                      </td>
                    </tr>
                  </tbody>
                  </table>
                </Col>
                <Col>
                  <table >
                  <tbody>
                    <tr>
                      <td className="edu-field"><h3>Courses</h3></td>
                      <td>
                        • Algorithms & Data Structures <br />
                        • Component-Based Programming <br />
                        • Computer Security & Privacy <br />
                        • Computing Sciences Concepts I/II + Lab <br />
                        • Database Theory
                        • Computer Organization & Architecture
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
                        • Agile Software Development <br />
                        • System Diagram & Design Artifacts <br />
                        • Scrum Team/Master
                        • SDLC
                        • UCD <br />
                        • Backlogging/Sprints Planning
                        • CI/CD <br />
                        • Nginx configuration <br />
                        • Unit/Integration Testing <br />
                        <b>Protocols: </b> MQTT, REST, HTTP, and Websocket <br />
                        <b>IoT: </b> (Raspberry Pi, Arduino) <br />
                        <b>Linux distributions: </b> Ubuntu, Raspbian, Kali
                      </td>
                    </tr>
                  </tbody>
                  </table>
                </Col>
              </Row>
            </div>

      )
    }
  }
}

export default withGetScreen(Education);
