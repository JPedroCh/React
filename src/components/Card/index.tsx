import { Card, Image, Title } from "./styles";

interface NavigationCardProps {
  title: string;
  description?: string;
  image?: string;
  onClick: () => void;
}

const NavigationCard = ({ title, description, image, onClick }: NavigationCardProps ) => {

  return (
    <Card onClick={onClick}>
      <Title>{title}</Title>
      {
        description ? 
        <>{description}</>
        :<></>
      }
      <Image src={image}/>
    </Card>
  )
}

export default NavigationCard;