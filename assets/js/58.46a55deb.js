(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{331:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"plan-subscription-feature-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-subscription-feature-model"}},[t._v("#")]),t._v(" Plan Subscription Feature Model")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#how-does-it-work"}},[t._v("How does it work?")])]),s("li",[s("a",{attrs:{href:"#how-do-subscription-features-relate-to-plan-features"}},[t._v("How do Subscription Features relate to Plan Features?")]),s("ul",[s("li",[s("a",{attrs:{href:"#via-subscription"}},[t._v("Via Subscription")])]),s("li",[s("a",{attrs:{href:"#via-plan-feature"}},[t._v("Via Plan Feature")])])])]),s("li",[s("a",{attrs:{href:"#add-features-to-a-subscription"}},[t._v("Add features to a subscription")]),s("ul",[s("li",[s("a",{attrs:{href:"#inherited-from-plan-when-subscribed"}},[t._v("Inherited from plan when subscribed")])]),s("li",[s("a",{attrs:{href:"#manually-assign-without-relation-to-a-plan-feature"}},[t._v("Manually assign without relation to a plan feature")])]),s("li",[s("a",{attrs:{href:"#override-existing-feature-values"}},[t._v("Override existing feature values")])])])]),s("li",[s("a",{attrs:{href:"#revert-all-changes-and-sync-to-plan"}},[t._v("Revert all changes and sync to plan")])]),s("li",[s("a",{attrs:{href:"#revert-one-change"}},[t._v("Revert one change")])]),s("li",[s("a",{attrs:{href:"#retrieve-features-without-plan"}},[t._v("Retrieve features without plan")])]),s("li",[s("a",{attrs:{href:"#feature-usage"}},[t._v("Feature usage")])]),s("li",[s("a",{attrs:{href:"#other"}},[t._v("Other")]),s("ul",[s("li",[s("a",{attrs:{href:"#sort-order"}},[t._v("Sort order")])])])])])]),s("p"),t._v(" "),s("p",[t._v("This model relates to which features has a Subscription.")]),t._v(" "),s("h2",{attrs:{id:"how-does-it-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[t._v("#")]),t._v(" How does it work?")]),t._v(" "),s("p",[t._v("A "),s("RouterLink",{attrs:{to:"/v7.x/models/plan-subscription-model.html"}},[t._v("subscription")]),t._v(" has features that can be used. Subscription Features are related but\nindependent from Plan Features. When a subscription is created or a feature is attached, it makes a copy so it's\ndecoupled and changes to related plan will not be applied automatically.")],1),t._v(" "),s("h2",{attrs:{id:"how-do-subscription-features-relate-to-plan-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-subscription-features-relate-to-plan-features"}},[t._v("#")]),t._v(" How do Subscription Features relate to Plan Features?")]),t._v(" "),s("p",[t._v("Plan Subscription Feature has two relationships to Plan, if you force it they can be two different plans, usually both\nwill only lead to one Plan.")]),t._v(" "),s("h3",{attrs:{id:"via-subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#via-subscription"}},[t._v("#")]),t._v(" Via Subscription")]),t._v(" "),s("p",[s("code",[t._v("PlanSubscriptionFeature")]),t._v(" belongs "),s("strong",[t._v("always")]),t._v(" to one "),s("code",[t._v("PlanSubscription")]),t._v(", and it belongs "),s("strong",[t._v("always")]),t._v(" to one "),s("code",[t._v("Plan")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"via-plan-feature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#via-plan-feature"}},[t._v("#")]),t._v(" Via Plan Feature")]),t._v(" "),s("p",[s("code",[t._v("PlanSubscriptionFeature")]),t._v(" "),s("strong",[t._v("may")]),t._v(" belong to one "),s("code",[t._v("PlanFeature")]),t._v(", and it belongs "),s("strong",[t._v("always")]),t._v(" to one "),s("code",[t._v("Plan")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"add-features-to-a-subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-features-to-a-subscription"}},[t._v("#")]),t._v(" Add features to a subscription")]),t._v(" "),s("h3",{attrs:{id:"inherited-from-plan-when-subscribed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inherited-from-plan-when-subscribed"}},[t._v("#")]),t._v(" Inherited from plan when subscribed")]),t._v(" "),s("p",[t._v("Features are assigned and inherited from plan when user is subscribed to a plan. This makes a copy of current plan\nfeatures into the subscription.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newSubscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$plan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Main subscription'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Customer main subscription'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now subscriber's subscription will have all current plan features.")]),t._v(" "),s("h3",{attrs:{id:"manually-assign-without-relation-to-a-plan-feature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-assign-without-relation-to-a-plan-feature"}},[t._v("#")]),t._v(" Manually assign without relation to a plan feature")]),t._v(" "),s("p",[t._v("A plan has "),s("code",[t._v("social_profiles")]),t._v(" feature. When subscriber is subscribed to that plan, the subscription can now\nuse "),s("code",[t._v("social_profiles")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can also attach directly features to user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tag'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pictures_per_social_profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Pictures per social profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort_order'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resettable_period'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resettable_interval'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'month'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now user can also make use of the "),s("code",[t._v("pictures_per_social_profile")]),t._v(" feature, and it will be reset monthly.")]),t._v(" "),s("h3",{attrs:{id:"override-existing-feature-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-existing-feature-values"}},[t._v("#")]),t._v(" Override existing feature values")]),t._v(" "),s("p",[t._v("If subscriber has inherited a feature from a plan, there cannot be two features with the same tag attached to\nsubscriber. But since subscription features do not depend anymore on plan features, you can override said feature.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Modify feature limit for subscriber")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFeatureByTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pictures_per_social_profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("     \n       "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Just like that, our user will be always capable of using 60 pictures, no matter what the plan feature limit is.")]),t._v(" "),s("h2",{attrs:{id:"revert-all-changes-and-sync-to-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert-all-changes-and-sync-to-plan"}},[t._v("#")]),t._v(" Revert all changes and sync to plan")]),t._v(" "),s("p",[t._v("You can revert all your changes to a subscription an return to a clean copy of current subscription's Plan Features.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resync features with subscription's current plan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncPlanFeatures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("syncPlanFeatures")]),t._v(" accepts one parameter "),s("code",[t._v("Plan")]),t._v(", in case you want a clean copy of another plan that is not current plan.")]),t._v(" "),s("h2",{attrs:{id:"revert-one-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert-one-change"}},[t._v("#")]),t._v(" Revert one change")]),t._v(" "),s("p",[t._v("You can revert one feature to a subscription and return to a clean copy of current subscription's Plan Feature or\ncurrent\n"),s("code",[t._v("Plan Feature")]),t._v(" in case it's not the same.")]),t._v(" "),s("h4",{attrs:{id:"revert-to-subscription-s-plan-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert-to-subscription-s-plan-value"}},[t._v("#")]),t._v(" Revert to Subscription's Plan value")]),t._v(" "),s("p",[t._v("It will sync your subscription's feature retrieving your Plan Feature via Plan in Subscription related\nin "),s("code",[t._v("subscription_id")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resync feature with subscription's current plan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFeatureByTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pictures_per_social_profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncPlanSubscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"revert-to-subscription-s-feature-plan-feature-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert-to-subscription-s-feature-plan-feature-value"}},[t._v("#")]),t._v(" Revert to Subscription's Feature Plan Feature value")]),t._v(" "),s("p",[t._v("It will sync your subscription's feature retrieving your Plan Feature via Plan Feature in "),s("code",[t._v("plan_feature_id")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resync feature with subscription's current plan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFeatureByTag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pictures_per_social_profile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncPlanFeature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"retrieve-features-without-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-features-without-plan"}},[t._v("#")]),t._v(" Retrieve features without plan")]),t._v(" "),s("p",[t._v("If you manually attached features that were not included in related subscription plan, you can retrieve them via scope.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve features that are not tied in any form to a plan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withoutPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"feature-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature-usage"}},[t._v("#")]),t._v(" Feature usage")]),t._v(" "),s("p",[t._v("See also "),s("RouterLink",{attrs:{to:"/v7.x/models/models/plan-subscription-model.html#subscription-feature-usage"}},[t._v("subscription feature usage")]),t._v(".")],1),t._v(" "),s("p",[t._v("Plan subscription feature usage can also be retrieved via "),s("code",[t._v("usage()")]),t._v(" relationship:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFeatureUsage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'social_profiles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("usage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To get all the subscription features along with their usage:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'usage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"other"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),s("h3",{attrs:{id:"sort-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort-order"}},[t._v("#")]),t._v(" Sort order")]),t._v(" "),s("p",[s("code",[t._v("sort_order")]),t._v(" column has no logic in package, it is just a field for you to use in your queries.")])])}),[],!1,null,null,null);a.default=r.exports}}]);