import { Meteor } from 'meteor/meteor';

import  './../imports/startup/server';

import './../imports/api/hfCampaign/server';
import './../imports/api/sites/server';

Meteor.startup(() => {
  loadHfCampaign()
  loadSites()
});
