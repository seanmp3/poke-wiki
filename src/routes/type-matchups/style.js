import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: center;
`

export const MatchupContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #C7C7C7;
  border-radius: .5rem;
  min-height: 79vh;
  width: 90%;
  border: 1px solid #000;
  margin: 10rem 0 2rem;
`

export const TitleContainer = styled.div`
  padding: .5rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    text-decoration: underline;
  }
`

export const SelectionsContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectionContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }
`

export const ResultContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    width: 16rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 1rem;
  flex: 1;
  text-align: center;

  div {
    padding: .5rem;
    border: 1px solid #000;
    border-radius: .5rem;
    display: inline-block;
  }

  h5 {
    font-size: 1.25rem;
    text-decoration: underline;
    margin-bottom: .25rem;
  }

  p {
    font-size: 1rem;
  }
`
