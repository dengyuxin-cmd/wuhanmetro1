var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '线路',
                interactive: true,
    title: '线路<br />\
    <img src="styles/legend/_1_0.png" /> 1号线<br />\
    <img src="styles/legend/_1_1.png" /> 2号线<br />\
    <img src="styles/legend/_1_2.png" /> 3号线<br />\
    <img src="styles/legend/_1_3.png" /> 4号线<br />\
    <img src="styles/legend/_1_4.png" /> 5号线<br />\
    <img src="styles/legend/_1_5.png" /> 6号线<br />\
    <img src="styles/legend/_1_6.png" /> 7号线<br />\
    <img src="styles/legend/_1_7.png" /> 8号线<br />\
    <img src="styles/legend/_1_8.png" /> 11号线<br />\
    <img src="styles/legend/_1_9.png" /> 16号线<br />\
    <img src="styles/legend/_1_10.png" /> 19号线<br />\
    <img src="styles/legend/_1_11.png" /> 阳逻线<br />\
    <img src="styles/legend/_1_12.png" /> <br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '站点',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 站点'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '换乘站',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 换乘站'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', '地铁': '地铁', 'Shape_Le_1': 'Shape_Le_1', });
lyr__2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', '地铁': 'TextEdit', 'Shape_Le_1': '', });
lyr__2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', '地铁': 'no label', 'Shape_Le_1': 'no label', });
lyr__2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});