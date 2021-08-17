class MonthDay extends HTMLElement {
    constructor() { 
        super();
    }

    render () {
        this.innerHTML = `
        <style>
            #container{
                display: grid;
            
                height: 100%;
                font-size: 14px;
                text-align: center;

                transition: transform 0.1s ease-out;
            }

            #container:active {
                transform: scale(0.9);
            }
            
            #container > div:nth-child(1){
                font-weight: bold;
                color: black;
            }
            
            #container > div:nth-child(2){
                font-weight: bold;
                color: black;
                text-transform:uppercase;
            }
            
            #container > div:nth-child(3) > div{
                width: 6px;
                height: 6px;
                margin: 0 auto;
                border-radius: 50%;
            
                background-color: var(--dark-aqua-color);
            }

            @media screen and (max-width: 375px) {
                #container{
                    font-size: 12px;
                }
            }
        </style>

        <div id="container">
            <div style="color: ${this.activetextcolor}">${this.day}</div>
            <div style="color: ${this.activetextcolor}">${this.month}</div>
            <div><div style="visibility: ${this.ismarked};"></div></div>
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['day','month','ismarked','isactive'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get day() { return this.hasAttribute('day') ? this.getAttribute('day') : ""; }

    set day(text) { this.setAttribute('day', text); }

    get month() { return this.hasAttribute('month') ? this.getAttribute('month') : ""; }

    set month(text) { this.setAttribute('month', text); }

    get ismarked() { return this.hasAttribute('ismarked') ? "visible" : "hidden"; }

    set ismarked(value) { this.setAttribute('ismarked', value); }

    get isactive() { return this.hasAttribute('isactive'); }

    set isactive(value) { this.setAttribute('isactive', value); }

    get activetextcolor() { return this.hasAttribute('isactive') ? "black" : "var(--inactive-grey-color)"; }

}

customElements.define('month-day-component', MonthDay);