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

    setActive: function(classesToShow, classesToHide) {
        classesToShow.forEach((elem) => {
            elem.classList.remove('unactive');
            setTimeout(() => {elem.classList.add('active');
            elem.classList.remove('clear');},500)
        })
        classesToHide.forEach((elem) => {
            elem.classList.add('clear');
            setTimeout( ()=> {
                elem.classList.add('unactive')
            },500)
        })
    },

    showLoader: function(sectionToLoad,preloader) {
        sectionToLoad.onload = function () {
            preloader.classList.add('clear');
            preloader.classList.remove('active');
            preloader.classList.add('unactive');
        }
    } 
}

export default method;