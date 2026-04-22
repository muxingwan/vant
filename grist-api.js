// Grist API 轻量级离线版
(function() {
  var grist = {
    _onRecordCallback: null,
    ready: function(opts) {
      window.parent.postMessage({ type: 'ready' }, "*");
    },
    onRecord: function(cb) {
      this._onRecordCallback = cb;
    },
    docApi: {
      applyUserActions: function(actions) {
        return new Promise((resolve, reject) => {
          const requestId = Math.random().toString(36).substr(2, 9);
          window.parent.postMessage({
            type: 'applyUserActions',
            actions: actions,
            requestId: requestId
          }, "*");
          window.addEventListener('message', function handler(e) {
            if (e.data.requestId === requestId) {
              window.removeEventListener('message', handler);
              if (e.data.error) reject(new Error(e.data.error));
              else resolve(e.data.response);
            }
          });
        });
      }
    }
  };
  window.addEventListener('message', function(e) {
    if (e.data.type === 'record' && grist._onRecordCallback) {
      grist._onRecordCallback(e.data.record);
    }
  });
  window.grist = grist;
})();