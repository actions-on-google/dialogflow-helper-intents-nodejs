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

const {Permission, Suggestions} = require('actions-on-google');

module.exports = {

  'ask_for_permission': (conv) => {
    const options = {
      context: 'To address you by name and know your location',
      // Ask for more than one permission. User can authorize all or none.
      permissions: ['NAME', 'DEVICE_PRECISE_LOCATION'],
    };
    conv.ask(new Permission(options));
  },

  'ask_for_permission_confirmation': (conv, params, confirmationGranted) => {
    // Also, can access latitude and longitude
    // const { latitude, longitude } = location.coordinates;
    const {location} = conv.device;
    const {name} = conv.user;
    if (confirmationGranted && name && location){
      conv.ask(`Okay ${name.display}, your driver is now on their way to:
        ${location.formattedAddress}`);
    } else {
      conv.ask(`Looks like I can't get your location`);
    }
    conv.ask(new Suggestions([
      'Confirmation',
      'DateTime',
      'Place',
      'Sign In',
    ]));
  },
};
