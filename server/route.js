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
                this.response.setHeader("Content-Type", "application/json");
                this.response.setHeader("Access-Control-Allow-Origin", "*");
                this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                this.response.statusCode = 200;
                this.response.end('{ \"status\": \"200\", \"message\": \"Success\" }');
            }
        });
});
