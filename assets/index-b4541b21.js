import{j as R,s as t,r as l,a as I,c as M,R as U,B as F,b as P,d as O}from"./vendor-5a14a54b.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const D=R.Fragment,e=R.jsx,i=R.jsxs,H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8qm6wAAAAK3RSTlMAHPMM31v644VxPSD27ebUx5d6TxIEy8Kpn46LgmtlU0sx17y4bF9VQzAmz+I01AAAANdJREFUOMuF0tkWgiAQgGGU3HPfNTPba97//TIDkiOj/y3fOY4DZCy1QoOsZMOYg587AKuC+vArQUAHvIMa1LAhSvjnqoA1A8qfDUAUUhW4ivNAI6pafq6/iDKDgx7ZQ6YzYBOkhoH9GwGayUSUIyKGjdvI+K7MEyJc4GM8EWEL4apBXoptcUEfw1zQAngxnX4tBLhJg56FsMZRh+kKO2kbOxBVBtvucS48JqS2xX1TpNIc0RJE8j6aBdgRuV5HPiHSYnb7+CvyakH0BHlCRnvx/aJyvlv/ACJvPLhlFwb/AAAAAElFTkSuQmCC",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAATlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEoqZZAAAAGXRSTlMA84i/BJPc0Y1oqPZaVLOFDul9GBYUwKEZd6XD1AAAAKVJREFUOMu9ktsOwiAQBXcLFFqg0JvK//+oK0raGNgYY5yHE5KZB0iAj1iDtukNq7tb8Q5TFXRP71OTXGzYDnClICSGQIHmAk0BcgFSkFh+GuAw4DGVQAGoYyqBkFIkATT5VLlD35+m8J9nzpyfKZi4YGL/C+GBEG0v4MGmW17vkInG1rRVEQrRX16X6gqL2+GMyX6EJqZ4LhglH5BnA97DcoUvuQNmiz7DqYeF5QAAAABJRU5ErkJggg==",W=t.section`
    // min-height: 640px;
    padding: 36px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    text-align: center;
`,_=t.a`
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
        background: url(${N}) no-repeat center/cover;
    }
`,b=t.a`
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
        background: url(${H}) no-repeat center/cover;
    }
`,w=t.li`
    // border-bottom: 1px dotted #aeaeae;
    padding: 8px 0;
