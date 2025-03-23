var app = angular.module("WarApp", []);

app.controller("WarController", function ($scope) {
    $scope.wars = [
        { 
            name: "World War I", 
            startDate: "1914-07-28", 
            endDate: "1918-11-11", 
            casualties: 16000000, 
            description: "A global war centered in Europe."
        },
        { 
            name: "World War II", 
            startDate: "1939-09-01", 
            endDate: "1945-09-02", 
            casualties: 75000000, 
            description: "The deadliest war in human history."
        }
    ];

    $scope.search = function () {
        let keyword = $scope.searchText ? $scope.searchText.trim().toLowerCase() : "";

        if (keyword === "") {
            document.getElementById("results").style.display = "none";
            return;
        }

        let foundWar = $scope.wars.find(war => war.name.toLowerCase().includes(keyword));

        if (foundWar) {
            let resultText = `${foundWar.name} was a major conflict that started on ${formatDate(foundWar.startDate)} and ended on ${formatDate(foundWar.endDate)}. It resulted in approximately ${numberWithCommas(foundWar.casualties)} casualties. ${foundWar.description}`;
            document.getElementById("warText").innerText = resultText;
            document.getElementById("results").style.display = "block";
        } else {
            document.getElementById("results").style.display = "none";
        }
    };

    function formatDate(dateStr) {
        let options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateStr).toLocaleDateString("en-US", options);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});
