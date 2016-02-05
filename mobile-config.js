App.info({
	id: 'com.example.eli.s',
	name: 'Thurston Votes',
	description: 'Example application for Thurston Votes',
	author: 'Eli S. Brieanna B.',
	email: 'contact@example.com',
	website: 'http://example.com'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule("*");