`,K=t.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 36px;
`,q=t.div`
    width: 100%;
    margin: 36px auto;
`,E=t.h3`
    display: block;
    font-size: 14px;
    font-weight: normal;
`,j=t.span`
    display: block;
`,L=t.span`
    margin-right: 8px;
`,J=t.h2`
    font-size: 22px;
    padding: 0 0 10px 0
`,Q=()=>{const n={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00",introduce:`우리 결혼합니다
준비된 자세로 배우며 살아가겠습니다

소중한 사람과
희로애락을 함께 하겠습니다.`,contact:{bridegroom:{tel:"tel:010-5101-2659",sms:"sms:010-5101-2659",parents:{father:{name:"김동필",tel:"tel:010-4321-0987",sms:"sms:010-4321-0987"},mother:{name:"백숙현",tel:"tel:010-2287-9852",sms:"sms:010-2287-9852"}}},bride:{tel:"tel:010-8900-2019",sms:"sms:010-8900-2019",parents:{father:{name:"김상현",tel:"tel:010-5141-8109",sms:"sms:010-5141-8109"},mother:{name:"김나현",tel:"tel:010-2251-4026",sms:"sms:010-2251-4026"}}}}};return i(W,{children:[e(J,{children:"축하 연락처"}),i(q,{children:[i("ul",{children:[i(w,{children:[e(L,{children:"신랑 김우준"}),e(b,{href:n.contact.bridegroom.tel}),e(_,{href:n.contact.bridegroom.sms})]}),i(w,{children:[e(L,{children:"신부 김소희"}),e(b,{href:n.contact.bride.tel}),e(_,{href:n.contact.bride.sms})]})]}),i(K,{children:[e("ul",{children:i("li",{children:[e(E,{children:"신랑측 혼주"}),i("ul",{children:[i(w,{children:[e(j,{children:"혼주 김동필"}),e(b,{href:n.contact.bridegroom.parents.father.tel}),e(_,{href:n.contact.bridegroom.parents.father.sms})]}),i(w,{children:[e(j,{children:"혼주 백숙현"}),e(b,{href:n.contact.bridegroom.parents.mother.tel}),e(_,{href:n.contact.bridegroom.parents.mother.sms})]})]})]})}),e("ul",{children:i("li",{children:[e(E,{children:"신부측 혼주"}),i("ul",{children:[i(w,{children:[e(j,{children:"혼주 김상현"}),e(b,{href:n.contact.bride.parents.father.tel}),e(_,{href:n.contact.bride.parents.father.sms})]}),i(w,{children:[e(j,{children:"혼주 김나현"}),e(b,{href:n.contact.bride.parents.mother.tel}),e(_,{href:n.contact.bride.parents.mother.sms})]})]})]})})]})]})]})},V="/wedding-card/assets/img_1-a4ac0188.jpeg",Y="/wedding-card/assets/img_10-204ee8ad.jpeg",X="/wedding-card/assets/img_11-31764165.jpeg",Z="/wedding-card/assets/img_12-657798e6.jpeg",ee="/wedding-card/assets/img_13-98a2ac28.jpeg",te="/wedding-card/assets/img_14-a9168eb5.jpeg",ie="/wedding-card/assets/img_2-6f1d3554.jpeg",ne="/wedding-card/assets/img_3-18d9c9f5.jpeg",oe="/wedding-card/assets/img_4-0b2a4ae3.jpeg",se="/wedding-card/assets/img_5-d161d436.jpeg",ae="/wedding-card/assets/img_6-3efe16b5.jpeg",re="/wedding-card/assets/img_7-f218db53.jpeg",de="/wedding-card/assets/img_8-9fdc64f4.jpeg",ce="/wedding-card/assets/img_9-d0987053.jpeg",le="/wedding-card/assets/img_1-f2fd50ed.jpeg",ge="/wedding-card/assets/img_10-07ef3720.jpeg",pe="/wedding-card/assets/img_11-23b737a3.jpeg",me="/wedding-card/assets/img_12-bbd14a5b.jpeg",Ae="/wedding-card/assets/img_13-00b68755.jpeg",he="/wedding-card/assets/img_14-6f8687a2.jpeg",ue="/wedding-card/assets/img_2-8701a851.jpeg",fe="/wedding-card/assets/img_3-5d0c5887.jpeg",xe="/wedding-card/assets/img_4-096dadeb.jpeg",_e="/wedding-card/assets/img_5-2f5549e0.jpeg",be="/wedding-card/assets/img_6-7d280603.jpeg",we="/wedding-card/assets/img_7-f89f825a.jpeg",ve="/wedding-card/assets/img_8-78cd6d2c.jpeg",ye="/wedding-card/assets/img_9-df12a285.jpeg",je=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14"],ke=t.figure`
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
    
`,Be=t.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    // display: flex;
    width: 100%;
    height: 100%;
`,Ce=t.section`
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
`,Se=t.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
    cursor: pointer;
`,$e=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,Re=t.div`
    position: absolute;
    height: 100%;
    display: flex;
`,Ie=t.button`
    width: 50px;
    height: 50px;
    position:absolute;
    right: 0;
    top: 0;
    text-indent: -9999px;
    padding: 0;
    background: #fff;
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

`,Ee=t.div`
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
`,Le=t.button`
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
`,Ge=t.button`
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
`,Te=({isSlideShow:n,setIsSlideShow:d,currentSlideNum:o})=>{const a=l.useRef([]),s=l.useRef(null),[r,g]=l.useState(0);l.useEffect(()=>{if(a.current[0]){const c=a.current[0].width,p=o===1?0:c*(o-1)*-1;g(p),console.log("currentSlideNum => ",o)}},[n]);const u=()=>d(!1),m=()=>{if(a.current[0]&&s.current){const c=a.current[0].width;if(r===0){const p=s.current.getBoundingClientRect().width*-1+c;g(p)}else{const p=r+c;g(p)}}},f=()=>{if(a.current[0]&&s.current){const c=a.current[0].width;if(console.log("imgWidth => ",c),s.current.getBoundingClientRect().width<=Math.abs(r)+c)g(0);else{const p=r-c;g(p)}}},A=je.map((c,p)=>e(ke,{children:e("img",{ref:h=>a.current[p]=h,src:(()=>new URL(Object.assign({"../assets/images/img_1.jpeg":le,"../assets/images/img_10.jpeg":ge,"../assets/images/img_11.jpeg":pe,"../assets/images/img_12.jpeg":me,"../assets/images/img_13.jpeg":Ae,"../assets/images/img_14.jpeg":he,"../assets/images/img_2.jpeg":ue,"../assets/images/img_3.jpeg":fe,"../assets/images/img_4.jpeg":xe,"../assets/images/img_5.jpeg":_e,"../assets/images/img_6.jpeg":be,"../assets/images/img_7.jpeg":we,"../assets/images/img_8.jpeg":ve,"../assets/images/img_9.jpeg":ye})[`../assets/images/${c}.jpeg`],self.location).href)(),"data-value":c,alt:"갤러리 이미지"})},p));return n?i(Be,{children:[i(Ce,{children:[e($e,{children:"이미지 팝업창"}),e(Re,{ref:s,style:{left:r},children:A}),i(Ee,{children:[e(Le,{onClick:m,children:"이전"}),e(Ge,{onClick:f,children:"다음"})]}),e(Ie,{onClick:u,children:"팝업창 닫기"})]}),e(Se,{onClick:u})]}):e(D,{})},ze=t.section`
    padding: 36px 0;
`,De=t.figure`
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
`,Me=t.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 150px;

    width: 86%;
    margin: 36px auto;
    @media(min-width: 361px) {
        grid-auto-rows: 200px;
    }
`,Ue=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,Fe=t.button`
    padding: 8px 15px;
    border-radius: 30px;
    margin: auto;
    display: block;
    color: #f5f5f5;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: #000;
`,Pe=["img_1","img_2","img_3","img_4"],Oe=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12","img_13","img_14"],He=()=>{const n=l.useRef([]),[d,o]=l.useState(Pe),[a,s]=l.useState(!1),[r,g]=l.useState(0);l.useEffect(()=>{document.documentElement.style.overflow=a?"hidden":"auto"},[a]),l.useEffect(()=>{window.addEventListener("load",()=>{n&&n.current&&n.current.length!==0&&n.current.map(A=>{const c=A,p=c.naturalWidth;c.naturalHeight>p&&c.setAttribute("class","is-height-long")})})},[]);const u=A=>{o(Oe),A.target.remove()},m=A=>{const c=A.target.getAttribute("data-value");s(!0),g(Number(c.split("img_")[1]))},f=d.map((A,c)=>e(De,{children:e("img",{ref:y=>n.current[c]=y,src:(()=>new URL(Object.assign({"../assets/images/thumbnail/img_1.jpeg":V,"../assets/images/thumbnail/img_10.jpeg":Y,"../assets/images/thumbnail/img_11.jpeg":X,"../assets/images/thumbnail/img_12.jpeg":Z,"../assets/images/thumbnail/img_13.jpeg":ee,"../assets/images/thumbnail/img_14.jpeg":te,"../assets/images/thumbnail/img_2.jpeg":ie,"../assets/images/thumbnail/img_3.jpeg":ne,"../assets/images/thumbnail/img_4.jpeg":oe,"../assets/images/thumbnail/img_5.jpeg":se,"../assets/images/thumbnail/img_6.jpeg":ae,"../assets/images/thumbnail/img_7.jpeg":re,"../assets/images/thumbnail/img_8.jpeg":de,"../assets/images/thumbnail/img_9.jpeg":ce})[`../assets/images/thumbnail/${A}.jpeg`],self.location).href)(),"data-value":A,onClick:m,alt:"갤러리 이미지"})},c));return i(ze,{children:[e(Ue,{children:"갤러리 1"}),e(Me,{children:f}),e(Fe,{onClick:u,children:"갤러리 더보기"}),e(Te,{isSlideShow:a,setIsSlideShow:s,currentSlideNum:r})]})},Ne=async n=>await I({url:"/api/create/guestbook",baseURL:"http://127.0.0.1:8000",method:"post",headers:{"content-Type":"application/json"},maxRedirects:2,data:{...n}}),We=async()=>await I({url:"/api/read/guestbook",baseURL:"http://127.0.0.1:8000",method:"get",headers:{"content-Type":"application/json"},maxRedirects:2}),Ke=async n=>await I({url:"/api/delete/guestbook",baseURL:"http://127.0.0.1:8000",method:"post",headers:{"content-Type":"application/json"},maxRedirects:2,data:{id:n}}),qe={id:1,name:"홍길동",content:"신랑, 신부에게 축하의 메세지를 남겨주세요 :)",password:""},G={name:"",content:"",password:""},Je=()=>{const[n,d]=l.useState([qe]),[o,a]=l.useState(G),[s,r]=l.useState(!1),[g,u]=l.useState(!1),m=l.useRef(null);l.useRef(null),l.useRef(null);const f=()=>{We().then(h=>d(h.data.data))},A=h=>{const x=prompt("내용을 삭제하시려면, 비밀번호를 입력해주세요."),v=n.filter(B=>B.id===h);x===v[0].password?(Ke(h),f()):x&&alert("비밀번호가 맞지 않습니다 :(")};l.useEffect(()=>{f(),console.log("guestBooks => ",n)},[]),l.useEffect(()=>{const{name:h,content:x,password:v}=o;u(!!(h&&x&&v))},[o]);const c=h=>{const x=h.target,v=x.value,B=x.name;a({...o,[B]:v})},p=()=>{a(G),r(!1),m.current&&m.current.focus(),f()};return{handleSubmit:async h=>{h.preventDefault(),r(!0),g&&Ne(o).then(x=>{x.data.result&&(console.log("정상적으로 입력이 완료되었습니다."),p())})},handleChange:c,isSubmitEnter:s,inputDatas:o,guestBooks:n,nameRef:m,onClickDeleteBtn:A}},Qe=t.section`
    padding: 36px 16px;
    font-size: 16px;
    background: #f7f7f7;
`,Ve=t.div`
    // position: fixed;
    // bottom: 0;
    // padding: 16px;
    // margin-left: -16px;
    margin: 16px auto;
    width: 100%;
    max-width: 500px;
    background: #f7f7f7;
`,Ye=t.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,Xe=t.textarea`
    width: 100%;
    resize: none;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,Ze=t.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #000;
    box-sizing: border-box;
`,et=t.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`,tt=t.button`
    height: 42px;
    background: #000;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`,it=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,C=t.div`
    font-size: 15px;
    padding: 0 4px 8px 4px;
    word-break: keep-all;
`,nt=t.div`
    position:relative;
    border: 1px solid #e7e7e7;
    background: #fff;
    padding: 8px;
    margin-top: 8px;
`,ot=t.ul`
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
`,st=t.button`
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
`,S={name:"이름을 입력해주세요.",content:"내용을 입력해주세요.",password:"비밀번호를 입력해주세요. (메세지 삭제할 때 필요)"},at=()=>{const{handleSubmit:n,handleChange:d,isSubmitEnter:o,inputDatas:a,guestBooks:s,nameRef:r,onClickDeleteBtn:g}=Je(),u=l.useRef(null);return i(Qe,{ref:u,children:[e(it,{children:"게스트 북"}),e(Ve,{children:i("form",{onSubmit:n,children:[i("div",{children:[e(Ye,{name:"name",type:"text",placeholder:"이름",onChange:d,value:a.name,ref:r}),e(C,{children:o&&a.name===""?S.name:""})]}),i("div",{children:[e(Xe,{name:"content",rows:2,placeholder:"축하 내용을 입력해주세요!",onChange:d,value:a.content}),e(C,{children:o&&a.content===""?S.content:""})]}),i(et,{children:[i("div",{children:[e(Ze,{name:"password",type:"password",placeholder:"비밀번호 입력",onChange:d,value:a.password}),e(C,{children:o&&a.password===""?S.password:""})]}),e(tt,{type:"submit",children:"입력"})]})]})}),e("section",{children:s.map((m,f)=>i(nt,{children:[i(ot,{children:[i("li",{children:["이름 : ",m.name]}),e("li",{children:m.content})]}),m.id===1?e(D,{}):e(st,{type:"button",onClick:()=>g(m.id),children:"삭제"})]},`guest-${f}`))})]})},rt=t.section`
    padding: 80px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #5e5e5e;
`,dt=t.p`
    text-align: center;
    margin-bottom: 46px;
    line-height: 1.8;
`,ct=t.ul`
    display:flex;
    flex-direction: column;
    color: #252525;
`,lt=t.p`
    display: flex;
    align-items: center;
    margin-left: 12px;
`,gt=t.em`
    font-style: initial;
    margin-left: 8px;
    color: #252525;
`,pt=t.div`
    display: flex;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`,k=t.em`
    font-style: initial;
    font-weight: bold;
    color: #252525;
`,mt=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,At=()=>i(rt,{children:[e(mt,{children:"소개글"}),i(dt,{children:[e(k,{children:"우"}),"리 결혼합니다.",e("br",{}),e(k,{children:"준"}),"비된 자세로 배우며 살아가겠습니다.",e("br",{}),e("br",{}),e(k,{children:"소"}),"중한 사람과",e("br",{}),e(k,{children:"희"}),"로애락을 함께 하겠습니다."]}),[{name:"김우준",mother:"백숙현",father:"김동필",rank:"차남"},{name:"김소희",mother:"김나현",father:"김상현",rank:"장녀"}].map((d,o)=>i(pt,{children:[i(ct,{children:[e("li",{children:d.father}),e("li",{children:d.mother})]}),i(lt,{children:["의 ",d.rank," ",e(gt,{children:d.name})]})]},o))]}),ht="/wedding-card/assets/bg-c7833e65.jpg",ut=t.section`
    min-height: 640px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: url(${ht}) no-repeat center/cover;
`,ft=t.strong`
    font-size: 20px;
`,xt=t.span`
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
`,_t=t.p`
    margin: 16px auto;
`,bt=t.p`
    font-style: italic;
`,wt=t.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`,vt=()=>{const n={bridegroom:"김우준",bride:"김소희",place:"분당앤스퀘어 4층 컨벤션홀",date:"2023-06-10 12:00"},d=()=>{const o=new Date(n.date),a=new Date,s=o.getTime()-a.getTime(),r=Math.floor(s/(1e3*60*60*24)),g=o.getHours()<12?"오전":"오후",u=o.getMinutes()?`${o.getMinutes()}분`:"",m=`${g} ${o.getHours()}시 ${u}`;return{weddingDay:`${o.getFullYear()}년 ${o.getMonth()+1}월 ${o.getDate()}일 ${m}`,dday:r}};return i(ut,{children:[e(wt,{children:"메인페이지"}),i(ft,{children:["우준",e(xt,{children:"and"}),"소희"]}),i(_t,{children:[d().weddingDay,e("br",{}),n.place]}),i(bt,{children:["D - ",d().dday]})]})},yt=t.div`
    padding: 16px;
`,jt=t.a`
    display: block;
    z-index: 2;
    position: relative;
    cursor: pointer;
`,kt=t.div`
    border: 1px solid #cecece;
    border-radius: 8px;
`,Bt={center:new naver.maps.LatLng(37.34,127.1067),scaleControl:!1,mapDataControl:!1,zoom:18,draggable:!1,scrollWheel:!1},Ct=()=>{const n=l.useRef(null);return l.useEffect(()=>{if(n.current){const o=new naver.maps.Map(n.current,Bt);new naver.maps.Marker({position:o.getCenter(),map:o})}},[]),e(yt,{children:e(jt,{href:"https://naver.me/xdIkk34F",target:"_blank",children:e(kt,{ref:n,style:{width:"100%",height:"400px"},children:"지도"})})})},St=t.section`
    background: #f7f7f7;
    padding: 36px 0;
`,$t=t.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`,$=t.ul`
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
`,T=t.h3`
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: bold;
`,z=t.div`
    margin-top: 20px;
`,Rt=t.div`
    padding: 16px;
`,It=()=>i(St,{children:[e($t,{children:"오시는 길"}),e(Ct,{}),i(Rt,{children:[i($,{children:[e("li",{children:"분당앤스퀘어 4층 컨벤션홀"}),e("li",{children:"경기 성남시 분당구 탄천상로151번길 20 4층"})]}),i(z,{children:[e(T,{children:"지하철"}),e($,{children:e("li",{children:"(수인분당) 오리역 6번 출구에서 도보 3분"})})]}),i(z,{children:[e(T,{children:"자가용"}),i($,{children:[e("li",{children:'내비게이션 이용 시 : "분당앤스퀘어" 를 입력해주세요.'}),e("li",{children:"신 주소 : 경기 성남시 분당구 탄천상로151번길 20"}),e("li",{children:"구 주소 : 경기 성남시 분당구 구미동 159"}),e("li",{children:"주차장 : 분당앤스퀘어 지하 3, 4층에 주차하시면 됩니다."})]})]})]})]}),Et=()=>i("div",{children:[e(vt,{}),e(At,{}),e(Q,{}),e(He,{}),e(It,{}),e(at,{})]});const Lt=M.createRoot(document.getElementById("root"));Lt.render(e(U,{children:e(F,{basename:"/wedding-card",children:e(P,{children:e(O,{path:"/",element:e(Et,{})})})})}));
