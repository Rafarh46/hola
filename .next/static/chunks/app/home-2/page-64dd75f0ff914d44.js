(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{840:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,3635)),Promise.resolve().then(r.bind(r,972)),Promise.resolve().then(r.bind(r,2706)),Promise.resolve().then(r.bind(r,7708)),Promise.resolve().then(r.bind(r,1300)),Promise.resolve().then(r.t.bind(r,1751,23)),Promise.resolve().then(r.bind(r,2686)),Promise.resolve().then(r.bind(r,5265)),Promise.resolve().then(r.bind(r,23)),Promise.resolve().then(r.bind(r,5936)),Promise.resolve().then(r.bind(r,8245)),Promise.resolve().then(r.bind(r,2335)),Promise.resolve().then(r.bind(r,1554)),Promise.resolve().then(r.bind(r,5207)),Promise.resolve().then(r.bind(r,7290))},2706:function(e,t,r){"use strict";r.d(t,{TeamCard:function(){return c}});var i=r(7437),a=r(7327),n=r(8932),s=r(6648),l=r(2265),o=r(4018);let d=(0,n.cn)("max-w-max overflow-hidden pointer-events-none rounded-full after:absolute  after:inset-0 after:bg-gradient-1 after:from-primary/[.53] after:to-primary/0");function c(e){let{slug:t,image:r,name:c,about:m,socials:p}=e,x=(0,l.useRef)(null);return(0,i.jsxs)("div",{ref:x,className:"relative flex flex-col gap-4  border-b  border-body/40 py-8 max-md:text-center max-md:last:border-none lg:min-h-[132px] lg:flex-row lg:items-center lg:justify-between lg:py-10 lg:last:border-none",children:[(0,i.jsx)("div",{className:(0,n.cn)(d,"relative max-md:mx-auto lg:hidden"),children:(0,i.jsx)(s.default,{src:r.src,alt:r.alt,width:226,height:226,sizes:"100vw",className:"object-cover"})}),(0,i.jsx)("div",{className:(0,n.cn)("pointer-events-none absolute z-1 hidden overflow-hidden rounded-full [transition:all_.5s_ease-out] lg:block ","after:absolute after:inset-0 after:bg-gradient-1  after:from-primary/[.53] after:to-primary/0","left-[400px] top-[90px] opacity-0 [transform:translateY(-50%)]","[.hovered_&]:opacity-100 lg:[.hovered_&]:left-[650px] xl:[.hovered_&]:left-[760px] 2xl:[.hovered_&]:left-[800px]"),children:(0,i.jsx)(s.default,{src:r.src,alt:r.alt,width:226,height:226,sizes:"100vw",className:(0,n.cn)("object-cover [transition:transform_.4s_ease-out]","[transform:scale(.8,.8)]","[.hovered_&]:[transform:scale(1,1)]")})}),(0,i.jsxs)("div",{className:"lg:flex lg:max-w-[590px] lg:flex-1 lg:items-center lg:justify-between lg:gap-4",children:[(0,i.jsx)("h3",{onMouseMove:()=>{if(!x.current)return null;x.current.classList.add("hovered")},onMouseLeave:()=>{if(!x.current)return null;x.current.classList.remove("hovered")},className:"h3  lg:flex-1",children:(0,i.jsx)(a.x,{href:t,className:"text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary",children:c})}),(0,i.jsx)("div",{className:"lg:w-full lg:max-w-[150px] lg:text-left",children:(0,i.jsx)("p",{children:m})})]}),p&&p.length>0&&(0,i.jsxs)("div",{className:"group relative cursor-pointer text-lg/[1] text-body",children:[(0,i.jsx)("span",{className:"hidden lg:block ",children:(0,i.jsx)(o.wEH,{})}),(0,i.jsx)("ul",{"aria-label":"".concat(c," social-links"),className:(0,n.cn)("inline-flex items-center gap-2.5 lg:absolute lg:right-[calc(100%+30px)] lg:top-1/2 lg:-translate-y-1/2 lg:overflow-hidden","lg:[&_li:nth-child(1)]:[transition-delay:200ms]","lg:[&_li:nth-child(2)]:[transition-delay:300ms]","lg:[&_li:nth-child(3)]:[transition-delay:400ms]","lg:[&_li:nth-child(4)]:[transition-delay:500ms]","lg:[&_li:nth-child(5)]:[transition-delay:600ms]","lg:[&_li:nth-child(6)]:[transition-delay:700ms]","lg:[&_li:nth-child(7)]:[transition-delay:800ms]","transition-all ease-out lg:invisible lg:opacity-0","lg:group-hover:visible lg:group-hover:opacity-100"),children:p.map((e,t)=>(0,i.jsx)("li",{className:(0,n.cn)("opacity-0 [transform-origin:bottom] [transform:perspective(400px)_rotateY(0deg)_translateY(80px)] [transition:all_.5s_ease] group-hover:opacity-100 group-hover:[transform:perspective(400px)_rotateY(0deg)_translateY(0px)]","max-lg:[all:unset]"),children:(0,i.jsx)(a.x,{"aria-label":"".concat(c,"'s social ").concat(e.href),href:e.href,openNewTab:!0,className:(0,n.cn)("relative z-1 inline-grid h-[42px] w-[42px] place-items-center overflow-hidden rounded-full  border-2 border-accent-800 border-opacity-20 bg-transparent text-[1.125rem]/[1] text-body transition-colors hover:border-primary hover:text-white","after:invisible after:absolute after:inset-0 after:-z-1 after:scale-50 after:rounded-[inherit] after:bg-primary after:opacity-0 after:duration-500 after:[transition:.5s_ease-in-out]","hover:after:visible hover:after:scale-100 hover:after:opacity-100"),children:e.icon})},t))})]})]})}},7708:function(e,t,r){"use strict";var i=r(7437),a=r(2265);t.default=e=>{let{outOf:t=5,staticRating:r=0}=e,[n,s]=(0,a.useState)([]),[l,o]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=[];for(let r=0;r<t;r++)e.push(r+1);s(e),o(r)},[t,r]),(0,i.jsx)("div",{className:"flex gap-1",children:n.map(e=>(0,i.jsx)("span",{children:l>=e?"★":"☆"},e))})}},1300:function(e,t,r){"use strict";r.r(t),r.d(t,{Carousel:function(){return u}});var i=r(7437);r(1984);var a=r(2265),n=r(5199);let s={initial:10,sm:12,md:16,lg:20,xl:24,"2xl":24},l={initial:1.2,sm:1.2,md:2,lg:3,xl:4,"2xl":4};var o=r(9152);let d=(e,t)=>r=>{let i;let a=!1,n=()=>{clearTimeout(i)},s=()=>{clearTimeout(i),a||(i=setTimeout(()=>{r.next()},e))},l=()=>{t||(a=!0),n()},o=()=>{a=!1,s()},d=()=>{r.container.addEventListener("mouseover",l),r.container.addEventListener("mouseout",o),r.on("animationEnded",s),s()},c=()=>{r.container.removeEventListener("mouseover",l),r.container.removeEventListener("mouseout",o),r.on("animationEnded",s,!0),n()};r.on("created",e?d:c),r.on("destroyed",c),r.on("stopped",c),r.on("resumed",e?d:c)};var c=r(8932),m=r(4018);function p(e){let{isDisabled:t,direction:r,onClick:a,navigationNextBtnClassName:n,navigationPrevBtnClassName:s}=e,l=(0,c.cn)(t&&"pointer-events-none");return(0,i.jsxs)("div",{className:(0,c.cn)("inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accent-700 text-[1rem] text-white transition-colors hover:bg-primary md:h-[60px] md:w-[60px]","prev"===r&&"left-10","next"===r&&"right-10",t&&"cursor-not-allowed  opacity-90","prev"===r&&s,"next"===r&&n),onClick:a,children:["prev"===r&&(0,i.jsx)(m.x_l,{className:l}),"next"===r&&(0,i.jsx)(m.Z1Y,{className:l})]})}function x(e){let{totalCount:t,onClick:r,currentSlide:a,paginationWrapperClassName:n,paginationBulletClassName:s}=e;return(0,i.jsx)("div",{className:(0,c.cn)("relative z-[4] mt-10 flex flex-wrap items-center justify-center gap-4 max-md:ml-3 lg:mt-[60px]",n),children:Array(t).fill(0).map((e,t)=>t+1).map((e,t)=>(0,i.jsx)("span",{onClick:()=>{r(t)},className:(0,c.cn)("inline-flex h-2.5 w-2.5 items-center justify-center rounded-full outline outline-2 outline-offset-[5px] outline-transparent transition-colors",a===t?"cursor-default bg-primary text-white  outline-primary":"cursor-pointer bg-primary",s)},t))})}function h(e){let{progress:t,progressWrapperClassName:r}=e;return(0,i.jsx)("div",{className:(0,c.cn)("relative mt-10 h-1.5 max-w-[300px] overflow-hidden rounded-5 bg-accent-200 dark:bg-accent-700 md:mx-auto md:h-2.5 lg:mt-20",r),children:(0,i.jsx)("span",{className:"absolute inset-0 z-[1] origin-left rounded-[inherit] bg-primary transition-[width] duration-500",style:{width:"".concat(100*t,"%")}})})}function u(e){var t,r,m,u,v,f,g,w,b,j;let{children:A,haveOffset:y=!0,transitionSpeed:N=1e3,itemsPerSlide:C=l,itemGap:_=s,loop:k=!1,mainWrapperClassName:B,hasNavigation:P=!1,navigationWrapperClassName:E,navigationPrevBtnClassName:L,navigationNextBtnClassName:S,hasPagination:z=!1,paginationWrapperClassName:V,paginationBulletClassName:K,hasProgress:M=!1,progressWrapperClassName:Y,autoPlay:I}=e,[G,H]=(0,a.useState)(0),[Q,D]=(0,a.useState)(!1),[F,R]=(0,n.E)({loop:(j={transitionSpeed:N,itemsPerSlide:C,itemGap:_,loop:k}).loop,defaultAnimation:{duration:j.transitionSpeed},slides:{perView:j.itemsPerSlide.initial||1.2,spacing:j.itemGap.initial||10},breakpoints:{["(min-width: ".concat(o.j.sm,")")]:{slides:{perView:j.itemsPerSlide.sm||1.2,spacing:j.itemGap.sm||12}},["(min-width: ".concat(o.j.md,")")]:{slides:{perView:j.itemsPerSlide.md||2,spacing:j.itemGap.md||16}},["(min-width: ".concat(o.j.lg,")")]:{slides:{perView:j.itemsPerSlide.lg||3,spacing:j.itemGap.lg||20}},["(min-width: ".concat(o.j.xl,")")]:{slides:{perView:j.itemsPerSlide.xl||4,spacing:j.itemGap.xl||24}},["(min-width: ".concat(o.j["2xl"],")")]:{slides:{perView:j.itemsPerSlide["2xl"]||4,spacing:j.itemGap["2xl"]||24}}},slideChanged(e){H(e.track.details.rel)},created(){D(!0)}},[d(null==I?void 0:I.interval,null==I?void 0:I.pauseOnHover)]),Z=0,O=0,T=0;return R.current&&(null===(t=R.current)||void 0===t?void 0:t.options.slides)&&"object"==typeof R.current.options.slides&&"number"==typeof(null===(r=R.current)||void 0===r?void 0:r.options.slides.perView)&&(T=Math.floor(null===(m=R.current)||void 0===m?void 0:m.options.slides.perView),k?(Z=(G+1)/(null===(u=R.current)||void 0===u?void 0:u.slides.length),O=null===(v=R.current)||void 0===v?void 0:v.slides.length):(Z=(G+(null===(f=R.current)||void 0===f?void 0:f.options.slides.perView))/(null===(g=R.current)||void 0===g?void 0:g.slides.length),O=Math.ceil((null===(w=R.current)||void 0===w?void 0:w.slides.length)-(null===(b=R.current)||void 0===b?void 0:b.options.slides.perView)+1))),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)("div",{className:"relative flex flex-col",children:[(0,i.jsx)("div",{ref:F,className:(0,c.cn)("keen-slider max-md:order-2",y&&"!overflow-visible",B),children:A}),P&&Q&&R.current&&(0,i.jsxs)("div",{className:(0,c.cn)("flex flex-wrap gap-5 max-md:order-1 max-md:mb-8 md:absolute md:right-0 md:top-[-136px] md:justify-center",E),children:[(0,i.jsx)(p,{direction:"prev",onClick:e=>{var t;e.stopPropagation(),null===(t=R.current)||void 0===t||t.prev()},isDisabled:!k&&0===G,navigationPrevBtnClassName:L}),(0,i.jsx)(p,{direction:"next",onClick:e=>{var t;e.stopPropagation(),null===(t=R.current)||void 0===t||t.next()},isDisabled:!k&&G===R.current.track.details.slides.length-T,navigationNextBtnClassName:S})]})]}),M&&Q&&R.current&&(0,i.jsx)(h,{progress:Z,progressWrapperClassName:Y}),z&&Q&&R.current&&(0,i.jsx)(x,{totalCount:O,onClick:e=>{var t;null===(t=R.current)||void 0===t||t.moveToIdx(e)},currentSlide:G,paginationWrapperClassName:V,paginationBulletClassName:K})]})}},2686:function(e,t,r){"use strict";r.r(t),r.d(t,{Counter:function(){return o}});var i=r(7437),a=r(2265),n=r(7095),s=r(3781),l=r.n(s);let o=e=>{let{end:t,suffix:r,delay:s,duration:o}=e,[d,c]=(0,a.useState)(!1);return(0,i.jsx)(n.ZP,{suffix:r,end:t,delay:s,duration:o,start:d?void 0:0,children:e=>{let{countUpRef:t}=e;return(0,i.jsx)(l(),{active:!d,onChange:e=>{e&&c(!0)},delayedCall:!0,children:(0,i.jsx)("span",{ref:t})})}})}},8245:function(e,t,r){"use strict";r.d(t,{VideoPlayer:function(){return p}});var i=r(7437),a=r(2265),n=r(4887),s=r(6648),l=r(6736),o=r.n(l),d=r(8932);let c=(0,d.cn)("w-[100px] h-[100px] rounded-5 bg-primary grid place-items-center duration-350 text-white hover:bg-black transition-all"),m=(0,d.cn)("cursor-pointer"),p=e=>{let{thumbnail:t,videoUrl:r,palyBtnClassName:l}=e,[p,x]=(0,a.useState)(!1),{src:h,alt:u,width:v,height:f,blurDataURL:g,className:w}=t;return(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&x(!1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]),(0,i.jsxs)("div",{"data-testid":"video-player",className:"inline-grid",children:[(0,i.jsxs)("div",{"data-testid":"media-wrapper",onClick:()=>x(!0),className:(0,d.cn)(o()["media-wrapper"],m,"relative  inline-flex overflow-hidden rounded-5","after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100","hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear"),children:[(0,i.jsx)("span",{className:(0,d.cn)(o()["media-overlay"],"absolute inset-0 z-[1] hidden")}),(0,i.jsx)(s.default,{className:(0,d.cn)("block object-cover",w),src:h,alt:u,width:v,height:f,placeholder:"blur",blurDataURL:void 0!==g?g:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYEBQf/xAAgEAABBAICAwEAAAAAAAAAAAABAAIDBBEhEjEFBhMi/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMF/8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAIQMEBRFR/9oADAMBAAIRAxEAPwBqrV3PcNFL3s1Blny9eX7uYa7mtLAN95yFp9StCHajCp/YIImeUi4xtHLGdd7V9wkoOvZncagXIS10ZENFzsEA7GUJybBHxb+B0EJIeBOG5//Z",sizes:"100vw"}),(0,i.jsx)("span",{className:(0,d.cn)(m,"absolute left-1/2 top-1/2 z-10 inline-block -translate-x-1/2 -translate-y-1/2"),children:(0,i.jsx)("span",{className:(0,d.cn)(c,"text-[2.5rem] md:text-[6.25rem]",l),children:(0,i.jsx)("svg",{width:16,height:18,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M3.82617 0.546509L15.0762 7.42151C15.623 7.77307 15.9746 8.39807 15.9746 9.02307C15.9746 9.68713 15.623 10.3121 15.0762 10.6246L3.82617 17.4996C3.24023 17.8512 2.49805 17.8903 1.91211 17.5387C1.32617 17.2262 0.974609 16.6012 0.974609 15.8981V2.14807C0.974609 1.48401 1.32617 0.859009 1.91211 0.546509C2.49805 0.194946 3.24023 0.194946 3.82617 0.546509Z",fill:"white"})})})})]}),p&&(0,n.createPortal)((0,i.jsx)(()=>(0,i.jsx)("div",{"data-testid":"backdrop",className:o()["modal-video"],role:"dialog",onClick:()=>x(!1),children:(0,i.jsx)("div",{className:o()["modal-video-body"],children:(0,i.jsx)("div",{className:o()["modal-video-inner"],children:(0,i.jsxs)("div",{className:o()["modal-video-wrap"],children:[(0,i.jsx)("button",{className:o()["modal-video-close-btn"]}),(0,i.jsx)("iframe",{width:"460",height:"230",src:r,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})]})})})}),{}),document.body)]})}},5207:function(e,t,r){"use strict";let i;r.d(t,{ProjectSection:function(){return f}});var a=r(7437),n=r(8932);function s(e){let{subtitle:t,title:r,description:i,alignment:s="start",hasBottomSpacing:l=!1,className:o}=e,d=(0,n.cn)("start"===s&&"text-left","center"===s&&"text-center","end"===s&&"text-right",{"mb-10 md:mb-[3.75rem]":l},o);return(0,a.jsxs)("div",{className:d,children:[t&&(0,a.jsx)("span",{className:"mb-[.625rem] block font-secondary text-base	 font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md",children:t}),(0,a.jsx)("h2",{className:"font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl",children:r}),i&&(0,a.jsx)("p",{className:"mt-5 whitespace-pre-line",children:i})]})}var l=r(7327),o=r(9152),d=r(6648),c=r(4018);function m(e){let{slug:t,image:r,title:i,description:s,onClick:m}=e;return(0,a.jsxs)("div",{className:"group/project block",children:[(0,a.jsxs)("div",{className:(0,n.cn)("relative z-1 cursor-pointer overflow-hidden rounded-5","after:absolute after:inset-0 after:z-1 after:bg-black after:[transform-origin:top] after:[transition:.5s] max-lg:after:opacity-60 lg:after:opacity-0 lg:after:[transform:perspective(400px)_rotateX(-10deg)]","lg:group-hover/project:after:opacity-60 lg:group-hover/project:after:[transform:perspective(400px)_rotateX(0deg)]"),children:[(0,a.jsx)(d.default,{src:r.src,alt:r.alt,width:640,height:454,sizes:"(min-width: ".concat(o.j.md,") 50vw,100vw"),className:"transition-transform duration-1000 ease-in-out group-hover/project:scale-105"}),(0,a.jsx)("button",{onClick:m,className:(0,n.cn)("absolute left-1/2 top-1/2 z-[2] grid h-[60px] w-[60px] place-items-center rounded-full bg-white text-[25px] text-accent-700 [transform:translate(-50%,-50%)] [transition:.5s]","lg:opacity-0 lg:group-hover/project:opacity-100"),children:(0,a.jsx)(c.wEH,{})})]}),(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsx)("h3",{className:"h3",children:(0,a.jsx)(l.x,{href:t,className:"text-accent-700 transition-colors duration-350 hover:text-primary dark:text-white dark:hover:text-primary",children:i})}),(0,a.jsx)("p",{className:"mt-1  text-body dark:text-accent-800",children:s})]})]})}var p=r(4295),x=r(5927),h=r(2265),u=r(4946);r(2942);let v=()=>r(3847);function f(e){let{sectionHeading:t,link:r,projectCategories:o,projects:d}=e,c=(0,h.useRef)(null),f=(0,h.useRef)(null),[g,w]=(0,h.useState)("*"),[b,j]=(0,h.useState)(!1),[A,y]=(0,h.useState)(""),[N,C]=(0,h.useState)(0);(0,h.useEffect)(()=>{i=v(),f.current=new i(c.current,{itemSelector:".filter-item",layoutMode:"fitRows"})},[]);let _=e=>()=>{f.current&&("*"===e?f.current.arrange({filter:"*"}):f.current.arrange({filter:e}),w(e))},k=d.map(e=>({src:e.image.src,width:640,height:454}));return(0,a.jsxs)("section",{className:"overflow-hidden",children:[(0,a.jsxs)(p.W,{children:[(0,a.jsxs)("div",{className:"mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[3.75rem]",children:[(0,a.jsx)("div",{className:"max-w-[500px]",children:(0,a.jsx)(s,{...t,alignment:"start"})}),(0,a.jsx)(x.z,{asChild:!0,className:"flex-none",children:(0,a.jsx)(l.x,{href:r.href,openNewTab:r.openNewTab,children:(0,a.jsx)("span",{className:"relative z-1",children:r.label})})})]}),d&&d.length>0&&(0,a.jsxs)("div",{className:"grid grid-cols-1 items-start gap-30px lg:grid-cols-[300px_1fr]",children:[(0,a.jsx)("div",{className:(0,n.cn)("grid gap-5","[&_.mixitup-control-active]:after:opacity-100 [&_.mixitup-control-active]:after:[transform:perspective(400px)_rotateX(0deg)] [&_.mixitup-control-active]:after:[transition:all_3.s_linear]"),children:o.map((e,t)=>(0,a.jsxs)(x.z,{onClick:_(e.value),className:(0,n.cn)("group/button relative z-1 flex !min-h-[3.5rem] justify-between gap-2 bg-accent-100 text-accent-900 dark:bg-accent-700","after:bg-primary","hover:after:opacity-100",g===e.value&&"text-white after:left-0 after:w-full"),children:[(0,a.jsx)("span",{className:"relative z-1",children:e.label}),(0,a.jsx)("svg",{width:28,height:9,viewBox:"0 0 28 9",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M27.3536 4.86918C27.5488 4.67391 27.5488 4.35733 27.3536 4.16207L24.1716 0.980089C23.9763 0.784827 23.6597 0.784827 23.4645 0.980089C23.2692 1.17535 23.2692 1.49193 23.4645 1.6872L26.2929 4.51562L23.4645 7.34405C23.2692 7.53931 23.2692 7.85589 23.4645 8.05116C23.6597 8.24642 23.9763 8.24642 24.1716 8.05116L27.3536 4.86918ZM4.37114e-08 5.01562L27 5.01562L27 4.01562L-4.37114e-08 4.01562L4.37114e-08 5.01562Z"})})]},t))}),(0,a.jsx)("div",{ref:c,className:"filter-container mx-[-15px] flex",children:d.map((e,t)=>(0,a.jsx)("div",{className:(0,n.cn)("filter-item mb-10 w-full px-[15px] sm:w-1/2",e.tags.join(" ")),children:(0,a.jsx)(m,{...e,onClick:()=>{j(!0),y(e.image.src),C(t)}})},t))})]})]}),(0,a.jsx)(u.ZP,{index:N,open:b,close:()=>j(!1),slides:k})]})}},7290:function(e,t,r){"use strict";r.d(t,{WorkCardsCaraousl:function(){return p}});var i=r(7437),a=r(4295),n=r(2334);r(348);var s=r(2118),l=r(2265),o=r(5927),d=r(7327),c=r(8932);function m(e){let{icon:t,title:r,description:a,count:n,link:s}=e;return(0,i.jsxs)("div",{className:"relative whitespace-normal rounded-5 bg-accent-100 p-6  dark:bg-accent-700 lg:p-10",children:[(0,i.jsxs)("div",{className:"flex items-center gap-5",children:[(0,i.jsxs)("div",{className:"relative flex-none",children:[(0,i.jsx)("span",{className:"absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary"}),(0,i.jsx)("span",{className:"relative -left-3 top-3 z-1 text-white",children:t})]}),(0,i.jsx)("h3",{className:"h3 text-accent-900 dark:text-white",children:r})]}),(0,i.jsx)("p",{className:"mt-6",children:a}),(0,i.jsx)("div",{className:"mt-7 pr-[120px]",children:(0,i.jsx)(o.z,{asChild:!0,className:(0,c.cn)("!min-h-fit gap-2.5 bg-transparent !p-0  uppercase text-accent-800 hover:bg-transparent hover:text-primary dark:text-primary dark:hover:text-white","after:hidden"),children:(0,i.jsxs)(d.x,{href:s,"aria-label":"".concat(r,"'s work process, click here for read more"),children:[(0,i.jsx)("span",{children:"Read More"}),(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"15",height:"13",viewBox:"0 0 15 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.6875 6.83984L8.6875 11.8398C8.5 12.0273 8.25 12.1211 8 12.1211C7.71875 12.1211 7.46875 12.0273 7.28125 11.8398C6.875 11.4648 6.875 10.8086 7.28125 10.4336L10.5625 7.12109H1C0.4375 7.12109 0 6.68359 0 6.12109C0 5.58984 0.4375 5.12109 1 5.12109H10.5625L7.28125 1.83984C6.875 1.46484 6.875 0.808594 7.28125 0.433594C7.65625 0.0273438 8.3125 0.0273438 8.6875 0.433594L13.6875 5.43359C14.0938 5.80859 14.0938 6.46484 13.6875 6.83984Z"})})})]})})}),(0,i.jsx)("span",{className:"absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-primary/10 dark:text-white/10",children:n})]})}function p(e){let{cards:t}=e,r=function(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{t(!0)};return"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e),()=>{document.removeEventListener("DOMContentLoaded",e)}},[]),e}();return(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(a.W,{children:t&&t.length>0&&(0,i.jsx)("div",{className:"mt-[60px]",children:(0,i.jsx)(n.tq,{className:"!overflow-visible",speed:400,loop:!0,spaceBetween:30,slidesPerView:3,breakpoints:{0:{spaceBetween:30,slidesPerView:1},375:{spaceBetween:30,slidesPerView:1},575:{spaceBetween:30,slidesPerView:1},768:{spaceBetween:30,slidesPerView:2},992:{spaceBetween:30,slidesPerView:2},1200:{spaceBetween:30,slidesPerView:3}},children:t.map((e,t)=>(0,i.jsx)(n.o5,{children:(0,i.jsx)(m,{...e})},t))})})})})}s.ZP.use([s.pt])},9152:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});let i={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"}},6736:function(e){e.exports={"media-wrapper":"video-player_media-wrapper__FL2Ld","media-overlay":"video-player_media-overlay__3zbem","modal-video":"video-player_modal-video__wKcD4","modal-video-body":"video-player_modal-video-body__4eqbN","modal-video-inner":"video-player_modal-video-inner__z1jHy","modal-video-wrap":"video-player_modal-video-wrap__VViYu","modal-video-close-btn":"video-player_modal-video-close-btn__0sidz"}}},function(e){e.O(0,[661,306,420,904,231,773,569,379,568,971,23,744],function(){return e(e.s=840)}),_N_E=e.O()}]);