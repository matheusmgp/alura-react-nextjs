import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackGround from '../src/components/QuizBackGround'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin:auto;
    padding:15px
  }
` 


export default function Home() {
  return (
   <QuizBackGround backgroundImage={db.bg}>
     <QuizContainer>
      <Widget>
        <Widget.Header>
            <h1>The legend of zelda</h1>
            </Widget.Header>
          <Widget.Content>      
              <p>paragrafo</p>         
          </Widget.Content>   
      </Widget>
      <Widget>
        <Widget.Header>
            <h1>The legend of zelda</h1>
            </Widget.Header>
          <Widget.Content>      
              <p>paragrafo</p>         
          </Widget.Content>   
      </Widget>
      <Footer/>
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/matheusmgp"/>
   </QuizBackGround>
  )
} 
