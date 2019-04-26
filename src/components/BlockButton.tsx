import * as React from 'react';

interface Props {
  id: string;
  onClick: () => any;
  onClickText: string;
}

export class BlockButton extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  isDisable = () => {
    const element = document.getElementById(this.props.id);
    let isDisable = false;
    if (element !== undefined && element !== null && element.classList !== undefined && element.classList !== null) {
      Array.prototype.forEach.call(element.classList, function (className) {
        if (className === 'btn-disable') {
          isDisable = true;
        }
      }.bind(this));
    }
    return isDisable;
  }

  onClick = () => {
    if (!this.isDisable()) {
      const button = document.getElementById(this.props.id);
      button.classList.add('btn-disable');
      button.innerText = this.props.onClickText;
      this.props.onClick();
      button.classList.remove('btn-disable');
      button.innerText = "" + this.props.children;
    }

  }

  render() {
    return (
      <button id={this.props.id} type="submit" className="btn btn-primary submit-big-button btn-lettuce" onClick={() => this.onClick() } >
        {this.props.children}
      </button>
    )
  }
}
