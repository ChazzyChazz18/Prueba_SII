class BottomNavbar extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            #bottom-nav-bar{
                display: grid;
                grid-template-columns: 80% 20%;
                grid-template-rows: auto;
                gap: 4px;
            
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 64px;
                box-shadow: 0px 0px 16px rgba(0,0,0,0.15);

                z-index: 10;
            
                background-color: rgb(255, 255, 255);
            }

            #bottom-nav-bar > div:nth-child(1){
                display: grid;
                grid-template-columns: repeat(4, 1fr);
            }

            #bottom-nav-bar > div:nth-child(2){
                display: grid;
            }

            .nav-bar-btn{
                display: grid;
            }
            
            #plus-btn{
                width: 48px;
                height: 48px;
                border-radius: 50%;
                margin: auto;
            
                font-family: sans-serif;
                text-align: center;
                vertical-align: middle;
                line-height: 48px;
                font-size: 36px;
                color: white;
                box-shadow: 0px 0px 12px rgba(0,0,0,0.25);
            
                background-image: linear-gradient(var(--light-lime-color), var(--dark-aqua-color));
            }     
        </style>

        <div id="bottom-nav-bar">

            <div>
                <bottom-navbar-btn-component class="custom-nav" isActive title="Spend" iconText="fa fa-credit-card"></bottom-navbar-btn-component>
                <bottom-navbar-btn-component class="custom-nav" title="Save" iconText="fa fa-heart-o"></bottom-navbar-btn-component>
                <bottom-navbar-btn-component class="custom-nav" title="Schedule" iconText="fa fa-calendar-o"></bottom-navbar-btn-component>
                <bottom-navbar-btn-component class="custom-nav" title="Menu" iconText="fa fa-reorder"></bottom-navbar-btn-component>
            </div>

            <div>
                <div class="nav-bar-btn">
                    <div id="plus-btn">
                        +
                    </div>
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

customElements.define('bottom-navbar-component', BottomNavbar);