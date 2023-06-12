import { LitElement, html, css } from "lit";

export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: #eae6e6;
      color: #6e6868;
      font-size: 16px;
      cursor: pointer;
      outline: none;
    }

    .btn:hover {
      background-color: #464848;
      color: #fff;
    }
  `;

  render() {
    return html`
      <button class="btn">
        <slot name="plus-icon"></slot>
        <slot name="button-text"></slot>
      </button>
    `;
  }
}

customElements.define("my-button", MyButton);
