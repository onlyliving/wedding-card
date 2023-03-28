import{j as E,s as t,r as l,a as M,c as H,R as N,B as W,b as K,d as X}from"./vendor-5a14a54b.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const P=E.Fragment,e=E.jsx,n=E.jsxs,q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8qm6wAAAAK3RSTlMAHPMM31v644VxPSD27ebUx5d6TxIEy8Kpn46LgmtlU0sx17y4bF9VQzAmz+I01AAAANdJREFUOMuF0tkWgiAQgGGU3HPfNTPba97//TIDkiOj/y3fOY4DZCy1QoOsZMOYg587AKuC+vArQUAHvIMa1LAhSvjnqoA1A8qfDUAUUhW4ivNAI6pafq6/iDKDgx7ZQ6YzYBOkhoH9GwGayUSUIyKGjdvI+K7MEyJc4GM8EWEL4apBXoptcUEfw1zQAngxnX4tBLhJg56FsMZRh+kKO2kbOxBVBtvucS48JqS2xX1TpNIc0RJE8j6aBdgRuV5HPiHSYnb7+CvyakH0BHlCRnvx/aJyvlv/ACJvPLhlFwb/AAAAAElFTkSuQmCC",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAATlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEoqZZAAAAGXRSTlMA84i/BJPc0Y1oqPZaVLOFDul9GBYUwKEZd6XD1AAAAKVJREFUOMu9ktsOwiAQBXcLFFqg0JvK//+oK0raGNgYY5yHE5KZB0iAj1iDtukNq7tb8Q5TFXRP71OTXGzYDnClICSGQIHmAk0BcgFSkFh+GuAw4DGVQAGoYyqBkFIkATT5VLlD35+m8J9nzpyfKZi4YGL/C+GBEG0v4MGmW17vkInG1rRVEQrRX16X6gqL2+GMyX6EJqZ4LhglH5BnA97DcoUvuQNmiz7DqYeF5QAAAABJRU5ErkJggg==",Q=t.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    text-align: center;
`,k=t.a`
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
`,C=t.a`
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
        background: url(${q}) no-repeat center/cover;
    }
`,B=t.li`
    // border-bottom: 1px dotted #aeaeae;
    padding: 8px 0;
`,V=t.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 36px;
`,Y=t.div`
    width: 100%;
    margin: 36px auto;
`,L=t.h3`
    display: block;
    font-size: 14px;
    font-weight: normal;
`,S=t.span`
    display: block;
`,z=t.span`
    margin-right: 8px;
`,Z=t.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`,ee=()=>{const i={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00",introduce:`우리 결혼합니다
준비된 자세로 배우며 살아가겠습니다

