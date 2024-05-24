import styled from 'styled-components';

export const PartnersContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -6rem;
  text-align: center;

  h1 {
    margin-bottom: 0.4rem;
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
    }

    padding: 0 0.5rem;
  }
`

export const PartnerSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

`

export const PartnerCard = styled.div`
  background-color: ${({ theme }) => theme['gray-400']};
  border-radius: 7px;
  padding: 1rem 2rem;

  header {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme['green-200']};
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    margin: 0.3rem 0.4rem;
  }

  span {
    font-weight: 600;
    margin: 0 0.6rem;
  }

  h2, #weekends {
    color: ${({ theme }) => theme['green-200']};
    font-weight: 600;
    font-size: 1.15rem;
    margin: 0.2rem 0;
  }

  @media (max-width: 1024px) {
    
  }
`
export const PartnerTable = styled.div`
  width: 100%;
  border-collapse: collapse;

  p {
    gap: 1rem;
  }
  
  span {    
    text-align: justify;
  }
`
