import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.cargozig.mobile',
  appName: 'CargoZig',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'cargozig.com',
      '*.cargozig.com'
    ]
  },
  plugins: {
    Camera: {
      removeOrientationChange: true
    },
    Geolocation: {
      requireAlwaysAuthorization: true,
      desiredAccuracy: "high"
    }
  }
};

export default config;
