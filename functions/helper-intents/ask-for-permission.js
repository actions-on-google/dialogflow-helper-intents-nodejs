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

  'ask.for.permission': (app) => {
    // Choose one or more supported permissions to request:
    // app.SupportedPermissions.NAME
    // app.SupportedPermissions.DEVICE_PRECISE_LOCATION
    // app.SupportedPermissions.DEVICE_COARSE_LOCATION
    let namePermission = app.SupportedPermissions.NAME;
    let preciseLocationPermission = app.SupportedPermissions.DEVICE_PRECISE_LOCATION;
    // Ask for more than one permission. User can authorize all or none.
    app.askForPermissions('To address you by name and know your location',
        [namePermission, preciseLocationPermission]);
  },

  'ask.for.permission.confirmation': (app) => {
    if (app.isPermissionGranted()) {
      const displayName = app.getUserName().displayName;
      const address = app.getDeviceLocation().address;
      app.ask('I will tell your driver to pick up ' + displayName +
          ' at ' + address);
    } else {
      // Response shows that user did not grant permission
      app.ask('Sorry, I could not figure out where to pick you up.');
    }
  }

};
