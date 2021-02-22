import { ScreenLog } from './screen-log';

const screenLog = new ScreenLog();
screenLog.register();

window.addEventListener('load', () => {
    screenLog.init();
});

if (document.readyState === 'complete') {
    screenLog.init();
}
