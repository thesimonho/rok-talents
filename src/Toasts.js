import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import './styles/Toasts.css';

/**
 * Generic toast component
 *
 * @class ToastMessage
 * @extends {Component}
 */
export class ToastMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.header !== nextProps.header ||
      this.props.body !== nextProps.body ||
      this.state.open !== nextState.open
    ) {
      return true;
    } else {
      return false;
    }
  }

  show = () => {
    this.setState({ open: true });
  };

  hide = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Toast autohide delay={3000} show={this.state.open} onClose={this.hide}>
        <Toast.Header>
          <strong className="mr-auto">{this.props.header}</strong>
        </Toast.Header>
        <Toast.Body>{this.props.body}</Toast.Body>
      </Toast>
    );
  }
}

/**
 * Toast showing warning message about missing talents that need to be
 * completed prior to the select talent.
 *
 * @class PrereqToast
 * @extends {Component}
 */
export class PrereqToast extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.msg !== nextProps.msg ||
      this.state.open !== nextState.open
    ) {
      return true;
    } else {
      return false;
    }
  }

  show = () => {
    this.setState({ open: true });
  };

  hide = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Toast autohide delay={4000} show={this.state.open} onClose={this.hide}>
        <Toast.Header>
          <strong className="mr-auto">Incomplete Talents</strong>
        </Toast.Header>
        <Toast.Body>
          Upgrade talents to the maximum level first:
          {this.props.msg}
        </Toast.Body>
      </Toast>
    );
  }
}

export default { ToastMessage, PrereqToast };
