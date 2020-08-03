function Character(info){

    
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML = ''

    + '<div class="character-face-con character-head">'
    + '<div class="character-face character-head-face face-front"></div>'
    + '<div class="character-face character-head-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-torso">'
    + '<div class="character-face character-torso-face face-front"></div>'
    + '<div class="character-face character-torso-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-right">'
    + '<div class="character-face character-arm-face face-front"></div>'
    + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-left">'
    + '<div class="character-face character-arm-face face-front"></div>'
    + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-right">'
    + '<div class="character-face character-leg-face face-front"></div>'
    + '<div class="character-face character-leg-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-left">'
    + '<div class="character-face character-leg-face face-front"></div>'
    + '<div class="character-face character-leg-face face-back"></div>'
    + '</div>';

    document.querySelector('.stage').appendChild(this.mainElem);

    this.mainElem.style.left =  info.xPos + '%';
    //this.mainElem.style.top =  info.yPos + '%';
    // 스크롤중인지 아닌지
    this.scrollState = false;
    // 바로 이전(마지막) 스크롤 위치
    this.lastScrollTop = 0;
    this.xPos = info.xPos;
    this.speed = info.speed;
    //console.log(info.speed)
    this.direction;
    this.runningState = false; //좌우 이동 중인지 아닌지
    this.rafId ;
    this.init();
}

Character.prototype = {
    constructor : Character,
    init: function(){
        const self = this;
        //console.log(mainElem.scrollTop)
        window.addEventListener('scroll', function(){
            this.clearTimeout(self.scrollState);
            
            
            if(!self.scrollState){
                
                self.mainElem.classList.add('running');
                //console.log('런닝 붙었음')
            }

            self.scrollState = setTimeout(function(){
                self.scrollState = false;
                self.mainElem.classList.remove('running')
            }, 500)
            //console.log(self.scrollState)
            //console.log('self.lastScrollTop:'+ self.lastScrollTop);
            //console.log('pageYOffset:'+ pageYOffset);

            // 이전 스크롤 위치와 현재 스크롤 위치를 비교
            if(self.lastScrollTop > pageYOffset){
                //이전 스크롤 위치가 크다면:스크롤 올림
                self.mainElem.setAttribute('data-direction','backward')
            }else{
                //현재 스크롤 위치가 크다면:스크롤 내림
                self.mainElem.setAttribute('data-direction','foward')
                
            }
            self.lastScrollTop = pageYOffset;
        });

        window.addEventListener('keydown', function(e){
            //console.log(e.keyCode)
            if(self.runningState) return;

            if(e.keyCode == 37){
                //왼쪽
                self.direction = 'left';
                self.mainElem.setAttribute('data-direction','left');
                self.mainElem.classList.add('running');
                //self.xPos -= self.speed;
                //self.mainElem.style.left = self.xPos + '%';
                self.run(self);
                self.runningState = true;
            }else if (e.keyCode == 39){
                //오른쪽
                self.direction = 'right';
                self.mainElem.setAttribute('data-direction','right');
                self.mainElem.classList.add('running');
                //self.xPos += self.speed;
                //self.mainElem.style.left = self.xPos + '%';
                self.run(self);
                self.runningState = true;
            }
        });

        window.addEventListener('keyup', function(e){
            self.mainElem.classList.remove('running');
            cancelAnimationFrame(self.rafId);
            self.runningState = false;
            console.log(self.runningState)
        });
    },
    run : function(self){
        console.log(self.xPos)

        if(self.xPos < 2){
            self.xPos = 2;
        }
        if(self.xPos > 98){
            self.xPos = 80;
        }

        if(self.direction == 'left'){
            self.xPos -= self.speed;
        }else if (self.direction == 'right'){
            self.xPos += self.speed;
        }

        //console.log(self)
        self.mainElem.style.left = self.xPos + '%';

        self.rafId = requestAnimationFrame(function(){
            self.run(self)
        })
    }    
}

