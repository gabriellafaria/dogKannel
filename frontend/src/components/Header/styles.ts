import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0 7rem 0;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font: 400 1.7rem  "Indie Flower";
  color: ${({ theme }) => theme['green-100']};

  h1:hover {
    text-shadow: ${({ theme }) => theme['green-100']} 1px 0 5px;
  }
`

export const HeaderImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 2.5rem;
`
