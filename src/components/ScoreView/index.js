import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResults,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK <br /> PAPER <br /> SCISSORS
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResults>{score}</ScoreResults>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default ScoreView
