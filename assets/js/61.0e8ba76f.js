(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{334:function(e,t,s){"use strict";s.r(t);var a=s(14),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"subscription-payment-queuer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription-payment-queuer"}},[e._v("#")]),e._v(" Subscription Payment Queuer "),s("Badge",{attrs:{text:"new in v6.0",type:"tip"}})],1),e._v(" "),s("p",[e._v("This is the job that needs to be called periodically to collect all the subscriptions (either renewals or schedules) that\nhave to be paid and process the payments.")]),e._v(" "),s("h2",{attrs:{id:"what-it-does"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-it-does"}},[e._v("#")]),e._v(" What it does")]),e._v(" "),s("p",[e._v("The queuer job uses the Payment Collector class. This class retrieves all pending subscription renewals and also all pending\nsubscription plan change schedules, then the job dispatches new jobs for each type of payment method and action needed\n(renewal or schedule).")]),e._v(" "),s("h3",{attrs:{id:"what-happens-when-subscription-schedule-is-set-at-renewal-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-subscription-schedule-is-set-at-renewal-date"}},[e._v("#")]),e._v(" What happens when subscription schedule is set at renewal date?")]),e._v(" "),s("p",[e._v("Subscription schedule change has priority over renewal, so schedule change will be first processed. Plan\nchange will set a new renewal time in the future, so this renewal will be pushed into the future and not processed at\nthe same time schedule happens to avoid duplicates.")]),e._v(" "),s("h3",{attrs:{id:"how-does-the-package-avoid-double-charging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-package-avoid-double-charging"}},[e._v("#")]),e._v(" How does the package avoid double charging?")]),e._v(" "),s("p",[e._v("Both schedule and renewal jobs use Laravel's "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/queues#preventing-job-overlaps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Preventing Job Overlaps"),s("OutboundLink")],1),e._v("\nwithout release, so only one job per subscription can be active.")]),e._v(" "),s("h2",{attrs:{id:"how-to-schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-schedule"}},[e._v("#")]),e._v(" How to schedule")]),e._v(" "),s("p",[e._v("Your task schedule is defined in the "),s("code",[e._v("app/Console/Kernel.php")]),e._v(" file's schedule method.")]),e._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Bpuig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Subby"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Jobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("SubscriptionPaymentQueuerJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$schedule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SubscriptionPaymentQueuerJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("everyFiveMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);