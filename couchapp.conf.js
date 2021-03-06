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

ddoc.views.campanhas = {
  map:function(doc){
    if(doc.tipoDocumento ==='C'){
      emit(doc._id,doc);
    }
  },
};

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
};
ddoc.views.campanhaativadas = {
  map: function(doc){
    if(doc.tipoDocumento==='C' && doc.situacao ==='NOVO'){
      emit(doc._id,doc.doenca);
    }
  }
};
ddoc.views.parcientePorSituacao = {
  map:function(doc) {
    if(doc.tipoDocumento === 'P'){
      emit( doc.situacao,doc);
    }
  }
};
ddoc.views.campanhaPorDoenca = {
  map:function (doc){
      if((doc.situacao === 'NOVO'|| doc.situacao === 'PROCESSANDO')  && doc.tipoDocumento === 'C'){
        emit(doc.doenca,doc);
      }
    }
};
ddoc.views.docTipoPorSituacao = {
  map:function(doc){
    emit([doc.tipoDocumento,doc.situacao],doc);
  }
}


couchapp.loadAttachments(ddoc, path.join(__dirname, 'app'));