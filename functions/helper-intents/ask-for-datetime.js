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

  'ask.for.datetime': (app) => {
    app.askForDateTime('When do you want to come in?',
        'What is the best date to schedule your appointment?',
        'What time of day works best for you?');
  },

  'ask.for.datetime.confirmation': (app) => {
    if (app.getDateTime()) {
      app.ask({speech: 'Great, see you at your appointment!',
        displayText: 'Great, we\'ll see you on ' + app.getDateTime().date.month
            + '/' + app.getDateTime().date.day
            + ' at ' + app.getDateTime().time.hours
            + (app.getDateTime().time.minutes || '')});
    } else {
      app.ask('I\'m having a hard time finding an appointment');
    }
  }

};
