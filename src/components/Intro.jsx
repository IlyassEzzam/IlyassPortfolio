import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    height: 55vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media (max-width: 800px) {
    background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
    border-radius: 50px;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;



  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;

    @media (max-width: 800px) {
    width: 200%;
    }
  }
`;


const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: -53px;
    margin-block: auto;
    padding: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  div a{
    font-family: Copse, serif;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    color: rgb(120, 120, 120);
    text-shadow: rgb(0, 0, 0) -4px 2px 2px;
  }@media (max-width: 800px) {
    div a{
      display: none;
    }
}
`;

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: "55vh" }}
            transition={{ type: "spring", duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Ilyass Ezzzam.</h3>
                    <h6>
                        I Full Stack Developer and Code simple yet beautiful WebSites.
                    </h6>
                    <div >
                      <a
                        className="cv"
                        href="/Images/kaneki.jpg"  // Replace with the actual path to your CV file
                        download="kaneki.jpg"      // Set the desired file name for download
                      >
                        Download CV
                      </a>
                    </div>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    );
};

export default Intro;
