class Card extends HTMLElement {
    constructor() { 
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Outside Card */
            #card{
                display: grid;
                border-radius: 25px;
                box-shadow: 0px 0px 16px var(--box-shadow-color);
                width: 144px;
                height: 160px;

                background-color: white;
            }

            /* Inside Card */
            #card > div{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 50% 30% 20%;

                margin: auto;
                height: 70%;
                width: 80%;
            }

            /* Inside Elements */
            #card > div > div:nth-child(1) > div{
                width: 44px;
                height: 44px;
                background-color: gray;
                content:url(https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png);
                border-radius: 50%;
                box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
            }

            #card > div > div:nth-child(2){
                font-size: 18px;
                font-weight: bold;
                color: var(--dark-aqua-color);
            }

            #card > div > div:nth-child(3){
                font-size: 14px;
                font-weight: bold;
                color: var(--inactive-grey-color);
            }
        </style>

        <div id="card">
            <div>
                <div>
                    <div></div>
                </div>

                <div>
                    -150.52
                </div>

                <div>
                    In a 2 days
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

customElements.define('card-component', Card);