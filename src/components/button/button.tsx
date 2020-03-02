import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'and-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  handleClick(e: UIEvent) {
    alert('Received the button click!');
    console.log('event', e);

  }

  render() {
    return (
      <Host>
        <button onClick={(e: UIEvent) => this.handleClick(e)} class="and-button">epaaa</button>
        <button onClick={(e: UIEvent) => this.handleClick(e)} class="and-button and-button--alter">epaaa</button>
      </Host>
    );
  }

}
