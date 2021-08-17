class SectionCard extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
        this.innerHTML = `
        <style>
            /* Card container */
            #section-card-container{
                padding: 16px var(--screens-padding) 16px var(--screens-padding);
            }

            /* Outside Card */
            #section-card{
                display: grid;
                border-radius: 15px;

                box-shadow: 0px 0px 16px var(--box-shadow-color);
                width: 100%;
                height: auto;

                background-color: white;
            }

            /* Inside Card */
            #section-card > div{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(${this.elementListSize}, 64px);
                gap: 1px;

                background-color: var(--divider-color);

                margin: 2.5% auto;
                height: auto;
                width: 100%;
            }
        </style>
            <div id="section-card-container">
                <div id="section-card">
                    <div>
                        ${this.elementlist}
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['elementlist', 'elementListSize'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get elementlist() { 
        if(this.hasAttribute('elementlist')){
            return sectionCardItemListParser(this.getAttribute('elementlist'));
        }else{
            return "";
        } 
    }

    set elementlist(arrayTxt) { this.setAttribute('elementlist', arrayTxt); }

    get elementlistSize () {
        return this.getAttribute('elementlistSize');
    }

    set elementlistSize (size) {
        this.setAttribute('elementlistSize', size);
    }

}

customElements.define('section-card-component', SectionCard);