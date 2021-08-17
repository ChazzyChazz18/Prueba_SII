class Header extends HTMLElement {
    constructor() { super(); }

    render () {
        this.innerHTML = `
        <style>
            #header-container{
                height: 100%;
                overflow: hidden;
                position: relative;
            }
            header{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 4px;

                height: 100%;

                background-image: linear-gradient(var(--light-lime-color), var(--dark-aqua-color));                
            }

            header > div {
                display: grid;

                z-index: 5;

                padding: 0 var(--screens-padding);
            }

            header > div > button {
                height: 40px;
                color: var(--dark-aqua-color);
                border: none;
                font-size: 16px;
                margin: 16px 4px;
                border-radius: 5px;
                font-weight: bold;
                box-shadow: 0px 0px 4px rgba(0,0,0,0.25);

                background-color: white;

                transition: transform 0.1s linear;
            }

            header > div > button:active {
                transform: scale(0.9);
            }

            header > div:nth-child(even) {
                text-align: right;
            }

            header > div:nth-child(1) > div{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin: auto 0;
                box-shadow: 0px 0px 4px rgba(0,0,0,0.25);

                background-color: gray;

                transition: transform 0.1s linear;
            }

            header > div:nth-child(1) > div:active{
                transform: scale(0.9);
            }

            header > div:nth-child(2){
                margin: auto 0;
            }

            header > div:nth-child(3){
                color: white;
                margin: auto 0;
                text-shadow: 0px 0px 4px rgba(0,0,0,0.25);
            }

            header > div:nth-child(3) > div:nth-child(1){
                font-size: 14px;
            }

            header > div:nth-child(3) > div:nth-child(2){
                font-size: 36px;
            }

            header > div:nth-child(4){
                color: white;
                margin: auto 0;
                font-size: 14px;
                text-shadow: 0px 0px 4px rgba(0,0,0,0.5);
            }

            #header-container > div{
                position: absolute;
                border-radius: 50%;

                background-color: rgba(255,255,255,0.25);
            }

            #circle-1{
                top: -160px;
                left: -140px;
                width: 300px;
                height: 300px;
            }

            #circle-2{
                top: -360px;
                right: 20px;
                width: 400px;
                height: 400px;
            }

            #circle-3{
                top: -40px;
                left: 350px;
                width: 400px;
                height: 400px;
            }

            #circle-4{
                top: 100px;
                left: 220px;
                width: 250px;
                height: 250px;
            }

            @media screen and (max-width: 375px) {
                header > div > button {
                    font-size: 14px;
                }
            }
        </style>

        <div id="header-container">
        
            <div id="circle-1"></div>
            <div id="circle-2"></div>
            <div id="circle-3"></div>
            <div id="circle-4"></div>

            <Header class="body-grid-element">

                <div>
                    <div style="content:url(${this.iconurl});"></div>
                </div>

                <div>
                    <button style="display: ${this.buttonvisibility};">${this.buttontext}</button>
                </div>

                <div>
                    <div>${this.bottomleftsecondarytext}</div>
                    <div>${this.bottomleftprimarytext}</div>                
                </div>

                <div>${this.bottomrighttext}</div>

            </Header>
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['iconurl','buttontext','bottomleftprimarytext','bottomleftsecondarytext','bottomrighttext'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get iconurl() { return this.hasAttribute('iconurl') ? this.getAttribute('iconurl') : ""; }

    set iconurl(text) { this.setAttribute('iconurl', text); }

    get buttontext() { return this.hasAttribute('buttontext') ? this.getAttribute('buttontext') : ""; }

    set buttontext(text) { this.setAttribute('buttontext', text); }

    get bottomleftprimarytext() { return this.hasAttribute('bottomleftprimarytext') ? this.getAttribute('bottomleftprimarytext') : ""; }

    set bottomleftprimarytext(text) { this.setAttribute('bottomleftprimarytext', text); }

    get bottomleftsecondarytext() { return this.hasAttribute('bottomleftsecondarytext') ? this.getAttribute('bottomleftsecondarytext') : ""; }

    set bottomleftsecondarytext(text) { this.setAttribute('bottomleftsecondarytext', text); }

    get bottomrighttext() { return this.hasAttribute('bottomrighttext') ? this.getAttribute('bottomrighttext') : ""; }

    set bottomrighttext(text) { this.setAttribute('bottomrighttext', text); }

    get buttonvisibility () { return this.hasAttribute('buttontext') ? "initial" : "none"}
}

customElements.define('header-component', Header);