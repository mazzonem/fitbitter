(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"get-activity-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-activity-data"}},[t._v("#")]),t._v(" Get Activity Data")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to the Fitbit user id, here called "),s("code",[t._v("userID")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),s("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),s("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),s("p",[t._v("Information about the user's Activity data can be obtained in three steps")]),t._v(" "),s("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),s("p",[t._v("First, you need to instanciate a "),s("code",[t._v("FitbitActivityDataManager")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    FitbitActivityDataManager fitbitActivityTimeseriesDataManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitActivityDataManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"step-2-create-the-request-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),s("p",[t._v("Then, you have to create a url object, "),s("code",[t._v("FitbitActivityAPIURL")]),t._v(" to fetch the Activty data of a specified day, as:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    FitbitActivityAPIURL fitbitActivityApiUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitActivityAPIURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("day")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                                    date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    userID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" userID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"step-3-get-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),s("p",[t._v("Finally you can obtain the Activty data using")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("    List"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitActivityData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitActivityData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitActivityDataManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitActivityApiUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);