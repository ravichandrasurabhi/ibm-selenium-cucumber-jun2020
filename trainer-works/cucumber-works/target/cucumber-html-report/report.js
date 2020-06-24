$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("product.feature");
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
  "line": 4,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"\u003cproduct_selected\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"\u003cloaded\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"\u003cnumber_of_items\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
      "id": "to-shop-for-the-product;;;1"
    },
    {
      "cells": [
        "product selected",
        "loaded",
        "3"
      ],
      "line": 18,
      "id": "to-shop-for-the-product;;;2"
    },
    {
      "cells": [
        "product selected",
        "not loaded",
        "5"
      ],
      "line": 19,
      "id": "to-shop-for-the-product;;;3"
    },
    {
      "cells": [
        "product not selected",
        "loaded",
        "3"
      ],
      "line": 20,
      "id": "to-shop-for-the-product;;;4"
    },
    {
      "cells": [
        "product not selected",
        "not loaded",
        "3"
      ],
      "line": 21,
      "id": "to-shop-for-the-product;;;5"
    },
    {
      "cells": [
        "product selected not available",
        "loaded",
        "1"
      ],
      "line": 22,
      "id": "to-shop-for-the-product;;;6"
    },
    {
      "cells": [
        "product selected not available",
        "not loaded",
        "3"
      ],
      "line": 23,
      "id": "to-shop-for-the-product;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 120597355,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 2108905,
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
  "duration": 415674,
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
  "duration": 49301,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 32807,
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
  "duration": 60373,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 42225,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 118524,
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
  "duration": 45917,
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
  "duration": 54469,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 37341,
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
  "duration": 61272,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 36763,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 105273,
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
  "duration": 74906,
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
  "duration": 95293,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 23859,
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
  "duration": 43301,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 53650,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 84820,
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
  "duration": 54873,
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
  "duration": 36709,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 35724,
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
  "duration": 56478,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 38997,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 80842,
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
  "duration": 63472,
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
  "duration": 76103,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 38062,
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
  "duration": 60497,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
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
  "line": 5,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the login Details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 8
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 9
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "virtual Private Network Product Catalog page \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select the product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should not add more than \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "But "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 34796,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_Details_are_given(DataTable)"
});
formatter.result({
  "duration": 113706,
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
  "duration": 66407,
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
  "duration": 74588,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_the_product_from_the_list()"
});
formatter.result({
  "duration": 28616,
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
  "duration": 65051,
  "status": "passed"
});
});