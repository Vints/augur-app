import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ModalEditConnection from "../modal-edit-connection/modal-edit-connection";
// import { Close } from "modules/common/components/icons";

// import debounce from "utils/debounce";
// import getValue from "utils/get-value";

import * as TYPES from "../../constants/modal-types";

import Styles from "./modal-view.styles.less";

export default class ModalView extends Component {
  static propTypes = {
    modal: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      modalWidth: 0,
      modalHeight: 0
    };
  }

  render() {
    const { closeModal, modal } = this.props;

    return (
      <section
        id="modal"
        ref={modal => {
          this.modal = modal;
        }}
        className={classNames(Styles.ModalView, {[Styles.ModalView__hide]: (Object.keys(modal).length === 0)})}
      >
        <div onClick={closeModal} className={Styles.ModalView__close} />
        <div className={Styles.ModalView__content}>
          {modal.type === TYPES.MODAL_EDIT_CONNECTION && (
            <ModalEditConnection closeModal={closeModal} {...modal} />
          )}
        </div>
      </section>
    );
  }
}
