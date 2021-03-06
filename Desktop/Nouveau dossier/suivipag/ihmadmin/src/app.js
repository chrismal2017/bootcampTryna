(function() {
        'use strict';
    angular.module('pag-site', [
      "ui.router", "ngResource",
      "ncy-angular-breadcrumb",
      "leaflet-directive",
      "ngFileUpload",
      "angularMoment",
      "ui.select",
      "ngSanitize",
      "ui.tinymce",
      "ngCookies",
      "angular-simple-chat",
      "toaster",
      "ngAnimate",
      "angular-google-analytics",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.poster",
      "datatables",
      "datatables.columnfilter",
      "slugifier"
    ])
    .run(function(amMoment, $rootScope, DTDefaultOptions) {
        amMoment.changeLocale('fr');
        $rootScope.videogularThemes = "/node_modules/videogular/dist/themes/default/videogular.css";
        $rootScope.ngfMaxUpload = '5MB';
        $rootScope.ngfMinUpload = '100';

        // Path must begin at root folder
        DTDefaultOptions.setLanguage({
            sUrl: "src/constantes/datatables-french.json"
        });
    }
    )
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, AnalyticsProvider) {
        AnalyticsProvider.setAccount('UA-38996803-1');
        $urlRouterProvider.otherwise("/erreur");
          // Now set up the states
        $stateProvider
          // ADMIN
          .state('admin', {
              url: '/admin',
              abstract: true,
              templateUrl: 'views/admin/template.html'
              
          })
          .state('admin.main', {
              url: '/main',
              controller: "AdminHomeCtrl",
              templateUrl: 'views/admin/home.html',
              ncyBreadcrumb: {
                  label: 'Admin'
              }
          })
          .state('admin.piliers', {
              url: '/piliers',
              controller: "AdminPiliersCtrl",
              templateUrl: 'views/admin/piliers/piliers.html',
              ncyBreadcrumb: {
                  label: 'Piliers'
              }
          })
          .state('admin.newpilier', {
              url: '/piliers/new',
              controller: "AdminNewPiliersCtrl",
              templateUrl: 'views/admin/piliers/form.html',
              ncyBreadcrumb: {
                  label: 'Piliersnew'
              }
          })
          .state('admin.axes', {
              url: '/axes',
              controller: "AdminAxesCtrl",
              templateUrl: 'views/admin/axes/axes.html',
              ncyBreadcrumb: {
                  label: 'Axes'
              }
          })
          .state('admin.newaxe', {
              url: '/axes/new',
              controller: "AdminNewAxeCtrl",
              templateUrl: 'views/admin/axes/form.html',
              ncyBreadcrumb: {
                  label: 'Axesnew'
              }
          })
          .state('admin.secteurs', {
              url: '/secteurs',
              controller: "AdminSecteursCtrl",
              templateUrl: 'views/admin/secteurs/secteurs.html',
              ncyBreadcrumb: {
                  label: 'Secteurs'
              }
          })
          .state('admin.newsecteur', {
              url: '/secteurs/new',
              controller: "AdminNewSecteurCtrl",
              templateUrl: 'views/admin/secteurs/form.html',
              ncyBreadcrumb: {
                  label: 'Secteursnew'
              }
          })
          .state('admin.projets', {
              url: '/projets',
              controller: "AdminProjetsCtrl",
              templateUrl: 'views/admin/projets/projets.html',
              ncyBreadcrumb: {
                  label: 'Projets'
              }
          })
          .state('admin.newprojet', {
              url: '/projets/new',
              controller: "AdminNewProjetCtrl",
              templateUrl: 'views/admin/projets/form.html',
              ncyBreadcrumb: {
                  label: 'Projetsnew'
              }
          })

          // HOME
            .state('home', {
                url: "/",
                controller: "SiteHomeCtrl",
                templateUrl: "views/site/home/home.html",
                ncyBreadcrumb: {
                    label: 'Accueil'
                }
            })

            .state('piliers', {
                url: "/piliers",
                controller: "SitePiliersCtrl",
                templateUrl: "views/site/piliers/piliers.html",
                ncyBreadcrumb: {
                    label: 'Piliers'
                }
            })
            .state('pilier', {
                url: "/pilier/:id",
                controller: "SiteOnePilierCtrl",
                templateUrl: "views/site/piliers/pilier.html",
                ncyBreadcrumb: {
                    label: 'Pilier'
                }
            })

            .state('axes', {
                url: "/axes",
                controller: "SiteAxesCtrl",
                templateUrl: "views/site/axes/axes.html",
                ncyBreadcrumb: {
                    label: 'Axes'
                }
            })
            .state('axe', {
                url: "/axe/:id",
                controller: "SiteOneAxeCtrl",
                templateUrl: "views/site/axes/axe.html",
                ncyBreadcrumb: {
                    label: 'Axe'
                }
            })

            .state('secteurs', {
                url: "/secteurs",
                controller: "SiteSecteursCtrl",
                templateUrl: "views/site/secteurs/secteurs.html",
                ncyBreadcrumb: {
                    label: 'Secteurs'
                }
            })

            .state('projets', {
                url: "/projets",
                controller: "SiteProjetsCtrl",
                templateUrl: "views/site/projets/projets.html",
                ncyBreadcrumb: {
                    label: 'Projets'
                }
            })
            .state('projet', {
                url: "/projet/:nom/{id:int}",
                controller: "SiteOneProjetCtrl",
                templateUrl: "views/site/projets/projet.html",
                ncyBreadcrumb: {
                    label: 'Projet'
                }
            })

            .state('forum', {
                url: "/forum",
                controller: "SiteForumCtrl",
                templateUrl: "views/site/forum/index.html",
                ncyBreadcrumb: {
                    label: 'Forum'
                  }
            })
            .state('newforum', {
                url: "/forum/new",
                controller: "SiteForumAddCtrl",
                templateUrl: "views/site/forum/add-new.html",
                ncyBreadcrumb: {
                    label: ''
                  }
            })

            .state('sondage', {
                url: "/sondage",
                controller: "SiteSondageCtrl",
                templateUrl: "views/site/sondage/index.html",
                ncyBreadcrumb: {
                    label: 'Sondage'
                  }
            })
            .state('newsondage', {
                url: "/sondage/new",
                controller: "SiteSondageAddCtrl",
                templateUrl: "views/site/sondage/add-new.html",
                ncyBreadcrumb: {
                    label: ''
                  }
            })


            .state('debat', {
                url: "/forum/debat/:id",
                controller: "SiteDebatCtrl",
                templateUrl: "views/site/forum/debat.html",
                ncyBreadcrumb: {
                    label: 'Discussion'
                  }
            })

            .state('search', {
                url: "/search",
                controller: "SiteSearchCtrl",
                templateUrl: "views/site/searchs/search.html",
                ncyBreadcrumb: {
                    label: 'Recherche'
                },
                params: {
                    params: null,
                    do:false
                }
            })

            .state('resetpassword', {
                url: "/resetpassword",
                controller: "SiteUserCtrl",
                templateUrl: "views/site/user/resetpassword.html",
                ncyBreadcrumb: {
                    label: 'Modifier mot de passe'
                  }
            })

            .state('filterprojet', {
                url: "/filtre-projets",
                controller: "SiteFiltreProjetsCtrl",
                templateUrl: "views/site/projets/filtreprojets.html",
                ncyBreadcrumb: {
                    label: 'Filtre projets'
                  }
            })

            .state('404', {
                url: "/erreur",
                controller: "SiteNotFoundCtrl",
                templateUrl: "views/site/not-found/error.html",
                ncyBreadcrumb: {
                    label: '404'
                  }
            })
            ; // End stateProvider
          $locationProvider.html5Mode(true);
    });
    })();
