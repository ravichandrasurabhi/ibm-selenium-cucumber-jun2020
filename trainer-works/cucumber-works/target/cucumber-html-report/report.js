$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# this is my comment"
    }
  ],
  "line": 2,
  "name": "to validate login",
  "description": "",
  "id": "to-validate-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "to check if the user is valid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user is \"valid\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "take the user to \"home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 79556316,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 36615,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 44815,
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
  "duration": 1208592,
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
  "duration": 49895,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "to check if the user is invalid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-invalid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user is \"invalid\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "take the user to \"error\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 34439,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 26771,
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
  "duration": 46455,
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
  "duration": 44576,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "to check if the user is invalid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-invalid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user is \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "take the user to \"successmanager\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 34657,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 22416,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 21754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manager",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_is_type(String)"
});
formatter.result({
  "duration": 44111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successmanager",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_userPage_page(String)"
});
formatter.result({
  "duration": 40020,
  "status": "passed"
});
});