Router.configure({
    layoutTemplate: 'app-body',
    notFoundTemplate: 'app-not-found',
    loadingTemplate: 'app-loading'
});
Router.route('/', {
    template: 'vote'
});
Router.route('/vote');
Router.route('/polls');
Router.route('/results');
Router.route('/signIn');

Router.plugin('auth', {
    authenticate: {
        route: 'signIn'
    },
    except: [
        'vote',
        'signIn'
    ]
});

