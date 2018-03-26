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

const {Place} = require('actions-on-google');

module.exports = {

  'ask_for_place': (conv) => {
    const options = {
      context: 'To find a place to pick you up',
      prompt: 'Where would you like to be picked up?',
    };
    conv.ask(new Place(options));
  },

  'ask_for_place_confirmation': (conv, params, place, status) => {
    if (!place) return conv.ask(`Sorry, I couldn't get a location from you`);
    // the place also carries formattedAddress, and coordinates fields
    const {name} = place;
    if (place.name) conv.ask(`Alright! I'll send the car to ${name}`);
  },

};
