import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media screen and (min-width: 40.05em) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const ToggleMenu = ({ setToggle, open }) => (
  <StyledBurger
    type="button"
    aria-label="toggle menu"
    open={open}
    onClick={() => setToggle(prevState => !prevState)}
  >
    <div />
    <div />
    <div />
  </StyledBurger>
);

ToggleMenu.propTypes = {
  setToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ToggleMenu;
