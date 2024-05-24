import { HeaderContainer, HeaderContent, HeaderImage } from './styles';

import logoKennel from '../../assets/dogHome.png';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderImage src={logoKennel} alt="dog kennel logo" />
        <h1>Canil do Eduardo</h1>
      </HeaderContent>
    </HeaderContainer>
  );
}