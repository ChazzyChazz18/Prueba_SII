class Slider extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
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
                grid-template-columns: repeat(/*${this.cardListSize}*/5, 1fr);
                gap: 16px;
                top: calc(50% - 82px);
            }
        </style>

        <div id="slider-container">
            <div id="slider">
                <card-component iconurl="https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png" primarytext="-150.52" secondarytext="In a 2 days"></card-component>
                <card-component iconurl="https://www.iconninja.com/files/384/513/124/picasa-icon.png" primarytext="-150.52" secondarytext="In a 2 days"></card-component>
                <card-component iconurl="https://fiskl.com/wp-content/uploads/2019/11/rev_business.png" primarytext="-150.52" secondarytext="In a 2 days"></card-component>
                <card-component iconurl="https://www.clipartmax.com/png/middle/248-2482589_clipart-ir-symbol-logo-rh-openclipart-org-dormir-clip-infrared-symbol.png" primarytext="-150.52" secondarytext="In a 2 days"></card-component>
                <card-component iconurl="https://mir-s3-cdn-cf.behance.net/user/276/0a8fd9309890197.5ffbf9d9701e9.jpg" primarytext="-150.52" secondarytext="In a 2 days"></card-component>
                <!--${this.cardlist}-->
            </div>                    
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        //return ['cardlist', 'cardListSize'];
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get cardlist() { 
        if(this.hasAttribute('cardlist')){
            return cardSliderItemListParser(this.getAttribute('cardlist'));
        }else{
            return "";
        }
    }

    set cardlist(arrayTxt) { this.setAttribute('cardlist', arrayTxt); }

    get cardlistSize () {
        return this.getAttribute('cardlistsize');
    }

    set cardlistSize (size) {
        this.setAttribute('cardlistsize', size);
    }

}

customElements.define('slider-component', Slider);