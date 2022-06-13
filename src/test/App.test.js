import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('tests that there are six cards with singers', () => {
    const btnsCard = screen.getAllByRole('button')
    console.log('btnsCard')
    expect(btnsCard.length).toBe(6)
  })

  it("tests that the first card's like status is set to No and that once the first button is clicked it turns to Yes", () => {
    const btnsCard = screen.getAllByRole('button')
    const btnOne = btnsCard[0]

    const cardsLikes = screen.getAllByRole('comment')
    const cardLikeOne = cardsLikes[0]
    expect(cardLikeOne.textContent).toBe('No')

    userEvent.click(btnOne)
    expect(cardLikeOne.textContent).toBe('Yes')
  })
})
