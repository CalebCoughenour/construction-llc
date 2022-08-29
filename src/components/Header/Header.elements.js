import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialHeaderSec = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 30px;
  background: #3888C7;
  border: 1px;
  border-bottom-style: solid;
`;

export const SocialLogo = styled(Link)`
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  text-align: center;

  &:hover {
  color: rgba(0, 0, 0, 0.9);
  transition: 0.3s ease-out;
  }
`;

export const SocialIcons = styled.div`
  margin-right: 40px;
  display: flex;
  justify-content: right;
`;

export const SocialIconLink = styled.a`
  margin-bottom: 5px;   
  margin-right: 30px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 22px;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;

export const LinkSec = styled.div`
  align-items: left;
  position: absolute;
`;

export const EmailAddress = styled.a`
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;

export const PhoneNumber = styled.a`
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;