import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = "";
    this.source = "";
  }

  static get properties() {
    return {
        source: {type: String},
        title: {type: String},
    };
  }

  

  static get styles() {
    return [css`      
    
    .image{
        display: inline-block;
      }

      .image div {
        max-width: 200px;
        max-width: 200px;
        font-weight: bold;
      }

      .image img{
        display: block;
        width: 200px;
        height: 200px;
      }`];
  }

  render() {
    return html`
    <div class = "image">
          <img src = "${item.links[0].href}"/>
          <div>${item.data[0].title}</div>
    </div>
    `;
  }
  static get tag() {

    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);