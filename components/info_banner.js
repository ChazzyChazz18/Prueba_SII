class Banner extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
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
        </style>

        <div id="info-banner">
            <div>${this.title}</div>
            <div>${this.subtext}</div>
            <div>></div>
        </div>
        `;

    }

    get title() { return this.hasAttribute('title') ? this.getAttribute('title') : ""; }

    set title(text) { this.setAttribute('title', text); }

    get subtext() { return this.hasAttribute('subtext') ? this.getAttribute('subtext') : ""; }

    set subtext(text) { this.setAttribute('subtext', text); }
}

customElements.define('info-banner-component', Banner);