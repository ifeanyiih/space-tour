import React from 'react'
import styled from 'styled-components'
import mobile from '../../public/assets/home/background-home-mobile.jpg'
import tablet from '../../public/assets/home/background-home-tablet.jpg'
import desktop from '../../public/assets/home/background-home-desktop.jpg'

const Section = styled.section`
    min-height: 100vh;
    inline-size: 100%;
    display: flex;
    padding-block-start: 112px;



    background-image: url(${mobile});



    background-size: cover;
    background-repeat: no-repeat;

    .section_container {
        text-align: center;
        inline-size: 100%;
       
            
        
        
        @media (min-width: 1440px) {
            text-align: left;
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: 382px;
            margin-block-end: 149px;
            padding-inline: 153px;
            align-items: flex-end;
        }
    }

    .article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-inline: 24px;

        .title {
            text-transform: uppercase;
            color: #D0D6F9;
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 19.2px;
            letter-spacing: 2.7px;

            .txt {
                display: block;
                margin-block-end: 1rem;

            }


            .space {
                display: block;
                font-family: "Bellefair", sans-serif;
                font-size: 80px;
                line-height: 100px;

            }

            

            @media (min-width: 768px) {
                font-size: 20px;
                line-height: 24px;
                margin-block-end: 2rem;
                letter-spacing: 3.38px;

                .space {
                    font-size: 150px;
                    line-height: 150px;
                }

                .txt {
                    margin-block-end: 24px;
                }
            }

            @media (min-width: 1440px) {

                font-size: 28px;
                letter-spacing: 4.72px;
                line-height: 33.6px;
                margin-block-end: 2rem;

                .txt {
                    padding-inline-start: 1rem;
                }

                .space {
                    font-weight: 400;
                    line-height: 171.9px;
                    color: #fff;
                }
            }
        }

        .paragraph {
            color: #D0D6F9;
            font-family: "Barlow", sans-serif;
            font-size: 15px;
            line-height: 25px;
            margin-block-end: 81px;


            @media (min-width: 768px) {
                line-height: 28px;
                margin-block-end: 156px;
                font-size: 1rem;
            }

            @media (min-width: 1440px) {
                font-size: 18px;
                font-weight: 400;
                line-height: 32px;
                margin-block-end: 0;
            }
        }

        @media (min-width: 768px) {
            margin-inline: 0;
        }
        
        @media (min-width: 1440px) {
            max-inline-size: 450px;

        }
    }

    .explore {
        text-transform: uppercase;
        display: grid;
        place-content: center;
        border-radius: 100%;
        position: relative;
        background-color: #fff;
        color: #0B0D17;
        font-family: "Bellefair", sans-serif;
        width: 150px;
        height: 150px;
        margin: 0 auto;
        margin-block-end: 48px;





        @media (min-width: 768px) {
            width: 242px;
            height: 242px;
            font-size: 32px;
            margin-block-end: 90px;

        }

        @media (min-width: 1440px) {
            width: 274px;
            height: 274px;
            letter-spacing: 2px;
            line-height: 36.67px;
            margin-block-end: 0;
            margin-inline-start: auto;
            margin-inline-end: 0;

        }

        :hover::after {
            content: "";
            position: absolute;
            background-color: #fff;
            opacity: 0.1;
            mix-blend-mode: normal;
            border-radius: 100%;
            left: -88px;
            top: -88px;

            @media (min-width: 768px) {
                width: 418px;
                height: 418px;
            }

            @media (min-width: 1440px) {
                width: 450px;
                height: 450px;
            }


        }
    }

    @media (min-width: 768px) {
        padding-block-start: 202px;
        padding-inline: 159px;
        background-image: url(${tablet});

    }

    @media (min-width: 1024px) {
        background-image: url(${desktop});

    }

    @media (min-width: 1440px) {
        padding-block-start: 387px;
        padding-inline: 0;
        /* padding-inline-start: 153px; */
        text-align: justify;

    }
`

const Home = () => {
  return (
    <Section aria-label='main content section' className='main-section home'>
        <div className="section_container">

            <article className="main content section article">
                <h5 className="title">
                    <span className='txt'>so, you want to travel to</span><span className="space">space</span>
                </h5>
                <p className="paragraph">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </article>

            <div aria-hidden className="explore">
                explore
            </div>
        </div>


    </Section>
  )
}

export default Home