import React, { FC, useContext, useMemo } from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../store'
import Icon from './Icon'
import { useAppSelector } from '../store'
import { toggleOverlay } from '../reducers/favorites'

const Wrapper = styled.button`
  background: none;
  padding: 5px;
  border: none;
  position: relative;
  cursor: pointer;

  &:hover {
    font-variation-settings: 'FILL' 1;
  }

  .c-favorite-button__badge {
    height: 16px;
    width: 16px;
    border-radius: 8px;
    position: absolute;
    top: -3px;
    right: -4px;
    background-color: ${({ theme }) => theme.colors.main};
    pointer-events: none;
    font-weight: 700;
  }
`

const FavoritesButton: FC = () => {
  const { ids } = useAppSelector((state) => state.favorites)
  const dispatch = useAppDispatch()

  const count = useMemo(() => {
    return ids.length
  }, [ids])

  return (
    <Wrapper
      className='c-favorite-button'
      onClick={() => dispatch(toggleOverlay())}
    >
      <Icon iconName='favorite' />
      {count > 0 && (
        <span className='c-favorite-button__badge'>{ids.length}</span>
      )}
    </Wrapper>
  )
}

export default FavoritesButton
