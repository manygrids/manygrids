;(function (window, undefined) {

  function $(id) {
    return document.getElementById(id);
  }
  
  function $c(el) {
    return document.createElement(el);
  }

  function css(el, cssObj) {
    for (var i in cssObj) {
      el.style[i] = cssObj[i];
    }
  }
  
  var logs = [];
  
  var isShow = false;
  var logPanelIsShow = false;

  window.console = window.console || {};
  var console = window.console;

  console.log = function () {
    logs.push(arguments[0].toString());
  };

  window.addEventListener('load', function () {
    var debugToolBar = $c('div');
    css(debugToolBar, {
      position: 'fixed',
      top: '0px',
      right: '0px',
      zIndex: 999
    });
    debugToolBar.id = '_debugToolBar';

    var showBtn = $c('input');
    showBtn.type = 'button';
    css(showBtn, {
      width: '60px',
      fontSize: '30px',
      textAlign: 'center'
    });
    showBtn.value = '<<';
    showBtn.id = '_showBtn';

    debugToolBar.appendChild(showBtn);

    
    var refreshBtn = $c('input');
    refreshBtn.type = 'button';
    refreshBtn.value = 'F5';
    refreshBtn.id = '_refreshBtn';
    css(refreshBtn, {
      marginLeft: '10px',
      fontSize: '30px',
      display: 'none'
    });
    refreshBtn.addEventListener('click', function () {
      location.reload();
    });
    
    debugToolBar.appendChild(refreshBtn);
    
    var logPanel = $c('div');
    css(logPanel, {
      height: '100px',
      overflow: 'auto',
      display: 'none'
    });
    
    var consoleBtn = $c('input');
    consoleBtn.type = 'button';
    consoleBtn.value = 'con';
    consoleBtn.id = '_consoleBtn';
    css(consoleBtn, {
      marginLeft: '10px',
      fontSize: '30px',
      display: 'none'
    });
    consoleBtn.addEventListener('click', function () {
      if (logPanelIsShow) {
        css(consoleBtn, {
          color: '#000'
        });
        css(clearBtn, {
          display: 'none'
        });
        css(logPanel, {
          display: 'none'
        });
        
      } else {
        css(consoleBtn, {
          color: '#f00'
        });
        css(clearBtn, {
          display: ''
        });
        css(logPanel, {
          display: 'block'
        });
      }
      
      logPanelIsShow = !logPanelIsShow;
    });

    debugToolBar.appendChild(consoleBtn);
    
    
    var clearBtn = $c('input');
    clearBtn.type = 'button';
    clearBtn.value = 'cls';
    clearBtn.id = '_clearBtn';
    css(clearBtn, {
      marginLeft: '10px',
      fontSize: '30px',
      display: 'none'
    });
    clearBtn.addEventListener('click', function () {
      logPanel.innerHTML = '';
    });
    
    debugToolBar.appendChild(clearBtn);
    
    
    debugToolBar.appendChild(logPanel);
    document.body.appendChild(debugToolBar);

    $('_showBtn').addEventListener('click', function () {
      if (!isShow) {
        css($('_debugToolBar'), {
          width: '300px'
        });
        showBtn.value = '>>';
        css(consoleBtn, {
          color: '#000',
          display: ''
        });
        css(clearBtn, {
          display: ''
        });
        css(refreshBtn, {
          display: ''
        });
      } else {
        css($('_debugToolBar'), {
          width: '60px'
        });
        showBtn.value = '<<';
        css(consoleBtn, {
          color: '#000',
          display: 'none'
        });
        css(clearBtn, {
          display: 'none'
        });
        css(refreshBtn, {
          display: 'none'
        });
        logPanelIsShow = false;
        css(logPanel, {
          display: 'none'
        });
      }
      
      isShow = !isShow;
      
    }, false);
    
    console.log = function () {
      logPanel.innerHTML += '<div>' + arguments[0].toString() + '</div>';
    };

    for (var i = 0; i < logs.length; i++) {
      console.log(logs[i]);
    }

  }, false);

})(window);