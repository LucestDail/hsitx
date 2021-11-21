setTimeout(function() {

  // Configuration
  var menuWidth = 200; // Width of your menu

  var currentPageUrl = window.location.href;
  var stylesPath = chrome.runtime.getURL('styles.css');
  var currentPageSource = $("html").html();
  var currentPageHeadSource = document.getElementsByTagName('head')[0].innerHTML;
  var currentPageBodySource = document.getElementsByTagName('body')[0].innerHTML;
  var injectPageHTML = '';
  /**
   * HTML 삽입 여부 확인
   * 특정 키워드 기준(삽입 HTML DOM class) 존재할 경우 삽입 함수 실행 안함
   */
  $(document).ready(function(){
    document.getElementById("injectHTMLtarget").innerHTML='<object type="text/html" data="index.html"></object>';
  })
  var injectPageHTML = '<div id="injectHTMLtarget"><table><tr><td>123</td></tr></table></div>';
  if(currentPageSource.includes('injectedITXExtension')){
    $('#injectedITXExtension').remove();
  }else{
    $('head').html(
      currentPageHeadSource + 
      '<script src="injectHTML.js"></script>' +
      '<link rel="stylesheet" href="'+stylesPath+'">'
    );
    $('body').html(
      '<div style="float:left; width: 100%; height: 100%;">' +
      '<div style="height: 100%; width: calc(100% - ' + menuWidth + 'px);">'+ currentPageBodySource + '</div>' + 
      '<div id="injectedITXExtension" style="position: fixed; bottom: 0; right: 0; height: 100%; width:'+menuWidth+'px;">'+ injectPageHTML +'</div>' +
      '</div>'
    );
  }
  });
