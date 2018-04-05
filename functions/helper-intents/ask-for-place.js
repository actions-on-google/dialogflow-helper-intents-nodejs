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

  'ask.for.place': (app) => {
    app.askForPlace(
        'Where do you want to get picked up?',
        'To find a place to pick you up'
        );
  },

  'ask.for.place.confirmation': (app) => {
    const place = app.getPlace();
    if (place) {
      app.ask(`Ah, I see. You want to go to ${place.address}`);
    } else {
      app.ask('Sorry, I couldn\'t get a location from you');
    }
  }

};
