import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { Product } from '../utils/getProducts'
import Icon from './Icon'
import { useAppDispatch, useAppSelector } from '../store'
import { toggleFavorite } from '../reducers/favorites'
import classNames from 'classnames'
import banana from '../images/banana.webp'

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #000;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

  .c-product-card__image {
    width: 100%;
    aspect-ratio: 3/2;

    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  .c-product-card__bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h3 {
      margin: 0;
    }

    .c-icon {
      margin-left: auto;
      color: ${({ theme }) => theme.colors.main};
    }

    .c-product-card__price {
      background-color: ${({ theme }) => theme.colors.main};
      font-weight: 700;
      padding: 3px;
      border-radius: 2px;
    }
  }

  &:hover {
    .c-icon {
      color: ${({ theme }) => theme.colors.contrast};
    }
  }

  &.c-product-card--favorite {
    .c-icon {
      font-variation-settings: 'FILL' 1;
    }
  }
`

const ProductCard: FC<Product> = ({ name, price, id }) => {
  const dispatch = useAppDispatch()
  const { ids } = useAppSelector((state) => state.favorites)

  const isFavorite = useMemo(() => {
    return ids.includes(id)
  }, [ids])

  const wrapperClasses = classNames('c-product-card', {
    'c-product-card--favorite': isFavorite,
  })

  return (
    <Wrapper
      className={wrapperClasses}
      onClick={() => dispatch(toggleFavorite(id))}
    >
      <div className='c-product-card__image'>
        <img src={banana} />
      </div>
      <div className='c-product-card__bottom'>
        <h3>
          {name} <span className='c-product-card__price'>€ {price}</span>
        </h3>
        <Icon iconName='favorite' />
      </div>
    </Wrapper>
  )
}

export default ProductCard
