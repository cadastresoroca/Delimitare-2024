var wms_layers = [];

var lyr_2016OrtofotoRM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/orthophoto/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto:Ortofoto_2016_RM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2016 Ortofoto RM",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2016OrtofotoRM_0, 0]);
var lyr_63UATImunicipiucomunorasat_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.3. UAT I (municipiu, comună, oraș, sat)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_63UATImunicipiucomunorasat_1, 0]);
var format_Terenuri_2 = new ol.format.GeoJSON();
var features_Terenuri_2 = format_Terenuri_2.readFeatures(json_Terenuri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenuri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_2.addFeatures(features_Terenuri_2);
var lyr_Terenuri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuri_2, 
                style: style_Terenuri_2,
                popuplayertitle: "Terenuri",
                interactive: true,
    title: 'Terenuri<br />\
    <img src="styles/legend/Terenuri_2_0.png" /> 20<br />\
    <img src="styles/legend/Terenuri_2_1.png" /> 25<br />\
    <img src="styles/legend/Terenuri_2_2.png" /> <br />'
        });
var format_Terenur_3 = new ol.format.GeoJSON();
var features_Terenur_3 = format_Terenur_3.readFeatures(json_Terenur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_3.addFeatures(features_Terenur_3);
var lyr_Terenur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_3, 
                style: style_Terenur_3,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_3_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_3_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_3_2.png" /> <br />'
        });
var format_Terenur_4 = new ol.format.GeoJSON();
var features_Terenur_4 = format_Terenur_4.readFeatures(json_Terenur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_4.addFeatures(features_Terenur_4);
var lyr_Terenur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_4, 
                style: style_Terenur_4,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_4_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_4_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_4_2.png" /> <br />'
        });
var format_Teren_5 = new ol.format.GeoJSON();
var features_Teren_5 = format_Teren_5.readFeatures(json_Teren_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teren_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teren_5.addFeatures(features_Teren_5);
var lyr_Teren_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teren_5, 
                style: style_Teren_5,
                popuplayertitle: "Teren",
                interactive: true,
    title: 'Teren<br />\
    <img src="styles/legend/Teren_5_0.png" /> <br />\
    <img src="styles/legend/Teren_5_1.png" /> 20<br />\
    <img src="styles/legend/Teren_5_2.png" /> 25<br />'
        });
var format_Terenur_6 = new ol.format.GeoJSON();
var features_Terenur_6 = format_Terenur_6.readFeatures(json_Terenur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_6.addFeatures(features_Terenur_6);
var lyr_Terenur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_6, 
                style: style_Terenur_6,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_6_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_6_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_6_2.png" /> <br />'
        });
var format_Terenur_7 = new ol.format.GeoJSON();
var features_Terenur_7 = format_Terenur_7.readFeatures(json_Terenur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_7.addFeatures(features_Terenur_7);
var lyr_Terenur_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_7, 
                style: style_Terenur_7,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_7_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_7_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_7_2.png" /> <br />'
        });
var format_Terenur_8 = new ol.format.GeoJSON();
var features_Terenur_8 = format_Terenur_8.readFeatures(json_Terenur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_8.addFeatures(features_Terenur_8);
var lyr_Terenur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_8, 
                style: style_Terenur_8,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_8_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_8_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_8_2.png" /> <br />'
        });
var format_Terenuri_9 = new ol.format.GeoJSON();
var features_Terenuri_9 = format_Terenuri_9.readFeatures(json_Terenuri_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenuri_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_9.addFeatures(features_Terenuri_9);
var lyr_Terenuri_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuri_9, 
                style: style_Terenuri_9,
                popuplayertitle: "Terenuri",
                interactive: true,
    title: 'Terenuri<br />\
    <img src="styles/legend/Terenuri_9_0.png" /> 20<br />\
    <img src="styles/legend/Terenuri_9_1.png" /> 25<br />'
        });
var format_Terenuri_10 = new ol.format.GeoJSON();
var features_Terenuri_10 = format_Terenuri_10.readFeatures(json_Terenuri_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenuri_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_10.addFeatures(features_Terenuri_10);
var lyr_Terenuri_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuri_10, 
                style: style_Terenuri_10,
                popuplayertitle: "Terenuri",
                interactive: true,
    title: 'Terenuri<br />\
    <img src="styles/legend/Terenuri_10_0.png" /> 20<br />\
    <img src="styles/legend/Terenuri_10_1.png" /> 25<br />\
    <img src="styles/legend/Terenuri_10_2.png" /> <br />'
        });
var format_Terenur_11 = new ol.format.GeoJSON();
var features_Terenur_11 = format_Terenur_11.readFeatures(json_Terenur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_11.addFeatures(features_Terenur_11);
var lyr_Terenur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_11, 
                style: style_Terenur_11,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_11_0.png" /> 11<br />\
    <img src="styles/legend/Terenur_11_1.png" /> 20<br />\
    <img src="styles/legend/Terenur_11_2.png" /> 25<br />\
    <img src="styles/legend/Terenur_11_3.png" /> <br />'
        });