소중한 사람과
희로애락을 함께 하겠습니다.`,contact:{bridegroom:{tel:"tel:010-5101-2659",sms:"sms:010-5101-2659",parents:{father:{name:"김동필",tel:"tel:010-4321-0987",sms:"sms:010-4321-0987"},mother:{name:"백숙현",tel:"tel:010-2287-9852",sms:"sms:010-2287-9852"}}},bride:{tel:"tel:010-8900-2019",sms:"sms:010-8900-2019",parents:{father:{name:"김상현",tel:"tel:010-5141-8109",sms:"sms:010-5141-8109"},mother:{name:"김나현",tel:"tel:010-2251-4026",sms:"sms:010-2251-4026"}}}}};return n(Q,{children:[e(Z,{children:"축하 연락처"}),n(Y,{children:[n("ul",{children:[n(B,{children:[e(z,{children:"신랑 김우준"}),e(C,{href:i.contact.bridegroom.tel}),e(k,{href:i.contact.bridegroom.sms})]}),n(B,{children:[e(z,{children:"신부 김소희"}),e(C,{href:i.contact.bride.tel}),e(k,{href:i.contact.bride.sms})]})]}),n(V,{children:[e("ul",{children:n("li",{children:[e(L,{children:"신랑측 혼주"}),n("ul",{children:[n(B,{children:[e(S,{children:"혼주 김동필"}),e(C,{href:i.contact.bridegroom.parents.father.tel}),e(k,{href:i.contact.bridegroom.parents.father.sms})]}),n(B,{children:[e(S,{children:"혼주 백숙현"}),e(C,{href:i.contact.bridegroom.parents.mother.tel}),e(k,{href:i.contact.bridegroom.parents.mother.sms})]})]})]})}),e("ul",{children:n("li",{children:[e(L,{children:"신부측 혼주"}),n("ul",{children:[n(B,{children:[e(S,{children:"혼주 김상현"}),e(C,{href:i.contact.bride.parents.father.tel}),e(k,{href:i.contact.bride.parents.father.sms})]}),n(B,{children:[e(S,{children:"혼주 김나현"}),e(C,{href:i.contact.bride.parents.mother.tel}),e(k,{href:i.contact.bride.parents.mother.sms})]})]})]})})]})]})]})},te="/wedding-card/assets/img_1-a4ac0188.jpeg",ne="/wedding-card/assets/img_10-204ee8ad.jpeg",ie="/wedding-card/assets/img_11-31764165.jpeg",oe="/wedding-card/assets/img_12-657798e6.jpeg",se="/wedding-card/assets/img_13-98a2ac28.jpeg",ae="/wedding-card/assets/img_14-a9168eb5.jpeg",re="/wedding-card/assets/img_2-6f1d3554.jpeg",de="/wedding-card/assets/img_3-18d9c9f5.jpeg",ce="/wedding-card/assets/img_4-0b2a4ae3.jpeg",le="/wedding-card/assets/img_5-d161d436.jpeg",ge="/wedding-card/assets/img_6-3efe16b5.jpeg",pe="/wedding-card/assets/img_7-f218db53.jpeg",me="/wedding-card/assets/img_8-9fdc64f4.jpeg",he="/wedding-card/assets/img_9-d0987053.jpeg",Ae="/wedding-card/assets/img_1-f2fd50ed.jpeg",ue="/wedding-card/assets/img_10-07ef3720.jpeg",fe="/wedding-card/assets/img_11-23b737a3.jpeg",xe="/wedding-card/assets/img_12-bbd14a5b.jpeg",_e="/wedding-card/assets/img_13-00b68755.jpeg",be="/wedding-card/assets/img_14-6f8687a2.jpeg",we="/wedding-card/assets/img_2-8701a851.jpeg",ve="/wedding-card/assets/img_3-5d0c5887.jpeg",ye="/wedding-card/assets/img_4-096dadeb.jpeg",je="/wedding-card/assets/img_5-2f5549e0.jpeg",ke="/wedding-card/assets/img_6-7d280603.jpeg",Ce="/wedding-card/assets/img_7-f89f825a.jpeg",Be="/wedding-card/assets/img_8-78cd6d2c.jpeg",Se="/wedding-card/assets/img_9-df12a285.jpeg",Re=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14"],Te=t.figure`
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
    
`,$e=t.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    // display: flex;
    width: 100%;
    height: 100%;
`,Ie=t.section`
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
`,Ee=t.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
    cursor: pointer;
`,Me=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,Le=t.div`
    // z-index: 2;
    position: absolute;
    height: 100%;
    display: flex;
`,ze=t.button`
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

`,Ge=t.div`
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
`,De=t.button`
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
`,Ue=t.button`
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
`,Pe=({isSlideShow:i,setIsSlideShow:d,currentSlideNum:o})=>{const a=l.useRef([]),s=l.useRef(null),[r,g]=l.useState(0),A=()=>{if(a.current[0]&&s.current){const c=a.current[0].getBoundingClientRect().width,_=s.current.getBoundingClientRect().width;if(r===0){const j=_*-1+c;g(j)}else{const j=r+c;g(j)}}},m=()=>{if(a.current[0]&&s.current){const c=a.current[0].getBoundingClientRect().width;if(s.current.getBoundingClientRect().width<=Math.abs(r)+c)g(0);else{const j=r-c;g(j)}}};l.useEffect(()=>{if(i&&a.current[0]){const c=a.current[0].getBoundingClientRect().width,_=o===1?0:c*(o-1)*-1;g(_)}},[i]);let u=0,b=0;const f=c=>{u=c.pageX},h=(c,_)=>{c!=_&&(c<_?A():m())},w=c=>{b=c.pageX,h(u,b)};let p=!1;const x=c=>{if(c.touches.length>1){p=!0,c.isPropagationStopped();return}p=!1,u=c.touches[0].pageX},v=c=>{p||(b=c.changedTouches[0].pageX,h(u,b))},y=()=>d(!1),F=Re.map((c,_)=>e(Te,{children:e("img",{ref:O=>a.current[_]=O,src:(()=>new URL(Object.assign({"../assets/images/img_1.jpeg":Ae,"../assets/images/img_10.jpeg":ue,"../assets/images/img_11.jpeg":fe,"../assets/images/img_12.jpeg":xe,"../assets/images/img_13.jpeg":_e,"../assets/images/img_14.jpeg":be,"../assets/images/img_2.jpeg":we,"../assets/images/img_3.jpeg":ve,"../assets/images/img_4.jpeg":ye,"../assets/images/img_5.jpeg":je,"../assets/images/img_6.jpeg":ke,"../assets/images/img_7.jpeg":Ce,"../assets/images/img_8.jpeg":Be,"../assets/images/img_9.jpeg":Se})[`../assets/images/${c}.jpeg`],self.location).href)(),"data-value":c,alt:"갤러리 이미지"})},_));return i?n($e,{children:[n(Ie,{children:[e(Me,{children:"이미지 팝업창"}),e(Le,{ref:s,style:{left:r},onMouseDown:f,onMouseUp:w,onTouchStart:x,onTouchEnd:v,children:F}),n(Ge,{children:[e(De,{onClick:A,children:"이전"}),e(Ue,{onClick:m,children:"다음"})]}),e(ze,{onClick:y,children:"팝업창 닫기"})]}),e(Ee,{onClick:y})]}):e(P,{})},Fe=t.section`
    padding: 36px 0;
