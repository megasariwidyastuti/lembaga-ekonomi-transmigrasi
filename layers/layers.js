var wms_layers = [];


        var lyr_DarkBasemap_0 = new ol.layer.Tile({
            'title': 'Dark Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=mfzkgCuJ9nlrbGCTHezC'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KawasanTransmigrasi_2 = new ol.format.GeoJSON();
var features_KawasanTransmigrasi_2 = format_KawasanTransmigrasi_2.readFeatures(json_KawasanTransmigrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTransmigrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTransmigrasi_2.addFeatures(features_KawasanTransmigrasi_2);
var lyr_KawasanTransmigrasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTransmigrasi_2, 
                style: style_KawasanTransmigrasi_2,
                popuplayertitle: 'Kawasan Transmigrasi',
                interactive: false,
                title: '<img src="styles/legend/KawasanTransmigrasi_2.png" /> Kawasan Transmigrasi'
            });
var format_SebaranKawasanPrioritas_3 = new ol.format.GeoJSON();
var features_SebaranKawasanPrioritas_3 = format_SebaranKawasanPrioritas_3.readFeatures(json_SebaranKawasanPrioritas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranKawasanPrioritas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranKawasanPrioritas_3.addFeatures(features_SebaranKawasanPrioritas_3);
var lyr_SebaranKawasanPrioritas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranKawasanPrioritas_3, 
                style: style_SebaranKawasanPrioritas_3,
                popuplayertitle: 'Lembaga Ekonomi Kawasan Transmigrasi (update:19 Feb 2025)',
                interactive: true,
    title: 'Sebaran Kawasan Prioritas<br />\
    <img src="styles/legend/SebaranKawasanPrioritas_3_0.png" /> Prioritas Kementerian<br />\
    <img src="styles/legend/SebaranKawasanPrioritas_3_1.png" /> Prioritas Nasional<br />' });
var format_LembagaEkonomiDominan_4 = new ol.format.GeoJSON();
var features_LembagaEkonomiDominan_4 = format_LembagaEkonomiDominan_4.readFeatures(json_LembagaEkonomiDominan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LembagaEkonomiDominan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LembagaEkonomiDominan_4.addFeatures(features_LembagaEkonomiDominan_4);
var lyr_LembagaEkonomiDominan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LembagaEkonomiDominan_4, 
                style: style_LembagaEkonomiDominan_4,
                popuplayertitle: 'Lembaga Ekonomi Dominan',
                interactive: false,
    title: 'Lembaga Ekonomi Dominan<br />\
    <img src="styles/legend/LembagaEkonomiDominan_4_0.png" /> Bumdes/Bumdesma<br />\
    <img src="styles/legend/LembagaEkonomiDominan_4_1.png" /> Koperasi<br />\
    <img src="styles/legend/LembagaEkonomiDominan_4_2.png" /> Non Badan Hukum (Kelompok)<br />\
    <img src="styles/legend/LembagaEkonomiDominan_4_3.png" /> Perusahaan<br />\
    <img src="styles/legend/LembagaEkonomiDominan_4_4.png" /> Tidak ada data lembaga<br />' });

lyr_DarkBasemap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_KawasanTransmigrasi_2.setVisible(true);lyr_SebaranKawasanPrioritas_3.setVisible(true);lyr_LembagaEkonomiDominan_4.setVisible(false);
var layersList = [lyr_DarkBasemap_0,lyr_GoogleSatelliteHybrid_1,lyr_KawasanTransmigrasi_2,lyr_SebaranKawasanPrioritas_3,lyr_LembagaEkonomiDominan_4];
lyr_KawasanTransmigrasi_2.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_SebaranKawasanPrioritas_3.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_LembagaEkonomiDominan_4.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_KawasanTransmigrasi_2.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_SebaranKawasanPrioritas_3.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_LembagaEkonomiDominan_4.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_KawasanTransmigrasi_2.set('fieldLabels', {'KAWASAN': 'inline label - visible with data', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'inline label - visible with data', 'KOPERASI': 'inline label - visible with data', 'BUMDES/BUMDESMA': 'inline label - visible with data', 'PERUSAHAAN': 'inline label - visible with data', 'BUMD': 'inline label - visible with data', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'hidden field', });
lyr_SebaranKawasanPrioritas_3.set('fieldLabels', {'KAWASAN': 'inline label - visible with data', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'inline label - visible with data', 'KOPERASI': 'inline label - visible with data', 'BUMDES/BUMDESMA': 'inline label - visible with data', 'PERUSAHAAN': 'inline label - visible with data', 'BUMD': 'inline label - visible with data', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'hidden field', });
lyr_LembagaEkonomiDominan_4.set('fieldLabels', {'KAWASAN': 'no label', 'REMARK': 'no label', 'LUAS_HA': 'no label', 'STATUS': 'no label', 'SUMBER': 'no label', 'THN_PRODUK': 'no label', 'SIPUKAT': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'PRIORITAS': 'no label', 'NON BADAN HUKUM (KELOMPOK)': 'no label', 'KOPERASI': 'no label', 'BUMDES/BUMDESMA': 'no label', 'PERUSAHAAN': 'no label', 'BUMD': 'no label', 'JUMLAH': 'no label', 'LEMBAGA DOMINAN': 'no label', });
lyr_LembagaEkonomiDominan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});