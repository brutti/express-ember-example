"use strict"
define("ember-app/app",["exports","ember-app/resolver","ember-load-initializers","ember-app/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("ember-app/helpers/app-version",["exports","ember-app/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,r=a.versionOnly||a.hideSha,i=a.shaOnly||a.hideVersion,l=null
return r&&(a.showExtended&&(l=o.match(n.versionExtendedRegExp)),l||(l=o.match(n.versionRegExp))),i&&(l=o.match(n.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=Ember.Helper.helper(a)}),define("ember-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-app/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,o=void 0
n.default.APP&&(a=n.default.APP.name,o=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(a,o)}}),define("ember-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-app/initializers/export-application-global",["exports","ember-app/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,o=t.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-app/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-app/models/quote",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Model.extend({quote:t.default.attr("string"),author:t.default.attr("string")})}),define("ember-app/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-app/router",["exports","ember-app/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("quotes",function(){this.route("new")})}),e.default=n}),define("ember-app/routes/quotes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return this.store.findAll("quote")}})}),define("ember-app/routes/quotes/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return this.store.createRecord("quote")},actions:{saveQuote:function(e){var t=this
e.save().then(function(){t.transitionTo("quotes")}).catch(function(e){console.log(e)})},abortQuote:function(){this.transitionTo("quotes")},willTransition:function(e){var t=this.controller.get("model")
t.get("hasDirtyAttributes")&&(confirm("Your changes haven't saved yet. Would you like to leave this form?")?t.rollbackAttributes():e.abort())}}})}),define("ember-app/serializers/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.RESTSerializer.extend({primaryKey:"_id"})}),define("ember-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-app/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"L+JZyqmH",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","container"],[8],[0,"\\n  "],[6,"h2"],[10,"id","title"],[8],[0,"Welcome to Express + Ember.js"],[9],[0,"\\n  "],[1,[20,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-app/templates/application.hbs"}})}),define("ember-app/templates/quotes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"sUOV6PPk",block:'{"symbols":["quote"],"statements":[[6,"h2"],[8],[0,"Quotes:"],[9],[0,"\\n\\n"],[6,"div"],[10,"class","row"],[8],[0,"\\n  "],[6,"div"],[10,"class","col-lg-12 col-md-12 col-sm-12"],[8],[0,"\\n"],[4,"link-to",["quotes.new"],[["tagName","class"],["button","btn btn-primary pull-right"]],{"statements":[[0,"      "],[6,"span"],[10,"class","glyphicon glyphicon-plus"],[8],[9],[0," New quote\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[4,"each",[[22,["model"]]],null,{"statements":[[0,"  "],[6,"blockquote"],[8],[0,"\\n    "],[6,"p"],[8],[1,[21,1,["quote"]],false],[9],[0,"\\n    "],[6,"small"],[10,"class","author"],[8],[0,"Author: "],[1,[21,1,["author"]],false],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"ember-app/templates/quotes/index.hbs"}})}),define("ember-app/templates/quotes/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"f1PVxmfk",block:'{"symbols":[],"statements":[[6,"form"],[8],[0,"\\n  "],[6,"legend"],[8],[0,"New quote: "],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","col-sm-6 col-md-6 col-sm-6"],[8],[0,"\\n      "],[6,"div"],[10,"class","form-group"],[8],[0,"\\n        "],[6,"label"],[10,"for","quote-author"],[8],[0,"Author"],[9],[0,"\\n        "],[1,[26,"input",null,[["class","value","type"],["form-control",[22,["model","author"]],"text"]]],false],[0,"\\n      "],[9],[0,"\\n\\n      "],[6,"div"],[10,"class","form-group"],[8],[0,"\\n        "],[6,"label"],[10,"for","quote-quote"],[8],[0,"Quote"],[9],[0,"\\n        "],[1,[26,"textarea",null,[["class","value","rows","type"],["form-control",[22,["model","quote"]],"5","text"]]],false],[0,"\\n      "],[9],[0,"\\n\\n      "],[6,"button"],[10,"class","btn btn-success"],[10,"type","button"],[3,"action",[[21,0,[]],"saveQuote",[22,["model"]]]],[8],[0,"\\n        "],[6,"span"],[10,"class","glyphicon glyphicon-floppy-disk"],[8],[9],[0," Save\\n      "],[9],[0,"\\n\\n      "],[6,"button"],[10,"class","btn btn-danger"],[10,"type","button"],[3,"action",[[21,0,[]],"abortQuote"]],[8],[0,"\\n        "],[6,"span"],[10,"class","glyphicon glyphicon-trash"],[8],[9],[0," Cancel\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-app/templates/quotes/new.hbs"}})}),define("ember-app/config/environment",[],function(){try{var e="ember-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-app/app").default.create({name:"ember-app",version:"0.0.0+0d6ce2ee"})
