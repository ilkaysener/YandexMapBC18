How can I show a yandex map on the customer card in Business Central?

# YandexMapBC18
This example ensures shows a yandex map embed in Dynamics 365 Business Central Customer Card.

# Control Add-in
First we start by creating a control addin. In the example, this file is named YMaps.CtrlAddin.al We create the JsScript folder and create a javascript file with the name YMaps.js

# Page Extension
We create an extension from the card page where we will add the Control Addin. In the example, this is the Customer Card page with the name CustomerCard.PageExt.al. I preferred to add it at the end of the content. That's all, yandex map is there.

# PS
This map get the client address and searches through the yandex api and displays the result.

#Microsoft #Dynamics365 #BusinessCentral
