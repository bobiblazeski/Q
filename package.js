Package.describe({
  "name": 'bobiblazeski:q',
  "version": "1.3.5",
  "summary": 'Javascript utility functions',
  "git": 'https://github.com/bobiblazeski/Q.git',
  "documentation": 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('./dist/q.js',['client','server']);
  api.export("Q");
});