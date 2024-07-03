import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
} from './styledComponents'

const GameResultsView = props => {
  const {choicesList, isShow, text, newArray, checkResults, restartGame} = props

  const showGame = () => {
    ;<GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResults(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResults(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResults(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
        </>
      )}

      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <button
              type="button"
              className="result-button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  }

  return showGame()
}

export default GameResultsView
