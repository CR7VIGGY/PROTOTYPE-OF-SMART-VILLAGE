# PROTOTYPE-OF-SMART-VILLAGE
A prototype of Smart village that consist Electricity detection to avoid electricity thefts in villages and Ground level Water detection and plotting both the data on a heat map to show the mostly affected areas.

Our main aim is to detect those areas in villages in any state of india which is utilizing more electricity that is need to be consumed.
As the electricity department of any state cannot detect it too early about any electricity theft but using this prototype it will as easy as possible.
We are plotting real time heat maps where the electricity is being consumed more than supplied.
Now the data search for specific user will be done with his current reading which will be detected using a rasberry pi 3 using matrix reading through a python program. Then this collected data will be sent to a Cloud using python program againg which consist the the user id and password of the mlab account. Then this data will get collected in a mlab collection then we need to reflect the changes happing in the reading to the webpage account of the user . This process will be done through Node.js and mongoDB . 
