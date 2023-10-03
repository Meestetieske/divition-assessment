import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.i`
  display: block;
`

interface Props {
  iconName: string
}

const Icon: FC<Props> = ({ iconName }) => {
  return (
    <Wrapper className='c-icon material-symbols-outlined'>{iconName}</Wrapper>
  )
}

export default Icon
