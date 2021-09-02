$(document).ready(function(){$('#btn-consent-no').click(function(){$('.cookie-bar').css('display','none');localStorage.bannerClosed='false';});$('#btn-consent-yes').click(function(){$('.cookie-bar').css('display','none');localStorage.bannerClosed='true';});if(localStorage.bannerClosed=='true'){$("#cookie-bar").hide();}else{$("#cookie-bar").show();}
$('.walletIOS').on('click',function(event){event.preventDefault();$('.walletIOS_Wrapper').slideToggle("slow");});});$(document).ready(function(){$(document).on('click','.subscribe-form button[name=btnSubmit]',function(){var frm=$(this).closest('form');var btn=$(this);$(frm).validate();if($(frm).valid()){var uID="elm_"+new Date().getTime();$(frm).find('.fa-spinner').removeClass('d-none');$.ajax({type:"post",url:$(frm).attr("action"),data:$(frm).serialize(),contentType:"application/x-www-form-urlencoded",success:function(responseData,textStatus,jqXHR){$('.actionMessage').html(responseData);$("#subscribeModal").modal();$(frm).find("input").val("");}}).then(function(){$(frm).find('.fa-spinner').addClass('d-none');});}});});const particleWave=()=>{const heroBanner=document.querySelector(".hero-banner");let w=heroBanner.clientWidth;let h=heroBanner.clientHeight;const dpr=window.devicePixelRatio;const fov=60;const fovRad=fov*(Math.PI/180);const dist=h/2/Math.tan(fovRad);const clock=new THREE.Clock();const pointSize=2*dpr;const renderer=new THREE.WebGLRenderer();renderer.setSize(w,h);renderer.setClearColor(new THREE.Color("#fff"),1.0);renderer.setPixelRatio(dpr);const container=document.getElementById("webgl-canvas");container.appendChild(renderer.domElement);const camera=new THREE.PerspectiveCamera(fov,w/h,1,dist*8);camera.position.x=0;camera.position.y=20;camera.position.z=150;const scene=new THREE.Scene();const fogColor="#fff";const near=1.8;const far=2;scene.fog=new THREE.Fog(fogColor,near,far);scene.background=new THREE.Color(fogColor);const geo=new THREE.BufferGeometry();const positions=[];const width=200*(w/h);const depth=100;const distance=5;for(let x=0;x<width;x+=distance){for(let z=0;z<depth;z+=distance){positions.push(-width/2+x,-30,-depth/2+z);}}
const positionAttribute=new THREE.Float32BufferAttribute(positions,3);geo.setAttribute("position",positionAttribute);const mat=new THREE.ShaderMaterial({uniforms:{u_time:{value:0.0},color1:{value:new THREE.Color("#66d0b6")},color2:{value:new THREE.Color("#6a569c")},color3:{value:new THREE.Color("#f16078")},color4:{value:new THREE.Color("#6a569c")},color5:{value:new THREE.Color("#66d0b6")},resolution:{type:"v2",value:new THREE.Vector2(w*dpr,h*dpr)},pointSize:{value:pointSize}},vertexShader:`
            precision highp float;
            #define M_PI 3.1415926535897932384626433832795
            
            uniform float u_time;
            uniform float pointSize;
            
            void main() {
            vec3 p = position;
            p.y += (
                cos(p.x / M_PI * 8.0 + u_time * 1.5) * 15.0 +
                sin(p.z / M_PI * 8.0 + u_time * 1.5) * 15.0 + 
                60.0
            ) ;
            
            gl_PointSize = pointSize;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }   
        
        `,fragmentShader:`
            precision highp float;
            
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform vec3 color4;
            uniform vec3 color5;
            uniform vec2 resolution;
            
            void main() {
            // create circles instead of squares
            if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
            
            float x = gl_FragCoord.x;
            float step1 = 0.25;
            float step2 = 0.45;
            float step3 = 0.55;
            float step4 = 0.75;
            float step5 = 1.00;
            
            float mixValue = x / resolution.x;
            
            // create color stops using 'mix', and convert the progress through each 'step'
            // to a value between 0 and 1
            vec3 mixedColor;
            if(mixValue < step1) {
                mixedColor = mix(color1, color2, mixValue / step1);
            } else if (mixValue >= step1 && mixValue < step2) {
                mixedColor = mix(color2, color3, ((mixValue - step1) / (step2 - step1)));
            } else if (mixValue >= step2 && mixValue < step3) {
                mixedColor = color3;
            } else if (mixValue >= step3 && mixValue < step4) {
                mixedColor = mix(color3, color4, ((mixValue - step3) / (step4 - step3)));
            } else {
                mixedColor = mix(color4, color5, ((mixValue - step4) / (step5 - step4)));
            }
            
            gl_FragColor = vec4(mixedColor, 1.0);
            }
        `});const mesh=new THREE.Points(geo,mat);scene.add(mesh);function render(){const time=clock.getElapsedTime();mesh.material.uniforms.u_time.value=time;renderer.render(scene,camera);requestAnimationFrame(render);}
render();function onWindowResize(){w=heroBanner.clientWidth;h=heroBanner.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}
window.addEventListener("resize",onWindowResize);};var potentialMarketCollection=['bb.png','boss.png','burberry.png','ganni.png','lidl.png','ralph-lauren.png','tesco.png','tommy-hilfiger.png','uniqlo.png','zacposen.png','zara.png']
function renderBubbles(){var bubbles=$('.bubbles');var max_bubbles=11,min_bubbles=11,max_bubbleSize=50,min_bubbleSize=50,total_bubbles=max_bubbles+Math.floor(Math.random()*min_bubbles+1);bubbles.append(`<div class='bubble-container' style="left:0%"><div class='bubble-1'><img src="img/potential-market/uniqlo.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:5%"><div class='bubble-1'><img src="img/potential-market/burberry.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:15%"><div class='bubble-1'><img src="img/potential-market/zara.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:25%"><div class='bubble-1'><img src="img/potential-market/bb.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:35%"><div class='bubble-1'><img src="img/potential-market/tommy-hilfiger.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:45%"><div class='bubble-1'><img src="img/potential-market/ganni.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:55%"><div class='bubble-1'><img src="img/potential-market/zacposen.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:65%"><div class='bubble-1'><img src="img/potential-market/tesco.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:75%"><div class='bubble-1'><img src="img/potential-market/boss.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:75%"><div class='bubble-1'><img src="img/potential-market/ralph-lauren.png" class="img-potential-market"
    ></div></div>`);bubbles.append(`<div class='bubble-container' style="left:75%"><div class='bubble-1'><img src="img/potential-market/lidl.png" class="img-potential-market"
    ></div></div>`);bubbles.find('.bubble-container').each(function(){var bubble_size=max_bubbleSize+Math.floor(Math.random()*min_bubbleSize+1);var bubble_pos=Math.floor(Math.random()*80+1);var blur_size=0+Math.floor(Math.random()*3+1);var animation_delay=8+Math.floor(Math.random()*11);var random_margin=50+Math.floor(Math.random()*100)
var $this=$(this);var mX,mY,distance,mX_stored,mY_stored;function calculateDistance(elem,mouseX,mouseY){return Math.floor(Math.sqrt(Math.pow(mouseX-(elem.offset().left+(elem.width()/2)),2)+Math.pow(mouseY-(elem.offset().top+(elem.height()/2)),2)));}
$(document).mousemove(function(e){mX=e.pageX
mY=e.pageY;distance=calculateDistance($this,mX,mY);if(distance<50){console.log('yes');$this.children('.bubble').css({'background':'rgb(255, 214, 153)',});}
else if(distance>70){$this.children('.bubble').css({'background':'rgba(255,255,255,0.25)','transform':'scale(1)'});}});$this.css({'left':bubble_pos+"%",'-webkit-animation-duration':animation_delay+'s','-moz-animation-duration':animation_delay+'s','animation-duration':animation_delay+'s',});$this.children('.bubble').css({'width':bubble_size+'px','height':bubble_size+'px'});});}
function animations(){particleWave();init();}
$(document).ready(function(){renderBubbles();var winW=$(window).innerWidth();if(winW<=991){$('#shaderMoon').addClass('circle');}else{animations();}});