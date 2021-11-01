if (window.ufstreamsectionapp.getScriptSource === undefined) {
  window.ufstreamsectionapp =  {};
}

  if (window.ufstreamsectionapp.getScriptSource === undefined) {
  window.ufstreamsectionapp.getScriptSource = () => {

  console.log('getScriptSource');

  var themeCheck = document.body.dataset.domainTheme;

  /* Print App Configuration in debug mode */

  if (themeCheck === undefined) {
    console.log('Tv1 Detected');

    return ('https:\/\/uberflip-successteam.s3.amazonaws.com\/sapirg\/_sectionHeaderTv1.js');

  } else {
    console.log('Tv2 Detected');

    return ('https:\/\/uberflip-successteam.s3.amazonaws.com\/sapirg\/_sectionHeaderTv2.js');
  }
  }; 
}

  window.ufstreamsectionapp.sectionHeaderStreamArray = [{{stream_ids}}];
  window.ufstreamsectionapp.debug_mode = {{debug_mode}};

  const sectionHeaderScript = document.createElement('script');
  sectionHeaderScript.id = 'sectionHeaderScript';
  sectionHeaderScript.type='text/javascript';
  sectionHeaderScript.async = true;
  sectionHeaderScript.src =  window.ufstreamsectionapp.getScriptSource();
  document.body.appendChild(sectionHeaderScript);

  sectionHeaderScript.onload = function() {
    console.log('sectionHeaderScript.onload');
    window.ufstreamsectionapp.sectionHeaderInit();
  }