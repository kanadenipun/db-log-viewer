Router.route('/', {
    template: 'logs',
    name: 'logs'
});

Router.route('/reports', {
    name: 'reports',
    template: 'reports'
});

Router.route('/analytics', {
    template: 'analytics',
    name: 'analytics'
});

Router.configure({
    layoutTemplate: 'main'
});