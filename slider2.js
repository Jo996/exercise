var slider2 = {
    imagesUrls: [],
    currentImageIndex: 0,

    showPrevBtn: null,
    showNextBtn: null,
    slideImage: null,

    start: function (elId) {
        var that = this; 

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick();
        });        

        // create images array
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02W94TCLQ9aHtyz1t3dh5k_P6tVtI8yu8vQ&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgGvVX-BqHXO7QsUsZliyh3AnXPMFuxvmvg&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCIa2GJhne5QcB2j3uxcC-0iVJnRO03DyKA&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTtApZZVRwy6cvXgS2dp-Nl6dqdfsFR3yjg&usqp=CAU');
    
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true; 
    },

    onShowPrevBtnClick: function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function(e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        //disable next button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
    }
    }
}
