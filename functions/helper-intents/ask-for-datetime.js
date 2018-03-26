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

const {DateTime} = require('actions-on-google');

module.exports = {

  'ask_for_datetime': (conv) => {
    const options = {
      prompts: {
        initial: 'When would you like to schedule the appoinment?',
        date: 'What day was that?',
        time: 'What time?',
      },
    };
    conv.ask(new DateTime(options));
  },

  'ask_for_datetime_confirmation': (conv, params, confirmationGranted) => {
    if (confirmationGranted) {
      // Get the date and time and display it back to the user
      conv.ask('Alright, date set.');
    } else {
      conv.ask(`I'm having a hard time finding an appointment`);
    }
  },

};
