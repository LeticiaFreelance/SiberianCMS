
App.factory('Folder', function($http, Url) {

    var factory = {};

    factory.value_id = null;
    factory.folder_id = null;

    factory.findAll = function() {

        if(!this.value_id) return;

        return $http({
            method: 'GET',
            url: Url.get("folder/mobile_list/findall", {value_id: this.value_id, category_id: this.category_id}),
            cache: true,
            responseType:'json'
        });
    };

    return factory;
});