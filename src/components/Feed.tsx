import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchAllProfilesAction, setUniqueProfilesAction } from "../actions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { IProfile } from "../interfaces/IProfile";
import "../css/SidebarStyles.css";


export const Feed = () => {

  const uniqueProfiles = useAppSelector(state => state.uniqueProfiles.results)
  const [numbers, setNumbers] = useState<number[]>([]);
  const profiles = useAppSelector(state => state.allProfiles.results)
  const dispatch = useAppDispatch();



  const uniqueProfile = () => {
    const uniqueProfilesArray: IProfile[] = []
    for (const index of numbers) {
      uniqueProfilesArray.push(profiles[index])
    }
    dispatch(setUniqueProfilesAction(uniqueProfilesArray))
  }

  useEffect(() => {
    dispatch(fetchAllProfilesAction());
    generateRandomNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (numbers.length > 0 && profiles.length > 0) {
      uniqueProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbers, profiles]);

  const generateRandomNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 20) {
      const randomNumber = Math.floor(Math.random() * 101);
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    setNumbers(newNumbers);
  };


  return (
    <Container className="mt-3">
      <Row>
        <Col></Col>
        <Col className="col-12 col-sm-6"></Col>
        <Col className="col-12 col-sm-4 px-4 profiles-container">
          <div className="sidebar-card my-2">
            <div className="card-spacing">
              <h2 style={{ fontSize: "15px" }}>Add to your feed</h2>
              {uniqueProfiles.length !== 0 && uniqueProfiles.slice(0, 4).map((profile: IProfile, i: any) => {
                return (
                  <div key={i}>
                    <div className="d-flex">
                      <div className="image-container">
                        <img
                          src={profile.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <Link className="username" to={"/"}>
                          {profile.name} {profile.surname}
                        </Link>{" "}
                        <span>• 2nd</span>
                        <p className="profession">{profile.title}</p>
                        <Button variant="outline-secondary">
                          <svg
                            className="mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            data-supported-dps="16x16"
                            fill="currentColor"
                            width="16"
                            height="16"
                            focusable="false"
                          >
                            <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                          </svg>{" "}
                          Connect
                        </Button>
                      </div>
                    </div>
                    {i < 3 && <hr />}
                  </div>
                )
              })}
              <div className="mt-2 recommendations">
                <span style={{ fontSize: "15px" }}>View all recommendations</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="arrow-right-small" data-supported-dps="16x16" fill="currentColor" width="16" height="16">
                  <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="feed-footer">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Accessibility</Link></div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Help Center</Link></div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>About</Link></div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Impressum</Link></div>
              <div className="mx-3">
                <NavDropdown title="Privacy & Terms" id="basic" className="dropdown-link">
                  <NavDropdown.Item href="#action/3.1">
                    Privacy Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    User Agreement
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Cookie Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Copyright Policy
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Ad Choices</Link></div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Advertising</Link></div>
              <div className="mx-3">
                <NavDropdown title="Business Solutions" id="basic2" className="dropdown-link">
                  <NavDropdown.Item href="#action/3.1">
                    Talent Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Sales Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Post a job for free
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Marketing Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Learning Solutions
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>Get the LinkedIn App</Link></div>
              <div className="mx-3"><Link style={{ fontWeight: "400" }} to={"/"}>More</Link></div>
            </div>
            <div className="d-flex justify-content-center my-2">
              <svg className="footer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" data-supported-dps="56x14" fill="currentColor" width="56" height="14" focusable="false">
                <g>
                  <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
                </g>
              </svg>
              <span className="ml-1" style={{ fontSize: "12px" }}>LinkedIn Corporation © 2023</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};