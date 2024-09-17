(self.webpackChunkcherry_ui=self.webpackChunkcherry_ui||[]).push([[344],{5989:function(d,e,n){"use strict";var c,u;n.r(e),n.d(e,{demos:function(){return s}});var i=n(17061),l=n.n(i),r=n(17156),h=n.n(r),a=n(67294),E=n(15577),_=n(2595),t=n(73935),v=n(62097),s={"src-back-top-demo-base":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,79318))})),asset:{type:"BLOCK",id:"src-back-top-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(76762).Z},react:{type:"NPM",value:"18.3.1"},"../BackTop.tsx":{type:"FILE",value:n(75779).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:n(97848).Z}},entry:"index.tsx"},context:{react:c||(c=n.t(a,2)),"/home/runner/work/cherry-ui/cherry-ui/src/BackTop/BackTop.tsx":_,"react-dom":u||(u=n.t(t,2)),"/home/runner/work/cherry-ui/cherry-ui/src/BackTop/index.less":v},renderOpts:{compile:function(){var p=h()(l()().mark(function T(){var m,I=arguments;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(335).then(n.bind(n,37335));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,I));case 3:case"end":return o.stop()}},T)}));function y(){return p.apply(this,arguments)}return y}()}},"src-back-top-demo-observe":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,18893))})),asset:{type:"BLOCK",id:"src-back-top-demo-observe",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(49482).Z},react:{type:"NPM",value:"18.3.1"},"../BackTop.tsx":{type:"FILE",value:n(75779).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:n(97848).Z}},entry:"index.tsx"},context:{react:c||(c=n.t(a,2)),"/home/runner/work/cherry-ui/cherry-ui/src/BackTop/BackTop.tsx":_,"react-dom":u||(u=n.t(t,2)),"/home/runner/work/cherry-ui/cherry-ui/src/BackTop/index.less":v},renderOpts:{compile:function(){var p=h()(l()().mark(function T(){var m,I=arguments;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(335).then(n.bind(n,37335));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,I));case 3:case"end":return o.stop()}},T)}));function y(){return p.apply(this,arguments)}return y}()}}}},2595:function(d,e,n){"use strict";n.r(e);var c=n(74704),u=n.n(c),i=n(27424),l=n.n(i),r=n(67294),h=n(73935),a=n(62097),E=n(85893);function _(t){var v=t.children,s=t.scrollTop,p=s===void 0?0:s,y=t.smooth,T=y===void 0?"smooth":y,m=t.top,I=m===void 0?"auto":m,b=t.right,o=b===void 0?"auto":b,w=t.bottom,U=w===void 0?"auto":w,L=t.left,W=L===void 0?"auto":L,C=t.observedId,O=C===void 0?"":C,x=t.withObserve,k=x===void 0?!0:x,S=(0,r.useState)(!1),g=l()(S,2),R=g[0],P=g[1];function $(f){f.stopPropagation(),window.scrollTo({top:0,behavior:T})}function M(){if(!O){var f=window.scrollY>=p;f!==R&&P(f)}}(0,r.useEffect)(function(){O||window.scrollY>=p&&P(!0)},[]),(0,r.useEffect)(function(){if(!O)return window.addEventListener("scroll",M),function(){window.removeEventListener("scroll",M)}},[M]),(0,r.useEffect)(function(){if(O){var f=document.getElementById(O),A=new IntersectionObserver(function(Z){var B=u()(Z),K;try{for(B.s();!(K=B.n()).done;){var D=K.value;if(D.target===f){var F=k?D.isIntersecting:!D.isIntersecting;P(F)}}}catch(N){B.e(N)}finally{B.f()}});return A.observe(f),function(){A.disconnect()}}},[]);var j=(0,h.createPortal)((0,E.jsx)("div",{className:"cu-backtop",onClick:$,style:{top:I,right:o,bottom:U,left:W},children:v}),document.body);return R?j:null}e.default=_},62097:function(d,e,n){"use strict";n.r(e)},90807:function(d,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return u}});var c=n(15577);const u=[]},75779:function(d,e){"use strict";e.Z=`import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';

interface IProps {
  children: React.ReactNode;
  // \u8DDD\u79BB\u9876\u90E8\u591A\u5C11\u65F6\u663E\u793A
  scrollTop?: number;
  // \u662F\u5426\u5E73\u6ED1\u6EDA\u52A8
  smooth?: 'smooth' | 'auto';
  top?: number | 'auto';
  right?: number | 'auto';
  bottom?: number | 'auto';
  left?: number | 'auto';
  // \u88AB\u89C2\u5BDF\u5143\u7D20\u7684id
  observedId?: string;
  // \u662F\u5426\u968F\u89C2\u5BDF\u5143\u7D20\u51FA\u73B0\u800C\u51FA\u73B0
  withObserve?: boolean;
}
function BackTop({
  children,
  scrollTop = 0,
  smooth = 'smooth',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  observedId = '',
  withObserve = true,
}: IProps) {
  const [isShow, setIsShow] = useState(false);

  function scrollTo(e: React.MouseEvent<HTMLDivElement>) {
    // \u5373\u4F7Fportal\uFF0C\u4E5F\u9700\u8981\u963B\u6B62\u5192\u6CE1\uFF0CReact\u4E8B\u4EF6\u662F\u6309\u7167\u7EC4\u4EF6\u6811\u6765\u4F20\u9012\u7684\uFF0C\u5E76\u975E\u5B9E\u9645\u7684DOM\u6811
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: smooth,
    });
  }

  // \u6EDA\u52A8\u63A7\u5236\u663E\u793A
  function showControl() {
    if (observedId) return;
    const isBeyond = window.scrollY >= scrollTop;
    if (isBeyond !== isShow) {
      setIsShow(isBeyond);
    }
  }

  // \u521D\u59CB\u5316\u65F6\uFF0C\u5982\u679C\u5DF2\u7ECF\u8D85\u8FC7scrollTop\uFF0C\u5219\u663E\u793A
  useEffect(() => {
    if (observedId) return;
    if (window.scrollY >= scrollTop) {
      setIsShow(true);
    }
  }, []);

  // \u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6
  useEffect(() => {
    if (observedId) return;
    window.addEventListener('scroll', showControl);
    return () => {
      window.removeEventListener('scroll', showControl);
    };
  }, [showControl]);

  useEffect(() => {
    if (!observedId) return;
    const ele = document.getElementById(observedId);
    const observer = new IntersectionObserver((entry) => {
      for (const e of entry) {
        if (e.target === ele) {
          const isShow = withObserve ? e.isIntersecting : !e.isIntersecting;
          setIsShow(isShow);
        }
      }
    });
    observer.observe(ele!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const portal = createPortal(
    <div
      className="cu-backtop"
      onClick={scrollTo}
      style={{ top, right, bottom, left }}
    >
      {children}
    </div>,
    document.body,
  );

  return isShow ? portal : null;
}

export default BackTop;
`},76762:function(d,e){"use strict";e.Z=`import React from 'react';
import BackTop from '../BackTop';

function Base() {
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      {/* <div className={styles.outer}> */}
      <BackTop scrollTop={100} smooth="smooth" right={20} bottom={20}>
        <div style={{ color: 'purple' }}>\u8FD4\u56DE\u9876\u90E8</div>
      </BackTop>
      {/* </div> */}
    </>
  );
}

export default Base;
`},49482:function(d,e){"use strict";e.Z=`import React from 'react';
import BackTop from '../BackTop';

function Observe() {
  return (
    <>
      <div id="observe-1">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>
        <BackTop
          smooth="smooth"
          left={20}
          bottom={20}
          observedId="observe-1"
          withObserve={false}
        >
          <div style={{ color: 'red' }}>\u8FD4\u56DE\u9876\u90E8Left</div>
        </BackTop>
      </div>
    </>
  );
}

export default Observe;
`},97848:function(d,e){"use strict";e.Z=`.cu {
  &-backtop {
    position: fixed;
    z-index: 1000;
  }
}
`},74704:function(d,e,n){var c=n(86116);function u(i,l){var r=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!r){if(Array.isArray(i)||(r=c(i))||l&&i&&typeof i.length=="number"){r&&(i=r);var h=0,a=function(){};return{s:a,n:function(){return h>=i.length?{done:!0}:{done:!1,value:i[h++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,_=!1,t;return{s:function(){r=r.call(i)},n:function(){var s=r.next();return E=s.done,s},e:function(s){_=!0,t=s},f:function(){try{!E&&r.return!=null&&r.return()}finally{if(_)throw t}}}}d.exports=u,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
