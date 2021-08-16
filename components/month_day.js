class MonthDay extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            #container{
                display: grid;
            
                height: 100%;
                font-size: 14px;
                text-align: center;
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
        </style>

        <div id="container">
            <div style="color: ${this.isActive}">${this.day}</div>
            <div style="color: ${this.isActive}">${this.month}</div>
            <div><div style="visibility: ${this.isMarked};"></div></div>
        </div>
        `;
    }

    get day() { return this.hasAttribute('day') ? this.getAttribute('day') : ""; }

    set day(text) { this.setAttribute('day', text); }

    get month() { return this.hasAttribute('month') ? this.getAttribute('month') : ""; }

    set month(text) { this.setAttribute('month', text); }

    get isMarked() { return this.hasAttribute('isMarked') ? "visible" : "hidden"; }

    set isMarked(value) { this.setAttribute('isMarked', value); }

    get isActive() { return this.hasAttribute('isActive') ? "black" : "var(--inactive-grey-color)"; }

    set isActive(value) { this.setAttribute('isActive', value); }
}

customElements.define('month-day-component', MonthDay);