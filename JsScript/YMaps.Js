
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnReady', '');

var myMap, custAddr;
window.GetAddr = function(AddrObj){
    custAddr = AddrObj.addr;
    ymaps.ready(init);
}

function init () {
    
    ymaps.geocode('"' + custAddr + '"', {
        results: 1
    }).then(function (res) {
        var found = res.metaData.geocoder.found;
        if (found == 1)
        {
            myMap = new ymaps.Map('controlAddIn', {
                center: [55.76, 37.64],
                zoom: 10,
                controls: ['zoomControl', 'rulerControl']
            });
            
            var firstGeoObject = res.geoObjects.get(0),
            bounds = firstGeoObject.properties.get('boundedBy');

            firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
            firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
            
            myMap.geoObjects.add(firstGeoObject);
            myMap.setBounds(bounds, {
                checkZoomRange: true
            });
        }
        else
        {
            var image;
            controlAddIn = $("#controlAddIn");
            imageDiv = $("<div />",{id: "imageDiv"});
            image = $("<img />", {src: Microsoft.Dynamics.NAV.GetImageResource("Images/locNotFound.png")});
            imageDiv.append(image);
            controlAddIn.append(imageDiv);
        }
    });
}

