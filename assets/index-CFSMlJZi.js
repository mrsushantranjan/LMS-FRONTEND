function rs(l,s){for(var u=0;u<s.length;u++){const i=s[u];if(typeof i!="string"&&!Array.isArray(i)){for(const d in i)if(d!=="default"&&!(d in l)){const f=Object.getOwnPropertyDescriptor(i,d);f&&Object.defineProperty(l,d,f.get?f:{enumerable:!0,get:()=>i[d]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function ss(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Bc={exports:{}},li={};var Lp;function Sb(){if(Lp)return li;Lp=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(i,d,f){var p=null;if(f!==void 0&&(p=""+f),d.key!==void 0&&(p=""+d.key),"key"in d){f={};for(var g in d)g!=="key"&&(f[g]=d[g])}else f=d;return d=f.ref,{$$typeof:l,type:i,key:p,ref:d!==void 0?d:null,props:f}}return li.Fragment=s,li.jsx=u,li.jsxs=u,li}var Bp;function wb(){return Bp||(Bp=1,Bc.exports=Sb()),Bc.exports}var c=wb();const jb=ss(c),kb=rs({__proto__:null,default:jb},[c]);var Hc={exports:{}},ce={};var Hp;function _b(){if(Hp)return ce;Hp=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),N=Symbol.iterator;function V(w){return w===null||typeof w!="object"?null:(w=N&&w[N]||w["@@iterator"],typeof w=="function"?w:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,U={};function T(w,D,K){this.props=w,this.context=D,this.refs=U,this.updater=K||G}T.prototype.isReactComponent={},T.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},T.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function q(){}q.prototype=T.prototype;function Y(w,D,K){this.props=w,this.context=D,this.refs=U,this.updater=K||G}var W=Y.prototype=new q;W.constructor=Y,B(W,T.prototype),W.isPureReactComponent=!0;var X=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function re(w,D,K){var I=K.ref;return{$$typeof:l,type:w,key:D,ref:I!==void 0?I:null,props:K}}function Ce(w,D){return re(w.type,D,w.props)}function Te(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function Z(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(K){return D[K]})}var ve=/\/+/g;function oe(w,D){return typeof w=="object"&&w!==null&&w.key!=null?Z(""+w.key):D.toString(36)}function ye(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(F,F):(w.status="pending",w.then(function(D){w.status==="pending"&&(w.status="fulfilled",w.value=D)},function(D){w.status==="pending"&&(w.status="rejected",w.reason=D)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function R(w,D,K,I,se){var he=typeof w;(he==="undefined"||he==="boolean")&&(w=null);var _e=!1;if(w===null)_e=!0;else switch(he){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(w.$$typeof){case l:case s:_e=!0;break;case k:return _e=w._init,R(_e(w._payload),D,K,I,se)}}if(_e)return se=se(w),_e=I===""?"."+oe(w,0):I,X(se)?(K="",_e!=null&&(K=_e.replace(ve,"$&/")+"/"),R(se,D,K,"",function(dl){return dl})):se!=null&&(Te(se)&&(se=Ce(se,K+(se.key==null||w&&w.key===se.key?"":(""+se.key).replace(ve,"$&/")+"/")+_e)),D.push(se)),1;_e=0;var rt=I===""?".":I+":";if(X(w))for(var qe=0;qe<w.length;qe++)I=w[qe],he=rt+oe(I,qe),_e+=R(I,D,K,he,se);else if(qe=V(w),typeof qe=="function")for(w=qe.call(w),qe=0;!(I=w.next()).done;)I=I.value,he=rt+oe(I,qe++),_e+=R(I,D,K,he,se);else if(he==="object"){if(typeof w.then=="function")return R(ye(w),D,K,I,se);throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return _e}function Q(w,D,K){if(w==null)return w;var I=[],se=0;return R(w,I,"","",function(he){return D.call(K,he,se++)}),I}function ne(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(K){(w._status===0||w._status===-1)&&(w._status=1,w._result=K)},function(K){(w._status===0||w._status===-1)&&(w._status=2,w._result=K)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var $=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},fe={map:Q,forEach:function(w,D,K){Q(w,function(){D.apply(this,arguments)},K)},count:function(w){var D=0;return Q(w,function(){D++}),D},toArray:function(w){return Q(w,function(D){return D})||[]},only:function(w){if(!Te(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ce.Activity=y,ce.Children=fe,ce.Component=T,ce.Fragment=u,ce.Profiler=d,ce.PureComponent=Y,ce.StrictMode=i,ce.Suspense=v,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(w){return P.H.useMemoCache(w)}},ce.cache=function(w){return function(){return w.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(w,D,K){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var I=B({},w.props),se=w.key;if(D!=null)for(he in D.key!==void 0&&(se=""+D.key),D)!ie.call(D,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&D.ref===void 0||(I[he]=D[he]);var he=arguments.length-2;if(he===1)I.children=K;else if(1<he){for(var _e=Array(he),rt=0;rt<he;rt++)_e[rt]=arguments[rt+2];I.children=_e}return re(w.type,se,I)},ce.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ce.createElement=function(w,D,K){var I,se={},he=null;if(D!=null)for(I in D.key!==void 0&&(he=""+D.key),D)ie.call(D,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(se[I]=D[I]);var _e=arguments.length-2;if(_e===1)se.children=K;else if(1<_e){for(var rt=Array(_e),qe=0;qe<_e;qe++)rt[qe]=arguments[qe+2];se.children=rt}if(w&&w.defaultProps)for(I in _e=w.defaultProps,_e)se[I]===void 0&&(se[I]=_e[I]);return re(w,he,se)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(w){return{$$typeof:g,render:w}},ce.isValidElement=Te,ce.lazy=function(w){return{$$typeof:k,_payload:{_status:-1,_result:w},_init:ne}},ce.memo=function(w,D){return{$$typeof:b,type:w,compare:D===void 0?null:D}},ce.startTransition=function(w){var D=P.T,K={};P.T=K;try{var I=w(),se=P.S;se!==null&&se(K,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(F,$)}catch(he){$(he)}finally{D!==null&&K.types!==null&&(D.types=K.types),P.T=D}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(w){return P.H.use(w)},ce.useActionState=function(w,D,K){return P.H.useActionState(w,D,K)},ce.useCallback=function(w,D){return P.H.useCallback(w,D)},ce.useContext=function(w){return P.H.useContext(w)},ce.useDebugValue=function(){},ce.useDeferredValue=function(w,D){return P.H.useDeferredValue(w,D)},ce.useEffect=function(w,D){return P.H.useEffect(w,D)},ce.useEffectEvent=function(w){return P.H.useEffectEvent(w)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(w,D,K){return P.H.useImperativeHandle(w,D,K)},ce.useInsertionEffect=function(w,D){return P.H.useInsertionEffect(w,D)},ce.useLayoutEffect=function(w,D){return P.H.useLayoutEffect(w,D)},ce.useMemo=function(w,D){return P.H.useMemo(w,D)},ce.useOptimistic=function(w,D){return P.H.useOptimistic(w,D)},ce.useReducer=function(w,D,K){return P.H.useReducer(w,D,K)},ce.useRef=function(w){return P.H.useRef(w)},ce.useState=function(w){return P.H.useState(w)},ce.useSyncExternalStore=function(w,D,K){return P.H.useSyncExternalStore(w,D,K)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.2.4",ce}var Yp;function xu(){return Yp||(Yp=1,Hc.exports=_b()),Hc.exports}var S=xu();const M=ss(S),Cb=rs({__proto__:null,default:M},[S]);var Yc={exports:{}},ii={},qc={exports:{}},Gc={};var qp;function Eb(){return qp||(qp=1,(function(l){function s(R,Q){var ne=R.length;R.push(Q);e:for(;0<ne;){var $=ne-1>>>1,fe=R[$];if(0<d(fe,Q))R[$]=Q,R[ne]=fe,ne=$;else break e}}function u(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var Q=R[0],ne=R.pop();if(ne!==Q){R[0]=ne;e:for(var $=0,fe=R.length,w=fe>>>1;$<w;){var D=2*($+1)-1,K=R[D],I=D+1,se=R[I];if(0>d(K,ne))I<fe&&0>d(se,K)?(R[$]=se,R[I]=ne,$=I):(R[$]=K,R[D]=ne,$=D);else if(I<fe&&0>d(se,ne))R[$]=se,R[I]=ne,$=I;else break e}}return Q}function d(R,Q){var ne=R.sortIndex-Q.sortIndex;return ne!==0?ne:R.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();l.unstable_now=function(){return p.now()-g}}var v=[],b=[],k=1,y=null,N=3,V=!1,G=!1,B=!1,U=!1,T=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function W(R){for(var Q=u(b);Q!==null;){if(Q.callback===null)i(b);else if(Q.startTime<=R)i(b),Q.sortIndex=Q.expirationTime,s(v,Q);else break;Q=u(b)}}function X(R){if(B=!1,W(R),!G)if(u(v)!==null)G=!0,F||(F=!0,Z());else{var Q=u(b);Q!==null&&ye(X,Q.startTime-R)}}var F=!1,P=-1,ie=5,re=-1;function Ce(){return U?!0:!(l.unstable_now()-re<ie)}function Te(){if(U=!1,F){var R=l.unstable_now();re=R;var Q=!0;try{e:{G=!1,B&&(B=!1,q(P),P=-1),V=!0;var ne=N;try{t:{for(W(R),y=u(v);y!==null&&!(y.expirationTime>R&&Ce());){var $=y.callback;if(typeof $=="function"){y.callback=null,N=y.priorityLevel;var fe=$(y.expirationTime<=R);if(R=l.unstable_now(),typeof fe=="function"){y.callback=fe,W(R),Q=!0;break t}y===u(v)&&i(v),W(R)}else i(v);y=u(v)}if(y!==null)Q=!0;else{var w=u(b);w!==null&&ye(X,w.startTime-R),Q=!1}}break e}finally{y=null,N=ne,V=!1}Q=void 0}}finally{Q?Z():F=!1}}}var Z;if(typeof Y=="function")Z=function(){Y(Te)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,oe=ve.port2;ve.port1.onmessage=Te,Z=function(){oe.postMessage(null)}}else Z=function(){T(Te,0)};function ye(R,Q){P=T(function(){R(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_next=function(R){switch(N){case 1:case 2:case 3:var Q=3;break;default:Q=N}var ne=N;N=Q;try{return R()}finally{N=ne}},l.unstable_requestPaint=function(){U=!0},l.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ne=N;N=R;try{return Q()}finally{N=ne}},l.unstable_scheduleCallback=function(R,Q,ne){var $=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?$+ne:$):ne=$,R){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,R={id:k++,callback:Q,priorityLevel:R,startTime:ne,expirationTime:fe,sortIndex:-1},ne>$?(R.sortIndex=ne,s(b,R),u(v)===null&&R===u(b)&&(B?(q(P),P=-1):B=!0,ye(X,ne-$))):(R.sortIndex=fe,s(v,R),G||V||(G=!0,F||(F=!0,Z()))),R},l.unstable_shouldYield=Ce,l.unstable_wrapCallback=function(R){var Q=N;return function(){var ne=N;N=Q;try{return R.apply(this,arguments)}finally{N=ne}}}})(Gc)),Gc}var Gp;function zb(){return Gp||(Gp=1,qc.exports=Eb()),qc.exports}var Vc={exports:{}},nt={};var Vp;function Nb(){if(Vp)return nt;Vp=1;var l=xu();function s(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)b+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var i={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,b,k){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:y==null?null:""+y,children:v,containerInfo:b,implementation:k}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,nt.createPortal=function(v,b){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(s(299));return f(v,b,null,k)},nt.flushSync=function(v){var b=p.T,k=i.p;try{if(p.T=null,i.p=2,v)return v()}finally{p.T=b,i.p=k,i.d.f()}},nt.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,i.d.C(v,b))},nt.prefetchDNS=function(v){typeof v=="string"&&i.d.D(v)},nt.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var k=b.as,y=g(k,b.crossOrigin),N=typeof b.integrity=="string"?b.integrity:void 0,V=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;k==="style"?i.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:y,integrity:N,fetchPriority:V}):k==="script"&&i.d.X(v,{crossOrigin:y,integrity:N,fetchPriority:V,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},nt.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var k=g(b.as,b.crossOrigin);i.d.M(v,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&i.d.M(v)},nt.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var k=b.as,y=g(k,b.crossOrigin);i.d.L(v,k,{crossOrigin:y,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},nt.preloadModule=function(v,b){if(typeof v=="string")if(b){var k=g(b.as,b.crossOrigin);i.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else i.d.m(v)},nt.requestFormReset=function(v){i.d.r(v)},nt.unstable_batchedUpdates=function(v,b){return v(b)},nt.useFormState=function(v,b,k){return p.H.useFormState(v,b,k)},nt.useFormStatus=function(){return p.H.useHostTransitionStatus()},nt.version="19.2.4",nt}var Xp;function Am(){if(Xp)return Vc.exports;Xp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Vc.exports=Nb(),Vc.exports}var Pp;function Mb(){if(Pp)return ii;Pp=1;var l=zb(),s=xu(),u=Am();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(i(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(i(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===a)return v(r),e;if(o===n)return v(r),t;o=o.sibling}throw Error(i(188))}if(a.return!==n.return)a=r,n=o;else{for(var h=!1,m=r.child;m;){if(m===a){h=!0,a=r,n=o;break}if(m===n){h=!0,n=r,a=o;break}m=m.sibling}if(!h){for(m=o.child;m;){if(m===a){h=!0,a=o,n=r;break}if(m===n){h=!0,n=o,a=r;break}m=m.sibling}if(!h)throw Error(i(189))}}if(a.alternate!==n)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,N=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case T:return"Profiler";case U:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Y:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var ye=Array.isArray,R=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},$=[],fe=-1;function w(e){return{current:e}}function D(e){0>fe||(e.current=$[fe],$[fe]=null,fe--)}function K(e,t){fe++,$[fe]=e.current,e.current=t}var I=w(null),se=w(null),he=w(null),_e=w(null);function rt(e,t){switch(K(he,t),K(se,e),K(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rp(t),e=sp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(I),K(I,e)}function qe(){D(I),D(se),D(he)}function dl(e){e.memoizedState!==null&&K(_e,e);var t=I.current,a=sp(t,e.type);t!==a&&(K(se,e),K(I,a))}function Ci(e){se.current===e&&(D(I),D(se)),_e.current===e&&(D(_e),ei._currentValue=ne)}var xs,Ou;function Ja(e){if(xs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);xs=t&&t[1]||"",Ou=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xs+e+Ou}var ys=!1;function Ss(e,t){if(!e||ys)return"";ys=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(A){var z=A}Reflect.construct(e,[],H)}else{try{H.call()}catch(A){z=A}e.call(H.prototype)}}else{try{throw Error()}catch(A){z=A}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),h=o[0],m=o[1];if(h&&m){var x=h.split(`
`),E=m.split(`
`);for(r=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;if(n===x.length||r===E.length)for(n=x.length-1,r=E.length-1;1<=n&&0<=r&&x[n]!==E[r];)r--;for(;1<=n&&0<=r;n--,r--)if(x[n]!==E[r]){if(n!==1||r!==1)do if(n--,r--,0>r||x[n]!==E[r]){var O=`
`+x[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=r);break}}}finally{ys=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function W0(e,t){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==t&&t!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Ss(e.type,!1);case 11:return Ss(e.type.render,!1);case 1:return Ss(e.type,!0);case 31:return Ja("Activity");default:return""}}function Du(e){try{var t="",a=null;do t+=W0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ws=Object.prototype.hasOwnProperty,js=l.unstable_scheduleCallback,ks=l.unstable_cancelCallback,$0=l.unstable_shouldYield,eg=l.unstable_requestPaint,vt=l.unstable_now,tg=l.unstable_getCurrentPriorityLevel,Lu=l.unstable_ImmediatePriority,Bu=l.unstable_UserBlockingPriority,Ei=l.unstable_NormalPriority,ag=l.unstable_LowPriority,Hu=l.unstable_IdlePriority,ng=l.log,lg=l.unstable_setDisableYieldValue,fl=null,xt=null;function ya(e){if(typeof ng=="function"&&lg(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(fl,e)}catch{}}var yt=Math.clz32?Math.clz32:sg,ig=Math.log,rg=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(ig(e)/rg|0)|0}var zi=256,Ni=262144,Mi=4194304;function Wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ai(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~o,n!==0?r=Wa(n):(h&=m,h!==0?r=Wa(h):a||(a=m&~e,a!==0&&(r=Wa(a))))):(m=n&~o,m!==0?r=Wa(m):h!==0?r=Wa(h):a||(a=n&~e,a!==0&&(r=Wa(a)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:r}function hl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function og(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(){var e=Mi;return Mi<<=1,(Mi&62914560)===0&&(Mi=4194304),e}function _s(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cg(e,t,a,n,r,o){var h=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(a=h&~a;0<a;){var O=31-yt(a),H=1<<O;m[O]=0,x[O]=-1;var z=E[O];if(z!==null)for(E[O]=null,O=0;O<z.length;O++){var A=z[O];A!==null&&(A.lane&=-536870913)}a&=~H}n!==0&&qu(e,n,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(h&~t))}function qu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-yt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Gu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-yt(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function Vu(e,t){var a=t&-t;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xu(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Mp(e.type))}function Pu(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var Sa=Math.random().toString(36).slice(2),We="__reactFiber$"+Sa,ut="__reactProps$"+Sa,vn="__reactContainer$"+Sa,zs="__reactEvents$"+Sa,ug="__reactListeners$"+Sa,dg="__reactHandles$"+Sa,Qu="__reactResources$"+Sa,ml="__reactMarker$"+Sa;function Ns(e){delete e[We],delete e[ut],delete e[zs],delete e[ug],delete e[dg]}function xn(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pp(e);e!==null;){if(a=e[We])return a;e=pp(e)}return t}e=a,a=e.parentNode}return null}function yn(e){if(e=e[We]||e[vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Sn(e){var t=e[Qu];return t||(t=e[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[ml]=!0}var Ku=new Set,Zu={};function $a(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(Zu[e]=t,e=0;e<t.length;e++)Ku.add(t[e])}var fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fu={},Iu={};function hg(e){return ws.call(Iu,e)?!0:ws.call(Fu,e)?!1:fg.test(e)?Iu[e]=!0:(Fu[e]=!0,!1)}function Ti(e,t,a){if(hg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Wt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pg(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){a=""+h,o.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){if(!e._valueTracker){var t=Ju(e)?"checked":"value";e._valueTracker=pg(e,t,""+e[t])}}function Wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ju(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mg=/[\n"\\]/g;function Mt(e){return e.replace(mg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function As(e,t,a,n,r,o,h,m){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Ts(e,h,Nt(t)):a!=null?Ts(e,h,Nt(a)):n!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Nt(m):e.removeAttribute("name")}function $u(e,t,a,n,r,o,h,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Ms(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Ms(e)}function Ts(e,t,a){t==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function jn(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ed(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function td(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(i(92));if(ye(n)){if(1<n.length)throw Error(i(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ms(e)}function kn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var gg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ad(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||gg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function nd(e,t,a){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&ad(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&ad(e,o,t[o])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return vg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var Us=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Cn=null;function ld(e){var t=yn(e);if(t&&(e=t.stateNode)){var a=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(As(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[ut]||null;if(!r)throw Error(i(90));As(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Wu(n)}break e;case"textarea":ed(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&jn(e,!!a.multiple,t,!1)}}}var Ds=!1;function id(e,t,a){if(Ds)return e(t,a);Ds=!0;try{var n=e(t);return n}finally{if(Ds=!1,(_n!==null||Cn!==null)&&(wr(),_n&&(t=_n,e=Cn,Cn=_n=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function bl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ut]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(i(231,t,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=!1;if(ea)try{var vl={};Object.defineProperty(vl,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{Ls=!1}var wa=null,Bs=null,Di=null;function rd(){if(Di)return Di;var e,t=Bs,a=t.length,n,r="value"in wa?wa.value:wa.textContent,o=r.length;for(e=0;e<a&&t[e]===r[e];e++);var h=a-e;for(n=1;n<=h&&t[a-n]===r[o-n];n++);return Di=r.slice(e,1<n?1-n:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function sd(){return!1}function dt(e){function t(a,n,r,o,h){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:sd,this.isPropagationStopped=sd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=dt(en),xl=y({},en,{view:0,detail:0}),xg=dt(xl),Hs,Ys,yl,Yi=y({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(Hs=e.screenX-yl.screenX,Ys=e.screenY-yl.screenY):Ys=Hs=0,yl=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),od=dt(Yi),yg=y({},Yi,{dataTransfer:0}),Sg=dt(yg),wg=y({},xl,{relatedTarget:0}),qs=dt(wg),jg=y({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=dt(jg),_g=y({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=dt(_g),Eg=y({},en,{data:0}),cd=dt(Eg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ag(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mg[e])?!!t[e]:!1}function Gs(){return Ag}var Tg=y({},xl,{key:function(e){if(e.key){var t=zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rg=dt(Tg),Ug=y({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=dt(Ug),Og=y({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),Dg=dt(Og),Lg=y({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=dt(Lg),Hg=y({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=dt(Hg),qg=y({},en,{newState:0,oldState:0}),Gg=dt(qg),Vg=[9,13,27,32],Vs=ea&&"CompositionEvent"in window,Sl=null;ea&&"documentMode"in document&&(Sl=document.documentMode);var Xg=ea&&"TextEvent"in window&&!Sl,dd=ea&&(!Vs||Sl&&8<Sl&&11>=Sl),fd=" ",hd=!1;function pd(e,t){switch(e){case"keyup":return Vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Pg(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(hd=!0,fd);case"textInput":return e=t.data,e===fd&&hd?null:e;default:return null}}function Qg(e,t){if(En)return e==="compositionend"||!Vs&&pd(e,t)?(e=rd(),Di=Bs=wa=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kg[e.type]:t==="textarea"}function bd(e,t,a,n){_n?Cn?Cn.push(n):Cn=[n]:_n=n,t=Nr(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var wl=null,jl=null;function Zg(e){ep(e,0)}function qi(e){var t=gl(e);if(Wu(t))return e}function vd(e,t){if(e==="change")return t}var xd=!1;if(ea){var Xs;if(ea){var Ps="oninput"in document;if(!Ps){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),Ps=typeof yd.oninput=="function"}Xs=Ps}else Xs=!1;xd=Xs&&(!document.documentMode||9<document.documentMode)}function Sd(){wl&&(wl.detachEvent("onpropertychange",wd),jl=wl=null)}function wd(e){if(e.propertyName==="value"&&qi(jl)){var t=[];bd(t,jl,e,Os(e)),id(Zg,t)}}function Fg(e,t,a){e==="focusin"?(Sd(),wl=t,jl=a,wl.attachEvent("onpropertychange",wd)):e==="focusout"&&Sd()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(jl)}function Jg(e,t){if(e==="click")return qi(t)}function Wg(e,t){if(e==="input"||e==="change")return qi(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:$g;function kl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!ws.call(t,r)||!St(e[r],t[r]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,t){var a=jd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jd(a)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ui(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ui(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var e1=ea&&"documentMode"in document&&11>=document.documentMode,zn=null,Ks=null,_l=null,Zs=!1;function Ed(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zs||zn==null||zn!==Ui(n)||(n=zn,"selectionStart"in n&&Qs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_l&&kl(_l,n)||(_l=n,n=Nr(Ks,"onSelect"),0<n.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=zn)))}function tn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Nn={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionrun:tn("Transition","TransitionRun"),transitionstart:tn("Transition","TransitionStart"),transitioncancel:tn("Transition","TransitionCancel"),transitionend:tn("Transition","TransitionEnd")},Fs={},zd={};ea&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function an(e){if(Fs[e])return Fs[e];if(!Nn[e])return e;var t=Nn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zd)return Fs[e]=t[a];return e}var Nd=an("animationend"),Md=an("animationiteration"),Ad=an("animationstart"),t1=an("transitionrun"),a1=an("transitionstart"),n1=an("transitioncancel"),Td=an("transitionend"),Rd=new Map,Is="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Is.push("scrollEnd");function qt(e,t){Rd.set(e,t),$a(t,[e])}var Gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],Mn=0,Js=0;function Vi(){for(var e=Mn,t=Js=Mn=0;t<e;){var a=At[t];At[t++]=null;var n=At[t];At[t++]=null;var r=At[t];At[t++]=null;var o=At[t];if(At[t++]=null,n!==null&&r!==null){var h=n.pending;h===null?r.next=r:(r.next=h.next,h.next=r),n.pending=r}o!==0&&Ud(a,r,o)}}function Xi(e,t,a,n){At[Mn++]=e,At[Mn++]=t,At[Mn++]=a,At[Mn++]=n,Js|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ws(e,t,a,n){return Xi(e,t,a,n),Pi(e)}function nn(e,t){return Xi(e,null,null,t),Pi(e)}function Ud(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var r=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-yt(a),e=o.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=a|536870912),o):null}function Pi(e){if(50<Kl)throw Kl=0,oc=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function l1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,a,n){return new l1(e,t,a,n)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var a=e.alternate;return a===null?(a=wt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Od(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,n,r,o){var h=0;if(n=e,typeof e=="function")$s(e)&&(h=1);else if(typeof e=="string")h=cb(e,a,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=wt(31,a,t,r),e.elementType=re,e.lanes=o,e;case B:return ln(a.children,r,o,t);case U:h=8,r|=24;break;case T:return e=wt(12,a,t,r|2),e.elementType=T,e.lanes=o,e;case X:return e=wt(13,a,t,r),e.elementType=X,e.lanes=o,e;case F:return e=wt(19,a,t,r),e.elementType=F,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:h=10;break e;case q:h=9;break e;case W:h=11;break e;case P:h=14;break e;case ie:h=16,n=null;break e}h=29,a=Error(i(130,e===null?"null":typeof e,"")),n=null}return t=wt(h,a,t,r),t.elementType=e,t.type=n,t.lanes=o,t}function ln(e,t,a,n){return e=wt(7,e,n,t),e.lanes=a,e}function eo(e,t,a){return e=wt(6,e,null,t),e.lanes=a,e}function Dd(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function to(e,t,a){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ld=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=Ld.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Du(t)},Ld.set(e,t),t)}return{value:e,source:t,stack:Du(t)}}var Tn=[],Rn=0,Ki=null,Cl=0,Rt=[],Ut=0,ja=null,Pt=1,Qt="";function aa(e,t){Tn[Rn++]=Cl,Tn[Rn++]=Ki,Ki=e,Cl=t}function Bd(e,t,a){Rt[Ut++]=Pt,Rt[Ut++]=Qt,Rt[Ut++]=ja,ja=e;var n=Pt;e=Qt;var r=32-yt(n)-1;n&=~(1<<r),a+=1;var o=32-yt(t)+r;if(30<o){var h=r-r%5;o=(n&(1<<h)-1).toString(32),n>>=h,r-=h,Pt=1<<32-yt(t)+r|a<<r|n,Qt=o+e}else Pt=1<<o|a<<r|n,Qt=e}function ao(e){e.return!==null&&(aa(e,1),Bd(e,1,0))}function no(e){for(;e===Ki;)Ki=Tn[--Rn],Tn[Rn]=null,Cl=Tn[--Rn],Tn[Rn]=null;for(;e===ja;)ja=Rt[--Ut],Rt[Ut]=null,Qt=Rt[--Ut],Rt[Ut]=null,Pt=Rt[--Ut],Rt[Ut]=null}function Hd(e,t){Rt[Ut++]=Pt,Rt[Ut++]=Qt,Rt[Ut++]=ja,Pt=t.id,Qt=t.overflow,ja=e}var $e=null,Oe=null,xe=!1,ka=null,Ot=!1,lo=Error(i(519));function _a(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(Tt(t,e)),lo}function Yd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[We]=e,t[ut]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<Fl.length;a++)me(Fl[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),$u(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),td(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||lp(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||_a(e,!0)}function qd(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:$e=$e.return}}function Un(e){if(e!==$e)return!1;if(!xe)return qd(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jc(e.type,e.memoizedProps)),a=!a),a&&Oe&&_a(e),qd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Oe=hp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Oe=hp(e)}else t===27?(t=Oe,Ha(e.type)?(e=zc,zc=null,Oe=e):Oe=t):Oe=$e?Lt(e.stateNode.nextSibling):null;return!0}function rn(){Oe=$e=null,xe=!1}function io(){var e=ka;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),ka=null),e}function El(e){ka===null?ka=[e]:ka.push(e)}var ro=w(null),sn=null,na=null;function Ca(e,t,a){K(ro,t._currentValue),t._currentValue=a}function la(e){e._currentValue=ro.current,D(ro)}function so(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function oo(e,t,a,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var h=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var x=0;x<t.length;x++)if(m.context===t[x]){o.lanes|=a,m=o.alternate,m!==null&&(m.lanes|=a),so(o.return,a,e),n||(h=null);break e}o=m.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(i(341));h.lanes|=a,o=h.alternate,o!==null&&(o.lanes|=a),so(h,a,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function On(e,t,a,n){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(i(387));if(h=h.memoizedProps,h!==null){var m=r.type;St(r.pendingProps.value,h.value)||(e!==null?e.push(m):e=[m])}}else if(r===_e.current){if(h=r.alternate,h===null)throw Error(i(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ei):e=[ei])}r=r.return}e!==null&&oo(t,e,a,n),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function on(e){sn=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Gd(sn,e)}function Fi(e,t){return sn===null&&on(e),Gd(e,t)}function Gd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},na===null){if(e===null)throw Error(i(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return a}var i1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},r1=l.unstable_scheduleCallback,s1=l.unstable_NormalPriority,Xe={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function co(){return{controller:new i1,data:new Map,refCount:0}}function zl(e){e.refCount--,e.refCount===0&&r1(s1,function(){e.controller.abort()})}var Nl=null,uo=0,Dn=0,Ln=null;function o1(e,t){if(Nl===null){var a=Nl=[];uo=0,Dn=pc(),Ln={status:"pending",value:void 0,then:function(n){a.push(n)}}}return uo++,t.then(Vd,Vd),t}function Vd(){if(--uo===0&&Nl!==null){Ln!==null&&(Ln.status="fulfilled");var e=Nl;Nl=null,Dn=0,Ln=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function c1(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),n}var Xd=R.S;R.S=function(e,t){zh=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&o1(e,t),Xd!==null&&Xd(e,t)};var cn=w(null);function fo(){var e=cn.current;return e!==null?e:Re.pooledCache}function Ii(e,t){t===null?K(cn,cn.current):K(cn,t.pool)}function Pd(){var e=fo();return e===null?null:{parent:Xe._currentValue,pool:e}}var Bn=Error(i(460)),ho=Error(i(474)),Ji=Error(i(542)),Wi={then:function(){}};function Qd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e}throw dn=t,Bn}}function un(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dn=a,Bn):a}}var dn=null;function Zd(){if(dn===null)throw Error(i(459));var e=dn;return dn=null,e}function Fd(e){if(e===Bn||e===Ji)throw Error(i(483))}var Hn=null,Ml=0;function $i(e){var t=Ml;return Ml+=1,Hn===null&&(Hn=[]),Kd(Hn,e,t)}function Al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function er(e,t){throw t.$$typeof===N?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Id(e){function t(_,j){if(e){var C=_.deletions;C===null?(_.deletions=[j],_.flags|=16):C.push(j)}}function a(_,j){if(!e)return null;for(;j!==null;)t(_,j),j=j.sibling;return null}function n(_){for(var j=new Map;_!==null;)_.key!==null?j.set(_.key,_):j.set(_.index,_),_=_.sibling;return j}function r(_,j){return _=ta(_,j),_.index=0,_.sibling=null,_}function o(_,j,C){return _.index=C,e?(C=_.alternate,C!==null?(C=C.index,C<j?(_.flags|=67108866,j):C):(_.flags|=67108866,j)):(_.flags|=1048576,j)}function h(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function m(_,j,C,L){return j===null||j.tag!==6?(j=eo(C,_.mode,L),j.return=_,j):(j=r(j,C),j.return=_,j)}function x(_,j,C,L){var te=C.type;return te===B?O(_,j,C.props.children,L,C.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ie&&un(te)===j.type)?(j=r(j,C.props),Al(j,C),j.return=_,j):(j=Qi(C.type,C.key,C.props,null,_.mode,L),Al(j,C),j.return=_,j)}function E(_,j,C,L){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=to(C,_.mode,L),j.return=_,j):(j=r(j,C.children||[]),j.return=_,j)}function O(_,j,C,L,te){return j===null||j.tag!==7?(j=ln(C,_.mode,L,te),j.return=_,j):(j=r(j,C),j.return=_,j)}function H(_,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=eo(""+j,_.mode,C),j.return=_,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case V:return C=Qi(j.type,j.key,j.props,null,_.mode,C),Al(C,j),C.return=_,C;case G:return j=to(j,_.mode,C),j.return=_,j;case ie:return j=un(j),H(_,j,C)}if(ye(j)||Z(j))return j=ln(j,_.mode,C,null),j.return=_,j;if(typeof j.then=="function")return H(_,$i(j),C);if(j.$$typeof===Y)return H(_,Fi(_,j),C);er(_,j)}return null}function z(_,j,C,L){var te=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return te!==null?null:m(_,j,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case V:return C.key===te?x(_,j,C,L):null;case G:return C.key===te?E(_,j,C,L):null;case ie:return C=un(C),z(_,j,C,L)}if(ye(C)||Z(C))return te!==null?null:O(_,j,C,L,null);if(typeof C.then=="function")return z(_,j,$i(C),L);if(C.$$typeof===Y)return z(_,j,Fi(_,C),L);er(_,C)}return null}function A(_,j,C,L,te){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(C)||null,m(j,_,""+L,te);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return _=_.get(L.key===null?C:L.key)||null,x(j,_,L,te);case G:return _=_.get(L.key===null?C:L.key)||null,E(j,_,L,te);case ie:return L=un(L),A(_,j,C,L,te)}if(ye(L)||Z(L))return _=_.get(C)||null,O(j,_,L,te,null);if(typeof L.then=="function")return A(_,j,C,$i(L),te);if(L.$$typeof===Y)return A(_,j,C,Fi(j,L),te);er(j,L)}return null}function J(_,j,C,L){for(var te=null,Se=null,ee=j,de=j=0,be=null;ee!==null&&de<C.length;de++){ee.index>de?(be=ee,ee=null):be=ee.sibling;var we=z(_,ee,C[de],L);if(we===null){ee===null&&(ee=be);break}e&&ee&&we.alternate===null&&t(_,ee),j=o(we,j,de),Se===null?te=we:Se.sibling=we,Se=we,ee=be}if(de===C.length)return a(_,ee),xe&&aa(_,de),te;if(ee===null){for(;de<C.length;de++)ee=H(_,C[de],L),ee!==null&&(j=o(ee,j,de),Se===null?te=ee:Se.sibling=ee,Se=ee);return xe&&aa(_,de),te}for(ee=n(ee);de<C.length;de++)be=A(ee,_,de,C[de],L),be!==null&&(e&&be.alternate!==null&&ee.delete(be.key===null?de:be.key),j=o(be,j,de),Se===null?te=be:Se.sibling=be,Se=be);return e&&ee.forEach(function(Xa){return t(_,Xa)}),xe&&aa(_,de),te}function ae(_,j,C,L){if(C==null)throw Error(i(151));for(var te=null,Se=null,ee=j,de=j=0,be=null,we=C.next();ee!==null&&!we.done;de++,we=C.next()){ee.index>de?(be=ee,ee=null):be=ee.sibling;var Xa=z(_,ee,we.value,L);if(Xa===null){ee===null&&(ee=be);break}e&&ee&&Xa.alternate===null&&t(_,ee),j=o(Xa,j,de),Se===null?te=Xa:Se.sibling=Xa,Se=Xa,ee=be}if(we.done)return a(_,ee),xe&&aa(_,de),te;if(ee===null){for(;!we.done;de++,we=C.next())we=H(_,we.value,L),we!==null&&(j=o(we,j,de),Se===null?te=we:Se.sibling=we,Se=we);return xe&&aa(_,de),te}for(ee=n(ee);!we.done;de++,we=C.next())we=A(ee,_,de,we.value,L),we!==null&&(e&&we.alternate!==null&&ee.delete(we.key===null?de:we.key),j=o(we,j,de),Se===null?te=we:Se.sibling=we,Se=we);return e&&ee.forEach(function(yb){return t(_,yb)}),xe&&aa(_,de),te}function Ae(_,j,C,L){if(typeof C=="object"&&C!==null&&C.type===B&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case V:e:{for(var te=C.key;j!==null;){if(j.key===te){if(te=C.type,te===B){if(j.tag===7){a(_,j.sibling),L=r(j,C.props.children),L.return=_,_=L;break e}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ie&&un(te)===j.type){a(_,j.sibling),L=r(j,C.props),Al(L,C),L.return=_,_=L;break e}a(_,j);break}else t(_,j);j=j.sibling}C.type===B?(L=ln(C.props.children,_.mode,L,C.key),L.return=_,_=L):(L=Qi(C.type,C.key,C.props,null,_.mode,L),Al(L,C),L.return=_,_=L)}return h(_);case G:e:{for(te=C.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){a(_,j.sibling),L=r(j,C.children||[]),L.return=_,_=L;break e}else{a(_,j);break}else t(_,j);j=j.sibling}L=to(C,_.mode,L),L.return=_,_=L}return h(_);case ie:return C=un(C),Ae(_,j,C,L)}if(ye(C))return J(_,j,C,L);if(Z(C)){if(te=Z(C),typeof te!="function")throw Error(i(150));return C=te.call(C),ae(_,j,C,L)}if(typeof C.then=="function")return Ae(_,j,$i(C),L);if(C.$$typeof===Y)return Ae(_,j,Fi(_,C),L);er(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(a(_,j.sibling),L=r(j,C),L.return=_,_=L):(a(_,j),L=eo(C,_.mode,L),L.return=_,_=L),h(_)):a(_,j)}return function(_,j,C,L){try{Ml=0;var te=Ae(_,j,C,L);return Hn=null,te}catch(ee){if(ee===Bn||ee===Ji)throw ee;var Se=wt(29,ee,null,_.mode);return Se.lanes=L,Se.return=_,Se}}}var fn=Id(!0),Jd=Id(!1),Ea=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(je&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=Pi(e),Ud(e,null,a),t}return Xi(e,n,t,a),Pi(e)}function Tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gu(e,a)}}function go(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?r=o=h:o=o.next=h,a=a.next}while(a!==null);o===null?r=o=t:o=o.next=t}else r=o=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bo=!1;function Rl(){if(bo){var e=Ln;if(e!==null)throw e}}function Ul(e,t,a,n){bo=!1;var r=e.updateQueue;Ea=!1;var o=r.firstBaseUpdate,h=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var x=m,E=x.next;x.next=null,h===null?o=E:h.next=E,h=x;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==h&&(m===null?O.firstBaseUpdate=E:m.next=E,O.lastBaseUpdate=x))}if(o!==null){var H=r.baseState;h=0,O=E=x=null,m=o;do{var z=m.lane&-536870913,A=z!==m.lane;if(A?(ge&z)===z:(n&z)===z){z!==0&&z===Dn&&(bo=!0),O!==null&&(O=O.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var J=e,ae=m;z=t;var Ae=a;switch(ae.tag){case 1:if(J=ae.payload,typeof J=="function"){H=J.call(Ae,H,z);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ae.payload,z=typeof J=="function"?J.call(Ae,H,z):J,z==null)break e;H=y({},H,z);break e;case 2:Ea=!0}}z=m.callback,z!==null&&(e.flags|=64,A&&(e.flags|=8192),A=r.callbacks,A===null?r.callbacks=[z]:A.push(z))}else A={lane:z,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(E=O=A,x=H):O=O.next=A,h|=z;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;A=m,m=A.next,A.next=null,r.lastBaseUpdate=A,r.shared.pending=null}}while(!0);O===null&&(x=H),r.baseState=x,r.firstBaseUpdate=E,r.lastBaseUpdate=O,o===null&&(r.shared.lanes=0),Ua|=h,e.lanes=h,e.memoizedState=H}}function Wd(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function $d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wd(a[e],t)}var Yn=w(null),tr=w(0);function ef(e,t){e=ha,K(tr,e),K(Yn,t),ha=e|t.baseLanes}function vo(){K(tr,ha),K(Yn,Yn.current)}function xo(){ha=tr.current,D(Yn),D(tr)}var jt=w(null),Dt=null;function Ma(e){var t=e.alternate;K(Ge,Ge.current&1),K(jt,e),Dt===null&&(t===null||Yn.current!==null||t.memoizedState!==null)&&(Dt=e)}function yo(e){K(Ge,Ge.current),K(jt,e),Dt===null&&(Dt=e)}function tf(e){e.tag===22?(K(Ge,Ge.current),K(jt,e),Dt===null&&(Dt=e)):Aa()}function Aa(){K(Ge,Ge.current),K(jt,jt.current)}function kt(e){D(jt),Dt===e&&(Dt=null),D(Ge)}var Ge=w(0);function ar(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cc(a)||Ec(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,ue=null,Ne=null,Pe=null,nr=!1,qn=!1,hn=!1,lr=0,Ol=0,Gn=null,u1=0;function He(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function wo(e,t,a,n,r,o){return ia=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Hf:Lo,hn=!1,o=a(n,r),hn=!1,qn&&(o=nf(t,a,n,r)),af(e),o}function af(e){R.H=Bl;var t=Ne!==null&&Ne.next!==null;if(ia=0,Pe=Ne=ue=null,nr=!1,Ol=0,Gn=null,t)throw Error(i(300));e===null||Qe||(e=e.dependencies,e!==null&&Zi(e)&&(Qe=!0))}function nf(e,t,a,n){ue=e;var r=0;do{if(qn&&(Gn=null),Ol=0,qn=!1,25<=r)throw Error(i(301));if(r+=1,Pe=Ne=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}R.H=Yf,o=t(a,n)}while(qn);return o}function d1(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Dl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),t}function jo(){var e=lr!==0;return lr=0,e}function ko(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _o(e){if(nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}nr=!1}ia=0,Pe=Ne=ue=null,qn=!1,Ol=lr=0,Gn=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ve(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Pe===null?ue.memoizedState:Pe.next;if(t!==null)Pe=t,Ne=e;else{if(e===null)throw ue.alternate===null?Error(i(467)):Error(i(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ir(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var t=Ol;return Ol+=1,Gn===null&&(Gn=[]),e=Kd(Gn,e,t),t=ue,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Hf:Lo),e}function rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===Y)return et(e)}throw Error(i(438,String(e)))}function Co(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ir(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ce;return t.index++,a}function ra(e,t){return typeof t=="function"?t(e):t}function sr(e){var t=Ve();return Eo(t,Ne,e)}function Eo(e,t,a){var n=e.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=a;var r=e.baseQueue,o=n.pending;if(o!==null){if(r!==null){var h=r.next;r.next=o.next,o.next=h}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var m=h=null,x=null,E=t,O=!1;do{var H=E.lane&-536870913;if(H!==E.lane?(ge&H)===H:(ia&H)===H){var z=E.revertLane;if(z===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),H===Dn&&(O=!0);else if((ia&z)===z){E=E.next,z===Dn&&(O=!0);continue}else H={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=H,h=o):x=x.next=H,ue.lanes|=z,Ua|=z;H=E.action,hn&&a(o,H),o=E.hasEagerState?E.eagerState:a(o,H)}else z={lane:H,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=z,h=o):x=x.next=z,ue.lanes|=H,Ua|=H;E=E.next}while(E!==null&&E!==t);if(x===null?h=o:x.next=m,!St(o,e.memoizedState)&&(Qe=!0,O&&(a=Ln,a!==null)))throw a;e.memoizedState=o,e.baseState=h,e.baseQueue=x,n.lastRenderedState=o}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function zo(e){var t=Ve(),a=t.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,o=t.memoizedState;if(r!==null){a.pending=null;var h=r=r.next;do o=e(o,h.action),h=h.next;while(h!==r);St(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function lf(e,t,a){var n=ue,r=Ve(),o=xe;if(o){if(a===void 0)throw Error(i(407));a=a()}else a=t();var h=!St((Ne||r).memoizedState,a);if(h&&(r.memoizedState=a,Qe=!0),r=r.queue,Ao(of.bind(null,n,r,e),[e]),r.getSnapshot!==t||h||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Vn(9,{destroy:void 0},sf.bind(null,n,r,a,t),null),Re===null)throw Error(i(349));o||(ia&127)!==0||rf(n,t,a)}return a}function rf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=ir(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sf(e,t,a,n){t.value=a,t.getSnapshot=n,cf(t)&&uf(e)}function of(e,t,a){return a(function(){cf(t)&&uf(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function uf(e){var t=nn(e,2);t!==null&&gt(t,e,2)}function No(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),hn){ya(!0);try{a()}finally{ya(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function df(e,t,a,n){return e.baseState=a,Eo(e,Ne,typeof n=="function"?n:ra)}function f1(e,t,a,n,r){if(ur(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){o.listeners.push(h)}};R.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,ff(t,o)):(o.next=a.next,t.pending=a.next=o)}}function ff(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=R.T,h={};R.T=h;try{var m=a(r,n),x=R.S;x!==null&&x(h,m),hf(e,t,m)}catch(E){Mo(e,t,E)}finally{o!==null&&h.types!==null&&(o.types=h.types),R.T=o}}else try{o=a(r,n),hf(e,t,o)}catch(E){Mo(e,t,E)}}function hf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){pf(e,t,n)},function(n){return Mo(e,t,n)}):pf(e,t,a)}function pf(e,t,a){t.status="fulfilled",t.value=a,mf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ff(e,a)))}function Mo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,mf(t),t=t.next;while(t!==n)}e.action=null}function mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gf(e,t){return t}function bf(e,t){if(xe){var a=Re.formState;if(a!==null){e:{var n=ue;if(xe){if(Oe){t:{for(var r=Oe,o=Ot;r.nodeType!==8;){if(!o){r=null;break t}if(r=Lt(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){Oe=Lt(r.nextSibling),n=r.data==="F!";break e}}_a(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gf,lastRenderedState:t},a.queue=n,a=Df.bind(null,ue,n),n.dispatch=a,n=No(!1),o=Do.bind(null,ue,!1,n.queue),n=st(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,a=f1.bind(null,ue,r,o,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function vf(e){var t=Ve();return xf(t,Ne,e)}function xf(e,t,a){if(t=Eo(e,t,gf)[0],e=sr(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Dl(t)}catch(h){throw h===Bn?Ji:h}else n=t;t=Ve();var r=t.queue,o=r.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Vn(9,{destroy:void 0},h1.bind(null,r,a),null)),[n,o,e]}function h1(e,t){e.action=t}function yf(e){var t=Ve(),a=Ne;if(a!==null)return xf(t,a,e);Ve(),t=t.memoizedState,a=Ve();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Vn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=ir(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Sf(){return Ve().memoizedState}function or(e,t,a,n){var r=st();ue.flags|=e,r.memoizedState=Vn(1|t,{destroy:void 0},a,n===void 0?null:n)}function cr(e,t,a,n){var r=Ve();n=n===void 0?null:n;var o=r.memoizedState.inst;Ne!==null&&n!==null&&So(n,Ne.memoizedState.deps)?r.memoizedState=Vn(t,o,a,n):(ue.flags|=e,r.memoizedState=Vn(1|t,o,a,n))}function wf(e,t){or(8390656,8,e,t)}function Ao(e,t){cr(2048,8,e,t)}function p1(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=ir(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function jf(e){var t=Ve().memoizedState;return p1({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function kf(e,t){return cr(4,2,e,t)}function _f(e,t){return cr(4,4,e,t)}function Cf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ef(e,t,a){a=a!=null?a.concat([e]):null,cr(4,4,Cf.bind(null,t,e),a)}function To(){}function zf(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&So(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Nf(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&So(t,n[1]))return n[0];if(n=e(),hn){ya(!0);try{e()}finally{ya(!1)}}return a.memoizedState=[n,t],n}function Ro(e,t,a){return a===void 0||(ia&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Mh(),ue.lanes|=e,Ua|=e,a)}function Mf(e,t,a,n){return St(a,t)?a:Yn.current!==null?(e=Ro(e,a,n),St(e,t)||(Qe=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(ge&261930)===0?(Qe=!0,e.memoizedState=a):(e=Mh(),ue.lanes|=e,Ua|=e,t)}function Af(e,t,a,n,r){var o=Q.p;Q.p=o!==0&&8>o?o:8;var h=R.T,m={};R.T=m,Do(e,!1,t,a);try{var x=r(),E=R.S;if(E!==null&&E(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var O=c1(x,n);Ll(e,t,O,Et(e))}else Ll(e,t,n,Et(e))}catch(H){Ll(e,t,{then:function(){},status:"rejected",reason:H},Et())}finally{Q.p=o,h!==null&&m.types!==null&&(h.types=m.types),R.T=h}}function m1(){}function Uo(e,t,a,n){if(e.tag!==5)throw Error(i(476));var r=Tf(e).queue;Af(e,r,t,ne,a===null?m1:function(){return Rf(e),a(n)})}function Tf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rf(e){var t=Tf(e);t.next===null&&(t=e.alternate.memoizedState),Ll(e,t.next.queue,{},Et())}function Oo(){return et(ei)}function Uf(){return Ve().memoizedState}function Of(){return Ve().memoizedState}function g1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Et();e=za(a);var n=Na(t,e,a);n!==null&&(gt(n,t,a),Tl(n,t,a)),t={cache:co()},e.payload=t;return}t=t.return}}function b1(e,t,a){var n=Et();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ur(e)?Lf(t,a):(a=Ws(e,t,a,n),a!==null&&(gt(a,e,n),Bf(a,t,n)))}function Df(e,t,a){var n=Et();Ll(e,t,a,n)}function Ll(e,t,a,n){var r={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ur(e))Lf(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var h=t.lastRenderedState,m=o(h,a);if(r.hasEagerState=!0,r.eagerState=m,St(m,h))return Xi(e,t,r,0),Re===null&&Vi(),!1}catch{}if(a=Ws(e,t,r,n),a!==null)return gt(a,e,n),Bf(a,t,n),!0}return!1}function Do(e,t,a,n){if(n={lane:2,revertLane:pc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ur(e)){if(t)throw Error(i(479))}else t=Ws(e,a,n,2),t!==null&&gt(t,e,2)}function ur(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Lf(e,t){qn=nr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Bf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Gu(e,a)}}var Bl={readContext:et,use:rr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Bl.useEffectEvent=He;var Hf={readContext:et,use:rr,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:wf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,or(4194308,4,Cf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return or(4194308,4,e,t)},useInsertionEffect:function(e,t){or(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(hn){ya(!0);try{e()}finally{ya(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var r=a(t);if(hn){ya(!0);try{a(t)}finally{ya(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=b1.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=No(e);var t=e.queue,a=Df.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:To,useDeferredValue:function(e,t){var a=st();return Ro(a,e,t)},useTransition:function(){var e=No(!1);return e=Af.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,r=st();if(xe){if(a===void 0)throw Error(i(407));a=a()}else{if(a=t(),Re===null)throw Error(i(349));(ge&127)!==0||rf(n,t,a)}r.memoizedState=a;var o={value:a,getSnapshot:t};return r.queue=o,wf(of.bind(null,n,o,e),[e]),n.flags|=2048,Vn(9,{destroy:void 0},sf.bind(null,n,o,a,t),null),a},useId:function(){var e=st(),t=Re.identifierPrefix;if(xe){var a=Qt,n=Pt;a=(n&~(1<<32-yt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=lr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=u1++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:bf,useActionState:bf,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Do.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return st().memoizedState=g1.bind(null,ue)},useEffectEvent:function(e){var t=st(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}},Lo={readContext:et,use:rr,useCallback:zf,useContext:et,useEffect:Ao,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:_f,useMemo:Nf,useReducer:sr,useRef:Sf,useState:function(){return sr(ra)},useDebugValue:To,useDeferredValue:function(e,t){var a=Ve();return Mf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=sr(ra)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:lf,useId:Uf,useHostTransitionStatus:Oo,useFormState:vf,useActionState:vf,useOptimistic:function(e,t){var a=Ve();return df(a,Ne,e,t)},useMemoCache:Co,useCacheRefresh:Of};Lo.useEffectEvent=jf;var Yf={readContext:et,use:rr,useCallback:zf,useContext:et,useEffect:Ao,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:_f,useMemo:Nf,useReducer:zo,useRef:Sf,useState:function(){return zo(ra)},useDebugValue:To,useDeferredValue:function(e,t){var a=Ve();return Ne===null?Ro(a,e,t):Mf(a,Ne.memoizedState,e,t)},useTransition:function(){var e=zo(ra)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:lf,useId:Uf,useHostTransitionStatus:Oo,useFormState:yf,useActionState:yf,useOptimistic:function(e,t){var a=Ve();return Ne!==null?df(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:Of};Yf.useEffectEvent=jf;function Bo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ho={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Et(),r=za(n);r.payload=t,a!=null&&(r.callback=a),t=Na(e,r,n),t!==null&&(gt(t,e,n),Tl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Et(),r=za(n);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Na(e,r,n),t!==null&&(gt(t,e,n),Tl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Et(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=Na(e,n,a),t!==null&&(gt(t,e,a),Tl(t,e,a))}};function qf(e,t,a,n,r,o,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,h):t.prototype&&t.prototype.isPureReactComponent?!kl(a,n)||!kl(r,o):!0}function Gf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function pn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Vf(e){Gi(e)}function Xf(e){console.error(e)}function Pf(e){Gi(e)}function dr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Qf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Yo(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){dr(e,t)},a}function Kf(e){return e=za(e),e.tag=3,e}function Zf(e,t,a,n){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){Qf(t,a,n)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Qf(t,a,n),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function v1(e,t,a,n,r){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&On(t,a,r,!0),a=jt.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?jr():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),dc(e,n,r)),!1;case 22:return a.flags|=65536,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),dc(e,n,r)),!1}throw Error(i(435,a.tag))}return dc(e,n,r),jr(),!1}if(xe)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==lo&&(e=Error(i(422),{cause:n}),El(Tt(e,a)))):(n!==lo&&(t=Error(i(423),{cause:n}),El(Tt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=Tt(n,a),r=Yo(e.stateNode,n,r),go(e,r),Ye!==4&&(Ye=2)),!1;var o=Error(i(520),{cause:n});if(o=Tt(o,a),Ql===null?Ql=[o]:Ql.push(o),Ye!==4&&(Ye=2),t===null)return!0;n=Tt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Yo(a.stateNode,n,e),go(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Kf(r),Zf(r,e,a,n),go(a,r),!1}a=a.return}while(a!==null);return!1}var qo=Error(i(461)),Qe=!1;function tt(e,t,a,n){t.child=e===null?Jd(t,null,a,n):fn(t,e.child,a,n)}function Ff(e,t,a,n,r){a=a.render;var o=t.ref;if("ref"in n){var h={};for(var m in n)m!=="ref"&&(h[m]=n[m])}else h=n;return on(t),n=wo(e,t,a,h,o,r),m=jo(),e!==null&&!Qe?(ko(e,t,r),sa(e,t,r)):(xe&&m&&ao(t),t.flags|=1,tt(e,t,n,r),t.child)}function If(e,t,a,n,r){if(e===null){var o=a.type;return typeof o=="function"&&!$s(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Jf(e,t,o,n,r)):(e=Qi(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Fo(e,r)){var h=o.memoizedProps;if(a=a.compare,a=a!==null?a:kl,a(h,n)&&e.ref===t.ref)return sa(e,t,r)}return t.flags|=1,e=ta(o,n),e.ref=t.ref,e.return=t,t.child=e}function Jf(e,t,a,n,r){if(e!==null){var o=e.memoizedProps;if(kl(o,n)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=n=o,Fo(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,sa(e,t,r)}return Go(e,t,a,n,r)}function Wf(e,t,a,n){var r=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~o}else n=0,t.child=null;return $f(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ii(t,o!==null?o.cachePool:null),o!==null?ef(t,o):vo(),tf(t);else return n=t.lanes=536870912,$f(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(Ii(t,o.cachePool),ef(t,o),Aa(),t.memoizedState=null):(e!==null&&Ii(t,null),vo(),Aa());return tt(e,t,r,a),t.child}function Hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $f(e,t,a,n,r){var o=fo();return o=o===null?null:{parent:Xe._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&Ii(t,null),vo(),tf(t),e!==null&&On(e,t,n,!0),t.childLanes=r,null}function fr(e,t){return t=pr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function eh(e,t,a){return fn(t,e.child,null,a),e=fr(t,t.pendingProps),e.flags|=2,kt(t),t.memoizedState=null,e}function x1(e,t,a){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(n.mode==="hidden")return e=fr(t,n),t.lanes=536870912,Hl(null,e);if(yo(t),(e=Oe)?(e=fp(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Pt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Dd(e),a.return=t,t.child=a,$e=t,Oe=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return fr(t,n)}var o=e.memoizedState;if(o!==null){var h=o.dehydrated;if(yo(t),r)if(t.flags&256)t.flags&=-257,t=eh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Qe||On(e,t,a,!1),r=(a&e.childLanes)!==0,Qe||r){if(n=Re,n!==null&&(h=Vu(n,a),h!==0&&h!==o.retryLane))throw o.retryLane=h,nn(e,h),gt(n,e,h),qo;jr(),t=eh(e,t,a)}else e=o.treeContext,Oe=Lt(h.nextSibling),$e=t,xe=!0,ka=null,Ot=!1,e!==null&&Hd(t,e),t=fr(t,n),t.flags|=4096;return t}return e=ta(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Go(e,t,a,n,r){return on(t),a=wo(e,t,a,n,void 0,r),n=jo(),e!==null&&!Qe?(ko(e,t,r),sa(e,t,r)):(xe&&n&&ao(t),t.flags|=1,tt(e,t,a,r),t.child)}function th(e,t,a,n,r,o){return on(t),t.updateQueue=null,a=nf(t,n,a,r),af(e),n=jo(),e!==null&&!Qe?(ko(e,t,o),sa(e,t,o)):(xe&&n&&ao(t),t.flags|=1,tt(e,t,a,o),t.child)}function ah(e,t,a,n,r){if(on(t),t.stateNode===null){var o=An,h=a.contextType;typeof h=="object"&&h!==null&&(o=et(h)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ho,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},po(t),h=a.contextType,o.context=typeof h=="object"&&h!==null?et(h):An,o.state=t.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(Bo(t,a,h,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(h=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),h!==o.state&&Ho.enqueueReplaceState(o,o.state,null),Ul(t,n,o,r),Rl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,x=pn(a,m);o.props=x;var E=o.context,O=a.contextType;h=An,typeof O=="object"&&O!==null&&(h=et(O));var H=a.getDerivedStateFromProps;O=typeof H=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,O||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||E!==h)&&Gf(t,o,n,h),Ea=!1;var z=t.memoizedState;o.state=z,Ul(t,n,o,r),Rl(),E=t.memoizedState,m||z!==E||Ea?(typeof H=="function"&&(Bo(t,a,H,n),E=t.memoizedState),(x=Ea||qf(t,a,x,n,z,E,h))?(O||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),o.props=n,o.state=E,o.context=h,n=x):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,mo(e,t),h=t.memoizedProps,O=pn(a,h),o.props=O,H=t.pendingProps,z=o.context,E=a.contextType,x=An,typeof E=="object"&&E!==null&&(x=et(E)),m=a.getDerivedStateFromProps,(E=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h!==H||z!==x)&&Gf(t,o,n,x),Ea=!1,z=t.memoizedState,o.state=z,Ul(t,n,o,r),Rl();var A=t.memoizedState;h!==H||z!==A||Ea||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof m=="function"&&(Bo(t,a,m,n),A=t.memoizedState),(O=Ea||qf(t,a,O,n,z,A,x)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(E||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,A,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,A,x)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),o.props=n,o.state=A,o.context=x,n=O):(typeof o.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,hr(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=fn(t,e.child,null,r),t.child=fn(t,null,a,r)):tt(e,t,a,r),t.memoizedState=o.state,e=t.child):e=sa(e,t,r),e}function nh(e,t,a,n){return rn(),t.flags|=256,tt(e,t,a,n),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xo(e){return{baseLanes:e,cachePool:Pd()}}function Po(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function lh(e,t,a){var n=t.pendingProps,r=!1,o=(t.flags&128)!==0,h;if((h=o)||(h=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?Ma(t):Aa(),(e=Oe)?(e=fp(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Pt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=Dd(e),a.return=t,t.child=a,$e=t,Oe=null)):e=null,e===null)throw _a(t);return Ec(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,r?(Aa(),r=t.mode,m=pr({mode:"hidden",children:m},r),n=ln(n,r,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Xo(a),n.childLanes=Po(e,h,a),t.memoizedState=Vo,Hl(null,n)):(Ma(t),Qo(t,m))}var x=e.memoizedState;if(x!==null&&(m=x.dehydrated,m!==null)){if(o)t.flags&256?(Ma(t),t.flags&=-257,t=Ko(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),m=n.fallback,r=t.mode,n=pr({mode:"visible",children:n.children},r),m=ln(m,r,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,fn(t,e.child,null,a),n=t.child,n.memoizedState=Xo(a),n.childLanes=Po(e,h,a),t.memoizedState=Vo,t=Hl(null,n));else if(Ma(t),Ec(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var E=h.dgst;h=E,n=Error(i(419)),n.stack="",n.digest=h,El({value:n,source:null,stack:null}),t=Ko(e,t,a)}else if(Qe||On(e,t,a,!1),h=(a&e.childLanes)!==0,Qe||h){if(h=Re,h!==null&&(n=Vu(h,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,nn(e,n),gt(h,e,n),qo;Cc(m)||jr(),t=Ko(e,t,a)}else Cc(m)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Oe=Lt(m.nextSibling),$e=t,xe=!0,ka=null,Ot=!1,e!==null&&Hd(t,e),t=Qo(t,n.children),t.flags|=4096);return t}return r?(Aa(),m=n.fallback,r=t.mode,x=e.child,E=x.sibling,n=ta(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,E!==null?m=ta(E,m):(m=ln(m,r,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Hl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=Xo(a):(r=m.cachePool,r!==null?(x=Xe._currentValue,r=r.parent!==x?{parent:x,pool:x}:r):r=Pd(),m={baseLanes:m.baseLanes|a,cachePool:r}),n.memoizedState=m,n.childLanes=Po(e,h,a),t.memoizedState=Vo,Hl(e.child,n)):(Ma(t),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=a,t.memoizedState=null,a)}function Qo(e,t){return t=pr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pr(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Ko(e,t,a){return fn(t,e.child,null,a),e=Qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),so(e.return,t,a)}function Zo(e,t,a,n,r,o){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r,treeForkCount:o}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=n,h.tail=a,h.tailMode=r,h.treeForkCount=o)}function rh(e,t,a){var n=t.pendingProps,r=n.revealOrder,o=n.tail;n=n.children;var h=Ge.current,m=(h&2)!==0;if(m?(h=h&1|2,t.flags|=128):h&=1,K(Ge,h),tt(e,t,n,a),n=xe?Cl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,a,t);else if(e.tag===19)ih(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&ar(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Zo(t,!1,r,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ar(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Zo(t,!0,a,null,o,n);break;case"together":Zo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function sa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(On(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,a=ta(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function y1(e,t,a){switch(t.tag){case 3:rt(t,t.stateNode.containerInfo),Ca(t,Xe,e.memoizedState.cache),rn();break;case 27:case 5:dl(t);break;case 4:rt(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lh(e,t,a):(Ma(t),e=sa(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var r=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(On(e,t,a,!1),n=(a&t.childLanes)!==0),r){if(n)return rh(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(Ge,Ge.current),n)break;return null;case 22:return t.lanes=0,Wf(e,t,a,t.pendingProps);case 24:Ca(t,Xe,e.memoizedState.cache)}return sa(e,t,a)}function sh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Fo(e,a)&&(t.flags&128)===0)return Qe=!1,y1(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,xe&&(t.flags&1048576)!==0&&Bd(t,Cl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=un(t.elementType),t.type=e,typeof e=="function")$s(e)?(n=pn(e,n),t.tag=1,t=ah(null,t,e,n,a)):(t.tag=0,t=Go(null,t,e,n,a));else{if(e!=null){var r=e.$$typeof;if(r===W){t.tag=11,t=Ff(null,t,e,n,a);break e}else if(r===P){t.tag=14,t=If(null,t,e,n,a);break e}}throw t=oe(e)||e,Error(i(306,t,""))}}return t;case 0:return Go(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,r=pn(n,t.pendingProps),ah(e,t,n,r,a);case 3:e:{if(rt(t,t.stateNode.containerInfo),e===null)throw Error(i(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,mo(e,t),Ul(t,n,null,a);var h=t.memoizedState;if(n=h.cache,Ca(t,Xe,n),n!==o.cache&&oo(t,[Xe],a,!0),Rl(),n=h.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=nh(e,t,n,a);break e}else if(n!==r){r=Tt(Error(i(424)),t),El(r),t=nh(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Lt(e.firstChild),$e=t,xe=!0,ka=null,Ot=!0,a=Jd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rn(),n===r){t=sa(e,t,a);break e}tt(e,t,n,a)}t=t.child}return t;case 26:return hr(e,t),e===null?(a=vp(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,n=Mr(he.current).createElement(a),n[We]=t,n[ut]=e,at(n,a,e),Fe(n),t.stateNode=n):t.memoizedState=vp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return dl(t),e===null&&xe&&(n=t.stateNode=mp(t.type,t.pendingProps,he.current),$e=t,Ot=!0,r=Oe,Ha(t.type)?(zc=r,Oe=Lt(n.firstChild)):Oe=r),tt(e,t,t.pendingProps.children,a),hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=n=Oe)&&(n=I1(n,t.type,t.pendingProps,Ot),n!==null?(t.stateNode=n,$e=t,Oe=Lt(n.firstChild),Ot=!1,r=!0):r=!1),r||_a(t)),dl(t),r=t.type,o=t.pendingProps,h=e!==null?e.memoizedProps:null,n=o.children,jc(r,o)?n=null:h!==null&&jc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=wo(e,t,d1,null,null,a),ei._currentValue=r),hr(e,t),tt(e,t,n,a),t.child;case 6:return e===null&&xe&&((e=a=Oe)&&(a=J1(a,t.pendingProps,Ot),a!==null?(t.stateNode=a,$e=t,Oe=null,e=!0):e=!1),e||_a(t)),null;case 13:return lh(e,t,a);case 4:return rt(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=fn(t,null,n,a):tt(e,t,n,a),t.child;case 11:return Ff(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ca(t,t.type,n.value),tt(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,on(t),r=et(r),n=n(r),t.flags|=1,tt(e,t,n,a),t.child;case 14:return If(e,t,t.type,t.pendingProps,a);case 15:return Jf(e,t,t.type,t.pendingProps,a);case 19:return rh(e,t,a);case 31:return x1(e,t,a);case 22:return Wf(e,t,a,t.pendingProps);case 24:return on(t),n=et(Xe),e===null?(r=fo(),r===null&&(r=Re,o=co(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=a),r=o),t.memoizedState={parent:n,cache:r},po(t),Ca(t,Xe,r)):((e.lanes&a)!==0&&(mo(e,t),Ul(t,null,null,a),Rl()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ca(t,Xe,n)):(n=o.cache,Ca(t,Xe,n),n!==r.cache&&oo(t,[Xe],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function oa(e){e.flags|=4}function Io(e,t,a,n,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Uh())e.flags|=8192;else throw dn=Wi,ho}else e.flags&=-16777217}function oh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jp(t))if(Uh())e.flags|=8192;else throw dn=Wi,ho}function mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yu():536870912,e.lanes|=t,Kn|=t)}function Yl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function S1(e,t,a){var n=t.pendingProps;switch(no(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(Xe),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Un(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,io())),De(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(oa(t),o!==null?(De(t),oh(t,o)):(De(t),Io(t,r,null,n,a))):o?o!==e.memoizedState?(oa(t),De(t),oh(t,o)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&oa(t),De(t),Io(t,r,e,n,a)),null;case 27:if(Ci(t),a=he.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return De(t),null}e=I.current,Un(t)?Yd(t):(e=mp(r,n,a),t.stateNode=e,oa(t))}return De(t),null;case 5:if(Ci(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(!n){if(t.stateNode===null)throw Error(i(166));return De(t),null}if(o=I.current,Un(t))Yd(t);else{var h=Mr(he.current);switch(o){case 1:o=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=h.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?h.createElement("select",{is:n.is}):h.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?h.createElement(r,{is:n.is}):h.createElement(r)}}o[We]=t,o[ut]=n;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)o.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=o;e:switch(at(o,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&oa(t)}}return De(t),Io(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&oa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(i(166));if(e=he.current,Un(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,r=$e,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||lp(e.nodeValue,a)),e||_a(t,!0)}else e=Mr(e).createTextNode(n),e[We]=t,t.stateNode=e}return De(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Un(t),a!==null){if(e===null){if(!n)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[We]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else a=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(kt(t),t):(kt(t),null);if((t.flags&128)!==0)throw Error(i(558))}return De(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Un(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(i(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));r[We]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),r=!1}else r=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(kt(t),t):(kt(t),null)}return kt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),mr(t,t.updateQueue),De(t),null);case 4:return qe(),e===null&&vc(t.stateNode.containerInfo),De(t),null;case 10:return la(t.type),De(t),null;case 19:if(D(Ge),n=t.memoizedState,n===null)return De(t),null;if(r=(t.flags&128)!==0,o=n.rendering,o===null)if(r)Yl(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ar(e),o!==null){for(t.flags|=128,Yl(n,!1),e=o.updateQueue,t.updateQueue=e,mr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Od(a,e),a=a.sibling;return K(Ge,Ge.current&1|2),xe&&aa(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&vt()>yr&&(t.flags|=128,r=!0,Yl(n,!1),t.lanes=4194304)}else{if(!r)if(e=ar(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,mr(t,e),Yl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!xe)return De(t),null}else 2*vt()-n.renderingStartTime>yr&&a!==536870912&&(t.flags|=128,r=!0,Yl(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=vt(),e.sibling=null,a=Ge.current,K(Ge,r?a&1|2:a&1),xe&&aa(t,n.treeForkCount),e):(De(t),null);case 22:case 23:return kt(t),xo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&mr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&D(cn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(Xe),De(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function w1(e,t){switch(no(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(Xe),qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ci(t),null;case 31:if(t.memoizedState!==null){if(kt(t),t.alternate===null)throw Error(i(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ge),null;case 4:return qe(),null;case 10:return la(t.type),null;case 22:case 23:return kt(t),xo(),e!==null&&D(cn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(Xe),null;case 25:return null;default:return null}}function ch(e,t){switch(no(t),t.tag){case 3:la(Xe),qe();break;case 26:case 27:case 5:Ci(t);break;case 4:qe();break;case 31:t.memoizedState!==null&&kt(t);break;case 13:kt(t);break;case 19:D(Ge);break;case 10:la(t.type);break;case 22:case 23:kt(t),xo(),e!==null&&D(cn);break;case 24:la(Xe)}}function ql(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var o=a.create,h=a.inst;n=o(),h.destroy=n}a=a.next}while(a!==r)}}catch(m){ze(t,t.return,m)}}function Ta(e,t,a){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){var h=n.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,r=t;var x=a,E=m;try{E()}catch(O){ze(r,x,O)}}}n=n.next}while(n!==o)}}catch(O){ze(t,t.return,O)}}function uh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$d(t,a)}catch(n){ze(e,e.return,n)}}}function dh(e,t,a){a.props=pn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ze(e,t,n)}}function Gl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(r){ze(e,t,r)}}function Kt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(r){ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ze(e,t,r)}else a.current=null}function fh(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){ze(e,e.return,r)}}function Jo(e,t,a){try{var n=e.stateNode;X1(n,e.type,a,t),n[ut]=t}catch(r){ze(e,e.return,r)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(n!==4&&(n===27&&Ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function gr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gr(e,t,a),e=e.sibling;e!==null;)gr(e,t,a),e=e.sibling}function ph(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);at(t,n,a),t[We]=e,t[ut]=a}catch(o){ze(e,e.return,o)}}var ca=!1,Ke=!1,ec=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function j1(e,t){if(e=e.containerInfo,Sc=Lr,e=Cd(e),Qs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var h=0,m=-1,x=-1,E=0,O=0,H=e,z=null;t:for(;;){for(var A;H!==a||r!==0&&H.nodeType!==3||(m=h+r),H!==o||n!==0&&H.nodeType!==3||(x=h+n),H.nodeType===3&&(h+=H.nodeValue.length),(A=H.firstChild)!==null;)z=H,H=A;for(;;){if(H===e)break t;if(z===a&&++E===r&&(m=h),z===o&&++O===n&&(x=h),(A=H.nextSibling)!==null)break;H=z,z=H.parentNode}H=A}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:e,selectionRange:a},Lr=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,r=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var J=pn(a.type,r);e=n.getSnapshotBeforeUpdate(J,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){ze(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function gh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),n&4&&ql(5,a);break;case 1:if(da(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){ze(a,a.return,h)}else{var r=pn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){ze(a,a.return,h)}}n&64&&uh(a),n&512&&Gl(a,a.return);break;case 3:if(da(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$d(e,t)}catch(h){ze(a,a.return,h)}}break;case 27:t===null&&n&4&&ph(a);case 26:case 5:da(e,a),t===null&&n&4&&fh(a),n&512&&Gl(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),n&4&&xh(e,a);break;case 13:da(e,a),n&4&&yh(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=T1.bind(null,a),W1(e,a))));break;case 22:if(n=a.memoizedState!==null||ca,!n){t=t!==null&&t.memoizedState!==null||Ke,r=ca;var o=Ke;ca=n,(Ke=t)&&!o?fa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),ca=r,Ke=o}break;case 30:break;default:da(e,a)}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ns(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ft=!1;function ua(e,t,a){for(a=a.child;a!==null;)vh(e,t,a),a=a.sibling}function vh(e,t,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(fl,a)}catch{}switch(a.tag){case 26:Ke||Kt(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Kt(a,t);var n=Le,r=ft;Ha(a.type)&&(Le=a.stateNode,ft=!1),ua(e,t,a),Jl(a.stateNode),Le=n,ft=r;break;case 5:Ke||Kt(a,t);case 6:if(n=Le,r=ft,Le=null,ua(e,t,a),Le=n,ft=r,Le!==null)if(ft)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(o){ze(a,t,o)}else try{Le.removeChild(a.stateNode)}catch(o){ze(a,t,o)}break;case 18:Le!==null&&(ft?(e=Le,up(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):up(Le,a.stateNode));break;case 4:n=Le,r=ft,Le=a.stateNode.containerInfo,ft=!0,ua(e,t,a),Le=n,ft=r;break;case 0:case 11:case 14:case 15:Ta(2,a,t),Ke||Ta(4,a,t),ua(e,t,a);break;case 1:Ke||(Kt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&dh(a,t,n)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:Ke=(n=Ke)||a.memoizedState!==null,ua(e,t,a),Ke=n;break;default:ua(e,t,a)}}function xh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tl(e)}catch(a){ze(t,t.return,a)}}}function yh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){ze(t,t.return,a)}}function k1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(i(435,e.tag))}}function br(e,t){var a=k1(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var r=R1.bind(null,e,n);n.then(r,r)}})}function ht(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n],o=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 27:if(Ha(m.type)){Le=m.stateNode,ft=!1;break e}break;case 5:Le=m.stateNode,ft=!1;break e;case 3:case 4:Le=m.stateNode.containerInfo,ft=!0;break e}m=m.return}if(Le===null)throw Error(i(160));vh(o,h,r),Le=null,ft=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sh(t,e),t=t.sibling}var Gt=null;function Sh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),pt(e),n&4&&(Ta(3,e,e.return),ql(3,e),Ta(5,e,e.return));break;case 1:ht(t,e),pt(e),n&512&&(Ke||a===null||Kt(a,a.return)),n&64&&ca&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var r=Gt;if(ht(t,e),pt(e),n&512&&(Ke||a===null||Kt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":o=r.getElementsByTagName("title")[0],(!o||o[ml]||o[We]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),at(o,n,a),o[We]=e,Fe(o),n=o;break e;case"link":var h=Sp("link","href",r).get(n+(a.href||""));if(h){for(var m=0;m<h.length;m++)if(o=h[m],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(m,1);break t}}o=r.createElement(n),at(o,n,a),r.head.appendChild(o);break;case"meta":if(h=Sp("meta","content",r).get(n+(a.content||""))){for(m=0;m<h.length;m++)if(o=h[m],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(m,1);break t}}o=r.createElement(n),at(o,n,a),r.head.appendChild(o);break;default:throw Error(i(468,n))}o[We]=e,Fe(o),n=o}e.stateNode=n}else wp(r,e.type,e.stateNode);else e.stateNode=yp(r,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?wp(r,e.type,e.stateNode):yp(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Jo(e,e.memoizedProps,a.memoizedProps)}break;case 27:ht(t,e),pt(e),n&512&&(Ke||a===null||Kt(a,a.return)),a!==null&&n&4&&Jo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ht(t,e),pt(e),n&512&&(Ke||a===null||Kt(a,a.return)),e.flags&32){r=e.stateNode;try{kn(r,"")}catch(J){ze(e,e.return,J)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Jo(e,r,a!==null?a.memoizedProps:r)),n&1024&&(ec=!0);break;case 6:if(ht(t,e),pt(e),n&4){if(e.stateNode===null)throw Error(i(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(J){ze(e,e.return,J)}}break;case 3:if(Rr=null,r=Gt,Gt=Ar(t.containerInfo),ht(t,e),Gt=r,pt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(t.containerInfo)}catch(J){ze(e,e.return,J)}ec&&(ec=!1,wh(e));break;case 4:n=Gt,Gt=Ar(e.stateNode.containerInfo),ht(t,e),pt(e),Gt=n;break;case 12:ht(t,e),pt(e);break;case 31:ht(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,br(e,n)));break;case 13:ht(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xr=vt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,br(e,n)));break;case 22:r=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,E=ca,O=Ke;if(ca=E||r,Ke=O||x,ht(t,e),Ke=O,ca=E,pt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||x||ca||Ke||mn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(o=x.stateNode,r)h=o.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=x.stateNode;var H=x.memoizedProps.style,z=H!=null&&H.hasOwnProperty("display")?H.display:null;m.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(J){ze(x,x.return,J)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=r?"":x.memoizedProps}catch(J){ze(x,x.return,J)}}}else if(t.tag===18){if(a===null){x=t;try{var A=x.stateNode;r?dp(A,!0):dp(x.stateNode,!1)}catch(J){ze(x,x.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,br(e,a))));break;case 19:ht(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,br(e,n)));break;case 30:break;case 21:break;default:ht(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(hh(n)){a=n;break}n=n.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var r=a.stateNode,o=Wo(e);gr(e,o,r);break;case 5:var h=a.stateNode;a.flags&32&&(kn(h,""),a.flags&=-33);var m=Wo(e);gr(e,m,h);break;case 3:case 4:var x=a.stateNode.containerInfo,E=Wo(e);$o(e,E,x);break;default:throw Error(i(161))}}catch(O){ze(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gh(e,t.alternate,t),t=t.sibling}function mn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),mn(t);break;case 1:Kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&dh(t,t.return,a),mn(t);break;case 27:Jl(t.stateNode);case 26:case 5:Kt(t,t.return),mn(t);break;case 22:t.memoizedState===null&&mn(t);break;case 30:mn(t);break;default:mn(t)}e=e.sibling}}function fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,o=t,h=o.flags;switch(o.tag){case 0:case 11:case 15:fa(r,o,a),ql(4,o);break;case 1:if(fa(r,o,a),n=o,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(E){ze(n,n.return,E)}if(n=o,r=n.updateQueue,r!==null){var m=n.stateNode;try{var x=r.shared.hiddenCallbacks;if(x!==null)for(r.shared.hiddenCallbacks=null,r=0;r<x.length;r++)Wd(x[r],m)}catch(E){ze(n,n.return,E)}}a&&h&64&&uh(o),Gl(o,o.return);break;case 27:ph(o);case 26:case 5:fa(r,o,a),a&&n===null&&h&4&&fh(o),Gl(o,o.return);break;case 12:fa(r,o,a);break;case 31:fa(r,o,a),a&&h&4&&xh(r,o);break;case 13:fa(r,o,a),a&&h&4&&yh(r,o);break;case 22:o.memoizedState===null&&fa(r,o,a),Gl(o,o.return);break;case 30:break;default:fa(r,o,a)}t=t.sibling}}function tc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zl(a))}function ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zl(e))}function Vt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,a,n),t=t.sibling}function jh(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,a,n),r&2048&&ql(9,t);break;case 1:Vt(e,t,a,n);break;case 3:Vt(e,t,a,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zl(e)));break;case 12:if(r&2048){Vt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,h=o.id,m=o.onPostCommit;typeof m=="function"&&m(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){ze(t,t.return,x)}}else Vt(e,t,a,n);break;case 31:Vt(e,t,a,n);break;case 13:Vt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,h=t.alternate,t.memoizedState!==null?o._visibility&2?Vt(e,t,a,n):Vl(e,t):o._visibility&2?Vt(e,t,a,n):(o._visibility|=2,Xn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&tc(h,t);break;case 24:Vt(e,t,a,n),r&2048&&ac(t.alternate,t);break;default:Vt(e,t,a,n)}}function Xn(e,t,a,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,h=t,m=a,x=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:Xn(o,h,m,x,r),ql(8,h);break;case 23:break;case 22:var O=h.stateNode;h.memoizedState!==null?O._visibility&2?Xn(o,h,m,x,r):Vl(o,h):(O._visibility|=2,Xn(o,h,m,x,r)),r&&E&2048&&tc(h.alternate,h);break;case 24:Xn(o,h,m,x,r),r&&E&2048&&ac(h.alternate,h);break;default:Xn(o,h,m,x,r)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:Vl(a,n),r&2048&&tc(n.alternate,n);break;case 24:Vl(a,n),r&2048&&ac(n.alternate,n);break;default:Vl(a,n)}t=t.sibling}}var Xl=8192;function Pn(e,t,a){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)kh(e,t,a),e=e.sibling}function kh(e,t,a){switch(e.tag){case 26:Pn(e,t,a),e.flags&Xl&&e.memoizedState!==null&&ub(a,Gt,e.memoizedState,e.memoizedProps);break;case 5:Pn(e,t,a);break;case 3:case 4:var n=Gt;Gt=Ar(e.stateNode.containerInfo),Pn(e,t,a),Gt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Xl,Xl=16777216,Pn(e,t,a),Xl=n):Pn(e,t,a));break;default:Pn(e,t,a)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,Eh(n,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ch(e),e=e.sibling}function Ch(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vr(e)):Pl(e);break;default:Pl(e)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,Eh(n,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),vr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,vr(t));break;default:vr(t)}e=e.sibling}}function Eh(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:zl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ie=n;else e:for(a=e;Ie!==null;){n=Ie;var r=n.sibling,o=n.return;if(bh(n),n===a){Ie=null;break e}if(r!==null){r.return=o,Ie=r;break e}Ie=o}}}var _1={getCacheForType:function(e){var t=et(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Xe).controller.signal}},C1=typeof WeakMap=="function"?WeakMap:Map,je=0,Re=null,pe=null,ge=0,Ee=0,_t=null,Ra=!1,Qn=!1,nc=!1,ha=0,Ye=0,Ua=0,gn=0,lc=0,Ct=0,Kn=0,Ql=null,mt=null,ic=!1,xr=0,zh=0,yr=1/0,Sr=null,Oa=null,Ze=0,Da=null,Zn=null,pa=0,rc=0,sc=null,Nh=null,Kl=0,oc=null;function Et(){return(je&2)!==0&&ge!==0?ge&-ge:R.T!==null?pc():Xu()}function Mh(){if(Ct===0)if((ge&536870912)===0||xe){var e=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),Ct=e}else Ct=536870912;return e=jt.current,e!==null&&(e.flags|=32),Ct}function gt(e,t,a){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Fn(e,0),La(e,ge,Ct,!1)),pl(e,a),((je&2)===0||e!==Re)&&(e===Re&&((je&2)===0&&(gn|=a),Ye===4&&La(e,ge,Ct,!1)),Zt(e))}function Ah(e,t,a){if((je&6)!==0)throw Error(i(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||hl(e,t),r=n?N1(e,t):uc(e,t,!0),o=n;do{if(r===0){Qn&&!n&&La(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!E1(a)){r=uc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var m=e;r=Ql;var x=m.current.memoizedState.isDehydrated;if(x&&(Fn(m,h).flags|=256),h=uc(m,h,!1),h!==2){if(nc&&!x){m.errorRecoveryDisabledLanes|=o,gn|=o,r=4;break e}o=mt,mt=r,o!==null&&(mt===null?mt=o:mt.push.apply(mt,o))}r=h}if(o=!1,r!==2)continue}}if(r===1){Fn(e,0),La(e,t,0,!0);break}e:{switch(n=e,o=r,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:La(n,t,Ct,!Ra);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(r=xr+300-vt(),10<r)){if(La(n,t,Ct,!Ra),Ai(n,0,!0)!==0)break e;pa=t,n.timeoutHandle=op(Th.bind(null,n,a,mt,Sr,ic,t,Ct,gn,Kn,Ra,o,"Throttled",-0,0),r);break e}Th(n,a,mt,Sr,ic,t,Ct,gn,Kn,Ra,o,null,-0,0)}}break}while(!0);Zt(e)}function Th(e,t,a,n,r,o,h,m,x,E,O,H,z,A){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},kh(t,o,H);var J=(o&62914560)===o?xr-vt():(o&4194048)===o?zh-vt():0;if(J=db(H,J),J!==null){pa=o,e.cancelPendingCommit=J(Yh.bind(null,e,t,o,a,n,r,h,m,x,O,H,null,z,A)),La(e,o,h,!E);return}}Yh(e,t,o,a,n,r,h,m,x)}function E1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var r=a[n],o=r.getSnapshot;r=r.value;try{if(!St(o(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function La(e,t,a,n){t&=~lc,t&=~gn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-yt(r),h=1<<o;n[o]=-1,r&=~h}a!==0&&qu(e,a,t)}function wr(){return(je&6)===0?(Zl(0),!1):!0}function cc(){if(pe!==null){if(Ee===0)var e=pe.return;else e=pe,na=sn=null,_o(e),Hn=null,Ml=0,e=pe;for(;e!==null;)ch(e.alternate,e),e=e.return;pe=null}}function Fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,K1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,cc(),Re=e,pe=a=ta(e.current,null),ge=t,Ee=0,_t=null,Ra=!1,Qn=hl(e,t),nc=!1,Kn=Ct=lc=gn=Ua=Ye=0,mt=Ql=null,ic=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-yt(n),o=1<<r;t|=e[r],n&=~o}return ha=t,Vi(),a}function Rh(e,t){ue=null,R.H=Bl,t===Bn||t===Ji?(t=Zd(),Ee=3):t===ho?(t=Zd(),Ee=4):Ee=t===qo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,pe===null&&(Ye=1,dr(e,Tt(t,e.current)))}function Uh(){var e=jt.current;return e===null?!0:(ge&4194048)===ge?Dt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Dt:!1}function Oh(){var e=R.H;return R.H=Bl,e===null?Bl:e}function Dh(){var e=R.A;return R.A=_1,e}function jr(){Ye=4,Ra||(ge&4194048)!==ge&&jt.current!==null||(Qn=!0),(Ua&134217727)===0&&(gn&134217727)===0||Re===null||La(Re,ge,Ct,!1)}function uc(e,t,a){var n=je;je|=2;var r=Oh(),o=Dh();(Re!==e||ge!==t)&&(Sr=null,Fn(e,t)),t=!1;var h=Ye;e:do try{if(Ee!==0&&pe!==null){var m=pe,x=_t;switch(Ee){case 8:cc(),h=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var E=Ee;if(Ee=0,_t=null,In(e,m,x,E),a&&Qn){h=0;break e}break;default:E=Ee,Ee=0,_t=null,In(e,m,x,E)}}z1(),h=Ye;break}catch(O){Rh(e,O)}while(!0);return t&&e.shellSuspendCounter++,na=sn=null,je=n,R.H=r,R.A=o,pe===null&&(Re=null,ge=0,Vi()),h}function z1(){for(;pe!==null;)Lh(pe)}function N1(e,t){var a=je;je|=2;var n=Oh(),r=Dh();Re!==e||ge!==t?(Sr=null,yr=vt()+500,Fn(e,t)):Qn=hl(e,t);e:do try{if(Ee!==0&&pe!==null){t=pe;var o=_t;t:switch(Ee){case 1:Ee=0,_t=null,In(e,t,o,1);break;case 2:case 9:if(Qd(o)){Ee=0,_t=null,Bh(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),Zt(e)},o.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Qd(o)?(Ee=0,_t=null,Bh(t)):(Ee=0,_t=null,In(e,t,o,7));break;case 5:var h=null;switch(pe.tag){case 26:h=pe.memoizedState;case 5:case 27:var m=pe;if(h?jp(h):m.stateNode.complete){Ee=0,_t=null;var x=m.sibling;if(x!==null)pe=x;else{var E=m.return;E!==null?(pe=E,kr(E)):pe=null}break t}}Ee=0,_t=null,In(e,t,o,5);break;case 6:Ee=0,_t=null,In(e,t,o,6);break;case 8:cc(),Ye=6;break e;default:throw Error(i(462))}}M1();break}catch(O){Rh(e,O)}while(!0);return na=sn=null,R.H=n,R.A=r,je=a,pe!==null?0:(Re=null,ge=0,Vi(),Ye)}function M1(){for(;pe!==null&&!$0();)Lh(pe)}function Lh(e){var t=sh(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?kr(e):pe=t}function Bh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=th(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=th(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:_o(t);default:ch(a,t),t=pe=Od(t,ha),t=sh(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?kr(e):pe=t}function In(e,t,a,n){na=sn=null,_o(t),Hn=null,Ml=0;var r=t.return;try{if(v1(e,r,t,a,ge)){Ye=1,dr(e,Tt(a,e.current)),pe=null;return}}catch(o){if(r!==null)throw pe=r,o;Ye=1,dr(e,Tt(a,e.current)),pe=null;return}t.flags&32768?(xe||n===1?e=!0:Qn||(ge&536870912)!==0?e=!1:(Ra=e=!0,(n===2||n===9||n===3||n===6)&&(n=jt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Hh(t,e)):kr(t)}function kr(e){var t=e;do{if((t.flags&32768)!==0){Hh(t,Ra);return}e=t.return;var a=S1(t.alternate,t,ha);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Ye===0&&(Ye=5)}function Hh(e,t){do{var a=w1(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ye=6,pe=null}function Yh(e,t,a,n,r,o,h,m,x){e.cancelPendingCommit=null;do _r();while(Ze!==0);if((je&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Js,cg(e,a,o,h,m,x),e===Re&&(pe=Re=null,ge=0),Zn=t,Da=e,pa=a,rc=o,sc=r,Nh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U1(Ei,function(){return Ph(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,r=Q.p,Q.p=2,h=je,je|=4;try{j1(e,t,a)}finally{je=h,Q.p=r,R.T=n}}Ze=1,qh(),Gh(),Vh()}}function qh(){if(Ze===1){Ze=0;var e=Da,t=Zn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=Q.p;Q.p=2;var r=je;je|=4;try{Sh(t,e);var o=wc,h=Cd(e.containerInfo),m=o.focusedElem,x=o.selectionRange;if(h!==m&&m&&m.ownerDocument&&_d(m.ownerDocument.documentElement,m)){if(x!==null&&Qs(m)){var E=x.start,O=x.end;if(O===void 0&&(O=E),"selectionStart"in m)m.selectionStart=E,m.selectionEnd=Math.min(O,m.value.length);else{var H=m.ownerDocument||document,z=H&&H.defaultView||window;if(z.getSelection){var A=z.getSelection(),J=m.textContent.length,ae=Math.min(x.start,J),Ae=x.end===void 0?ae:Math.min(x.end,J);!A.extend&&ae>Ae&&(h=Ae,Ae=ae,ae=h);var _=kd(m,ae),j=kd(m,Ae);if(_&&j&&(A.rangeCount!==1||A.anchorNode!==_.node||A.anchorOffset!==_.offset||A.focusNode!==j.node||A.focusOffset!==j.offset)){var C=H.createRange();C.setStart(_.node,_.offset),A.removeAllRanges(),ae>Ae?(A.addRange(C),A.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),A.addRange(C))}}}}for(H=[],A=m;A=A.parentNode;)A.nodeType===1&&H.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<H.length;m++){var L=H[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Lr=!!Sc,wc=Sc=null}finally{je=r,Q.p=n,R.T=a}}e.current=t,Ze=2}}function Gh(){if(Ze===2){Ze=0;var e=Da,t=Zn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=Q.p;Q.p=2;var r=je;je|=4;try{gh(e,t.alternate,t)}finally{je=r,Q.p=n,R.T=a}}Ze=3}}function Vh(){if(Ze===4||Ze===3){Ze=0,eg();var e=Da,t=Zn,a=pa,n=Nh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Zn=Da=null,Xh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Oa=null),Es(a),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,r=Q.p,Q.p=2,R.T=null;try{for(var o=e.onRecoverableError,h=0;h<n.length;h++){var m=n[h];o(m.value,{componentStack:m.stack})}}finally{R.T=t,Q.p=r}}(pa&3)!==0&&_r(),Zt(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===oc?Kl++:(Kl=0,oc=e):Kl=0,Zl(0)}}function Xh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zl(t)))}function _r(){return qh(),Gh(),Vh(),Ph()}function Ph(){if(Ze!==5)return!1;var e=Da,t=rc;rc=0;var a=Es(pa),n=R.T,r=Q.p;try{Q.p=32>a?32:a,R.T=null,a=sc,sc=null;var o=Da,h=pa;if(Ze=0,Zn=Da=null,pa=0,(je&6)!==0)throw Error(i(331));var m=je;if(je|=4,Ch(o.current),jh(o,o.current,h,a),je=m,Zl(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(fl,o)}catch{}return!0}finally{Q.p=r,R.T=n,Xh(e,t)}}function Qh(e,t,a){t=Tt(a,t),t=Yo(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(pl(e,2),Zt(e))}function ze(e,t,a){if(e.tag===3)Qh(e,e,a);else for(;t!==null;){if(t.tag===3){Qh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Oa===null||!Oa.has(n))){e=Tt(a,e),a=Kf(2),n=Na(t,a,2),n!==null&&(Zf(a,n,t,e),pl(n,2),Zt(n));break}}t=t.return}}function dc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new C1;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(nc=!0,r.add(a),e=A1.bind(null,e,t,a),t.then(e,e))}function A1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(ge&a)===a&&(Ye===4||Ye===3&&(ge&62914560)===ge&&300>vt()-xr?(je&2)===0&&Fn(e,0):lc|=a,Kn===ge&&(Kn=0)),Zt(e)}function Kh(e,t){t===0&&(t=Yu()),e=nn(e,t),e!==null&&(pl(e,t),Zt(e))}function T1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Kh(e,a)}function R1(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(i(314))}n!==null&&n.delete(t),Kh(e,a)}function U1(e,t){return js(e,t)}var Cr=null,Jn=null,fc=!1,Er=!1,hc=!1,Ba=0;function Zt(e){e!==Jn&&e.next===null&&(Jn===null?Cr=Jn=e:Jn=Jn.next=e),Er=!0,fc||(fc=!0,D1())}function Zl(e,t){if(!hc&&Er){hc=!0;do for(var a=!1,n=Cr;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var o=0;else{var h=n.suspendedLanes,m=n.pingedLanes;o=(1<<31-yt(42|e)+1)-1,o&=r&~(h&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Jh(n,o))}else o=ge,o=Ai(n,n===Re?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||hl(n,o)||(a=!0,Jh(n,o));n=n.next}while(a);hc=!1}}function O1(){Zh()}function Zh(){Er=fc=!1;var e=0;Ba!==0&&Q1()&&(e=Ba);for(var t=vt(),a=null,n=Cr;n!==null;){var r=n.next,o=Fh(n,t);o===0?(n.next=null,a===null?Cr=r:a.next=r,r===null&&(Jn=a)):(a=n,(e!==0||(o&3)!==0)&&(Er=!0)),n=r}Ze!==0&&Ze!==5||Zl(e),Ba!==0&&(Ba=0)}function Fh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var h=31-yt(o),m=1<<h,x=r[h];x===-1?((m&a)===0||(m&n)!==0)&&(r[h]=og(m,t)):x<=t&&(e.expiredLanes|=m),o&=~m}if(t=Re,a=ge,a=Ai(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||hl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ks(n),Es(a)){case 2:case 8:a=Bu;break;case 32:a=Ei;break;case 268435456:a=Hu;break;default:a=Ei}return n=Ih.bind(null,e),a=js(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ks(n),e.callbackPriority=2,e.callbackNode=null,2}function Ih(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_r()&&e.callbackNode!==a)return null;var n=ge;return n=Ai(e,e===Re?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Ah(e,n,t),Fh(e,vt()),e.callbackNode!=null&&e.callbackNode===a?Ih.bind(null,e):null)}function Jh(e,t){if(_r())return null;Ah(e,t,!0)}function D1(){Z1(function(){(je&6)!==0?js(Lu,O1):Zh()})}function pc(){if(Ba===0){var e=Dn;e===0&&(e=zi,zi<<=1,(zi&261888)===0&&(zi=256)),Ba=e}return Ba}function Wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function $h(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function L1(e,t,a,n,r){if(t==="submit"&&a&&a.stateNode===r){var o=Wh((r[ut]||null).action),h=n.submitter;h&&(t=(t=h[ut]||null)?Wh(t.formAction):h.getAttribute("formAction"),t!==null&&(o=t,h=null));var m=new Hi("action","action",null,n,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ba!==0){var x=h?$h(r,h):new FormData(r);Uo(a,{pending:!0,data:x,method:r.method,action:o},null,x)}}else typeof o=="function"&&(m.preventDefault(),x=h?$h(r,h):new FormData(r),Uo(a,{pending:!0,data:x,method:r.method,action:o},o,x))},currentTarget:r}]})}}for(var mc=0;mc<Is.length;mc++){var gc=Is[mc],B1=gc.toLowerCase(),H1=gc[0].toUpperCase()+gc.slice(1);qt(B1,"on"+H1)}qt(Nd,"onAnimationEnd"),qt(Md,"onAnimationIteration"),qt(Ad,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(t1,"onTransitionRun"),qt(a1,"onTransitionStart"),qt(n1,"onTransitionCancel"),qt(Td,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function ep(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var h=n.length-1;0<=h;h--){var m=n[h],x=m.instance,E=m.currentTarget;if(m=m.listener,x!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=E;try{o(r)}catch(O){Gi(O)}r.currentTarget=null,o=x}else for(h=0;h<n.length;h++){if(m=n[h],x=m.instance,E=m.currentTarget,m=m.listener,x!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=E;try{o(r)}catch(O){Gi(O)}r.currentTarget=null,o=x}}}}function me(e,t){var a=t[zs];a===void 0&&(a=t[zs]=new Set);var n=e+"__bubble";a.has(n)||(tp(t,e,2,!1),a.add(n))}function bc(e,t,a){var n=0;t&&(n|=4),tp(a,e,n,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function vc(e){if(!e[zr]){e[zr]=!0,Ku.forEach(function(a){a!=="selectionchange"&&(Y1.has(a)||bc(a,!1,e),bc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,bc("selectionchange",!1,t))}}function tp(e,t,a,n){switch(Mp(t)){case 2:var r=pb;break;case 8:r=mb;break;default:r=Rc}a=r.bind(null,t,a,e),r=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function xc(e,t,a,n,r){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var h=n.tag;if(h===3||h===4){var m=n.stateNode.containerInfo;if(m===r)break;if(h===4)for(h=n.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;m!==null;){if(h=xn(m),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){n=o=h;continue e}m=m.parentNode}}n=n.return}id(function(){var E=o,O=Os(a),H=[];e:{var z=Rd.get(e);if(z!==void 0){var A=Hi,J=e;switch(e){case"keypress":if(Li(a)===0)break e;case"keydown":case"keyup":A=Rg;break;case"focusin":J="focus",A=qs;break;case"focusout":J="blur",A=qs;break;case"beforeblur":case"afterblur":A=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Dg;break;case Nd:case Md:case Ad:A=kg;break;case Td:A=Bg;break;case"scroll":case"scrollend":A=xg;break;case"wheel":A=Yg;break;case"copy":case"cut":case"paste":A=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ud;break;case"toggle":case"beforetoggle":A=Gg}var ae=(t&4)!==0,Ae=!ae&&(e==="scroll"||e==="scrollend"),_=ae?z!==null?z+"Capture":null:z;ae=[];for(var j=E,C;j!==null;){var L=j;if(C=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||C===null||_===null||(L=bl(j,_),L!=null&&ae.push(Il(j,L,C))),Ae)break;j=j.return}0<ae.length&&(z=new A(z,J,null,a,O),H.push({event:z,listeners:ae}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",z&&a!==Us&&(J=a.relatedTarget||a.fromElement)&&(xn(J)||J[vn]))break e;if((A||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,A?(J=a.relatedTarget||a.toElement,A=E,J=J?xn(J):null,J!==null&&(Ae=f(J),ae=J.tag,J!==Ae||ae!==5&&ae!==27&&ae!==6)&&(J=null)):(A=null,J=E),A!==J)){if(ae=od,L="onMouseLeave",_="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ud,L="onPointerLeave",_="onPointerEnter",j="pointer"),Ae=A==null?z:gl(A),C=J==null?z:gl(J),z=new ae(L,j+"leave",A,a,O),z.target=Ae,z.relatedTarget=C,L=null,xn(O)===E&&(ae=new ae(_,j+"enter",J,a,O),ae.target=C,ae.relatedTarget=Ae,L=ae),Ae=L,A&&J)t:{for(ae=q1,_=A,j=J,C=0,L=_;L;L=ae(L))C++;L=0;for(var te=j;te;te=ae(te))L++;for(;0<C-L;)_=ae(_),C--;for(;0<L-C;)j=ae(j),L--;for(;C--;){if(_===j||j!==null&&_===j.alternate){ae=_;break t}_=ae(_),j=ae(j)}ae=null}else ae=null;A!==null&&ap(H,z,A,ae,!1),J!==null&&Ae!==null&&ap(H,Ae,J,ae,!0)}}e:{if(z=E?gl(E):window,A=z.nodeName&&z.nodeName.toLowerCase(),A==="select"||A==="input"&&z.type==="file")var Se=vd;else if(gd(z))if(xd)Se=Wg;else{Se=Ig;var ee=Fg}else A=z.nodeName,!A||A.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Rs(E.elementType)&&(Se=vd):Se=Jg;if(Se&&(Se=Se(e,E))){bd(H,Se,a,O);break e}ee&&ee(e,z,E),e==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&Ts(z,"number",z.value)}switch(ee=E?gl(E):window,e){case"focusin":(gd(ee)||ee.contentEditable==="true")&&(zn=ee,Ks=E,_l=null);break;case"focusout":_l=Ks=zn=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Ed(H,a,O);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Ed(H,a,O)}var de;if(Vs)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else En?pd(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(dd&&a.locale!=="ko"&&(En||be!=="onCompositionStart"?be==="onCompositionEnd"&&En&&(de=rd()):(wa=O,Bs="value"in wa?wa.value:wa.textContent,En=!0)),ee=Nr(E,be),0<ee.length&&(be=new cd(be,e,null,a,O),H.push({event:be,listeners:ee}),de?be.data=de:(de=md(a),de!==null&&(be.data=de)))),(de=Xg?Pg(e,a):Qg(e,a))&&(be=Nr(E,"onBeforeInput"),0<be.length&&(ee=new cd("onBeforeInput","beforeinput",null,a,O),H.push({event:ee,listeners:be}),ee.data=de)),L1(H,e,E,a,O)}ep(H,t)})}function Il(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nr(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=bl(e,a),r!=null&&n.unshift(Il(e,r,o)),r=bl(e,t),r!=null&&n.push(Il(e,r,o))),e.tag===3)return n;e=e.return}return[]}function q1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ap(e,t,a,n,r){for(var o=t._reactName,h=[];a!==null&&a!==n;){var m=a,x=m.alternate,E=m.stateNode;if(m=m.tag,x!==null&&x===n)break;m!==5&&m!==26&&m!==27||E===null||(x=E,r?(E=bl(a,o),E!=null&&h.unshift(Il(a,E,x))):r||(E=bl(a,o),E!=null&&h.push(Il(a,E,x)))),a=a.return}h.length!==0&&e.push({event:t,listeners:h})}var G1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function np(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(V1,"")}function lp(e,t){return t=np(t),np(e)===t}function Me(e,t,a,n,r,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||kn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&kn(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":nd(e,n,o);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Oi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",r.name,r,null),Me(e,t,"formEncType",r.formEncType,r,null),Me(e,t,"formMethod",r.formMethod,r,null),Me(e,t,"formTarget",r.formTarget,r,null)):(Me(e,t,"encType",r.encType,r,null),Me(e,t,"method",r.method,r,null),Me(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Oi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=$t);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Oi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),Ti(e,"popover",n);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ti(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bg.get(a)||a,Ti(e,a,n))}}function yc(e,t,a,n,r,o){switch(a){case"style":nd(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"children":typeof n=="string"?kn(e,n):(typeof n=="number"||typeof n=="bigint")&&kn(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),o=e[ut]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ti(e,a,n)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,r=!1,o;for(o in a)if(a.hasOwnProperty(o)){var h=a[o];if(h!=null)switch(o){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Me(e,t,o,h,a,null)}}r&&Me(e,t,"srcSet",a.srcSet,a,null),n&&Me(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=o=h=r=null,x=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":r=O;break;case"type":h=O;break;case"checked":x=O;break;case"defaultChecked":E=O;break;case"value":o=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(137,t));break;default:Me(e,t,n,O,a,null)}}$u(e,o,m,x,E,h,r,!1);return;case"select":me("invalid",e),n=h=o=null;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":h=m;break;case"multiple":n=m;default:Me(e,t,r,m,a,null)}t=o,a=h,e.multiple=!!n,t!=null?jn(e,!!n,t,!1):a!=null&&jn(e,!!n,a,!0);return;case"textarea":me("invalid",e),o=r=n=null;for(h in a)if(a.hasOwnProperty(h)&&(m=a[h],m!=null))switch(h){case"value":n=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:Me(e,t,h,m,a,null)}td(e,n,r,o);return;case"option":for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!=null)&&(x==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Me(e,t,x,n,a,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<Fl.length;n++)me(Fl[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Me(e,t,E,n,a,null)}return;default:if(Rs(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&yc(e,t,O,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Me(e,t,m,n,a,null))}function X1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,h=null,m=null,x=null,E=null,O=null;for(A in a){var H=a[A];if(a.hasOwnProperty(A)&&H!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":x=H;default:n.hasOwnProperty(A)||Me(e,t,A,null,n,H)}}for(var z in n){var A=n[z];if(H=a[z],n.hasOwnProperty(z)&&(A!=null||H!=null))switch(z){case"type":o=A;break;case"name":r=A;break;case"checked":E=A;break;case"defaultChecked":O=A;break;case"value":h=A;break;case"defaultValue":m=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(137,t));break;default:A!==H&&Me(e,t,z,A,n,H)}}As(e,h,m,x,E,O,o,r);return;case"select":A=h=m=z=null;for(o in a)if(x=a[o],a.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":A=x;default:n.hasOwnProperty(o)||Me(e,t,o,null,n,x)}for(r in n)if(o=n[r],x=a[r],n.hasOwnProperty(r)&&(o!=null||x!=null))switch(r){case"value":z=o;break;case"defaultValue":m=o;break;case"multiple":h=o;default:o!==x&&Me(e,t,r,o,n,x)}t=m,a=h,n=A,z!=null?jn(e,!!a,z,!1):!!n!=!!a&&(t!=null?jn(e,!!a,t,!0):jn(e,!!a,a?[]:"",!1));return;case"textarea":A=z=null;for(m in a)if(r=a[m],a.hasOwnProperty(m)&&r!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Me(e,t,m,null,n,r)}for(h in n)if(r=n[h],o=a[h],n.hasOwnProperty(h)&&(r!=null||o!=null))switch(h){case"value":z=r;break;case"defaultValue":A=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(i(91));break;default:r!==o&&Me(e,t,h,r,n,o)}ed(e,z,A);return;case"option":for(var J in a)z=a[J],a.hasOwnProperty(J)&&z!=null&&!n.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Me(e,t,J,null,n,z));for(x in n)z=n[x],A=a[x],n.hasOwnProperty(x)&&z!==A&&(z!=null||A!=null)&&(x==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Me(e,t,x,z,n,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)z=a[ae],a.hasOwnProperty(ae)&&z!=null&&!n.hasOwnProperty(ae)&&Me(e,t,ae,null,n,z);for(E in n)if(z=n[E],A=a[E],n.hasOwnProperty(E)&&z!==A&&(z!=null||A!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(i(137,t));break;default:Me(e,t,E,z,n,A)}return;default:if(Rs(t)){for(var Ae in a)z=a[Ae],a.hasOwnProperty(Ae)&&z!==void 0&&!n.hasOwnProperty(Ae)&&yc(e,t,Ae,void 0,n,z);for(O in n)z=n[O],A=a[O],!n.hasOwnProperty(O)||z===A||z===void 0&&A===void 0||yc(e,t,O,z,n,A);return}}for(var _ in a)z=a[_],a.hasOwnProperty(_)&&z!=null&&!n.hasOwnProperty(_)&&Me(e,t,_,null,n,z);for(H in n)z=n[H],A=a[H],!n.hasOwnProperty(H)||z===A||z==null&&A==null||Me(e,t,H,z,n,A)}function ip(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function P1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var r=a[n],o=r.transferSize,h=r.initiatorType,m=r.duration;if(o&&m&&ip(h)){for(h=0,m=r.responseEnd,n+=1;n<a.length;n++){var x=a[n],E=x.startTime;if(E>m)break;var O=x.transferSize,H=x.initiatorType;O&&ip(H)&&(x=x.responseEnd,h+=O*(x<m?1:(m-E)/(x-E)))}if(--n,t+=8*(o+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sc=null,wc=null;function Mr(e){return e.nodeType===9?e:e.ownerDocument}function rp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=null;function Q1(){var e=window.event;return e&&e.type==="popstate"?e===kc?!1:(kc=e,!0):(kc=null,!1)}var op=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(F1)}:op;function F1(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function up(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(r),tl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Jl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Jl(a);for(var o=a.firstChild;o;){var h=o.nextSibling,m=o.nodeName;o[ml]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=h}}else a==="body"&&Jl(e.ownerDocument.body);a=r}while(a);tl(t)}function dp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),Ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function I1(e,t,a,n){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function J1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Lt(e.nextSibling),e===null))return null;return e}function fp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function Cc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function W1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zc=null;function hp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Lt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function mp(e,t,a){switch(t=Mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Jl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ns(e)}var Bt=new Map,gp=new Set;function Ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=Q.d;Q.d={f:$1,r:eb,D:tb,C:ab,L:nb,m:lb,X:rb,S:ib,M:sb};function $1(){var e=ma.f(),t=wr();return e||t}function eb(e){var t=yn(e);t!==null&&t.tag===5&&t.type==="form"?Rf(t):ma.r(e)}var Wn=typeof document>"u"?null:document;function bp(e,t,a){var n=Wn;if(n&&typeof t=="string"&&t){var r=Mt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),gp.has(r)||(gp.add(r),e={rel:e,crossOrigin:a,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),at(t,"link",e),Fe(t),n.head.appendChild(t)))}}function tb(e){ma.D(e),bp("dns-prefetch",e,null)}function ab(e,t){ma.C(e,t),bp("preconnect",e,t)}function nb(e,t,a){ma.L(e,t,a);var n=Wn;if(n&&e&&t){var r='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Mt(a.imageSizes)+'"]')):r+='[href="'+Mt(e)+'"]';var o=r;switch(t){case"style":o=$n(e);break;case"script":o=el(e)}Bt.has(o)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Bt.set(o,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(Wl(o))||t==="script"&&n.querySelector($l(o))||(t=n.createElement("link"),at(t,"link",e),Fe(t),n.head.appendChild(t)))}}function lb(e,t){ma.m(e,t);var a=Wn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Mt(n)+'"][href="'+Mt(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=el(e)}if(!Bt.has(o)&&(e=y({rel:"modulepreload",href:e},t),Bt.set(o,e),a.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(o)))return}n=a.createElement("link"),at(n,"link",e),Fe(n),a.head.appendChild(n)}}}function ib(e,t,a){ma.S(e,t,a);var n=Wn;if(n&&e){var r=Sn(n).hoistableStyles,o=$n(e);t=t||"default";var h=r.get(o);if(!h){var m={loading:0,preload:null};if(h=n.querySelector(Wl(o)))m.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Bt.get(o))&&Nc(e,a);var x=h=n.createElement("link");Fe(x),at(x,"link",e),x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Tr(h,t,n)}h={type:"stylesheet",instance:h,count:1,state:m},r.set(o,h)}}}function rb(e,t){ma.X(e,t);var a=Wn;if(a&&e){var n=Sn(a).hoistableScripts,r=el(e),o=n.get(r);o||(o=a.querySelector($l(r)),o||(e=y({src:e,async:!0},t),(t=Bt.get(r))&&Mc(e,t),o=a.createElement("script"),Fe(o),at(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function sb(e,t){ma.M(e,t);var a=Wn;if(a&&e){var n=Sn(a).hoistableScripts,r=el(e),o=n.get(r);o||(o=a.querySelector($l(r)),o||(e=y({src:e,async:!0,type:"module"},t),(t=Bt.get(r))&&Mc(e,t),o=a.createElement("script"),Fe(o),at(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function vp(e,t,a,n){var r=(r=he.current)?Ar(r):null;if(!r)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=$n(a.href),a=Sn(r).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$n(a.href);var o=Sn(r).hoistableStyles,h=o.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,h),(o=r.querySelector(Wl(e)))&&!o._p&&(h.instance=o,h.state.loading=5),Bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bt.set(e,a),o||ob(r,e,a,h.state))),t&&n===null)throw Error(i(528,""));return h}if(t&&n!==null)throw Error(i(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=el(a),a=Sn(r).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function $n(e){return'href="'+Mt(e)+'"'}function Wl(e){return'link[rel="stylesheet"]['+e+"]"}function xp(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function ob(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),at(t,"link",a),Fe(t),e.head.appendChild(t))}function el(e){return'[src="'+Mt(e)+'"]'}function $l(e){return"script[async]"+e}function yp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(n)return t.instance=n,Fe(n),n;var r=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),at(n,"style",r),Tr(n,a.precedence,e),t.instance=n;case"stylesheet":r=$n(a.href);var o=e.querySelector(Wl(r));if(o)return t.state.loading|=4,t.instance=o,Fe(o),o;n=xp(a),(r=Bt.get(r))&&Nc(n,r),o=(e.ownerDocument||e).createElement("link"),Fe(o);var h=o;return h._p=new Promise(function(m,x){h.onload=m,h.onerror=x}),at(o,"link",n),t.state.loading|=4,Tr(o,a.precedence,e),t.instance=o;case"script":return o=el(a.src),(r=e.querySelector($l(o)))?(t.instance=r,Fe(r),r):(n=a,(r=Bt.get(o))&&(n=y({},a),Mc(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),Fe(r),at(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Tr(n,a.precedence,e));return t.instance}function Tr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,h=0;h<n.length;h++){var m=n[h];if(m.dataset.precedence===t)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rr=null;function Sp(e,t,a){if(Rr===null){var n=new Map,r=Rr=new Map;r.set(a,n)}else r=Rr,n=r.get(a),n||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var o=a[r];if(!(o[ml]||o[We]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var h=o.getAttribute(t)||"";h=e+h;var m=n.get(h);m?m.push(o):n.set(h,[o])}}return n}function wp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function cb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ub(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=$n(n.href),o=t.querySelector(Wl(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ur.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,Fe(o);return}o=t.ownerDocument||t,n=xp(n),(r=Bt.get(r))&&Nc(n,r),o=o.createElement("link"),Fe(o);var h=o;h._p=new Promise(function(m,x){h.onload=m,h.onerror=x}),at(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ur.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ac=0;function db(e,t){return e.stylesheets&&e.count===0&&Dr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Ac===0&&(Ac=62500*P1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Ac?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Ur(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function Dr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(fb,e),Or=null,Ur.call(e))}function fb(e,t){if(!(t.state.loading&4)){var a=Or.get(e);if(a)var n=a.get(null);else{a=new Map,Or.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var h=r[o];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),n=h)}n&&a.set(null,n)}r=t.instance,h=r.getAttribute("data-precedence"),o=a.get(h)||n,o===n&&a.set(null,r),a.set(h,r),this.count++,n=Ur.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ei={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function hb(e,t,a,n,r,o,h,m,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.hiddenUpdates=_s(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function kp(e,t,a,n,r,o,h,m,x,E,O,H){return e=new hb(e,t,a,h,x,E,O,H,m),t=1,o===!0&&(t|=24),o=wt(3,null,null,t),e.current=o,o.stateNode=e,t=co(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},po(o),e}function _p(e){return e?(e=An,e):An}function Cp(e,t,a,n,r,o){r=_p(r),n.context===null?n.context=r:n.pendingContext=r,n=za(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Na(e,n,t),a!==null&&(gt(a,e,t),Tl(a,e,t))}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Tc(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function zp(e){if(e.tag===13||e.tag===31){var t=nn(e,67108864);t!==null&&gt(t,e,67108864),Tc(e,67108864)}}function Np(e){if(e.tag===13||e.tag===31){var t=Et();t=Cs(t);var a=nn(e,t);a!==null&&gt(a,e,t),Tc(e,t)}}var Lr=!0;function pb(e,t,a,n){var r=R.T;R.T=null;var o=Q.p;try{Q.p=2,Rc(e,t,a,n)}finally{Q.p=o,R.T=r}}function mb(e,t,a,n){var r=R.T;R.T=null;var o=Q.p;try{Q.p=8,Rc(e,t,a,n)}finally{Q.p=o,R.T=r}}function Rc(e,t,a,n){if(Lr){var r=Uc(n);if(r===null)xc(e,t,n,Br,a),Ap(e,n);else if(bb(r,e,t,a,n))n.stopPropagation();else if(Ap(e,n),t&4&&-1<gb.indexOf(e)){for(;r!==null;){var o=yn(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var h=Wa(o.pendingLanes);if(h!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var x=1<<31-yt(h);m.entanglements[1]|=x,h&=~x}Zt(o),(je&6)===0&&(yr=vt()+500,Zl(0))}}break;case 31:case 13:m=nn(o,2),m!==null&&gt(m,o,2),wr(),Tc(o,2)}if(o=Uc(n),o===null&&xc(e,t,n,Br,a),o===r)break;r=o}r!==null&&n.stopPropagation()}else xc(e,t,n,null,a)}}function Uc(e){return e=Os(e),Oc(e)}var Br=null;function Oc(e){if(Br=null,e=xn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Br=e,null}function Mp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tg()){case Lu:return 2;case Bu:return 8;case Ei:case ag:return 32;case Hu:return 268435456;default:return 32}default:return 32}}var Dc=!1,Ya=null,qa=null,Ga=null,ti=new Map,ai=new Map,Va=[],gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ni(e,t,a,n,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},t!==null&&(t=yn(t),t!==null&&zp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function bb(e,t,a,n,r){switch(t){case"focusin":return Ya=ni(Ya,e,t,a,n,r),!0;case"dragenter":return qa=ni(qa,e,t,a,n,r),!0;case"mouseover":return Ga=ni(Ga,e,t,a,n,r),!0;case"pointerover":var o=r.pointerId;return ti.set(o,ni(ti.get(o)||null,e,t,a,n,r)),!0;case"gotpointercapture":return o=r.pointerId,ai.set(o,ni(ai.get(o)||null,e,t,a,n,r)),!0}return!1}function Tp(e){var t=xn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Pu(e.priority,function(){Np(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,Pu(e.priority,function(){Np(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Uc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Us=n,a.target.dispatchEvent(n),Us=null}else return t=yn(a),t!==null&&zp(t),e.blockedOn=a,!1;t.shift()}return!0}function Rp(e,t,a){Hr(e)&&a.delete(t)}function vb(){Dc=!1,Ya!==null&&Hr(Ya)&&(Ya=null),qa!==null&&Hr(qa)&&(qa=null),Ga!==null&&Hr(Ga)&&(Ga=null),ti.forEach(Rp),ai.forEach(Rp)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Dc||(Dc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,vb)))}var qr=null;function Up(e){qr!==e&&(qr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){qr===e&&(qr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(Oc(n||a)===null)continue;break}var o=yn(a);o!==null&&(e.splice(t,3),t-=3,Uo(o,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function tl(e){function t(x){return Yr(x,e)}Ya!==null&&Yr(Ya,e),qa!==null&&Yr(qa,e),Ga!==null&&Yr(Ga,e),ti.forEach(t),ai.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Tp(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var r=a[n],o=a[n+1],h=r[ut]||null;if(typeof o=="function")h||Up(a);else if(h){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,h=o[ut]||null)m=h.formAction;else if(Oc(r)!==null)continue}else m=h.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Up(a)}}}function Op(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Lc(e){this._internalRoot=e}Gr.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var a=t.current,n=Et();Cp(a,n,e,t,null,null)},Gr.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cp(e.current,2,null,e,null,null),wr(),t[vn]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Tp(e)}};var Dp=s.version;if(Dp!=="19.2.4")throw Error(i(527,Dp,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=b(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var xb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{fl=Vr.inject(xb),xt=Vr}catch{}}return ii.createRoot=function(e,t){if(!d(e))throw Error(i(299));var a=!1,n="",r=Vf,o=Xf,h=Pf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=kp(e,1,!1,null,null,a,n,null,r,o,h,Op),e[vn]=t.current,vc(e),new Lc(t)},ii.hydrateRoot=function(e,t,a){if(!d(e))throw Error(i(299));var n=!1,r="",o=Vf,h=Xf,m=Pf,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=kp(e,1,!0,t,a??null,n,r,x,o,h,m,Op),t.context=_p(null),a=t.current,n=Et(),n=Cs(n),r=za(n),r.callback=null,Na(a,r,n),a=n,t.current.lanes=a,pl(t,a),Zt(t),e[vn]=t.current,vc(e),new Gr(t)},ii.version="19.2.4",ii}var Qp;function Ab(){if(Qp)return Yc.exports;Qp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Yc.exports=Mb(),Yc.exports}var Tm=Ab();const Rm=ss(Tm),Tb=rs({__proto__:null,default:Rm},[Tm]);var Kp="popstate";function Zp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function Rb(l={}){function s(i,d){let f=d.state?.masked,{pathname:p,search:g,hash:v}=f||i.location;return fu("",{pathname:p,search:g,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default",f?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function u(i,d){return typeof d=="string"?d:mi(d)}return Ob(s,u,null,l)}function Be(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function It(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Ub(){return Math.random().toString(36).substring(2,10)}function Fp(l,s){return{usr:l.state,key:l.key,idx:s,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function fu(l,s,u=null,i,d){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?ol(s):s,state:u,key:s&&s.key||i||Ub(),unstable_mask:d}}function mi({pathname:l="/",search:s="",hash:u=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function ol(l){let s={};if(l){let u=l.indexOf("#");u>=0&&(s.hash=l.substring(u),l=l.substring(0,u));let i=l.indexOf("?");i>=0&&(s.search=l.substring(i),l=l.substring(0,i)),l&&(s.pathname=l)}return s}function Ob(l,s,u,i={}){let{window:d=document.defaultView,v5Compat:f=!1}=i,p=d.history,g="POP",v=null,b=k();b==null&&(b=0,p.replaceState({...p.state,idx:b},""));function k(){return(p.state||{idx:null}).idx}function y(){g="POP";let U=k(),T=U==null?null:U-b;b=U,v&&v({action:g,location:B.location,delta:T})}function N(U,T){g="PUSH";let q=Zp(U)?U:fu(B.location,U,T);b=k()+1;let Y=Fp(q,b),W=B.createHref(q.unstable_mask||q);try{p.pushState(Y,"",W)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;d.location.assign(W)}f&&v&&v({action:g,location:B.location,delta:1})}function V(U,T){g="REPLACE";let q=Zp(U)?U:fu(B.location,U,T);b=k();let Y=Fp(q,b),W=B.createHref(q.unstable_mask||q);p.replaceState(Y,"",W),f&&v&&v({action:g,location:B.location,delta:0})}function G(U){return Db(U)}let B={get action(){return g},get location(){return l(d,p)},listen(U){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Kp,y),v=U,()=>{d.removeEventListener(Kp,y),v=null}},createHref(U){return s(d,U)},createURL:G,encodeLocation(U){let T=G(U);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:N,replace:V,go(U){return p.go(U)}};return B}function Db(l,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Be(u,"No window.location.(origin|href) available to create URL");let i=typeof l=="string"?l:mi(l);return i=i.replace(/ $/,"%20"),!s&&i.startsWith("//")&&(i=u+i),new URL(i,u)}function Um(l,s,u="/"){return Lb(l,s,u,!1)}function Lb(l,s,u,i){let d=typeof s=="string"?ol(s):s,f=xa(d.pathname||"/",u);if(f==null)return null;let p=Om(l);Bb(p);let g=null;for(let v=0;g==null&&v<p.length;++v){let b=Fb(f);g=Kb(p[v],b,i)}return g}function Om(l,s=[],u=[],i="",d=!1){let f=(p,g,v=d,b)=>{let k={relativePath:b===void 0?p.path||"":b,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(i)&&v)return;Be(k.relativePath.startsWith(i),`Absolute route path "${k.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(i.length)}let y=Ft([i,k.relativePath]),N=u.concat(k);p.children&&p.children.length>0&&(Be(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Om(p.children,s,N,y,v)),!(p.path==null&&!p.index)&&s.push({path:y,score:Pb(y,p.index),routesMeta:N})};return l.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))f(p,g);else for(let v of Dm(p.path))f(p,g,!0,v)}),s}function Dm(l){let s=l.split("/");if(s.length===0)return[];let[u,...i]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(i.length===0)return d?[f,""]:[f];let p=Dm(i.join("/")),g=[];return g.push(...p.map(v=>v===""?f:[f,v].join("/"))),d&&g.push(...p),g.map(v=>l.startsWith("/")&&v===""?"/":v)}function Bb(l){l.sort((s,u)=>s.score!==u.score?u.score-s.score:Qb(s.routesMeta.map(i=>i.childrenIndex),u.routesMeta.map(i=>i.childrenIndex)))}var Hb=/^:[\w-]+$/,Yb=3,qb=2,Gb=1,Vb=10,Xb=-2,Ip=l=>l==="*";function Pb(l,s){let u=l.split("/"),i=u.length;return u.some(Ip)&&(i+=Xb),s&&(i+=qb),u.filter(d=>!Ip(d)).reduce((d,f)=>d+(Hb.test(f)?Yb:f===""?Gb:Vb),i)}function Qb(l,s){return l.length===s.length&&l.slice(0,-1).every((i,d)=>i===s[d])?l[l.length-1]-s[s.length-1]:0}function Kb(l,s,u=!1){let{routesMeta:i}=l,d={},f="/",p=[];for(let g=0;g<i.length;++g){let v=i[g],b=g===i.length-1,k=f==="/"?s:s.slice(f.length)||"/",y=es({path:v.relativePath,caseSensitive:v.caseSensitive,end:b},k),N=v.route;if(!y&&b&&u&&!i[i.length-1].route.index&&(y=es({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},k)),!y)return null;Object.assign(d,y.params),p.push({params:d,pathname:Ft([f,y.pathname]),pathnameBase:$b(Ft([f,y.pathnameBase])),route:N}),y.pathnameBase!=="/"&&(f=Ft([f,y.pathnameBase]))}return p}function es(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,i]=Zb(l.path,l.caseSensitive,l.end),d=s.match(u);if(!d)return null;let f=d[0],p=f.replace(/(.)\/+$/,"$1"),g=d.slice(1);return{params:i.reduce((b,{paramName:k,isOptional:y},N)=>{if(k==="*"){let G=g[N]||"";p=f.slice(0,f.length-G.length).replace(/(.)\/+$/,"$1")}const V=g[N];return y&&!V?b[k]=void 0:b[k]=(V||"").replace(/%2F/g,"/"),b},{}),pathname:f,pathnameBase:p,pattern:l}}function Zb(l,s=!1,u=!0){It(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let i=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,v,b,k)=>{if(i.push({paramName:g,isOptional:v!=null}),v){let y=k.charAt(b+p.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(i.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),i]}function Fb(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return It(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function xa(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,i=l.charAt(u);return i&&i!=="/"?null:l.slice(u)||"/"}var Ib=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jb(l,s="/"){let{pathname:u,search:i="",hash:d=""}=typeof l=="string"?ol(l):l,f;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?f=Jp(u.substring(1),"/"):f=Jp(u,s)):f=s,{pathname:f,search:ev(i),hash:tv(d)}}function Jp(l,s){let u=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Xc(l,s,u,i){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wb(l){return l.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Lm(l){let s=Wb(l);return s.map((u,i)=>i===s.length-1?u.pathname:u.pathnameBase)}function yu(l,s,u,i=!1){let d;typeof l=="string"?d=ol(l):(d={...l},Be(!d.pathname||!d.pathname.includes("?"),Xc("?","pathname","search",d)),Be(!d.pathname||!d.pathname.includes("#"),Xc("#","pathname","hash",d)),Be(!d.search||!d.search.includes("#"),Xc("#","search","hash",d)));let f=l===""||d.pathname==="",p=f?"/":d.pathname,g;if(p==null)g=u;else{let y=s.length-1;if(!i&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),y-=1;d.pathname=N.join("/")}g=y>=0?s[y]:"/"}let v=Jb(d,g),b=p&&p!=="/"&&p.endsWith("/"),k=(f||p===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(b||k)&&(v.pathname+="/"),v}var Ft=l=>l.join("/").replace(/\/\/+/g,"/"),$b=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),ev=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,tv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,av=class{constructor(l,s,u,i=!1){this.status=l,this.statusText=s||"",this.internal=i,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function nv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function lv(l){return l.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hm(l,s){let u=l;if(typeof u!="string"||!Ib.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let i=u,d=!1;if(Bm)try{let f=new URL(window.location.href),p=u.startsWith("//")?new URL(f.protocol+u):new URL(u),g=xa(p.pathname,s);p.origin===f.origin&&g!=null?u=g+p.search+p.hash:d=!0}catch{It(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:d,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ym=["POST","PUT","PATCH","DELETE"];new Set(Ym);var iv=["GET",...Ym];new Set(iv);var cl=S.createContext(null);cl.displayName="DataRouter";var os=S.createContext(null);os.displayName="DataRouterState";var rv=S.createContext(!1),qm=S.createContext({isTransitioning:!1});qm.displayName="ViewTransition";var sv=S.createContext(new Map);sv.displayName="Fetchers";var ov=S.createContext(null);ov.displayName="Await";var Yt=S.createContext(null);Yt.displayName="Navigation";var yi=S.createContext(null);yi.displayName="Location";var Jt=S.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var Su=S.createContext(null);Su.displayName="RouteError";var Gm="REACT_ROUTER_ERROR",cv="REDIRECT",uv="ROUTE_ERROR_RESPONSE";function dv(l){if(l.startsWith(`${Gm}:${cv}:{`))try{let s=JSON.parse(l.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function fv(l){if(l.startsWith(`${Gm}:${uv}:{`))try{let s=JSON.parse(l.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new av(s.status,s.statusText,s.data)}catch{}}function hv(l,{relative:s}={}){Be(Si(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:i}=S.useContext(Yt),{hash:d,pathname:f,search:p}=wi(l,{relative:s}),g=f;return u!=="/"&&(g=f==="/"?u:Ft([u,f])),i.createHref({pathname:g,search:p,hash:d})}function Si(){return S.useContext(yi)!=null}function Fa(){return Be(Si(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(yi).location}var Vm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xm(l){S.useContext(Yt).static||S.useLayoutEffect(l)}function cs(){let{isDataRoute:l}=S.useContext(Jt);return l?Ev():pv()}function pv(){Be(Si(),"useNavigate() may be used only in the context of a <Router> component.");let l=S.useContext(cl),{basename:s,navigator:u}=S.useContext(Yt),{matches:i}=S.useContext(Jt),{pathname:d}=Fa(),f=JSON.stringify(Lm(i)),p=S.useRef(!1);return Xm(()=>{p.current=!0}),S.useCallback((v,b={})=>{if(It(p.current,Vm),!p.current)return;if(typeof v=="number"){u.go(v);return}let k=yu(v,JSON.parse(f),d,b.relative==="path");l==null&&s!=="/"&&(k.pathname=k.pathname==="/"?s:Ft([s,k.pathname])),(b.replace?u.replace:u.push)(k,b.state,b)},[s,u,f,d,l])}S.createContext(null);function mv(){let{matches:l}=S.useContext(Jt),s=l[l.length-1];return s?s.params:{}}function wi(l,{relative:s}={}){let{matches:u}=S.useContext(Jt),{pathname:i}=Fa(),d=JSON.stringify(Lm(u));return S.useMemo(()=>yu(l,JSON.parse(d),i,s==="path"),[l,d,i,s])}function gv(l,s){return Pm(l,s)}function Pm(l,s,u){Be(Si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=S.useContext(Yt),{matches:d}=S.useContext(Jt),f=d[d.length-1],p=f?f.params:{},g=f?f.pathname:"/",v=f?f.pathnameBase:"/",b=f&&f.route;{let U=b&&b.path||"";Km(g,!b||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let k=Fa(),y;if(s){let U=typeof s=="string"?ol(s):s;Be(v==="/"||U.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=k;let N=y.pathname||"/",V=N;if(v!=="/"){let U=v.replace(/^\//,"").split("/");V="/"+N.replace(/^\//,"").split("/").slice(U.length).join("/")}let G=Um(l,{pathname:V});It(b||G!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),It(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Sv(G&&G.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:Ft([v,i.encodeLocation?i.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?v:Ft([v,i.encodeLocation?i.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,u);return s&&B?S.createElement(yi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},B):B}function bv(){let l=Cv(),s=nv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,i="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:i},f={padding:"2px 4px",backgroundColor:i},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:f},"ErrorBoundary")," or"," ",S.createElement("code",{style:f},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},s),u?S.createElement("pre",{style:d},u):null,p)}var vv=S.createElement(bv,null),Qm=class extends S.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){this.props.onError?this.props.onError(l,s):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=fv(l.digest);u&&(l=u)}let s=l!==void 0?S.createElement(Jt.Provider,{value:this.props.routeContext},S.createElement(Su.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?S.createElement(xv,{error:l},s):s}};Qm.contextType=rv;var Pc=new WeakMap;function xv({children:l,error:s}){let{basename:u}=S.useContext(Yt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let i=dv(s.digest);if(i){let d=Pc.get(s);if(d)throw d;let f=Hm(i.location,u);if(Bm&&!Pc.get(s))if(f.isExternal||i.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:i.replace}));throw Pc.set(s,p),p}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return l}function yv({routeContext:l,match:s,children:u}){let i=S.useContext(cl);return i&&i.static&&i.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=s.route.id),S.createElement(Jt.Provider,{value:l},u)}function Sv(l,s=[],u){let i=u?.state;if(l==null){if(!i)return null;if(i.errors)l=i.matches;else if(s.length===0&&!i.initialized&&i.matches.length>0)l=i.matches;else return null}let d=l,f=i?.errors;if(f!=null){let k=d.findIndex(y=>y.route.id&&f?.[y.route.id]!==void 0);Be(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,k+1))}let p=!1,g=-1;if(u&&i){p=i.renderFallback;for(let k=0;k<d.length;k++){let y=d[k];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=k),y.route.id){let{loaderData:N,errors:V}=i,G=y.route.loader&&!N.hasOwnProperty(y.route.id)&&(!V||V[y.route.id]===void 0);if(y.route.lazy||G){u.isStatic&&(p=!0),g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}}let v=u?.onError,b=i&&v?(k,y)=>{v(k,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:lv(i.matches),errorInfo:y})}:void 0;return d.reduceRight((k,y,N)=>{let V,G=!1,B=null,U=null;i&&(V=f&&y.route.id?f[y.route.id]:void 0,B=y.route.errorElement||vv,p&&(g<0&&N===0?(Km("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,U=null):g===N&&(G=!0,U=y.route.hydrateFallbackElement||null)));let T=s.concat(d.slice(0,N+1)),q=()=>{let Y;return V?Y=B:G?Y=U:y.route.Component?Y=S.createElement(y.route.Component,null):y.route.element?Y=y.route.element:Y=k,S.createElement(yv,{match:y,routeContext:{outlet:k,matches:T,isDataRoute:i!=null},children:Y})};return i&&(y.route.ErrorBoundary||y.route.errorElement||N===0)?S.createElement(Qm,{location:i.location,revalidation:i.revalidation,component:B,error:V,children:q(),routeContext:{outlet:null,matches:T,isDataRoute:!0},onError:b}):q()},null)}function wu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wv(l){let s=S.useContext(cl);return Be(s,wu(l)),s}function jv(l){let s=S.useContext(os);return Be(s,wu(l)),s}function kv(l){let s=S.useContext(Jt);return Be(s,wu(l)),s}function ju(l){let s=kv(l),u=s.matches[s.matches.length-1];return Be(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function _v(){return ju("useRouteId")}function Cv(){let l=S.useContext(Su),s=jv("useRouteError"),u=ju("useRouteError");return l!==void 0?l:s.errors?.[u]}function Ev(){let{router:l}=wv("useNavigate"),s=ju("useNavigate"),u=S.useRef(!1);return Xm(()=>{u.current=!0}),S.useCallback(async(d,f={})=>{It(u.current,Vm),u.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:s,...f}))},[l,s])}var Wp={};function Km(l,s,u){!s&&!Wp[l]&&(Wp[l]=!0,It(!1,u))}S.memo(zv);function zv({routes:l,future:s,state:u,isStatic:i,onError:d}){return Pm(l,void 0,{state:u,isStatic:i,onError:d})}function Pa(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Nv({basename:l="/",children:s=null,location:u,navigationType:i="POP",navigator:d,static:f=!1,unstable_useTransitions:p}){Be(!Si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=l.replace(/^\/*/,"/"),v=S.useMemo(()=>({basename:g,navigator:d,static:f,unstable_useTransitions:p,future:{}}),[g,d,f,p]);typeof u=="string"&&(u=ol(u));let{pathname:b="/",search:k="",hash:y="",state:N=null,key:V="default",unstable_mask:G}=u,B=S.useMemo(()=>{let U=xa(b,g);return U==null?null:{location:{pathname:U,search:k,hash:y,state:N,key:V,unstable_mask:G},navigationType:i}},[g,b,k,y,N,V,i,G]);return It(B!=null,`<Router basename="${g}"> is not able to match the URL "${b}${k}${y}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:S.createElement(Yt.Provider,{value:v},S.createElement(yi.Provider,{children:s,value:B}))}function Mv({children:l,location:s}){return gv(hu(l),s)}function hu(l,s=[]){let u=[];return S.Children.forEach(l,(i,d)=>{if(!S.isValidElement(i))return;let f=[...s,d];if(i.type===S.Fragment){u.push.apply(u,hu(i.props.children,f));return}Be(i.type===Pa,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!i.props.index||!i.props.children,"An index route cannot have child routes.");let p={id:i.props.id||f.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(p.children=hu(i.props.children,f)),u.push(p)}),u}var Fr="get",Ir="application/x-www-form-urlencoded";function us(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Av(l){return us(l)&&l.tagName.toLowerCase()==="button"}function Tv(l){return us(l)&&l.tagName.toLowerCase()==="form"}function Rv(l){return us(l)&&l.tagName.toLowerCase()==="input"}function Uv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Ov(l,s){return l.button===0&&(!s||s==="_self")&&!Uv(l)}var Xr=null;function Dv(){if(Xr===null)try{new FormData(document.createElement("form"),0),Xr=!1}catch{Xr=!0}return Xr}var Lv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qc(l){return l!=null&&!Lv.has(l)?(It(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ir}"`),null):l}function Bv(l,s){let u,i,d,f,p;if(Tv(l)){let g=l.getAttribute("action");i=g?xa(g,s):null,u=l.getAttribute("method")||Fr,d=Qc(l.getAttribute("enctype"))||Ir,f=new FormData(l)}else if(Av(l)||Rv(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||g.getAttribute("action");if(i=v?xa(v,s):null,u=l.getAttribute("formmethod")||g.getAttribute("method")||Fr,d=Qc(l.getAttribute("formenctype"))||Qc(g.getAttribute("enctype"))||Ir,f=new FormData(g,l),!Dv()){let{name:b,type:k,value:y}=l;if(k==="image"){let N=b?`${b}.`:"";f.append(`${N}x`,"0"),f.append(`${N}y`,"0")}else b&&f.append(b,y)}}else{if(us(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Fr,i=null,d=Ir,p=l}return f&&d==="text/plain"&&(p=f,f=void 0),{action:i,method:u.toLowerCase(),encType:d,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ku(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Hv(l,s,u,i){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${i}`:d.pathname=`${d.pathname}.${i}`:d.pathname==="/"?d.pathname=`_root.${i}`:s&&xa(d.pathname,s)==="/"?d.pathname=`${s.replace(/\/$/,"")}/_root.${i}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${i}`,d}async function Yv(l,s){if(l.id in s)return s[l.id];try{let u=await import(l.module);return s[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Gv(l,s,u){let i=await Promise.all(l.map(async d=>{let f=s.routes[d.route.id];if(f){let p=await Yv(f,u);return p.links?p.links():[]}return[]}));return Qv(i.flat(1).filter(qv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function $p(l,s,u,i,d,f){let p=(v,b)=>u[b]?v.route.id!==u[b].route.id:!0,g=(v,b)=>u[b].pathname!==v.pathname||u[b].route.path?.endsWith("*")&&u[b].params["*"]!==v.params["*"];return f==="assets"?s.filter((v,b)=>p(v,b)||g(v,b)):f==="data"?s.filter((v,b)=>{let k=i.routes[v.route.id];if(!k||!k.hasLoader)return!1;if(p(v,b)||g(v,b))return!0;if(v.route.shouldRevalidate){let y=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Vv(l,s,{includeHydrateFallback:u}={}){return Xv(l.map(i=>{let d=s.routes[i.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Xv(l){return[...new Set(l)]}function Pv(l){let s={},u=Object.keys(l).sort();for(let i of u)s[i]=l[i];return s}function Qv(l,s){let u=new Set;return new Set(s),l.reduce((i,d)=>{let f=JSON.stringify(Pv(d));return u.has(f)||(u.add(f),i.push({key:f,link:d})),i},[])}function Zm(){let l=S.useContext(cl);return ku(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Kv(){let l=S.useContext(os);return ku(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var _u=S.createContext(void 0);_u.displayName="FrameworkContext";function Fm(){let l=S.useContext(_u);return ku(l,"You must render this element inside a <HydratedRouter> element"),l}function Zv(l,s){let u=S.useContext(_u),[i,d]=S.useState(!1),[f,p]=S.useState(!1),{onFocus:g,onBlur:v,onMouseEnter:b,onMouseLeave:k,onTouchStart:y}=s,N=S.useRef(null);S.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let B=T=>{T.forEach(q=>{p(q.isIntersecting)})},U=new IntersectionObserver(B,{threshold:.5});return N.current&&U.observe(N.current),()=>{U.disconnect()}}},[l]),S.useEffect(()=>{if(i){let B=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(B)}}},[i]);let V=()=>{d(!0)},G=()=>{d(!1),p(!1)};return u?l!=="intent"?[f,N,{}]:[f,N,{onFocus:ri(g,V),onBlur:ri(v,G),onMouseEnter:ri(b,V),onMouseLeave:ri(k,G),onTouchStart:ri(y,V)}]:[!1,N,{}]}function ri(l,s){return u=>{l&&l(u),u.defaultPrevented||s(u)}}function Fv({page:l,...s}){let{router:u}=Zm(),i=S.useMemo(()=>Um(u.routes,l,u.basename),[u.routes,l,u.basename]);return i?S.createElement(Jv,{page:l,matches:i,...s}):null}function Iv(l){let{manifest:s,routeModules:u}=Fm(),[i,d]=S.useState([]);return S.useEffect(()=>{let f=!1;return Gv(l,s,u).then(p=>{f||d(p)}),()=>{f=!0}},[l,s,u]),i}function Jv({page:l,matches:s,...u}){let i=Fa(),{future:d,manifest:f,routeModules:p}=Fm(),{basename:g}=Zm(),{loaderData:v,matches:b}=Kv(),k=S.useMemo(()=>$p(l,s,b,f,i,"data"),[l,s,b,f,i]),y=S.useMemo(()=>$p(l,s,b,f,i,"assets"),[l,s,b,f,i]),N=S.useMemo(()=>{if(l===i.pathname+i.search+i.hash)return[];let B=new Set,U=!1;if(s.forEach(q=>{let Y=f.routes[q.route.id];!Y||!Y.hasLoader||(!k.some(W=>W.route.id===q.route.id)&&q.route.id in v&&p[q.route.id]?.shouldRevalidate||Y.hasClientLoader?U=!0:B.add(q.route.id))}),B.size===0)return[];let T=Hv(l,g,d.unstable_trailingSlashAwareDataRequests,"data");return U&&B.size>0&&T.searchParams.set("_routes",s.filter(q=>B.has(q.route.id)).map(q=>q.route.id).join(",")),[T.pathname+T.search]},[g,d.unstable_trailingSlashAwareDataRequests,v,i,f,k,s,l,p]),V=S.useMemo(()=>Vv(y,f),[y,f]),G=Iv(y);return S.createElement(S.Fragment,null,N.map(B=>S.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...u})),V.map(B=>S.createElement("link",{key:B,rel:"modulepreload",href:B,...u})),G.map(({key:B,link:U})=>S.createElement("link",{key:B,nonce:u.nonce,...U,crossOrigin:U.crossOrigin??u.crossOrigin})))}function Wv(...l){return s=>{l.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$v&&(window.__reactRouterVersion="7.13.1")}catch{}function ex({basename:l,children:s,unstable_useTransitions:u,window:i}){let d=S.useRef();d.current==null&&(d.current=Rb({window:i,v5Compat:!0}));let f=d.current,[p,g]=S.useState({action:f.action,location:f.location}),v=S.useCallback(b=>{u===!1?g(b):S.startTransition(()=>g(b))},[u]);return S.useLayoutEffect(()=>f.listen(v),[f,v]),S.createElement(Nv,{basename:l,children:s,location:p.location,navigationType:p.action,navigator:f,unstable_useTransitions:u})}var Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jm=S.forwardRef(function({onClick:s,discover:u="render",prefetch:i="none",relative:d,reloadDocument:f,replace:p,unstable_mask:g,state:v,target:b,to:k,preventScrollReset:y,viewTransition:N,unstable_defaultShouldRevalidate:V,...G},B){let{basename:U,navigator:T,unstable_useTransitions:q}=S.useContext(Yt),Y=typeof k=="string"&&Im.test(k),W=Hm(k,U);k=W.to;let X=hv(k,{relative:d}),F=Fa(),P=null;if(g){let ye=yu(g,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);U!=="/"&&(ye.pathname=ye.pathname==="/"?U:Ft([U,ye.pathname])),P=T.createHref(ye)}let[ie,re,Ce]=Zv(i,G),Te=nx(k,{replace:p,unstable_mask:g,state:v,target:b,preventScrollReset:y,relative:d,viewTransition:N,unstable_defaultShouldRevalidate:V,unstable_useTransitions:q});function Z(ye){s&&s(ye),ye.defaultPrevented||Te(ye)}let ve=!(W.isExternal||f),oe=S.createElement("a",{...G,...Ce,href:(ve?P:void 0)||W.absoluteURL||X,onClick:ve?Z:s,ref:Wv(B,re),target:b,"data-discover":!Y&&u==="render"?"true":void 0});return ie&&!Y?S.createElement(S.Fragment,null,oe,S.createElement(Fv,{page:X})):oe});Jm.displayName="Link";var bt=S.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:i="",end:d=!1,style:f,to:p,viewTransition:g,children:v,...b},k){let y=wi(p,{relative:b.relative}),N=Fa(),V=S.useContext(os),{navigator:G,basename:B}=S.useContext(Yt),U=V!=null&&ox(y)&&g===!0,T=G.encodeLocation?G.encodeLocation(y).pathname:y.pathname,q=N.pathname,Y=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(q=q.toLowerCase(),Y=Y?Y.toLowerCase():null,T=T.toLowerCase()),Y&&B&&(Y=xa(Y,B)||Y);const W=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let X=q===T||!d&&q.startsWith(T)&&q.charAt(W)==="/",F=Y!=null&&(Y===T||!d&&Y.startsWith(T)&&Y.charAt(T.length)==="/"),P={isActive:X,isPending:F,isTransitioning:U},ie=X?s:void 0,re;typeof i=="function"?re=i(P):re=[i,X?"active":null,F?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof f=="function"?f(P):f;return S.createElement(Jm,{...b,"aria-current":ie,className:re,ref:k,style:Ce,to:p,viewTransition:g},typeof v=="function"?v(P):v)});bt.displayName="NavLink";var tx=S.forwardRef(({discover:l="render",fetcherKey:s,navigate:u,reloadDocument:i,replace:d,state:f,method:p=Fr,action:g,onSubmit:v,relative:b,preventScrollReset:k,viewTransition:y,unstable_defaultShouldRevalidate:N,...V},G)=>{let{unstable_useTransitions:B}=S.useContext(Yt),U=rx(),T=sx(g,{relative:b}),q=p.toLowerCase()==="get"?"get":"post",Y=typeof g=="string"&&Im.test(g),W=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let F=X.nativeEvent.submitter,P=F?.getAttribute("formmethod")||p,ie=()=>U(F||X.currentTarget,{fetcherKey:s,method:P,navigate:u,replace:d,state:f,relative:b,preventScrollReset:k,viewTransition:y,unstable_defaultShouldRevalidate:N});B&&u!==!1?S.startTransition(()=>ie()):ie()};return S.createElement("form",{ref:G,method:q,action:T,onSubmit:i?v:W,...V,"data-discover":!Y&&l==="render"?"true":void 0})});tx.displayName="Form";function ax(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wm(l){let s=S.useContext(cl);return Be(s,ax(l)),s}function nx(l,{target:s,replace:u,unstable_mask:i,state:d,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:b}={}){let k=cs(),y=Fa(),N=wi(l,{relative:p});return S.useCallback(V=>{if(Ov(V,s)){V.preventDefault();let G=u!==void 0?u:mi(y)===mi(N),B=()=>k(l,{replace:G,unstable_mask:i,state:d,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:v});b?S.startTransition(()=>B()):B()}},[y,k,N,u,i,d,s,l,f,p,g,v,b])}var lx=0,ix=()=>`__${String(++lx)}__`;function rx(){let{router:l}=Wm("useSubmit"),{basename:s}=S.useContext(Yt),u=_v(),i=l.fetch,d=l.navigate;return S.useCallback(async(f,p={})=>{let{action:g,method:v,encType:b,formData:k,body:y}=Bv(f,s);if(p.navigate===!1){let N=p.fetcherKey||ix();await i(N,u,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:y,formMethod:p.method||v,formEncType:p.encType||b,flushSync:p.flushSync})}else await d(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:y,formMethod:p.method||v,formEncType:p.encType||b,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[i,d,s,u])}function sx(l,{relative:s}={}){let{basename:u}=S.useContext(Yt),i=S.useContext(Jt);Be(i,"useFormAction must be used inside a RouteContext");let[d]=i.matches.slice(-1),f={...wi(l||".",{relative:s})},p=Fa();if(l==null){f.search=p.search;let g=new URLSearchParams(f.search),v=g.getAll("index");if(v.some(k=>k==="")){g.delete("index"),v.filter(y=>y).forEach(y=>g.append("index",y));let k=g.toString();f.search=k?`?${k}`:""}}return(!l||l===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Ft([u,f.pathname])),mi(f)}function ox(l,{relative:s}={}){let u=S.useContext(qm);Be(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Wm("useViewTransitionState"),d=wi(l,{relative:s});if(!u.isTransitioning)return!1;let f=xa(u.currentLocation.pathname,i)||u.currentLocation.pathname,p=xa(u.nextLocation.pathname,i)||u.nextLocation.pathname;return es(d.pathname,p)!=null||es(d.pathname,f)!=null}var Cu=Am();const cx=ss(Cu),ux=rs({__proto__:null,default:cx},[Cu]);var dx=class $m extends Error{static kind="ClerkError";clerkError=!0;code;longMessage;docsUrl;cause;get name(){return this.constructor.name}constructor(s){super(new.target.formatMessage(new.target.kind,s.message,s.code,s.docsUrl),{cause:s.cause}),Object.setPrototypeOf(this,$m.prototype),this.code=s.code,this.docsUrl=s.docsUrl,this.longMessage=s.longMessage,this.cause=s.cause}toString(){return`[${this.name}]
Message:${this.message}`}static formatMessage(s,u,i,d){const f="Clerk:",p=new RegExp(f.replace(" ","\\s*"),"i");return u=u.replace(p,""),u=`${f} ${u.trim()}

(code="${i}")

`,d&&(u+=`

Docs: ${d}`),u}},Eu=class e0 extends dx{static kind="ClerkRuntimeError";clerkRuntimeError=!0;constructor(s,u){super({...u,message:s}),Object.setPrototypeOf(this,e0.prototype)}};const fx=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:"The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",MissingPublishableKeyErrorMessage:"Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingSecretKeyErrorMessage:"Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function t0({packageName:l,customMessages:s}){let u=l;function i(f,p){if(!p)return`${u}: ${f}`;let g=f;const v=f.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const b of v){const k=(p[b[1]]||"").toString();g=g.replace(`{{${b[1]}}}`,k)}return`${u}: ${g}`}const d={...fx,...s};return{setPackageName({packageName:f}){return typeof f=="string"&&(u=f),this},setMessages({customMessages:f}){return Object.assign(d,f||{}),this},throwInvalidPublishableKeyError(f){throw new Error(i(d.InvalidPublishableKeyErrorMessage,f))},throwInvalidProxyUrl(f){throw new Error(i(d.InvalidProxyUrlErrorMessage,f))},throwMissingPublishableKeyError(){throw new Error(i(d.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(i(d.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(f){throw new Error(i(d.MissingClerkProvider,f))},throw(f){throw new Error(i(f))}}}const hx=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],a0=l=>typeof atob<"u"&&typeof atob=="function"?atob(l):typeof globalThis.Buffer<"u"?globalThis.Buffer.from(l,"base64").toString():l,n0="pk_live_",px="pk_test_";function l0(l){if(!l.endsWith("$"))return!1;const s=l.slice(0,-1);return s.includes("$")?!1:s.includes(".")}function em(l,s={}){if(l=l||"",!l||!tm(l)){if(s.fatal&&!l)throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");if(s.fatal&&!tm(l))throw new Error("Publishable key not valid.");return null}const u=l.startsWith(n0)?"production":"development";let i;try{i=a0(l.split("_")[2])}catch{if(s.fatal)throw new Error("Publishable key not valid: Failed to decode key.");return null}if(!l0(i)){if(s.fatal)throw new Error("Publishable key not valid: Decoded key has invalid format.");return null}let d=i.slice(0,-1);return s.proxyUrl?d=s.proxyUrl:u!=="development"&&s.domain&&s.isSatellite&&(d=`clerk.${s.domain}`),{instanceType:u,frontendApi:d}}function tm(l=""){try{if(!(l.startsWith(n0)||l.startsWith(px)))return!1;const s=l.split("_");if(s.length!==3)return!1;const u=s[2];return u?l0(a0(u)):!1}catch{return!1}}function mx(){const l=new Map;return{isDevOrStagingUrl:s=>{if(!s)return!1;const u=typeof s=="string"?s:s.hostname;let i=l.get(u);return i===void 0&&(i=hx.some(d=>u.endsWith(d)),l.set(u,i)),i}}}const gx={strict_mfa:{afterMinutes:10,level:"multi_factor"},strict:{afterMinutes:10,level:"second_factor"},moderate:{afterMinutes:60,level:"second_factor"},lax:{afterMinutes:1440,level:"second_factor"}},bx=new Set(["first_factor","second_factor","multi_factor"]),vx=new Set(["strict_mfa","strict","moderate","lax"]),am=new Set(["o","org","organization"]),nm=new Set(["u","user"]),xx=l=>typeof l=="number"&&l>0,yx=l=>bx.has(l),Sx=l=>vx.has(l),Kc=l=>l.replace(/^(org:)*/,"org:"),wx=(l,s)=>{const{orgId:u,orgRole:i,orgPermissions:d}=s;return!l.role&&!l.permission||!u||!i||!d?null:l.permission?d.includes(Kc(l.permission)):l.role?Kc(i)===Kc(l.role):null},lm=(l,s)=>{const{org:u,user:i}=kx(l),[d,f]=s.split(":"),p=f!==void 0,g=d,v=f||d;if(p&&!am.has(g)&&!nm.has(g))throw new Error(`Invalid scope: ${g}`);if(p){if(am.has(g))return u.includes(v);if(nm.has(g))return i.includes(v)}return[...u,...i].includes(v)},jx=(l,s)=>{const{features:u,plans:i}=s;return l.feature&&u?lm(u,l.feature):l.plan&&i?lm(i,l.plan):null},kx=l=>{const s=[],u=[];if(!l)return{org:s,user:u};const i=l.split(",");for(let d=0;d<i.length;d++){const f=i[d].trim(),p=f.indexOf(":");if(p===-1)throw new Error(`Invalid claim element (missing colon): ${f}`);const g=f.slice(0,p),v=f.slice(p+1);g==="o"?s.push(v):g==="u"?u.push(v):(g==="ou"||g==="uo")&&(s.push(v),u.push(v))}return{org:s,user:u}},_x=l=>{if(!l)return!1;const s=d=>typeof d=="string"?gx[d]:d,u=typeof l=="string"&&Sx(l),i=typeof l=="object"&&yx(l.level)&&xx(l.afterMinutes);return u||i?s.bind(null,l):!1},Cx=(l,{factorVerificationAge:s})=>{if(!l.reverification||!s)return null;const u=_x(l.reverification);if(!u)return null;const{level:i,afterMinutes:d}=u(),[f,p]=s,g=f!==-1?d>f:null,v=p!==-1?d>p:null;switch(i){case"first_factor":return g;case"second_factor":return p!==-1?v:g;case"multi_factor":return p===-1?g:g&&v}},Ex=l=>s=>{if(!l.userId)return!1;const u=jx(s,l),i=wx(s,l),d=Cx(s,l);return[u||i,d].some(f=>f===null)?[u||i,d].some(f=>f===!0):[u||i,d].every(f=>f===!0)},zx=({authObject:{sessionId:l,sessionStatus:s,userId:u,actor:i,orgId:d,orgRole:f,orgSlug:p,signOut:g,getToken:v,has:b,sessionClaims:k},options:{treatPendingAsSignedOut:y=!0}})=>{if(l===void 0&&u===void 0)return{actor:void 0,getToken:v,has:()=>!1,isLoaded:!1,isSignedIn:void 0,orgId:void 0,orgRole:void 0,orgSlug:void 0,sessionClaims:void 0,sessionId:l,signOut:g,userId:u};if(l===null&&u===null)return{actor:null,getToken:v,has:()=>!1,isLoaded:!0,isSignedIn:!1,orgId:null,orgRole:null,orgSlug:null,sessionClaims:null,sessionId:l,signOut:g,userId:u};if(y&&s==="pending")return{actor:null,getToken:v,has:()=>!1,isLoaded:!0,isSignedIn:!1,orgId:null,orgRole:null,orgSlug:null,sessionClaims:null,sessionId:null,signOut:g,userId:null};if(l&&k&&u&&d&&f)return{actor:i||null,getToken:v,has:b,isLoaded:!0,isSignedIn:!0,orgId:d,orgRole:f,orgSlug:p||null,sessionClaims:k,sessionId:l,signOut:g,userId:u};if(l&&k&&u&&!d)return{actor:i||null,getToken:v,has:b,isLoaded:!0,isSignedIn:!0,orgId:null,orgRole:null,orgSlug:null,sessionClaims:k,sessionId:l,signOut:g,userId:u}},im=(l,s,u)=>!l&&u?Nx(u):Mx(s),Nx=l=>{const s=l.userId,u=l.user,i=l.sessionId,d=l.sessionStatus,f=l.sessionClaims;return{userId:s,user:u,sessionId:i,session:l.session,sessionStatus:d,sessionClaims:f,organization:l.organization,orgId:l.orgId,orgRole:l.orgRole,orgPermissions:l.orgPermissions,orgSlug:l.orgSlug,actor:l.actor,factorVerificationAge:l.factorVerificationAge}},Mx=l=>{const s=l.user?l.user.id:l.user,u=l.user,i=l.session?l.session.id:l.session,d=l.session,f=l.session?.status,p=l.session?l.session.lastActiveToken?.jwt?.claims:null,g=l.session?l.session.factorVerificationAge:null,v=d?.actor,b=l.organization,k=l.organization?l.organization.id:l.organization,y=b?.slug,N=b&&u?.organizationMemberships?.find(G=>G.organization.id===k),V=N&&N.permissions;return{userId:s,user:u,sessionId:i,session:d,sessionStatus:f,sessionClaims:p,organization:b,orgId:k,orgRole:N&&N.role,orgSlug:y,orgPermissions:V,actor:v,factorVerificationAge:g}},Ax="METHOD_CALLED",Tx=.1;function i0(l,s){return{event:Ax,eventSamplingRate:Tx,payload:{method:l,...s}}}const Rx="ClerkJS:";function Ux(){throw new Error(`${Rx} Clerk instance not found. Make sure Clerk is initialized before using any Clerk components.`)}var rm=Object.prototype.hasOwnProperty;function sm(l,s,u){for(u of l.keys())if(fi(u,s))return u}function fi(l,s){var u,i,d;if(l===s)return!0;if(l&&s&&(u=l.constructor)===s.constructor){if(u===Date)return l.getTime()===s.getTime();if(u===RegExp)return l.toString()===s.toString();if(u===Array){if((i=l.length)===s.length)for(;i--&&fi(l[i],s[i]););return i===-1}if(u===Set){if(l.size!==s.size)return!1;for(i of l)if(d=i,d&&typeof d=="object"&&(d=sm(s,d),!d)||!s.has(d))return!1;return!0}if(u===Map){if(l.size!==s.size)return!1;for(i of l)if(d=i[0],d&&typeof d=="object"&&(d=sm(s,d),!d)||!fi(i[1],s.get(d)))return!1;return!0}if(u===ArrayBuffer)l=new Uint8Array(l),s=new Uint8Array(s);else if(u===DataView){if((i=l.byteLength)===s.byteLength)for(;i--&&l.getInt8(i)===s.getInt8(i););return i===-1}if(ArrayBuffer.isView(l)){if((i=l.byteLength)===s.byteLength)for(;i--&&l[i]===s[i];);return i===-1}if(!u||typeof l=="object"){i=0;for(u in l)if(rm.call(l,u)&&++i&&!rm.call(s,u)||!(u in s)||!fi(l[u],s[u]))return!1;return Object.keys(s).length===i}}return l!==l&&s!==s}function Ox(l,s){if(!l)throw typeof s=="string"?new Error(s):new Error(`${s.displayName} not found`)}const ul=(l,s)=>{const{assertCtxFn:u=Ox}={},i=M.createContext(void 0);return i.displayName=l,[i,()=>{const p=M.useContext(i);return u(p,`${l} not found`),p.value},()=>{const p=M.useContext(i);return p?p.value:{}}]},[r0,ji]=ul("ClerkInstanceContext"),[Dx,Lx]=ul("InitialStateContext");function Bx({children:l,initialState:s}){const[u]=S.useState(s),i=M.useMemo(()=>({value:u}),[u]);return M.createElement(Dx.Provider,{value:i},l)}function s0(){const l=Lx();if(l instanceof Promise){if("use"in M&&typeof M.use=="function")return M.use(l);throw new Error("initialState cannot be a promise if React version is less than 19")}return l}M.createContext({});const[Hx]=ul("CheckoutContext"),Yx=({children:l,...s})=>M.createElement(Hx.Provider,{value:{value:s}},l);function zu(l){if(!M.useContext(r0)){if(typeof l=="function"){l();return}throw new Error(`${l} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function qx(l){const s=function(){};let u;return u=new Proxy(s,{get(i,d){if(d!=="then")return d==="toString"?()=>`[${l}]`:d===Symbol.toPrimitive?()=>0:u},apply(){return u},construct(){return u},has(){return!1},set(){return!1}}),u}qx("ClerkMockQueryClient");const o0=()=>(zu("useClerk"),ji());function Gx(){const l=ji(),s=s0(),u=S.useCallback(()=>s?.user,[s?.user]);return S.useSyncExternalStore(S.useCallback(i=>l.addListener(i,{skipInitialEmit:!0}),[l]),S.useCallback(()=>!l.loaded||!l.__internal_lastEmittedResources?u():l.__internal_lastEmittedResources.user,[l,u]),u)}typeof window<"u"?M.useLayoutEffect:M.useEffect;const om="useUser";function c0(){zu(om);const l=Gx();return ji().telemetry?.record(i0(om)),l===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:l===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:l}}const cm=fi;function Vx(l){l||Ux()}function Xx(l){const s=l.clerk;if(Vx(s),l.initialState instanceof Promise&&!("use"in M&&typeof M.use=="function"))throw new Error("initialState cannot be a promise if React version is less than 19");const u=M.useMemo(()=>({value:s}),[l.clerkStatus]);return M.createElement(Bx,{initialState:l.initialState},M.createElement(r0.Provider,{value:u},M.createElement(Yx,{value:void 0},l.children)))}const Px=l=>{const s=S.useRef(l);return S.useEffect(()=>{s.current=l},[l]),s.current},zt=(l,s,u)=>{const i=!!u,d=S.useRef(u);S.useEffect(()=>{d.current=u},[u]),S.useEffect(()=>{if(!i||!l)return()=>{};const f=(...p)=>{d.current&&d.current(...p)};return l.on(s,f),()=>{l.off(s,f)}},[i,s,l,d])},u0=M.createContext(null);u0.displayName="ElementsContext";const Qx=(l,s)=>{if(!l)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${s} in an <Elements> provider.`);return l},ts=l=>l!==null&&typeof l=="object",Kx=(l,s,u)=>ts(l)?Object.keys(l).reduce((i,d)=>{const f=!ts(s)||!d0(l[d],s[d]);return u.includes(d)?(f&&console.warn(`Unsupported prop change: options.${d} is not a mutable property.`),i):f?{...i||{},[d]:l[d]}:i},null):null,um="[object Object]",d0=(l,s)=>{if(!ts(l)||!ts(s))return l===s;const u=Array.isArray(l);if(u!==Array.isArray(s))return!1;const i=Object.prototype.toString.call(l)===um;if(i!==(Object.prototype.toString.call(s)===um))return!1;if(!i&&!u)return l===s;const d=Object.keys(l),f=Object.keys(s);if(d.length!==f.length)return!1;const p={};for(let y=0;y<d.length;y+=1)p[d[y]]=!0;for(let y=0;y<f.length;y+=1)p[f[y]]=!0;const g=Object.keys(p);if(g.length!==d.length)return!1;const v=l,b=s,k=y=>d0(v[y],b[y]);return g.every(k)},dm=l=>Qx(M.useContext(u0),l),Zx=l=>l.charAt(0).toUpperCase()+l.slice(1),Fx=(l,s)=>{const u=`${Zx(l)}Element`,f=s?p=>{dm(`mounts <${u}>`);const{id:g,className:v}=p;return M.createElement("div",{id:g,className:v})}:({id:p,className:g,fallback:v,options:b={},onBlur:k,onFocus:y,onReady:N,onChange:V,onEscape:G,onClick:B,onLoadError:U,onLoaderStart:T,onNetworksChange:q,onConfirm:Y,onCancel:W,onShippingAddressChange:X,onShippingRateChange:F})=>{const P=dm(`mounts <${u}>`),ie="elements"in P?P.elements:null,[re,Ce]=M.useState(null),Te=M.useRef(null),Z=M.useRef(null),[ve,oe]=S.useState(!1);zt(re,"blur",k),zt(re,"focus",y),zt(re,"escape",G),zt(re,"click",B),zt(re,"loaderror",U),zt(re,"loaderstart",T),zt(re,"networkschange",q),zt(re,"confirm",Y),zt(re,"cancel",W),zt(re,"shippingaddresschange",X),zt(re,"shippingratechange",F),zt(re,"change",V);let ye;N&&(ye=()=>{oe(!0),N(re)}),zt(re,"ready",ye),M.useLayoutEffect(()=>{if(Te.current===null&&Z.current!==null&&ie){let Q=null;ie&&(Q=ie.create(l,b)),Te.current=Q,Ce(Q),Q&&Q.mount(Z.current)}},[ie,b]);const R=Px(b);return M.useEffect(()=>{if(!Te.current)return;const Q=Kx(b,R,["paymentRequest"]);Q&&"update"in Te.current&&Te.current.update(Q)},[b,R]),M.useLayoutEffect(()=>()=>{if(Te.current&&typeof Te.current.destroy=="function")try{Te.current.destroy(),Te.current=null}catch{}},[]),M.createElement(M.Fragment,null,!ve&&v,M.createElement("div",{id:p,style:{height:ve?"unset":"0px",visibility:ve?"visible":"hidden"},className:g,ref:Z}))};return f.displayName=u,f.__elementType=l,f};Fx("payment",typeof window>"u");ul("PaymentElementContext");ul("StripeUtilsContext");const[zS,,Ix]=ul("PortalProvider"),Jx=()=>{const l=Ix();return l&&"getContainer"in l&&l.getContainer?l.getContainer:()=>null};var ba=t0({packageName:"@clerk/react"});function Wx(l){ba.setMessages(l).setPackageName(l)}var f0=ji,h0=l=>{zu(()=>{ba.throwMissingClerkProviderError({source:l})})};const $x=()=>{try{return!1}catch{}return!1},ey=()=>{try{return!1}catch{}return!1},ty=()=>{try{return!0}catch{}return!1};function Zc(l,s,u){if(typeof l=="function")return l(s);if(typeof l<"u")return l;if(typeof u<"u")return u}const ct=l=>{$x()&&console.error(`Clerk: ${l}`)},Fc={BASE_URL:"/LMS-FRONTEND/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CLERK_PUBLISHABLE_KEY:"pk_test_cmVndWxhci1tYWNhdy0yMC5jbGVyay5hY2NvdW50cy5kZXYk"};var Ic={};const fm=(l,s)=>{if(typeof process<"u"&&Ic&&typeof Ic[l]=="string")return Ic[l];if(typeof import.meta<"u"&&Fc&&typeof Fc[l]=="string")return Fc[l];try{return globalThis[l]}catch{}return""},hm=(l,...s)=>{const u={...l};for(const i of s)delete u[i];return u};function gi(){return typeof window<"u"}var ay="You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.",ny=l=>`You've passed multiple children components to <${l}/>. You can only pass a single child component or text.`,ly="Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support",Jc="Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",iy="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",ry="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",sy="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",oy="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",cy=l=>`<${l} /> can only accept <${l}.Page /> and <${l}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,uy=l=>`Missing props. <${l}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,dy=l=>`Missing props. <${l}.Link /> component requires the following props: url, label and labelIcon.`,fy="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",hy="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",py="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",my="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",gy="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",by="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",vy="Missing props. <UserButton.Action /> component requires the following props: label.",ds=l=>s=>{try{return M.Children.only(l)}catch{return ba.throw(ny(s))}},fs=(l,s)=>(l||(l=s),typeof l=="string"&&(l=M.createElement("button",null,l)),l),hs=l=>(...s)=>{if(l&&typeof l=="function")return l(...s)},xy=l=>fm(`VITE_${l}`)||fm(l),yy=(l,s)=>l!==void 0?l:xy(s)||void 0,Sy=l=>{const s=yy(l.publishableKey,"CLERK_PUBLISHABLE_KEY");return{...l,...s!==void 0&&{publishableKey:s}}};function pm(l){return typeof l=="function"}var Pr=new Map;function wy(l,s,u=1){M.useEffect(()=>{const i=Pr.get(l)||0;return i==u?ba.throw(s):(Pr.set(l,i+1),()=>{Pr.set(l,(Pr.get(l)||1)-1)})},[])}function jy(l,s,u){const i=l.displayName||l.name||s||"Component",d=f=>(wy(s,u),M.createElement(l,{...f}));return d.displayName=`withMaxAllowedInstancesGuard(${i})`,d}var hi=l=>{const[s,u]=S.useState(new Map);return l.map(i=>({id:i.id,mount:d=>u(f=>new Map(f).set(String(i.id),d)),unmount:()=>u(d=>{const f=new Map(d);return f.set(String(i.id),null),f}),portal:()=>{const d=s.get(String(i.id));return d?Cu.createPortal(i.component,d):null}}))},ot=(l,s)=>!!l&&M.isValidElement(l)&&l?.type===s,p0=(l,s)=>b0({children:l,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:_i,PageComponent:ki,MenuItemsComponent:ms,componentName:"UserProfile"},s),m0=(l,s)=>b0({children:l,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:bs,PageComponent:gs,componentName:"OrganizationProfile"},s),g0=l=>{const s=[],u=[bs,gs,ms,ki,_i];return M.Children.forEach(l,i=>{u.some(d=>ot(i,d))||s.push(i)}),s},b0=(l,s)=>{const{children:u,LinkComponent:i,PageComponent:d,MenuItemsComponent:f,reorderItemsLabels:p,componentName:g}=l,{allowForAnyChildren:v=!1}=s||{},b=[];M.Children.forEach(u,q=>{if(!ot(q,d)&&!ot(q,i)&&!ot(q,f)){q&&!v&&ct(cy(g));return}const{props:Y}=q,{children:W,label:X,url:F,labelIcon:P}=Y;if(ot(q,d))if(mm(Y,p))b.push({label:X});else if(Wc(Y))b.push({label:X,labelIcon:P,children:W,url:F});else{ct(uy(g));return}if(ot(q,i))if($c(Y))b.push({label:X,labelIcon:P,url:F});else{ct(dy(g));return}});const k=[],y=[],N=[];b.forEach((q,Y)=>{if(Wc(q)){k.push({component:q.children,id:Y}),y.push({component:q.labelIcon,id:Y});return}$c(q)&&N.push({component:q.labelIcon,id:Y})});const V=hi(k),G=hi(y),B=hi(N),U=[],T=[];return b.forEach((q,Y)=>{if(mm(q,p)){U.push({label:q.label});return}if(Wc(q)){const{portal:W,mount:X,unmount:F}=V.find(Ce=>Ce.id===Y),{portal:P,mount:ie,unmount:re}=G.find(Ce=>Ce.id===Y);U.push({label:q.label,url:q.url,mount:X,unmount:F,mountIcon:ie,unmountIcon:re}),T.push(W),T.push(P);return}if($c(q)){const{portal:W,mount:X,unmount:F}=B.find(P=>P.id===Y);U.push({label:q.label,url:q.url,mountIcon:X,unmountIcon:F}),T.push(W);return}}),{customPages:U,customPagesPortals:T}},mm=(l,s)=>{const{children:u,label:i,url:d,labelIcon:f}=l;return!u&&!d&&!f&&s.some(p=>p===i)},Wc=l=>{const{children:s,label:u,url:i,labelIcon:d}=l;return!!s&&!!i&&!!d&&!!u},$c=l=>{const{children:s,label:u,url:i,labelIcon:d}=l;return!s&&!!i&&!!d&&!!u},ky=(l,s)=>{var u;return _y({children:l,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:ms,MenuActionComponent:x0,MenuLinkComponent:y0,UserProfileLinkComponent:_i,UserProfilePageComponent:ki,allowForAnyChildren:(u=s?.allowForAnyChildren)!=null?u:!1})},_y=({children:l,MenuItemsComponent:s,MenuActionComponent:u,MenuLinkComponent:i,UserProfileLinkComponent:d,UserProfilePageComponent:f,reorderItemsLabels:p,allowForAnyChildren:g=!1})=>{const v=[],b=[],k=[];M.Children.forEach(l,B=>{if(!ot(B,s)&&!ot(B,d)&&!ot(B,f)){B&&!g&&ct(fy);return}if(ot(B,d)||ot(B,f))return;const{props:U}=B;M.Children.forEach(U.children,T=>{if(!ot(T,u)&&!ot(T,i)){T&&ct(hy);return}const{props:q}=T,{label:Y,labelIcon:W,href:X,onClick:F,open:P}=q;if(ot(T,u))if(gm(q,p))v.push({label:Y});else if(eu(q)){const ie={label:Y,labelIcon:W};if(F!==void 0)v.push({...ie,onClick:F});else if(P!==void 0)v.push({...ie,open:P.startsWith("/")?P:`/${P}`});else{ct("Custom menu item must have either onClick or open property");return}}else{ct(vy);return}if(ot(T,i))if(tu(q))v.push({label:Y,labelIcon:W,href:X});else{ct(by);return}})});const y=[],N=[];v.forEach((B,U)=>{eu(B)&&y.push({component:B.labelIcon,id:U}),tu(B)&&N.push({component:B.labelIcon,id:U})});const V=hi(y),G=hi(N);return v.forEach((B,U)=>{if(gm(B,p)&&b.push({label:B.label}),eu(B)){const{portal:T,mount:q,unmount:Y}=V.find(X=>X.id===U),W={label:B.label,mountIcon:q,unmountIcon:Y};"onClick"in B?W.onClick=B.onClick:"open"in B&&(W.open=B.open),b.push(W),k.push(T)}if(tu(B)){const{portal:T,mount:q,unmount:Y}=G.find(W=>W.id===U);b.push({label:B.label,href:B.href,mountIcon:q,unmountIcon:Y}),k.push(T)}}),{customMenuItems:b,customMenuItemsPortals:k}},gm=(l,s)=>{const{children:u,label:i,onClick:d,labelIcon:f}=l;return!u&&!d&&!f&&s.some(p=>p===i)},eu=l=>{const{label:s,labelIcon:u,onClick:i,open:d}=l;return!!u&&!!s&&(typeof i=="function"||typeof d=="string")},tu=l=>{const{label:s,href:u,labelIcon:i}=l;return!!u&&!!i&&!!s},Cy=l=>{const s=l?.isReady;return u=>new Promise((i,d)=>{const{root:f=document?.body,selector:p,timeout:g=0}=u;if(!f){d(new Error("No root element provided"));return}let v=f;if(p&&(v=f?.querySelector(p)),s(v,p)){i();return}const b=new MutationObserver(k=>{for(const y of k)if(!v&&p&&(v=f?.querySelector(p)),(l.childList&&y.type==="childList"||l.attributes&&y.type==="attributes")&&s(v,p)){b.disconnect(),i();return}});b.observe(f,l),g>0&&setTimeout(()=>{b.disconnect(),d(new Error(`Timeout waiting for ${p}`))},g)})},Ey=Cy({childList:!0,subtree:!0,isReady:(l,s)=>{var u;return!!l?.childElementCount&&((u=l?.matches)==null?void 0:u.call(l,s))&&l.childElementCount>0}});function it(l,s){const u=S.useRef(),[i,d]=S.useState("rendering");return S.useEffect(()=>{if(!l)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!u.current){const f=`[data-clerk-component="${l}"]`,p=s?.selector;u.current=Ey({selector:p?f+p:f}).then(()=>{d("rendered")}).catch(()=>{d("error")})}},[l,s?.selector]),i}var Qr=l=>"mount"in l,bm=l=>"open"in l,vm=l=>l?.map(({mountIcon:s,unmountIcon:u,...i})=>i),Je=class extends M.PureComponent{constructor(){super(...arguments),this.rootRef=M.createRef()}componentDidUpdate(l){var s,u,i,d;if(!Qr(l)||!Qr(this.props))return;const f=hm(l.props,"customPages","customMenuItems","children"),p=hm(this.props.props,"customPages","customMenuItems","children"),g=((s=f.customPages)==null?void 0:s.length)!==((u=p.customPages)==null?void 0:u.length),v=((i=f.customMenuItems)==null?void 0:i.length)!==((d=p.customMenuItems)==null?void 0:d.length),b=vm(l.props.customMenuItems),k=vm(this.props.props.customMenuItems);(!cm(f,p)||!cm(b,k)||g||v)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(Qr(this.props)&&this.props.mount(this.rootRef.current,this.props.props),bm(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(Qr(this.props)&&this.props.unmount(this.rootRef.current),bm(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:l=!1}=this.props,s={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return M.createElement(M.Fragment,null,!l&&M.createElement("div",{...s}),this.props.children)}},Ue=(l,s)=>{const i=(typeof s=="string"?s:s?.component)||l.displayName||l.name||"Component";l.displayName=i;const d=typeof s=="string"?void 0:s,f=p=>{h0(i||"withClerk");const g=f0(),v=Jx();return!g.loaded&&!d?.renderWhileLoading?null:M.createElement(l,{getContainer:v,...p,component:i,clerk:g})};return f.displayName=`withClerk(${i})`,f},ps=l=>{var s,u;return M.createElement(M.Fragment,null,(s=l?.customPagesPortals)==null?void 0:s.map((i,d)=>S.createElement(i,{key:d})),(u=l?.customMenuItemsPortals)==null?void 0:u.map((i,d)=>S.createElement(i,{key:d})))};Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountSignIn,unmount:l.unmountSignIn,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountSignUp,unmount:l.unmountSignUp,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function ki({children:l}){return ct(iy),M.createElement(M.Fragment,null,l)}function _i({children:l}){return ct(ry),M.createElement(M.Fragment,null,l)}var zy=Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}},{customPages:g,customPagesPortals:v}=p0(i.children);return M.createElement(M.Fragment,null,f&&u,M.createElement(Je,{component:s,mount:l.mountUserProfile,unmount:l.unmountUserProfile,updateProps:l.__internal_updateProps,props:{...i,customPages:g},rootProps:p},M.createElement(ps,{customPagesPortals:v})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(zy,{Page:ki,Link:_i});var v0=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),Ny=Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}},{customPages:g,customPagesPortals:v}=p0(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),b={...i.userProfileProps,customPages:g},{customMenuItems:k,customMenuItemsPortals:y}=ky(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),N=g0(i.children),V={mount:l.mountUserButton,unmount:l.unmountUserButton,updateProps:l.__internal_updateProps,props:{...i,userProfileProps:b,customMenuItems:k}},G={customPagesPortals:v,customMenuItemsPortals:y};return M.createElement(v0.Provider,{value:V},f&&u,l.loaded&&M.createElement(Je,{component:s,...V,hideRootHtmlElement:!!i.__experimental_asProvider,rootProps:p},i.__experimental_asProvider?N:null,M.createElement(ps,{...G})))},{component:"UserButton",renderWhileLoading:!0});function ms({children:l}){return ct(py),M.createElement(M.Fragment,null,l)}function x0({children:l}){return ct(my),M.createElement(M.Fragment,null,l)}function y0({children:l}){return ct(gy),M.createElement(M.Fragment,null,l)}function My(l){const s=S.useContext(v0),u={...s,props:{...s.props,...l}};return M.createElement(Je,{...u})}var S0=Object.assign(Ny,{UserProfilePage:ki,UserProfileLink:_i,MenuItems:ms,Action:x0,Link:y0,__experimental_Outlet:My});function gs({children:l}){return ct(sy),M.createElement(M.Fragment,null,l)}function bs({children:l}){return ct(oy),M.createElement(M.Fragment,null,l)}var Ay=Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}},{customPages:g,customPagesPortals:v}=m0(i.children);return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountOrganizationProfile,unmount:l.unmountOrganizationProfile,updateProps:l.__internal_updateProps,props:{...i,customPages:g},rootProps:p},M.createElement(ps,{customPagesPortals:v})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(Ay,{Page:gs,Link:bs});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountCreateOrganization,unmount:l.unmountCreateOrganization,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});var w0=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),Ty=Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}},{customPages:g,customPagesPortals:v}=m0(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),b={...i.organizationProfileProps,customPages:g},k=g0(i.children),y={mount:l.mountOrganizationSwitcher,unmount:l.unmountOrganizationSwitcher,updateProps:l.__internal_updateProps,props:{...i,organizationProfileProps:b},rootProps:p,component:s};return l.__experimental_prefetchOrganizationSwitcher(),M.createElement(w0.Provider,{value:y},M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{...y,hideRootHtmlElement:!!i.__experimental_asProvider},i.__experimental_asProvider?k:null,M.createElement(ps,{customPagesPortals:v}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function Ry(l){const s=S.useContext(w0),u={...s,props:{...s.props,...l}};return M.createElement(Je,{...u})}Object.assign(Ty,{OrganizationProfilePage:gs,OrganizationProfileLink:bs,__experimental_Outlet:Ry});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountOrganizationList,unmount:l.unmountOrganizationList,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,open:l.openGoogleOneTap,close:l.closeGoogleOneTap,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountWaitlist,unmount:l.unmountWaitlist,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s,{selector:'[data-component-status="ready"]'})==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountPricingTable,unmount:l.unmountPricingTable,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountAPIKeys,unmount:l.unmountAPIKeys,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountUserAvatar,unmount:l.unmountUserAvatar,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountTaskChooseOrganization,unmount:l.unmountTaskChooseOrganization,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountTaskResetPassword,unmount:l.unmountTaskResetPassword,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});Ue(({clerk:l,component:s,fallback:u,...i})=>{const f=it(s)==="rendering"||!l.loaded,p={...f&&u&&{style:{display:"none"}}};return M.createElement(M.Fragment,null,f&&u,l.loaded&&M.createElement(Je,{component:s,mount:l.mountTaskSetupMFA,unmount:l.unmountTaskSetupMFA,updateProps:l.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});var Uy={actor:void 0,factorVerificationAge:null,orgId:void 0,orgPermissions:void 0,orgRole:void 0,orgSlug:void 0,sessionClaims:void 0,sessionId:void 0,sessionStatus:void 0,userId:void 0};function Oy(){const l=ji(),s=s0(),u=S.useCallback(()=>s,[s]),i=S.useSyncExternalStore(S.useCallback(f=>l.addListener(f,{skipInitialEmit:!0}),[l]),S.useCallback(()=>!l.loaded||!l.__internal_lastEmittedResources?u():l.__internal_lastEmittedResources,[l,u]),u);return S.useMemo(()=>{if(!i)return Uy;const f=Ly(i)?im(!1,{},i):im(!0,i,void 0);return Dy(f)},[i])}function Dy(l){return{sessionId:l.sessionId,sessionStatus:l.sessionStatus,sessionClaims:l.sessionClaims,userId:l.userId,actor:l.actor,orgId:l.orgId,orgRole:l.orgRole,orgSlug:l.orgSlug,orgPermissions:l.orgPermissions,factorVerificationAge:l.factorVerificationAge}}function Ly(l){return!("client"in l)}var j0=l=>new Promise(s=>{const u=i=>{["ready","degraded"].includes(i)&&(s(),l.off("status",u))};l.on("status",u,{notify:!0})}),By=l=>async s=>{if(!gi())throw new Eu("useAuth().getToken() can only be used in browser environments. To access auth data server-side, see the Auth object reference doc: https://clerk.com/docs/reference/backend/types/auth-object",{code:"clerk_runtime_not_browser"});return await j0(l),l.session?l.session.getToken(s):null},Hy=l=>async(...s)=>(await j0(l),l.signOut(...s)),Yy=(l={})=>{var s;h0("useAuth");const{treatPendingAsSignedOut:u}=l??{},i=Oy(),d=f0(),f=S.useCallback(By(d),[d]),p=S.useCallback(Hy(d),[d]);return(s=d.telemetry)==null||s.record(i0("useAuth",{treatPendingAsSignedOut:u})),qy({...i,getToken:f,signOut:p},{treatPendingAsSignedOut:u})};function qy(l,{treatPendingAsSignedOut:s=!0}={}){const{userId:u,orgId:i,orgRole:d,has:f,signOut:p,getToken:g,orgPermissions:v,factorVerificationAge:b,sessionClaims:k}=l??{},y=S.useCallback(V=>f?f(V):Ex({userId:u,orgId:i,orgRole:d,orgPermissions:v,factorVerificationAge:b,features:k?.fea||"",plans:k?.pla||""})(V),[f,u,i,d,v,b,k]),N=zx({authObject:{...l,getToken:g,signOut:p,has:y},options:{treatPendingAsSignedOut:s}});return N||ba.throw(ly)}var k0=l=>{throw TypeError(l)},Nu=(l,s,u)=>s.has(l)||k0("Cannot "+u),ke=(l,s,u)=>(Nu(l,s,"read from private field"),u?u.call(l):s.get(l)),Qa=(l,s,u)=>s.has(l)?k0("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(l):s.set(l,u),bn=(l,s,u,i)=>(Nu(l,s,"write to private field"),s.set(l,u),u),au=(l,s,u)=>(Nu(l,s,"access private method"),u),Gy=[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]];const xm=new Set,Mu=(l,s,u)=>{const i=ey()||ty(),d=l;xm.has(d)||i||(xm.add(d),console.warn(`Clerk - DEPRECATION WARNING: "${l}" is deprecated and will be removed in the next major release.
${s}`))};function Vy(l){const s=l.match(/^(\d+)\.(\d+)\.(\d+)/);if(!s)return null;const[,u,i,d]=s;return{major:parseInt(u,10),minor:parseInt(i,10),patch:parseInt(d,10)}}function Xy(l,s){const{major:u,minor:i,patch:d}=l;return s.some(([f,p,g,v])=>u!==f?!1:g===-1?i>p||i===p&&d>=v:i===g&&d>=v)}function Py(l,s){const u=Vy(l);return u?Xy(u,s):!1}const ym=(l,s,u,i,d)=>{const{notify:f}=d||{};let p=l.get(u);p||(p=[],l.set(u,p)),p.push(i),f&&s.has(u)&&i(s.get(u))},Sm=(l,s,u)=>(l.get(s)||[]).map(i=>i(u)),wm=(l,s,u)=>{const i=l.get(s);i&&(u?i.splice(i.indexOf(u)>>>0,1):l.set(s,[]))},Qy=()=>{const l=new Map,s=new Map,u=new Map;return{on:(...d)=>ym(l,s,...d),prioritizedOn:(...d)=>ym(u,s,...d),emit:(d,f)=>{s.set(d,f),Sm(u,d,f),Sm(l,d,f)},off:(...d)=>wm(l,...d),prioritizedOff:(...d)=>wm(u,...d),internal:{retrieveListeners:d=>l.get(d)||[]}}},al={Status:"status"},Ky=()=>Qy(),Zy={initialDelay:125,maxDelayBetweenRetries:0,factor:2,shouldRetry:(l,s)=>s<5,retryImmediately:!1,jitter:!0},Fy=100,_0=async l=>new Promise(s=>setTimeout(s,l)),C0=(l,s)=>s?l*(1+Math.random()):l,Iy=l=>{let s=0;const u=()=>{const i=l.initialDelay,d=l.factor;let f=i*Math.pow(d,s);return f=C0(f,l.jitter),Math.min(l.maxDelayBetweenRetries||f,f)};return async()=>{await _0(u()),s++}},Jy=async(l,s={})=>{let u=0;const{shouldRetry:i,initialDelay:d,maxDelayBetweenRetries:f,factor:p,retryImmediately:g,jitter:v,onBeforeRetry:b}={...Zy,...s},k=Iy({initialDelay:d,maxDelayBetweenRetries:f,factor:p,jitter:v});for(;;)try{return await l()}catch(y){if(u++,!i(y,u))throw y;b&&await b(u),g&&u===1?await _0(C0(Fy,v)):await k()}},Wy="loadScript cannot be called when document does not exist",$y="loadScript cannot be called without a src";async function E0(l="",s){const{async:u,defer:i,beforeLoad:d,crossOrigin:f,nonce:p}=s||{};return Jy(()=>new Promise((v,b)=>{l||b(new Error($y)),(!document||!document.body)&&b(new Error(Wy));const k=document.createElement("script");f&&k.setAttribute("crossorigin",f),k.async=u||!1,k.defer=i||!1,k.addEventListener("load",()=>{k.remove(),v(k)}),k.addEventListener("error",y=>{k.remove(),b(y.error??new Error(`failed to load script: ${l}`))}),k.src=l,k.nonce=p,d?.(k),document.body.appendChild(k)}),{shouldRetry:(v,b)=>b<=5})}function e2(l){return l?t2(l)||z0(l):!0}function t2(l){return/^http(s)?:\/\//.test(l||"")}function z0(l){return l.startsWith("/")}function a2(l){return l?z0(l)?new URL(l,window.location.origin).toString():l:""}function n2(l){if(!l)return"";let s;if(l.match(/^(clerk\.)+\w*$/))s=/(clerk\.)*(?=clerk\.)/;else{if(l.match(/\.clerk.accounts/))return l;s=/^(clerk\.)*/gi}return`clerk.${l.replace(s,"")}`}const N0=(l,s="6.3.0")=>{if(l)return l;const u=l2(s);return u?u==="snapshot"?s:u:i2(s)},l2=l=>l.trim().replace(/^v/,"").match(/-(.+?)(\.|$)/)?.[1],i2=l=>l.trim().replace(/^v/,"").split(".")[0],{isDevOrStagingUrl:r2}=mx(),Au=t0({packageName:"@clerk/shared"});function M0(l){return typeof window>"u"||!window[l]?!1:!!window[l]}const nu=()=>M0("Clerk"),lu=()=>M0("__internal_ClerkUICtor");function A0(l){if(typeof window>"u"||!window.performance)return!1;const s=performance.getEntriesByName(l,"resource");if(s.length===0)return!1;const u=s[s.length-1];return u.transferSize===0&&u.decodedBodySize===0&&(u.responseEnd===0||u.responseEnd>0&&u.responseStart>0||"responseStatus"in u&&(u.responseStatus>=400||u.responseStatus===0))}const s2=async l=>{const s=l?.scriptLoadTimeout??15e3,u=p=>new Eu("Failed to load Clerk JS"+(p?.message?`, ${p.message}`:""),{code:"failed_to_load_clerk_js",cause:p});if(nu())return null;if(!l?.publishableKey)return Au.throwMissingPublishableKeyError(),null;const i=c2(l),d=document.querySelector("script[data-clerk-js-script]");if(d)if(A0(i))d.remove();else try{return await as(s,nu,u(),d),null}catch{d.remove()}const f=as(s,nu,u());return E0(i,{async:!0,crossOrigin:"anonymous",nonce:l.nonce,beforeLoad:R0(T0(l))}).catch(p=>{throw u(p)}),f},o2=async l=>{const s=l?.scriptLoadTimeout??15e3,u=p=>new Eu("Failed to load Clerk UI"+(p?.message?`, ${p.message}`:""),{code:"failed_to_load_clerk_ui",cause:p});if(lu())return null;if(!l?.publishableKey)return Au.throwMissingPublishableKeyError(),null;const i=u2(l),d=document.querySelector("script[data-clerk-ui-script]");if(d)if(A0(i))d.remove();else try{return await as(s,lu,u(),d),null}catch{d.remove()}const f=as(s,lu,u());return E0(i,{async:!0,crossOrigin:"anonymous",nonce:l.nonce,beforeLoad:R0(d2(l))}).catch(p=>{throw u(p)}),f},c2=l=>{const{__internal_clerkJSUrl:s,__internal_clerkJSVersion:u,proxyUrl:i,domain:d,publishableKey:f}=l;return s||`https://${U0({publishableKey:f,proxyUrl:i,domain:d})}/npm/@clerk/clerk-js@${N0(u)}/dist/clerk.browser.js`},u2=l=>{const{__internal_clerkUIUrl:s,__internal_clerkUIVersion:u,proxyUrl:i,domain:d,publishableKey:f}=l;return s||`https://${U0({publishableKey:f,proxyUrl:i,domain:d})}/npm/@clerk/ui@${N0(u,"1.2.1")}/dist/ui.browser.js`},T0=l=>{const s={};return l.publishableKey&&(s["data-clerk-publishable-key"]=l.publishableKey),l.proxyUrl&&(s["data-clerk-proxy-url"]=l.proxyUrl),l.domain&&(s["data-clerk-domain"]=l.domain),l.nonce&&(s.nonce=l.nonce),s},d2=l=>T0(l),R0=l=>s=>{for(const u in l)s.setAttribute(u,l[u])},U0=l=>{const{proxyUrl:s,domain:u,publishableKey:i}=l;return s&&e2(s)?a2(s).replace(/http(s)?:\/\//,""):u&&!r2(em(i)?.frontendApi||"")?n2(u):em(i)?.frontendApi||""};function as(l,s,u,i){return new Promise((d,f)=>{let p=!1;const g=(N,V)=>{clearTimeout(N),clearInterval(V)};i?.addEventListener("error",()=>{g(k,y),f(u)});const v=()=>{p||s()&&(p=!0,g(k,y),d(null))},k=setTimeout(()=>{p||(p=!0,g(k,y),s()?d(null):f(u))},l);v();const y=setInterval(()=>{if(p){clearInterval(y);return}v()},100)})}function f2(l){Au.setPackageName({packageName:l})}Ue(({clerk:l,...s})=>{var u,i;const{client:d,session:f}=l,p=((i=(u=d.signedInSessions)==null?void 0:u.length)!=null?i:0)>0;return M.useEffect(()=>{f===null&&p?l.redirectToAfterSignOut():l.redirectToSignIn(s)},[]),null},"RedirectToSignIn");Ue(({clerk:l,...s})=>(M.useEffect(()=>{l.redirectToSignUp(s)},[]),null),"RedirectToSignUp");Ue(({clerk:l,...s})=>(M.useEffect(()=>{l.redirectToTasks(s)},[]),null),"RedirectToTasks");Ue(({clerk:l})=>(M.useEffect(()=>{Mu("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),l.redirectToUserProfile()},[]),null),"RedirectToUserProfile");Ue(({clerk:l})=>(M.useEffect(()=>{Mu("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),l.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");Ue(({clerk:l})=>(M.useEffect(()=>{Mu("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),l.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");Ue(({clerk:l,...s})=>(M.useEffect(()=>{l.handleRedirectCallback(s)},[]),null),"AuthenticateWithRedirectCallback");function h2(){try{return Py(M.version,Gy)}catch{return!1}}var p2=h2(),m2=()=>({fields:{identifier:null,password:null,code:null},raw:null,global:null}),g2=()=>({fields:{firstName:null,lastName:null,emailAddress:null,phoneNumber:null,password:null,username:null,code:null,captcha:null,legalAccepted:null},raw:null,global:null}),b2=()=>({fields:{emailAddress:null},raw:null,global:null}),jm=()=>({pathRoot:"",attempts:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,message:null,status:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient(){return!1},reload(){throw new Error("reload() called before Clerk is loaded")},__internal_toSnapshot(){return{object:"verification",id:"",attempts:null,error:{code:"",message:""},expire_at:null,externalVerificationRedirectURL:null,nonce:null,message:null,status:null,strategy:null,verified_at_client:null}}}),Kr=()=>({...jm(),supportedStrategies:[],nextAction:"",reload(){throw new Error("reload() called before Clerk is loaded")},__internal_toSnapshot(){return{...jm().__internal_toSnapshot(),next_action:this.nextAction,supported_strategies:this.supportedStrategies}}}),v2=class{constructor(l){this.isomorphicClerk=l,this.signInSignalProxy=this.buildSignInProxy(),this.signUpSignalProxy=this.buildSignUpProxy(),this.waitlistSignalProxy=this.buildWaitlistProxy()}signInSignal(){return this.signInSignalProxy}signUpSignal(){return this.signUpSignalProxy}waitlistSignal(){return this.waitlistSignalProxy}get __internal_waitlist(){return this.state.__internal_waitlist}checkoutSignal(l){return this.buildCheckoutProxy(l)}buildSignInProxy(){const l=this.gateProperty.bind(this),s=()=>this.client.signIn.__internal_future;return{errors:m2(),fetchStatus:"idle",signIn:{status:"needs_identifier",availableStrategies:[],get isTransferable(){return l(s,"isTransferable",!1)},get id(){return l(s,"id",void 0)},get supportedFirstFactors(){return l(s,"supportedFirstFactors",[])},get supportedSecondFactors(){return l(s,"supportedSecondFactors",[])},get secondFactorVerification(){return l(s,"secondFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},get identifier(){return l(s,"identifier",null)},get createdSessionId(){return l(s,"createdSessionId",null)},get userData(){return l(s,"userData",{})},get firstFactorVerification(){return l(s,"firstFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},get canBeDiscarded(){return l(s,"canBeDiscarded",!1)},create:this.gateMethod(s,"create"),password:this.gateMethod(s,"password"),sso:this.gateMethod(s,"sso"),finalize:this.gateMethod(s,"finalize"),reset:this.gateMethod(s,"reset"),emailCode:this.wrapMethods(()=>s().emailCode,["sendCode","verifyCode"]),emailLink:this.wrapStruct(()=>s().emailLink,["sendLink","waitForVerification"],["verification"],{verification:null}),resetPasswordEmailCode:this.wrapMethods(()=>s().resetPasswordEmailCode,["sendCode","verifyCode","submitPassword"]),resetPasswordPhoneCode:this.wrapMethods(()=>s().resetPasswordPhoneCode,["sendCode","verifyCode","submitPassword"]),phoneCode:this.wrapMethods(()=>s().phoneCode,["sendCode","verifyCode"]),mfa:this.wrapMethods(()=>s().mfa,["sendPhoneCode","verifyPhoneCode","sendEmailCode","verifyEmailCode","verifyTOTP","verifyBackupCode"]),ticket:this.gateMethod(s,"ticket"),passkey:this.gateMethod(s,"passkey"),web3:this.gateMethod(s,"web3")}}}buildSignUpProxy(){const l=this.gateProperty.bind(this),s=this.gateMethod.bind(this),u=()=>this.client.signUp.__internal_future;return{errors:g2(),fetchStatus:"idle",signUp:{get id(){return l(u,"id",void 0)},get requiredFields(){return l(u,"requiredFields",[])},get optionalFields(){return l(u,"optionalFields",[])},get missingFields(){return l(u,"missingFields",[])},get username(){return l(u,"username",null)},get firstName(){return l(u,"firstName",null)},get lastName(){return l(u,"lastName",null)},get emailAddress(){return l(u,"emailAddress",null)},get phoneNumber(){return l(u,"phoneNumber",null)},get web3Wallet(){return l(u,"web3Wallet",null)},get hasPassword(){return l(u,"hasPassword",!1)},get unsafeMetadata(){return l(u,"unsafeMetadata",{})},get createdSessionId(){return l(u,"createdSessionId",null)},get createdUserId(){return l(u,"createdUserId",null)},get abandonAt(){return l(u,"abandonAt",null)},get legalAcceptedAt(){return l(u,"legalAcceptedAt",null)},get locale(){return l(u,"locale",null)},get status(){return l(u,"status","missing_requirements")},get unverifiedFields(){return l(u,"unverifiedFields",[])},get isTransferable(){return l(u,"isTransferable",!1)},get canBeDiscarded(){return l(u,"canBeDiscarded",!1)},create:s(u,"create"),update:s(u,"update"),sso:s(u,"sso"),password:s(u,"password"),ticket:s(u,"ticket"),web3:s(u,"web3"),finalize:s(u,"finalize"),reset:s(u,"reset"),verifications:this.wrapStruct(()=>u().verifications,["sendEmailCode","verifyEmailCode","sendEmailLink","waitForEmailLinkVerification","sendPhoneCode","verifyPhoneCode"],["emailAddress","phoneNumber","web3Wallet","externalAccount","emailLinkVerification"],{emailAddress:Kr(),phoneNumber:Kr(),web3Wallet:Kr(),externalAccount:Kr(),emailLinkVerification:null})}}}buildWaitlistProxy(){const l=this.gateProperty.bind(this),s=this.gateMethod.bind(this),u=()=>this.state.__internal_waitlist;return{errors:b2(),fetchStatus:"idle",waitlist:{pathRoot:"/waitlist",get id(){return l(u,"id","")},get createdAt(){return l(u,"createdAt",null)},get updatedAt(){return l(u,"updatedAt",null)},join:s(u,"join"),reload:s(u,"reload")}}}buildCheckoutProxy(l){const s=this.gateProperty.bind(this),u=()=>this.checkout(l),i=()=>u().checkout;return{errors:{raw:null,global:null},fetchStatus:"idle",checkout:{get status(){return s(i,"status","needs_initialization")},get externalClientSecret(){return s(i,"externalClientSecret",null)},get externalGatewayId(){return s(i,"externalGatewayId",null)},get paymentMethod(){return s(i,"paymentMethod",null)},get plan(){return s(i,"plan",null)},get planPeriod(){return s(i,"planPeriod",null)},get totals(){return s(i,"totals",null)},get isImmediatePlanChange(){return s(i,"isImmediatePlanChange",!1)},get freeTrialEndsAt(){return s(i,"freeTrialEndsAt",null)},get payer(){return s(i,"payer",null)},get planPeriodStart(){return s(i,"planPeriodStart",null)},get needsPaymentMethod(){return s(i,"needsPaymentMethod",null)},start:this.gateMethod(i,"start"),confirm:this.gateMethod(i,"confirm"),finalize:this.gateMethod(i,"finalize")}}}__internal_effect(l){throw new Error("__internal_effect called before Clerk is loaded")}__internal_computed(l){throw new Error("__internal_computed called before Clerk is loaded")}get state(){const l=this.isomorphicClerk.__internal_state;if(!l)throw new Error("Clerk state not ready");return l}get client(){const l=this.isomorphicClerk.client;if(!l)throw new Error("Clerk client not ready");return l}get checkout(){const l=this.isomorphicClerk.__experimental_checkout;if(!l)throw new Error("Clerk checkout not ready");return l}gateProperty(l,s,u){return!gi()||!this.isomorphicClerk.loaded?u:l()[s]}gateMethod(l,s){return(async(...u)=>{if(!gi())return ba.throw(`Attempted to call a method (${s}) that is not supported on the server.`);this.isomorphicClerk.loaded||await new Promise(d=>this.isomorphicClerk.addOnLoaded(d));const i=l();return i[s].apply(i,u)})}wrapMethods(l,s){return Object.fromEntries(s.map(u=>[u,this.gateMethod(l,u)]))}wrapStruct(l,s,u,i){const d={};for(const f of s)d[f]=this.gateMethod(l,f);for(const f of u)Object.defineProperty(d,f,{get:()=>this.gateProperty(l,f,i[f]),enumerable:!0});return d}};typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);var x2={name:"@clerk/react",version:"6.1.0",environment:"production"},Jr,rl,sl,Xt,Ht,oi,Ka,ci,Wr,O0=class D0{constructor(s){Qa(this,ci),this.clerkjs=null,this.preopenOneTap=null,this.preopenUserVerification=null,this.preopenEnableOrganizationsPrompt=null,this.preopenSignIn=null,this.preopenCheckout=null,this.preopenPlanDetails=null,this.preopenSubscriptionDetails=null,this.preopenSignUp=null,this.preopenUserProfile=null,this.preopenOrganizationProfile=null,this.preopenCreateOrganization=null,this.preOpenWaitlist=null,this.premountSignInNodes=new Map,this.premountSignUpNodes=new Map,this.premountUserAvatarNodes=new Map,this.premountUserProfileNodes=new Map,this.premountUserButtonNodes=new Map,this.premountOrganizationProfileNodes=new Map,this.premountCreateOrganizationNodes=new Map,this.premountOrganizationSwitcherNodes=new Map,this.premountOrganizationListNodes=new Map,this.premountMethodCalls=new Map,this.premountWaitlistNodes=new Map,this.premountPricingTableNodes=new Map,this.premountAPIKeysNodes=new Map,this.premountOAuthConsentNodes=new Map,this.premountTaskChooseOrganizationNodes=new Map,this.premountTaskResetPasswordNodes=new Map,this.premountTaskSetupMFANodes=new Map,this.premountAddListenerCalls=new Map,this.loadedListeners=[],Qa(this,Jr,"loading"),Qa(this,rl),Qa(this,sl),Qa(this,Xt),Qa(this,Ht,Ky()),Qa(this,oi),this.buildSignInUrl=i=>{const d=()=>{var f;return((f=this.clerkjs)==null?void 0:f.buildSignInUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignInUrl",d)},this.buildSignUpUrl=i=>{const d=()=>{var f;return((f=this.clerkjs)==null?void 0:f.buildSignUpUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignUpUrl",d)},this.buildAfterSignInUrl=(...i)=>{const d=()=>{var f;return((f=this.clerkjs)==null?void 0:f.buildAfterSignInUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignInUrl",d)},this.buildAfterSignUpUrl=(...i)=>{const d=()=>{var f;return((f=this.clerkjs)==null?void 0:f.buildAfterSignUpUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignUpUrl",d)},this.buildAfterSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterSignOutUrl",i)},this.buildNewSubscriptionRedirectUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildNewSubscriptionRedirectUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl",i)},this.buildAfterMultiSessionSingleSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterMultiSessionSingleSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl",i)},this.buildUserProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildUserProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildUserProfileUrl",i)},this.buildCreateOrganizationUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildCreateOrganizationUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildCreateOrganizationUrl",i)},this.buildOrganizationProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildOrganizationProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildOrganizationProfileUrl",i)},this.buildWaitlistUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildWaitlistUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildWaitlistUrl",i)},this.buildTasksUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildTasksUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildTasksUrl",i)},this.buildUrlWithAuth=i=>{const d=()=>{var f;return((f=this.clerkjs)==null?void 0:f.buildUrlWithAuth(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildUrlWithAuth",d)},this.handleUnauthenticated=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.handleUnauthenticated()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("handleUnauthenticated",i)},this.on=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.on)return this.clerkjs.on(...i);ke(this,Ht).on(...i)},this.off=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.off)return this.clerkjs.off(...i);ke(this,Ht).off(...i)},this.addOnLoaded=i=>{this.loadedListeners.push(i),this.loaded&&this.emitLoaded()},this.emitLoaded=()=>{this.loadedListeners.forEach(i=>i()),this.loadedListeners=[]},this.beforeLoad=i=>{if(!i)throw new Error("Failed to hydrate latest Clerk JS")},this.replayInterceptedInvocations=i=>{var d,f;if(!i)throw new Error("Failed to hydrate latest Clerk JS");return this.clerkjs=i,this.premountMethodCalls.forEach(p=>p()),this.premountAddListenerCalls.forEach((p,g)=>{p.handlers.nativeUnsubscribe=i.addListener(g,p.options)}),(d=ke(this,Ht).internal.retrieveListeners("status"))==null||d.forEach(p=>{this.on("status",p,{notify:!0})}),(f=ke(this,Ht).internal.retrieveListeners("queryClientStatus"))==null||f.forEach(p=>{this.on("queryClientStatus",p,{notify:!0})}),this.preopenSignIn!==null&&i.openSignIn(this.preopenSignIn),this.preopenCheckout!==null&&i.__internal_openCheckout(this.preopenCheckout),this.preopenPlanDetails!==null&&i.__internal_openPlanDetails(this.preopenPlanDetails),this.preopenSubscriptionDetails!==null&&i.__internal_openSubscriptionDetails(this.preopenSubscriptionDetails),this.preopenSignUp!==null&&i.openSignUp(this.preopenSignUp),this.preopenUserProfile!==null&&i.openUserProfile(this.preopenUserProfile),this.preopenUserVerification!==null&&i.__internal_openReverification(this.preopenUserVerification),this.preopenOneTap!==null&&i.openGoogleOneTap(this.preopenOneTap),this.preopenOrganizationProfile!==null&&i.openOrganizationProfile(this.preopenOrganizationProfile),this.preopenCreateOrganization!==null&&i.openCreateOrganization(this.preopenCreateOrganization),this.preOpenWaitlist!==null&&i.openWaitlist(this.preOpenWaitlist),this.preopenEnableOrganizationsPrompt&&i.__internal_openEnableOrganizationsPrompt(this.preopenEnableOrganizationsPrompt),this.premountSignInNodes.forEach((p,g)=>{i.mountSignIn(g,p)}),this.premountSignUpNodes.forEach((p,g)=>{i.mountSignUp(g,p)}),this.premountUserProfileNodes.forEach((p,g)=>{i.mountUserProfile(g,p)}),this.premountUserAvatarNodes.forEach((p,g)=>{i.mountUserAvatar(g,p)}),this.premountUserButtonNodes.forEach((p,g)=>{i.mountUserButton(g,p)}),this.premountOrganizationListNodes.forEach((p,g)=>{i.mountOrganizationList(g,p)}),this.premountWaitlistNodes.forEach((p,g)=>{i.mountWaitlist(g,p)}),this.premountPricingTableNodes.forEach((p,g)=>{i.mountPricingTable(g,p)}),this.premountAPIKeysNodes.forEach((p,g)=>{i.mountAPIKeys(g,p)}),this.premountOAuthConsentNodes.forEach((p,g)=>{i.__internal_mountOAuthConsent(g,p)}),this.premountTaskChooseOrganizationNodes.forEach((p,g)=>{i.mountTaskChooseOrganization(g,p)}),this.premountTaskResetPasswordNodes.forEach((p,g)=>{i.mountTaskResetPassword(g,p)}),this.premountTaskSetupMFANodes.forEach((p,g)=>{i.mountTaskSetupMFA(g,p)}),typeof this.clerkjs.status>"u"&&ke(this,Ht).emit(al.Status,"ready"),this.emitLoaded(),this.clerkjs},this.__experimental_checkout=(...i)=>this.loaded&&this.clerkjs?this.clerkjs.__experimental_checkout(...i):ke(this,oi).checkoutSignal(...i),this.__internal_updateProps=async i=>{const d=await au(this,ci,Wr).call(this);if(d&&"__internal_updateProps"in d)return d.__internal_updateProps(i)},this.setActive=i=>this.clerkjs?this.clerkjs.setActive(i):Promise.reject(),this.openSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignIn(i):this.preopenSignIn=i},this.closeSignIn=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignIn():this.preopenSignIn=null},this.__internal_openCheckout=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openCheckout(i):this.preopenCheckout=i},this.__internal_closeCheckout=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeCheckout():this.preopenCheckout=null},this.__internal_openPlanDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openPlanDetails(i):this.preopenPlanDetails=i},this.__internal_closePlanDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closePlanDetails():this.preopenPlanDetails=null},this.__internal_openSubscriptionDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openSubscriptionDetails(i):this.preopenSubscriptionDetails=i??null},this.__internal_closeSubscriptionDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeSubscriptionDetails():this.preopenSubscriptionDetails=null},this.__internal_openReverification=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openReverification(i):this.preopenUserVerification=i},this.__internal_closeReverification=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeReverification():this.preopenUserVerification=null},this.__internal_openEnableOrganizationsPrompt=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openEnableOrganizationsPrompt(i):this.preopenEnableOrganizationsPrompt=i},this.__internal_closeEnableOrganizationsPrompt=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeEnableOrganizationsPrompt():this.preopenEnableOrganizationsPrompt=null},this.openGoogleOneTap=i=>{this.clerkjs&&this.loaded?this.clerkjs.openGoogleOneTap(i):this.preopenOneTap=i},this.closeGoogleOneTap=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeGoogleOneTap():this.preopenOneTap=null},this.openUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openUserProfile(i):this.preopenUserProfile=i},this.closeUserProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeUserProfile():this.preopenUserProfile=null},this.openOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openOrganizationProfile(i):this.preopenOrganizationProfile=i},this.closeOrganizationProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeOrganizationProfile():this.preopenOrganizationProfile=null},this.openCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.openCreateOrganization(i):this.preopenCreateOrganization=i},this.closeCreateOrganization=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeCreateOrganization():this.preopenCreateOrganization=null},this.openWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.openWaitlist(i):this.preOpenWaitlist=i},this.closeWaitlist=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeWaitlist():this.preOpenWaitlist=null},this.openSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignUp(i):this.preopenSignUp=i},this.closeSignUp=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignUp():this.preopenSignUp=null},this.mountSignIn=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignIn(i,d):this.premountSignInNodes.set(i,d)},this.unmountSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignIn(i):this.premountSignInNodes.delete(i)},this.mountSignUp=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignUp(i,d):this.premountSignUpNodes.set(i,d)},this.unmountSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignUp(i):this.premountSignUpNodes.delete(i)},this.mountUserAvatar=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserAvatar(i,d):this.premountUserAvatarNodes.set(i,d)},this.unmountUserAvatar=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserAvatar(i):this.premountUserAvatarNodes.delete(i)},this.mountUserProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserProfile(i,d):this.premountUserProfileNodes.set(i,d)},this.unmountUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserProfile(i):this.premountUserProfileNodes.delete(i)},this.mountOrganizationProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationProfile(i,d):this.premountOrganizationProfileNodes.set(i,d)},this.unmountOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationProfile(i):this.premountOrganizationProfileNodes.delete(i)},this.mountCreateOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountCreateOrganization(i,d):this.premountCreateOrganizationNodes.set(i,d)},this.unmountCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountCreateOrganization(i):this.premountCreateOrganizationNodes.delete(i)},this.mountOrganizationSwitcher=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationSwitcher(i,d):this.premountOrganizationSwitcherNodes.set(i,d)},this.unmountOrganizationSwitcher=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationSwitcher(i):this.premountOrganizationSwitcherNodes.delete(i)},this.__experimental_prefetchOrganizationSwitcher=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.__experimental_prefetchOrganizationSwitcher()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher",i)},this.mountOrganizationList=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationList(i,d):this.premountOrganizationListNodes.set(i,d)},this.unmountOrganizationList=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationList(i):this.premountOrganizationListNodes.delete(i)},this.mountUserButton=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserButton(i,d):this.premountUserButtonNodes.set(i,d)},this.unmountUserButton=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserButton(i):this.premountUserButtonNodes.delete(i)},this.mountWaitlist=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountWaitlist(i,d):this.premountWaitlistNodes.set(i,d)},this.unmountWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountWaitlist(i):this.premountWaitlistNodes.delete(i)},this.mountPricingTable=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountPricingTable(i,d):this.premountPricingTableNodes.set(i,d)},this.unmountPricingTable=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountPricingTable(i):this.premountPricingTableNodes.delete(i)},this.mountAPIKeys=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountAPIKeys(i,d):this.premountAPIKeysNodes.set(i,d)},this.unmountAPIKeys=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountAPIKeys(i):this.premountAPIKeysNodes.delete(i)},this.__internal_mountOAuthConsent=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_mountOAuthConsent(i,d):this.premountOAuthConsentNodes.set(i,d)},this.__internal_unmountOAuthConsent=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_unmountOAuthConsent(i):this.premountOAuthConsentNodes.delete(i)},this.mountTaskChooseOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskChooseOrganization(i,d):this.premountTaskChooseOrganizationNodes.set(i,d)},this.unmountTaskChooseOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskChooseOrganization(i):this.premountTaskChooseOrganizationNodes.delete(i)},this.mountTaskResetPassword=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskResetPassword(i,d):this.premountTaskResetPasswordNodes.set(i,d)},this.unmountTaskResetPassword=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskResetPassword(i):this.premountTaskResetPasswordNodes.delete(i)},this.mountTaskSetupMFA=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskSetupMFA(i,d):this.premountTaskSetupMFANodes.set(i,d)},this.unmountTaskSetupMFA=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskSetupMFA(i):this.premountTaskSetupMFANodes.delete(i)},this.addListener=(i,d)=>{if(this.clerkjs)return this.clerkjs.addListener(i,d);{const f=()=>{var p,g;const v=this.premountAddListenerCalls.get(i);v?.handlers&&((g=v==null?void 0:(p=v.handlers).nativeUnsubscribe)==null||g.call(p),this.premountAddListenerCalls.delete(i))};return this.premountAddListenerCalls.set(i,{options:d,handlers:{unsubscribe:f,nativeUnsubscribe:void 0}}),f}},this.navigate=i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.navigate(i)};this.clerkjs&&this.loaded?d():this.premountMethodCalls.set("navigate",d)},this.redirectWithAuth=async(...i)=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.redirectWithAuth(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectWithAuth",d)},this.redirectToSignIn=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.redirectToSignIn(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignIn",d)},this.redirectToSignUp=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.redirectToSignUp(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignUp",d)},this.redirectToUserProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToUserProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToUserProfile",i)},this.redirectToAfterSignUp=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignUp()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToAfterSignUp",i)},this.redirectToAfterSignIn=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignIn()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignIn",i)},this.redirectToAfterSignOut=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignOut()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignOut",i)},this.redirectToOrganizationProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToOrganizationProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToOrganizationProfile",i)},this.redirectToCreateOrganization=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToCreateOrganization()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToCreateOrganization",i)},this.redirectToWaitlist=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToWaitlist()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToWaitlist",i)},this.redirectToTasks=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.redirectToTasks(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToTasks",d)},this.handleRedirectCallback=async i=>{var d;const f=()=>{var p;return(p=this.clerkjs)==null?void 0:p.handleRedirectCallback(i)};this.clerkjs&&this.loaded?(d=f())==null||d.catch(()=>{}):this.premountMethodCalls.set("handleRedirectCallback",f)},this.handleGoogleOneTapCallback=async(i,d)=>{var f;const p=()=>{var g;return(g=this.clerkjs)==null?void 0:g.handleGoogleOneTapCallback(i,d)};this.clerkjs&&this.loaded?(f=p())==null||f.catch(()=>{}):this.premountMethodCalls.set("handleGoogleOneTapCallback",p)},this.handleEmailLinkVerification=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.handleEmailLinkVerification(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("handleEmailLinkVerification",d)},this.authenticateWithMetamask=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithMetamask(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithMetamask",d)},this.authenticateWithCoinbaseWallet=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithCoinbaseWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithCoinbaseWallet",d)},this.authenticateWithBase=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithBase(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithBase",d)},this.authenticateWithOKXWallet=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithOKXWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithOKXWallet",d)},this.authenticateWithSolana=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithSolana(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithSolana",d)},this.authenticateWithWeb3=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.authenticateWithWeb3(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithWeb3",d)},this.authenticateWithGoogleOneTap=async i=>(await au(this,ci,Wr).call(this)).authenticateWithGoogleOneTap(i),this.__internal_loadStripeJs=async()=>(await au(this,ci,Wr).call(this)).__internal_loadStripeJs(),this.createOrganization=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.createOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("createOrganization",d)},this.getOrganization=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.getOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("getOrganization",d)},this.joinWaitlist=async i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.joinWaitlist(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("joinWaitlist",d)},this.signOut=async(...i)=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.signOut(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("signOut",d)},this.__internal_attemptToEnableEnvironmentSetting=i=>{const d=()=>{var f;return(f=this.clerkjs)==null?void 0:f.__internal_attemptToEnableEnvironmentSetting(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("__internal_attemptToEnableEnvironmentSetting",d)};var u;bn(this,Xt,s?.publishableKey),bn(this,sl,s?.proxyUrl),bn(this,rl,s?.domain),this.options=s,this.Clerk=s?.Clerk||null,this.mode=gi()?"browser":"server",bn(this,oi,new v2(this)),this.options.sdkMetadata||(this.options.sdkMetadata=x2),ke(this,Ht).emit(al.Status,"loading"),ke(this,Ht).prioritizedOn(al.Status,i=>bn(this,Jr,i)),ke(this,Xt)&&((u=this.options.experimental)==null?void 0:u.runtimeEnvironment)==="headless"&&this.options.Clerk?this.loadHeadlessClerk():ke(this,Xt)&&this.getEntryChunks()}get publishableKey(){return ke(this,Xt)}get loaded(){var s;return((s=this.clerkjs)==null?void 0:s.loaded)||!1}get status(){var s;return this.clerkjs?((s=this.clerkjs)==null?void 0:s.status)||(this.clerkjs.loaded?"ready":"loading"):ke(this,Jr)}static getOrCreateInstance(s){return(!gi()||!ke(this,Ka)||s.Clerk&&ke(this,Ka).Clerk!==s.Clerk||ke(this,Ka).publishableKey!==s.publishableKey)&&bn(this,Ka,new D0(s)),ke(this,Ka)}static clearInstance(){bn(this,Ka,null)}get domain(){return typeof window<"u"&&window.location?Zc(ke(this,rl),new URL(window.location.href),""):typeof ke(this,rl)=="function"?ba.throw(Jc):ke(this,rl)||""}get proxyUrl(){return typeof window<"u"&&window.location?Zc(ke(this,sl),new URL(window.location.href),""):typeof ke(this,sl)=="function"?ba.throw(Jc):ke(this,sl)||""}__internal_getOption(s){var u,i;return(u=this.clerkjs)!=null&&u.__internal_getOption?(i=this.clerkjs)==null?void 0:i.__internal_getOption(s):this.options[s]}loadHeadlessClerk(){const s=pm(this.options.Clerk)?new this.options.Clerk(ke(this,Xt),{proxyUrl:this.proxyUrl,domain:this.domain}):this.options.Clerk;if(!s){ke(this,Ht).emit(al.Status,"error");return}const u=()=>{this.replayInterceptedInvocations(s)};s.loaded?u():s.load(this.options).then(()=>u()).catch(i=>{ke(this,Ht).emit(al.Status,"error"),this.emitLoaded()})}get sdkMetadata(){var s;return((s=this.clerkjs)==null?void 0:s.sdkMetadata)||this.options.sdkMetadata||void 0}get instanceType(){var s;return(s=this.clerkjs)==null?void 0:s.instanceType}get frontendApi(){var s;return((s=this.clerkjs)==null?void 0:s.frontendApi)||""}get isStandardBrowser(){var s;return((s=this.clerkjs)==null?void 0:s.isStandardBrowser)||this.options.standardBrowser||!1}get __internal_queryClient(){var s;return(s=this.clerkjs)==null?void 0:s.__internal_queryClient}get isSatellite(){return typeof window<"u"&&window.location?Zc(this.options.isSatellite,new URL(window.location.href),!1):typeof this.options.isSatellite=="function"?ba.throw(Jc):!1}async getEntryChunks(){var s;if(!(this.mode!=="browser"||this.loaded)){typeof window<"u"&&(window.__clerk_publishable_key=ke(this,Xt),window.__clerk_proxy_url=this.proxyUrl,window.__clerk_domain=this.domain);try{const u=await this.getClerkJsEntryChunk();if(!u.loaded){this.beforeLoad(u);const d=this.options.standardBrowser!==!1&&!this.options.Clerk||!!((s=this.options.ui)!=null&&s.ClerkUI)?await this.getClerkUIEntryChunk():void 0;await u.load({...this.options,ui:{...this.options.ui,ClerkUI:d}})}u.loaded&&this.replayInterceptedInvocations(u)}catch(u){const i=u;ke(this,Ht).emit(al.Status,"error"),console.error(i.stack||i.message||i);return}}}async getClerkJsEntryChunk(){if((!this.options.Clerk||this.options.__internal_clerkJSUrl)&&!__BUILD_DISABLE_RHC__&&await s2({...this.options,publishableKey:ke(this,Xt),proxyUrl:this.proxyUrl,domain:this.domain,nonce:this.options.nonce}),this.options.Clerk&&!this.options.__internal_clerkJSUrl&&(global.Clerk=pm(this.options.Clerk)?new this.options.Clerk(ke(this,Xt),{proxyUrl:this.proxyUrl,domain:this.domain}):this.options.Clerk),!global.Clerk)throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");return global.Clerk}async getClerkUIEntryChunk(){const s=this.options.ui,u=!!this.options.__internal_clerkUIUrl;if(s?.ClerkUI&&!u)return s.ClerkUI;if(!((s||this.options.prefetchUI===!1)&&!u)){if(await o2({...this.options,publishableKey:ke(this,Xt),proxyUrl:this.proxyUrl,domain:this.domain,nonce:this.options.nonce}),!global.__internal_ClerkUICtor)throw new Error("Failed to download latest Clerk UI. Contact support@clerk.com.");return global.__internal_ClerkUICtor}}get version(){var s;return(s=this.clerkjs)==null?void 0:s.version}get client(){if(this.clerkjs)return this.clerkjs.client}get session(){if(this.clerkjs)return this.clerkjs.session}get user(){if(this.clerkjs)return this.clerkjs.user}get organization(){if(this.clerkjs)return this.clerkjs.organization}get telemetry(){if(this.clerkjs)return this.clerkjs.telemetry}get __internal_environment(){if(this.clerkjs)return this.clerkjs.__internal_environment}get isSignedIn(){return this.clerkjs?this.clerkjs.isSignedIn:!1}get billing(){var s;return(s=this.clerkjs)==null?void 0:s.billing}get __internal_state(){return this.loaded&&this.clerkjs?this.clerkjs.__internal_state:ke(this,oi)}get apiKeys(){var s;return(s=this.clerkjs)==null?void 0:s.apiKeys}__internal_setEnvironment(...s){if(this.clerkjs&&"__internal_setEnvironment"in this.clerkjs)this.clerkjs.__internal_setEnvironment(s);else return}get __internal_lastEmittedResources(){var s;return(s=this.clerkjs)==null?void 0:s.__internal_lastEmittedResources}};Jr=new WeakMap;rl=new WeakMap;sl=new WeakMap;Xt=new WeakMap;Ht=new WeakMap;oi=new WeakMap;Ka=new WeakMap;ci=new WeakSet;Wr=function(){return new Promise(l=>{this.addOnLoaded(()=>l(this.clerkjs))})};Qa(O0,Ka);var km=O0;function y2(l){const{initialState:s,children:u,...i}=l,d=Sy(i),{isomorphicClerk:f,clerkStatus:p}=w2(d);return M.createElement(Xx,{initialState:s,clerk:f,clerkStatus:p},u)}var L0=jy(y2,"ClerkProvider",ay);L0.displayName="ClerkProvider";var S2=p2?"shared":"",w2=l=>{const s=M.useMemo(()=>({clerkUIVariant:S2,...l}),[l]),u=M.useRef(km.getOrCreateInstance(s)),[i,d]=M.useState(u.current.status);return M.useEffect(()=>{u.current.__internal_updateProps({appearance:l.appearance})},[l.appearance]),M.useEffect(()=>{u.current.__internal_updateProps({options:l})},[l.localization]),M.useEffect(()=>(u.current.on("status",d),()=>{u.current&&u.current.off("status",d),km.clearInstance()}),[]),{isomorphicClerk:u.current,clerkStatus:i}};typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);var _m;if(globalThis.__clerkSharedModules){const l=(_m=globalThis.__clerkSharedModules.react)==null?void 0:_m.version;l&&l!==S.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${l}, current import: ${S.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:Cb,"react-dom":ux,"react-dom/client":Tb,"react/jsx-runtime":kb};Ue(({clerk:l,children:s,...u})=>{const{appearance:i,getContainer:d,component:f,signUpFallbackRedirectUrl:p,forceRedirectUrl:g,fallbackRedirectUrl:v,signUpForceRedirectUrl:b,mode:k,initialValues:y,withSignUp:N,oauthFlow:V,...G}=u;s=fs(s,"Sign in");const B=ds(s)("SignInButton"),U=()=>{const Y={forceRedirectUrl:g,fallbackRedirectUrl:v,signUpFallbackRedirectUrl:p,signUpForceRedirectUrl:b,initialValues:y,withSignUp:N,oauthFlow:V};return k==="modal"?l.openSignIn({...Y,appearance:i,getContainer:d}):l.redirectToSignIn({...Y,signInFallbackRedirectUrl:v,signInForceRedirectUrl:g})},q={...G,onClick:async Y=>(B&&typeof B=="object"&&"props"in B&&await hs(B.props.onClick)(Y),U())};return M.cloneElement(B,q)},{component:"SignInButton",renderWhileLoading:!0});Ue(({clerk:l,children:s,...u})=>{const{redirectUrl:i,getContainer:d,component:f,...p}=u;s=fs(s,"Sign in with Metamask");const g=ds(s)("SignInWithMetamaskButton"),v=async()=>{async function y(){await l.authenticateWithMetamask({redirectUrl:i||void 0})}y()},k={...p,onClick:async y=>(await hs(g.props.onClick)(y),v())};return M.cloneElement(g,k)},{component:"SignInWithMetamask",renderWhileLoading:!0});Ue(({clerk:l,children:s,...u})=>{const{redirectUrl:i="/",signOutOptions:d,getContainer:f,component:p,...g}=u;s=fs(s,"Sign out");const v=ds(s)("SignOutButton"),b=()=>l.signOut({redirectUrl:i,...d}),y={...g,onClick:async N=>(await hs(v.props.onClick)(N),b())};return M.cloneElement(v,y)},{component:"SignOutButton",renderWhileLoading:!0});Ue(({clerk:l,children:s,...u})=>{const{appearance:i,unsafeMetadata:d,getContainer:f,component:p,fallbackRedirectUrl:g,forceRedirectUrl:v,signInFallbackRedirectUrl:b,signInForceRedirectUrl:k,mode:y,initialValues:N,oauthFlow:V,...G}=u;s=fs(s,"Sign up");const B=ds(s)("SignUpButton"),U=()=>{const Y={fallbackRedirectUrl:g,forceRedirectUrl:v,signInFallbackRedirectUrl:b,signInForceRedirectUrl:k,initialValues:N,oauthFlow:V};return y==="modal"?l.openSignUp({...Y,appearance:i,unsafeMetadata:d,getContainer:f}):l.redirectToSignUp({...Y,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:v})},q={...G,onClick:async Y=>(B&&typeof B=="object"&&"props"in B&&await hs(B.props.onClick)(Y),U())};return M.cloneElement(B,q)},{component:"SignUpButton",renderWhileLoading:!0});Wx({packageName:"@clerk/react"});f2("@clerk/react");const B0=(...l)=>l.filter((s,u,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===u).join(" ").trim();const j2=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const k2=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,u,i)=>i?i.toUpperCase():u.toLowerCase());const Cm=l=>{const s=k2(l);return s.charAt(0).toUpperCase()+s.slice(1)};var _2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const C2=l=>{for(const s in l)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};const E2=S.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:d="",children:f,iconNode:p,...g},v)=>S.createElement("svg",{ref:v,..._2,width:s,height:s,stroke:l,strokeWidth:i?Number(u)*24/Number(s):u,className:B0("lucide",d),...!f&&!C2(g)&&{"aria-hidden":"true"},...g},[...p.map(([b,k])=>S.createElement(b,k)),...Array.isArray(f)?f:[f]]));const le=(l,s)=>{const u=S.forwardRef(({className:i,...d},f)=>S.createElement(E2,{ref:f,iconNode:s,className:B0(`lucide-${j2(Cm(l))}`,`lucide-${l}`,i),...d}));return u.displayName=Cm(l),u};const z2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],N2=le("arrow-left",z2);const M2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pi=le("arrow-right",M2);const A2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bi=le("award",A2);const T2=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pu=le("badge-check",T2);const R2=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],H0=le("book-marked",R2);const U2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lt=le("book-open",U2);const O2=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Y0=le("chart-column",O2);const D2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vi=le("chevron-down",D2);const L2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$r=le("chevron-right",L2);const B2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ns=le("chevron-up",B2);const H2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ui=le("circle-check-big",H2);const Y2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],q2=le("circle-check",Y2);const G2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Em=le("circle",G2);const V2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Za=le("clock",V2);const X2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],q0=le("code-xml",X2);const P2=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],G0=le("contact",P2);const Q2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],mu=le("flame",Q2);const K2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Z2=le("funnel",K2);const F2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Tu=le("globe",F2);const I2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],va=le("graduation-cap",I2);const J2=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],W2=le("heart-handshake",J2);const $2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ru=le("heart",$2);const e4=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],V0=le("house",e4);const t4=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],a4=le("instagram",t4);const n4=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],X0=le("linkedin",n4);const l4=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zm=le("lock",l4);const i4=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vs=le("mail",i4);const r4=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],P0=le("map-pin",r4);const s4=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],Q0=le("megaphone",s4);const o4=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Zr=le("message-circle",o4);const c4=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],u4=le("message-square",c4);const d4=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],K0=le("palette",d4);const f4=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Uu=le("phone",f4);const h4=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],gu=le("play",h4);const p4=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ls=le("search",p4);const m4=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Z0=le("send",m4);const g4=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Nm=le("shield-check",g4);const b4=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],v4=le("shield",b4);const x4=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],y4=le("sliders-horizontal",x4);const S4=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bu=le("sparkles",S4);const w4=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ga=le("star",w4);const j4=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],k4=le("tag",j4);const _4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],C4=le("target",_4);const E4=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],xi=le("trending-up",E4);const z4=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],F0=le("twitter",z4);const N4=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],I0=le("user",N4);const M4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ia=le("users",M4);const A4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],is=le("x",A4);const T4=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],R4=le("youtube",T4);const U4=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],O4=le("zap",U4),D4=[{name:"Home",icon:V0,href:"/"},{name:"Courses",icon:lt,href:"/courses"},{name:"About",icon:H0,href:"/about"},{name:"Faculty",icon:Ia,href:"/faculty"},{name:"Contact",icon:G0,href:"/contact"}],L4=[{value:"12K+",label:"Students",icon:Ia},{value:"240+",label:"Courses",icon:lt},{value:"94%",label:"Success",icon:bi},{value:"58",label:"Countries",icon:Tu}],B4=[{icon:O4,title:"Learn at Your Pace",desc:"Lifetime access. Resume exactly where you left off, on any device, any time."},{icon:v4,title:"Expert Instructors",desc:"Every teacher is a vetted industry professional with real shipped products."},{icon:C4,title:"Career-Ready Skills",desc:"Curriculum built around what employers actually hire for — zero fluff."},{icon:Ru,title:"Community Support",desc:"Cohort peers, alumni mentors and weekly live Q&A sessions included."}],H4=[{label:"Development",icon:q0,count:4,color:"#0e7490",bg:"#e0f7fa"},{label:"Design",icon:K0,count:3,color:"#0f766e",bg:"#d1fae5"},{label:"Data",icon:Y0,count:3,color:"#0369a1",bg:"#dbeafe"},{label:"Marketing",icon:Q0,count:2,color:"#7c3aed",bg:"#ede9fe"}],Y4=[{id:"1",name:"Full Stack Web Development",teacher:"Arjun Mehta",image:"https://picsum.photos/seed/c1/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:4820,isFree:!1,price:{original:2999,sale:1499},hot:!0},{id:"2",name:"UI/UX Design Mastery",teacher:"Priya Sharma",image:"https://picsum.photos/seed/c2/480/270",cat:"Design",level:"Beginner",rating:4.9,students:2310,isFree:!1,price:{original:1999,sale:null},hot:!0},{id:"3",name:"Data Science with Python",teacher:"Rohit Verma",image:"https://picsum.photos/seed/c3/480/270",cat:"Data",level:"Advanced",rating:4.7,students:6100,isFree:!0,price:null,hot:!1},{id:"4",name:"React & Next.js Bootcamp",teacher:"Sneha Patel",image:"https://picsum.photos/seed/c4/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:3750,isFree:!1,price:{original:3499,sale:2199},hot:!0}],q4=[{name:"Aisha Rahman",role:"Frontend Engineer @ Google",avatar:"https://i.pravatar.cc/80?img=47",text:"LearnHub changed my career completely. Real-world projects, genuine mentorship — I landed my dream job in 5 months.",rating:5},{name:"Marcus Chen",role:"Data Scientist @ Stripe",avatar:"https://i.pravatar.cc/80?img=12",text:"Switched careers at 34 with zero ML background. The pacing was perfect — challenging but never overwhelming.",rating:5},{name:"Sofia Alvarez",role:"UX Designer @ Figma",avatar:"https://i.pravatar.cc/80?img=29",text:"Most thoughtfully designed course I've ever taken. Real briefs, real feedback, a portfolio I'm proud of.",rating:5}],G4=l=>{if(l.isFree||!l.price)return{free:!0};const{original:s,sale:u}=l.price;return u?{free:!1,display:`₹${u}`,original:`₹${s}`,pct:Math.round((s-u)/s*100)}:{free:!1,display:`₹${s}`,original:null,pct:null}},V4=l=>l>=1e3?`${(l/1e3).toFixed(1)}k`:String(l);function nl(l=.15){const s=S.useRef(null),[u,i]=S.useState(!1);return S.useEffect(()=>{const d=new IntersectionObserver(([f])=>{f.isIntersecting&&i(!0)},{threshold:l});return s.current&&d.observe(s.current),()=>d.disconnect()},[l]),[s,u]}const iu=({n:l=5,size:s=12})=>c.jsx("div",{style:{display:"flex",gap:2},children:[1,2,3,4,5].map(u=>c.jsx(ga,{size:s,fill:u<=l?"#f59e0b":"none",color:u<=l?"#f59e0b":"#cbd5e1"},u))});function X4(){const l=cs(),{openSignUp:s}=o0(),{isSignedIn:u}=c0(),[i,d]=S.useState(!1);S.useEffect(()=>{const T=()=>d(window.scrollY>10);return window.addEventListener("scroll",T,{passive:!0}),()=>window.removeEventListener("scroll",T)},[]);const[f,p]=nl(.3),[g,v]=nl(.15),[b,k]=nl(.15),[y,N]=nl(.1),[V,G]=nl(.1),[B,U]=nl(.2);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }

        :root {
          --cyan:      #0e7490;
          --cyan-dk:   #0a5c73;
          --cyan-md:   #0891b2;
          --teal:      #0f766e;
          --amber:     #f59e0b;
          --slate:     #475569;
          --slate-lt:  #94a3b8;
          --border:    rgba(14,116,144,0.13);
          --bg:        #f0f9ff;
          --white:     #ffffff;
          --dark:      #0c1a2e;
          --ff-d:      'Cormorant Garamond', Georgia, serif;
          --ff-b:      'DM Sans', sans-serif;
          --sh:        0 2px 16px rgba(14,116,144,0.08);
          --sh-md:     0 8px 32px rgba(14,116,144,0.12);
          --sh-lg:     0 16px 48px rgba(14,116,144,0.16);
        }

        /* ══════════════════════════════════════
           NAVBAR
        ══════════════════════════════════════ */
        .h-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--ff-b);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(18px) saturate(1.8);
          -webkit-backdrop-filter: blur(18px) saturate(1.8);
          border-bottom: 1px solid rgba(14,116,144,0.14);
          box-shadow: 0 2px 20px rgba(14,116,144,0.06);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .h-nav.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 24px rgba(14,116,144,0.13);
          border-bottom-color: rgba(14,116,144,0.18);
        }

        /* Brand */
        .h-brand {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none; flex-shrink: 0;
        }

        .h-brand-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.3);
        }

        .h-brand-name {
          font-family: var(--ff-d);
          font-size: 1.25rem; font-weight: 700;
          background: linear-gradient(135deg, #0c4a6e, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; letter-spacing: -0.01em;
        }

        .h-brand-sub {
          font-size: 0.58rem; font-weight: 300;
          color: var(--slate-lt); letter-spacing: 0.13em;
          text-transform: uppercase; margin-top: 1px;
        }

        /* Center pill nav */
        .h-pill {
          display: flex; align-items: center; gap: 2px;
          background: rgba(240,249,255,0.85);
          border: 1px solid rgba(14,116,144,0.14);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(14,116,144,0.06);
          position: absolute; left: 50%; transform: translateX(-50%);
        }

        .h-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 13px; border-radius: 100px;
          text-decoration: none;
          font-size: 0.79rem; font-weight: 500;
          color: #64748b; white-space: nowrap;
          transition: all 0.2s ease;
        }

        .h-link:hover { color: var(--cyan); background: rgba(14,116,144,0.07); }
        .h-link.active { color: var(--cyan); background: rgba(14,116,144,0.1); }
        .h-link svg { opacity: 0.7; transition: opacity 0.2s; }
        .h-link:hover svg, .h-link.active svg { opacity: 1; }

        /* Auth */
        .h-auth { display: flex; align-items: center; flex-shrink: 0; }

        .h-signup {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 18px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.82rem; font-weight: 500;
          color: var(--cyan);
          background: rgba(240,249,255,0.8);
          border: 1.5px solid rgba(14,116,144,0.28);
          cursor: pointer; outline: none;
          transition: all 0.2s ease;
        }

        .h-signup:hover {
          background: var(--cyan); color: #fff;
          border-color: var(--cyan);
          box-shadow: 0 4px 16px rgba(14,116,144,0.28);
          transform: translateY(-1px);
        }

        .h-userBtn {
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14,116,144,0.2);
          display: flex; align-items: center;
          transition: border-color 0.2s;
        }

        .h-userBtn:hover { border-color: var(--cyan); }

        /* ══════════════════════════════════════
           SHARED
        ══════════════════════════════════════ */
        .h-page { font-family: var(--ff-b); background: var(--bg); overflow-x: hidden; }

        .h-sec-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.7rem; font-weight: 500; color: var(--cyan);
          letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 14px;
        }

        .h-sec-title {
          font-family: var(--ff-d);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 10px;
        }

        .h-sec-title em {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .h-sec-sub {
          font-size: 0.91rem; color: var(--slate);
          font-weight: 300; line-height: 1.65;
        }

        .h-sec-head { text-align: center; max-width: 560px; margin: 0 auto 48px; }

        /* Reveal animation */
        .h-reveal {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .h-reveal.on { opacity: 1; transform: translateY(0); }

        /* CTA buttons */
        .h-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 500;
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490 55%, #0891b2);
          box-shadow: 0 6px 22px rgba(14,116,144,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          letter-spacing: 0.01em;
        }
        .h-btn-p:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(14,116,144,0.45); }

        .h-btn-s {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 400;
          color: var(--cyan); background: rgba(255,255,255,0.92);
          border: 1.5px solid rgba(14,116,144,0.24);
          cursor: pointer; text-decoration: none;
          transition: all 0.2s ease;
        }
        .h-btn-s:hover { background:#fff; border-color:var(--cyan); transform:translateY(-2px); box-shadow:var(--sh); }

        /* ══════════════════════════════════════
           HERO
        ══════════════════════════════════════ */
        .h-hero {
          min-height: 100vh;
          padding: 110px 28px 72px;          /* 110px clears the fixed navbar */
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          background: linear-gradient(150deg, #dff4fb 0%, #f0f9ff 45%, #e0f2fe 100%);
        }

        /* Grid texture */
        .h-hero::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(14,116,144,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.045) 1px, transparent 1px);
          background-size: 54px 54px;
        }

        /* Mesh blobs */
        .h-blob { position:absolute; border-radius:50%; filter:blur(75px); pointer-events:none; }
        .h-blob-1 { width:520px;height:520px; background:radial-gradient(#a5f3fc,#67e8f9); opacity:.25; top:-160px; left:-100px; }
        .h-blob-2 { width:400px;height:400px; background:radial-gradient(#bae6fd,#7dd3fc); opacity:.2;  bottom:-80px; right:-80px; }

        /* Floating icons */
        .h-fi {
          position:absolute; width:44px; height:44px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          border:1px solid rgba(255,255,255,0.9);
          box-shadow:0 4px 14px rgba(14,116,144,0.1);
          opacity:0; z-index:1;
          animation: fiIn .6s ease forwards, fiBob 4s ease-in-out infinite;
        }

        @keyframes fiIn  { from{opacity:0;transform:scale(.7) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes fiBob { 0%,100%{transform:translateY(0) rotate(0deg)} 40%{transform:translateY(-8px) rotate(1deg)} 70%{transform:translateY(4px) rotate(-1deg)} }

        /* Hero two-col grid */
        .h-hero-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 52px; max-width: 1180px; width:100%;
          align-items: center; position:relative; z-index:2;
        }

        @media(max-width:900px) {
          .h-hero-grid { grid-template-columns:1fr; gap:36px; text-align:center; }
          .h-hero-right { display:none; }
          .h-fi { display:none; }
          .h-pill { display:none; }
          .h-links-mobile { display:flex !important; }
        }

        /* Hero left */
        .h-hero-left { animation: hSlide .65s ease both; }

        @keyframes hSlide {
          from { opacity:0; transform:translateX(-24px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .h-announce {
          display:inline-flex; align-items:center; gap:8px;
          padding:7px 16px 7px 10px;
          background:rgba(255,255,255,0.88);
          border:1px solid rgba(14,116,144,0.2);
          border-radius:100px;
          font-size:.74rem; font-weight:500; color:var(--cyan);
          backdrop-filter:blur(8px); box-shadow:var(--sh);
          margin-bottom:22px;
          animation: hSlide .5s .1s ease both;
        }

        .h-ann-dot {
          width:22px; height:22px;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          border-radius:50%; display:flex; align-items:center; justify-content:center;
        }

        .h-hero-title {
          font-family: var(--ff-d);
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.03; letter-spacing: -0.03em;
          margin-bottom: 18px;
          animation: hSlide .55s .15s ease both;
        }

        .h-hero-title em {
          font-style:italic;
          background:linear-gradient(135deg,#0e7490 0%,#0891b2 55%,#06b6d4 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .h-hero-sub {
          font-size:1rem; color:var(--slate); font-weight:300;
          line-height:1.7; max-width:470px; margin-bottom:26px;
          animation: hSlide .55s .22s ease both;
        }

        .h-checks {
          display:grid; grid-template-columns:1fr 1fr;
          gap:9px 22px; margin-bottom:34px;
          animation: hSlide .55s .28s ease both;
        }

        .h-check {
          display:flex; align-items:center; gap:8px;
          font-size:.83rem; color:var(--slate); font-weight:400;
        }

        .h-ctas {
          display:flex; gap:12px; flex-wrap:wrap;
          animation: hSlide .55s .34s ease both;
        }

        /* Hero right card */
        .h-hero-right { animation: hSlideR .65s .1s ease both; position:relative; }

        @keyframes hSlideR {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .h-card {
          background:var(--white);
          border:1px solid var(--border);
          border-radius:22px; padding:28px;
          box-shadow:var(--sh-lg); position:relative; overflow:hidden;
        }

        .h-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#0e7490,#0891b2,#06b6d4);
        }

        .h-card-img {
          width:100%; border-radius:13px; display:block;
          margin-bottom:18px; aspect-ratio:16/9; object-fit:cover;
        }

        .h-card-title {
          font-family:var(--ff-d);
          font-size:1.15rem; font-weight:600; color:var(--dark); margin-bottom:8px;
        }

        .h-card-meta {
          display:flex; align-items:center; gap:10px;
          font-size:.75rem; color:var(--slate-lt); font-weight:300;
        }

        .h-card-tag {
          position:absolute; top:18px; right:18px;
          padding:5px 12px; border-radius:100px;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          color:#fff; font-size:.68rem; font-weight:600; letter-spacing:.05em;
        }

        /* Floating stat chips */
        .h-chip {
          position:absolute;
          background:var(--white); border:1px solid var(--border);
          border-radius:12px; padding:9px 13px;
          box-shadow:var(--sh-md);
          display:flex; align-items:center; gap:8px;
          font-size:.75rem; font-weight:500; color:var(--dark);
          animation: fiBob 5s ease-in-out infinite;
        }

        .h-chip-1 { bottom:-14px; left:-22px; animation-delay:.3s; }
        .h-chip-2 { top:22px;    left:-26px;  animation-delay:.9s; }

        .h-chip-ico {
          width:28px; height:28px; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
        }

        /* ══════════════════════════════════════
           STATS BAND
        ══════════════════════════════════════ */
        .h-stats {
          background:linear-gradient(135deg,#0a5c73,#0e7490 60%,#0369a1);
          padding:52px 28px; position:relative; overflow:hidden;
        }

        .h-stats::before {
          content:''; position:absolute; inset:0;
          background:url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='10' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E");
        }

        .h-stats-grid {
          display:grid; grid-template-columns:repeat(4,1fr);
          max-width:900px; margin:0 auto; position:relative; z-index:1;
        }

        @media(max-width:640px) { .h-stats-grid { grid-template-columns:repeat(2,1fr); } }

        .h-st {
          text-align:center; padding:18px 10px;
          border-right:1px solid rgba(255,255,255,0.12);
          transition:background .2s;
        }
        .h-st:last-child { border-right:none; }
        .h-st:hover { background:rgba(255,255,255,0.06); }

        .h-st-ico {
          width:34px; height:34px; background:rgba(255,255,255,0.1); border-radius:9px;
          display:flex; align-items:center; justify-content:center;
          margin:0 auto 9px; color:rgba(255,255,255,.85);
        }

        .h-st-val {
          font-family:var(--ff-d);
          font-size:2rem; font-weight:700; color:#fff;
          line-height:1; margin-bottom:4px; letter-spacing:-.02em;
          opacity:0; transform:translateY(10px);
          transition:opacity .5s ease, transform .5s ease;
        }
        .h-st-val.on { opacity:1; transform:translateY(0); }

        .h-st-lbl {
          font-size:.68rem; color:rgba(255,255,255,.6);
          text-transform:uppercase; letter-spacing:.09em; font-weight:400;
        }

        /* ══════════════════════════════════════
           FEATURES
        ══════════════════════════════════════ */
        .h-features { padding:88px 28px; background:var(--white); }

        .h-feat-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
          gap:18px; max-width:1100px; margin:0 auto;
        }

        .h-feat-card {
          background:var(--bg); border:1px solid var(--border);
          border-radius:16px; padding:26px 22px;
          opacity:0; transform:translateY(18px);
          transition:opacity .5s ease, transform .5s ease, box-shadow .28s ease, border-color .22s;
        }
        .h-feat-card.on { opacity:1; transform:translateY(0); }
        .h-feat-card:hover { transform:translateY(-4px); box-shadow:var(--sh-md); border-color:rgba(14,116,144,.25); }

        .h-feat-ico {
          width:44px; height:44px; border-radius:12px;
          background:rgba(14,116,144,0.09);
          border:1px solid rgba(14,116,144,.14);
          display:flex; align-items:center; justify-content:center;
          color:var(--cyan); margin-bottom:15px;
        }

        .h-feat-title { font-family:var(--ff-d); font-size:1.08rem; font-weight:600; color:var(--dark); margin-bottom:7px; }
        .h-feat-desc  { font-size:.81rem; color:var(--slate); font-weight:300; line-height:1.65; }

        /* ══════════════════════════════════════
           CATEGORIES
        ══════════════════════════════════════ */
        .h-cats { padding:72px 28px; background:var(--bg); }

        .h-cat-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:15px; max-width:1100px; margin:0 auto;
        }

        .h-cat-card {
          background:var(--white); border:1px solid var(--border); border-radius:16px;
          padding:26px 20px; cursor:pointer; text-decoration:none;
          display:flex; flex-direction:column; gap:11px;
          opacity:0; transform:translateY(14px);
          transition:opacity .45s ease, transform .45s ease, box-shadow .25s, border-color .2s;
        }
        .h-cat-card.on { opacity:1; transform:translateY(0); }
        .h-cat-card:hover { transform:translateY(-4px); box-shadow:var(--sh-md); border-color:rgba(14,116,144,.28); }

        .h-cat-ico { width:46px; height:46px; border-radius:13px; display:flex; align-items:center; justify-content:center; }
        .h-cat-name { font-family:var(--ff-d); font-size:1.08rem; font-weight:600; color:var(--dark); }
        .h-cat-cnt  { font-size:.74rem; color:var(--slate-lt); font-weight:300; }
        .h-cat-arr  { margin-top:auto; color:var(--slate-lt); transition:transform .2s, color .2s; }
        .h-cat-card:hover .h-cat-arr { transform:translateX(4px); color:var(--cyan); }

        /* ══════════════════════════════════════
           COURSES
        ══════════════════════════════════════ */
        .h-courses { padding:80px 28px; background:var(--white); }

        .h-cr-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(265px,1fr));
          gap:18px; max-width:1200px; margin:0 auto 40px;
        }

        .h-cr-card {
          background:var(--bg); border:1px solid var(--border); border-radius:16px;
          overflow:hidden; cursor:pointer;
          opacity:0; transform:translateY(16px);
          transition:opacity .45s ease, transform .45s ease, box-shadow .28s, border-color .22s;
          outline:none;
        }
        .h-cr-card.on { opacity:1; transform:translateY(0); }
        .h-cr-card:hover { transform:translateY(-5px); box-shadow:var(--sh-lg); border-color:rgba(14,116,144,.3); }

        .h-cr-thumb { position:relative; height:158px; overflow:hidden; background:#e2e8f0; }
        .h-cr-thumb img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .4s ease; }
        .h-cr-card:hover .h-cr-thumb img { transform:scale(1.06); }

        .h-cr-ov {
          position:absolute; inset:0;
          background:rgba(10,92,115,.78);
          display:flex; flex-direction:column;
          align-items:center; justify-content:center; gap:6px;
          opacity:0; transition:opacity .22s ease; backdrop-filter:blur(2px);
        }
        .h-cr-card:hover .h-cr-ov { opacity:1; }
        .h-cr-ov span { font-size:.74rem; font-weight:500; color:rgba(255,255,255,.9); letter-spacing:.05em; }

        .h-cr-bgs { position:absolute; top:8px; left:8px; display:flex; gap:4px; }
        .h-cr-bg {
          display:inline-flex; align-items:center; gap:3px;
          padding:3px 7px; border-radius:100px;
          font-size:.61rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase;
        }
        .h-cr-bg-free { background:var(--teal); color:#fff; }
        .h-cr-bg-sale { background:#0f172a; color:var(--amber); }
        .h-cr-bg-hot  { background:rgba(239,68,68,.85); color:#fff; }

        .h-cr-lvl {
          position:absolute; top:8px; right:8px;
          padding:3px 9px; border-radius:100px;
          font-size:.59rem; font-weight:500;
          background:rgba(255,255,255,.92); color:var(--slate);
          backdrop-filter:blur(4px);
        }

        .h-cr-body { padding:15px 15px 13px; }
        .h-cr-cat  { font-size:.64rem; font-weight:600; color:var(--cyan); text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px; }

        .h-cr-name {
          font-family:var(--ff-d);
          font-size:.99rem; font-weight:600; color:var(--dark);
          line-height:1.25; margin-bottom:4px;
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
        }

        .h-cr-teacher { font-size:.71rem; color:var(--slate-lt); font-weight:300; margin-bottom:7px; }

        .h-cr-meta { display:flex; align-items:center; gap:9px; font-size:.68rem; color:var(--slate-lt); margin-bottom:9px; }
        .h-cr-mi   { display:flex; align-items:center; gap:3px; }
        .h-cr-rat  { color:#92400e; font-weight:500; }

        .h-cr-foot {
          display:flex; align-items:center; justify-content:space-between;
          padding-top:9px; border-top:1px solid rgba(14,116,144,.07);
        }

        .h-pf { font-size:.81rem; font-weight:700; color:var(--teal); }
        .h-pc { font-size:.86rem; font-weight:700; color:var(--dark); }
        .h-po { font-size:.71rem; color:var(--slate-lt); text-decoration:line-through; margin-left:4px; }

        /* ══════════════════════════════════════
           TESTIMONIALS
        ══════════════════════════════════════ */
        .h-tm { background:var(--dark); padding:80px 28px; position:relative; overflow:hidden; }

        .h-tm::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(14,116,144,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,.05) 1px, transparent 1px);
          background-size:52px 52px;
        }

        .h-tm-grid {
          display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
          gap:18px; max-width:1100px; margin:0 auto; position:relative; z-index:1;
        }

        .h-tm-card {
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:18px; padding:26px 22px;
          display:flex; flex-direction:column; gap:13px;
          position:relative; overflow:hidden;
          opacity:0; transform:translateY(14px);
          transition:opacity .5s ease, transform .5s ease, box-shadow .28s;
        }
        .h-tm-card.on { opacity:1; transform:translateY(0); }
        .h-tm-card:hover { transform:translateY(-4px); box-shadow:0 16px 44px rgba(0,0,0,.35); }
        .h-tm-card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,#0e7490,#67e8f9); }

        .h-tm-qt {
          position:absolute; top:14px; right:16px;
          color:rgba(14,116,144,.14);
          font-family:var(--ff-d); font-size:5rem; line-height:1; font-weight:700;
        }

        .h-tm-text { font-size:.86rem; color:rgba(255,255,255,.72); font-weight:300; line-height:1.72; font-style:italic; flex:1; }

        .h-tm-author {
          display:flex; align-items:center; gap:11px;
          padding-top:13px; border-top:1px solid rgba(255,255,255,.06);
        }

        .h-tm-av { width:42px; height:42px; border-radius:50%; object-fit:cover; border:2px solid rgba(14,116,144,.3); }
        .h-tm-name { font-size:.85rem; font-weight:500; color:#fff; margin-bottom:2px; }
        .h-tm-role { font-size:.71rem; color:var(--slate-lt); font-weight:300; }

        /* ══════════════════════════════════════
           FINAL CTA
        ══════════════════════════════════════ */
        .h-cta { padding:96px 28px; background:var(--bg); position:relative; overflow:hidden; text-align:center; }

        .h-cta::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(14,116,144,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,.04) 1px, transparent 1px);
          background-size:50px 50px;
        }

        .h-cta-inner {
          position:relative; z-index:1;
          max-width:600px; margin:0 auto;
          opacity:0; transform:translateY(18px);
          transition:opacity .6s ease, transform .6s ease;
        }
        .h-cta-inner.on { opacity:1; transform:translateY(0); }

        .h-cta-title {
          font-family:var(--ff-d);
          font-size:clamp(2rem,4vw,3rem); font-weight:700; color:var(--dark);
          line-height:1.08; letter-spacing:-.025em; margin-bottom:13px;
        }
        .h-cta-title em {
          font-style:italic;
          background:linear-gradient(135deg,#0e7490,#06b6d4);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .h-cta-sub { font-size:.94rem; color:var(--slate); font-weight:300; line-height:1.65; margin-bottom:34px; }
        .h-cta-btns { display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:20px; }
        .h-cta-note { font-size:.74rem; color:var(--slate-lt); font-weight:300; display:flex; align-items:center; justify-content:center; gap:5px; }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */
        @media(max-width:640px) {
          .h-checks { grid-template-columns:1fr; }
          .h-ctas   { justify-content:center; }
          .h-hero-sub { max-width:100%; }
          .h-nav { padding:10px 16px; }
        }
      `}),c.jsxs("nav",{className:`h-nav${i?" scrolled":""}`,children:[c.jsxs(bt,{to:"/",className:"h-brand",children:[c.jsx("div",{className:"h-brand-icon",children:c.jsx(va,{size:17,color:"#fff"})}),c.jsxs("div",{children:[c.jsx("div",{className:"h-brand-name",children:"LearnHub"}),c.jsx("div",{className:"h-brand-sub",children:"Learning Platform"})]})]}),c.jsx("div",{className:"h-pill",children:D4.map(({name:T,icon:q,href:Y})=>c.jsxs(bt,{to:Y,className:({isActive:W})=>`h-link${W?" active":""}`,children:[c.jsx(q,{size:14}),c.jsx("span",{children:T})]},T))}),c.jsx("div",{className:"h-auth",children:u?c.jsx("div",{className:"h-userBtn",children:c.jsx(S0,{afterSignOutUrl:"/"})}):c.jsx("button",{type:"button",className:"h-signup",onClick:()=>s({}),children:"Create Account"})})]}),c.jsxs("div",{className:"h-page",children:[c.jsxs("section",{className:"h-hero",children:[c.jsx("div",{className:"h-blob h-blob-1"}),c.jsx("div",{className:"h-blob h-blob-2"}),[{Icon:q0,color:"#0e7490",bg:"#e0f7fa",top:"15%",left:"5%",size:19,d:0},{Icon:K0,color:"#0f766e",bg:"#d1fae5",top:"62%",left:"3%",size:17,d:.5},{Icon:Y0,color:"#0369a1",bg:"#dbeafe",top:"18%",left:"89%",size:19,d:.35},{Icon:Q0,color:"#7c3aed",bg:"#ede9fe",top:"74%",left:"92%",size:16,d:.8},{Icon:ga,color:"#f59e0b",bg:"#fef3c7",top:"40%",left:"2%",size:15,d:1}].map(({Icon:T,color:q,bg:Y,top:W,left:X,size:F,d:P},ie)=>c.jsx("div",{className:"h-fi",style:{top:W,left:X,background:Y,animationDelay:`${P}s, ${P+.6}s`},children:c.jsx(T,{size:F,color:q,strokeWidth:1.8})},ie)),c.jsxs("div",{className:"h-hero-grid",children:[c.jsxs("div",{className:"h-hero-left",children:[c.jsxs("div",{className:"h-announce",children:[c.jsx("div",{className:"h-ann-dot",children:c.jsx(bu,{size:11,color:"#fff"})}),"New cohort starting April 2026 — Limited seats",c.jsx($r,{size:13})]}),c.jsxs("h1",{className:"h-hero-title",children:["Learn Skills That",c.jsx("br",{}),"Open ",c.jsx("em",{children:"Real Doors"})]}),c.jsx("p",{className:"h-hero-sub",children:"Join 12,000+ learners building real careers through project-based courses taught by industry experts. Code, design, data — every path covered."}),c.jsx("div",{className:"h-checks",children:["Project-based learning","Expert instructors","Lifetime access","Career support"].map(T=>c.jsxs("div",{className:"h-check",children:[c.jsx(ui,{size:15,color:"#0e7490"}),T]},T))}),c.jsxs("div",{className:"h-ctas",children:[c.jsxs(bt,{to:"/courses",className:"h-btn-p",children:[c.jsx(lt,{size:16})," Explore Courses ",c.jsx(pi,{size:14})]}),c.jsxs(bt,{to:"/about",className:"h-btn-s",children:[c.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#0e7490,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(gu,{size:10,color:"#fff",fill:"#fff"})}),"How It Works"]})]})]}),c.jsxs("div",{className:"h-hero-right",children:[c.jsxs("div",{className:"h-card",children:[c.jsx("span",{className:"h-card-tag",children:"🔥 Trending"}),c.jsx("img",{src:"https://picsum.photos/seed/hero/600/340",alt:"Course",className:"h-card-img"}),c.jsx("div",{className:"h-card-title",children:"Full Stack Web Development"}),c.jsxs("div",{className:"h-card-meta",children:[c.jsx(iu,{n:5,size:13}),c.jsx("span",{children:"4.8 · 4,820 students · 42h"})]})]}),c.jsxs("div",{className:"h-chip h-chip-1",children:[c.jsx("div",{className:"h-chip-ico",style:{background:"#d1fae5"},children:c.jsx(va,{size:14,color:"#0f766e"})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"12K+"}),c.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Students"})]})]}),c.jsxs("div",{className:"h-chip h-chip-2",children:[c.jsx("div",{className:"h-chip-ico",style:{background:"#fef3c7"},children:c.jsx(ga,{size:14,color:"#f59e0b",fill:"#f59e0b"})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"4.9/5"}),c.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Rating"})]})]})]})]})]}),c.jsx("div",{className:"h-stats",ref:f,children:c.jsx("div",{className:"h-stats-grid",children:L4.map(({value:T,label:q,icon:Y},W)=>c.jsxs("div",{className:"h-st",children:[c.jsx("div",{className:"h-st-ico",children:c.jsx(Y,{size:16})}),c.jsx("div",{className:`h-st-val${p?" on":""}`,style:{transitionDelay:`${W*.1}s`},children:T}),c.jsx("div",{className:"h-st-lbl",children:q})]},q))})}),c.jsxs("section",{className:"h-features",ref:g,children:[c.jsxs("div",{className:"h-sec-head",children:[c.jsxs("div",{className:"h-sec-badge",children:[c.jsx(bu,{size:11})," Why LearnHub"]}),c.jsxs("h2",{className:"h-sec-title",children:["Built for ",c.jsx("em",{children:"Real Growth"})]}),c.jsx("p",{className:"h-sec-sub",children:"Everything you need to go from beginner to career-ready, in one place."})]}),c.jsx("div",{className:"h-feat-grid",children:B4.map(({icon:T,title:q,desc:Y},W)=>c.jsxs("div",{className:`h-feat-card${v?" on":""}`,style:{transitionDelay:`${W*.09}s`},children:[c.jsx("div",{className:"h-feat-ico",children:c.jsx(T,{size:20})}),c.jsx("div",{className:"h-feat-title",children:q}),c.jsx("div",{className:"h-feat-desc",children:Y})]},q))})]}),c.jsxs("section",{className:"h-cats",ref:b,children:[c.jsxs("div",{className:"h-sec-head",children:[c.jsxs("div",{className:"h-sec-badge",children:[c.jsx(lt,{size:11})," Explore Topics"]}),c.jsxs("h2",{className:"h-sec-title",children:["Pick Your ",c.jsx("em",{children:"Path"})]}),c.jsx("p",{className:"h-sec-sub",children:"Four career tracks, hundreds of hours, all on one platform."})]}),c.jsx("div",{className:"h-cat-grid",children:H4.map(({label:T,icon:q,count:Y,color:W,bg:X},F)=>c.jsxs(bt,{to:"/courses",className:`h-cat-card${k?" on":""}`,style:{transitionDelay:`${F*.09}s`},children:[c.jsx("div",{className:"h-cat-ico",style:{background:X},children:c.jsx(q,{size:22,color:W})}),c.jsxs("div",{children:[c.jsx("div",{className:"h-cat-name",children:T}),c.jsxs("div",{className:"h-cat-cnt",children:[Y," courses available"]})]}),c.jsx($r,{size:15,className:"h-cat-arr"})]},T))})]}),c.jsxs("section",{className:"h-courses",ref:y,children:[c.jsxs("div",{className:"h-sec-head",children:[c.jsxs("div",{className:"h-sec-badge",children:[c.jsx(mu,{size:11})," Popular Now"]}),c.jsxs("h2",{className:"h-sec-title",children:["Top ",c.jsx("em",{children:"Courses"})]}),c.jsx("p",{className:"h-sec-sub",children:"Hand-picked, loved by thousands of learners worldwide."})]}),c.jsx("div",{className:"h-cr-grid",children:Y4.map((T,q)=>{const Y=G4(T);return c.jsxs("article",{className:`h-cr-card${N?" on":""}`,style:{transitionDelay:`${q*.08}s`},onClick:()=>l("/courses"),role:"button",tabIndex:0,onKeyDown:W=>{W.key==="Enter"&&l("/courses")},children:[c.jsxs("div",{className:"h-cr-thumb",children:[c.jsx("img",{src:T.image,alt:T.name,loading:"lazy"}),c.jsxs("div",{className:"h-cr-ov",children:[c.jsx(lt,{size:18,color:"#fff"}),c.jsx("span",{children:"View Course"})]}),c.jsxs("div",{className:"h-cr-bgs",children:[Y.free&&c.jsxs("span",{className:"h-cr-bg h-cr-bg-free",children:[c.jsx(pu,{size:9})," Free"]}),Y.pct&&c.jsxs("span",{className:"h-cr-bg h-cr-bg-sale",children:[c.jsx(xi,{size:9})," ",Y.pct,"% off"]}),T.hot&&c.jsxs("span",{className:"h-cr-bg h-cr-bg-hot",children:[c.jsx(mu,{size:9})," Hot"]})]}),c.jsx("span",{className:"h-cr-lvl",children:T.level})]}),c.jsxs("div",{className:"h-cr-body",children:[c.jsx("div",{className:"h-cr-cat",children:T.cat}),c.jsx("div",{className:"h-cr-name",children:T.name}),c.jsx("div",{className:"h-cr-teacher",children:T.teacher}),c.jsxs("div",{className:"h-cr-meta",children:[c.jsxs("span",{className:"h-cr-mi",children:[c.jsx(Za,{size:10}),T.duration??30,"h"]}),c.jsxs("span",{className:"h-cr-mi",children:[c.jsx(Ia,{size:10}),V4(T.students)]}),c.jsxs("span",{className:"h-cr-mi h-cr-rat",children:[c.jsx(ga,{size:10,fill:"#f59e0b",color:"#f59e0b"}),T.rating]})]}),c.jsxs("div",{className:"h-cr-foot",children:[c.jsx(iu,{n:Math.round(T.rating),size:12}),Y.free?c.jsx("span",{className:"h-pf",children:"Free"}):c.jsxs("span",{children:[c.jsx("span",{className:"h-pc",children:Y.display}),Y.original&&c.jsx("span",{className:"h-po",children:Y.original})]})]})]})]},T.id)})}),c.jsx("div",{style:{textAlign:"center"},children:c.jsxs(bt,{to:"/courses",className:"h-btn-p",style:{display:"inline-flex"},children:[c.jsx(lt,{size:15})," View All Courses ",c.jsx(pi,{size:14})]})})]}),c.jsxs("section",{className:"h-tm",ref:V,children:[c.jsxs("div",{className:"h-sec-head",style:{position:"relative",zIndex:1},children:[c.jsxs("div",{className:"h-sec-badge",style:{background:"rgba(14,116,144,.14)",color:"#67e8f9",borderColor:"rgba(14,116,144,.28)"},children:[c.jsx(ga,{size:11,fill:"#67e8f9",color:"#67e8f9"})," Student Stories"]}),c.jsxs("h2",{className:"h-sec-title",style:{color:"#fff"},children:["Real People, ",c.jsx("em",{children:"Real Results"})]}),c.jsx("p",{className:"h-sec-sub",style:{color:"var(--slate-lt)"},children:"12,000+ learners transformed their careers. Here's what they say."})]}),c.jsx("div",{className:"h-tm-grid",children:q4.map((T,q)=>c.jsxs("div",{className:`h-tm-card${G?" on":""}`,style:{transitionDelay:`${q*.12}s`},children:[c.jsx("div",{className:"h-tm-qt","aria-hidden":"true",children:'"'}),c.jsx(iu,{n:T.rating,size:13}),c.jsxs("p",{className:"h-tm-text",children:['"',T.text,'"']}),c.jsxs("div",{className:"h-tm-author",children:[c.jsx("img",{src:T.avatar,alt:T.name,className:"h-tm-av"}),c.jsxs("div",{children:[c.jsx("div",{className:"h-tm-name",children:T.name}),c.jsx("div",{className:"h-tm-role",children:T.role})]})]})]},T.name))})]}),c.jsx("section",{className:"h-cta",ref:B,children:c.jsxs("div",{className:`h-cta-inner${U?" on":""}`,children:[c.jsxs("div",{className:"h-sec-badge",style:{marginBottom:14},children:[c.jsx(va,{size:11})," Start Today"]}),c.jsxs("h2",{className:"h-cta-title",children:["Your Next Chapter",c.jsx("br",{}),"Starts ",c.jsx("em",{children:"Here"})]}),c.jsx("p",{className:"h-cta-sub",children:"Join thousands who chose LearnHub to build real skills, gain confidence, and land the careers they deserve."}),c.jsxs("div",{className:"h-cta-btns",children:[c.jsxs(bt,{to:"/courses",className:"h-btn-p",children:[c.jsx(lt,{size:16})," Get Started Free ",c.jsx(pi,{size:14})]}),c.jsxs(bt,{to:"/faculty",className:"h-btn-s",children:["Meet Instructors ",c.jsx($r,{size:13})]})]}),c.jsxs("p",{className:"h-cta-note",children:[c.jsx(pu,{size:13,color:"#0e7490"})," No credit card required · Free courses available"]})]})})]})]})}const P4=[{name:"Home",icon:V0,href:"/"},{name:"Courses",icon:lt,href:"/courses"},{name:"About",icon:H0,href:"/about"},{name:"Faculty",icon:Ia,href:"/faculty"},{name:"Contact",icon:G0,href:"/contact"}],Q4=()=>{const{openSignUp:l}=o0(),{isSignedIn:s}=c0(),{getToken:u}=Yy(),[i,d]=S.useState(!1),[f,p]=S.useState(0),[g,v]=S.useState(!1),[b,k]=S.useState(!0);return S.useRef(null),s&&localStorage.getItem("token"),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --nav-bg: rgba(255, 255, 255, 0.72);
          --nav-border: rgba(14, 116, 144, 0.12);
          --nav-shadow: 0 4px 32px rgba(14, 116, 144, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
          --pill-bg: rgba(240, 249, 255, 0.8);
          --pill-border: rgba(14, 116, 144, 0.15);
          --active-bg: rgba(14, 116, 144, 0.1);
          --active-text: #0e7490;
          --inactive-text: #64748b;
          --hover-text: #0369a1;
          --accent: #0e7490;
          --accent-2: #0891b2;
        }

        .lms-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 10px 24px;
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: var(--nav-shadow);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s ease, box-shadow 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .lms-navbar.hidden  { transform: translateY(-100%); }

        .lms-navbar.scrolled {
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 8px 40px rgba(14, 116, 144, 0.12);
        }

        .lms-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%; max-width: 1400px;
          margin: 0 auto; position: relative;
        }

        /* ── LOGO ─────────────────────────────── */
        .lms-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0; z-index: 1;
        }

        /* Icon box replaces the missing image */
        .lms-logo-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.28);
          flex-shrink: 0;
        }

        .lms-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 600;
          background: linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.01em; line-height: 1;
        }

        .lms-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; font-weight: 300;
          color: #94a3b8; letter-spacing: 0.12em;
          text-transform: uppercase; margin-top: 2px;
          -webkit-text-fill-color: #94a3b8;
        }

        /* ── CENTER PILL ──────────────────────── */
        .lms-nav-pill {
          position: absolute; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 2px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 12px rgba(14,116,144,0.06), 0 0 0 1px rgba(255,255,255,0.8) inset;
        }

        .lms-nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 100px;
          text-decoration: none;
          font-size: 0.8rem; font-weight: 500;
          color: var(--inactive-text);
          letter-spacing: 0.01em;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap; position: relative;
        }

        .lms-nav-link:hover {
          color: var(--hover-text);
          background: rgba(14, 116, 144, 0.06);
        }

        .lms-nav-link.active {
          color: var(--active-text);
          background: var(--active-bg);
          font-weight: 500;
        }

        .lms-nav-link svg { flex-shrink: 0; opacity: 0.7; transition: opacity 0.2s ease; }
        .lms-nav-link:hover svg, .lms-nav-link.active svg { opacity: 1; }

        /* ── AUTH ─────────────────────────────── */
        .lms-auth { display: flex; align-items: center; flex-shrink: 0; z-index: 1; }

        .lms-signup-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.01em; cursor: pointer;
          border: 1.5px solid rgba(14, 116, 144, 0.3);
          color: var(--accent);
          background: rgba(240, 249, 255, 0.7);
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .lms-signup-btn:hover {
          background: var(--accent); color: #fff;
          border-color: var(--accent);
          box-shadow: 0 4px 18px rgba(14, 116, 144, 0.28);
          transform: translateY(-1px);
        }

        .lms-signup-btn:active { transform: translateY(0); }

        .lms-user-btn {
          display: flex; align-items: center;
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14, 116, 144, 0.2);
          transition: border-color 0.2s ease;
        }

        .lms-user-btn:hover { border-color: var(--accent); }
      `}),c.jsx("nav",{className:["lms-navbar",b?"":"hidden",g?"scrolled":""].filter(Boolean).join(" "),children:c.jsxs("div",{className:"lms-inner",children:[c.jsxs(bt,{to:"/",className:"lms-logo",children:[c.jsx("div",{className:"lms-logo-icon",children:c.jsx(va,{size:18,color:"#fff"})}),c.jsxs("div",{children:[c.jsx("div",{className:"lms-logo-text",children:"LMS"}),c.jsx("div",{className:"lms-logo-sub",children:"Learning Platform"})]})]}),c.jsx("div",{className:"lms-nav-pill",children:P4.map(y=>{const N=y.icon;return c.jsxs(bt,{to:y.href,className:({isActive:V})=>`lms-nav-link${V?" active":""}`,children:[c.jsx(N,{size:14}),c.jsx("span",{children:y.name})]},y.name)})}),c.jsx("div",{className:"lms-auth",children:s?c.jsx("div",{className:"lms-user-btn",children:c.jsx(S0,{afterSignOutUrl:"/"})}):c.jsx("button",{type:"button",onClick:()=>l({}),className:"lms-signup-btn",children:c.jsx("span",{children:"Create Account"})})})]})})]})},K4=[{name:"Twitter",Icon:F0,href:"#",color:"#1da1f2",bg:"rgba(29,161,242,0.12)"},{name:"Instagram",Icon:a4,href:"#",color:"#e1306c",bg:"rgba(225,48,108,0.12)"},{name:"LinkedIn",Icon:X0,href:"#",color:"#0a66c2",bg:"rgba(10,102,194,0.12)"},{name:"YouTube",Icon:R4,href:"#",color:"#ff0000",bg:"rgba(255,0,0,0.10)"}],Z4=[{heading:"Platform",icon:lt,links:[{label:"Browse Courses",to:"/courses"},{label:"Meet Faculty",to:"/faculty"},{label:"About Us",to:"/about"},{label:"Contact",to:"/contact"},{label:"Become Instructor",to:"/faculty"}]},{heading:"Community",icon:Ia,links:[{label:"Student Stories",to:"/about"},{label:"Events & Webinars",to:"/contact"},{label:"Blog & Articles",to:"/"},{label:"Career Resources",to:"/"},{label:"Referral Program",to:"/"}]},{heading:"Support",icon:W2,links:[{label:"Help Center",to:"/"},{label:"FAQs",to:"/"},{label:"Privacy Policy",to:"/"},{label:"Terms of Service",to:"/"},{label:"Cookie Settings",to:"/"}]}],F4=[{Icon:vs,value:"hello@learnhub.in",href:"mailto:hello@learnhub.in"},{Icon:Uu,value:"+91 82994 31275",href:"tel:+918299431275"},{Icon:P0,value:"Rajkot, Gujarat, India",href:null}],I4=[{value:"12K+",label:"Students"},{value:"240+",label:"Courses"},{value:"94%",label:"Success Rate"},{value:"58",label:"Countries"}],J4=()=>{const[l,s]=S.useState(""),[u,i]=S.useState("idle"),[d,f]=S.useState(""),p=g=>{if(g.preventDefault(),!l.trim()){f("Please enter your email.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){f("Please enter a valid email.");return}f(""),i("loading"),setTimeout(()=>{i("success"),s("")},1e3)};return c.jsxs("div",{className:"ft-newsletter",children:[c.jsxs("p",{className:"ft-newsletter-label",children:[c.jsx(Z0,{size:12})," Stay in the loop"]}),c.jsx("p",{className:"ft-newsletter-sub",children:"Get new course announcements, tips and career insights — no spam, ever."}),u==="success"?c.jsxs("div",{className:"ft-newsletter-success",children:[c.jsx(Ru,{size:14,fill:"#0e7490",color:"#0e7490"}),"You're subscribed! Thanks for joining."]}):c.jsxs("form",{onSubmit:p,noValidate:!0,className:"ft-newsletter-form",children:[c.jsxs("div",{className:"ft-newsletter-input-wrap",children:[c.jsx(vs,{size:13,className:"ft-newsletter-icon"}),c.jsx("input",{type:"email",value:l,onChange:g=>{s(g.target.value),f("")},placeholder:"your@email.com",className:"ft-newsletter-input","aria-label":"Email address",disabled:u==="loading"})]}),d&&c.jsx("p",{className:"ft-newsletter-error",children:d}),c.jsx("button",{type:"submit",className:"ft-newsletter-btn",disabled:u==="loading",children:u==="loading"?c.jsx("span",{className:"ft-spinner"}):c.jsxs(c.Fragment,{children:[c.jsx(pi,{size:14})," Subscribe"]})})]})]})},W4=()=>{const l=new Date().getFullYear();return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-mid:    #0891b2;
          --cyan-light:  #67e8f9;
          --cyan-dark:   #0a5c73;
          --slate:       #94a3b8;
          --slate-dim:   #64748b;
          --border:      rgba(255,255,255,0.07);
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
        }

        /* ── ROOT ──────────────────────────────────────── */
        .ft-root {
          background: #050f1a;
          font-family: var(--ff-body);
          position: relative;
          overflow: hidden;
        }

        /* ── BACKGROUND ────────────────────────────────── */
        .ft-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* FIX: Grid uses cyan palette — not purple/indigo */
        .ft-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14,116,144,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ft-bg-glow-1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,116,144,0.12) 0%, transparent 70%);
          top: -180px; left: -100px;
        }

        .ft-bg-glow-2 {
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%);
          bottom: 0; right: 0;
        }

        /* ── STATS BAND ────────────────────────────────── */
        .ft-stats-band {
          position: relative;
          z-index: 1;
          border-bottom: 1px solid var(--border);
        }

        .ft-stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .ft-stat-item {
          text-align: center;
          padding: 8px 0;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .ft-stat-item:last-child { border-right: none; }
        .ft-stat-item:hover { background: rgba(14,116,144,0.05); }

        .ft-stat-val {
          font-family: var(--ff-display);
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--cyan-light);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .ft-stat-lbl {
          font-size: 0.68rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        /* ── MAIN BODY ─────────────────────────────────── */
        .ft-body {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 40px;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 64px;
        }

        /* ── LEFT COLUMN ───────────────────────────────── */
        .ft-left {}

        .ft-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }

        .ft-brand-icon {
          width: 38px; height: 38px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(14,116,144,0.35);
        }

        .ft-brand-name {
          font-family: var(--ff-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .ft-brand-tagline {
          font-size: 0.6rem;
          font-weight: 300;
          color: var(--slate);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .ft-desc {
          font-size: 0.84rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }

        /* Contact items */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .ft-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-contact-item:hover { color: var(--cyan-light); }

        .ft-contact-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(14,116,144,0.12);
          border: 1px solid rgba(14,116,144,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        /* Social icons */
        /* FIX: bg color set via inline style from data — not raw Tailwind className */
        .ft-socials {
          display: flex;
          gap: 9px;
          margin-bottom: 32px;
        }

        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }

        .ft-social-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.18);
        }

        /* Tooltip */
        .ft-social-tooltip {
          position: absolute;
          bottom: calc(100% + 7px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.9);
          color: #0c1a2e;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 5px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease;
          font-family: var(--ff-body);
        }

        .ft-social-tooltip::after {
          content: '';
          position: absolute;
          top: 100%; left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: rgba(255,255,255,0.9);
        }

        .ft-social-btn:hover .ft-social-tooltip { opacity: 1; }

        /* Newsletter */
        .ft-newsletter {
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 12px;
          padding: 18px 16px;
        }

        .ft-newsletter-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cyan-mid);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          margin-bottom: 5px;
        }

        .ft-newsletter-sub {
          font-size: 0.76rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .ft-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft-newsletter-input-wrap {
          position: relative;
        }

        .ft-newsletter-icon {
          position: absolute;
          left: 11px; top: 50%;
          transform: translateY(-50%);
          color: var(--slate-dim);
          pointer-events: none;
        }

        .ft-newsletter-input {
          width: 100%;
          padding: 9px 12px 9px 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--white);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ft-newsletter-input::placeholder { color: var(--slate-dim); }
        .ft-newsletter-input:focus {
          border-color: rgba(14,116,144,0.5);
          background: rgba(255,255,255,0.08);
        }
        .ft-newsletter-input:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-error {
          font-size: 0.71rem;
          color: #f87171;
          font-weight: 300;
        }

        .ft-newsletter-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          color: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 3px 12px rgba(14,116,144,0.3);
        }
        .ft-newsletter-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,116,144,0.4);
        }
        .ft-newsletter-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-success {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          color: var(--cyan-light);
          font-weight: 400;
          padding: 8px 0;
        }

        .ft-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── RIGHT COLUMN — LINK GRID ──────────────────── */
        .ft-right {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .ft-link-group {}

        .ft-link-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .ft-link-heading-icon {
          width: 22px; height: 22px;
          background: rgba(14,116,144,0.15);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan-mid);
          flex-shrink: 0;
        }

        .ft-link-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
          list-style: none;
        }

        .ft-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s ease, gap 0.18s ease;
          line-height: 1;
        }

        .ft-link:hover {
          color: var(--cyan-light);
          gap: 10px;
        }

        .ft-link-arrow {
          opacity: 0;
          transition: opacity 0.18s ease;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        .ft-link:hover .ft-link-arrow { opacity: 1; }

        /* ── DIVIDER ───────────────────────────────────── */
        .ft-divider {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
        }

        /* ── BOTTOM BAR ────────────────────────────────── */
        .ft-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ft-copyright {
          font-size: 0.76rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .ft-copyright span {
          color: var(--cyan-mid);
          font-weight: 500;
        }

        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ft-bottom-link {
          font-size: 0.74rem;
          color: var(--slate-dim);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-bottom-link:hover { color: var(--cyan-light); }

        .ft-made-with {
          font-size: 0.72rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 1024px) {
          .ft-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ft-desc { max-width: 100%; }
          .ft-newsletter { max-width: 420px; }
        }

        @media (max-width: 640px) {
          .ft-right { grid-template-columns: 1fr 1fr; }
          .ft-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .ft-stat-item:nth-child(2) { border-right: none; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 400px) {
          .ft-right { grid-template-columns: 1fr; }
        }
      `}),c.jsxs("footer",{className:"ft-root",role:"contentinfo",children:[c.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[c.jsx("div",{className:"ft-bg-grid"}),c.jsx("div",{className:"ft-bg-glow-1"}),c.jsx("div",{className:"ft-bg-glow-2"})]}),c.jsx("div",{className:"ft-stats-band",children:c.jsx("div",{className:"ft-stats-inner",children:I4.map(({value:s,label:u})=>c.jsxs("div",{className:"ft-stat-item",children:[c.jsx("div",{className:"ft-stat-val",children:s}),c.jsx("div",{className:"ft-stat-lbl",children:u})]},u))})}),c.jsxs("div",{className:"ft-body",children:[c.jsxs("div",{className:"ft-left",children:[c.jsxs(bt,{to:"/",className:"ft-brand",children:[c.jsx("div",{className:"ft-brand-icon",children:c.jsx(va,{size:18,color:"#fff"})}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-brand-name",children:"LearnHub"}),c.jsx("div",{className:"ft-brand-tagline",children:"Learning Platform"})]})]}),c.jsx("p",{className:"ft-desc",children:"Empowering 12,000+ learners across 58 countries with expert-led courses in development, design, data & marketing."}),c.jsx("div",{className:"ft-contact-list",children:F4.map(({Icon:s,value:u,href:i})=>i?c.jsxs("a",{href:i,className:"ft-contact-item",children:[c.jsx("div",{className:"ft-contact-icon",children:c.jsx(s,{size:13})}),u]},u):c.jsxs("div",{className:"ft-contact-item",children:[c.jsx("div",{className:"ft-contact-icon",children:c.jsx(s,{size:13})}),u]},u))}),c.jsx("div",{className:"ft-socials",children:K4.map(({name:s,Icon:u,href:i,color:d,bg:f})=>c.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":s,className:"ft-social-btn",style:{background:f},children:[c.jsx(u,{size:15,color:d}),c.jsx("span",{className:"ft-social-tooltip",children:s})]},s))}),c.jsx(J4,{})]}),c.jsx("div",{className:"ft-right",children:Z4.map(({heading:s,icon:u,links:i})=>c.jsxs("div",{className:"ft-link-group",children:[c.jsxs("div",{className:"ft-link-heading",children:[c.jsx("div",{className:"ft-link-heading-icon",children:c.jsx(u,{size:12})}),s]}),c.jsx("ul",{className:"ft-link-list",children:i.map(({label:d,to:f})=>c.jsx("li",{children:c.jsxs(bt,{to:f,className:"ft-link",children:[c.jsx($r,{size:11,className:"ft-link-arrow"}),d]})},d))})]},s))})]}),c.jsx("div",{className:"ft-divider"}),c.jsxs("div",{className:"ft-bottom",children:[c.jsxs("p",{className:"ft-copyright",children:["© ",l," ",c.jsx("span",{children:"LearnHub"}),". All rights reserved."]}),c.jsx("nav",{className:"ft-bottom-links","aria-label":"Legal links",children:["Privacy Policy","Terms of Service","Cookie Policy","Sitemap"].map(s=>c.jsx(bt,{to:"/",className:"ft-bottom-link",children:s},s))}),c.jsxs("p",{className:"ft-made-with",children:["Made with ",c.jsx(Ru,{size:11,fill:"#0e7490",color:"#0e7490"})," in India"]})]})]})]})},Mm=[{id:"1",name:"React Masterclass",teacher:"Sophia Miller",image:"https://picsum.photos/seed/react/400/220",isFree:!1,price:{original:200,sale:99},category:"Development",level:"Intermediate",rating:0,students:4820,duration:42,trending:!0},{id:"2",name:"Web Development",teacher:"John Smith",image:"https://picsum.photos/seed/webdev/400/220",isFree:!0,price:null,category:"Development",level:"Beginner",rating:0,students:6100,duration:38,trending:!0},{id:"3",name:"Advanced JavaScript",teacher:"Sarah Johnson",image:"https://picsum.photos/seed/js/400/220",isFree:!1,price:{original:149,sale:79},category:"Development",level:"Advanced",rating:0,students:3750,duration:28,trending:!1},{id:"4",name:"UI/UX Design",teacher:"Mike Chen",image:"https://picsum.photos/seed/uiux/400/220",isFree:!0,price:null,category:"Design",level:"Beginner",rating:0,students:2310,duration:22,trending:!0},{id:"5",name:"Data Science",teacher:"Dr. Emily Wilson",image:"https://picsum.photos/seed/data/400/220",isFree:!1,price:{original:229,sale:129},category:"Data",level:"Advanced",rating:0,students:5420,duration:56,trending:!1},{id:"6",name:"Mobile App Development",teacher:"Alex Rodriguez",image:"https://picsum.photos/seed/mobile/400/220",isFree:!1,price:{original:169,sale:99},category:"Development",level:"Intermediate",rating:0,students:1980,duration:34,trending:!0},{id:"7",name:"Machine Learning Basics",teacher:"Dr. James Brown",image:"https://picsum.photos/seed/ml/400/220",isFree:!0,price:null,category:"Data",level:"Intermediate",rating:0,students:4100,duration:48,trending:!1},{id:"8",name:"Digital Marketing",teacher:"Lisa Wang",image:"https://picsum.photos/seed/mkt/400/220",isFree:!1,price:{original:139,sale:69},category:"Marketing",level:"Beginner",rating:0,students:2890,duration:18,trending:!0},{id:"9",name:"Cloud Computing & AWS",teacher:"Neha Gupta",image:"https://picsum.photos/seed/aws/400/220",isFree:!1,price:{original:299,sale:149},category:"Development",level:"Advanced",rating:0,students:3200,duration:50,trending:!1},{id:"10",name:"Python for Beginners",teacher:"Rohit Verma",image:"https://picsum.photos/seed/python/400/220",isFree:!0,price:null,category:"Data",level:"Beginner",rating:0,students:7800,duration:24,trending:!0},{id:"11",name:"Graphic Design Essentials",teacher:"Amit Joshi",image:"https://picsum.photos/seed/gfx/400/220",isFree:!1,price:{original:179,sale:89},category:"Design",level:"Beginner",rating:0,students:1560,duration:16,trending:!1},{id:"12",name:"Business Analytics",teacher:"Pooja Singh",image:"https://picsum.photos/seed/ba/400/220",isFree:!1,price:{original:199,sale:119},category:"Data",level:"Intermediate",rating:0,students:2640,duration:32,trending:!1}],$4=["All","Development","Design","Data","Marketing"],eS=["All Levels","Beginner","Intermediate","Advanced"],tS=["Popular","Newest","Price: Low to High","Price: High to Low","Free First"],ru=8,vu=l=>l.isFree||!l.price,di=l=>{if(vu(l))return{type:"free"};const{original:s,sale:u}=l.price;return u?{type:"sale",display:`₹${u}`,orig:`₹${s}`,pct:Math.round((s-u)/s*100)}:s?{type:"paid",display:`₹${s}`,orig:null,pct:null}:{type:"free"}},aS=l=>l>=1e3?`${(l/1e3).toFixed(1)}k`:String(l),nS=M.memo(({courseId:l,rating:s,hover:u,onRate:i,onHover:d,onLeave:f})=>c.jsx("div",{style:{display:"flex",gap:3},onClick:p=>p.stopPropagation(),children:[1,2,3,4,5].map(p=>c.jsx("button",{type:"button",className:"cdph-star-btn",onClick:g=>{g.stopPropagation(),i(l,p)},onMouseEnter:()=>d(l,p),onMouseLeave:()=>f(l),"aria-label":`Rate ${p}`,children:c.jsx(ga,{size:15,fill:(u||s)>=p?"#f59e0b":"none",color:(u||s)>=p?"#f59e0b":"#d1d5db"})},p))})),lS=M.memo(({course:l,index:s,userRating:u,hover:i,onRate:d,onHover:f,onLeave:p,onOpen:g})=>{const v=di(l);return c.jsxs("article",{className:"cdph-card",style:{animationDelay:`${Math.min(s,7)*60}ms`},onClick:()=>g(l.id),role:"button",tabIndex:0,onKeyDown:b=>{b.key==="Enter"&&g(l.id)},"aria-label":`Open ${l.name}`,children:[c.jsxs("div",{className:"cdph-thumb",children:[c.jsx("img",{src:l.image,alt:l.name,className:"cdph-thumb-img",loading:"lazy"}),c.jsxs("div",{className:"cdph-thumb-ov",children:[c.jsx(lt,{size:20,color:"#fff"}),c.jsx("span",{children:"View Course"})]}),c.jsxs("div",{className:"cdph-badges",children:[v.type==="free"&&c.jsxs("span",{className:"cdph-b cdph-b-free",children:[c.jsx(pu,{size:9})," Free"]}),v.pct&&c.jsxs("span",{className:"cdph-b cdph-b-sale",children:[c.jsx(k4,{size:9})," ",v.pct,"% off"]}),l.trending&&c.jsxs("span",{className:"cdph-b cdph-b-hot",children:[c.jsx(mu,{size:9})," Hot"]})]}),c.jsx("span",{className:"cdph-level",children:l.level})]}),c.jsxs("div",{className:"cdph-body",children:[c.jsx("h3",{className:"cdph-name",children:l.name}),c.jsxs("div",{className:"cdph-teacher",children:[c.jsx(I0,{size:13,color:"#94a3b8"}),c.jsx("span",{children:l.teacher})]}),c.jsxs("div",{className:"cdph-rating-row",children:[c.jsx(nS,{courseId:l.id,rating:u,hover:i,onRate:d,onHover:f,onLeave:p}),u>0&&c.jsxs("span",{className:"cdph-rating-val",children:[u,".0"]})]}),c.jsxs("div",{className:"cdph-meta",children:[c.jsxs("span",{className:"cdph-meta-item",children:[c.jsx(Za,{size:11}),l.duration,"h"]}),c.jsxs("span",{className:"cdph-meta-item",children:[c.jsx(Ia,{size:11}),aS(l.students)]})]}),c.jsx("div",{className:"cdph-price-row",children:v.type==="free"?c.jsx("span",{className:"cdph-price-free",children:"Free"}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"cdph-price-sale",children:v.display}),v.orig&&c.jsx("span",{className:"cdph-price-orig",children:v.orig})]})})]})]})});function iS(){const l=cs(),[s,u]=S.useState(()=>{try{const Z=localStorage.getItem("userCourseRatings");return Z?JSON.parse(Z):{}}catch{return{}}}),[i,d]=S.useState({}),[f,p]=S.useState(""),[g,v]=S.useState("All"),[b,k]=S.useState("All Levels"),[y,N]=S.useState("Popular"),[V,G]=S.useState(!1),[B,U]=S.useState(!1),T=!!localStorage.getItem("token"),[q,Y]=S.useState(null),W=S.useCallback(Z=>{Y(Z),setTimeout(()=>Y(null),3e3)},[]),X=S.useCallback(Z=>{if(!T){W("Please login to access this course");return}l(`/courses/${Z}`)},[T,l,W]),F=S.useCallback((Z,ve)=>{u(oe=>{const ye={...oe,[Z]:ve};try{localStorage.setItem("userCourseRatings",JSON.stringify(ye))}catch{}return ye})},[]),P=S.useCallback(()=>{p(""),v("All"),k("All Levels"),N("Popular"),G(!1)},[]),ie=M.useMemo(()=>{let Z=Mm.filter(ve=>{const oe=f.toLowerCase();return(!oe||ve.name.toLowerCase().includes(oe)||ve.teacher.toLowerCase().includes(oe))&&(g==="All"||ve.category===g)&&(b==="All Levels"||ve.level===b)});switch(y){case"Top Rated":Z=[...Z].sort((ve,oe)=>oe.rating-ve.rating);break;case"Popular":Z=[...Z].sort((ve,oe)=>oe.students-ve.students);break;case"Price: Low to High":Z=[...Z].sort((ve,oe)=>(di(ve).display?.replace("₹","")||0)-(di(oe).display?.replace("₹","")||0));break;case"Price: High to Low":Z=[...Z].sort((ve,oe)=>(di(oe).display?.replace("₹","")||0)-(di(ve).display?.replace("₹","")||0));break;case"Free First":Z=[...Z].sort((ve,oe)=>(vu(oe)?1:0)-(vu(ve)?1:0));break}return Z},[f,g,b,y]),re=V?ie:ie.slice(0,ru),Ce=Math.max(0,ie.length-ru),Te=g!=="All"||b!=="All Levels"||f||y!=="Popular";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:      #0e7490;
          --cyan-dk:   #0a5c73;
          --teal:      #0f766e;
          --amber:     #f59e0b;
          --green:     #16a34a;
          --slate:     #475569;
          --slate-lt:  #94a3b8;
          --border:    rgba(14,116,144,0.13);
          --bg:        #f8fafc;
          --white:     #ffffff;
          --dark:      #0c1a2e;
          --ff-d:      'Cormorant Garamond', Georgia, serif;
          --ff-b:      'DM Sans', sans-serif;
          --sh:        0 2px 12px rgba(0,0,0,0.06);
          --sh-hover:  0 8px 32px rgba(0,0,0,0.12);
        }

        .cdph-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-b);
          padding: 88px 24px 72px;
        }

        /* ── TOAST ──────────────────────────────────── */
        .cdph-toast {
          position: fixed; top: 76px; right: 20px; z-index: 9999;
          padding: 12px 20px; border-radius: 10px;
          background: #ef4444; color: #fff;
          font-size: .83rem; font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          animation: cdToast .3s ease;
          font-family: var(--ff-b);
        }

        @keyframes cdToast {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── PAGE HEADER ────────────────────────────── */
        .cdph-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 36px;
          animation: cdFadeUp .5s ease both;
        }

        .cdph-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: .7rem; font-weight: 500; color: var(--cyan);
          letter-spacing: .09em; text-transform: uppercase; margin-bottom: 14px;
        }

        .cdph-title {
          font-family: var(--ff-d);
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700; color: var(--dark);
          line-height: 1.08; letter-spacing: -.02em; margin-bottom: 10px;
        }

        .cdph-title span {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cdph-sub {
          font-size: .91rem; color: var(--slate);
          font-weight: 300; line-height: 1.65;
        }

        /* ── CONTROLS ───────────────────────────────── */
        .cdph-controls {
          max-width: 1200px; margin: 0 auto 28px;
          display: flex; flex-direction: column; gap: 12px;
          animation: cdFadeUp .5s .08s ease both;
        }

        .cdph-search-row {
          display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
        }

        .cdph-sw {
          position: relative; flex: 1; min-width: 200px;
        }

        .cdph-si {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: var(--slate-lt); pointer-events: none;
        }

        .cdph-search {
          width: 100%; padding: 11px 38px 11px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px; background: var(--white);
          font-family: var(--ff-b); font-size: .875rem;
          font-weight: 300; color: var(--dark); outline: none;
          transition: border-color .2s, box-shadow .2s;
          box-shadow: var(--sh);
        }
        .cdph-search::placeholder { color: #cbd5e1; }
        .cdph-search:focus { border-color: var(--cyan); box-shadow: 0 0 0 3px rgba(14,116,144,.1); }

        .cdph-sclear {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: var(--slate-lt); display: flex; align-items: center;
          transition: color .15s;
        }
        .cdph-sclear:hover { color: #ef4444; }

        .cdph-sort {
          padding: 11px 32px 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px; background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; color: var(--slate);
          cursor: pointer; outline: none; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 12px center;
          min-width: 175px; box-shadow: var(--sh);
          transition: border-color .2s;
        }
        .cdph-sort:focus { border-color: var(--cyan); }

        .cdph-filt-btn {
          display: flex; align-items: center; gap: 7px;
          padding: 11px 18px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; font-weight: 500;
          color: var(--slate); cursor: pointer; white-space: nowrap;
          transition: all .2s; box-shadow: var(--sh);
        }
        .cdph-filt-btn:hover, .cdph-filt-btn.open { border-color: var(--cyan); color: var(--cyan); }

        /* Filter panel */
        .cdph-fpanel {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 22px;
          display: flex; flex-wrap: wrap; gap: 22px;
          box-shadow: var(--sh);
          animation: cdSlide .22s ease;
        }

        @keyframes cdSlide { from{opacity:0;transform:translateY(-7px)} to{opacity:1;transform:translateY(0)} }

        .cdph-fg { flex: 1; min-width: 180px; }

        .cdph-flbl {
          font-size: .67rem; font-weight: 500; color: var(--slate-lt);
          letter-spacing: .09em; text-transform: uppercase; margin-bottom: 9px;
        }

        .cdph-fps { display: flex; flex-wrap: wrap; gap: 6px; }

        .cdph-fp {
          padding: 5px 13px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--bg);
          font-family: var(--ff-b); font-size: .76rem; color: var(--slate);
          cursor: pointer; transition: all .17s;
        }
        .cdph-fp:hover  { border-color: var(--cyan); color: var(--cyan); }
        .cdph-fp.active { background: var(--cyan); border-color: var(--cyan); color: #fff; font-weight: 500; }

        /* Active filter bar */
        .cdph-fbar {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }

        .cdph-ftag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 11px;
          background: rgba(14,116,144,.08);
          border: 1px solid rgba(14,116,144,.18);
          border-radius: 100px;
          font-size: .71rem; color: var(--cyan); font-weight: 500;
        }

        .cdph-clr {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 11px; background: none;
          border: 1px solid rgba(239,68,68,.25);
          border-radius: 100px; font-family: var(--ff-b);
          font-size: .71rem; color: #ef4444; cursor: pointer;
          transition: background .17s;
        }
        .cdph-clr:hover { background: rgba(239,68,68,.06); }

        .cdph-rcount { margin-left: auto; font-size: .77rem; color: var(--slate-lt); font-weight: 300; }

        /* ── CATEGORY TABS ──────────────────────────── */
        .cdph-tabs {
          display: flex; align-items: center; justify-content: center;
          gap: 7px; flex-wrap: wrap; margin-bottom: 28px;
          animation: cdFadeUp .5s .12s ease both;
        }

        .cdph-tab {
          padding: 8px 20px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .8rem; font-weight: 400;
          color: var(--slate); cursor: pointer; transition: all .2s;
          box-shadow: var(--sh);
        }
        .cdph-tab:hover  { border-color: var(--cyan); color: var(--cyan); }
        .cdph-tab.active {
          background: var(--cyan); border-color: var(--cyan);
          color: #fff; font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,.28);
        }

        /* ── GRID ───────────────────────────────────── */
        .cdph-wrap { max-width: 1200px; margin: 0 auto; }

        .cdph-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 22px; margin-bottom: 36px;
        }

        /* ── COURSE CARD — screenshot style ─────────── */
        .cdph-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--sh);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform .28s cubic-bezier(.4,0,.2,1),
                      box-shadow .28s ease;
          opacity: 0;
          animation: cdCardIn .42s ease forwards;
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .cdph-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--sh-hover);
        }

        .cdph-card:focus-visible { outline: 2px solid var(--cyan); outline-offset: 2px; }

        @keyframes cdCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Thumbnail */
        .cdph-thumb {
          position: relative; width: 100%; height: 175px;
          overflow: hidden; background: #e2e8f0; flex-shrink: 0;
        }

        .cdph-thumb-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .4s ease;
        }
        .cdph-card:hover .cdph-thumb-img { transform: scale(1.05); }

        .cdph-thumb-ov {
          position: absolute; inset: 0;
          background: rgba(10,92,115,.78);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
          opacity: 0; transition: opacity .22s ease; backdrop-filter: blur(2px);
        }
        .cdph-thumb-ov span { font-size: .74rem; font-weight: 500; color: rgba(255,255,255,.9); }
        .cdph-card:hover .cdph-thumb-ov { opacity: 1; }

        .cdph-badges { position: absolute; top: 9px; left: 9px; display: flex; gap: 4px; }

        .cdph-b {
          display: inline-flex; align-items: center; gap: 3px;
          padding: 3px 8px; border-radius: 100px;
          font-size: .6rem; font-weight: 700;
          letter-spacing: .04em; text-transform: uppercase;
        }
        .cdph-b-free { background: var(--teal); color: #fff; }
        .cdph-b-sale { background: #0f172a; color: var(--amber); }
        .cdph-b-hot  { background: rgba(239,68,68,.85); color: #fff; }

        .cdph-level {
          position: absolute; top: 9px; right: 9px;
          padding: 3px 9px; border-radius: 100px;
          font-size: .59rem; font-weight: 500;
          background: rgba(255,255,255,.92); color: var(--slate);
          backdrop-filter: blur(4px);
        }

        /* Card body */
        .cdph-body {
          padding: 18px 18px 16px;
          display: flex; flex-direction: column; gap: 10px;
          flex: 1;
        }

        /* Course name — Cormorant Garamond like screenshot headings */
        .cdph-name {
          font-family: var(--ff-d);
          font-size: 1.15rem; font-weight: 700;
          color: var(--dark); line-height: 1.2;
          letter-spacing: -.01em;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        /* Teacher row */
        .cdph-teacher {
          display: flex; align-items: center; gap: 6px;
          font-size: .78rem; color: var(--slate-lt); font-weight: 300;
        }

        /* Stars */
        .cdph-rating-row {
          display: flex; align-items: center; gap: 8px;
        }

        .cdph-star-btn {
          background: none; border: none; cursor: pointer; padding: 1px;
          line-height: 0; transition: transform .14s ease;
        }
        .cdph-star-btn:hover { transform: scale(1.3); }

        .cdph-rating-val {
          font-size: .76rem; font-weight: 600; color: #92400e;
        }

        /* Meta */
        .cdph-meta {
          display: flex; align-items: center; gap: 12px;
        }

        .cdph-meta-item {
          display: flex; align-items: center; gap: 3px;
          font-size: .7rem; color: var(--slate-lt); font-weight: 300;
        }

        /* Price row — exactly matches screenshot */
        .cdph-price-row {
          display: flex; align-items: baseline; gap: 8px;
          margin-top: auto; padding-top: 6px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        /* Green bold sale price */
        .cdph-price-sale {
          font-size: 1.15rem; font-weight: 700;
          color: var(--green);
        }

        /* Strikethrough original */
        .cdph-price-orig {
          font-size: .88rem; color: #9ca3af;
          text-decoration: line-through; font-weight: 400;
        }

        /* Free — green bold */
        .cdph-price-free {
          font-size: 1.15rem; font-weight: 700;
          color: var(--green);
        }

        /* ── EMPTY STATE ────────────────────────────── */
        .cdph-empty {
          grid-column: 1 / -1;
          display: flex; flex-direction: column;
          align-items: center; padding: 72px 24px; gap: 12px; text-align: center;
        }

        .cdph-empty-ico {
          width: 62px; height: 62px; border-radius: 50%;
          background: rgba(14,116,144,.07);
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-lt);
        }

        .cdph-empty-title { font-family: var(--ff-d); font-size: 1.4rem; font-weight: 600; color: var(--dark); }
        .cdph-empty-sub   { font-size: .85rem; color: var(--slate-lt); font-weight: 300; max-width: 280px; line-height: 1.6; }

        .cdph-empty-btn {
          padding: 10px 24px; border-radius: 100px;
          background: var(--cyan); color: #fff; border: none;
          font-family: var(--ff-b); font-size: .85rem; font-weight: 500;
          cursor: pointer; transition: all .2s;
        }
        .cdph-empty-btn:hover { background: var(--cyan-dk); transform: translateY(-1px); }

        /* ── SHOW MORE ──────────────────────────────── */
        .cdph-more {
          display: flex; align-items: center; justify-content: center; gap: 14px;
        }

        .cdph-more-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 12px 28px; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--white);
          font-family: var(--ff-b); font-size: .85rem; font-weight: 500;
          color: var(--cyan); cursor: pointer; transition: all .22s;
          box-shadow: var(--sh);
        }
        .cdph-more-btn:hover {
          border-color: var(--cyan); background: rgba(14,116,144,.05);
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(14,116,144,.12);
        }

        .cdph-more-note { font-size: .77rem; color: var(--slate-lt); font-weight: 300; }

        /* ── ANIMATIONS ─────────────────────────────── */
        @keyframes cdFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ─────────────────────────────── */
        @media(max-width: 640px) {
          .cdph-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .cdph-search-row { flex-direction: column; }
          .cdph-sort { width: 100%; }
          .cdph-filt-btn { width: 100%; justify-content: center; }
        }

        @media(max-width: 400px) {
          .cdph-grid { grid-template-columns: 1fr; }
        }
      `}),q&&c.jsx("div",{className:"cdph-toast",role:"alert",children:q}),c.jsxs("div",{className:"cdph-page",children:[c.jsxs("div",{className:"cdph-header",children:[c.jsxs("div",{className:"cdph-badge",children:[c.jsx(xi,{size:11})," Explore Courses"]}),c.jsxs("h1",{className:"cdph-title",children:["Find Your Next ",c.jsx("span",{children:"Skill"})]}),c.jsxs("p",{className:"cdph-sub",children:[Mm.length," expert-led courses across development, design, data & marketing."]})]}),c.jsx("div",{className:"cdph-tabs",children:$4.map(Z=>c.jsx("button",{type:"button",className:`cdph-tab${g===Z?" active":""}`,onClick:()=>{v(Z),G(!1)},children:Z},Z))}),c.jsxs("div",{className:"cdph-controls",children:[c.jsxs("div",{className:"cdph-search-row",children:[c.jsxs("div",{className:"cdph-sw",children:[c.jsx(ls,{size:15,className:"cdph-si"}),c.jsx("input",{type:"search",className:"cdph-search",placeholder:"Search courses or instructors…",value:f,onChange:Z=>{p(Z.target.value),G(!1)}}),f&&c.jsx("button",{className:"cdph-sclear",onClick:()=>p(""),children:c.jsx(is,{size:13})})]}),c.jsx("select",{className:"cdph-sort",value:y,onChange:Z=>{N(Z.target.value),G(!1)},children:tS.map(Z=>c.jsx("option",{children:Z},Z))}),c.jsxs("button",{type:"button",className:`cdph-filt-btn${B?" open":""}`,onClick:()=>U(Z=>!Z),children:[c.jsx(y4,{size:14}),"Filters",B?c.jsx(ns,{size:13}):c.jsx(vi,{size:13})]})]}),B&&c.jsxs("div",{className:"cdph-fpanel",children:[c.jsxs("div",{className:"cdph-fg",children:[c.jsx("div",{className:"cdph-flbl",children:"Level"}),c.jsx("div",{className:"cdph-fps",children:eS.map(Z=>c.jsx("button",{type:"button",className:`cdph-fp${b===Z?" active":""}`,onClick:()=>{k(Z),G(!1)},children:Z},Z))})]}),c.jsxs("div",{className:"cdph-fg",children:[c.jsx("div",{className:"cdph-flbl",children:"Price"}),c.jsx("div",{className:"cdph-fps",children:["All","Free","Paid"].map(Z=>c.jsx("button",{type:"button",className:"cdph-fp",children:Z},Z))})]})]}),Te&&c.jsxs("div",{className:"cdph-fbar",children:[f&&c.jsxs("span",{className:"cdph-ftag",children:[c.jsx(ls,{size:10}),' "',f,'"']}),g!=="All"&&c.jsx("span",{className:"cdph-ftag",children:g}),b!=="All Levels"&&c.jsx("span",{className:"cdph-ftag",children:b}),y!=="Popular"&&c.jsxs("span",{className:"cdph-ftag",children:[c.jsx(xi,{size:10})," ",y]}),c.jsxs("button",{type:"button",className:"cdph-clr",onClick:P,children:[c.jsx(is,{size:10})," Clear all"]}),c.jsxs("span",{className:"cdph-rcount",children:[ie.length," result",ie.length!==1?"s":""]})]})]}),c.jsxs("div",{className:"cdph-wrap",children:[c.jsx("div",{className:"cdph-grid",children:ie.length===0?c.jsxs("div",{className:"cdph-empty",children:[c.jsx("div",{className:"cdph-empty-ico",children:c.jsx(lt,{size:28})}),c.jsx("div",{className:"cdph-empty-title",children:"No courses found"}),c.jsx("div",{className:"cdph-empty-sub",children:"Try adjusting filters to discover more courses."}),c.jsx("button",{type:"button",className:"cdph-empty-btn",onClick:P,children:"Show All Courses"})]}):re.map((Z,ve)=>c.jsx(lS,{course:Z,index:ve,userRating:s[Z.id]||0,hover:i[Z.id]||0,onRate:F,onHover:(oe,ye)=>d(R=>({...R,[oe]:ye})),onLeave:oe=>d(ye=>({...ye,[oe]:0})),onOpen:X},Z.id))}),ie.length>ru&&c.jsxs("div",{className:"cdph-more",children:[c.jsx("button",{type:"button",className:"cdph-more-btn",onClick:()=>G(Z=>!Z),children:V?c.jsxs(c.Fragment,{children:[c.jsx(ns,{size:15})," Show Less"]}):c.jsxs(c.Fragment,{children:[c.jsx(vi,{size:15})," Show ",Ce," More"]})}),!V&&c.jsxs("span",{className:"cdph-more-note",children:["Showing ",re.length," of ",ie.length]})]})]})]})]})}const rS=[{id:1,name:"Full Stack Web Development",description:"Master modern web development from frontend to backend with real-world projects and industry best practices.",teacher:"Arjun Mehta",teacherBio:"10+ years at Google & Stripe. Shipped products used by millions.",image:"https://picsum.photos/seed/webdev/1200/400",isFree:!1,price:{original:2999,sale:1499},totalStudents:4820,rating:4.8,category:"Development",level:"Intermediate",lectures:[{id:"l1",title:"HTML & CSS Foundations",durationMin:95,chapters:[{id:"c1",name:"Semantic HTML",topic:"Structure & accessibility",durationMin:18,videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{id:"c2",name:"CSS Flexbox",topic:"Layouts made easy",durationMin:22,videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{id:"c3",name:"CSS Grid",topic:"Two-dimensional layouts",durationMin:25,videoUrl:""},{id:"c4",name:"Responsive Design",topic:"Media queries & breakpoints",durationMin:30,videoUrl:""}]},{id:"l2",title:"JavaScript Essentials",durationMin:140,chapters:[{id:"c5",name:"ES6+ Features",topic:"Arrow fns, destructuring, async",durationMin:35,videoUrl:""},{id:"c6",name:"DOM Manipulation",topic:"Events & dynamic UI",durationMin:28,videoUrl:""},{id:"c7",name:"Fetch API & Promises",topic:"Async data fetching",durationMin:40,videoUrl:""},{id:"c8",name:"Error Handling",topic:"Try/catch & best practices",durationMin:37,videoUrl:""}]},{id:"l3",title:"React Deep Dive",durationMin:180,chapters:[{id:"c9",name:"Components & Props",topic:"Reusable building blocks",durationMin:32,videoUrl:""},{id:"c10",name:"State & Hooks",topic:"useState, useEffect, useRef",durationMin:45,videoUrl:""},{id:"c11",name:"Context & Reducers",topic:"Global state management",durationMin:50,videoUrl:""},{id:"c12",name:"React Router v6",topic:"SPA navigation",durationMin:53,videoUrl:""}]}]},{id:2,name:"UI/UX Design Mastery",description:"Learn the full design process from research to high-fidelity prototypes using Figma.",teacher:"Priya Sharma",teacherBio:"Senior Product Designer at Figma. Design mentor for 500+ students.",image:"https://picsum.photos/seed/uiux/1200/400",isFree:!0,price:null,totalStudents:2310,rating:4.9,category:"Design",level:"Beginner",lectures:[{id:"l4",title:"Design Fundamentals",durationMin:80,chapters:[{id:"c13",name:"Visual Hierarchy",topic:"Size, contrast, spacing",durationMin:20,videoUrl:""},{id:"c14",name:"Color Theory",topic:"Palettes & emotion",durationMin:25,videoUrl:""},{id:"c15",name:"Typography",topic:"Font pairing & readability",durationMin:35,videoUrl:""}]}]}],si=l=>{if(!l&&l!==0)return"--";const s=Math.floor(l/60),u=l%60;return s>0?`${s}h ${u}m`:`${u}m`},su=l=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(l),sS=l=>{if(!l)return"";try{const s=String(l).trim();if(/\/embed\//.test(s))return s;const u=s.match(/[?&]v=([^&#]+)/);if(u?.[1])return`https://www.youtube.com/embed/${u[1]}`;const i=s.match(/youtu\.be\/([^?&#/]+)/);if(i?.[1])return`https://www.youtube.com/embed/${i[1]}`;if(/drive\.google\.com/.test(s)){const f=s.match(/\/file\/d\/([^/]+)/);if(f?.[1])return`https://drive.google.com/file/d/${f[1]}/preview`;const p=s.match(/[?&]id=([^&#]+)/);return p?.[1]?`https://drive.google.com/file/d/${p[1]}/preview`:s}const d=s.split("/").filter(Boolean).pop();return d?.length===11&&/^[a-zA-Z0-9_-]+$/.test(d)?`https://www.youtube.com/embed/${d}`:s}catch{return l}},oS=(l,s)=>{if(!s||!l)return l;const u=l.includes("?")?"&":"?";return`${l}${u}autoplay=1`},cS=l=>!!(l&&/\.(mp4|webm|ogg)(\?.*)?$/i.test(l)),uS=({toast:l,onDismiss:s})=>l?c.jsx("div",{onClick:s,style:{position:"fixed",top:80,right:20,zIndex:9999,padding:"12px 20px",borderRadius:"10px",background:l.type==="error"?"#ef4444":"#0e7490",color:"#fff",fontSize:"0.85rem",fontWeight:500,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",cursor:"pointer",animation:"slideInRight 0.3s ease",maxWidth:320},children:l.message}):null,dS=()=>{const{id:l}=mv(),s=cs(),u=parseInt(l,10),i=!!localStorage.getItem("token"),[d,f]=S.useState(!1),[p,g]=S.useState(!1),[v,b]=S.useState(null),[k,y]=S.useState(new Set),[N,V]=S.useState(new Set),[G,B]=S.useState({type:null,lectureId:null,chapterId:null}),U=rS.find($=>$.id===u);if(!U)return c.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"DM Sans, sans-serif",gap:16},children:[c.jsx(lt,{size:40,color:"#94a3b8"}),c.jsx("p",{style:{color:"#475569",fontSize:"1rem"},children:"Course not found."}),c.jsx("button",{onClick:()=>s("/courses"),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer",fontSize:"0.85rem"},children:"Back to Courses"})]});const T=U.isFree||!U.price,q=U.price?.original??null,Y=U.price?.sale??null,W=q!=null&&Y!=null&&Y<q,X=S.useMemo(()=>(U.lectures||[]).flatMap($=>$.chapters||[]),[U]),F=S.useMemo(()=>X.reduce(($,fe)=>$+(fe.durationMin||0),0),[X]),P=X.length,ie=P>0?Math.round(N.size/P*100):0,re=S.useMemo(()=>(U.lectures||[]).find($=>$.id===G.lectureId),[U.lectures,G.lectureId]),Ce=S.useMemo(()=>G.lectureId?G.chapterId?re?.chapters?.find($=>$.id===G.chapterId)??null:re??null:null,[G,re]),Te=Ce?.videoUrl||null,Z=Te?sS(Te):null,ve=cS(Z),oe=S.useCallback(($,fe="error")=>{b({message:$,type:fe}),setTimeout(()=>b(null),3500)},[]),ye=S.useCallback($=>{if(!i){oe("Please login to access course content");return}if(!T&&!d){oe("Please enroll to access content");return}y(fe=>{const w=new Set(fe);return w.has($)?w.delete($):w.add($),w})},[i,T,d,oe]),R=S.useCallback(($,fe=null)=>{if(!i){oe("Please login to access course content");return}if(!T&&!d){oe("Please enroll to access this content");return}B({type:fe?"chapter":"lecture",lectureId:$,chapterId:fe}),y(w=>{const D=new Set(w);return D.add($),D})},[i,T,d,oe]),Q=S.useCallback($=>{V(fe=>{const w=new Set(fe);return w.has($)?w.delete($):w.add($),w})},[]),ne=S.useCallback(async()=>{if(!i){oe("Please login to enroll");return}g(!0),await new Promise($=>setTimeout($,1200)),f(!0),g(!1),oe("Successfully enrolled! Start learning.","success")},[i,oe]);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-mid:    #0891b2;
          --teal:        #0f766e;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.13);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 2px 16px rgba(14,116,144,0.07);
          --shadow-md:   0 6px 28px rgba(14,116,144,0.11);
          --shadow-lg:   0 12px 40px rgba(14,116,144,0.15);
        }

        .cd-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding-bottom: 64px;
        }

        /* ── HERO BANNER ──────────────────────────────── */
        .cd-hero {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: var(--cyan-dark);
        }

        .cd-hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }

        .cd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(10,92,115,0.95) 40%, rgba(10,92,115,0.6) 100%);
          display: flex;
          align-items: flex-end;
          padding: 28px 32px;
        }

        .cd-hero-content { max-width: 680px; }

        .cd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          color: rgba(255,255,255,0.85);
          font-size: 0.75rem;
          font-weight: 400;
          cursor: pointer;
          font-family: var(--ff-body);
          margin-bottom: 12px;
          transition: background 0.2s;
        }
        .cd-back-btn:hover { background: rgba(255,255,255,0.2); }

        .cd-hero-category {
          font-size: 0.68rem;
          font-weight: 500;
          color: #67e8f9;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .cd-hero-title {
          font-family: var(--ff-display);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .cd-hero-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cd-hero-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: rgba(255,255,255,0.75);
          font-weight: 300;
        }

        /* ── MAIN LAYOUT ──────────────────────────────── */
        .cd-main {
          max-width: 1280px;
          margin: 28px auto 0;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .cd-main { grid-template-columns: 1fr; }
          .cd-sidebar { order: -1; }
        }

        /* ── VIDEO SECTION ────────────────────────────── */
        .cd-video-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow);
          margin-bottom: 20px;
        }

        .cd-video-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 */
          background: #0c1a2e;
        }

        .cd-video-frame iframe,
        .cd-video-frame video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .cd-video-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #0c1a2e 0%, #0a3d52 100%);
        }

        .cd-play-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(14,116,144,0.2);
          border: 2px solid rgba(14,116,144,0.4);
          display: flex; align-items: center; justify-content: center;
          animation: pulse 2.2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14,116,144,0.3); }
          50%       { box-shadow: 0 0 0 16px rgba(14,116,144,0); }
        }

        .cd-video-placeholder p {
          color: rgba(255,255,255,0.55);
          font-size: 0.85rem;
          font-weight: 300;
        }

        .cd-video-placeholder .cd-lock-note {
          color: rgba(255,255,255,0.35);
          font-size: 0.75rem;
          display: flex; align-items: center; gap: 5px;
        }

        /* Video info below player */
        .cd-video-info {
          padding: 20px 24px;
          border-top: 1px solid var(--border);
        }

        .cd-video-title {
          font-family: var(--ff-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: #0c1a2e;
          margin-bottom: 5px;
          letter-spacing: -0.01em;
        }

        .cd-video-desc {
          font-size: 0.82rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .cd-video-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cd-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1px solid rgba(14,116,144,0.15);
        }

        /* Completion button */
        .cd-complete-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: 14px;
          transition: all 0.22s ease;
        }

        .cd-complete-btn.done {
          background: rgba(15,118,110,0.1);
          color: var(--teal);
          border: 1.5px solid rgba(15,118,110,0.25);
        }

        .cd-complete-btn.undone {
          background: rgba(14,116,144,0.07);
          color: var(--cyan);
          border: 1.5px solid rgba(14,116,144,0.2);
        }

        .cd-complete-btn:hover { filter: brightness(0.94); }

        /* ── SIDEBAR ──────────────────────────────────── */
        .cd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cd-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .cd-card-header {
          padding: 18px 20px 14px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cd-card-title {
          font-family: var(--ff-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #0c1a2e;
          letter-spacing: -0.01em;
        }

        .cd-free-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          background: rgba(15,118,110,0.1);
          border: 1px solid rgba(15,118,110,0.2);
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--teal);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        /* ── LECTURE LIST ─────────────────────────────── */
        .cd-lecture-list { padding: 8px 0; }

        .cd-lecture-item {
          border-bottom: 1px solid rgba(14,116,144,0.06);
        }
        .cd-lecture-item:last-child { border-bottom: none; }

        .cd-lecture-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px;
          cursor: pointer;
          transition: background 0.18s ease;
          gap: 10px;
          user-select: none;
        }

        .cd-lecture-header:hover { background: rgba(14,116,144,0.04); }
        .cd-lecture-header.expanded { background: rgba(14,116,144,0.05); }

        .cd-lecture-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          min-width: 0;
        }

        .cd-chevron {
          flex-shrink: 0;
          color: var(--slate-light);
          transition: transform 0.22s ease;
        }
        .cd-chevron.open { transform: rotate(180deg); }

        .cd-lecture-title {
          font-size: 0.85rem;
          font-weight: 500;
          color: #0c1a2e;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cd-lecture-sub {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          color: var(--slate-light);
          margin-top: 2px;
        }

        .cd-lecture-lock {
          flex-shrink: 0;
          color: var(--slate-light);
        }

        /* ── CHAPTER LIST ─────────────────────────────── */
        .cd-chapter-list {
          background: rgba(14,116,144,0.02);
          border-top: 1px solid rgba(14,116,144,0.07);
        }

        .cd-chapter-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px 10px 22px;
          cursor: pointer;
          border-bottom: 1px solid rgba(14,116,144,0.05);
          transition: background 0.15s ease;
          gap: 10px;
        }
        .cd-chapter-item:last-child { border-bottom: none; }
        .cd-chapter-item:hover { background: rgba(14,116,144,0.05); }
        .cd-chapter-item.selected { background: rgba(14,116,144,0.09); }
        .cd-chapter-item.disabled { opacity: 0.45; cursor: not-allowed; }

        .cd-chapter-left {
          display: flex;
          align-items: center;
          gap: 9px;
          flex: 1;
          min-width: 0;
        }

        .cd-toggle-btn {
          flex-shrink: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          color: var(--slate-light);
          transition: color 0.15s ease;
          line-height: 0;
        }
        .cd-toggle-btn.done { color: var(--teal); }
        .cd-toggle-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        .cd-chapter-name {
          font-size: 0.8rem;
          font-weight: 400;
          color: #334155;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cd-chapter-name.selected { color: var(--cyan); font-weight: 500; }

        .cd-chapter-topic {
          font-size: 0.68rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cd-chapter-dur {
          flex-shrink: 0;
          font-size: 0.69rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── PRICING CARD ─────────────────────────────── */
        .cd-pricing-body { padding: 18px 20px 20px; }

        .cd-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 6px;
        }

        .cd-price-main {
          font-family: var(--ff-display);
          font-size: 2rem;
          font-weight: 700;
          color: #0c1a2e;
          letter-spacing: -0.02em;
        }
        .cd-price-main.free { color: var(--teal); }

        .cd-price-original {
          font-size: 0.9rem;
          color: var(--slate-light);
          text-decoration: line-through;
        }

        .cd-discount-pill {
          padding: 3px 10px;
          background: rgba(245,158,11,0.12);
          border: 1px solid rgba(245,158,11,0.25);
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #b45309;
        }

        .cd-price-note {
          font-size: 0.76rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 18px;
        }

        .cd-enroll-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.22s ease;
          letter-spacing: 0.01em;
        }

        .cd-enroll-btn.paid {
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          color: #fff;
          box-shadow: 0 4px 18px rgba(14,116,144,0.3);
        }
        .cd-enroll-btn.paid:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,116,144,0.4);
        }

        .cd-enroll-btn.free-access {
          background: rgba(15,118,110,0.1);
          color: var(--teal);
          border: 1.5px solid rgba(15,118,110,0.25);
        }

        .cd-enroll-btn.enrolled {
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1.5px solid rgba(14,116,144,0.2);
        }

        .cd-enroll-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .cd-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── PROGRESS CARD ────────────────────────────── */
        .cd-progress-body { padding: 16px 20px 20px; }

        .cd-progress-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cd-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          margin-bottom: 7px;
        }

        .cd-progress-label span:first-child { color: var(--slate); font-weight: 300; }
        .cd-progress-label span:last-child  { color: var(--cyan); font-weight: 600; }

        .cd-progress-track {
          width: 100%;
          height: 6px;
          background: rgba(14,116,144,0.1);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .cd-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0e7490, #06b6d4);
          border-radius: 100px;
          transition: width 0.5s ease;
        }

        .cd-progress-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .cd-progress-stat {
          background: rgba(14,116,144,0.05);
          border-radius: 10px;
          padding: 12px;
          text-align: center;
        }

        .cd-stat-val {
          font-family: var(--ff-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--cyan);
          margin-bottom: 3px;
        }

        .cd-stat-lbl {
          font-size: 0.67rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 400;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cd-animate { animation: fadeUp 0.45s ease both; }
        .cd-delay-1 { animation-delay: 0.08s; }
        .cd-delay-2 { animation-delay: 0.16s; }
        .cd-delay-3 { animation-delay: 0.24s; }
      `}),c.jsx(uS,{toast:v,onDismiss:()=>b(null)}),c.jsxs("div",{className:"cd-page",children:[c.jsxs("div",{className:"cd-hero",children:[c.jsx("img",{src:U.image,alt:U.name,className:"cd-hero-img"}),c.jsx("div",{className:"cd-hero-overlay",children:c.jsxs("div",{className:"cd-hero-content",children:[c.jsxs("button",{className:"cd-back-btn",onClick:()=>s("/courses"),children:[c.jsx(N2,{size:13})," Back to Courses"]}),c.jsxs("div",{className:"cd-hero-category",children:[U.category," · ",U.level]}),c.jsx("h1",{className:"cd-hero-title",children:U.name}),c.jsxs("div",{className:"cd-hero-meta",children:[c.jsxs("span",{className:"cd-hero-meta-item",children:[c.jsx(ga,{size:12,fill:"#f59e0b",color:"#f59e0b"})," ",U.rating]}),c.jsxs("span",{className:"cd-hero-meta-item",children:[c.jsx(Ia,{size:12})," ",U.totalStudents?.toLocaleString()," students"]}),c.jsxs("span",{className:"cd-hero-meta-item",children:[c.jsx(Za,{size:12})," ",si(F)," total"]}),c.jsxs("span",{className:"cd-hero-meta-item",children:[c.jsx(lt,{size:12})," ",P," lessons"]})]})]})})]}),c.jsxs("div",{className:"cd-main",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"cd-video-card cd-animate",children:[c.jsx("div",{className:"cd-video-frame",children:Z?ve?c.jsx("video",{controls:!0,src:Z}):c.jsx("iframe",{title:Ce?.name||Ce?.title||"Video Player",src:oS(Z,i&&(d||T)),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):c.jsxs("div",{className:"cd-video-placeholder",children:[c.jsx("div",{className:"cd-play-ring",children:c.jsx(gu,{size:22,color:"#67e8f9",fill:"#67e8f9"})}),c.jsx("p",{children:"Select a chapter to start learning"}),(!i||!d&&!T)&&c.jsxs("span",{className:"cd-lock-note",children:[c.jsx(zm,{size:11}),i?"Enrollment required":"Login required"]})]})}),c.jsxs("div",{className:"cd-video-info",children:[c.jsx("h3",{className:"cd-video-title",children:Ce?.name||Ce?.title||"Select a chapter to begin"}),c.jsx("p",{className:"cd-video-desc",children:G.type==="chapter"?`Part of: ${re?.title}`:Ce?.description||U.description}),c.jsxs("div",{className:"cd-video-chips",children:[Ce?.durationMin&&c.jsxs("span",{className:"cd-chip",children:[c.jsx(Za,{size:11})," ",si(Ce.durationMin)]}),G.type==="chapter"&&c.jsx("span",{className:"cd-chip",children:"Chapter"}),re&&c.jsxs("span",{className:"cd-chip",children:[c.jsx(lt,{size:11})," ",re.title]})]}),i&&(d||T)&&G.chapterId&&c.jsx("button",{className:`cd-complete-btn ${N.has(G.chapterId)?"done":"undone"}`,onClick:()=>Q(G.chapterId),children:N.has(G.chapterId)?c.jsxs(c.Fragment,{children:[c.jsx(ui,{size:15})," Chapter Completed"]}):c.jsxs(c.Fragment,{children:[c.jsx(Em,{size:15})," Mark as Complete"]})})]})]}),c.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[c.jsx("div",{className:"cd-card-header",children:c.jsx("span",{className:"cd-card-title",children:"Your Instructor"})}),c.jsxs("div",{style:{padding:"16px 20px",display:"flex",gap:"14px",alignItems:"flex-start"},children:[c.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg, #0e7490, #06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:"1rem",fontFamily:"var(--ff-display)"},children:U.teacher.charAt(0)})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:500,fontSize:"0.9rem",color:"#0c1a2e",marginBottom:3},children:U.teacher}),c.jsx("div",{style:{fontSize:"0.78rem",color:"var(--slate)",fontWeight:300,lineHeight:1.55},children:U.teacherBio})]})]})]})]}),c.jsxs("div",{className:"cd-sidebar",children:[c.jsxs("div",{className:"cd-card cd-animate",children:[c.jsxs("div",{className:"cd-card-header",children:[c.jsx("span",{className:"cd-card-title",children:"Course Content"}),T&&c.jsxs("span",{className:"cd-free-badge",children:[c.jsx(bu,{size:10})," Free"]})]}),c.jsx("div",{className:"cd-lecture-list",children:(U.lectures||[]).map(($,fe)=>{const w=k.has($.id),D=T||d;return c.jsxs("div",{className:"cd-lecture-item",style:{animationDelay:`${fe*80}ms`},children:[c.jsxs("div",{className:`cd-lecture-header ${w?"expanded":""}`,onClick:()=>ye($.id),children:[c.jsxs("div",{className:"cd-lecture-left",children:[c.jsx(vi,{size:15,className:`cd-chevron ${w?"open":""}`}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:"cd-lecture-title",children:$.title}),c.jsxs("div",{className:"cd-lecture-sub",children:[c.jsx(Za,{size:10})," ",si($.durationMin),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[$.chapters?.length||0," lessons"]})]})]})]}),!D&&c.jsx(zm,{size:13,className:"cd-lecture-lock"})]}),w&&c.jsx("div",{className:"cd-chapter-list",children:($.chapters||[]).map(K=>{const I=N.has(K.id),se=G.chapterId===K.id&&G.lectureId===$.id;return c.jsxs("div",{className:`cd-chapter-item ${se?"selected":""} ${D?"":"disabled"}`,onClick:()=>R($.id,K.id),children:[c.jsxs("div",{className:"cd-chapter-left",children:[c.jsx("button",{className:`cd-toggle-btn ${I?"done":""}`,onClick:he=>{he.stopPropagation(),D&&Q(K.id)},disabled:!D,"aria-label":I?"Mark incomplete":"Mark complete",children:I?c.jsx(ui,{size:14}):c.jsx(Em,{size:14})}),c.jsxs("div",{style:{minWidth:0},children:[c.jsx("div",{className:`cd-chapter-name ${se?"selected":""}`,children:K.name}),c.jsx("div",{className:"cd-chapter-topic",children:K.topic})]})]}),c.jsx("span",{className:"cd-chapter-dur",children:si(K.durationMin)})]},K.id)})})]},$.id)})})]}),c.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[c.jsx("div",{className:"cd-card-header",children:c.jsx("span",{className:"cd-card-title",children:"Pricing"})}),c.jsxs("div",{className:"cd-pricing-body",children:[c.jsxs("div",{className:"cd-price-row",children:[c.jsx("span",{className:`cd-price-main ${T?"free":""}`,children:T?"Free":Y!=null?su(Y):q!=null?su(q):"Free"}),!T&&W&&c.jsx("span",{className:"cd-price-original",children:su(q)}),!T&&W&&c.jsxs("span",{className:"cd-discount-pill",children:[Math.round((q-Y)/q*100),"% off"]})]}),c.jsx("p",{className:"cd-price-note",children:T?"Free access · Learn anytime":"One-time payment · Lifetime access"}),T?c.jsxs("button",{disabled:!0,className:"cd-enroll-btn free-access",children:[c.jsx(ui,{size:15})," Free Access Granted"]}):d?c.jsxs("button",{disabled:!0,className:"cd-enroll-btn enrolled",children:[c.jsx(ui,{size:15})," Enrolled"]}):c.jsx("button",{onClick:ne,disabled:p,className:"cd-enroll-btn paid",children:p?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"cd-spinner"})," Enrolling…"]}):c.jsxs(c.Fragment,{children:[c.jsx(gu,{size:14,fill:"#fff"})," Enroll Now ",c.jsx(pi,{size:14})]})})]})]}),c.jsxs("div",{className:"cd-card cd-animate cd-delay-2",children:[c.jsx("div",{className:"cd-card-header",children:c.jsxs("div",{className:"cd-progress-header",style:{margin:0},children:[c.jsx(bi,{size:16,color:"var(--cyan)"}),c.jsx("span",{className:"cd-card-title",children:"Your Progress"})]})}),c.jsxs("div",{className:"cd-progress-body",children:[c.jsxs("div",{className:"cd-progress-label",children:[c.jsx("span",{children:"Course Completion"}),c.jsxs("span",{children:[ie,"%"]})]}),c.jsx("div",{className:"cd-progress-track",children:c.jsx("div",{className:"cd-progress-fill",style:{width:`${ie}%`}})}),c.jsxs("div",{className:"cd-progress-stats",children:[c.jsxs("div",{className:"cd-progress-stat",children:[c.jsx("div",{className:"cd-stat-val",children:si(F)}),c.jsx("div",{className:"cd-stat-lbl",children:"Total Duration"})]}),c.jsxs("div",{className:"cd-progress-stat",children:[c.jsxs("div",{className:"cd-stat-val",children:[N.size,"/",P]}),c.jsx("div",{className:"cd-stat-lbl",children:"Completed"})]})]})]})]})]})]})]})]})},ou={students:12e3,courses:240,successRate:94,countries:58,certificates:31500,support:0},fS=[{key:"students",label:"Students Enrolled",icon:va},{key:"courses",label:"Courses Available",icon:xi},{key:"successRate",label:"Success Rate",icon:bi},{key:"countries",label:"Countries Reached",icon:Tu},{key:"certificates",label:"Certificates Issued",icon:bi},{key:"support",label:"Support Available",icon:Za}],hS=[{title:"Excellence",description:"We hold ourselves to the highest standards in every course, every interaction, every outcome.",features:["Peer-reviewed curriculum","Expert-led instruction","Continuous improvement"],accent:"#0e7490",light:"#e0f7fa"},{title:"Accessibility",description:"World-class education should never be gated by geography, background, or budget.",features:["Affordable pricing tiers","Mobile-first design","Multi-language support"],accent:"#0369a1",light:"#dbeafe"},{title:"Community",description:"Learning thrives in connection. We build spaces where collaboration sparks growth.",features:["Live cohort sessions","Peer mentorship","Alumni network"],accent:"#0f766e",light:"#d1fae5"},{title:"Innovation",description:"The future of learning is adaptive, interactive, and built for how humans actually learn.",features:["AI-powered paths","Project-based learning","Real-world challenges"],accent:"#7c3aed",light:"#ede9fe"}],pS=[{name:"Aisha Rahman",role:"Frontend Engineer @ Google",rating:5,text:"LearnHub didn't just teach me to code — it taught me how to think like an engineer. The projects were real, the mentorship was genuine.",image:"https://i.pravatar.cc/80?img=47"},{name:"Marcus Chen",role:"Data Scientist @ Stripe",rating:5,text:"I switched careers at 34. LearnHub gave me the confidence and the skills to land a role I'd only dreamed about. Incredible platform.",image:"https://i.pravatar.cc/80?img=12"},{name:"Sofia Alvarez",role:"UX Designer @ Figma",rating:5,text:"The UI/UX track is the most thoughtfully designed course I've ever taken. Real briefs, real feedback, real portfolio pieces.",image:"https://i.pravatar.cc/80?img=29"}];function cu(l=.2){const s=S.useRef(null),[u,i]=S.useState(!1);return S.useEffect(()=>{const d=new IntersectionObserver(([f])=>{f.isIntersecting&&i(!0)},{threshold:l});return s.current&&d.observe(s.current),()=>d.disconnect()},[l]),[s,u]}function mS(l){const[s,u]=S.useState(()=>Object.fromEntries(Object.keys(ou).map(i=>[i,0])));return S.useEffect(()=>{if(!l)return;const i=2e3,d=60,f=i/d,p=[];return Object.keys(ou).forEach(g=>{if(g==="support")return;let v=0;const b=ou[g],k=b/d,y=setInterval(()=>{v+=k,v>=b&&(v=b,clearInterval(y)),u(N=>({...N,[g]:Math.floor(v)}))},f);p.push(y)}),()=>p.forEach(g=>clearInterval(g))},[l]),s}const gS=(l,s)=>l==="support"?"24/7":l==="successRate"?`${s}%`:`${s.toLocaleString()}+`;function bS(){const[l,s]=cu(.3),u=mS(s),[i,d]=cu(.15),[f,p]=cu(.15);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #0e7490;
          --cyan-dark: #0a5c73;
          --blue: #0369a1;
          --teal: #0f766e;
          --slate: #475569;
          --slate-light: #94a3b8;
          --bg: #f8fafc;
          --white: #ffffff;
          --border: rgba(14,116,144,0.12);
          --ff-display: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'DM Sans', sans-serif;
        }

        /* ── HERO VIGNETTE ─────────────────────────── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.0) 30%,
            rgba(0,0,0,0.0) 70%,
            rgba(0,0,0,0.72) 100%
          );
        }

        /* ── SHARED SECTION ────────────────────────── */
        .section {
          padding: 96px 24px;
          font-family: var(--ff-body);
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--slate);
          font-weight: 300;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ── STATS STRIP ───────────────────────────── */
        .stats-section {
          background: linear-gradient(135deg, #0a5c73 0%, #0e7490 40%, #0369a1 100%);
          padding: 72px 24px;
          position: relative;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
          padding: 36px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s ease;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.06);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          margin: 0 auto 16px;
          color: rgba(255,255,255,0.9);
        }

        .stat-number {
          font-family: var(--ff-display);
          font-size: 2.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── VALUES SECTION ────────────────────────── */
        .values-section {
          background: var(--bg);
        }

        .values-header {
          margin-bottom: 56px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(14,116,144,0.1);
        }

        .value-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }

        .value-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .value-card-title {
          font-family: var(--ff-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .value-card-desc {
          font-size: 0.88rem;
          color: var(--slate);
          line-height: 1.65;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .value-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .value-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 400;
        }

        .value-feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── TESTIMONIALS SECTION ──────────────────── */
        .testimonials-section {
          background: #fff;
        }

        .testimonials-header {
          margin-bottom: 56px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          background: #f8fafc;
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -8px;
          right: 20px;
          font-family: var(--ff-display);
          font-size: 8rem;
          color: rgba(14,116,144,0.06);
          line-height: 1;
          pointer-events: none;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(14,116,144,0.09);
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
        }

        .testimonial-star {
          width: 14px;
          height: 14px;
          color: #f59e0b;
          fill: #f59e0b;
        }

        .testimonial-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.7;
          font-weight: 300;
          font-style: italic;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(14,116,144,0.08);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(14,116,144,0.2);
        }

        .testimonial-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: #0f172a;
        }

        .testimonial-role {
          font-size: 0.76rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-top: 2px;
        }

        /* ── FADE-IN ANIMATION ─────────────────────── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }
        .fade-up-delay-4 { transition-delay: 0.4s; }
      `}),c.jsx("div",{className:"hero-vignette"}),c.jsx("section",{className:"stats-section",ref:l,children:c.jsx("div",{className:"stats-grid",children:fS.map(({key:g,label:v,icon:b},k)=>c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-icon",children:c.jsx(b,{size:18})}),c.jsx("div",{className:"stat-number",children:gS(g,u[g]??0)}),c.jsx("div",{className:"stat-label",children:v})]},g))})}),c.jsx("section",{className:"section values-section",ref:i,children:c.jsxs("div",{className:"section-inner",children:[c.jsxs("div",{className:`values-header fade-up ${d?"visible":""}`,children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(Nm,{size:13}),c.jsx("span",{children:"Our Guiding Principles"})]}),c.jsx("h2",{className:"section-title",children:"Core Values That Define Us"}),c.jsx("p",{className:"section-subtitle",children:"The foundation of everything we do at LearnHub"})]}),c.jsx("div",{className:"values-grid",children:hS.map((g,v)=>c.jsxs("div",{className:`value-card fade-up ${d?"visible":""} fade-up-delay-${Math.min(v+1,4)}`,children:[c.jsx("div",{className:"value-card-accent",style:{background:g.accent}}),c.jsx("div",{className:"value-icon-wrap",style:{background:g.light},children:c.jsx(Nm,{size:20,style:{color:g.accent}})}),c.jsx("h3",{className:"value-card-title",children:g.title}),c.jsx("p",{className:"value-card-desc",children:g.description}),c.jsx("ul",{className:"value-features",children:g.features.map((b,k)=>c.jsxs("li",{className:"value-feature-item",children:[c.jsx("div",{className:"value-feature-dot",style:{background:g.accent}}),b]},k))})]},v))})]})}),c.jsx("section",{className:"section testimonials-section",ref:f,children:c.jsxs("div",{className:"section-inner",children:[c.jsxs("div",{className:`testimonials-header fade-up ${p?"visible":""}`,children:[c.jsx("h2",{className:"section-title",children:"What Our Students Say"}),c.jsx("p",{className:"section-subtitle",children:"Real stories from real learners who transformed their careers"})]}),c.jsx("div",{className:"testimonials-grid",children:pS.map((g,v)=>c.jsxs("div",{className:`testimonial-card fade-up ${p?"visible":""} fade-up-delay-${Math.min(v+1,4)}`,children:[c.jsx("div",{className:"testimonial-stars",children:[...Array(g.rating)].map((b,k)=>c.jsx(ga,{className:"testimonial-star"},k))}),c.jsxs("p",{className:"testimonial-text",children:['"',g.text,'"']}),c.jsxs("div",{className:"testimonial-author",children:[c.jsx("img",{src:g.image,alt:g.name,className:"testimonial-avatar"}),c.jsxs("div",{children:[c.jsx("div",{className:"testimonial-name",children:g.name}),c.jsx("div",{className:"testimonial-role",children:g.role})]})]})]},v))})]})})]})}const ll=[{id:"f1",name:"Arjun Mehta",role:"Full Stack Engineer",specialization:"Development",bio:"10+ years at Google & Stripe. Built products used by millions. Passionate about clean architecture and mentoring the next generation of developers.",avatar:"https://i.pravatar.cc/160?img=11",rating:4.9,totalStudents:4820,totalCourses:4,experience:"10+ years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Node.js","AWS","TypeScript"],courses:["Full Stack Web Dev","Node.js APIs","React Bootcamp","Cloud & AWS"]},{id:"f2",name:"Priya Sharma",role:"Senior Product Designer",specialization:"Design",bio:"Led design at Figma and Notion. Speaker at Design+Code conf. Believes great design starts with deep empathy for the user.",avatar:"https://i.pravatar.cc/160?img=47",rating:4.9,totalStudents:5730,totalCourses:3,experience:"8 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:null},skills:["Figma","UX Research","Prototyping","Design Systems"],courses:["UI/UX Mastery","Figma for Beginners","Design Systems"]},{id:"f3",name:"Rohit Verma",role:"Data Scientist",specialization:"Data",bio:"PhD in ML from IIT Bombay. Currently at DeepMind. Published 12 research papers. Loves turning complex math into intuitive explanations.",avatar:"https://i.pravatar.cc/160?img=12",rating:4.8,totalStudents:6100,totalCourses:3,experience:"12 years",badge:"Expert",social:{linkedin:"#",twitter:null,website:"#"},skills:["Python","TensorFlow","Statistics","SQL"],courses:["Data Science with Python","Machine Learning A-Z","Business Analytics"]},{id:"f4",name:"Sneha Patel",role:"Frontend Architect",specialization:"Development",bio:"Core contributor to React ecosystem. Worked at Vercel. Obsessed with performance, accessibility and developer experience.",avatar:"https://i.pravatar.cc/160?img=29",rating:4.8,totalStudents:3750,totalCourses:2,experience:"7 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Next.js","Performance","CSS"],courses:["React & Next.js Bootcamp","Frontend Performance"]},{id:"f5",name:"Karan Shah",role:"Growth Marketing Lead",specialization:"Marketing",bio:"Scaled two startups from 0 to 1M users. Google-certified marketer. Teaches data-driven growth strategies that actually move the needle.",avatar:"https://i.pravatar.cc/160?img=52",rating:4.6,totalStudents:2870,totalCourses:2,experience:"6 years",badge:null,social:{linkedin:"#",twitter:"#",website:null},skills:["SEO","Google Ads","Analytics","Content Strategy"],courses:["Digital Marketing Pro","Content Writing Fundamentals"]},{id:"f6",name:"Divya Nair",role:"ML Research Engineer",specialization:"Data",bio:"Former Amazon Alexa team. Specializes in NLP and computer vision. Makes cutting-edge research accessible to every learner.",avatar:"https://i.pravatar.cc/160?img=44",rating:4.9,totalStudents:5420,totalCourses:2,experience:"9 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["PyTorch","NLP","Computer Vision","MLOps"],courses:["Machine Learning A-Z","Deep Learning Fundamentals"]},{id:"f7",name:"Amit Joshi",role:"Visual Designer",specialization:"Design",bio:"Award-winning brand designer with clients across 3 continents. Instructor of the year 2023. Makes creative skills accessible to everyone.",avatar:"https://i.pravatar.cc/160?img=15",rating:4.5,totalStudents:1240,totalCourses:2,experience:"5 years",badge:null,social:{linkedin:"#",twitter:null,website:"#"},skills:["Illustrator","Photoshop","Branding","Typography"],courses:["Graphic Design Essentials","Logo Design Masterclass"]},{id:"f8",name:"Neha Gupta",role:"Cloud Solutions Architect",specialization:"Development",bio:"AWS Certified Solutions Architect with 8 certifications. Helped 50+ companies migrate to cloud. Breaks down complex infra into simple concepts.",avatar:"https://i.pravatar.cc/160?img=32",rating:4.7,totalStudents:2890,totalCourses:2,experience:"8 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:null},skills:["AWS","Docker","Kubernetes","Terraform"],courses:["Cloud Computing & AWS","DevOps Fundamentals"]}],vS=["All","Development","Design","Data","Marketing"],xS=["Most Popular","Top Rated","Most Courses","Most Experience"],uu=6,J0=l=>l>=1e3?`${(l/1e3).toFixed(1)}k`:String(l),yS=l=>l==="Top Instructor"?{bg:"rgba(245,158,11,0.1)",color:"#b45309",border:"rgba(245,158,11,0.25)"}:l==="Expert"?{bg:"rgba(14,116,144,0.08)",color:"#0e7490",border:"rgba(14,116,144,0.2)"}:null,SS=M.memo(({rating:l,size:s=13})=>c.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[[1,2,3,4,5].map(u=>{const i=u<=Math.round(l);return c.jsx(ga,{size:s,fill:i?"#f59e0b":"none",color:i?"#f59e0b":"#cbd5e1"},u)}),c.jsx("span",{style:{fontSize:"0.74rem",fontWeight:600,color:"#92400e",marginLeft:4},children:l.toFixed(1)})]})),du=({href:l,icon:s,label:u})=>l?c.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:"fc-social-btn",onClick:i=>i.stopPropagation(),children:c.jsx(s,{size:14})}):null,wS=M.memo(({teacher:l,index:s,isExpanded:u,onToggle:i})=>{const d=yS(l.badge);return c.jsxs("article",{className:"fc-card",style:{animationDelay:`${Math.min(s,5)*70}ms`},children:[c.jsx("div",{className:"fc-card-accent",style:{background:l.specialization==="Design"?"linear-gradient(90deg,#0f766e,#14b8a6)":l.specialization==="Data"?"linear-gradient(90deg,#0369a1,#38bdf8)":l.specialization==="Marketing"?"linear-gradient(90deg,#7c3aed,#a78bfa)":"linear-gradient(90deg,#0a5c73,#0e7490)"}}),c.jsxs("div",{className:"fc-card-top",children:[c.jsxs("div",{className:"fc-avatar-wrap",children:[c.jsx("img",{src:l.avatar,alt:l.name,className:"fc-avatar",loading:"lazy"}),c.jsx("div",{className:"fc-avatar-ring"})]}),c.jsxs("div",{className:"fc-card-info",children:[c.jsxs("div",{className:"fc-name-row",children:[c.jsx("h3",{className:"fc-name",children:l.name}),d&&c.jsxs("span",{className:"fc-badge",style:{background:d.bg,color:d.color,borderColor:d.border},children:[c.jsx(bi,{size:9})," ",l.badge]})]}),c.jsx("p",{className:"fc-role",children:l.role}),c.jsx("span",{className:"fc-spec",children:l.specialization})]})]}),c.jsxs("div",{className:"fc-stats",children:[c.jsxs("div",{className:"fc-stat",children:[c.jsx(Ia,{size:12,color:"#0e7490"}),c.jsx("span",{className:"fc-stat-val",children:J0(l.totalStudents)}),c.jsx("span",{className:"fc-stat-lbl",children:"Students"})]}),c.jsx("div",{className:"fc-stat-divider"}),c.jsxs("div",{className:"fc-stat",children:[c.jsx(lt,{size:12,color:"#0e7490"}),c.jsx("span",{className:"fc-stat-val",children:l.totalCourses}),c.jsx("span",{className:"fc-stat-lbl",children:"Courses"})]}),c.jsx("div",{className:"fc-stat-divider"}),c.jsxs("div",{className:"fc-stat",children:[c.jsx(xi,{size:12,color:"#0e7490"}),c.jsx("span",{className:"fc-stat-val",children:l.experience}),c.jsx("span",{className:"fc-stat-lbl",children:"Experience"})]})]}),c.jsx("div",{className:"fc-rating-row",children:c.jsx(SS,{rating:l.rating})}),c.jsx("p",{className:"fc-bio",children:l.bio}),c.jsx("div",{className:"fc-skills",children:l.skills.map(f=>c.jsx("span",{className:"fc-skill",children:f},f))}),u&&c.jsxs("div",{className:"fc-courses",children:[c.jsxs("div",{className:"fc-courses-label",children:[c.jsx(va,{size:12})," Courses by ",l.name.split(" ")[0]]}),c.jsx("div",{className:"fc-courses-list",children:l.courses.map(f=>c.jsxs("div",{className:"fc-course-item",children:[c.jsx(lt,{size:11,color:"#0e7490"}),c.jsx("span",{children:f})]},f))})]}),c.jsxs("div",{className:"fc-card-footer",children:[c.jsxs("div",{className:"fc-socials",children:[c.jsx(du,{href:l.social.linkedin,icon:X0,label:"LinkedIn"}),c.jsx(du,{href:l.social.twitter,icon:F0,label:"Twitter"}),c.jsx(du,{href:l.social.website,icon:Tu,label:"Website"})]}),c.jsx("button",{type:"button",className:"fc-expand-btn",onClick:()=>i(l.id),"aria-expanded":u,"aria-label":u?"Show less":"View courses",children:u?c.jsxs(c.Fragment,{children:[c.jsx(ns,{size:13})," Less"]}):c.jsxs(c.Fragment,{children:[c.jsx(vi,{size:13})," Courses"]})})]})]})}),jS=()=>{const[l,s]=S.useState(""),[u,i]=S.useState("All"),[d,f]=S.useState("Most Popular"),[p,g]=S.useState(!1),[v,b]=S.useState(new Set),[k,y]=S.useState(!1),N=S.useCallback(X=>{b(F=>{const P=new Set(F);return P.has(X)?P.delete(X):P.add(X),P})},[]),V=S.useMemo(()=>{let X=ll.filter(F=>{const P=l.toLowerCase(),ie=!P||F.name.toLowerCase().includes(P)||F.role.toLowerCase().includes(P)||F.skills.some(Ce=>Ce.toLowerCase().includes(P)),re=u==="All"||F.specialization===u;return ie&&re});switch(d){case"Top Rated":X=[...X].sort((F,P)=>P.rating-F.rating);break;case"Most Popular":X=[...X].sort((F,P)=>P.totalStudents-F.totalStudents);break;case"Most Courses":X=[...X].sort((F,P)=>P.totalCourses-F.totalCourses);break;case"Most Experience":X=[...X].sort((F,P)=>parseInt(P.experience)-parseInt(F.experience));break}return X},[l,u,d]),G=S.useMemo(()=>p?V:V.slice(0,uu),[V,p]),B=Math.max(0,V.length-uu),U=u!=="All"||l!==""||d!=="Most Popular",T=S.useCallback(()=>{s(""),i("All"),f("Most Popular"),g(!1)},[]),q=S.useMemo(()=>ll.reduce((X,F)=>X+F.totalStudents,0),[]),Y=S.useMemo(()=>ll.reduce((X,F)=>X+F.totalCourses,0),[]),W=S.useMemo(()=>(ll.reduce((X,F)=>X+F.rating,0)/ll.length).toFixed(1),[]);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --teal:        #0f766e;
          --amber:       #f59e0b;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.13);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --shadow:      0 2px 14px rgba(14,116,144,0.07);
          --shadow-hover:0 12px 36px rgba(14,116,144,0.14);
          --radius:      18px;
        }

        .fc-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 88px 24px 80px;
        }

        /* ── HEADER ────────────────────────────────────── */
        .fc-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 40px;
          animation: fadeUp 0.5s ease both;
        }

        .fc-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.71rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .fc-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 12px;
        }

        .fc-title span {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fc-subtitle {
          font-size: 0.92rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── SUMMARY STRIP ─────────────────────────────── */
        .fc-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 560px;
          margin: 0 auto 44px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow);
          animation: fadeUp 0.5s 0.08s ease both;
        }

        .fc-summary-item {
          flex: 1;
          padding: 16px 12px;
          text-align: center;
          border-right: 1px solid var(--border);
        }
        .fc-summary-item:last-child { border-right: none; }

        .fc-summary-val {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cyan);
          line-height: 1;
          margin-bottom: 3px;
          letter-spacing: -0.02em;
        }

        .fc-summary-lbl {
          font-size: 0.67rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-weight: 400;
        }

        /* ── SPEC TABS ─────────────────────────────────── */
        .fc-spec-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeUp 0.5s 0.12s ease both;
        }

        .fc-spec-tab {
          padding: 8px 20px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow);
        }
        .fc-spec-tab:hover { border-color: var(--cyan); color: var(--cyan); }
        .fc-spec-tab.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,0.28);
        }

        /* ── CONTROLS ──────────────────────────────────── */
        .fc-controls {
          max-width: 1200px;
          margin: 0 auto 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.5s 0.16s ease both;
        }

        .fc-search-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .fc-search-wrap {
          position: relative;
          flex: 1;
        }

        .fc-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-light);
          pointer-events: none;
        }

        .fc-search {
          width: 100%;
          padding: 12px 40px 12px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-shadow: var(--shadow);
        }
        .fc-search::placeholder { color: #cbd5e1; }
        .fc-search:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .fc-search-clear {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; color: var(--slate-light);
          display: flex; align-items: center;
          transition: color 0.15s;
        }
        .fc-search-clear:hover { color: #ef4444; }

        .fc-sort-select {
          padding: 11px 32px 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          color: var(--slate);
          cursor: pointer;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-width: 175px;
          box-shadow: var(--shadow);
          transition: border-color 0.2s;
        }
        .fc-sort-select:focus { border-color: var(--cyan); }

        /* ── ACTIVE FILTER BAR ─────────────────────────── */
        .fc-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .fc-filter-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.72rem;
          color: var(--cyan);
          font-weight: 500;
        }

        .fc-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          background: none;
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.72rem;
          color: #ef4444;
          cursor: pointer;
          transition: background 0.18s;
        }
        .fc-clear-btn:hover { background: rgba(239,68,68,0.06); }

        .fc-result-count {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── GRID ──────────────────────────────────────── */
        .fc-grid-wrap { max-width: 1200px; margin: 0 auto; }

        .fc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 32px;
        }

        /* ── FACULTY CARD ──────────────────────────────── */
        .fc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          animation: cardIn 0.42s ease forwards;
          position: relative;
        }

        .fc-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.28);
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-card-accent {
          height: 3px;
          width: 100%;
        }

        .fc-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 20px 14px;
        }

        /* Avatar */
        .fc-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .fc-avatar {
          width: 62px; height: 62px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid var(--white);
          box-shadow: 0 2px 10px rgba(14,116,144,0.15);
        }

        .fc-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid rgba(14,116,144,0.2);
          pointer-events: none;
        }

        .fc-card-info { flex: 1; min-width: 0; }

        .fc-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 3px;
        }

        .fc-name {
          font-family: var(--ff-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: #0c1a2e;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 9px;
          border-radius: 100px;
          border: 1px solid;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .fc-role {
          font-size: 0.78rem;
          color: var(--slate);
          font-weight: 300;
          margin-bottom: 6px;
        }

        .fc-spec {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 500;
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1px solid rgba(14,116,144,0.15);
          letter-spacing: 0.05em;
        }

        /* Stats */
        .fc-stats {
          display: flex;
          align-items: center;
          margin: 0 20px;
          padding: 12px 0;
          border-top: 1px solid rgba(14,116,144,0.07);
          border-bottom: 1px solid rgba(14,116,144,0.07);
        }

        .fc-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .fc-stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(14,116,144,0.1);
        }

        .fc-stat-val {
          font-family: var(--ff-display);
          font-size: 1rem;
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1;
        }

        .fc-stat-lbl {
          font-size: 0.62rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        /* Rating */
        .fc-rating-row {
          padding: 10px 20px 6px;
        }

        /* Bio */
        .fc-bio {
          padding: 0 20px;
          font-size: 0.81rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Skills */
        .fc-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 12px 20px 6px;
        }

        .fc-skill {
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 400;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
          transition: all 0.15s ease;
        }

        .fc-card:hover .fc-skill {
          background: rgba(14,116,144,0.06);
          border-color: rgba(14,116,144,0.18);
          color: var(--cyan);
        }

        /* Expanded courses */
        .fc-courses {
          margin: 10px 20px 0;
          padding: 14px;
          background: rgba(14,116,144,0.04);
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 10px;
          animation: slideDown 0.22s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-courses-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .fc-courses-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fc-course-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: #334155;
          font-weight: 300;
        }

        /* Footer */
        .fc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px 16px;
          margin-top: auto;
          border-top: 1px solid rgba(14,116,144,0.07);
        }

        .fc-socials {
          display: flex;
          gap: 8px;
        }

        .fc-social-btn {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--slate);
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .fc-social-btn:hover {
          background: var(--cyan);
          border-color: var(--cyan);
          color: #fff;
          transform: translateY(-2px);
        }

        .fc-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: none;
          font-family: var(--ff-body);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .fc-expand-btn:hover {
          background: rgba(14,116,144,0.06);
          border-color: var(--cyan);
        }

        /* ── EMPTY STATE ───────────────────────────────── */
        .fc-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
          gap: 14px;
        }

        .fc-empty-icon {
          width: 68px; height: 68px;
          background: rgba(14,116,144,0.06);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-light);
        }

        .fc-empty-title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .fc-empty-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: var(--cyan);
          color: #fff;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .fc-empty-btn:hover { background: var(--cyan-dark); transform: translateY(-1px); }

        /* ── SHOW MORE ─────────────────────────────────── */
        .fc-show-more {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .fc-show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 30px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: var(--shadow);
        }
        .fc-show-more-btn:hover {
          border-color: var(--cyan);
          background: rgba(14,116,144,0.05);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        .fc-count-note {
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── ANIMATIONS ────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 768px) {
          .fc-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .fc-search-row { flex-wrap: wrap; }
          .fc-sort-select { min-width: 0; flex: 1; }
        }

        @media (max-width: 480px) {
          .fc-grid { grid-template-columns: 1fr; }
          .fc-summary { max-width: 100%; }
        }
      `}),c.jsxs("div",{className:"fc-page",children:[c.jsxs("div",{className:"fc-header",children:[c.jsxs("div",{className:"fc-header-badge",children:[c.jsx(va,{size:11})," Meet Our Faculty"]}),c.jsxs("h1",{className:"fc-title",children:["Learn from the ",c.jsx("span",{children:"Best"})]}),c.jsx("p",{className:"fc-subtitle",children:"Our instructors are industry veterans, researchers, and practitioners who bring real-world experience into every lesson."})]}),c.jsxs("div",{className:"fc-summary",children:[c.jsxs("div",{className:"fc-summary-item",children:[c.jsx("div",{className:"fc-summary-val",children:ll.length}),c.jsx("div",{className:"fc-summary-lbl",children:"Instructors"})]}),c.jsxs("div",{className:"fc-summary-item",children:[c.jsx("div",{className:"fc-summary-val",children:J0(q)}),c.jsx("div",{className:"fc-summary-lbl",children:"Students Taught"})]}),c.jsxs("div",{className:"fc-summary-item",children:[c.jsx("div",{className:"fc-summary-val",children:Y}),c.jsx("div",{className:"fc-summary-lbl",children:"Courses"})]}),c.jsxs("div",{className:"fc-summary-item",children:[c.jsxs("div",{className:"fc-summary-val",children:[W,"★"]}),c.jsx("div",{className:"fc-summary-lbl",children:"Avg Rating"})]})]}),c.jsx("div",{className:"fc-spec-tabs",children:vS.map(X=>c.jsx("button",{type:"button",className:`fc-spec-tab ${u===X?"active":""}`,onClick:()=>{i(X),g(!1)},children:X},X))}),c.jsxs("div",{className:"fc-controls",children:[c.jsxs("div",{className:"fc-search-row",children:[c.jsxs("div",{className:"fc-search-wrap",children:[c.jsx(ls,{size:15,className:"fc-search-icon"}),c.jsx("input",{type:"search",className:"fc-search",placeholder:"Search by name, role, or skill…",value:l,onChange:X=>{s(X.target.value),g(!1)},"aria-label":"Search faculty"}),l&&c.jsx("button",{className:"fc-search-clear",onClick:()=>s(""),"aria-label":"Clear",children:c.jsx(is,{size:13})})]}),c.jsx("select",{className:"fc-sort-select",value:d,onChange:X=>{f(X.target.value),g(!1)},"aria-label":"Sort faculty",children:xS.map(X=>c.jsx("option",{value:X,children:X},X))})]}),U&&c.jsxs("div",{className:"fc-filter-bar",children:[l&&c.jsxs("span",{className:"fc-filter-tag",children:[c.jsx(ls,{size:10}),' "',l,'"']}),u!=="All"&&c.jsx("span",{className:"fc-filter-tag",children:u}),d!=="Most Popular"&&c.jsxs("span",{className:"fc-filter-tag",children:[c.jsx(Z2,{size:10})," ",d]}),c.jsxs("button",{type:"button",className:"fc-clear-btn",onClick:T,children:[c.jsx(is,{size:10})," Clear all"]}),c.jsxs("span",{className:"fc-result-count",children:[V.length," instructor",V.length!==1?"s":""]})]})]}),c.jsxs("div",{className:"fc-grid-wrap",children:[c.jsx("div",{className:"fc-grid",children:V.length===0?c.jsxs("div",{className:"fc-empty",children:[c.jsx("div",{className:"fc-empty-icon",children:c.jsx(va,{size:30})}),c.jsx("h3",{className:"fc-empty-title",children:"No instructors found"}),c.jsx("button",{type:"button",className:"fc-empty-btn",onClick:T,children:"Show All Faculty"})]}):G.map((X,F)=>c.jsx(wS,{teacher:X,index:F,isExpanded:v.has(X.id),onToggle:N},X.id))}),V.length>uu&&c.jsxs("div",{className:"fc-show-more",children:[c.jsx("button",{type:"button",className:"fc-show-more-btn",onClick:()=>g(X=>!X),children:p?c.jsxs(c.Fragment,{children:[c.jsx(ns,{size:15})," Show Less"]}):c.jsxs(c.Fragment,{children:[c.jsx(vi,{size:15})," Show ",B," More"]})}),!p&&c.jsxs("span",{className:"fc-count-note",children:["Showing ",G.length," of ",V.length]})]})]})]})]})},kS=[{icon:Uu,label:"Call Us",value:"+91 82994 31275",sub:"Mon–Sat, 9am–6pm IST",accent:"#0e7490",light:"#e0f7fa"},{icon:vs,label:"Email Us",value:"hello@learnhub.in",sub:"We reply within 24 hours",accent:"#0369a1",light:"#dbeafe"},{icon:P0,label:"Visit Us",value:"Rajkot, Gujarat",sub:"India — 360001",accent:"#0f766e",light:"#d1fae5"}],_S=["General Inquiry","Project Collaboration","Support","Feedback","Other"];function CS(){const[l,s]=S.useState({name:"",email:"",phone:"",subject:"",message:""}),[u,i]=S.useState(""),[d,f]=S.useState(!1),[p,g]=S.useState(!1),v=N=>/^\d{10}$/.test(N),b=l.name.trim()&&l.email.trim()&&v(l.phone)&&l.subject&&l.message.trim(),k=N=>{const{name:V,value:G}=N.target;s(B=>({...B,[V]:G})),V==="phone"&&(G&&!v(G)?i("Phone number must be exactly 10 digits."):i(""))},y=N=>{if(N.preventDefault(),!b)return;f(!0);const G=`https://wa.me/918299431275?text=${`Name: ${l.name}%0AEmail: ${l.email}%0APhone: ${l.phone}%0ASubject: ${l.subject}%0AMessage: ${l.message}`}`;window.open(G,"_blank"),setTimeout(()=>{f(!1),g(!0),s({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>g(!1),4e3)},800)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-light:  #e0f7fa;
          --blue:        #0369a1;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.15);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 4px 24px rgba(14,116,144,0.08);
          --shadow-hover:0 12px 40px rgba(14,116,144,0.14);
        }

        .cp-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 80px 24px 64px;
        }

        /* ── HERO HEADER ──────────────────────── */
        .cp-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 64px;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cp-title {
          font-family: var(--ff-display);
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }

        .cp-title span {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-subtitle {
          font-size: 0.95rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── INFO CARDS ───────────────────────── */
        .cp-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto 56px;
        }

        .cp-info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: var(--shadow);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cp-info-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .cp-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-info-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--slate-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .cp-info-value {
          font-size: 0.9rem;
          font-weight: 500;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .cp-info-sub {
          font-size: 0.75rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── MAIN GRID ────────────────────────── */
        .cp-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 860px) {
          .cp-main { grid-template-columns: 1fr; }
          .cp-lottie { order: -1; }
        }

        /* ── FORM CARD ────────────────────────── */
        .cp-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: var(--shadow);
        }

        .cp-form-title {
          font-family: var(--ff-display);
          font-size: 1.6rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .cp-form-sub {
          font-size: 0.83rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 32px;
        }

        /* ── FORM ELEMENTS ────────────────────── */
        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 560px) {
          .cp-row { grid-template-columns: 1fr; }
          .cp-form-card { padding: 28px 20px; }
        }

        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 18px;
        }

        .cp-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #334155;
          letter-spacing: 0.01em;
        }

        .cp-input, .cp-select, .cp-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid rgba(14,116,144,0.18);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          appearance: none;
        }

        .cp-input::placeholder, .cp-textarea::placeholder {
          color: #cbd5e1;
        }

        .cp-input:focus, .cp-select:focus, .cp-textarea:focus {
          border-color: var(--cyan);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .cp-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .cp-error {
          font-size: 0.73rem;
          color: #ef4444;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cp-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .cp-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }

        /* ── SUBMIT BUTTON ────────────────────── */
        .cp-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #0e7490, #0369a1);
          color: #fff;
          box-shadow: 0 4px 18px rgba(14,116,144,0.3);
          transition: all 0.25s ease;
          margin-top: 4px;
        }

        .cp-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,116,144,0.4);
        }

        .cp-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .cp-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .cp-submit.success {
          background: linear-gradient(135deg, #0f766e, #059669);
          box-shadow: 0 4px 18px rgba(5,150,105,0.3);
        }

        /* ── WA NOTE ──────────────────────────── */
        .cp-wa-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.74rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cp-wa-note svg {
          color: #25d366;
        }

        /* ── LOTTIE SIDE ──────────────────────── */
        .cp-lottie {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cp-lottie-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── HOURS CARD ───────────────────────── */
        .cp-hours {
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 16px;
          padding: 28px 24px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .cp-hours::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3C/g%3E%3C/svg%3E");
        }

        .cp-hours-title {
          font-family: var(--ff-display);
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 16px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cp-hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 0.82rem;
          position: relative;
        }

        .cp-hours-row:last-child {
          border-bottom: none;
        }

        .cp-hours-day {
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .cp-hours-time {
          color: #fff;
          font-weight: 500;
        }

        /* ── SPINNER ──────────────────────────── */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .cp-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* ── FADE UP ──────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cp-page > * { animation: fadeUp 0.5s ease both; }
        .cp-header   { animation-delay: 0.05s; }
        .cp-info-grid{ animation-delay: 0.1s; }
        .cp-main     { animation-delay: 0.18s; }
      `}),c.jsxs("div",{className:"cp-page",children:[c.jsxs("div",{className:"cp-header",children:[c.jsxs("div",{className:"cp-badge",children:[c.jsx(Zr,{size:12}),"Get In Touch"]}),c.jsxs("h1",{className:"cp-title",children:["Let's Start a ",c.jsx("span",{children:"Conversation"})]}),c.jsx("p",{className:"cp-subtitle",children:"Have a question, idea, or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you via WhatsApp."})]}),c.jsx("div",{className:"cp-info-grid",children:kS.map(N=>{const V=N.icon;return c.jsxs("div",{className:"cp-info-card",children:[c.jsx("div",{className:"cp-info-icon",style:{background:N.light},children:c.jsx(V,{size:18,style:{color:N.accent}})}),c.jsxs("div",{children:[c.jsx("div",{className:"cp-info-label",children:N.label}),c.jsx("div",{className:"cp-info-value",children:N.value}),c.jsx("div",{className:"cp-info-sub",children:N.sub})]})]},N.label)})}),c.jsxs("div",{className:"cp-main",children:[c.jsxs("div",{className:"cp-form-card",children:[c.jsx("h2",{className:"cp-form-title",children:"Send Us a Message"}),c.jsx("p",{className:"cp-form-sub",children:"All fields marked * are required"}),c.jsxs("form",{onSubmit:y,noValidate:!0,children:[c.jsxs("div",{className:"cp-row",children:[c.jsxs("div",{className:"cp-field",children:[c.jsxs("label",{className:"cp-label",children:[c.jsx(I0,{size:13,color:"#0e7490"}),"Full Name *"]}),c.jsx("input",{className:"cp-input",type:"text",name:"name",value:l.name,onChange:k,placeholder:"Your full name",required:!0})]}),c.jsxs("div",{className:"cp-field",children:[c.jsxs("label",{className:"cp-label",children:[c.jsx(vs,{size:13,color:"#0369a1"}),"Email Address *"]}),c.jsx("input",{className:"cp-input",type:"email",name:"email",value:l.email,onChange:k,placeholder:"you@example.com",required:!0})]})]}),c.jsxs("div",{className:"cp-field",children:[c.jsxs("label",{className:"cp-label",children:[c.jsx(Uu,{size:13,color:"#0f766e"}),"Phone Number *"]}),c.jsx("input",{className:`cp-input ${u?"error":""}`,type:"tel",name:"phone",value:l.phone,onChange:k,placeholder:"10-digit mobile number",inputMode:"numeric",maxLength:10,required:!0}),u&&c.jsxs("span",{className:"cp-error",children:["⚠ ",u]})]}),c.jsxs("div",{className:"cp-field",children:[c.jsxs("label",{className:"cp-label",children:[c.jsx(u4,{size:13,color:"#7c3aed"}),"Subject *"]}),c.jsxs("select",{className:"cp-select",name:"subject",value:l.subject,onChange:k,required:!0,children:[c.jsx("option",{value:"",children:"Select a subject"}),_S.map(N=>c.jsx("option",{value:N,children:N},N))]})]}),c.jsxs("div",{className:"cp-field",children:[c.jsxs("label",{className:"cp-label",children:[c.jsx(Zr,{size:13,color:"#0e7490"}),"Message *"]}),c.jsx("textarea",{className:"cp-textarea",name:"message",value:l.message,onChange:k,placeholder:"Tell us what's on your mind...",required:!0})]}),c.jsx("button",{type:"submit",className:`cp-submit ${p?"success":""}`,disabled:!b||d,children:d?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"cp-spinner"})," Opening WhatsApp…"]}):p?c.jsxs(c.Fragment,{children:[c.jsx(q2,{size:16})," Message Sent!"]}):c.jsxs(c.Fragment,{children:[c.jsx(Z0,{size:15})," Send via WhatsApp"]})}),c.jsxs("div",{className:"cp-wa-note",children:[c.jsx(Zr,{size:13}),"This form opens WhatsApp with your message pre-filled"]})]})]}),c.jsxs("div",{className:"cp-lottie",children:[c.jsx("div",{className:"cp-lottie-wrap",children:c.jsxs("div",{style:{width:"100%",height:"340px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},children:[c.jsx("style",{children:`
                  @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes cpPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
                  @keyframes cpSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes cpBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
                  @keyframes cpDash   { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
                  @keyframes cpFadeIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
                `}),c.jsx("div",{style:{position:"absolute",width:260,height:260,borderRadius:"50%",background:"linear-gradient(135deg,rgba(14,116,144,.07),rgba(8,145,178,.05))",border:"1.5px solid rgba(14,116,144,.12)",animation:"cpPulse 3s ease-in-out infinite"}}),c.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",border:"1px dashed rgba(14,116,144,.15)",animation:"cpSpin 20s linear infinite"}}),c.jsxs("div",{style:{animation:"cpFloat 3.5s ease-in-out infinite",zIndex:2,textAlign:"center"},children:[c.jsxs("svg",{width:"100",height:"80",viewBox:"0 0 100 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("rect",{x:"5",y:"15",width:"90",height:"60",rx:"8",fill:"white",stroke:"#0e7490",strokeWidth:"2"}),c.jsx("path",{d:"M5 23 L50 48 L95 23",stroke:"#0e7490",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),c.jsx("path",{d:"M5 75 L35 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),c.jsx("path",{d:"M95 75 L65 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),c.jsx("circle",{cx:"75",cy:"22",r:"12",fill:"#0e7490"}),c.jsx("path",{d:"M69 22 L73 26 L81 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"18",strokeDashoffset:"18",style:{animation:"cpDash 1s .5s ease forwards",strokeDashoffset:18}})]}),c.jsx("div",{style:{marginTop:12,fontFamily:"Cormorant Garamond, Georgia, serif",fontSize:"1.1rem",fontWeight:600,color:"#0e7490"},children:"We'd love to hear from you"}),c.jsx("div",{style:{marginTop:4,fontFamily:"DM Sans, sans-serif",fontSize:".78rem",fontWeight:300,color:"#94a3b8"},children:"Fill the form and we'll reply on WhatsApp"})]}),c.jsxs("div",{style:{position:"absolute",top:32,right:24,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 2.8s ease-in-out infinite",animationDelay:".4s"},children:[c.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#d1fae5",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(Zr,{size:13,color:"#0f766e"})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"WhatsApp"}),c.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Instant reply"})]})]}),c.jsxs("div",{style:{position:"absolute",bottom:36,left:20,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 3.2s ease-in-out infinite",animationDelay:".8s"},children:[c.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#e0f7fa",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(Za,{size:13,color:"#0e7490"})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"24h"}),c.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Response time"})]})]})]})}),c.jsxs("div",{className:"cp-hours",children:[c.jsxs("div",{className:"cp-hours-title",children:[c.jsx(Za,{size:16}),"Office Hours"]}),[{day:"Monday – Friday",time:"9:00 AM – 6:00 PM"},{day:"Saturday",time:"10:00 AM – 4:00 PM"},{day:"Sunday",time:"Closed"}].map(N=>c.jsxs("div",{className:"cp-hours-row",children:[c.jsx("span",{className:"cp-hours-day",children:N.day}),c.jsx("span",{className:"cp-hours-time",children:N.time})]},N.day))]})]})]})]})]})}const il=({children:l})=>c.jsxs(c.Fragment,{children:[c.jsx(Q4,{}),c.jsx("main",{children:l}),c.jsx(W4,{})]});function ES(){return c.jsxs(Mv,{children:[c.jsx(Pa,{path:"/",element:c.jsx(X4,{})}),c.jsx(Pa,{path:"/courses",element:c.jsx(il,{children:c.jsx(iS,{})})}),c.jsx(Pa,{path:"/courses/:id",element:c.jsx(il,{children:c.jsx(dS,{})})}),c.jsx(Pa,{path:"/about",element:c.jsx(il,{children:c.jsx(bS,{})})}),c.jsx(Pa,{path:"/faculty",element:c.jsx(il,{children:c.jsx(jS,{})})}),c.jsx(Pa,{path:"/contact",element:c.jsx(il,{children:c.jsx(CS,{})})}),c.jsx(Pa,{path:"*",element:c.jsx(il,{children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",fontFamily:"DM Sans, sans-serif",gap:16,textAlign:"center",padding:"0 24px"},children:[c.jsx("div",{style:{fontSize:"5rem",fontWeight:700,color:"#e2e8f0"},children:"404"}),c.jsx("div",{style:{fontSize:"1.4rem",fontWeight:600,color:"#0c1a2e"},children:"Page not found"}),c.jsx("div",{style:{fontSize:"0.9rem",color:"#94a3b8",fontWeight:300},children:"The page you're looking for doesn't exist."}),c.jsx("a",{href:"/",style:{marginTop:8,padding:"11px 26px",borderRadius:"100px",background:"#0e7490",color:"#fff",textDecoration:"none",fontSize:"0.88rem",fontWeight:500},children:"Back to Home"})]})})})]})}Rm.createRoot(document.getElementById("root")).render(c.jsx(ex,{children:c.jsx(L0,{afterSignOutUrl:"/",children:c.jsx(ES,{})})}));
