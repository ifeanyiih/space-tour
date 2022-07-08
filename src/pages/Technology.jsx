import React, {useState} from 'react'
import styled from 'styled-components'
import mobile from '/assets/technology/background-technology-mobile.jpg'
import tablet from '/assets/technology/background-technology-tablet.jpg'
import desktop from '/assets/technology/background-technology-desktop.jpg'
import PageContent from '../util/util'


const Section = styled.section`
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-block-size: 100vh;
  padding-block-start: 88px;

  @media (min-width: 768px) {
    padding-block-start: 136px;
    background-image: url(${tablet});
  }

  @media (min-width: 1024px) {
    padding-block-start: 212px;
    background-image: url(${desktop});
  }

`

const Content = styled.div`
  text-align: center;
  .page_heading {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-block-end: 2rem;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 1.5rem;
      letter-spacing: 3.38px;
      margin-block-end: 60px;
      justify-content: start;
      margin-inline-start: 38.5px;
    }

   

    @media (min-width: 1440px) {
      margin-inline-start: 166.5px;
    }

    .page_no {
      font-weight: 700;
      opacity: 0.25;
    }
  }


  @media (min-width: 1024px) {
    text-align: start;
    padding-block-end: 100px;
  }

`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }

  @media (min-width: 1280px) {
    /* gap: 4rem; */
  }

  @media (min-width: 1440px) {
    gap: 130px;
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
    flex: 1;
    justify-content: center;
    padding-inline-start: 2rem;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    padding-inline-start: 80px;
    gap: 30px;
    align-items: center;
    justify-content: center;

  }

  @media (min-width: 1440px) {
    padding-inline-start: 165px;
    gap: 80px;
  }

  .article {
    order: 2;
    @media (min-width: 1024px) {
      order: 1;
    }
    @media (min-width: 1280px) {
      order: 2;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1440px) {
      /* max-inline-size: 470px; */
    }

    
  }
  .term {
    font-size: 14px;
    font-weight: 400;
    color:#D0D6F9;
    line-height: 17px;
    letter-spacing: 2.4px;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    margin-block-end: 1rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      letter-spacing: 2.7px;
      line-height: 19px;
    }

    @media (min-width: 1280px) {
      margin-block-end: 11px;
    }

    .big {
      display: block;
      font-family: "Bellefair", sans-serif;
      color: #fff;
      line-height: 28px;
      font-size: 24px;
      margin-block-start: 8px;

      @media (min-width: 768px) {
        font-size: 40px;
        letter-spacing: 2.7px;
        line-height: 48.84px;
      }

      @media (min-width: 1280px) {
        font-size: 56px;
        line-height: 64.18px;
        margin-block-end: 17px;
      }

      @media (min-width: 1440px) {
        margin-block-end: 11px;
      }
    }
  }

  .detail {
    font-family: "Barlow";
    font-size: calc(1rem - 1px);
    color: #D0D6F9;
    line-height: 25px;
    padding-inline: 1.5rem;
    margin-block-end: 56px;
    max-inline-size: 444px;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 28px;
      padding-inline: 155px;
      margin-block-end: 97px;
    }

    @media (min-width: 1024px) {
      padding-inline: 0;
      margin-block-end: 40px;
    }

    @media (min-width: 1280px) {
      padding-inline: 0;
      margin-block-end: 0;
      font-size: 18px;
      line-height: 32px;
    }

  }
`

const Figure = styled.figure`
  img {
    width: 100%;
  }
  order: 1;
  min-height: 170px;
  margin-block-end: 34px;
  
  @media (min-width: 768px) {
    margin-block-end: 56px;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    margin-block-end: 0;
    justify-content: end;
    order: 2;
    width: 515px;
    /* margin-block-end: 101px; */

  }
`

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  order: 1;
  margin-block-end: 26px;


  @media (min-width: 768px) {
    margin-block-end: 44px;
  }

  @media (min-width: 1024px) {
    order: 2;
    justify-content: start;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    margin-block-end: 0;
  }

`

const Button = styled.button`
  color: #fff;
  font-family: "Bellefair", sans-serif;
  line-height: 18.34px;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  background-color: transparent;
  border: 1px solid #4e4b4b;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: relative;
  cursor: pointer;


  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
    line-height: 36.67px;
  }

  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }


  &.active {
    color: #0B0D17;
    background-color: #fff;
    border: 1px solid #fff;
  }


  :hover {
    border: 1px solid #fff;
  }
`


const Technology = () => {
  const tech = PageContent("technology");
  const [techName, setTechName] = useState("launch vehicle")
  const techObj = tech.find(T => T.name.toLocaleLowerCase() === techName.toLocaleLowerCase())


  const handleClick = (name) => {
    setTechName(name)
  }

  return (
    <Section aria-label='main content section technology page' className='main_content_section section technology'>
      <Content>


        <h1 className="page_heading">
          <span className="page_no">
            03
          </span>
          <span className="title">
            space launch 101
          </span>
        </h1>

        <Container>
          <Article>
            <Buttons>
              <Button
                onClick={(e) => {
                  const prev = document.querySelector('button.active')
                  prev.classList.remove('active')
                  e.target.classList.add('active')
                  handleClick("launch vehicle")
                }}
              className='active' 
              num="1"
              >1</Button>
              <Button
                onClick={(e) => {
                  const prev = document.querySelector('button.active')
                  prev.classList.remove('active')
                  e.target.classList.add('active')
                  handleClick("spaceport")
                }}
              >2</Button>
              <Button
                onClick={(e) => {
                  const prev = document.querySelector('button.active')
                  prev.classList.remove('active')
                  e.target.classList.add('active')
                  handleClick("space capsule")
                }}
              >3</Button>
            </Buttons>
            <article className="article">
              <h2 className="term">
                the terminology...
                <span className='big'>{techObj.name}</span>
              </h2>

              <p className="detail">
                {techObj.description}
              </p>
            </article>
          </Article>
          <Figure>
            <picture>
              <source 
                srcSet={techObj.images.portrait}
                media="(min-width: 1024px)"
              />
              <img 
                src={techObj.images.landscape}
                alt={techObj.name}
              />
            </picture>
          </Figure>
        </Container>


      </Content>
    </Section>
  )
}

export default Technology