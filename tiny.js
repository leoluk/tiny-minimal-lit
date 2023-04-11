import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

// Issue is a simple LitElement that renders a single bug.
class Issue extends LitElement {
    static properties = {
        title: {type: String},
        body: {type: String},
        status: {type: String},
    }

    constructor() {
        super();
        this.title = 'Web is hard';
        this.body = 'This is rendered client-side.';
        this.status = 'OPEN';
    }

    render() {
        return html`
            <h3>Title: ${this.title}</h3>
            <p>${this.body}</p>
            <p class="status">Status: <span
                    class="status-text"
                    data-status="${this.status}">${this.status}</span></p>
        `;
    }

    static styles = css`
      :host {
        display: block;
      }
      .status {
        color: #666;
      }
      .status-text[data-status="CLOSED"] {
        color: green;
      }

      .status-text[data-status="OPEN"] {
        color: red;
      }
    `;
}

customElements.define('tiny-issue', Issue);
