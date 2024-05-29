import { PropsWithChildren } from "react";
import { Background } from "./styles";

interface LayoutProps {
  direction: "row" | "column";
}

const Layout = ({ children, direction }: PropsWithChildren<LayoutProps>) => {

  return (
    <Background style={{flexDirection: direction}}>
      {children}
    </Background>
  )
}

export default Layout;