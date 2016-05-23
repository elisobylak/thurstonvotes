App.info({
	id: 'com.example.eli.s',
	name: 'Thurston Votes',
	description: 'Example application for Thurston Votes',
	author: 'Eli S. Brieanna B. Jonathan G.',
	email: 'contact@example.com',
	website: 'http://example.com'
});

App.icons({
    // iOS
  'iphone': 'iconDefault.png',
  'iphone_2x': 'iconDefault.png',
  'iphone_3x': 'iconDefault.png',
  'ipad': 'iconDefault.png',
  'ipad_2x': 'iconDefault.png',

  //Android
  'android_ldpi': 'iconDefault.png',
  'android_mdpi': 'iconDefault.png',
  'android_hdpi': 'iconDefault.png',
  'android_xhdpi': 'iconDefault.png',

});

App.launchScreens({
  // iOS
  'iphone': 'Splash_Pages/Android-XHDPI-Port.png',
  'iphone_2x': 'Splash_Pages/Android-XHDPI-Port.png',
  'iphone5': 'Splash_Pages/Android-XHDPI-Port.png',
  'iphone6': 'Splash_Pages/Android-XHDPI-Port.png',
  'iphone6p_portrait': 'Splash_Pages/Android-XHDPI-Port.png',
  'iphone6p_landscape': 'Splash_Pages/Android-XHDPI-Land.png',

  'ipad_portrait': 'Splash_Pages/Android-XHDPI-Port.png',
  'ipad_portrait_2x': 'Splash_Pages/Android-XHDPI-Port.png',
  'ipad_landscape': 'Splash_Pages/Android-XHDPI-Land.png',
  'ipad_landscape_2x': 'Splash_Pages/Android-XHDPI-Land.png',

  // Android
  'android_ldpi_portrait': 'iconDefault.png',
  'android_ldpi_landscape': 'iconDefault.png',
  'android_mdpi_portrait': 'Splash_Pages/Android-MDPI-Port.png',
  'android_mdpi_landscape': 'Splash_Pages/Android-MDPI-Land.png',
  'android_hdpi_portrait': 'Splash_Pages/Android-MDPI-Port.png',
  'android_hdpi_landscape': 'Splash_Pages/Android-MDPI-Land.png',
  'android_xhdpi_portrait': 'Splash_Pages/Android-XHDPI-Port.png',
  'android_xhdpi_landscape': 'Splash_Pages/Android-XHDPI-Land.png',
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule("*");
App.setPreference('Orientation','all','ios');