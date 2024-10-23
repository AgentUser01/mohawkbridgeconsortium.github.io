}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
(function($) {
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
        if (window.navigator.msPointerEnabled)
        $window.on('mousewheel DOMMouseScroll', function(e) {
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                view = $window.height();
                    root = (root + view) >= $document.height() ? root : root += step;
                $body.stop().animate({
                view = $window.width();
                    root = (root + view) >= $document.width() ? root : root += step;
                $body.stop().animate({
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
(function ($) {
  var testElement = document.createElement('_');
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
  // much faster than $.val()
    _set: $.valHooks.select.set
  $.valHooks.select.set = function (elem, value) {
    if (value && !valHooks.useDefault) $(elem).data('selected', true);
  $.fn.triggerNative = function (eventName) {
        event = document.createEvent('Event');
      event = document.createEventObject();
    $.each(rExps, function () {
    version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
      'If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.'
  var REGEXP_TAB_OR_ESCAPE = new RegExp('^' + keyCodes.TAB + '$|' + keyCodes.ESCAPE);
      $.valHooks.select.set = valHooks._set;
    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
      this.options.title = this.$element.attr('title');
    // Format window padding
    var winPad = this.options.windowPadding;
      this.options.windowPadding = [winPad, winPad, winPad, winPad];
    windowPadding: 0,
          id = this.$element.attr('id');
      this.$element.addClass('bs-select-hidden');
      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');
      this.$newElement = this.createDropdown();
      this.$element
        .after(this.$newElement)
        .prependTo(this.$newElement);
      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children(Selector.MENU);
      this.$menuInner = this.$menu.children('.inner');
      this.$searchbox = this.$menu.find('input');
      this.$element.removeClass('bs-select-hidden');
      if (this.options.dropdownAlignRight === true) this.$menu.addClass(classNames.MENURIGHT);
        this.$button.attr('data-id', id);
        this.$element.on('hide.bs.select', function () {
            var menuInner = that.$menuInner[0],
            // replace the existing UL with an empty one - this is faster than $.empty() or innerHTML = ''
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      this.$newElement.on({
          that.$menuInner.attr('aria-expanded', false);
          that.$element.trigger('hide.bs.select', e);
          that.$element.trigger('hidden.bs.select', e);
          that.$menuInner.attr('aria-expanded', true);
          that.$element.trigger('show.bs.select', e);
          that.$element.trigger('shown.bs.select', e);
      if (that.$element[0].hasAttribute('required')) {
        this.$element.on('invalid', function () {
          that.$button.addClass('bs-invalid');
          that.$element.on({
              that.$element
                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
              if (this.validity.valid) that.$button.removeClass('bs-invalid');
              that.$element.off('rendered.bs.select');
          that.$button.on('blur.bs.select', function () {
            that.$element.focus().blur();
            that.$button.off('blur.bs.select');
        that.$element.trigger('loaded.bs.select');
      return $(drop);
      var $lis;
      this.$menuInner.off('scroll.createView').on('scroll.createView', function (e, updateValue) {
          if (that.sizeInfo.hasScrollBar && that.$menu[0].offsetWidth > that.sizeInfo.totalMenuWidth) {
            that.sizeInfo.menuWidth = that.$menu[0].offsetWidth;
            that.$menu.css('min-width', that.sizeInfo.menuWidth);
            var menuInner = that.$menuInner[0],
                menuFragment = document.createDocumentFragment(),
            // replace the existing UL with an empty one - this is faster than $.empty()
          that.$menuInner.focus();
      $(window).off('resize.createView').on('resize.createView', function () {
        scroll(that.$menuInner[0].scrollTop);
      if (!this.selectpicker.view.titleOption) this.selectpicker.view.titleOption = document.createElement('option');
          span: document.createElement('span'),
          subtext: document.createElement('small'),
          a: document.createElement('a'),
          li: document.createElement('li'),
          whitespace: document.createTextNode("\u00A0")
        fragment = document.createDocumentFragment();
        var element = this.$element[0],
          var $opt = $(element.options[element.selectedIndex]);
          isSelected = $opt.attr('selected') === undefined && this.$element.data('selected') === undefined;
      var $selectOptions = this.$element.find('option');
      $selectOptions.each(function (index) {
        var $this = $(this);
        if ($this.hasClass('bs-title-option')) return;
        var thisData = $this.data();
            $parent = $this.parent(),
            parent = $parent[0],
        var parentData = $parent.data();
          $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));
              var prevHidden = $selectOptions[prevHiddenIndex].previousElementSibling;
              var $options = $parent.children();
              $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
            if ($parent.data('allOptionsDisabled')) {
              var prevHidden = $selectOptions[prevHiddenIndex].previousElementSibling;
      return this.$menuInner.find('.inner > li');
          $selectOptions = this.$element.find('option'),
            option = $selectOptions[index];
        this.options.title = this.$element.attr('title');
      this.$button[0].title = htmlUnescape(title.replace(/<[^>]*>?/g, '').trim());
      this.$button.find('.filter-option-inner-inner')[0].innerHTML = title;
      this.$element.trigger('rendered.bs.select');
      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
        this.$button.addClass(buttonClass);
        this.$button.removeClass(buttonClass);
        this.$button.removeClass(this.options.style);
        this.$button.addClass(buttonClass);
      var newElement = document.createElement('div'),
          menu = document.createElement('div'),
          menuInner = document.createElement('div'),
          menuInnerInner = document.createElement('ul'),
          divider = document.createElement('li'),
          dropdownHeader = document.createElement('li'),
          li = document.createElement('li'),
          a = document.createElement('a'),
          text = document.createElement('span'),
          header = this.options.header && this.$menu.find('.' + classNames.POPOVERHEADER).length > 0 ? this.$menu.find('.' + classNames.POPOVERHEADER)[0].cloneNode(true) : null,
          search = this.options.liveSearch ? document.createElement('div') : null,
          actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
          doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;
      this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;
      a.className = 'dropdown-item ' + this.$element.find('option')[0].className;
      newElement.className = this.$menu[0].parentNode.className + ' ' + classNames.SHOW;
      text.appendChild(document.createTextNode('Inner text'));
        var input = document.createElement('input');
      document.body.appendChild(newElement);
          dividerHeight = $(divider).outerHeight(true),
          menuStyle = window.getComputedStyle ? window.getComputedStyle(menu) : false,
          $menu = menuStyle ? null : $(menu),
            vert: toInteger(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
                  toInteger(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
                  toInteger(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
                  toInteger(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
            horiz: toInteger(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
                  toInteger(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
                  toInteger(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
                  toInteger(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
                  toInteger(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
                  toInteger(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
                  toInteger(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
                  toInteger(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
      document.body.removeChild(newElement);
      this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;
          $window = $(window),
          pos = that.$newElement.offset(),
          $container = $(that.options.container),
      if (that.options.container && !$container.is('body')) {
        containerPos = $container.offset();
        containerPos.top += parseInt($container.css('borderTopWidth'));
        containerPos.left += parseInt($container.css('borderLeftWidth'));
      var winPad = that.options.windowPadding;
      this.sizeInfo.selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
      this.sizeInfo.selectOffsetBot = $window.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo['selectHeight'] - containerPos.top - winPad[2];
      this.sizeInfo.selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
      this.sizeInfo.selectOffsetRight = $window.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo['selectWidth'] - containerPos.left - winPad[1];
        this.$newElement.toggleClass(classNames.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && estimate + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot);
        if (this.$newElement.hasClass(classNames.DROPUP)) {
        this.$menu.toggleClass(classNames.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < (this.$menu[0].offsetWidth - selectWidth));
      this.$menu.css({
      this.$menuInner.css({
        this.$menu.css('min-width', this.sizeInfo.totalMenuWidth);
      if (this.options.header) this.$menu.css('padding-top', 0);
          $window = $(window),
        this.$searchbox.off('input.setMenuSize propertychange.setMenuSize').on('input.setMenuSize propertychange.setMenuSize', function() {
        $window.off('resize.setMenuSize scroll.setMenuSize').on('resize.setMenuSize scroll.setMenuSize', function() {
        this.$searchbox.off('input.setMenuSize propertychange.setMenuSize');
        $window.off('resize.setMenuSize scroll.setMenuSize');
        offset = this.$menuInner[0].scrollTop;
        selectedIndex = that.selectpicker.main.map.newIndex[that.$element[0].selectedIndex];
          that.$menu.css('min-width', '0');
          var $selectClone = that.$newElement.clone().appendTo('body'),
              btnWidth = $selectClone.css('width', 'auto').children('button').outerWidth();
          $selectClone.remove();
          that.$newElement.css('width', that.sizeInfo.selectWidth + 'px');
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement.removeClass('fit-width');
      this.$bsContainer = $('<div class="bs-container" />');
          $container = $(this.options.container),
          getPlacement = function ($element) {
                display = that.options.display || $.fn.dropdown.Constructor.Default.display;
            that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass(classNames.DROPUP, $element.hasClass(classNames.DROPUP));
            pos = $element.offset();
            if (!$container.is('body')) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
              containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
            actualHeight = $element.hasClass(classNames.DROPUP) ? 0 : $element[0].offsetHeight;
            containerPosition['width'] = $element[0].offsetWidth;
            that.$bsContainer.css(containerPosition);
      this.$button.on('click.bs.dropdown.data-api', function () {
        getPlacement(that.$newElement);
        that.$bsContainer
          .toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW))
          .append(that.$menu);
      $(window).on('resize scroll', function () {
        getPlacement(that.$newElement);
      this.$element.on('hide.bs.select', function () {
        that.$menu.data('height', that.$menu.height());
        that.$bsContainer.detach();
          $selectOptions = this.$element.find('option');
          var index = that.selectpicker.current.map.originalIndex[i + that.selectpicker.view.position0], // faster than $(li).data('originalIndex')
              option = $selectOptions[index];
      return this.$element[0].disabled;
        this.$newElement.addClass(classNames.DISABLED);
        this.$button.addClass(classNames.DISABLED).attr('tabindex', -1).attr('aria-disabled', true);
        if (this.$button.hasClass(classNames.DISABLED)) {
          this.$newElement.removeClass(classNames.DISABLED);
          this.$button.removeClass(classNames.DISABLED).attr('aria-disabled', false);
        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
      this.$button.click(function () {
      // much faster than calling $.val()
      var element = this.$element[0],
      this.$button.toggleClass('bs-placeholder', nothingSelected);
      if (this.$element.data('tabindex') !== this.$element.attr('tabindex') && 
        (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      this.$element.attr('tabindex', -98);
          $document = $(document);
      $document.data('spaceSelect', false);
      this.$button.on('keyup', function (e) {
        if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
            $document.data('spaceSelect', false);
      this.$newElement.on('show.bs.dropdown', function() {
          that.dropdown = that.$button.data('bs.dropdown');
          that.dropdown._menu = that.$menu[0];
      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!that.$newElement.hasClass(classNames.SHOW)) {
          that.$searchbox.focus();
          that.$menuInner.focus();
      this.$element.on('shown.bs.select', function () {
        if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
          that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
      this.$menuInner.on('click', 'li a', function (e, retainActive) {
        var $this = $(this),
            clickedIndex = that.selectpicker.current.map.originalIndex[$this.parent().index() + position0],
            prevValue = getSelectValues(that.$element[0]),
            prevIndex = that.$element.prop('selectedIndex'),
        if (!that.isDisabled() && !$this.parent().hasClass(classNames.DISABLED)) {
          var $options = that.$element.find('option'),
              $option = $options.eq(clickedIndex),
              state = $option.prop('selected'),
              $optgroup = $option.parent('optgroup'),
              $optgroupOptions = $optgroup.find('option'),
              maxOptionsGrp = $optgroup.data('maxOptions') || false;
            $options.prop('selected', false);
            $option.prop('selected', true);
            $option.prop('selected', !state);
            $this.blur();
              var maxReached = maxOptions < $options.filter(':selected').length,
                  maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;
                  $options.prop('selected', false);
                  $option.prop('selected', true);
                  for (var i = 0; i < $options.length; i++) {
                  $optgroup.find('option:selected').prop('selected', false);
                  $option.prop('selected', true);
                  for (var i = 0; i < $optgroupOptions.length; i++) {
                    var option = $optgroupOptions[i];
                    that.setSelected($options.index(option), false);
                      $notify = $('<div class="notify"></div>');
                  $option.prop('selected', false);
                  that.$menu.append($notify);
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    that.$element.trigger('maxReached.bs.select');
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    that.$element.trigger('maxReachedGrp.bs.select');
                  $notify.delay(750).fadeOut(300, function () {
                    $(this).remove();
            that.$button.focus();
            that.$searchbox.focus();
            if ((prevValue != getSelectValues(that.$element[0]) && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
              // $option.prop('selected') is current option state (selected/unselected). prevValue is the value of the select prior to being changed.
              changed_arguments = [clickedIndex, $option.prop('selected'), prevValue];
              that.$element
      this.$menu.on('click', 'li.' + classNames.DISABLED + ' a, .' + classNames.POPOVERHEADER + ', .' + classNames.POPOVERHEADER + ' :not(.close)', function (e) {
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.focus();
            that.$button.focus();
      this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
          that.$searchbox.focus();
          that.$button.focus();
      this.$menu.on('click', '.' + classNames.POPOVERHEADER + ' .close', function () {
        that.$button.click();
      this.$searchbox.on('click', function (e) {
      this.$menu.on('click', '.actions-btn', function (e) {
          that.$searchbox.focus();
          that.$button.focus();
        if ($(this).hasClass('bs-select-all')) {
      this.$element.on({
          that.$element.trigger('changed.bs.select', changed_arguments);
          that.$button.focus();
          no_results = document.createElement('li');
      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
      this.$searchbox.on('click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api', function (e) {
      this.$searchbox.on('input propertychange', function () {
        var searchValue = that.$searchbox.val();
          that._$lisSelected = that.$menuInner.find('.selected');
          that.$menuInner.scrollTop(0);
            that.$menuInner[0].firstChild.appendChild(no_results);
          that.$menuInner.scrollTop(0);
        this.$element
        return this.$element;
        return this.$element.val();
      var $selectOptions = this.$element.find('option'),
          prevValue = getSelectValues(this.$element[0]);
      this.$element.addClass('bs-select-hidden');
            index = this.selectpicker.current.map.originalIndex[i], // faster than $(li).data('originalIndex')
            option = $selectOptions[index];
      this.$element.removeClass('bs-select-hidden');
      this.$element
      e = e || window.event;
      this.$button.trigger('click.bs.dropdown.data-api');
      var $this = $(this),
          isToggle = $this.hasClass('dropdown-toggle'),
          $parent = isToggle ? $this.closest('.dropdown') : $this.closest(Selector.MENU),
          that = $parent.data('this'),
          $items = that.findLis(),
          scrollTop = that.$menuInner[0].scrollTop,
      isActive = that.$newElement.hasClass(classNames.SHOW);
        that.$button.trigger('click.bs.dropdown.data-api');
        that.$button.trigger('click.bs.dropdown.data-api').focus();
        if (!$items.length) return;
        // $items.index/.filter is too slow with a large list and no virtual scroll
        index = isVirtual === true ? $items.index($items.filter('.active')) : that.selectpicker.current.map.newIndex[that.activeIndex];
          if (index + position0 < 0) index += $items.length;
            if (index === -1) index = $items.length - 1;
          if (position0 === 0 && index === $items.length - 1) {
            that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;
            that.$menuInner[0].scrollTop = 0;
        if (updateScroll) that.$menuInner[0].scrollTop = offset;
          that.$searchbox.focus();
          $this.focus();
        !$this.is('input') &&
        if (/^(.)\1+$/.test(keyHistory)) {
          $items.removeClass('active').find('a').removeClass('active');
          if (updateScroll) that.$menuInner[0].scrollTop = offset;
          $this.focus();
          that.$menuInner.find('.active a').trigger('click', true); // retain active class
          $this.focus();
            $(document).data('spaceSelect', true);
      this.$element.addClass('mobile-device');
      var config = $.extend({}, this.options, this.$element.data());
      this.$element.trigger('refreshed.bs.select');
      this.$newElement.hide();
      this.$newElement.show();
      this.$newElement.remove();
      this.$element.remove();
      this.$newElement.before(this.$element).remove();
      if (this.$bsContainer) {
        this.$bsContainer.remove();
        this.$menu.remove();
      this.$element
        version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
          config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), $this.data().template, options.template);
          $this.data('selectpicker', (data = new Selectpicker(this, config)));
  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
  $(document)
  $(window).on('load.bs.select.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
!function(a){var b;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(a){return a.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function c(d){function e(){}function f(b,c,f){if("undefined"!=typeof document){f=a({path:"/"},e.defaults,f),"number"==typeof f.expires&&(f.expires=new Date(1*new Date+864e5*f.expires)),f.expires=f.expires?f.expires.toUTCString():"";try{var g=JSON.stringify(c);/^[\{\[]/.test(g)&&(c=g)}catch(j){}c=d.write?d.write(c,b):encodeURIComponent(c+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(b+"").replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var h="";for(var i in f)f[i]&&(h+="; "+i,!0!==f[i]&&(h+="="+f[i].split(";")[0]));return document.cookie=b+"="+c+h}}function g(a,c){if("undefined"!=typeof document){for(var e={},f=document.cookie?document.cookie.split("; "):[],g=0;g<f.length;g++){var h=f[g].split("="),i=h.slice(1).join("=");c||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var j=b(h[0]);if(i=(d.read||d)(i,j)||b(i),c)try{i=JSON.parse(i)}catch(k){}if(e[j]=i,a===j)break}catch(k){}}return a?e[a]:e}}return e.set=f,e.get=function(a){return g(a,!1)},e.getJSON=function(a){return g(a,!0)},e.remove=function(b,c){f(b,"",a(c,{expires:-1}))},e.defaults={},e.withConverter=c,e}return c(function(){})});
$(function() {
            window.scrollTo(0, 0);
            smoothScrollTo($(location.hash));
            $('html,body').animate({
$(document).ready(function() {
    $('.lang-change').click(event => {
        window.location = event.target.href + window.location.search;
	$('ul li.dropdown:has(ul)').addClass('has-child');
	$(".navbar-brand li a").addClass( "link-underline" );
	if ( $( "#showLeftPush" ).length ) {
		$("#showLeftPush").click(function() {
			  $(this).toggleClass( "active" );
			  $(document.body).toggleClass( "cbp-spmenu-push-toright" );
			  $("#cbp-spmenu-s1").toggleClass( "cbp-spmenu-open" );
		$(".close-search-bar").click(function() {
			$("#showLeftPush").removeClass( "active" );
			  $(document.body).removeClass( "cbp-spmenu-push-toright" );
			  $("#cbp-spmenu-s1").removeClass( "cbp-spmenu-open" );
    $(".navbar-nav > li.dropdown > a").after("<div class='dropdown-toggle plus' data-toggle='dropdown'></div>");
    $("p:empty,p:contains('&nbsp;')").css("display", "none"),
        $("p").each(function() {
            var a = $(this);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("navbar-fixed");
            $(".navbar").removeClass("navbar-fixed");
    $(".nav-menu").click(function() {
        $("body").toggleClass('support');
    $('.main-nav .dropdown-menu a').on('click', function(){
    	$("body").toggleClass('support');
        const currentValue = window.sessionStorage.getItem(`slide_${idx}`);
            $(item).on('afterChange', (event, currentSlide) => {
                window.sessionStorage.setItem(`slide_${idx}`, current);
    $(".num-slide").append('<span class="tot">' + x + '</span>');
        $(".num-slide .num").text('0' + currentSlide);
    $(".mobile-select span.text").text($(".nav.dropdown-menu a:first-child").text());
    $(".nav.dropdown-menu a").click(function() {
        $(".mobile-select span.text").text($(this).text());
        $(".nav.dropdown-menu").fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.gotop').addClass('show');
            $('.gotop').removeClass('show');
    $(".gotop").click(function() {
        $("html, body").animate({
    $('.zoom-gallery').magnificPopup({
   	$('.custom-sel').each(function() {
   	  $(this).children('select').css('display', 'none');
   	  var $current = $(this);
   	  $(this).find('option').each(function(i) {
   	      $current.prepend($('<div>', {
   	        class: $current.attr('class').replace(/custom-sel/g, 'sel__box')
   	      var placeholder = $(this).text();
   	      $current.prepend($('<span>', {
   	        class: $current.attr('class').replace(/custom-sel/g, 'sel__placeholder'),
   	    $current.children('div').append($('<span>', {
   	      class: $current.attr('class').replace(/custom-sel/g, 'sel__box__options'),
   	      text: $(this).text()
   	$('.leasing-listing .city-select.custom-sel').click(function(e) {
   			$('.project-type-select.custom-sel').removeClass('active');
   			$(this).toggleClass('active');
   	$('.leasing-listing .project-type-select.custom-sel').click(function(e) {
   			$('.city-select.custom-sel').removeClass('active');
   			$(this).toggleClass('active');
   	$('.land-listing .city-select.custom-sel').click(function(e) {
   			$(this).toggleClass('active');
   	$('.sel__box__options').click(function() {
   	  var txt = $(this).text();
   	  var index = $(this).index();
   	  $(this).siblings('.sel__box__options').removeClass('selected');
   	  $(this).addClass('selected');
   	  var $currentSel = $(this).closest('.custom-sel');
   	  $currentSel.children('.sel__placeholder').text(txt);
   	  $currentSel.children('select').prop('selectedIndex', index + 1);
		if ($(".fixme")[0])  {
		    var fixmeTop = $('.fixme').offset().top;
                $(window).off('scroll');
	        $(window).scroll(function() {
	            var currentScroll = $(window).scrollTop();
	                $('.fixme').addClass('fixed');
	                $('.fixme').removeClass('fixed');
	    const $navFill = $('.nav.nav-fill .nav-link');
	    const navFillCurrent = $navFill.index($navFill.parent().find('.active'));
	    const totalTabs = $navFill.length - 1;
	    const $navDropdown = $('.nav.dropdown-menu .nav-link');
	    $($navFill[changeTabIdx]).tab('show');
	    $($navDropdown[changeTabIdx]).tab('show');
        sessionStorage.setItem('lastTab', $navDropdown[changeTabIdx].hash);
$(function() {
    $('.smooth-scroll').click(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                $('html, body').animate({
$(function() {
        var modal = $(this),
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
$(' a[data-toggle="pill"]').on('click', function(e) {
    const idx = $(' a[data-toggle="pill"]').index(this);
    $(this).tab('show');
    $(`a[href='${currentTab}']`).tab('show')
$(document).ready(function() {
        $(".cover-text").fadeIn().addClass('slide');
    var $loader = $(".loader");
    if ($loader.length) {
        $(".loader").delay(1200).fadeOut(800, addS);
$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
    if ($(window).width() < 992) {
    if ($(window).width() < 792) {
    if ($(window).width() < 575) {
       if ($(window).width() > 791) {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/secondH.png)');
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/second.png)');
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/yearH.png)');
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year.png)');
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year-upH.png)');
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year-up.png)');
     var $curItem = sync2.find('.owl-item.current .item');
     console.log($curItem);
    if ($curItem.hasClass('equal')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/secondH.png)');
    else if ($curItem.hasClass('dw')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/yearH.png)');
    else if ($curItem.hasClass('up')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year-upH.png)');
    var number = $(this).index();
    const $element = $(event.target);
    console.log('click', $element.attr('class'));
//if ( !Cookies.get('popup') ) { setTimeout( function() { $('#exampleModal').modal().on('shown.bs.modal', function() { Cookies.set('popup', 'true', { expires: in30Minutes, path: "/" }); }); }, 600); }
var markerClusterer=function(t){"use strict";function e(t,e){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(s[r[o]]=t[r[o]])}return s}class s{static isAdvancedMarkerAvailable(t){return google.maps.marker&&!0===t.getMapCapabilities().isAdvancedMarkersAvailable}static isAdvancedMarker(t){return google.maps.marker&&t instanceof google.maps.marker.AdvancedMarkerElement}static setMap(t,e){this.isAdvancedMarker(t)?t.map=e:t.setMap(e)}static getPosition(t){if(this.isAdvancedMarker(t)){if(t.position){if(t.position instanceof google.maps.LatLng)return t.position;if(t.position.lat&&t.position.lng)return new google.maps.LatLng(t.position.lat,t.position.lng)}return new google.maps.LatLng(null)}return t.getPosition()}static getVisible(t){return!!this.isAdvancedMarker(t)||t.getVisible()}}class r{constructor(t){let{markers:e,position:s}=t;this.markers=e,s&&(s instanceof google.maps.LatLng?this._position=s:this._position=new google.maps.LatLng(s))}get bounds(){if(0===this.markers.length&&!this._position)return;const t=new google.maps.LatLngBounds(this._position,this._position);for(const e of this.markers)t.extend(s.getPosition(e));return t}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter((t=>s.getVisible(t))).length}push(t){this.markers.push(t)}delete(){this.marker&&(s.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}const o=(t,e,r,o)=>{const n=i(t.getBounds(),e,o);return r.filter((t=>n.contains(s.getPosition(t))))},i=(t,e,s)=>{const{northEast:r,southWest:o}=h(t,e),i=l({northEast:r,southWest:o},s);return c(i,e)},n=(t,e,s)=>{const r=i(t,e,s),o=r.getNorthEast(),n=r.getSouthWest();return[n.lng(),n.lat(),o.lng(),o.lat()]},a=(t,e)=>{const s=(e.lat-t.lat)*Math.PI/180,r=(e.lng-t.lng)*Math.PI/180,o=Math.sin(s/2),i=Math.sin(r/2),n=o*o+Math.cos(t.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*i*i;return 6371*(2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n)))},h=(t,e)=>({northEast:e.fromLatLngToDivPixel(t.getNorthEast()),southWest:e.fromLatLngToDivPixel(t.getSouthWest())}),l=(t,e)=>{let{northEast:s,southWest:r}=t;return s.x+=e,s.y-=e,r.x-=e,r.y+=e,{northEast:s,southWest:r}},c=(t,e)=>{let{northEast:s,southWest:r}=t;const o=e.fromDivPixelToLatLng(r),i=e.fromDivPixelToLatLng(s);return new google.maps.LatLngBounds(o,i)};class u{constructor(t){let{maxZoom:e=16}=t;this.maxZoom=e}noop(t){let{markers:e}=t;return m(e)}}class p extends u{constructor(t){var{viewportPadding:s=60}=t;super(e(t,["viewportPadding"])),this.viewportPadding=60,this.viewportPadding=s}calculate(t){let{markers:e,map:s,mapCanvasProjection:r}=t;return s.getZoom()>=this.maxZoom?{clusters:this.noop({markers:e}),changed:!1}:{clusters:this.cluster({markers:o(s,r,e,this.viewportPadding),map:s,mapCanvasProjection:r})}}}const m=t=>t.map((t=>new r({position:s.getPosition(t),markers:[t]})));function d(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g=function t(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=s.length)return!1;for(o=r;0!=o--;)if(!t(e[o],s[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(s,i[o]))return!1;for(o=r;0!=o--;){var n=i[o];if(!t(e[n],s[n]))return!1}return!0}return e!=e&&s!=s},f=d(g);const k=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class w{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[e,s]=new Uint8Array(t,0,2);if(219!==e)throw new Error("Data does not appear to be in a KDBush format.");const r=s>>4;if(1!==r)throw new Error(`Got v${r} data when expected v1.`);const o=k[15&s];if(!o)throw new Error("Unrecognized array type.");const[i]=new Uint16Array(t,2,1),[n]=new Uint32Array(t,4,1);return new w(n,i,o,t)}constructor(t,e=64,s=Float64Array,r){if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=s,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;const o=k.indexOf(this.ArrayType),i=2*t*this.ArrayType.BYTES_PER_ELEMENT,n=t*this.IndexArrayType.BYTES_PER_ELEMENT,a=(8-n%8)%8;if(o<0)throw new Error(`Unexpected typed array class: ${s}.`);r&&r instanceof ArrayBuffer?(this.data=r,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+n+a,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+i+n+a),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+n+a,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+o]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t)}add(t,e){const s=this._pos>>1;return this.ids[s]=s,this.coords[this._pos++]=t,this.coords[this._pos++]=e,s}finish(){const t=this._pos>>1;if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`);return y(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,s,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:o,coords:i,nodeSize:n}=this,a=[0,o.length-1,0],h=[];for(;a.length;){const l=a.pop()||0,c=a.pop()||0,u=a.pop()||0;if(c-u<=n){for(let n=u;n<=c;n++){const a=i[2*n],l=i[2*n+1];a>=t&&a<=s&&l>=e&&l<=r&&h.push(o[n])}continue}const p=u+c>>1,m=i[2*p],d=i[2*p+1];m>=t&&m<=s&&d>=e&&d<=r&&h.push(o[p]),(0===l?t<=m:e<=d)&&(a.push(u),a.push(p-1),a.push(1-l)),(0===l?s>=m:r>=d)&&(a.push(p+1),a.push(c),a.push(1-l))}return h}within(t,e,s){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:r,coords:o,nodeSize:i}=this,n=[0,r.length-1,0],a=[],h=s*s;for(;n.length;){const l=n.pop()||0,c=n.pop()||0,u=n.pop()||0;if(c-u<=i){for(let s=u;s<=c;s++)C(o[2*s],o[2*s+1],t,e)<=h&&a.push(r[s]);continue}const p=u+c>>1,m=o[2*p],d=o[2*p+1];C(m,d,t,e)<=h&&a.push(r[p]),(0===l?t-s<=m:e-s<=d)&&(n.push(u),n.push(p-1),n.push(1-l)),(0===l?t+s>=m:e+s>=d)&&(n.push(p+1),n.push(c),n.push(1-l))}return a}}function y(t,e,s,r,o,i){if(o-r<=s)return;const n=r+o>>1;M(t,e,n,r,o,i),y(t,e,s,r,n-1,1-i),y(t,e,s,n+1,o,1-i)}function M(t,e,s,r,o,i){for(;o>r;){if(o-r>600){const n=o-r+1,a=s-r+1,h=Math.log(n),l=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*l*(n-l)/n)*(a-n/2<0?-1:1);M(t,e,s,Math.max(r,Math.floor(s-a*l/n+c)),Math.min(o,Math.floor(s+(n-a)*l/n+c)),i)}const n=e[2*s+i];let a=r,h=o;for(v(t,e,r,s),e[2*o+i]>n&&v(t,e,r,o);a<h;){for(v(t,e,a,h),a++,h--;e[2*a+i]<n;)a++;for(;e[2*h+i]>n;)h--}e[2*r+i]===n?v(t,e,r,h):(h++,v(t,e,h,o)),h<=s&&(r=h+1),s<=h&&(o=h-1)}}function v(t,e,s,r){x(t,s,r),x(e,2*s,2*r),x(e,2*s+1,2*r+1)}function x(t,e,s){const r=t[e];t[e]=t[s],t[s]=r}function C(t,e,s,r){const o=t-s,i=e-r;return o*o+i*i}const P={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},_=Math.fround||(E=new Float32Array(1),t=>(E[0]=+t,E[0]));var E;const A=3,b=5,L=6;class O{constructor(t){this.options=Object.assign(Object.create(P),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){const{log:e,minZoom:s,maxZoom:r}=this.options;e&&console.time("total time");const o=`prepare ${t.length} points`;e&&console.time(o),this.points=t;const i=[];for(let e=0;e<t.length;e++){const s=t[e];if(!s.geometry)continue;const[r,o]=s.geometry.coordinates,n=_(T(r)),a=_(j(o));i.push(n,a,1/0,e,-1,1),this.options.reduce&&i.push(0)}let n=this.trees[r+1]=this._createTree(i);e&&console.timeEnd(o);for(let t=r;t>=s;t--){const s=+Date.now();n=this.trees[t]=this._createTree(this._cluster(n,t)),e&&console.log("z%d: %d clusters in %dms",t,n.numItems,+Date.now()-s)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let s=((t[0]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[1]));let o=180===t[2]?180:((t[2]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)s=-180,o=180;else if(s>o){const t=this.getClusters([s,r,180,i],e),n=this.getClusters([-180,r,o,i],e);return t.concat(n)}const n=this.trees[this._limitZoom(e)],a=n.range(T(s),j(i),T(o),j(r)),h=n.data,l=[];for(const t of a){const e=this.stride*t;l.push(h[e+b]>1?Z(h,e,this.clusterProps):this.points[h[e+A]])}return l}getChildren(t){const e=this._getOriginId(t),s=this._getOriginZoom(t),r="No cluster with the specified id.",o=this.trees[s];if(!o)throw new Error(r);const i=o.data;if(e*this.stride>=i.length)throw new Error(r);const n=this.options.radius/(this.options.extent*Math.pow(2,s-1)),a=i[e*this.stride],h=i[e*this.stride+1],l=o.within(a,h,n),c=[];for(const e of l){const s=e*this.stride;i[s+4]===t&&c.push(i[s+b]>1?Z(i,s,this.clusterProps):this.points[i[s+A]])}if(0===c.length)throw new Error(r);return c}getLeaves(t,e,s){e=e||10,s=s||0;const r=[];return this._appendLeaves(r,t,e,s,0),r}getTile(t,e,s){const r=this.trees[this._limitZoom(t)],o=Math.pow(2,t),{extent:i,radius:n}=this.options,a=n/i,h=(s-a)/o,l=(s+1+a)/o,c={features:[]};return this._addTileFeatures(r.range((e-a)/o,h,(e+1+a)/o,l),r.data,e,s,o,c),0===e&&this._addTileFeatures(r.range(1-a/o,h,1,l),r.data,o,s,o,c),e===o-1&&this._addTileFeatures(r.range(0,h,a/o,l),r.data,-1,s,o,c),c.features.length?c:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const s=this.getChildren(t);if(e++,1!==s.length)break;t=s[0].properties.cluster_id}return e}_appendLeaves(t,e,s,r,o){const i=this.getChildren(e);for(const e of i){const i=e.properties;if(i&&i.cluster?o+i.point_count<=r?o+=i.point_count:o=this._appendLeaves(t,i.cluster_id,s,r,o):o<r?o++:t.push(e),t.length===s)break}return o}_createTree(t){const e=new w(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let s=0;s<t.length;s+=this.stride)e.add(t[s],t[s+1]);return e.finish(),e.data=t,e}_addTileFeatures(t,e,s,r,o,i){for(const n of t){const t=n*this.stride,a=e[t+b]>1;let h,l,c;if(a)h=I(e,t,this.clusterProps),l=e[t],c=e[t+1];else{const s=this.points[e[t+A]];h=s.properties;const[r,o]=s.geometry.coordinates;l=T(r),c=j(o)}const u={type:1,geometry:[[Math.round(this.options.extent*(l*o-s)),Math.round(this.options.extent*(c*o-r))]],tags:h};let p;p=a||this.options.generateId?e[t+A]:this.points[e[t+A]].id,void 0!==p&&(u.id=p),i.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const{radius:s,extent:r,reduce:o,minPoints:i}=this.options,n=s/(r*Math.pow(2,e)),a=t.data,h=[],l=this.stride;for(let s=0;s<a.length;s+=l){if(a[s+2]<=e)continue;a[s+2]=e;const r=a[s],c=a[s+1],u=t.within(a[s],a[s+1],n),p=a[s+b];let m=p;for(const t of u){const s=t*l;a[s+2]>e&&(m+=a[s+b])}if(m>p&&m>=i){let t,i=r*p,n=c*p,d=-1;const g=((s/l|0)<<5)+(e+1)+this.points.length;for(const r of u){const h=r*l;if(a[h+2]<=e)continue;a[h+2]=e;const c=a[h+b];i+=a[h]*c,n+=a[h+1]*c,a[h+4]=g,o&&(t||(t=this._map(a,s,!0),d=this.clusterProps.length,this.clusterProps.push(t)),o(t,this._map(a,h)))}a[s+4]=g,h.push(i/m,n/m,1/0,g,-1,m),o&&h.push(d)}else{for(let t=0;t<l;t++)h.push(a[s+t]);if(m>1)for(const t of u){const s=t*l;if(!(a[s+2]<=e)){a[s+2]=e;for(let t=0;t<l;t++)h.push(a[s+t])}}}}return h}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,s){if(t[e+b]>1){const r=this.clusterProps[t[e+L]];return s?Object.assign({},r):r}const r=this.points[t[e+A]].properties,o=this.options.map(r);return s&&o===r?Object.assign({},o):o}}function Z(t,e,s){return{type:"Feature",id:t[e+A],properties:I(t,e,s),geometry:{type:"Point",coordinates:[(r=t[e],360*(r-.5)),S(t[e+1])]}};var r}function I(t,e,s){const r=t[e+b],o=r>=1e4?`${Math.round(r/1e3)}k`:r>=1e3?Math.round(r/100)/10+"k":r,i=t[e+L],n=-1===i?{}:Object.assign({},s[i]);return Object.assign(n,{cluster:!0,cluster_id:t[e+A],point_count:r,point_count_abbreviated:o})}function T(t){return t/360+.5}function j(t){const e=Math.sin(t*Math.PI/180),s=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return s<0?0:s>1?1:s}function S(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}class z extends u{constructor(t){var{maxZoom:s,radius:r=60}=t,o=e(t,["maxZoom","radius"]);super({maxZoom:s}),this.state={zoom:-1},this.superCluster=new O(Object.assign({maxZoom:this.maxZoom,radius:r},o))}calculate(t){let e=!1;const r={zoom:t.map.getZoom()};if(!f(t.markers,this.markers)){e=!0,this.markers=[...t.markers];const r=this.markers.map((t=>{const e=s.getPosition(t);return{type:"Feature",geometry:{type:"Point",coordinates:[e.lng(),e.lat()]},properties:{marker:t}}}));this.superCluster.load(r)}return e||(this.state.zoom<=this.maxZoom||r.zoom<=this.maxZoom)&&(e=!f(this.state,r)),this.state=r,e&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:e}}cluster(t){let{map:e}=t;return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map((t=>this.transformCluster(t)))}transformCluster(t){let{geometry:{coordinates:[e,o]},properties:i}=t;if(i.cluster)return new r({markers:this.superCluster.getLeaves(i.cluster_id,1/0).map((t=>t.properties.marker)),position:{lat:o,lng:e}});const n=i.marker;return new r({markers:[n],position:s.getPosition(n)})}}class U{constructor(t,e){this.markers={sum:t.length};const s=e.map((t=>t.count)),r=s.reduce(((t,e)=>t+e),0);this.clusters={count:e.length,markers:{mean:r/e.length,sum:r,min:Math.min(...s),max:Math.max(...s)}}}}class B{render(t,e,r){let{count:o,position:i}=t;const n=`<svg fill="${o>Math.max(10,e.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">\n<circle cx="120" cy="120" opacity=".6" r="70" />\n<circle cx="120" cy="120" opacity=".3" r="90" />\n<circle cx="120" cy="120" opacity=".2" r="110" />\n<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${o}</text>\n</svg>`,a=`Cluster of ${o} markers`,h=Number(google.maps.Marker.MAX_ZINDEX)+o;if(s.isAdvancedMarkerAvailable(r)){const t=(new DOMParser).parseFromString(n,"image/svg+xml").documentElement;t.setAttribute("transform","translate(0 25)");const e={map:r,position:i,zIndex:h,title:a,content:t};return new google.maps.marker.AdvancedMarkerElement(e)}const l={position:i,zIndex:h,title:a,icon:{url:`data:image/svg+xml;base64,${btoa(n)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(l)}}class D{constructor(){!function(t,e){for(let s in e.prototype)t.prototype[s]=e.prototype[s]}(D,google.maps.OverlayView)}}var N;t.MarkerClustererEvents=void 0,(N=t.MarkerClustererEvents||(t.MarkerClustererEvents={})).CLUSTERING_BEGIN="clusteringbegin",N.CLUSTERING_END="clusteringend",N.CLUSTER_CLICK="click";const F=(t,e,s)=>{s.fitBounds(e.bounds)};return t.AbstractAlgorithm=u,t.AbstractViewportAlgorithm=p,t.Cluster=r,t.ClusterStats=U,t.DefaultRenderer=B,t.GridAlgorithm=class extends p{constructor(t){var{maxDistance:s=4e4,gridSize:r=40}=t;super(e(t,["maxDistance","gridSize"])),this.clusters=[],this.state={zoom:-1},this.maxDistance=s,this.gridSize=r}calculate(t){let{markers:e,map:s,mapCanvasProjection:r}=t;const i={zoom:s.getZoom()};let n=!1;return this.state.zoom>=this.maxZoom&&i.zoom>=this.maxZoom||(n=!f(this.state,i)),this.state=i,s.getZoom()>=this.maxZoom?{clusters:this.noop({markers:e}),changed:n}:{clusters:this.cluster({markers:o(s,r,e,this.viewportPadding),map:s,mapCanvasProjection:r})}}cluster(t){let{markers:e,map:s,mapCanvasProjection:r}=t;return this.clusters=[],e.forEach((t=>{this.addToClosestCluster(t,s,r)})),this.clusters}addToClosestCluster(t,e,o){let n=this.maxDistance,h=null;for(let e=0;e<this.clusters.length;e++){const r=this.clusters[e],o=a(r.bounds.getCenter().toJSON(),s.getPosition(t).toJSON());o<n&&(n=o,h=r)}if(h&&i(h.bounds,o,this.gridSize).contains(s.getPosition(t)))h.push(t);else{const e=new r({markers:[t]});this.clusters.push(e)}}},t.MarkerClusterer=class extends D{constructor(t){let{map:e,markers:s=[],algorithmOptions:r={},algorithm:o=new z(r),renderer:i=new B,onClusterClick:n=F}=t;super(),this.markers=[...s],this.clusters=[],this.algorithm=o,this.renderer=i,this.onClusterClick=n,e&&this.setMap(e)}addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach((t=>{this.addMarker(t,!0)})),e||this.render()}removeMarker(t,e){const r=this.markers.indexOf(t);return-1!==r&&(s.setMap(t,null),this.markers.splice(r,1),e||this.render(),!0)}removeMarkers(t,e){let s=!1;return t.forEach((t=>{s=this.removeMarker(t,!0)||s})),s&&!e&&this.render(),s}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const e=this.getMap();if(e instanceof google.maps.Map&&e.getProjection()){google.maps.event.trigger(this,t.MarkerClustererEvents.CLUSTERING_BEGIN,this);const{clusters:r,changed:o}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});if(o||null==o){const t=new Set;for(const e of r)1==e.markers.length&&t.add(e.markers[0]);const e=[];for(const r of this.clusters)null!=r.marker&&(1==r.markers.length?t.has(r.marker)||s.setMap(r.marker,null):e.push(r.marker));this.clusters=r,this.renderClusters(),requestAnimationFrame((()=>e.forEach((t=>s.setMap(t,null)))))}google.maps.event.trigger(this,t.MarkerClustererEvents.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach((t=>s.setMap(t,null))),this.clusters.forEach((t=>t.delete())),this.clusters=[]}renderClusters(){const e=new U(this.markers,this.clusters),r=this.getMap();this.clusters.forEach((o=>{1===o.markers.length?o.marker=o.markers[0]:(o.marker=this.renderer.render(o,e,r),o.markers.forEach((t=>s.setMap(t,null))),this.onClusterClick&&o.marker.addListener("click",(e=>{google.maps.event.trigger(this,t.MarkerClustererEvents.CLUSTER_CLICK,o),this.onClusterClick(e,o,r)}))),s.setMap(o.marker,r)}))}},t.MarkerUtils=s,t.NoopAlgorithm=class extends u{constructor(t){super(e(t,[]))}calculate(t){let{markers:e,map:s,mapCanvasProjection:r}=t;return{clusters:this.cluster({markers:e,map:s,mapCanvasProjection:r}),changed:!1}}cluster(t){return this.noop(t)}},t.SuperClusterAlgorithm=z,t.SuperClusterViewportAlgorithm=class extends p{constructor(t){var{maxZoom:s,radius:r=60,viewportPadding:o=60}=t,i=e(t,["maxZoom","radius","viewportPadding"]);super({maxZoom:s,viewportPadding:o}),this.superCluster=new O(Object.assign({maxZoom:this.maxZoom,radius:r},i)),this.state={zoom:-1,view:[0,0,0,0]}}calculate(t){const e={zoom:Math.round(t.map.getZoom()),view:n(t.map.getBounds(),t.mapCanvasProjection,this.viewportPadding)};let r=!f(this.state,e);if(!f(t.markers,this.markers)){r=!0,this.markers=[...t.markers];const e=this.markers.map((t=>{const e=s.getPosition(t);return{type:"Feature",geometry:{type:"Point",coordinates:[e.lng(),e.lat()]},properties:{marker:t}}}));this.superCluster.load(e)}return r&&(this.clusters=this.cluster(t),this.state=e),{clusters:this.clusters,changed:r}}cluster(t){let{map:e,mapCanvasProjection:s}=t;const r={zoom:Math.round(e.getZoom()),view:n(e.getBounds(),s,this.viewportPadding)};return this.superCluster.getClusters(r.view,r.zoom).map((t=>this.transformCluster(t)))}transformCluster(t){let{geometry:{coordinates:[e,o]},properties:i}=t;if(i.cluster)return new r({markers:this.superCluster.getLeaves(i.cluster_id,1/0).map((t=>t.properties.marker)),position:{lat:o,lng:e}});const n=i.marker;return new r({markers:[n],position:s.getPosition(n)})}},t.defaultOnClusterClickHandler=F,t.distanceBetweenPoints=a,t.extendBoundsToPaddedViewport=i,t.extendPixelBounds=l,t.filterMarkersToPaddedViewport=o,t.getPaddedViewport=n,t.noop=m,t.pixelBoundsToLatLngBounds=c,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.min.js.map