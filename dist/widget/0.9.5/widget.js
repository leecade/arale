define("#widget/0.9.5/widget",["base","$","./daparser"],function(a,b,c){function k(a){return j.call(a)==="[object String]"}function l(a){return j.call(a)==="[object Function]"}function m(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")}function o(a,b){var c=p(a,b.cid),d;return(d=n[c])?d:(d=function(c){l(a)?a.call(b,c):b[a](c)},n[c]=d,d)}function p(a,b){var c;k(a)?c=a:l(a)&&l(a.toString)&&(c=a.toString().replace(/\s+/g,""));if(c)return b+"-"+c;throw'"handler" must be a string or a function'}function r(){return"widget-"+q++}function s(a,b){for(var c in a){var d=m(c).split(/\s*,\s*/),e=a[c];while(c=d.shift()){var f=c.split(/\s+/),g=f[0],h=f[1];h||(h=g,g="click"),b[g+" "+e]=h}}}function t(a){return l(a.events)&&(a.events=a.events()),a.events}function u(a,b){var c=a.match(g),d=c[1]+h+b.cid,e=c[2]||"";return e.indexOf("{{")>-1&&(e=x(e,b)),{type:d,selector:e}}function x(a,b){return a.replace(v,function(a,c){var d=c.split("."),e=b,f;while(f=d.shift())e===b.attrs?e=b.get(f):e=e[f];return e?k(e)&&e.indexOf(".")===0?e:y(e):w})}function y(a){var b=e(a)[0];if(!b||b.nodeType!==1)throw"This element is not a valid DOM element: "+a;return"."+f.stamp(b)}function z(a){return e.contains(document.documentElement,a)}var d=a("base"),e=a("$"),f=a("./daparser"),g=/^(\S+)\s*(.*)$/,h=".delegate-events-",i=d.extend({propertiesInConfig:["element","model","events"],attrs:{template:"<div></div>",parentNode:document.body,"data-api":!0},events:null,initialize:function(a){this.cid=r(),i.superclass.initialize.call(this,a),this.parseElement(),this.parseDataAttrs(),this.initProps(),this.delegateEvents(),this.setup()},parseElement:function(){var a=this.element;a?this.element=e(a):this.get("template")&&this.parseElementFromTemplate();if(!this.element||!this.element[0])throw"element is invalid"},parseElementFromTemplate:function(){this.element=e(this.get("template"))},parseDataAttrs:function(){if(this.get("data-api")){this.dataset=f.parse(this.element[0]);var a=this.dataset.action;if(a){var b=t(this)||(this.events={});s(a,b)}}},initProps:function(){},delegateEvents:function(a,b){a||(a=t(this));if(!a)return;if(k(a)&&l(b)){var c={};c[a]=b,a=c}for(var d in a){var e=u(d,this);b=o(a[d],this),e.selector!==w&&this.element.on(e.type,e.selector,b)}return this},undelegateEvents:function(a,b){var c=this.cid,d={};arguments.length===0?d.type=h+c:d=u(a,this);if(b){var e=p(b,c);b=n[e]}return this.element.off(d.type,d.selector,b),this},setup:function(){},render:function(){this.change();var a=this.get("parentNode");return a&&!z(this.element[0])&&this.element.appendTo(a),this},$:function(a){return this.element.find(a)},destroy:function(){this.undelegateEvents(),i.superclass.destroy.call(this)}});c.exports=i;var j=Object.prototype.toString,n={},q=0,v=/\{\{([^\}]+)\}\}/g,w={}});