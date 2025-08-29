"use client";
import React from "react";
import styled from "styled-components";

const Button = ({ title, fade = "fade-left" }) => {
  return (
    <StyledWrapper>
      <button
        className="my-2 cursor-pointer bg-gradient-to-br from-pink-700 via-purple-700 to-purple-800 transition-all ease-in-out duration-300"
        data-aos={fade}
      >
        {title}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: white;
    border-radius: 4px;
  }

  button:active {
    transform: translate(0em, 0.2em);
  }
`;

export default Button;
