import angular from 'angular';

let personContent = () => {
    return {
        template: require('./personContent.html'),
        controller: 'personContentCtrl',
        controllerAs: 'personContent',
        scope: {
            person: '='
        },
        bindToController: true
    }
};

class personContentCtrl {}

const MODULE_NAME = 'personContent';

angular.module(MODULE_NAME, [])
    .directive('personContent', personContent)
    .controller('personContentCtrl', personContentCtrl);

export default MODULE_NAME;