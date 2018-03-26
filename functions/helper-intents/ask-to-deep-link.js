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

const {DeepLink} = require('actions-on-google');

module.exports = {

  'ask_to_deep_link': (conv) => {
    const options = {
      destination: 'Google',
      url: 'example://gizmos',
      package: 'com.example.gizmos',
      reason: 'handle this for you',
    };
    conv.ask('Great! looks like maybe we can do that in the app.');
    conv.ask(new DeepLink(options));
  },

  // This intent is only triggered if the user rejects the deep link
  'ask_to_deep_link_rejection': (conv, params, response) => {
    conv.ask('Okay maybe we can take care of that another time.');
  },

};
