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

module.exports = {

  'ask.to.deep.link': (app) => {
    app.askToDeepLink('Great! Looks like we can do that in the app.', 'Google',
      'example://gizmos', 'com.example.gizmos', 'handle this for you.');
  },

  // This intent is only triggered if the user rejects the deep link
  'ask.to.deep.link.rejection': (app) => {
    const linkStatus = app.getLinkStatus();
    console.log('Link status: ' + linkStatus);
    app.ask('Okay maybe we can take care of that another time.');
  }

};
