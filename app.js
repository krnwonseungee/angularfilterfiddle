var app = angular.module('carApp', []);

function carHireController($scope) {
    $scope.carTypes = {intermediate: false, premium:false, mini: false, any: false};
    $scope.providers = {atlasChoice: false, holidayAutos:false, avis: false, any: false};

    $scope.results = [
        {
            "company": {
                "name": "Atlas Choice",
                "location": {
                    "latitude": "53.186030",
                    "longitude": "-3.032784"
                }
            },
            "price": {
                "value": 34.23,
                "currency": "£"
            },
            "carType": {
                "name": "Mini"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Atlas Choice",
                "location": {
                    "latitude": "53.186030",
                    "longitude": "-3.032784"
                }
            },
            "price": {
                "value": 44.23,
                "currency": "£"
            },
            "carType": {
                "name": "Economy"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Atlas Choice",
                "location": {
                    "latitude": "53.186030",
                    "longitude": "-3.032784"
                }
            },
            "price": {
                "value": 54.23,
                "currency": "£"
            },
            "carType": {
                "name": "Compact"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Atlas Choice",
                "location": {
                    "latitude": "53.186030",
                    "longitude": "-3.032784"
                }
            },
            "price": {
                "value": 64.23,
                "currency": "£"
            },
            "carType": {
                "name": "Intermediate"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 4,
                "airCon": true,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },



        {
            "company": {
                "name": "Holiday Autos",
                "location": {
                    "latitude": "53.191945",
                    "longitude": "-3.056130"
                }
            },
            "price": {
                "value": 65.23,
                "currency": "£"
            },
            "carType": {
                "name": "Intermediate"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 4,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },



        {
            "company": {
                "name": "Holiday Autos",
                "location": {
                    "latitude": "53.191945",
                    "longitude": "-3.056130"
                }
            },
            "price": {
                "value": 75.23,
                "currency": "£"
            },
            "carType": {
                "name": "Premium"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 4,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Avis",
                "image": "http://www.travelsupermarket.com/images/carhire/logos/avis.gif",
                "location": {
                    "latitude": "53.205673",
                    "longitude": "-3.024502"
                }
            },
            "price": {
                "value": 36.23,
                "currency": "£"
            },
            "carType": {
                "name": "Mini"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Avis",
                "location": {
                    "latitude": "53.205673",
                    "longitude": "-3.024502"
                }
            },
            "price": {
                "value": 46.23,
                "currency": "£"
            },
            "carType": {
                "name": "Economy"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },
        {
            "company": {
                "name": "Avis",
                "location": {
                    "latitude": "53.205673",
                    "longitude": "-3.024502"
                }
            },
            "price": {
                "value": 56.23,
                "currency": "£"
            },
            "carType": {
                "name": "Compact"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 2,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },
        {
            "company": {
                "name": "Avis",
                "location": {
                    "latitude": "53.205673",
                    "longitude": "-3.024502"
                }
            },
            "price": {
                "value": 66.23,
                "currency": "£"
            },
            "carType": {
                "name": "Intermediate"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 4,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        },


        {
            "company": {
                "name": "Avis",
                "location": {
                    "latitude": "53.205673",
                    "longitude": "-3.024502"
                }
            },
            "price": {
                "value": 76.23,
                "currency": "£"
            },
            "carType": {
                "name": "Premium"
            },
            "carDetails": {
                "hireDuration": 7,
                "doors": 4,
                "airCon": false,
                "optionalExtras": true,
                "localTax": true,
                "unlimitedMileage": true,
                "depositRequired": true,
                "cancellation": {
                    "free": true,
                    "hover": "Please read Terms & Conditions for details on free cancellation"
                },
                "cdw": true,
                "theftProtection": true,
        "acriss": "MBMN"
            },
            "promotion": {
                "promote": true,
                "message": "NO Credit card fees; NO Amendment & NO Cancellation fees; Freephone support. Book Now - Limited Special Offer!"
            }
        }



    ];

}

app.filter('myfilter', function() {
   return function( results, carTypes, providers) {
    debugger
    var filtered = [];
    var checkedTypeValues = [];
    var checkedProviderValues = [];

    // isolating checked values
    for(var cKey in carTypes) {
        if(carTypes.hasOwnProperty(cKey)) {
            if(carTypes[cKey] === true) {
                capitalizedKey = cKey.charAt(0).toUpperCase() + cKey.slice(1);
                checkedTypeValues.push(capitalizedKey);
            }
        }
    }

    for(var pKey in providers) {
        if(providers.hasOwnProperty(pKey)) {
            if(providers[pKey] === true) {
                capitalizedKey = pKey.charAt(0).toUpperCase() + pKey.slice(1);
                checkedProviderValues.push(capitalizedKey);
            }
        }
    }
    angular.forEach(results, function(result) {
       if( carTypes.any === true || (carTypes.premium === false && carTypes.intermediate === false && carTypes.mini === false) ) {
          filtered.push(result);
        }
        else if( $.inArray(result.carType.name, checkedTypeValues) != -1 ){
            filtered.push(result);
        }
    });
    return filtered;
  };
});



// var app = angular.module('clientApp', ['ngResource', 'App.filters']);

// function MainController($scope) {

//     $scope.player_genders = {female: false, male:false};;
//     $scope.player_name = "";
//     $scope.player_age = "";

//     $scope.players = [
//         {"name": "Rod Laver",
//             "gender": "female",
//             "date": "1938/8/9",
//             "imageUrl": "img/rod-laver.gif",
//             "age": 75},
//         {"name": "Boris Becker",
//             "gender": "male",
//             "date": "1967/11/22",
//             "imageUrl": "img/boris-becker.gif",
//             "age": 45},
//         {"name": "John McEnroe",
//             "gender": "male",
//             "date": "1959/2/16",
//             "imageUrl": "img/john-mc-enroe.gif",
//             "age": 54},
//         {"name": "Rafa Nadal",
//             "gender": "female",
//             "date": "1986/5/24",
//             "imageUrl": "img/ndl.jpg",
//             "age": 27}
//     ]

//     app.filter('myfilter', function() {
//     return function(items, options ) {
//       // loop over all the options and if true ensure the car has them
//       // I cant do this for you beacause I don't know how you would store this info in the car object but it should not be difficult
//       return carMatches;
//     };
// });
// }

