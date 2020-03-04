(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = {x:0, y:0};


    
    let maxScrollValue;
    
    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
        //console.log(maxScrollValue)
    }

    
    window.addEventListener('scroll', function(){
        //console.log(pageYOffset);
        //console.log(maxScrollValue)
        //console.log(zMove);
        const scrollPer = pageYOffset / maxScrollValue;

        const zMove = scrollPer * 980 - 490;
        
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        //progress bar
        barElem.style.width = scrollPer *100 +'%';
    });

    window.addEventListener('mousemove',function(e){
        //console.log('e.clientX'+e.clientX, 'e.clientY'+e.clientY);
        //console.log(mousePos);

        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
        
    })

    window.addEventListener('resize', resizeHandler)
    
    resizeHandler();

    stageElem.addEventListener('click', function(e){
        //console.log((e.clientX / window.innerWidth) * 100);
        
        new Character({
            xPos: e.clientX / window.innerWidth * 100,
            speed: Math.random() * 0.5
            //yPos: e.clientY / window.innerHeight * 100
        });
    })

    //new Character();

    const btntop =  document.querySelector('.btn_top');

    

    function scrollToTop(scrollDuration) {
        const   scrollHeight = window.scrollY,
                scrollStep = Math.PI / ( scrollDuration / 10 ),
                cosParameter = scrollHeight / 2;
        var     scrollCount = 0,
                scrollMargin,
                scrollInterval = setInterval( function() {
                    if ( window.scrollY != 0 ) {
                        scrollCount = scrollCount + 1;  
                        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                    } 
                    else clearInterval(scrollInterval); 
        }, 200 );
    }




})()

