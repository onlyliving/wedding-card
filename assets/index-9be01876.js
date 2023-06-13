import{j as z,s as t,r as d,R as O,l as P,c as N,a as V,B as W,b as H,d as K}from"./vendor-5bf40881.js";(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();const G=z.Fragment,e=z.jsx,i=z.jsxs,X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8qm6wAAAAK3RSTlMAHPMM31v644VxPSD27ebUx5d6TxIEy8Kpn46LgmtlU0sx17y4bF9VQzAmz+I01AAAANdJREFUOMuF0tkWgiAQgGGU3HPfNTPba97//TIDkiOj/y3fOY4DZCy1QoOsZMOYg587AKuC+vArQUAHvIMa1LAhSvjnqoA1A8qfDUAUUhW4ivNAI6pafq6/iDKDgx7ZQ6YzYBOkhoH9GwGayUSUIyKGjdvI+K7MEyJc4GM8EWEL4apBXoptcUEfw1zQAngxnX4tBLhJg56FsMZRh+kKO2kbOxBVBtvucS48JqS2xX1TpNIc0RJE8j6aBdgRuV5HPiHSYnb7+CvyakH0BHlCRnvx/aJyvlv/ACJvPLhlFwb/AAAAAElFTkSuQmCC",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAATlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEoqZZAAAAGXRSTlMA84i/BJPc0Y1oqPZaVLOFDul9GBYUwKEZd6XD1AAAAKVJREFUOMu9ktsOwiAQBXcLFFqg0JvK//+oK0raGNgYY5yHE5KZB0iAj1iDtukNq7tb8Q5TFXRP71OTXGzYDnClICSGQIHmAk0BcgFSkFh+GuAw4DGVQAGoYyqBkFIkATT5VLlD35+m8J9nzpyfKZi4YGL/C+GBEG0v4MGmW17vkInG1rRVEQrRX16X6gqL2+GMyX6EJqZ4LhglH5BnA97DcoUvuQNmiz7DqYeF5QAAAABJRU5ErkJggg==",q=t.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,v=t.a`
    position:relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:before {
        content: "";
        width: 18px;
        height: 18px;
        background: url(${J}) no-repeat center/cover;
    }
`,y=t.a`
    position:relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:before {
        content: "";
        width: 16px;
        height: 16px;
        background: url(${X}) no-repeat center/cover;
    }
`,C=t.li`
    // border-bottom: 1px dotted #aeaeae;
    padding: 8px 0;
`,Q=t.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 36px;
`,Y=t.div`
    width: 100%;
    margin: 36px auto 0;
`,I=t.h3`
    display: block;
    font-size: 14px;
    font-weight: normal;
`,k=t.span`
    display: block;
`,M=t.span`
    margin-right: 8px;
`,Z=t.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`,ee=()=>{const s={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00",introduce:`우리 결혼합니다
준비된 자세로 배우며 살아가겠습니다

소중한 사람과
희로애락을 함께 하겠습니다.`,contact:{bridegroom:{tel:"tel:010-5101-2659",sms:"sms:010-5101-2659",parents:{father:{name:"김동필",tel:"tel:010-4321-0987",sms:"sms:010-4321-0987"},mother:{name:"백숙현",tel:"tel:010-2287-9852",sms:"sms:010-2287-9852"}}},bride:{tel:"tel:010-8900-2019",sms:"sms:010-8900-2019",parents:{father:{name:"김상현",tel:"tel:010-5141-8109",sms:"sms:010-5141-8109"},mother:{name:"김나현",tel:"tel:010-2251-4026",sms:"sms:010-2251-4026"}}}}};return i(q,{"data-scroll":!0,children:[e(Z,{children:"축하 연락처"}),i(Y,{children:[i("ul",{children:[i(C,{children:[e(M,{children:"신랑 김우준"}),e(y,{href:s.contact.bridegroom.tel}),e(v,{href:s.contact.bridegroom.sms})]}),i(C,{children:[e(M,{children:"신부 김소희"}),e(y,{href:s.contact.bride.tel}),e(v,{href:s.contact.bride.sms})]})]}),i(Q,{children:[e("ul",{children:i("li",{children:[e(I,{children:"신랑측 혼주"}),i("ul",{children:[i(C,{children:[e(k,{children:"혼주 김동필"}),e(y,{href:s.contact.bridegroom.parents.father.tel}),e(v,{href:s.contact.bridegroom.parents.father.sms})]}),i(C,{children:[e(k,{children:"혼주 백숙현"}),e(y,{href:s.contact.bridegroom.parents.mother.tel}),e(v,{href:s.contact.bridegroom.parents.mother.sms})]})]})]})}),e("ul",{children:i("li",{children:[e(I,{children:"신부측 혼주"}),i("ul",{children:[i(C,{children:[e(k,{children:"혼주 김상현"}),e(y,{href:s.contact.bride.parents.father.tel}),e(v,{href:s.contact.bride.parents.father.sms})]}),i(C,{children:[e(k,{children:"혼주 김나현"}),e(y,{href:s.contact.bride.parents.mother.tel}),e(v,{href:s.contact.bride.parents.mother.sms})]})]})]})})]})]})]})},te="/wedding-card/assets/img_1-a4ac0188.jpeg",ie="/wedding-card/assets/img_10-204ee8ad.jpeg",ne="/wedding-card/assets/img_11-31764165.jpeg",se="/wedding-card/assets/img_12-657798e6.jpeg",oe="/wedding-card/assets/img_13-98a2ac28.jpeg",ae="/wedding-card/assets/img_14-a9168eb5.jpeg",re="/wedding-card/assets/img_15-1081f81b.jpeg",de="/wedding-card/assets/img_16-203d258e.jpeg",ge="/wedding-card/assets/img_17-7866f8bc.jpeg",ce="/wedding-card/assets/img_18-67c7f3ae.jpeg",le="/wedding-card/assets/img_19-202b576e.jpeg",pe="/wedding-card/assets/img_2-6f1d3554.jpeg",me="/wedding-card/assets/img_20-2db75394.jpeg",_e="/wedding-card/assets/img_21-ddcd57d9.jpeg",he="/wedding-card/assets/img_22-21114e05.jpeg",Ae="/wedding-card/assets/img_23-31c3f82a.jpeg",ue="/wedding-card/assets/img_24-a1907b5b.jpeg",xe="/wedding-card/assets/img_25-21886c7a.jpeg",fe="/wedding-card/assets/img_26-49f7c2e0.jpeg",be="/wedding-card/assets/img_27-3c916af9.jpeg",we="/wedding-card/assets/img_28-3e3a83c0.jpeg",je="/wedding-card/assets/img_3-18d9c9f5.jpeg",ve="/wedding-card/assets/img_4-0b2a4ae3.jpeg",ye="/wedding-card/assets/img_5-d161d436.jpeg",Ce="/wedding-card/assets/img_6-3efe16b5.jpeg",ke="/wedding-card/assets/img_7-f218db53.jpeg",$e="/wedding-card/assets/img_8-9fdc64f4.jpeg",Be="/wedding-card/assets/img_9-d0987053.jpeg",Se="/wedding-card/assets/img_1-f2fd50ed.jpeg",Te="/wedding-card/assets/img_10-07ef3720.jpeg",Re="/wedding-card/assets/img_11-23b737a3.jpeg",ze="/wedding-card/assets/img_12-bbd14a5b.jpeg",Ie="/wedding-card/assets/img_13-00b68755.jpeg",Me="/wedding-card/assets/img_14-6f8687a2.jpeg",Ee="/wedding-card/assets/img_15-77ee50cd.jpeg",De="/wedding-card/assets/img_16-689a3d3f.jpeg",Le="/wedding-card/assets/img_17-51200057.jpeg",Ge="/wedding-card/assets/img_18-fb509e65.jpeg",Ue="/wedding-card/assets/img_19-43d764da.jpeg",Fe="/wedding-card/assets/img_2-8701a851.jpeg",Oe="/wedding-card/assets/img_20-c3cdf6dc.jpeg",Pe="/wedding-card/assets/img_21-fc9cec8c.jpeg",Ne="/wedding-card/assets/img_22-1f6415ff.jpeg",Ve="/wedding-card/assets/img_23-58051b64.jpeg",We="/wedding-card/assets/img_24-d89d4378.jpeg",He="/wedding-card/assets/img_25-6c766e8f.jpeg",Ke="/wedding-card/assets/img_26-d65f48fb.jpeg",Xe="/wedding-card/assets/img_27-8340f76d.jpeg",Je="/wedding-card/assets/img_28-be6ba44b.jpeg",qe="/wedding-card/assets/img_3-5d0c5887.jpeg",Qe="/wedding-card/assets/img_4-096dadeb.jpeg",Ye="/wedding-card/assets/img_5-2f5549e0.jpeg",Ze="/wedding-card/assets/img_6-7d280603.jpeg",et="/wedding-card/assets/img_7-f89f825a.jpeg",tt="/wedding-card/assets/img_8-78cd6d2c.jpeg",it="/wedding-card/assets/img_9-df12a285.jpeg",nt=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14","img_15","img_16","img_17","img_18","img_19","img_20","img_21","img_22","img_23","img_24","img_25","img_26","img_27","img_28"],st=t.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    & > img {
        display: block;
    }
    @media(max-width: 500px) {
        & > img {
            width: 360px;
        }
    }
    @media(min-width: 501px) {
        & > img {
            width: 500px;
        }
    }
    
`,ot=t.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    // display: flex;
    width: 100%;
    height: 100%;
`,at=t.section`
    z-index: 2;
    overflow: hidden;
    display: flex;
    position: relative;
    height: 100%;
    
    @media(max-width: 500px) {
        width: 360px;
    }
    @media(min-width: 501px) {
        width: 500px;
    }
    margin: auto;
`,rt=t.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
    cursor: pointer;
`,dt=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,gt=t.div`
    // z-index: 2;
    position: absolute;
    height: 100%;
    display: flex;
`,ct=t.button`
    z-index: 999;
    width: 50px;
    height: 50px;
    position:absolute;
    right: 0;
    top: 0;
    text-indent: -9999px;
    padding: 0;
    &:before,
    &:after {
        content: "";
        width: 22px;
        height: 2px;
        background:#000;
        position:absolute;
        left: 50%;
        top: 50%;
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    // @media(min-width: 501px) {
    //     width: 80px;
    //     height: 80px;
    //     position:fixed;
    // }

    @media(min-width: 768px) {
        width: 80px;
        height: 80px;
        position: fixed;
    }

`,lt=t.div`
    pointer-events : none;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    @media(max-width: 500px) {
        max-width: 500px;
        height: 100%;
    }
    @media(min-width: 501px) {
        max-width: 600px;
    }
`,pt=t.button`
    pointer-events : all;
    z-inxex: 10;
    position: fixed;
    left: 0;
    padding: 0;
    width: 60px;
    height: 100%;
    text-indent: -9999px;
    cursor: pointer;
    box-sizing: border-box;

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(135deg);
        display: block;
        text-indent: -9999px;
        position: absolute;
        left: 23px;
    }

    @media(max-width: 500px) {
    }
    @media(min-width: 501px) {
    }

    &:hover {
        opacity: 0.5;
    }
`,mt=t.button`
    pointer-events : all;
    z-inxex: 10;
    position: fixed;
    right: 0;
    padding: 0;
    width: 60px;
    height: 100%;
    text-indent: -9999px;
    cursor: pointer;

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(-45deg);
        display: block;
        text-indent: -9999px;
        position: absolute;
        left: 15px;
    }

    @media(max-width: 500px) {
    }
    @media(min-width: 501px) {
    }
    &:hover {
        opacity: 0.5;
    }
`,_t=({isSlideShow:s,setIsSlideShow:g,currentSlideNum:l})=>{const n=d.useRef([]),o=d.useRef(null),[a,c]=d.useState(0),A=()=>{if(n.current[0]&&o.current){const r=n.current[0].getBoundingClientRect().width,h=o.current.getBoundingClientRect().width;if(a===0){const j=h*-1+r;c(j)}else{const j=a+r;c(j)}}},u=()=>{if(n.current[0]&&o.current){const r=n.current[0].getBoundingClientRect().width;if(o.current.getBoundingClientRect().width<=Math.abs(a)+r)c(0);else{const j=a-r;c(j)}}};d.useEffect(()=>{if(s&&n.current[0]){const r=n.current[0].getBoundingClientRect().width,h=l===1?0:r*(l-1)*-1;c(h)}},[s]);let _=0,p=0;const m=r=>{_=r.pageX},f=(r,h)=>{r!=h&&(r<h?A():u())},b=r=>{p=r.pageX,f(_,p)};let x=!1;const S=r=>{if(r.touches.length>1){x=!0,r.isPropagationStopped();return}x=!1,_=r.touches[0].pageX},T=r=>{x||(p=r.changedTouches[0].pageX,f(_,p))},w=()=>g(!1),U=nt.map((r,h)=>e(st,{children:e("img",{ref:F=>n.current[h]=F,src:(()=>new URL(Object.assign({"../assets/images/img_1.jpeg":Se,"../assets/images/img_10.jpeg":Te,"../assets/images/img_11.jpeg":Re,"../assets/images/img_12.jpeg":ze,"../assets/images/img_13.jpeg":Ie,"../assets/images/img_14.jpeg":Me,"../assets/images/img_15.jpeg":Ee,"../assets/images/img_16.jpeg":De,"../assets/images/img_17.jpeg":Le,"../assets/images/img_18.jpeg":Ge,"../assets/images/img_19.jpeg":Ue,"../assets/images/img_2.jpeg":Fe,"../assets/images/img_20.jpeg":Oe,"../assets/images/img_21.jpeg":Pe,"../assets/images/img_22.jpeg":Ne,"../assets/images/img_23.jpeg":Ve,"../assets/images/img_24.jpeg":We,"../assets/images/img_25.jpeg":He,"../assets/images/img_26.jpeg":Ke,"../assets/images/img_27.jpeg":Xe,"../assets/images/img_28.jpeg":Je,"../assets/images/img_3.jpeg":qe,"../assets/images/img_4.jpeg":Qe,"../assets/images/img_5.jpeg":Ye,"../assets/images/img_6.jpeg":Ze,"../assets/images/img_7.jpeg":et,"../assets/images/img_8.jpeg":tt,"../assets/images/img_9.jpeg":it})[`../assets/images/${r}.jpeg`],self.location).href)(),"data-value":r,alt:"갤러리 이미지"})},h));return s?i(ot,{children:[i(at,{children:[e(dt,{children:"이미지 팝업창"}),e(gt,{ref:o,style:{left:a},onMouseDown:m,onMouseUp:b,onTouchStart:S,onTouchEnd:T,children:U}),i(lt,{children:[e(pt,{onClick:A,children:"이전"}),e(mt,{onClick:u,children:"다음"})]}),e(ct,{onClick:w,children:"팝업창 닫기"})]}),e(rt,{onClick:w})]}):e(G,{})},ht=t.section`
    padding: 36px 0;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,At=t.figure`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:0;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;

    & > img{
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
`,ut=t.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 150px;

    width: 86%;
    margin: 36px auto;
    @media(min-width: 361px) {
        grid-auto-rows: 200px;
    }
`,xt=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,ft=t.button`
    padding: 8px 15px;
    border-radius: 30px;
    margin: auto;
    display: block;
    color: #f5f5f5;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: #000;
`,bt=["img_1","img_2","img_3","img_4"],wt=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14","img_15","img_16","img_17","img_18","img_19","img_20","img_21","img_22","img_23","img_24","img_25","img_26","img_27","img_28"],jt=()=>{const s=d.useRef([]),[g,l]=d.useState(bt),[n,o]=d.useState(!1),[a,c]=d.useState(0);d.useEffect(()=>{document.documentElement.style.overflow=n?"hidden":"auto"},[n]);const A=p=>{l(wt),p.target.remove()},u=p=>{const m=p.target.getAttribute("data-value");o(!0);const f=Number(m.split("img_")[1]);c(f)},_=g.map((p,m)=>e(At,{children:e("img",{ref:b=>s.current[m]=b,src:(()=>new URL(Object.assign({"../assets/images/thumbnail/img_1.jpeg":te,"../assets/images/thumbnail/img_10.jpeg":ie,"../assets/images/thumbnail/img_11.jpeg":ne,"../assets/images/thumbnail/img_12.jpeg":se,"../assets/images/thumbnail/img_13.jpeg":oe,"../assets/images/thumbnail/img_14.jpeg":ae,"../assets/images/thumbnail/img_15.jpeg":re,"../assets/images/thumbnail/img_16.jpeg":de,"../assets/images/thumbnail/img_17.jpeg":ge,"../assets/images/thumbnail/img_18.jpeg":ce,"../assets/images/thumbnail/img_19.jpeg":le,"../assets/images/thumbnail/img_2.jpeg":pe,"../assets/images/thumbnail/img_20.jpeg":me,"../assets/images/thumbnail/img_21.jpeg":_e,"../assets/images/thumbnail/img_22.jpeg":he,"../assets/images/thumbnail/img_23.jpeg":Ae,"../assets/images/thumbnail/img_24.jpeg":ue,"../assets/images/thumbnail/img_25.jpeg":xe,"../assets/images/thumbnail/img_26.jpeg":fe,"../assets/images/thumbnail/img_27.jpeg":be,"../assets/images/thumbnail/img_28.jpeg":we,"../assets/images/thumbnail/img_3.jpeg":je,"../assets/images/thumbnail/img_4.jpeg":ve,"../assets/images/thumbnail/img_5.jpeg":ye,"../assets/images/thumbnail/img_6.jpeg":Ce,"../assets/images/thumbnail/img_7.jpeg":ke,"../assets/images/thumbnail/img_8.jpeg":$e,"../assets/images/thumbnail/img_9.jpeg":Be})[`../assets/images/thumbnail/${p}.jpeg`],self.location).href)(),"data-value":p,onClick:u,alt:"갤러리 이미지"})},m));return i(ht,{"data-scroll":!0,children:[e(xt,{children:"갤러리"}),e(ut,{children:_}),e(ft,{onClick:A,children:"갤러리 더보기"}),e(_t,{isSlideShow:n,setIsSlideShow:o,currentSlideNum:a})]})},vt=t.section`
    padding: 80px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #5e5e5e;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,yt=t.p`
    text-align: center;
    margin-bottom: 46px;
    line-height: 1.8;
`,Ct=t.ul`
    display:flex;
    flex-direction: column;
    color: #252525;
`,kt=t.p`
    display: flex;
    align-items: center;
    margin-left: 12px;
`,$t=t.em`
    font-style: initial;
    margin-left: 8px;
    color: #252525;
`,Bt=t.div`
    display: flex;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`,$=t.em`
    font-style: initial;
    font-weight: bold;
    color: #000;


    // @keyframes color {
    //     0% { color: #567792; }
    //     50% { color: #1997ff; }
    //     100% { color: #89c7fa; }
    // };
    // // animation: color 1s ease-in-out;
    // animation: color 3s ease-in-out infinite;
    // animation-direction: alternate;
`,St=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,Tt=()=>i(vt,{"data-scroll":!0,children:[e(St,{children:"소개글"}),i(yt,{children:[e($,{children:"우"}),"리 결혼합니다.",e("br",{}),e($,{children:"준"}),"비된 자세로 배우며 살아가겠습니다.",e("br",{}),e("br",{}),e($,{children:"소"}),"중한 사람과",e("br",{}),e($,{children:"희"}),"로애락을 함께 하겠습니다."]}),[{name:"김우준",mother:"백숙현",father:"김동필",rank:"차남"},{name:"김소희",mother:"김나현",father:"김상현",rank:"장녀"}].map((g,l)=>i(Bt,{children:[i(Ct,{children:[e("li",{children:g.father}),e("li",{children:g.mother})]}),i(kt,{children:["의 ",g.rank," ",e($t,{children:g.name})]})]},l))]}),Rt="/wedding-card/assets/bg-c7833e65.jpg",zt=t.section`
    overflow: hidden;
    position: relative;
    min-height: calc(100vh - 20px);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: url(${Rt}) no-repeat center/cover;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;

    @media(min-height: 640px) {
        min-height: calc(640px - 20px);
    }
`,It=t.strong`
    z-index: 5;
    font-size: 20px;
`,Mt=t.span`
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
`,Et=t.p`
    z-index: 5;
    margin: 16px auto;
`;t.p`
    z-index: 2;
    position: absolute;
    right: 30px;
    bottom: 30px;
    padding-right: 6px;
    font-style: italic;
    font-size: 50px;
    font-weight: bold;
    color: #fff3ec;
`;const Dt=t.p`
    z-index: 2;
    position: absolute;
    right: 30px;
    bottom: 30px;
    padding-right: 6px;
    font-style: italic;
    font-size: 34px;
    font-weight: bold;
    color: #fff3ec;
    word-break: keep-all;
    text-align: right;
`,Lt=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,Gt=()=>{const s=d.useRef([]);d.useEffect(()=>{s.current&&s.current.map(n=>{new O(n,{speed:-2,center:!1,round:!0,vertical:!0,horizontal:!1})})},[]);const g={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00"};return i(zt,{children:[e(Lt,{children:"메인페이지"}),i(It,{ref:n=>s.current[0]=n,"data-rellax-speed":"-3",children:["우준",e(Mt,{children:"and"}),"소희"]}),i(Et,{ref:n=>s.current[1]=n,"data-rellax-speed":"-3",children:[(()=>{const n=new Date(g.date),o=new Date,a=n.getTime()-o.getTime(),c=Math.round(a/(1e3*60*60*24)),A=n.getHours()<12?"오전":"오후",u=n.getMinutes()?`${n.getMinutes()}분`:"",_=`${A} ${n.getHours()}시 ${u}`;return{weddingDay:`${n.getFullYear()}년 ${n.getMonth()+1}월 ${n.getDate()}일 ${_}`,dday:c}})().weddingDay,e("br",{}),g.place]}),e(Dt,{ref:n=>s.current[2]=n,"data-rellax-speed":"1",children:"축하해주셔서 감사합니다💖"})]})},Ut=t.div`
    padding: 16px;
`,Ft=t.a`
    display: block;
    z-index: 2;
    position: relative;
    cursor: pointer;
`,Ot=t.div`
    border: 1px solid #cecece;
    border-radius: 8px;
`,Pt={center:new naver.maps.LatLng(37.34,127.1067),scaleControl:!1,mapDataControl:!1,zoom:16,draggable:!1,scrollWheel:!1},Nt=()=>{const s=d.useRef(null);return d.useEffect(()=>{if(s.current){const l=new naver.maps.Map(s.current,Pt);new naver.maps.Marker({position:l.getCenter(),map:l})}},[]),e(Ut,{children:e(Ft,{href:"https://naver.me/xdIkk34F",target:"_blank",children:e(Ot,{ref:s,style:{width:"100%",height:"400px"},children:"지도"})})})},Vt=t.section`
    padding: 36px 0;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,Wt=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,R=t.ul`
    & > li {
        position: relative;
        padding-left: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        &:before {
            content: "-";
            position:absolute;
            left:0;
        }
    }
`,E=t.h3`
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: bold;
`,D=t.div`
    margin-top: 20px;
`,Ht=t.div`
    padding: 16px;
`,Kt=()=>i(Vt,{"data-scroll":!0,children:[e(Wt,{children:"오시는 길"}),e(Nt,{}),i(Ht,{children:[i(R,{children:[e("li",{children:"분당앤스퀘어 4층 컨벤션홀"}),e("li",{children:"경기 성남시 분당구 탄천상로151번길 20 4층"})]}),i(D,{children:[e(E,{children:"지하철"}),e(R,{children:e("li",{children:"(수인분당) 오리역 6번 출구에서 도보 3분"})})]}),i(D,{children:[e(E,{children:"자가용"}),i(R,{children:[e("li",{children:'내비게이션 이용 시 : "분당앤스퀘어" 를 입력해주세요.'}),e("li",{children:"신 주소 : 경기 성남시 분당구 탄천상로151번길 20"}),e("li",{children:"구 주소 : 경기 성남시 분당구 구미동 159"}),e("li",{children:"주차장 : 분당앤스퀘어 지하 3, 4층에 주차하시면 됩니다."})]})]})]})]}),Xt=t.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,Jt=t.section`
    z-index: 2;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 360px;
    margin: auto;
    background-color: #fff;
    border: 1px solid #000;
`,qt=t.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    cursor: pointer;
`,Qt=t.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid #000;
    & > button {
        height: 60px;
        padding: 0;
        font-weight: bold;
        color: #000;
        &:first-child {
            color: #fff;
            background-color: #000;
        }
    }
`,Yt=t.h3`
    margin: 30px 0 16px 0;
`,Zt=t.p`
    font-size: 16px;
`,ei=t.ul`
    width: 90%;
    max-width: 320px;
    position:relative;
    margin: 20px auto 40px auto;
    border: 1px solid #e0e0e0;
    text-align: left;
    border-radius: 8px;
    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;
        &:last-child {
            border-bottom: 0;
        }
    }
`,ti=t.input`
    position: absolute;
    width: 1px;
    height: 1px;s
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`,ii=({isShow:s,setIsShow:g,data:l})=>{const[n,o]=d.useState(""),[a,c]=d.useState(""),[A,u]=d.useState(""),[_,p]=d.useState(""),m=d.useRef(null);d.useEffect(()=>{const x=l.split(","),[S,T,w]=x;o(S),c(T),u(w),w&&p(w)},[l]);const f=()=>{if(m&&m.current){const x=m.current;x.select(),document.execCommand("copy"),alert(`${x.getAttribute("data-alert")} 복사되었습니다.`)}},b=()=>g(!1);return s?i(Xt,{children:[i(Jt,{children:[i(Yt,{children:[e("span",{children:a}),"측 계좌번호"]}),e(Zt,{children:"복사 버튼 클릭하시면 계좌번호가 복사됩니다."}),i(ei,{children:[e("li",{children:n}),i("li",{children:[A,e(ti,{type:"input",ref:m,value:_||"","data-alert":A,readOnly:!0})]})]}),i(Qt,{children:[e("button",{type:"button",onClick:f,children:"복사"}),e("button",{type:"button",onClick:b,children:"닫기"})]})]}),e(qt,{onClick:b})]}):e(G,{})},ni=t.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,si=t.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`,oi=t.div`
    width: 100%;
`,L=t.ul`
    width: 100%;
    position:relative;
    margin-top: 16px;
    border: 1px solid #e0e0e0;
    text-align: left;
    border-radius: 8px;
    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        &:last-child {
            border-bottom: 0;
        }
        & > span,
        & > button{
            padding: 10px 12px;
        }
    }
`,B=t.button`
    border-left: 1px solid #e0e0e0;
    min-width: 90px;
    color: #2196F3;
    cursor: pointer;
`,ai=()=>{const[s,g]=d.useState(!1),[l,n]=d.useState(""),o=a=>{const c=a.target.getAttribute("data-value");c&&(n(c),g(!0))};return i(ni,{children:[e(si,{children:"축하의 마음 전하기"}),i(oi,{children:[i(L,{children:[i("li",{children:[e("span",{children:"신랑 아버지"}),e(B,{type:"button","data-value":"김동필,신랑,SC제일은행 43320089765",onClick:o,children:"계좌"})]}),i("li",{children:[e("span",{children:"신랑 어머니"}),e(B,{type:"button","data-value":"백숙현,신랑,농협은행 10502330024",onClick:o,children:"계좌"})]})]}),i(L,{children:[i("li",{children:[e("span",{children:"신부 아버지"}),e(B,{type:"button","data-value":"김상현,신부,국민은행 284210052682",onClick:o,children:"계좌"})]}),i("li",{children:[e("span",{children:"신부 어머니"}),e(B,{type:"button","data-value":"김나현,신부,국민은행 284240015077",onClick:o,children:"계좌"})]})]})]}),e(ii,{isShow:s,setIsShow:g,data:l})]})},ri=t.section`
    padding: 36px 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`,di=t.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`,gi=t.iframe` 
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: 8px;
`,ci=()=>i(ri,{"data-scroll":!0,children:[e(di,{children:"오리역에서 분당앤스퀘어 가는길"}),e(gi,{src:"https://www.youtube.com/embed/iVZnkDJcwrI",title:"오리역에서 분당앤스퀘어 가는길",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,frameBorder:"false"})]}),li=()=>(d.useEffect(()=>{P({threshold:.2,once:!0})},[]),i("div",{children:[e(Gt,{}),e(Tt,{}),e(ee,{}),e(jt,{}),e(Kt,{}),e(ci,{}),e(ai,{})]}));const pi=N.createRoot(document.getElementById("root"));pi.render(e(V,{children:e(W,{basename:"/wedding-card",children:e(H,{children:e(K,{path:"/",element:e(li,{})})})})}));