`,Oe=t.figure`
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
        height: 100%;
        width: auto;
    }

    & > img.is-height-long {
        width: 100%;
        height: auto;
    }

    // &:nth-child(2n-1) {
    //     grid-row-end: span 2;
    // }
`,He=t.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 150px;

    width: 86%;
    margin: 36px auto;
    @media(min-width: 361px) {
        grid-auto-rows: 200px;
    }
`,Ne=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,We=t.button`
    padding: 8px 15px;
    border-radius: 30px;
    margin: auto;
    display: block;
    color: #f5f5f5;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: #000;
`,Ke=["img_1","img_2","img_3","img_4"],Xe=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14"],qe=()=>{const i=l.useRef([]),[d,o]=l.useState(Ke),[a,s]=l.useState(!1),[r,g]=l.useState(0);l.useEffect(()=>{document.documentElement.style.overflow=a?"hidden":"auto"},[a]);const A=()=>{i&&i.current&&i.current.length!==0&&i.current.map(f=>{const h=f,w=h.naturalWidth;h.naturalHeight>w&&h.setAttribute("class","is-height-long")})};l.useEffect(()=>{document.readyState==="complete"?A():window.addEventListener("load",A)},[]);const m=f=>{o(Xe),f.target.remove()},u=f=>{const h=f.target.getAttribute("data-value");s(!0);const w=Number(h.split("img_")[1]);g(w)},b=d.map((f,h)=>e(Oe,{children:e("img",{ref:p=>i.current[h]=p,src:(()=>new URL(Object.assign({"../assets/images/thumbnail/img_1.jpeg":te,"../assets/images/thumbnail/img_10.jpeg":ne,"../assets/images/thumbnail/img_11.jpeg":ie,"../assets/images/thumbnail/img_12.jpeg":oe,"../assets/images/thumbnail/img_13.jpeg":se,"../assets/images/thumbnail/img_14.jpeg":ae,"../assets/images/thumbnail/img_2.jpeg":re,"../assets/images/thumbnail/img_3.jpeg":de,"../assets/images/thumbnail/img_4.jpeg":ce,"../assets/images/thumbnail/img_5.jpeg":le,"../assets/images/thumbnail/img_6.jpeg":ge,"../assets/images/thumbnail/img_7.jpeg":pe,"../assets/images/thumbnail/img_8.jpeg":me,"../assets/images/thumbnail/img_9.jpeg":he})[`../assets/images/thumbnail/${f}.jpeg`],self.location).href)(),"data-value":f,onClick:u,alt:"갤러리 이미지"})},h));return n(Fe,{children:[e(Ne,{children:"갤러리"}),e(He,{children:b}),e(We,{onClick:m,children:"갤러리 더보기"}),e(Pe,{isSlideShow:a,setIsSlideShow:s,currentSlideNum:r})]})},Je=async i=>await M({url:"/api/create/guestbook",baseURL:"http://127.0.0.1:8000",method:"post",headers:{"content-Type":"application/json"},maxRedirects:2,data:{...i}}),Qe=async()=>await M({url:"/api/read/guestbook",baseURL:"http://127.0.0.1:8000",method:"get",headers:{"content-Type":"application/json"},maxRedirects:2}),Ve=async i=>await M({url:"/api/delete/guestbook",baseURL:"http://127.0.0.1:8000",method:"post",headers:{"content-Type":"application/json"},maxRedirects:2,data:{id:i}}),Ye={id:1,name:"홍길동",content:"신랑, 신부에게 축하의 메세지를 남겨주세요 :)",password:""},G={name:"",content:"",password:""},Ze=()=>{const[i,d]=l.useState([Ye]),[o,a]=l.useState(G),[s,r]=l.useState(!1),[g,A]=l.useState(!1),m=l.useRef(null);l.useRef(null),l.useRef(null);const u=()=>{Qe().then(p=>d(p.data.data))},b=p=>{const x=prompt("내용을 삭제하시려면, 비밀번호를 입력해주세요."),v=i.filter(y=>y.id===p);x===v[0].password?(Ve(p),u()):x&&alert("비밀번호가 맞지 않습니다 :(")};l.useEffect(()=>{u(),console.log("guestBooks => ",i)},[]),l.useEffect(()=>{const{name:p,content:x,password:v}=o;A(!!(p&&x&&v))},[o]);const f=p=>{const x=p.target,v=x.value,y=x.name;a({...o,[y]:v})},h=()=>{a(G),r(!1),m.current&&m.current.focus(),u()};return{handleSubmit:async p=>{p.preventDefault(),r(!0),g&&Je(o).then(x=>{x.data.result&&(console.log("정상적으로 입력이 완료되었습니다."),h())})},handleChange:f,isSubmitEnter:s,inputDatas:o,guestBooks:i,nameRef:m,onClickDeleteBtn:b}},et=t.section`
    padding: 36px 16px;
    font-size: 16px;
    background: #f7f7f7;
