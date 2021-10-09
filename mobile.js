class MobileNavBar{
    constructor(mobile, navLista, navLinks){
    this.mobile = document.querySelector(mobile);
    this.NavLista = document.querySelector(navLinks);
    this.activeClass = "active";
    }

    addClickEvent() {
        this.mobile.addEventListener("click"), () => console.lob()
        ("Hey")) ;

    }
    init(){
        if (this.mobile) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobile = new mobile {
    "mobile",
    ".nav-lista",
    ".nav-lista li",
}
mobile.init();
