class Accordion {
    constructor(AccordionList){
        this.AccordionList = document.querySelectorAll
        (AccordionList);
        this.activeItemClass = "open";
    }

    toggleAccordion(item){
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent(){     
         this.AccordionList.forEach((trigger) => {
            trigger.addEventListener('click', () => this.toggleAccordion
            (trigger) )
         });

    }
    init(){
        if(this.AccordionList.length){
           this.addAccordionEvent(); 
        }
        return this;
        
    }

}

const accordion = new Accordion(".acordeon");
accordion.init()
