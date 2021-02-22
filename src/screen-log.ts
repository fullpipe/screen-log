import { Button } from './button';
import { Display } from './display';

export class ScreenLog {
    private initLogs: {
        type: string;
        args: any[];
    }[] = [];
    private display: Display;
    private button: Button;

    private realConsole: {
        [key: string]: any;
    } = {};

    register() {
        this.realConsole.log = console.log;
        console.log = this.log.bind(this);

        this.realConsole.warn = console.warn;
        console.warn = this.warn.bind(this);

        this.realConsole.error = console.error;
        console.error = this.error.bind(this);

        this.realConsole.info = console.info;
        console.info = this.info.bind(this);

        this.realConsole.debug = console.debug;
        console.debug = this.debug.bind(this);

        this.realConsole.clear = console.clear;
        console.clear = this.clear.bind(this);

        window.addEventListener('error', (event: ErrorEvent) => {
            this.error(`${event.message} at ${event.filename} ${event.lineno}:${event.colno}`);
        });
    }

    init() {
        if (this.display) {
            return;
        }

        this.display = new Display();
        this.display.init();

        this.button = new Button();
        this.button.init();

        this.initLogs.forEach((l) => {
            this.showLog(l.type, ...l.args);
        });

        delete this.initLogs;
        this.bindings();
    }

    private bindings() {
        this.button.button.addEventListener('click', () => {
            this.display.toggle();
        });
    }

    log(...args: any[]) {
        this.realConsole.log(...args);

        this.showLog('log', ...args);
    }

    info(...args: any[]) {
        this.realConsole.info(...args);

        this.showLog('info', ...args);
    }

    debug(...args: any[]) {
        this.realConsole.debug(...args);

        this.showLog('debug', ...args);
    }

    error(...args: any[]) {
        this.realConsole.error(...args);

        this.showLog('error', ...args);
    }

    warn(...args: any[]) {
        this.realConsole.warn(...args);

        this.showLog('warn', ...args);
    }

    clear() {
        this.realConsole.clear();

        if (!this.display) {
            this.initLogs = [];
        } else {
            this.display.clear();
        }
    }

    private showLog(type: string, ...args: any[]): void {
        if (!this.display) {
            this.initLogs.push({ type, args });
        } else {
            this.display.show(type, ...args);
        }
    }
}
