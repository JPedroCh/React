import { Info, InfoContainer, Title } from "./styles";


interface InfoDisplayProps {
  title: string;
  info: string;
}

const InfoDisplay = ({ title, info }: InfoDisplayProps ) => {
  return (
    <InfoContainer>
      <Title>{title}:</Title>
      <Info>{info}</Info>
    </InfoContainer>
  )
}

export default InfoDisplay;