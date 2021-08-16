class Slider extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            #slider-container{
                overflow: hidden;
                position: absolute;
                width: calc(100vw);
                height: 192px;
            }

            #slider-container > div{
                padding: 0 var(--screens-padding);
                position: absolute;
                top: 0;
                left: 0;
                height: auto;
                width: 100%;
            
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                pointer-events: none;
                gap: 16px;
                top: calc(50% - 82px);
            }
        </style>

        <div id="slider-container">
            <div id="slider">
                <card-component></card-component>
                <card-component></card-component>
                <card-component></card-component>
                <card-component></card-component>
                <card-component></card-component>
            </div>                    
        </div>
        `;
    }

    /*get title() { return this.hasAttribute('title') ? this.getAttribute('title') : ""; }

    set title(text) { this.setAttribute('title', text); }

    get subtext() { return this.hasAttribute('subtext') ? this.getAttribute('subtext') : ""; }

    set subtext(text) { this.setAttribute('subtext', text); }*/
}

customElements.define('slider-component', Slider);