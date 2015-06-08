/*global define,Promise*/

define(
    [],
    function () {
        "use strict";

        /**
         * Updates the title of the current window to reflect the name
         * of the currently navigated-to domain object.
         * @constructor
         */
        function WindowTitler(navigationService, $rootScope, $document) {
            // Look up name of the navigated domain object...
            function getNavigatedObjectName() {
                var navigatedObject = navigationService.getNavigation();
                return navigatedObject && navigatedObject.getModel().name;
            }

            // Set the window title...
            function setTitle(name) {
                $document[0].title = name;
            }

            // Watch the former, and invoke the latter
            $rootScope.$watch(getNavigatedObjectName, setTitle);
        }

        return WindowTitler;
    }
);