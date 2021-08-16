class BottomNavbarBtn extends HTMLElement {
    constructor() { 
        super();
    }    

    render(){
        this.innerHTML = `
        <style>            
            .nav-bar-btn{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                text-align: center;
            }
            
            .nav-bar-btn-icon{
                font-size: 24px;
                width: 32px;
                height: 32px;
                margin: 8px auto -4px auto;

                /* Fallback: Set a background color. */
                background-color: var(--inactive-grey-color);
                
                /* Create the gradient. */
                background-image: linear-gradient(180deg, var(--light-lime-color), var(--dark-aqua-color));
                
                /* Set the background size and repeat properties. */
                background-size: 100%;
                background-repeat: repeat;

                /* Use the text as a mask for the background. */
                /* This will show the gradient as a text color rather than element bg. */
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-background-clip: text;
                -moz-text-fill-color: transparent;
            }

            .nav-bar-btn-text{
                font-size: 12px;
                font-weight: bold;
            }
        </style>

        <div class="nav-bar-btn">
            <div class="nav-bar-btn-icon ${this.icontext}" style="background-color: ${this.activeiconcolor}; background-image: ${this.activeicongradientcolor}; color: ${this.activeiconcolor};">

            </div>
            <div class="nav-bar-btn-text" style="color: ${this.activetextcolor};">
                ${this.title}
            </div>
        </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title','icontext','isactive'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    get title() { return this.hasAttribute('title') ? this.getAttribute('title') : ""; }

    set title(text) { this.setAttribute('title', text); }

    get icontext() { return this.hasAttribute('icontext') ? this.getAttribute('icontext') : ""; }

    set icontext(text) { this.setAttribute('icontext', text); }

    get isactive() { return this.hasAttribute('isactive'); }

    set isactive(value) { this.setAttribute('isactive', value); }

    get activetextcolor() { return this.hasAttribute('isactive') ? "black" : "var(--inactive-grey-color)"; }

    get activeiconcolor() { return this.hasAttribute('isactive') ? "var(--dark-aqua-color)" : "var(--inactive-grey-color)"; }

    get activeicongradientcolor() { return this.hasAttribute('isactive') ? "linear-gradient(180deg, var(--light-lime-color), var(--dark-aqua-color));" : "linear-gradient(180deg, var(--inactive-grey-color), var(--inactive-grey-color))" }
}

customElements.define('bottom-navbar-btn-component', BottomNavbarBtn);