class ListElement extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
        this.innerHTML = `
        <style>
            #banner-contianer{
                background-color: white;
            }

            #banner-contianer > div{
                display: grid;
                grid-template-columns: 20% 80%;
                grid-template-rows: repeat(1, 64px);

                padding-left: 5%;
                padding-right: 5%;

                transition: transform 0.1s linear;
            }

            #banner-contianer  > div:active{
                transform: scale(0.95);
            }

            .banner-contianer-child{
                margin: auto 0;
            }

            #icon-container > div{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                box-shadow: 0px 0px 8px rgba(0,0,0,0.25);

                background-color: white;
            }

            #primary-text-container{
                font-size: 16px;
            }

            #secondary-text-container{
                font-size: 16px;
                text-align: right;
            }

            #sub-text-container{
                font-size: 16px;
                color: var(--inactive-grey-color);
            }

            #text-container{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(2, 50%);
            }

            #text-container > div:nth-child(1){
                display: grid;
                grid-template-columns: 70% 30%;
            }

            @media screen and (max-width: 375px) {
                #primary-text-container, #secondary-text-container, #sub-text-container{
                    font-size: 14px;
                }
            }
        </style>

        <div id="banner-contianer" style="padding: ${this.hassubtext};">
            <div>
                <div id="icon-container" class="banner-contianer-child"><div style="content:url(${this.iconurl});"></div></div>

                <div id="text-container" class="banner-contianer-child">
                    <div>
                        <div id="primary-text-container">${this.primarytext}</div>
                        <div id="secondary-text-container">${this.secondarytext}</div>
                    </div>

                    <div>
                        <div id="sub-text-container">${this.subtext}</div>
                    </div> 
                </div> 
            </div>      
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['iconurl','primarytext','secondarytext', 'subtext'];
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

    get subtext() { return this.hasAttribute('subtext') ? this.getAttribute('subtext') : ""; }

    set subtext(text) { this.setAttribute('subtext', text); }

    get hassubtext () { return this.hasAttribute('subtext') && this.getAttribute('subtext') !== "" ? "12px 0" : "0"; }
}

customElements.define('list-element-component', ListElement);