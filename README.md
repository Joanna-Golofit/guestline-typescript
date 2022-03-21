## General info

:star: 
`npm i` 
shall be enough to build the project,

:orange_circle: you can see it [here](jg-guestline.netlify.app/)


by <a href="https://github.com/Joanna-Golofit">![GitHub](https://img.shields.io/badge/-Joanna--Golofit-05122A?style=flat&logo=github)</a> 

===========================================

## Description & requirements

Your goal is to create a page showing a list of hotels and their rooms.



Please use React and (preferably) Typescript to implement this challenge as these are our technologies of choice for front end work. There are no other restrictions on technology use.



To get the information to present, you will need to query the following API:

https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG



This returns a list of hotels, with an Id. The Id can be used to query this query for the room types:


https://obmng.dbm.guestline.net/api/roomRates/OBMNG/[hotelId] for example, https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG1



Guests using the site should be able to:



:green_circle: Filter based on the star rating of the hotel, that is, given I have selected 3 stars, then I am able to see all hotels with a 3 and above rating.

:green_circle: Filter based on the capacity of the room. That is, when I have selected 1 adult and 1 child then I am able to see all rooms with at least that capacity. Therefore, I will not be shown any rooms which do not accept children.

:green_circle: View all images of the displayed hotel
See hotel details (including hotel name, address and star rating) and room details (including room type, max adults, max children and long description)


For other requirements, please see the attached [mockup sketch](https://gxpservicesstagestorage.blob.core.windows.net/hotelpagecodetest/9SYKaPm4q85GqTZzno7AT3.png). Note that the crossed boxes on mockup is the location for images. The URLs can be found in the response to the initial request.



Please approach this challenge like you would any work task, and importantly keep things simple.



Submitting your solution



We expect to build your submission locally and review it's code. If you host it publicly let us know, but that's not necessary. Please send us source code (preferably a link to a public repository) with instructions on how to build it in a readme file Readme.md. We will always provide feedback about your work.


