class SectionCard extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Card container */
            #section-card-container{
                padding: 16px var(--screens-padding) 16px var(--screens-padding);
            }

            /* Outside Card */
            #section-card{
                display: grid;
                border-radius: 25px;

                box-shadow: 0px 0px 16px var(--box-shadow-color);
                width: 100%;
                height: auto;

                background-color: white;
            }

            /* Inside Card */
            #section-card > div{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(5, 64px);
                gap: 1px;

                margin: 5% auto;
                height: auto;
                width: 100%;

                background-color: #f0f0f0;
            }        
        </style>
            <div id="section-card-container">
                <div id="section-card">
                    <div>
                        <company-banner-component iconURL="https://www.seoclerk.com/pics/314539-1Cw53i1420912621.jpg" primaryText="Fenix Enterteiment" secondaryText="-130.92"></company-banner-component>
                        <company-banner-component iconURL="http://graphicdesignjunction.com/wp-content/uploads/2012/07/business-logo-design-21.jpg" primaryText="Fox Cafe" secondaryText="-328.00"></company-banner-component>
                        <company-banner-component iconURL="https://us.123rf.com/450wm/glopphy/glopphy1702/glopphy170200127/72841332-saludable-logo-de-la-vida-salud-spa-vector-s%C3%ADmbolo.jpg?ver=6" primaryText="Green Health" secondaryText="-1785.32"></company-banner-component>
                        <company-banner-component iconURL="https://www.seoclerk.com/pics/314539-1Cw53i1420912621.jpg" primaryText="Fenix Enterteiment" secondaryText="-130.92"></company-banner-component>
                        <company-banner-component iconURL="http://graphicdesignjunction.com/wp-content/uploads/2012/07/business-logo-design-21.jpg" primaryText="Fox Cafe" secondaryText="-328.00"></company-banner-component>
                    </div>
                </div>
            </div>
        `;

    }

    /*get title() { return this.hasAttribute('title') ? this.getAttribute('title') : ""; }

    set title(text) { this.setAttribute('title', text); }

    get subtext() { return this.hasAttribute('subtext') ? this.getAttribute('subtext') : ""; }

    set subtext(text) { this.setAttribute('subtext', text); }*/
}

customElements.define('section-card-component', SectionCard);