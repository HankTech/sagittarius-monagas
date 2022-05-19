import styled from 'styled-components'
import Image from 'next/image'

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
       <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
    </StyledFooter>
  )
}

export default Footer
