import styled from "styled-components"
import bg from "../../assets/Raichu.jpg"

export const HomeConatiner = styled.main`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  div {
    margin-top: 13rem;

    h1 {
      font-size: 2.3rem;
      color: #CCC;
    }

    p {
      font-size: .9rem;
      color: #CCC;
    }
  }
`
