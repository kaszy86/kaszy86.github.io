(function() {
	var veryImportantVar = 'never gets overwritten!!';
})(); //iifi?, see closure concept!!

console.log('ground control to major tom');

(function() {
	var modals = document.getElementsByClassName('modal-link');
	for (var i = 0; i < modals.length; i++) {
		modals[i].addEventListener('click', function(e) {
    		e.preventDefault();
    		document.getElementById(this.getAttribute('data-modal')).classList.add('open');
  		});
	}

	var closeButtons = document.getElementsByClassName('modal-content__close');
	for (var i = 0; i < closeButtons.length; i++) {
		closeButtons[i].addEventListener('click', function(e) {
			e.preventDefault();
			//document.getElementsByClassName('open')[0].classList.remove('open');
			document.querySelector('.open').classList.remove('open');
		});
	}

	var filters = document.getElementsByClassName('portfolio-filter');
	for(var i = 0; i < filters.length; i++) {
		filters[i].addEventListener('click', function(e) {
			e.preventDefault();
			if(this.checked) {
				var projects = document.getElementsByClassName('project');
				for(var j = 0; j < projects.length; j++) {
					if(this.value === '0' || this.value === projects[j].getAttribute('data-category')) {
						projects[j].classList.add('active');
					} else {
						projects[j].classList.remove('active');
					}
				}
			}
		});
	}
})();