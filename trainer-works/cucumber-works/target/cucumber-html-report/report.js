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
        "5a"
      ],
      "line": 8
    },
    {
      "cells": [
        "private",
        "6b"
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
  "duration": 68968088,
  "error_message": "java.lang.NumberFormatException: For input string: \"5a\"\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\n\tat java.lang.Integer.parseInt(Integer.java:580)\n\tat java.lang.Integer.parseInt(Integer.java:615)\n\tat com.training.steps.CredtiScoreStep.you_have_enough_credit_score(CredtiScoreStep.java:28)\n\tat ✽.Given you have enough credit score(creditscore.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "CredtiScoreStep.you_apply_for_loan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CredtiScoreStep.loan_is_sanctioned()"
});
formatter.result({
  "status": "skipped"
});
});