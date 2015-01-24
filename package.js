Package.describe({
  name: 'bobiblazeski:q',
  version: '0.0.1',
  summary: 'Javascript utility functions',
  git: 'https://github.com/bobiblazeski/Q.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('q.js');
  api.export("Q");
});
