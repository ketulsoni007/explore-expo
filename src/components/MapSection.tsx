import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const openFreeMapHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="referrer" content="no-referrer" />
      <link href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" rel="stylesheet" />
      <script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
      <style>
        body, html, #map { margin: 0; padding: 0; height: 100%; width: 100%; }
        .maplibregl-compact { display: none !important; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        const map = new maplibregl.Map({
          container: 'map',
          style: 'https://tiles.openfreemap.org/styles/bright',
          center: [72.5714, 23.0225],
          zoom: 12
        });

        map.on('error', (e) => {
          console.error('MapLibre error:', e && e.error ? e.error.message : e);
        });

        map.on('load', () => {
          map.resize();
        });

        new maplibregl.Marker({ color: '#2563EB' })
          .setLngLat([72.5714, 23.0225])
          .addTo(map);
      </script>
    </body>
  </html>
`;

export const MapSection = () => {
  const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      const blob = new Blob([openFreeMapHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, []);

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return (
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          source={{ html: openFreeMapHtml }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {blobUrl && (
        <iframe
          src={blobUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 16,
          }}
          title="Map"
          sandbox="allow-scripts allow-modals allow-same-origin"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapSection;