import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store'
import { toggleOverlay } from '../reducers/favorites'
import classNames from 'classnames'
import Icon from './Icon'
import { toggleFavorite } from '../reducers/favorites'
import banana from '../images/banana.webp'

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  opacity: 1;
  display: flex;
  justify-content: flex-end;
  transition: opacity 0.25s, display 0.25s;
  transition-behavior: allow-discrete;

  &.c-overlay--hidden {
    opacity: 0;
    display: none;
    transition: opacity 0.25s, display 0.25s;
    transition-behavior: allow-discrete;
  }
  .c-overlay__close {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  .c-overlay__panel {
    background-color: #fff;
    max-width: 100%;
    width: 300px;
    align-self: flex-start;
    padding: 10px 30px;
    box-sizing: border-box;
  }

  .c-overlay__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    &__image {
      height: 40px;
      width: 40px;
      padding: 5px;

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }

    .c-icon {
      margin-left: auto;
      opacity: 0;
      color: ${({ theme }) => theme.colors.main};
    }

    &:hover {
      .c-icon {
        opacity: 1;
      }
    }
  }
`

const FavoritesOverlay = () => {
  const { overlayOpen, ids } = useAppSelector((state) => state.favorites)
  const { products } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch()

  const wrapperClasses = classNames('c-overlay', {
    'c-overlay--hidden': !overlayOpen,
  })

  return (
    <Wrapper className={wrapperClasses}>
      <div className='c-overlay__panel'>
        <button
          className='c-overlay__close'
          onClick={() => dispatch(toggleOverlay())}
        >
          <Icon iconName='close'></Icon>
        </button>

        {ids.length > 0 ? (
          <h3>Favorite Banana's:</h3>
        ) : (
          <h3>No Bananas Selected</h3>
        )}

        {ids.map((id) => {
          const product = products.find((p) => p.id === id)

          if (!product) {
            return null
          }
          return (
            <div
              className='c-overlay__item'
              onClick={() => dispatch(toggleFavorite(id))}
            >
              <div className='c-overlay__item__image'>
                <img src={banana} />
              </div>
              <span>{product.name}</span>
              <Icon iconName='close'></Icon>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default FavoritesOverlay
