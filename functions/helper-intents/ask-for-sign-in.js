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

const {SignIn} = require('actions-on-google');

module.exports = {

  'ask_for_sign_in': (conv) => {
    conv.ask(new SignIn());
  },

  'ask_for_sign_in_confirmation': (conv, params, signin) => {
    if (signin.status !== 'OK') {
      return conv.ask('You need to sign in before using the app.');
    }
    // const access = conv.user.access.token;
    // possibly do something with access token
    return conv.ask('Great! Thanks for signing in.');
  },

};
