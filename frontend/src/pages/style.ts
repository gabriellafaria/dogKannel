import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #verify {
    margin-top: 1.3rem;
    font-size: 1.7rem;
    font-family: "Indie Flower";
  }

  #res-price, #res-name {
    font-size: 1.5rem;
    text-shadow: ${({ theme }) => theme['gray-100']} 1px 0 3px;
  }

  #res {
    font-size: 1.7rem;
    font-style: normal;
  }

  @media (max-width: 768px) {
    #verify {
      font-size: 1.3rem;
    }

    #res-price, #res-name {
      font-size: 1.5rem;
    }

    #res {
      font-size: 1.3rem;
    }
  }
`

export const BestChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.3rem;

  h1 {
    font-style: italic;
  }

  #res {
    font-family: "Indie Flower";
  }
`

export const FormContainer = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme['gray-200']};
  width: 18rem;
  border: 0;
  border-radius: 5px;
  
  text-align: center;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme['green-100']};
  font-weight: 600;
  border: 0;
  align-self: center;
  width: 10rem;
  border-radius: 20px;
`