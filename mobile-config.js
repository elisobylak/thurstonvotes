App.info({
	id: 'com.example.eli.s',
	name: 'Thurston Votes',
	description: 'Example application for Thurston Votes',
	author: 'Eli S. Brieanna B.',
	email: 'contact@example.com',
	website: 'http://example.com'
});

App.icons({
  'android_ldpi': 'iconDefault.png',
  'android_mdpi': 'iconDefault.png',
  'android_hdpi': 'iconDefault.png',
  'android_xhdpi': 'iconDefault.png',

});

App.launchScreens({
  // iOS
  'iphone': 'iconDefault.png',
  'iphone_2x': 'iconDefault.png',
  'iphone5': 'iconDefault.png',
  'iphone6': 'iconDefault.png',
  'iphone6p_portrait': 'iconDefault.png',
  'iphone6p_landscape': 'iconDefault.png',

  'ipad_portrait': 'iconDefault.png',
  'ipad_portrait_2x': 'iconDefault.png',
  'ipad_landscape': 'iconDefault.png',
  'ipad_landscape_2x': 'iconDefault.png',

  // Android
  'android_ldpi_portrait': 'iconDefault.png',
  'android_ldpi_landscape': 'iconDefault.png',
  'android_mdpi_portrait': 'iconDefault.png',
  'android_mdpi_landscape': 'iconDefault.png',
  'android_hdpi_portrait': 'iconDefault.png',
  'android_hdpi_landscape': 'iconDefault.png',
  'android_xhdpi_portrait': 'iconDefault.png',
  'android_xhdpi_landscape': 'iconDefault.png'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule("*");