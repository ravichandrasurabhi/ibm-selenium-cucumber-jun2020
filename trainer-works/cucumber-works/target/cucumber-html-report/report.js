$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("creditscore.feature");
formatter.feature({
  "line": 2,
  "name": "this is for sample check of credit score",
  "description": "",
  "id": "this-is-for-sample-check-of-credit-score",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@credit"
    }
  ]
});
formatter.before({
  "duration": 138037,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "just check if you can get load",
  "description": "",
  "id": "this-is-for-sample-check-of-credit-score;just-check-if-you-can-get-load",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "you have enough credit score",
  "rows": [
    {
      "comments": [
        {
          "line": 6,
          "value": "## heading"
        }
      ],
      "cells": [
        "work_type",
        "years_of_exp"
      ],
      "line": 7
    },
    {
      "cells": [
        "govt",
        "5"
      ],
      "line": 8
    },
    {
      "cells": [
        "private",
        "6"
      ],
      "line": 9
    },
    {
      "cells": [
        "consultant",
        "9"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "you apply for loan",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "loan is sanctioned",
  "keyword": "Then "
});
formatter.match({
  "location": "CredtiScoreStep.you_have_enough_credit_score(DataTable)"
});
formatter.result({
  "duration": 73603546,
  "status": "passed"
});
formatter.match({
  "location": "CredtiScoreStep.you_apply_for_loan()"
});
formatter.result({
  "duration": 44156,
  "status": "passed"
});
formatter.match({
  "location": "CredtiScoreStep.loan_is_sanctioned()"
});
formatter.result({
  "duration": 33329,
  "status": "passed"
});
formatter.after({
  "duration": 29616,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# this is my comment"
    }
  ],
  "line": 3,
  "name": "to validate login",
  "description": "",
  "id": "to-validate-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 64474,
  "status": "passed"
});
formatter.before({
  "duration": 45165,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "to check if the user is valid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@validlogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with user name",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 9
    },
    {
      "cells": [
        "saileela"
      ],
      "line": 10
    },
    {
      "cells": [
        "rahul"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user is \"valid\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "take the user to \"home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 115063,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name(DataTable)"
});
formatter.result({
  "duration": 137241,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 36373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_is_type(String)"
});
formatter.result({
  "duration": 465368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_userPage_page(String)"
});
formatter.result({
  "duration": 59545,
  "status": "passed"
});
formatter.after({
  "duration": 30527,
  "status": "passed"
});
formatter.after({
  "duration": 27055,
  "status": "passed"
});
formatter.before({
  "duration": 26378,
  "status": "passed"
});
formatter.before({
  "duration": 51633,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "to check if the user is invalid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@invalidlogin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with user name",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 20
    },
    {
      "cells": [
        "sarada"
      ],
      "line": 21
    },
    {
      "cells": [
        "imran"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user is \"invalid\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "take the user to \"error\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 31155,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name(DataTable)"
});
formatter.result({
  "duration": 97977,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 45535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_is_type(String)"
});
formatter.result({
  "duration": 41424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_userPage_page(String)"
});
formatter.result({
  "duration": 36687,
  "status": "passed"
});
formatter.after({
  "duration": 19515,
  "status": "passed"
});
formatter.after({
  "duration": 23674,
  "status": "passed"
});
formatter.uri("product.feature");
formatter.feature({
  "line": 2,
  "name": "to shop for the product",
  "description": "",
  "id": "to-shop-for-the-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@product"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"\u003cproduct_selected\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"\u003cloaded\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"\u003cnumber_of_items\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;",
  "rows": [
    {
      "cells": [
        "product_selected",
        "loaded",
        "number_of_items"
      ],
      "line": 20,
      "id": "to-shop-for-the-product;;;1"
    },
    {
      "cells": [
        "product selected",
        "loaded",
        "3"
      ],
      "line": 21,
      "id": "to-shop-for-the-product;;;2"
    },
    {
      "cells": [
        "product selected",
        "not loaded",
        "5"
      ],
      "line": 22,
      "id": "to-shop-for-the-product;;;3"
    },
    {
      "cells": [
        "product not selected",
        "loaded",
        "3"
      ],
      "line": 23,
      "id": "to-shop-for-the-product;;;4"
    },
    {
      "cells": [
        "product not selected",
        "not loaded",
        "3"
      ],
      "line": 24,
      "id": "to-shop-for-the-product;;;5"
    },
    {
      "cells": [
        "product selected not available",
        "loaded",
        "1"
      ],
      "line": 25,
      "id": "to-shop-for-the-product;;;6"
    },
    {
      "cells": [
        "product selected not available",
        "not loaded",
        "3"
      ],
      "line": 26,
      "id": "to-shop-for-the-product;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47755,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 79372,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 154418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 50919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 36685,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 22577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 46209,
  "status": "passed"
});
formatter.after({
  "duration": 18539,
  "status": "passed"
});
formatter.before({
  "duration": 21477,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 39731,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 113807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 40374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 47107,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 40780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 56808,
  "status": "passed"
});
formatter.after({
  "duration": 17671,
  "status": "passed"
});
formatter.before({
  "duration": 40933,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 50462,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 143159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product not selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 43556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 52758,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 20486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 34511,
  "status": "passed"
});
formatter.after({
  "duration": 16477,
  "status": "passed"
});
formatter.before({
  "duration": 24297,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 24803,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 129780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product not selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 40147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 33933,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 34699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 51399,
  "status": "passed"
});
formatter.after({
  "duration": 17560,
  "status": "passed"
});
formatter.before({
  "duration": 24065,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 46985,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 140222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected not available",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 53555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 40955,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 23413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 46412,
  "status": "passed"
});
formatter.after({
  "duration": 15989,
  "status": "passed"
});
formatter.before({
  "duration": 37917,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 24636,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 11
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 12
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 103532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected not available",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 38186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 46
    }
  ],
  "location": "ProductStep.virtual_Private_Network_Product_Catalog_page(String)"
});
formatter.result({
  "duration": 43274,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 16578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "ProductStep.user_should_not_add_more_than(String)"
});
formatter.result({
  "duration": 68290,
  "status": "passed"
});
formatter.after({
  "duration": 14622,
  "status": "passed"
});
formatter.before({
  "duration": 21353,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# which you want to be repeated for all the scenarios"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 68711,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user is valid",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "say hi",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStep.user_is_valid()"
});
formatter.result({
  "duration": 44377,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.say_hi()"
});
formatter.result({
  "duration": 42685,
  "status": "passed"
});
formatter.after({
  "duration": 24403,
  "status": "passed"
});
formatter.uri("telecom.feature");
formatter.feature({
  "line": 2,
  "name": "validating the user call details",
  "description": "",
  "id": "validating-the-user-call-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@telecom"
    }
  ]
});
formatter.before({
  "duration": 29186,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "to check if the user has dialed valid number and talking",
  "description": "",
  "id": "validating-the-user-call-details;to-check-if-the-user-has-dialed-valid-number-and-talking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the telephone is working",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the number is dialed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "ring tone is heard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the call is picked by recipient",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there should not be a distrubance",
  "keyword": "But "
});
formatter.match({
  "location": "TelecomStep.the_telephone_is_working()"
});
formatter.result({
  "duration": 73996,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.the_number_is_dialed()"
});
formatter.result({
  "duration": 38162,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.ring_tone_is_heard()"
});
formatter.result({
  "duration": 21048,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.the_call_is_picked_by_recipient()"
});
formatter.result({
  "duration": 37732,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.there_should_not_be_a_distrubance()"
});
formatter.result({
  "duration": 29145,
  "status": "passed"
});
formatter.after({
  "duration": 68108,
  "status": "passed"
});
});