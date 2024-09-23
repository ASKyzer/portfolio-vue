// src/store/useModalStore.js
import { reactive } from 'vue';

const state = reactive({
  closeOnAction: true,
  showModal: false,
  message: '',
  title: '',
  buttonText: '',
  buttonAction: () => {},
  buttonTextSecondary: '',
  buttonActionSecondary: () => {}
});

export function useModalStore() {
  const openModal = (props) => {
    props = { ...state, ...props };

    state.showModal = true;
    state.message = props.message;
    state.title = props.title;
    state.buttonText = props.buttonText;
    state.buttonAction = props.buttonAction;
    state.buttonTextSecondary = props.buttonTextSecondary;
    state.buttonActionSecondary = props.buttonActionSecondary;
    state.closeOnAction = props.closeOnAction;
  };

  const closeModal = () => {
    state.showModal = false;
    state.message = '';
    state.title = '';
    state.buttonText = '';
    state.buttonAction = () => {};
    state.buttonTextSecondary = '';
    state.buttonActionSecondary = () => {};
    state.closeOnAction = true;
  };

  return {
    state,
    openModal,
    closeModal
  };
}
