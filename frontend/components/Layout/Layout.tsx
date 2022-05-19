import { ReactNode } from 'react'
import styled from 'styled-components'

//  components
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Container = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
`

const StyledMain = styled.main`
  padding-top: 4rem;
  padding-bottom: 4rem;
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <StyledMain>
        { children }
      </StyledMain>
      <Footer />
    </Container>
  )
}

export default Layout
