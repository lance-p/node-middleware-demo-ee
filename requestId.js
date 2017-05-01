// doing this returns the same id for all requests for the same session
const sameIdForAllRequests = require('cuid')();
// that is until node restarts, i think, this is due to node only loading the module 
// one time and caching. so you dont want to do this (unless it is some singleton - something)
// that doesnt depend on state

// but this does not run the function on node module load
const newIdForAllRequests = require('cuid');

const requestId = (req, res, next) => {
    var sameId = sameIdForAllRequests;
    var newId = newIdForAllRequests();
    req.id = newId;
    res.id = newId;
    req.sameId = sameId;
    res.sameId = sameId;
    next();
}

module.exports = requestId;