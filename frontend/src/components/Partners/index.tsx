import { useEffect, useState } from 'react';
import { PartnerCard, PartnersContainer, PartnerSection, PartnerTable } from './styles';

interface Partner {
  title: string;
  distanceInKilometers: number;
  smallDogPrice: number;
  bigDogPrice: number;
  weekendSmallDogPrice: number
  weekendBigDogPrice: number
}

export function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]); 

  async function getPartners() {
    const res = await fetch('http://localhost:3333/');
    const data = await res.json();
    
    setPartners(data.petShops);
  }

  useEffect(() => {
    getPartners();
  }, [])

  return (
    <PartnersContainer>
      <h1>PetShops Parceiros:</h1>
      <PartnerSection>
        {partners.map(partner => (
          <PartnerCard key={Math.random()}>
            <header>{partner.title}</header>
            <p>Distância do PetShop: <span>{partner.distanceInKilometers}km</span></p>
            <h2>Valores de banhos:</h2>
            <PartnerTable key={Math.random()}>
                <p key={Math.random()}>
                  <span>Cães Pequenos</span>
                  <span>R$ {partner.smallDogPrice}</span>
                </p>
                <p key={Math.random()}>
                  <span>Cães Grandes</span>
                  <span>R$ {partner.bigDogPrice}</span>
                </p>
            </PartnerTable>
            <h2>Aos fins de semana:</h2>
            <PartnerTable key={Math.random()}>
                <p key={Math.random()}>
                  <span>Cães Pequenos</span>
                  <span>R$ {partner.weekendSmallDogPrice}</span>
                </p>
                <p key={Math.random()}>
                  <span>Cães Grandes</span>
                  <span>R$ {partner.weekendBigDogPrice}</span>
                </p>
            </PartnerTable>
          </PartnerCard>
        ))}
      </PartnerSection>
    </PartnersContainer>
  )
}