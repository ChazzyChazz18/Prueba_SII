class Card extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
        this.innerHTML = `
        <style>
            /* Outside Card */
            #card{
                display: grid;
                border-radius: 25px;
                box-shadow: 0px 0px 16px var(--box-shadow-color);
                width: 144px;
                height: 160px;

                background-color: white;

                transition: transform 0.1s linear;
            }

            #card:active{
                transform: scale(0.9);
            }         

            /* Inside Card */
            #card > div{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 50% 30% 20%;

                margin: auto;
                height: 70%;
                width: 80%;
            }

            /* Inside Elements */
            #card > div > div:nth-child(1) > div{
                width: 44px;
                height: 44px;
                content:url();
                border-radius: 50%;
                box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
            }

            #card > div > div:nth-child(2){
                font-size: 18px;
                font-weight: bold;
                color: var(--dark-aqua-color);
            }

            #card > div > div:nth-child(3){
                font-size: 14px;
                font-weight: bold;
                color: var(--inactive-grey-color);
            }
        </style>

        <div id="card" class="card">
            <div>
                <div>
                    <div style="content:url(${this.iconurl});"></div>
                </div>

                <div>
                    ${this.primarytext}
                </div>

                <div>
                    ${this.secondarytext}
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['iconurl','primarytext','secondarytext'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get iconurl() { return this.hasAttribute('iconurl') ? this.getAttribute('iconurl') : ""; }

    set iconurl(text) { this.setAttribute('iconurl', text); }

    get primarytext() { return this.hasAttribute('primarytext') ? this.getAttribute('primarytext') : ""; }

    set primarytext(text) { this.setAttribute('primarytext', text); }

    get secondarytext() { return this.hasAttribute('secondarytext') ? this.getAttribute('secondarytext') : ""; }

    set secondarytext(text) { this.setAttribute('secondarytext', text); }
}

customElements.define('card-component', Card);