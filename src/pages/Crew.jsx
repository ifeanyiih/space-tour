import React from 'react'
import styled from 'styled-components'
import mobile from '/assets/crew/background-crew-mobile.jpg'
import tablet from '/assets/crew/background-crew-tablet.jpg'
import desktop from '/assets/crew/background-crew-desktop.jpg'

const Section = styled.section`
    background-image: url(${mobile});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-block-size: 100vh;

    @media (min-width: 768px) {
        background-image: url(${tablet});
    }

    @media (min-width: 1024px) {
        background-image: url(${desktop});
    }

`

const Destination = () => {
  return (
    <Section aria-label='main content section crew page' className='main_content_section section crew'>
        Crew
    </Section>
  )
}

export default Destination