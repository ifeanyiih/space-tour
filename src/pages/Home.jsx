import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 100vh;
    inline-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Home = () => {
  return (
    <Section className='main-section home'>
        Home
    </Section>
  )
}

export default Home