import React from 'react'
import styled from 'styled-components'
import mobile from '/assets/destination/background-destination-mobile.jpg'
import tablet from '/assets/destination/background-destination-tablet.jpg'
import desktop from '/assets/destination/background-destination-desktop.jpg'

import PageContent from '../util/util'

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

const data = PageContent("destinations")
console.log(data)

const Destination = () => {
  return (
    <Section aria-label='main content section destination page' className='main_content_section section destination'>
        Destination
    </Section>
  )
}

export default Destination