var format_Terenur_12 = new ol.format.GeoJSON();
var features_Terenur_12 = format_Terenur_12.readFeatures(json_Terenur_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_12.addFeatures(features_Terenur_12);
var lyr_Terenur_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_12, 
                style: style_Terenur_12,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_12_0.png" /> 11<br />\
    <img src="styles/legend/Terenur_12_1.png" /> 25<br />'
        });
var format_Terenur_13 = new ol.format.GeoJSON();
var features_Terenur_13 = format_Terenur_13.readFeatures(json_Terenur_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_13.addFeatures(features_Terenur_13);
var lyr_Terenur_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_13, 
                style: style_Terenur_13,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_13_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_13_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_13_2.png" /> <br />'
        });
var format_Terenuri_14 = new ol.format.GeoJSON();
var features_Terenuri_14 = format_Terenuri_14.readFeatures(json_Terenuri_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenuri_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_14.addFeatures(features_Terenuri_14);
var lyr_Terenuri_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuri_14, 
                style: style_Terenuri_14,
                popuplayertitle: "Terenuri",
                interactive: true,
    title: 'Terenuri<br />\
    <img src="styles/legend/Terenuri_14_0.png" /> 20<br />\
    <img src="styles/legend/Terenuri_14_1.png" /> 25<br />\
    <img src="styles/legend/Terenuri_14_2.png" /> <br />'
        });
var format_Terenur_15 = new ol.format.GeoJSON();
var features_Terenur_15 = format_Terenur_15.readFeatures(json_Terenur_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenur_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenur_15.addFeatures(features_Terenur_15);
var lyr_Terenur_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenur_15, 
                style: style_Terenur_15,
                popuplayertitle: "Terenur",
                interactive: true,
    title: 'Terenur<br />\
    <img src="styles/legend/Terenur_15_0.png" /> 20<br />\
    <img src="styles/legend/Terenur_15_1.png" /> 25<br />\
    <img src="styles/legend/Terenur_15_2.png" /> <br />'
        });

lyr_2016OrtofotoRM_0.setVisible(true);lyr_63UATImunicipiucomunorasat_1.setVisible(true);lyr_Terenuri_2.setVisible(true);lyr_Terenur_3.setVisible(true);lyr_Terenur_4.setVisible(true);lyr_Teren_5.setVisible(true);lyr_Terenur_6.setVisible(true);lyr_Terenur_7.setVisible(true);lyr_Terenur_8.setVisible(true);lyr_Terenuri_9.setVisible(true);lyr_Terenuri_10.setVisible(true);lyr_Terenur_11.setVisible(true);lyr_Terenur_12.setVisible(true);lyr_Terenur_13.setVisible(true);lyr_Terenuri_14.setVisible(true);lyr_Terenur_15.setVisible(true);
var layersList = [lyr_2016OrtofotoRM_0,lyr_63UATImunicipiucomunorasat_1,lyr_Terenuri_2,lyr_Terenur_3,lyr_Terenur_4,lyr_Teren_5,lyr_Terenur_6,lyr_Terenur_7,lyr_Terenur_8,lyr_Terenuri_9,lyr_Terenuri_10,lyr_Terenur_11,lyr_Terenur_12,lyr_Terenur_13,lyr_Terenuri_14,lyr_Terenur_15];
lyr_Terenuri_2.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_3.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_4.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Teren_5.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_6.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_7.set('fieldAliases', {'codcadastr': 'codcadastr', 'codtip': 'codtip', 'codstr': 'codstr', 'nrcasa': 'nrcasa', 'codnrremar': 'codnrremar', 'codtipregi': 'codtipregi', 'codcolect': 'codcolect', 'suprafata': 'suprafata', 'codadm': 'codadm', 'datamodif': 'datamodif', });
lyr_Terenur_8.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenuri_9.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenuri_10.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_11.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_12.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_13.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenuri_14.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenur_15.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Terenuri_2.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_3.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_4.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Teren_5.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_6.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_7.set('fieldImages', {'codcadastr': 'TextEdit', 'codtip': 'TextEdit', 'codstr': 'TextEdit', 'nrcasa': 'TextEdit', 'codnrremar': 'TextEdit', 'codtipregi': 'TextEdit', 'codcolect': 'TextEdit', 'suprafata': 'TextEdit', 'codadm': 'TextEdit', 'datamodif': 'DateTime', });
lyr_Terenur_8.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenuri_9.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenuri_10.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_11.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_12.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_13.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenuri_14.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenur_15.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Terenuri_2.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_3.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_4.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Teren_5.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_6.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_7.set('fieldLabels', {'codcadastr': 'inline label - always visible', 'codtip': 'no label', 'codstr': 'no label', 'nrcasa': 'no label', 'codnrremar': 'no label', 'codtipregi': 'no label', 'codcolect': 'no label', 'suprafata': 'inline label - always visible', 'codadm': 'no label', 'datamodif': 'no label', });
lyr_Terenur_8.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenuri_9.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenuri_10.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_11.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_12.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_13.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenuri_14.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_15.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Terenur_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});