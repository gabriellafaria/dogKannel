import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Partners } from '../components/Partners';
import { Main, Button, FormContainer, Form, Input, BestChoice } from './style';
import dayjs from 'dayjs';

interface ResponseProps {
  name: string;
  price: number;
}

interface FormProps {
  date: string;
  amountSmallDogs: number;
  amountBigDogs: number;
}

export function Index() {
  const [response, setResponse] = useState<ResponseProps>();
  const [date, setDate] = useState<string>('');
  const [amountSmallDogs, setAmountSmallDogs] = useState<number>(0);
  const [amountBigDogs, setAmountBigDogs] = useState<number>(0);

  async function sendForm({date, amountSmallDogs, amountBigDogs}: FormProps) {
    const fetchBestChoiceURL = `http://localhost:3333/calculate?date=${date}&amountSmallDogs=${amountSmallDogs}&amountBigDogs=${amountBigDogs}`
    const res = await fetch(fetchBestChoiceURL)
    const data = await res.json();
   
    return setResponse(data.bestChoice);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    sendForm({date, amountSmallDogs, amountBigDogs});

    handleReset();
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    (id === 'date') ? setDate(dayjs(value).format('MM-DD-YYYY')) : '';
    (id === 'amountSmallDogs') ? setAmountSmallDogs(Number(value)) : '';
    (id === 'amountBigDogs') ? setAmountBigDogs(Number(value)) : '';
  }

  let anounce;
  let anouncePrice;
  let anounceName;

  if (response?.name) {
    anounce = 'A melhor escolha, conforme os parâmetros informados é:';
    anounceName = `PetShop ${response?.name}`;
    anouncePrice = `Valor total: R$ ${response?.price}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  function handleReset(this: any) {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });
  }

  return (
    <>
      <Header />
      <Main>
        <Partners />
        <h1 id='verify'>Verifique o PetShop mais barato conforme a informações:</h1>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input type="date" id="date" placeholder="Data para o banho" onChange={handleChange} />
            <Input type="number" min='0' id="amountSmallDogs"  placeholder="Quantidade cães pequenos" onChange={handleChange} />
            <Input type="number" min='0' id="amountBigDogs" placeholder="Quantidade cães grandes" onChange={handleChange} />

            <Button type="submit">Enviar</Button>
          </Form>
        </FormContainer>
  
        <BestChoice>
          <h1 id='res'>{anounce}</h1>
          <p id='res-name'>{anounceName}</p>
          <p id='res-price'>{anouncePrice}</p>
        </BestChoice>

      </Main>
    </>
  )
}
