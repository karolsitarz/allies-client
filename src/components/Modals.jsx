import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from 'stores/modal';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
`;

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.base};
  text-align: center;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  border-radius: 1em;
  box-shadow: ${({ theme }) => `0 1em 2em ${theme.alpha[3]}`};
  color: ${({ theme }) => theme.main[1]};
  overflow: hidden;
  animation: ${modalFadeIn} 0.25s ease backwards;

  > span {
    padding: 1em 2em;
  }
  > div {
    padding: 0.5em;
    font-weight: bold;
    background: ${({ theme }) => theme.alpha[1]};
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: ${({ theme }) => theme.alpha[4]};
    animation: ${fadeIn} 0.25s ease backwards;
  }
`;

const ModalComponent = ({ message, confirm, onDismiss }) => {
  return (
    <ModalContainer>
      <StyledModal>
        <span>{message}</span>
        <div onClick={onDismiss}>{confirm}</div>
      </StyledModal>
    </ModalContainer>
  );
};

ModalComponent.propTypes = {
  message: PropTypes.string,
  confirm: PropTypes.string,
  onDismiss: PropTypes.func,
};

const Modals = () => {
  const modals = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleModalDismiss = (id) => dispatch(closeModal(id));

  return modals.map((modal) => (
    <ModalComponent
      {...modal}
      key={`modal-${modal.id}`}
      onDismiss={() => handleModalDismiss(modal.id)}
    />
  ));
};

export default Modals;
