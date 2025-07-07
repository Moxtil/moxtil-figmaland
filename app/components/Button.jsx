"use client";
import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button
        className="my-2 cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all ease-in-out duration-300"
        data-aos="fade-up"
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
