controladdin YMaps
{
    HorizontalStretch = true;
    RequestedHeight = 200;

    StartupScript = 'JsScript/YMaps.js';
    Scripts = 'https://api-maps.yandex.ru/2.1/?apikey=******************&lang=tr-TR',
              'https://code.jquery.com/jquery-3.5.1.slim.min.js';
    Images = 'Images/locNotFound.png';

    procedure GetAddr(AddrObj: JsonObject);
    event OnReady();
}
