import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ScoreView from '../ScoreView'

import GameResultsView from '../GameResultsView'

import {
  MainContainer,
  PopUpImage,
  PopUpView,
  RulesView,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShow: true,
    text: 'YOU WON',
    newArray: [choicesList[0], choicesList[1]],
    score: 0,
  }

  getResults = (list1, list2) => {
    if (list1.id === 'ROCK') {
      switch (list2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (list1.id === 'PAPER') {
      switch (list2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (list2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(eachItem => eachItem.id === id)
    const result = this.getResults(choice1[0], choice2)
    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      newArray: [choice1[0], choice2],
      text: result,
      score: newScore,
    })
  }

  render() {
    const {isShow, text, newArray, score} = this.state

    return (
      <MainContainer>
        <ScoreView score={score} />
        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResults={this.checkResults}
          restartGame={this.restartGame}
        />
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  aria-label="save"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopUpImage>
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </MainContainer>
    )
  }
}
export default Home
