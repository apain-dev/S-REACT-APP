export default function useMusicKit() {
  const musickitGlobal = (window as any).MusicKit;

  (window as any).MusicKit.configure({
    developerToken: process.env.react_app_musickittoken,
    app: {
      name: 'Star Track React',
      build: '1.0',
    },
  });
  const musickitInstance = musickitGlobal.getInstance();

  return [musickitGlobal, musickitInstance];
}
