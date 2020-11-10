(function(){
	const graphicElems = document.querySelectorAll('.graphic-item');
	const stepElems = document.querySelectorAll('.step');
	let currentItem = graphicElems[0]; //현재활성화된 (visible클래스가 붙은) .graphic-item 을 지정
	let ioIndex;

	const io = new IntersectionObserver((entries, observer) =>{
		ioIndex = entries[0].target.dataset.index * 1;
		//console.log(ioIndex)
	})
	

	for(let i=0; i< stepElems.length; i++){
		io.observe(stepElems[i])

		stepElems[i].dataset.index = i;
		graphicElems[i].dataset.index = i;
	}

	function activate(){
		currentItem.classList.add('visible')
	}

	function inactivate(){
		currentItem.classList.remove('visible')
	}

	window.addEventListener('scroll', function(){
		var step;
		var boundingRect;
		var temp = 0;

		for(let i = ioIndex - 1; i < ioIndex + 2; i++){
			step = stepElems[i];

			if(!step) continue;

			boundingRect = step.getBoundingClientRect();

			temp++;

			if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8){
				inactivate()
				currentItem = graphicElems[step.dataset.index];
				activate()
			}
		}
		//console.log(temp)
	})

	activate();


})()