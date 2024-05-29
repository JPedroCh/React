import { PropsWithChildren } from "react";
import { Card, Title } from "./styles";

interface FormCardProps {
  title: string;
}

const FormCard = ({ title, children }: PropsWithChildren<FormCardProps> ) => {
  return (
    <Card>
      <Title>{title}</Title>
      {children}
    </Card>
  )
}

export default FormCard;