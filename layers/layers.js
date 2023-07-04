var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LiveTDDSites_4 = new ol.format.GeoJSON();
var features_LiveTDDSites_4 = format_LiveTDDSites_4.readFeatures(json_LiveTDDSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LiveTDDSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LiveTDDSites_4.addFeatures(features_LiveTDDSites_4);
var lyr_LiveTDDSites_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LiveTDDSites_4, 
                style: style_LiveTDDSites_4,
                interactive: true,
                title: '<img src="styles/legend/LiveTDDSites_4.png" /> LiveTDDSites'
            });
var format_PendingTDDSites_5 = new ol.format.GeoJSON();
var features_PendingTDDSites_5 = format_PendingTDDSites_5.readFeatures(json_PendingTDDSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendingTDDSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PendingTDDSites_5.addFeatures(features_PendingTDDSites_5);
var lyr_PendingTDDSites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PendingTDDSites_5, 
                style: style_PendingTDDSites_5,
                interactive: true,
                title: '<img src="styles/legend/PendingTDDSites_5.png" /> PendingTDDSites'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleTerrain_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_LiveTDDSites_4.setVisible(true);lyr_PendingTDDSites_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_GoogleTerrain_2,lyr_GoogleHybrid_3,lyr_LiveTDDSites_4,lyr_PendingTDDSites_5];
lyr_LiveTDDSites_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_PendingTDDSites_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_LiveTDDSites_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PendingTDDSites_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LiveTDDSites_4.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PendingTDDSites_5.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PendingTDDSites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});