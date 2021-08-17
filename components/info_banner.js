class Banner extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
        this.innerHTML = `
        <style>
            #info-banner{
                padding: 0 var(--screens-padding);

                display: grid;
                grid-template-columns: 60% 35% 5%;
                grid-template-rows: 1fr;

                height: 64px;
                line-height: 64px;
            }

            #info-banner > div:nth-child(1) {
                font-size: 20px;
                font-weight: bold;
            }
            
            #info-banner > div:nth-child(2) {
                font-size: 14px;
                text-align: right;
            }
            
            #info-banner > div:nth-child(3) {
                color: var(--inactive-grey-color);
                font-size: 20px;
                text-align: right;
            }

            @media screen and (max-width: 375px) {
                #info-banner > div:nth-child(1) {
                    font-size: 18px;
                }

                #info-banner > div:nth-child(2) {
                    font-size: 12px;
                }
            }
        </style>

        <div id="info-banner" class="ripple-effect" style="background-color: ${this.bgcolor}">
            <div>${this.title}</div>
            <div>${this.subtext}</div>
            <div>></div>
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title','subtext','bgcolor'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get title() { return this.hasAttribute('title') ? this.getAttribute('title') : ""; }

    set title(text) { this.setAttribute('title', text); }

    get subtext() { return this.hasAttribute('subtext') ? this.getAttribute('subtext') : ""; }

    set subtext(text) { this.setAttribute('subtext', text); }

    get bgcolor() { return this.hasAttribute('bgcolor') ? this.getAttribute('bgcolor') : "transparent"; }

    set bgcolor(color) { this.setAttribute('bgcolor', color); }
}

customElements.define('info-banner-component', Banner);