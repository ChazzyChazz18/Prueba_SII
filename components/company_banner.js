class CompanyBanner extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            #banner-contianer{
                display: grid;
                grid-template-columns: 20% 50% 30%;
                grid-template-rows: repeat(1, 64px);

                padding-left: 5%;
                padding-right: 5%;

                background-color: white;
            }

            #banner-contianer > div{
                margin: auto 0;
            }

            #icon-container > div{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                box-shadow: 0px 0px 8px rgba(0,0,0,0.25);

                background-color: grey;
            }

            #primary-text-container{
                font-size: 16px;
            }

            #secondary-text-container{
                font-size: 16px;
                text-align: right;
            }            
        </style>

        <div id="banner-contianer">
            <div id="icon-container"><div style="content:url(${this.iconURL});"></div></div>
            <div id="primary-text-container">${this.primaryText}</div>
            <div id="secondary-text-container">${this.secondaryText}</div>
        </div>
        `;

    }

    get iconURL() { return this.hasAttribute('iconURL') ? this.getAttribute('iconURL') : ""; }

    set title(text) { this.setAttribute('iconURL', text); }

    get primaryText() { return this.hasAttribute('primaryText') ? this.getAttribute('primaryText') : ""; }

    set primaryText(text) { this.setAttribute('primaryText', text); }

    get secondaryText() { return this.hasAttribute('secondaryText') ? this.getAttribute('secondaryText') : ""; }

    set secondaryText(text) { this.setAttribute('secondaryText', text); }
}

customElements.define('company-banner-component', CompanyBanner);