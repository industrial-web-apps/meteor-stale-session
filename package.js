Package.describe({
  name:    'caitken:stale-session-toggleable',
  summary: 'Stale session and session timeout handling for meteorjs that can be turned off',
  git:     "https://github.com/industrial-web-apps/meteor-stale-session.git",
  version: "1.0.9"
});

Package.onUse(function(api) {
    api.use('accounts-base@1.0.0', ['client','server']);
    api.use('jquery@1.0.0', 'client');
    api.addFiles('client.js', 'client');
    api.addFiles('server.js', 'server');
});
