const faqList = document.querySelectorAll(`.faq__question`);

function closeItem() {
    const isItemOpen = this.parentElement.hasAttribute(`open`);

    //If an item is not opened, after click js add automaticly to details tag an `open` attr, and then we create an isItemOpen var.
    for(const faq of faqList) !isItemOpen ? faq.parentElement.removeAttribute(`open`, ``) : false;
}

for(const faq of faqList) {
    faq.addEventListener('click', closeItem);
}