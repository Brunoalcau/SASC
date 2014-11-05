'use strict';

var couchapp = require('couchapp'),
  path = require('path'),
  ddoc = {
    _id: '_design/app',
    views: {},
    lists: {},
    shows: {},
    fulltext: {},
    rewrites: [{
      from: '/',
      to: 'index.html'
    }]
  };

module.exports = ddoc;

ddoc.views.doencas = {
  map:function(doc){
    if(doc.tipoDocumento ==='D'){
      emit(doc._id,doc);
    }
  },
};

ddoc.views.parcientes = {
  map:function(doc){
    if(doc.tipoDocumento ==='P'){
      emit(doc.nomeCompleto,doc);
    } 
  }
}
couchapp.loadAttachments(ddoc, path.join(__dirname, 'app'));