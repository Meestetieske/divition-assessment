import React, { FC } from 'react'
import styled from 'styled-components'
import FavoritesButton from './FavoriteButton'
import logo from '../images/logo.png'

const Wrapper = styled.header`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  // background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .c-logo {
    height: 50px;
  }
`

interface Props {
  title: string
}

const Header: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <img className='c-logo' src={logo} alt='Logo' />
      <FavoritesButton />
    </Wrapper>
  )
}

export default Header
