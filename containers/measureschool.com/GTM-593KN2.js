data = {
"resource": {
  "version":"177",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.referrer.split(\".com\");return a[1]}catch(b){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.location.href.split(\"\/\").pop()}catch(a){}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"email",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"mm_cookie_email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",3],8,16],"||",["escape",["macro",4],8,16],"||",["escape",["macro",5],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],".length?\"\\x26\"+",["escape",["macro",7],8,16],":\"\";a=a.length?\"?\"+a.replace(\/\u0026[^\u0026@]+@[^\u0026]+\/g,\"\").substring(1):\"\";return 1\u003E=a.length?\"\":a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return{ecommerce:{purchase:{actionField:{id:_thrive_order.order.id,affiliation:\"\",revenue:_thrive_order.order.total_readable,tax:\"0.00\",shipping:\"0.00\",coupon:\"\"},products:[{name:_thrive_order.order.product.name,id:_thrive_order.order.product.id,price:_thrive_order.order.product.total_readable,brand:\"Measureschool\",category:\"Membership\",quantity:1,coupon:\"\"}]}}}}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={selector:\"iframe#acuityscheduling\",attempts:10,intervalMs:1E3,useAnchor:!1},e=\"_ga_originalSendHitTask\";return function(c){window[e]=window[e]||c.get(\"sendHitTask\");var b;if(\"object\"===typeof a\u0026\u0026\"string\"===typeof a.selector\u0026\u0026\"number\"===typeof a.attempts\u0026\u0026\"number\"===typeof a.intervalMs){var f=0;var g=window[window.GoogleAnalyticsObject];var h=g.getByName(c.get(\"name\"));c=function(){b=document.querySelector(a.selector);null!==b\u0026\u0026\/[?\u0026]_ga=\/.test(b.src)?window.clearInterval(d):null===\nb?(f+=1,f===a.attempts\u0026\u0026window.clearInterval(d)):(window.clearInterval(d),b.src=(new window.gaplugins.Linker(h)).decorate(b.src,a.useAnchor))};var d=window.setInterval(c,a.intervalMs)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return localStorage.getItem(\"acUser\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"cid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],"||",["escape",["macro",16],8,16],";if(a)return ",["escape",["macro",9],8,16],"(\"cid\",a,2592E6,\"\/\"),a;if(",["escape",["macro",17],8,16],")return ",["escape",["macro",17],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",14],
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",18]],["map","fieldName","page","value",["template",["macro",19],["macro",8]]],["map","fieldName","customTask","value",["macro",11]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":true,
      "vtp_autoLinkDomains":"thrivecart.com, measure.school",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",18]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-58541733-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"optinpage",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__j",
      "vtp_name":"_thrive_order.order.id"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeToSerp"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"optinpage",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"rid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"affiliate",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tags"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"mbr"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"optin",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"username",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","\/guide\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/GTMTraining-ResourceGuide-1.pdf"],["map","key","\/sourcecookie\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/sourcecookietemplate.zip"],["map","key","\/vwo\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/vwo.zip"],["map","key","\/tagplan\/","value","https:\/\/docs.google.com\/spreadsheets\/d\/1phSvWwTe8in1IB6x9ekqi2nOxvjhpcbl2Hw5Hz5rwok\/edit?usp=sharing"],["map","key","\/eventtrackingdemo\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/eventtrackingcourse.zip"],["map","key","\/emailinput\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/emailInput.zip"],["map","key","\/cookieswitch\/","value","http:\/\/measureschool.com\/wp-content\/uploads\/2016\/02\/gtmtraining-cookieswitch.zip"]]
    },{
      "function":"__d",
      "vtp_elementSelector":"form input[name=\"field[19]\"]",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"premiumSupport"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coupon"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"transaction_key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"member"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"answer",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"coupon",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"firstName",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionfield.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"singUpDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasTag228"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasTag236"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",10],
      "vtp_eventCategory":"EE",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":"Transaction",
      "vtp_eventLabel":"Purchase",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":"Email Signup",
      "vtp_eventLabel":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"opt",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":43
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"404 Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/script.google.com\/macros\/s\/AKfycbwvGEu9CQYCKu3ESGhtAiSbkO5FnV6RrvrQwyiwks-WhM9S0-u2\/exec?ContactId=",["escape",["macro",17],12],"\u0026OrderId=",["escape",["macro",24],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",25],
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingCategory":"SERP Bounce",
      "vtp_gaSettings":["macro",20],
      "vtp_timingVar":["macro",22],
      "vtp_timingValue":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":62
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"1024658",
      "tag_id":68
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_1927886_135",
      "tag_id":69
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-CPVFPGFBP8",
      "vtp_enableUserProperties":true,
      "tag_id":70
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"Newsletter sign up",
      "vtp_eventParameters":["list",["map","name","optinpage","value",["macro",28]],["map","name","acid","value",["macro",27]]],
      "vtp_measurementId":"G-CPVFPGFBP8",
      "vtp_enableUserProperties":true,
      "tag_id":71
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":84
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1927886_24",
      "tag_id":85
    },{
      "function":"__evl",
      "vtp_elementId":"payment-processor-wrap",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1927886_105",
      "tag_id":86
    },{
      "function":"__hl",
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,d,e,f,g,b,c){a.prismGlobalObjectAlias=f;a.pgo=a.pgo||function(){(a.pgo.q=a.pgo.q||[]).push(arguments)};a.pgo.l=(new Date).getTime();b=d.createElement(\"script\");b.src=e;b.async=!0;c=d.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)})(window,document,\"https:\/\/prism.app-us1.com\/prism.js\",\"pgo\");pgo(\"setAccount\",\"251578439\");pgo(\"setTrackByDefault\",!0);pgo(\"process\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"216233405400796\");fbq(\"track\",\"PageView\");window.google_tag_manager[",["escape",["macro",29],8,16],"].onHtmlSuccess(",["escape",["macro",30],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026fbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",31],7],"\",currency:\"USD\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026fbq(\"track\",\"Sign Up\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{jQuery(\"input[name\\x3d'field[12]']\").length\u0026\u0026jQuery(\"input[name\\x3d'field[12]']\").val(",["escape",["macro",33],8,16],")}catch(a){return a}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{jQuery(document).ready(function(){var b=jQuery('a[href*\\x3d\"thrivecart\"]');b.each(function(b,c){var a=jQuery(c),d=a.attr(\"href\");-1!=d.indexOf(\"?\")?a.attr(\"href\",jQuery(a).attr(\"href\")+\"\\x26cid\\x3d",["escape",["macro",18],7],"\"):a.attr(\"href\",jQuery(a).attr(\"href\")+\"?cid\\x3d",["escape",["macro",18],7],"\")})})}catch(b){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026fbq(\"track\",\"Checkout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"  \u003Cscript data-version=\"v1\" data-widget-id=\"measureschool\" id=\"toastersurvey\" type=\"text\/gtmscript\"\u003E!function(){function c(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;var a=\"https:\/\/measureschool.com\/wp-content\/themes\/generatepress_child\/js\/survey.js\";b.src=a+(0\u003C=a.indexOf(\"?\")?\"\\x26\":\"?\")+\"ref\\x3d\"+encodeURIComponent(window.location.href);a=document.getElementById(\"toastersurvey\");a.parentNode.insertBefore(b,a)}window.attachEvent?window.attachEvent(\"onload\",c):window.addEventListener(\"load\",c,!1)}();\u003C\/script\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.7\/css\/bootstrap.min.css\"\u003E\n\u003Cstyle\u003E.choice,h5{display:block}.container{margin-top:20px}#slideout{background:#fff;box-shadow:0 0 5px rgba(0,0,0,.3);color:#333;position:fixed;bottom:-500px;right:5%;width:250px;padding-bottom:10px;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}#slideout.on{bottom:0}.choice{margin:5px auto;width:80%}h5{text-align:center}#slideout .glyphicon{display:block;margin:3px;text-align:right;color:grey}#thankyou{display:none}\u003C\/style\u003E \n \u003Cdiv id=\"slideout\"\u003E\n      \u003Ca href=\"\" id=\"hide\"\u003E\u003Cspan class=\"glyphicon glyphicon-remove-circle\"\u003E\u003C\/span\u003E\u003C\/a\u003E\n      \u003Cdiv id=\"questions\"\u003E\u003C\/div\u003E\n    \u003Cdiv id=\"thankyou\"\u003E\n      \u003Ch5\u003EThanks! Your answer was recorded.\u003C\/h5\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=window.dataLayer||[];dataLayer.push({event:\"checkoutStep\",ecommerce:{checkout:{actionField:{step:\"2\",option:\"\"}}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.location.search,c=document.location.hash,b=",["escape",["macro",37],8,16],",d=",["escape",["macro",35],8,16],",e=",["escape",["macro",38],8,16],";window.history\u0026\u0026(\"gtm.js\"===b\u0026\u0026-1\u003Cdocument.referrer.indexOf(\"www.google.\")\u0026\u0026-1===a.indexOf(\"gclid\")\u0026\u0026-1===a.indexOf(\"utm_\")\u0026\u0026\"#gref\"!==c?(window.oldFragment=!1,window.history.pushState(null,null,\"#gref\")):\"gtm.js\"===b\u0026\u0026(window.oldFragment=!0),\"gtm.historyChange\"===b\u0026\u0026\"\"===d\u0026\u0026\"gref\"===e\u0026\u0026(a=(new Date).getTime()-",["escape",["macro",39],8,16],",window.oldFragment?window.history.go(-1):\ndataLayer.push({event:\"returnToSerp\",timeToSerp:a,eventCallback:function(){window.history.go(-1)}})))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",9],8,16],"(\"tc_affiliate_measureschool\",",["escape",["macro",40],8,16],",2592E6,\"\/\",\".measureschool.com\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.intercomSettings={app_id:\"rcrgvglk\",email:",["escape",["macro",4],8,16],",name:",["escape",["macro",42],8,16],",user_id:",["escape",["macro",15],8,16],"};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(){var c=f.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/widget.intercom.io\/widget\/key\";var a=f.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(c,a)}var a=window,d=a.Intercom;if(\"function\"===typeof d)d(\"reattach_activator\"),d(\"update\",intercomSettings);else{var f=document,b=function(){b.c(arguments)};b.q=[];b.c=function(a){b.q.push(a)};a.Intercom=b;a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})();\u003C\/script\u003E\n\u003Cstyle\u003E#intercom-container { display:none; }\u003C\/style\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",4],8,16],")var lz_data={overwrite:!1,111:\"",["escape",["macro",42],7],"\",112:\"",["escape",["macro",4],7],"\",113:\"\\x3c!--replace_me_with_Company--\\x3e\",114:\"\\x3c!--replace_me_with_Question--\\x3e\",116:\"\\x3c!--replace_me_with_Phone--\\x3e\",header:\"\\x3c!--replace_me_with_Logo--\\x3e\",language:\"en\",website:\"\\x3c!--replace_me_with_Area--\\x3e\"};\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\" id=\"d20063f557da16964373d7c63b0a0be2\" data-gtmsrc=\"https:\/\/livezilla.measure.school\/script.php?id=d20063f557da16964373d7c63b0a0be2\" defer\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\" src=\"https:\/\/a.opmnstr.com\/app\/js\/api.min.js\" data-campaign=\"ruqlxhclazvgg2iwbze0\" data-user=\"19781\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\" src=\"https:\/\/a.opmnstr.com\/app\/js\/api.min.js\" data-campaign=\"na9c8qowtyc8iojqucpx\" data-user=\"19781\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\" src=\"https:\/\/a.opmnstr.com\/app\/js\/api.min.js\" data-campaign=\"l4cta0ltzp4jopoex11r\" data-user=\"19781\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(){function b(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState\u0026\u0026200==c.status\u0026\u0026b(c.responseText)};c.open(\"GET\",a,!0);c.send(null)}var d=\"https:\/\/script.google.com\/macros\/s\/AKfycbwSiaFHdKqTFVQgO6b8iuRObRD4m8MNs0_P5yh3JVnCweXr-W_x\/exec\",e=\"",["escape",["macro",44],7],"\";try{b(d+\"?acid\\x3d\"+e,function(a){a=JSON.parse(a);var b=[\"tags\"],c;for(c in a)-1===b.indexOf(c)\u0026\u0026delete a[c];a.event=\"acUser\";a.time=f;dataLayer.push(a);window.localStorage.setItem(\"acUser\",\nJSON.stringify(a));console.log(\"retrieved new data from API\")})}catch(a){return a}}var f=(new Date).valueOf(),b=localStorage.getItem(\"acUser\");if(b){console.log(\"local storage found\");b=JSON.parse(b);var e=(f-b.time)\/1E3\/60;60\u003C=e?(console.log(\"cache expired, fetching new data\"),d()):(console.log(\"using cached data - time elapsed: \"+e),dataLayer.push(b))}else d()})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"signup"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/download\/?"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"@"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"user"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/video\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"404"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"checkoutStep"
    },{
      "function":"_lt",
      "arg0":["macro",26],
      "arg1":"18000000"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"returnToSerp"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/you-are-now-signed-up\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"membersignup"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)1927886_24($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/lp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"acid="
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"you-are-now-signed-up"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)1927886_105($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"^$"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"popstate"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^$"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"measure.school"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"measure.school"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/lp\/"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"48hourMMcouponActive"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"acUser"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"48HourPassRedeemed"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/gtm-essentials-training-special-offer"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"undefined"
    }],
  "rules":[
    [["if",0],["add",0,2,3,5,7,13,15,17,21,22,30,18,19,20]],
    [["if",1],["add",1,10,23,33]],
    [["if",2],["add",4,24]],
    [["if",3,4,5],["add",6]],
    [["if",6,7],["add",8]],
    [["if",8],["add",9]],
    [["if",9],["add",11]],
    [["if",10,11],["add",12]],
    [["if",12],["add",14]],
    [["if",0,14],["unless",13],["add",16]],
    [["if",15],["add",24]],
    [["if",16,17],["add",25]],
    [["if",7,18],["unless",19],["add",26]],
    [["if",5],["unless",20],["add",27]],
    [["if",0,21],["unless",22],["add",28]],
    [["if",23,24],["add",29]],
    [["if",25,26,27],["add",30]],
    [["if",0],["unless",28],["add",31]],
    [["if",0,30],["unless",29],["add",32]],
    [["if",7,31],["add",33]],
    [["if",0,32],["add",33]],
    [["if",33,34],["add",34]],
    [["if",34,35],["add",35]],
    [["if",0,36],["add",36]],
    [["if",0],["unless",37],["add",37]]]
}