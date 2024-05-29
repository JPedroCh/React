import { Background } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {

  return (
    <Background>
      {children}
    </Background>
  )
}

export default Layout;