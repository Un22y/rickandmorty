const method = {
    createNode: function(element) {
        return document.createElement(element);
    },
    
    cloneNode: function(element) {
        return element.cloneNode(true);
    },
    
    append: function (parent, el) {
      return parent.appendChild(el);
    },
    
    clearPage: function (placeWhereDelete, classToDelete) {
        let listToDelete = placeWhereDelete.querySelectorAll(classToDelete);
        listToDelete.forEach(e => e.remove());
    },
    
    deleteSection: function(parent) {
        while(parent.firstChild) {parent.removeChild(parent.firstChild)}
    },

    setActive(classesToShow, classesToHide) {
        classesToShow.forEach((elem) => elem.classList.remove('unactive'));
        classesToHide.forEach((elem) => elem.classList.add('unactive'))
    },
}

export default method;