import React from "react";
import styled from "styled-components";
import useStore from "../store";
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";
import LoginErrorModal from "./LoginErrorModal";
// const useStyles = makeStyles((theme) => ({
//   modal: {
//     border: theme(2),
//   },
// }));

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: rgb(255, 182, 193, 0.5);
  z-index: 1000;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }
`;

function ModalContainer() {
  const modal = useStore((state) => state.modal);
  const setModal = useStore((state) => state.setModal);

  if (modal === "") {
    return null;
  }
  return (
    <StyledContainer>
      <div className="modal">
        {modal === "logIn" ? <LogInModal /> : null}
        {modal === "signUp" ? <SignUpModal /> : null}
        {modal === "loginError" ? <LoginErrorModal /> : null}
      </div>
    </StyledContainer>
  );
}

export default ModalContainer;
