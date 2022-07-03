import React, {useState} from 'react'
import styled from 'styled-components'
import mobile from '/assets/crew/background-crew-mobile.jpg'
import tablet from '/assets/crew/background-crew-tablet.jpg'
import desktop from '/assets/crew/background-crew-desktop.jpg'
import PageContent from '../util/util'


const Section = styled.section`
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-block-size: 100vh;
  padding-block-start: 88px;
  text-align: center;
  position: relative;

  .page_heading {
    font-size: 1rem;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    line-height: 19.2px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    color: #fff;
    margin-block-end: 32px;

    @media (min-width: 768px) {
      justify-content: start;
      margin-inline-start: 38.5px;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.8px;
      margin-block-end: 60px;
    }

    @media (min-width: 1024px) {
      position: absolute;
      margin-inline-start: 100px;
    }

    @media (min-width: 1440px) {
      margin-inline-start: 166.5px;
    }

    .page_no {
      font-weight: 700;
      opacity: .25;
      mix-blend-mode: normal;
    }
    .title {
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    background-image: url(${tablet});
    padding-block-start: 136px;
  }

  @media (min-width: 1024px) {
    background-image: url(${desktop});
    padding-block-start: 212px;
  }

`
const Content = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }


`

const Article = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  order: 2;
  padding-block-start: 32px;
  border-block-start: 1px solid #383B4B;
  margin-inline: 24px;

  @media (min-width: 768px) {
    border: none;
    order: 1;
  }

  @media (min-width: 1024px) {
    flex: 1;
    margin: 0;
    margin-block-start: 154px;
    align-items: flex-start;
    text-align: start;
    margin-inline-start: 100px;
    margin-block-end: 2rem;
  }

  @media (min-width: 1440px) {
    margin-inline-start: 165px;
  }

  .article {
    order: 2;
    font-family: "Bellefair", sans-serif;
    font-weight: 400;
    color: #fff;


    .crew_rank {
      font-size: 1rem;
      opacity: .5;
      mix-blend-mode: normal;
      text-transform: uppercase;
      line-height: 18px;
      margin-block-end: 8px;

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 27.5px;
      }

      @media (min-width: 1024px) {
        /* font-size: 24px; */
        margin-block-end: 15px;
        /* line-height: 27.5px; */
      }

      @media (min-width: 1440px) {
        font-size: 32px;
        line-height: 36.67px;
      }
      
    }

    .crew_name {
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      margin-block-end: 1rem;

      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 45.84px;
      }

      @media (min-width: 1024px) {
        /* font-size: 24px;
        line-height: 27.5px; */
        margin-block-end: 27px;
      }

      @media (min-width: 1440px) {
        font-size: 56px;
        line-height: 64.18px;
      }
    }

    .paragraph {
      font-family: "Barlow", sans-serif;
      font-size: 15px;
      line-height: 25px;
      margin-block-end: 79px;

      @media (min-width: 768px) {
        font-size: 1rem;
        max-inline-size: 458px;
        margin: 0 auto;
        margin-block-end: 40px;
      }

      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 32px;
        max-inline-size: 444px;
        margin-inline: 0;
        margin-block-end: 60px;
      }

      @media (min-width: 1440px) {
        margin-block-end: 120px;
      }


    }
  }

`

const Figure = styled.figure`
  width: 327px;
  height: 223px;
  width: auto;
  margin: 0 auto;
  order: 1;

  @media (min-width: 768px) {
    order: 2;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1024px) {
    flex: 1;
  }

  @media (min-width: 1440px) {
    min-inline-size: 453.44px;
  }

  img {
    inline-size: auto;
    block-size: 222px;

    @media (min-width: 768px) {
      block-size: 572px;
    }
  }
`

const Toggle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  order: 1;
  margin-block-end: 32px;

  @media (min-width: 768px) {
    order: 2;
    margin-block-end: 0;
  }
`

const Btn = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
  mix-blend-mode: normal;
  opacity: 0.17;
  border: none;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  &.active:hover {
    opacity: 1;
  }

  :hover {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`

const Crew = () => {

  const crew = PageContent("crew");

  const [crewMember, setCrewMember] = useState(crew[0])

  const handleState = (n) => {
    setCrewMember(crew[n]);
  }

  const onClick = (e, n) => {
    let target = e.target;
    handleState(n)
    let current = document.querySelector('button.active')
    current.classList.remove('active')
    target.classList.add('active')
  }

  return (
    <Section aria-label='main content section crew page' className='main_content_section section crew'>
      <div className="crew_container">
        <h1 className="page_heading">
          <span className="page_no">
            02
          </span>
          <span className="title">
            meet your crew
          </span>
        </h1>

        <Content>

          <Article>

            <article className="article">
              <h2 className="crew_rank">
                {crewMember.role}
              </h2>
              <h3 className="crew_name">
                {crewMember.name}
              </h3>

              <p className="paragraph">
                {crewMember.bio}
              </p>
            </article>

            <Toggle>
              <Btn onClick={(e) => onClick(e, 0)} className='active'></Btn>
              <Btn onClick={(e) => onClick(e, 1)}></Btn>
              <Btn onClick={(e) => onClick(e, 2)}></Btn>
              <Btn onClick={(e) => onClick(e, 3)}></Btn>
            </Toggle>
          </Article>


          <Figure>
            <img src={crewMember.images.webp} alt=''/>
          </Figure>
        </Content>


      </div>
    </Section>
  )
}

export default Crew