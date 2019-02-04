# maps
Lab 3
5. Deliverable Description: 
After you successfully deployed the cell tower map, build another web map of airports in U.S. In the assets directory of this lab, you will see two geojson files: 

airports.geojson contains all the airports in United States. This data is converted from a shapefile, which was downloaded and unzipped from https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile. For each airport feature, the field CNTL_TWR indicates whether the airport has an air traffic control tower or not. If there is a tower, the value of CNTL_TWR is 'Y', otherwise 'N'. You may need to find an appropriate icon on font awesome. (7 points)

us-states.geojson is a geojson data file containing all the states boundaries of United States. This data is acquired from from Mike Bostock of D3. The count field indicates the number of airports within the boundary of the state under investigation. So please make a choropleth map based on the number of airports within each state. (7 points)

an appropriate basemap; (7 points)

some interactive elements, like a clickable marker; (8 points)

some map elements, such as legend, scale bar, credit; (8 points) I added code to create a legend and scale bar but it didn't work.  I tried different ways to do it and read the tutorials, but couldn't get these added features to work.  

write up a project description in the readme.md file. This file will introduce the project name, a brief introduction, the major functions(especially the function which was not covered in the lectures), libraries, data sources, credit, acknowledgement, and other necessary information. (8 points)

DELIVERABLE 5: 

The project name is a scaleable map entitled: "Airports of the United States". 

Two map layers were used including a United States base map and a map of airports across the United States. One of the fields in the airport layer was control towers, named: CTRL_TRS. This field was used to indicate  whether the airport had a control tower or not. Therefore a Javascript function was added, within MapBox layer panel, to indicate the presence of a tower on the map with a "Y" for yes and a "N" for no. The Y and N on the map icons reflect this variable. 

Methods for this project include: 
The map projection was updated to CRS: WGS-84 projection using QGIS. The file was added to QGIS as a layer then Under the layer properties the projection was changed as well as a few other attributes to make the U.S. Layer compatible with a web environment. The number of digits in the coordinates was reduced from 15 characters to 10 characters to make the data load efficiently on the webpage. 
In order to reduce the map coverage further, the map files were opened in mapshaper.org. After simplifying the code in mapshaper.org the files were uploaded to MapBox for making the final display edits. 

The source of united states base map and the distribution of airports came from MapBox, because this is the only map I could get to work. The map elements were combined in MapBox including the color scheme and the icons were created with the help of all maki icons. The completed map was published using the MapBox provided code, that was pasted into the Github index file. Several versions of this code were saved on the local labtop hard drive to control for errors. Github was used to display the final map webpage in the Index file, seen at the following URL: https://burkr.github.io/maps/index.html






