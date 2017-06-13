Router.map(function () {
    this.route('logPost', {
        path: '/api/logs',
        where: 'server',
        action: function () {
            var requestMethod = 'POST';
            BffLogs.insert(
                this.request.body
            );
            this.response.statusCode = 200;
            this.response.end('success');
        }
    }),
        this.route('multiLogPost', {
            path: '/api/logs/multiple',
            where: 'server',
            action: function () {
                var requestMethod = 'POST';
                var requestbody = this.request.body;
                requestbody.forEach(function(entry){
                    BffLogs.insert(entry);
                });
                this.response.statusCode = 200;
                this.response.end('success');
            }
        });
});