`,tt=t.div`
    // position: fixed;
    // bottom: 0;
    // padding: 16px;
    // margin-left: -16px;
    margin: 16px auto;
    width: 100%;
    max-width: 500px;
    background: #f7f7f7;
`,nt=t.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,it=t.textarea`
    width: 100%;
    resize: none;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,ot=t.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,st=t.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`,at=t.button`
    height: 42px;
    background: #000;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`,rt=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,T=t.div`
    font-size: 15px;
    padding: 0 4px 8px 4px;
    word-break: keep-all;
`,dt=t.div`
    position:relative;
    border: 1px solid #e7e7e7;
    background: #fff;
    padding: 8px;
    margin-top: 8px;
`,ct=t.ul`
    & > li {
        position: relative;
        padding-left: 10px;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        &:before {
            content: '-';
            position:absolute;
            left:0;
        }
    }
`,lt=t.button`
    width: 30px;
    height: 30px;
    padding: 0;
    position: absolute;
    right: 8px;
    top: 8px;
    text-indent: -9999px;
    &:before,
    &:after {
        content: '';
        width: 13px;
        height 1px;
        background: #000;
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
`,$={name:"이름을 입력해주세요.",content:"내용을 입력해주세요.",password:"비밀번호를 입력해주세요. (메세지 삭제할 때 필요)"},gt=()=>{const{handleSubmit:i,handleChange:d,isSubmitEnter:o,inputDatas:a,guestBooks:s,nameRef:r,onClickDeleteBtn:g}=Ze(),A=l.useRef(null);return n(et,{ref:A,children:[e(rt,{children:"게스트 북"}),e(tt,{children:n("form",{onSubmit:i,children:[n("div",{children:[e(nt,{name:"name",type:"text",placeholder:"이름",onChange:d,value:a.name,ref:r}),e(T,{children:o&&a.name===""?$.name:""})]}),n("div",{children:[e(it,{name:"content",rows:2,placeholder:"축하 내용을 입력해주세요!",onChange:d,value:a.content}),e(T,{children:o&&a.content===""?$.content:""})]}),n(st,{children:[n("div",{children:[e(ot,{name:"password",type:"password",placeholder:"비밀번호 입력",onChange:d,value:a.password}),e(T,{children:o&&a.password===""?$.password:""})]}),e(at,{type:"submit",children:"입력"})]})]})}),e("section",{children:s.map((m,u)=>n(dt,{children:[n(ct,{children:[n("li",{children:["이름 : ",m.name]}),e("li",{children:m.content})]}),m.id===1?e(P,{}):e(lt,{type:"button",onClick:()=>g(m.id),children:"삭제"})]},`guest-${u}`))})]})},pt=t.section`
    padding: 80px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #5e5e5e;
`,mt=t.p`
    text-align: center;
    margin-bottom: 46px;
    line-height: 1.8;
`,ht=t.ul`
    display:flex;
    flex-direction: column;
    color: #252525;
`,At=t.p`
    display: flex;
    align-items: center;
    margin-left: 12px;
`,ut=t.em`
    font-style: initial;
    margin-left: 8px;
    color: #252525;
`,ft=t.div`
    display: flex;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`,R=t.em`
    font-style: initial;
    font-weight: bold;
    color: #252525;
`,xt=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,_t=()=>n(pt,{children:[e(xt,{children:"소개글"}),n(mt,{children:[e(R,{children:"우"}),"리 결혼합니다.",e("br",{}),e(R,{children:"준"}),"비된 자세로 배우며 살아가겠습니다.",e("br",{}),e("br",{}),e(R,{children:"소"}),"중한 사람과",e("br",{}),e(R,{children:"희"}),"로애락을 함께 하겠습니다."]}),[{name:"김우준",mother:"백숙현",father:"김동필",rank:"차남"},{name:"김소희",mother:"김나현",father:"김상현",rank:"장녀"}].map((d,o)=>n(ft,{children:[n(ht,{children:[e("li",{children:d.father}),e("li",{children:d.mother})]}),n(At,{children:["의 ",d.rank," ",e(ut,{children:d.name})]})]},o))]}),bt="/wedding-card/assets/bg-c7833e65.jpg",wt=t.section`
    min-height: 640px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: url(${bt}) no-repeat center/cover;
`,vt=t.strong`
    font-size: 20px;
`,yt=t.span`
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
`,jt=t.p`
    margin: 16px auto;
`,kt=t.p`
    font-style: italic;
`,Ct=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,Bt=()=>{const i={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00"},d=()=>{const o=new Date(i.date),a=new Date,s=o.getTime()-a.getTime(),r=Math.floor(s/(1e3*60*60*24)),g=o.getHours()<12?"오전":"오후",A=o.getMinutes()?`${o.getMinutes()}분`:"",m=`${g} ${o.getHours()}시 ${A}`;return{weddingDay:`${o.getFullYear()}년 ${o.getMonth()+1}월 ${o.getDate()}일 ${m}`,dday:r}};return n(wt,{children:[e(Ct,{children:"메인페이지"}),n(vt,{children:["우준",e(yt,{children:"and"}),"소희"]}),n(jt,{children:[d().weddingDay,e("br",{}),i.place]}),n(kt,{children:["D - ",d().dday]})]})},St=t.div`
    padding: 16px;
`,Rt=t.a`
    display: block;
    z-index: 2;
    position: relative;
    cursor: pointer;
`,Tt=t.div`
    border: 1px solid #cecece;
    border-radius: 8px;
`,$t={center:new naver.maps.LatLng(37.34,127.1067),scaleControl:!1,mapDataControl:!1,zoom:18,draggable:!1,scrollWheel:!1},It=()=>{const i=l.useRef(null);return l.useEffect(()=>{if(i.current){const o=new naver.maps.Map(i.current,$t);new naver.maps.Marker({position:o.getCenter(),map:o})}},[]),e(St,{children:e(Rt,{href:"https://naver.me/xdIkk34F",target:"_blank",children:e(Tt,{ref:i,style:{width:"100%",height:"400px"},children:"지도"})})})},Et=t.section`
    background: #f7f7f7;
    padding: 36px 0;
`,Mt=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,I=t.ul`
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
`,D=t.h3`
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: bold;
`,U=t.div`
    margin-top: 20px;
`,Lt=t.div`
    padding: 16px;
`,zt=()=>n(Et,{children:[e(Mt,{children:"오시는 길"}),e(It,{}),n(Lt,{children:[n(I,{children:[e("li",{children:"분당앤스퀘어 4층 컨벤션홀"}),e("li",{children:"경기 성남시 분당구 탄천상로151번길 20 4층"})]}),n(U,{children:[e(D,{children:"지하철"}),e(I,{children:e("li",{children:"(수인분당) 오리역 6번 출구에서 도보 3분"})})]}),n(U,{children:[e(D,{children:"자가용"}),n(I,{children:[e("li",{children:'내비게이션 이용 시 : "분당앤스퀘어" 를 입력해주세요.'}),e("li",{children:"신 주소 : 경기 성남시 분당구 탄천상로151번길 20"}),e("li",{children:"구 주소 : 경기 성남시 분당구 구미동 159"}),e("li",{children:"주차장 : 분당앤스퀘어 지하 3, 4층에 주차하시면 됩니다."})]})]})]})]}),Gt=()=>n("div",{children:[e(Bt,{}),e(_t,{}),e(ee,{}),e(qe,{}),e(zt,{}),e(gt,{})]});const Dt=H.createRoot(document.getElementById("root"));Dt.render(e(N,{children:e(W,{basename:"/wedding-card",children:e(K,{children:e(X,{path:"/",element:e(Gt,{})})})})}));
