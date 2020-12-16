import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/aboutImg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='/About'/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="game pieces" />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>This is a fictitious ecommerce website, so no 
            actual purchases of games can be made.
            The sole purpose of the creation of this
            site was to keep practicing on my react
            skills.
          </p>
        </article>
      </Wrapper>  
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage