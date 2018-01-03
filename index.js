const ensureRequired = require('./lib/ensureRequired');
const PresenceSystem = require('./lib/presenceSystem');
const getReply = require('./lib/getReply');
const initialize = require('./lib/initialize');
const getCID = require('./lib/getCID');
const get = require('./lib/safeFirebaseObject');

module.exports = {
  ensureRequired,
  PresenceSystem,
  getReply,
  initialize,
  getCID,
  safeObject: get.safeObject,
  safeString: get.safeString,
};
