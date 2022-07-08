import React, { useState } from 'react'
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
    padding-block-start: 88px;

    @media (min-width: 768px) {
        background-image: url(${tablet});
        padding-block-start: 136px;

    }

    @media (min-width: 1024px) {
        background-image: url(${desktop});
    }

    @media (min-width: 1440px) {
        padding-block-start: 212px;
    }

`

const Container = styled.div`
    justify-content: center;
    .page_heading {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 1rem;
        color: #fff;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        display: flex;
        gap: 18px;
        justify-content: center;
        margin-block-end: 32px;

        .page_no {
            font-weight: 700;
            mix-blend-mode: normal;
            opacity: 0.25;
        }

        @media (min-width: 768px) {
            font-size: 20px;
            letter-spacing: 3.38px;
            line-height: 24px;
            justify-content: start;
            margin-inline-start: 38.5px;
            margin-block-end: 60px;
        }

        @media (min-width: 1440px) {
            margin-inline-start: 166.5px;
            margin-block-end: 64px;
        } 
    }
`

const Content = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    .place_image_container {
        width: 170px;
        height: 170px;
        margin: 0 auto;
        margin-block-end: 26px;

        @media (min-width: 768px) {
            width: 300px;
            height: 300px;
            margin-block-end: 53px;
        }

        @media (min-width: 1440px) {
            width: 445px;
            height: 445px;
        }
    }

    @media (min-width: 1024px) {

    }

    @media (min-width: 1440px) {
        margin-inline: 230px 163px;
        grid-template-columns: 445px 1fr;
        gap: 157px;
    }
`

const Article = styled.article`
    .article_content {
        text-align: center;
        font-weight: 400;

        @media (min-width: 1440px) {
            text-align: start;
        }

        .content_title {
            font-size: 56px;
            line-height: 64.18px;
            font-family: "Bellefair", sans-serif;
            text-transform: uppercase;
            color: #fff;

            @media (min-width: 768px) {
                font-size: 80px;
                line-height: 91.68px;
                margin-block-end: 8px;
            }

            @media (min-width: 1440px) {
                font-size: 100px;
                line-height: 114.6px;
            }
        }

        .article_content_paragraph {
            color: #D0D6F9;
            font-family: "Barlow", sans-serif;
            font-size: 15px;
            line-height: 25px;
            padding-block-end: 32px;
            border-block-end: 1px solid #383B4B;
            margin-inline: 24px;
            margin-block-end: 32px;

            @media (min-width: 768px) {
                font-size: 1rem;
                line-height: 28px;
                padding-block-end: 49px;
                max-inline-size: 573px;
            }

            @media (min-width: 1440px) {
                margin-inline: 0;
                max-inline-size: 445px;
                font-size: 18px;
                padding-block-end: 54px;
            }
        }
    }

    .content_buttons_list {
        display: flex;
        list-style: none;
        gap: 27px;
        justify-content: center;
        margin-block-end: 20px;

        @media (min-width: 768px) {
            margin-block-end: 32px;
            gap: 36px;
        }

        @media (min-width: 1440px) {
            justify-content: start;
        }
    }
`

const IMG = styled.img`
    inline-size: 100%;
`

const Button = styled.button`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
    font-family: "Barlow Condensed", sans-serif;
    color: #fff;
    background: transparent;
    border: transparent;
    position: relative;
    padding-block-end: 8px;
    cursor: pointer;



    :hover::after, &.${() => {
        if (localStorage.dname) {
            return localStorage.dname
        }
        return 'active'
    }}::after {
        content: "";
        position: absolute;
        inline-size: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
    }

    :hover::after {
        background-color: #fff;
        mix-blend-mode: normal;
        opacity: 0.5;
    }

    &.${() => {
        if (localStorage.dname) {
            return localStorage.dname
        }
        return 'active'
    }}::after {
        background-color: #fff;
    }

    @media (min-width: 768px) {
        font-size: 1rem;
        letter-spacing: 2.7px;
        line-height: 19.2px;
        padding-block-end: 12px;

    }
`

const Distance = styled.div`
    font-weight: 400;
    text-transform: uppercase;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
    }

    @media (min-width: 1440px) {
        justify-content: start;
        gap: 79px;
    }

    .distance_heading {
        font-family: "Barlow Condensed", sans-serif;
        letter-spacing: 2.36px;
        line-height: 16.8px;
        font-size: 14px;
        margin-block-end: 12px;
        color: #D0D6F9;
    }

    .distance {
        font-size: 28px;
        line-height: 32.09px;
        font-family: "Bellefair", sans-serif;
        color: #fff;
    }

    .avg {
        margin-block-end: 32px;
    }
    .est {
        margin-block-end: 58px;
    }


`


const Destination = () => {
    const destinations = PageContent("destinations");

    const [name, setName] = useState(localStorage.dname || 'Moon')
    
    const placeObj = destinations.find(D => D.name === name)

    const handleClick = (name) => {
        setName(name)
        localStorage.setItem('dname', name);
    }


  return (
    <Section aria-label='main content section destination page' className='main_content_section section destination'>
        <Container>
            <h1 className="page_heading">
                <span className="page_no">
                    01
                </span>
                <span className="title">
                    pick your destination
                </span>
            </h1>


            <Content>
                <figure className="place_image_container">
                    <IMG src={placeObj.images.webp} alt="" />
                </figure>
                <Article className="place_content">
                    <div className="content_buttons">
                        <ul className="content_buttons_list">
                            <li className="content_buttons_item">
                                <Button 
                                    onClick = {
                                        (e) => {
                                            const prev = document.querySelector('button.active')
                                            prev.classList.remove('active')
                                            e.target.classList.add('active')
                                            handleClick("Moon") 
                                        }
                                    }
                                    className='content_button Moon active'
                                >
                                    moon
                                </Button>
                            </li>

                            <li className="content_buttons_item">
                                <Button 
                                    onClick={(e) => {
                                        const prev = document.querySelector('button.active')
                                        prev.classList.remove('active')
                                        e.target.classList.add('active')
                                        handleClick("Mars") 
                                    }}
                                    className='content_button Mars'
                                >
                                    mars
                                </Button>
                            </li>

                            <li className="content_buttons_item">
                                <Button 
                                    onClick={(e) => {
                                        const prev = document.querySelector('button.active')
                                        prev.classList.remove('active')
                                        e.target.classList.add('active')
                                        handleClick("Europa") 
                                    }}
                                    className='content_button Europa'
                                >
                                    europa
                                </Button>
                            </li>

                            <li className="content_buttons_item">
                                <Button 
                                    onClick={  (e) => {
                                        const prev = document.querySelector('button.active')
                                        prev.classList.remove('active')
                                        e.target.classList.add('active')
                                        handleClick("Titan") 
                                    }}
                                    className='content_button Titan'
                                >
                                    titan
                                </Button>
                            </li>
                        </ul>
                    </div>


                    <div className="article_content">
                        <h2 className="content_title">
                            {placeObj.name}
                        </h2>

                        <p className="article_content_paragraph">
                            {placeObj.description}
                        </p>

                        <Distance className="distance">
                            <div className="avg">
                                <h3 className="distance_heading">
                                    avg. distance
                                </h3>
                                <p className="distance">
                                    {placeObj.distance}
                                </p>
                            </div>
                            <div className="est">
                                <h3 className="distance_heading">
                                    est. travel time
                                </h3>
                                <p className="distance">
                                    {placeObj.travel}
                                </p>
                            </div>
                        </Distance>
                    </div>
                </Article>
            </Content>
        </Container>
    </Section>
  )
}



export default Destination