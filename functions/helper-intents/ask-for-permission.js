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
    const permissions = ['NAME'];
    let context = 'To address you by name';
    if (conv.user.verification === 'VERIFIED') {
      // Location permissions only work for verified users
      // https://developers.google.com/actions/assistant/guest-users
      permissions.push('DEVICE_COARSE_LOCATION');
      context += ' and know your location';
    }
    const options = {
      context,
      permissions,
    };
    conv.ask(new Permission(options));
  },

  'ask_for_permission_confirmation': (conv, params, confirmationGranted) => {
    // Also, can access latitude and longitude
    // const { latitude, longitude } = location.coordinates;
    const {location} = conv.device;
    const {name} = conv.user;
    if (confirmationGranted && name && location) {
      conv.ask(`Okay ${name.display}, your driver is now on their way to:
        ${location.formattedAddress}`);
    } else {
      conv.ask(`Looks like I can't get your information`);
    }
    conv.ask(new Suggestions([
      'Confirmation',
      'DateTime',
      'Place',
      'Sign In',
    ]));
  },
};
