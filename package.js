Package.describe({
  "name": 'bobiblazeski:q',
  "version": "1.5.0",
  "summary": 'Javascript utility functions',
  "git": 'https://github.com/bobiblazeski/Q.git',
  "documentation": 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('./dist/q.js');
  api.export("Q");
});