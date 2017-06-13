Template.sidebar.helpers({
    active(routeName) {
        var curRoute = Iron.Location.get().path;
        console.log("Current Route is : " + curRoute);
        return curRoute === routeName ? 'active' : '';
    }
});
