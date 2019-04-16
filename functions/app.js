// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {
  dialogflow,
  SignIn,
  Suggestions,
} = require('actions-on-google');

const app = dialogflow({
  clientId: `<INSERT_CLIENT_ID>`,
  debug: true,
});

const askForConfirmation = require('./helper-intents/ask-for-confirmation');
const askForDateTime = require('./helper-intents/ask-for-datetime');
const askForPermission = require('./helper-intents/ask-for-permission');
const askForPlace = require('./helper-intents/ask-for-place');
const askForSignIn = require('./helper-intents/ask-for-sign-in');

/** Adds Intent-name & callback key value pairs to app */
function addIntents(...args) {
  for (let i = 0; i < args.length; i++) {
    for (const key in args[i]) {
      if (args[i].hasOwnProperty(key)) app.intent(key, args[i][key]);
    }
  }
}

addIntents(
  askForConfirmation,
  askForDateTime,
  askForPermission,
  askForPlace,
  askForSignIn,
);

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('I can tell you about platform-native helper intents, such as ' +
    'confirmation, date time, and more on your phone, speaker, and smart display.');
  conv.ask(new Suggestions([
    'Confirmation',
    'Date time',
    'Permission',
    'Place',
    'Sign In',
  ]));
});

module.exports = app;
