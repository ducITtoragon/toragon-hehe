/*! Drog.js v1.1.0 | (c) 2021, Emanuel Rojas VÃ¡squez | BSD 3-Clause License */
!function(e,t){if(e.Drog)return console.error("Drog.js has already been defined");let n=0,o=0,r=0,c=0,l="-x",s="-y",u="mousedown",i="touchstart",a="mousemove",f="touchmove",d="mouseup",m="touchend",p="-f",h={passive:!1},v="-d",y="[data-drog]",x;function D(e,t,n,o){e.addEventListener(t,n,o||!1)}function g(e,t,n,o){e.removeEventListener(t,n,o||!1)}function X(e){x=this[p],e.preventDefault(),n=e.clientX||e.touches[0].clientX,o=e.clientY||e.touches[0].clientY,D(t,a,Y),D(t,f,Y,h),D(t,d,w),D(t,m,w,h)}function Y(e){e.preventDefault(),r=e.clientX||e.touches[0].clientX,c=e.clientY||e.touches[0].clientY,x[l]-=n-r,x[s]-=o-c,n=r,o=c,x.style.transform="translate("+x[l]+"px,"+x[s]+"px)"}function w(){g(t,a,Y),g(t,f,Y,h),g(t,d,w),g(t,m,w,h)}e.Drog={on:function(t){if(!t[v]){let e=t.querySelector(y)||t;(e[p]=t)[l]=0,t[s]=0,t.style.zIndex=10,t[v]=!0,D(e,u,X),D(e,i,X,h)}},off:function(t){if(t[v]){let e=t.querySelector(y)||t;t.style.zIndex="",t.style.transform="",e[p]=null,t[v]=!1,g(e,u,X),g(e,i,X)}},move:function(e,t,n){e[v]&&(t=parseFloat(t)||0,n=parseFloat(n)||0,e[l]=t,e[s]=n,e.style.transform="translate("+t+"px,"+n+"px)")}}}(window,document);