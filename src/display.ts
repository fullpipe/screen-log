import { copyTextToClipboard } from './copy';

export class Display {
    private frame: HTMLIFrameElement;
    private document: Document;
    private window: Window;
    private header: HTMLElement;
    private logView: HTMLUListElement;
    private followLog = true;

    init() {
        this.buildFrame();
        this.buildHeader();
        this.binding();
        this.startLogFollowing();
    }

    show(type: string, ...args: any[]): void {
        if (!this.logView) {
            return;
        }

        const li = document.createElement('li');
        li.textContent = args.map((a) => this.toString(a)).join(' ');
        li.className = type;
        this.logView.appendChild(li);

        if (this.followLog) {
            this.scrollToBottom();
        }
    }

    clear() {
        this.logView.innerText = '';
    }

    toggle() {
        if (this.frame.style.display === 'none') {
            this.frame.style.display = 'block';
            this.header.style.display = 'flex';
            this.frame.style.pointerEvents = 'initial';
            this.scrollToBottom();
        } else {
            this.frame.style.display = 'none';
        }
    }

    private scrollToBottom() {
        this.window.scrollTo(0, this.document.body.scrollHeight - this.document.body.clientHeight);
    }

    private binding() {
        this.document.addEventListener('click', (e: MouseEvent) => {
            var target = (e.target || e.srcElement) as HTMLElement;

            if (!target) {
                return;
            }

            if (target.tagName == 'LI') {
                target.classList.add('copy');
                copyTextToClipboard(this.document, target.innerText);
                setTimeout((_) => target.classList.remove('copy'), 1000);
            }
        });
    }

    private buildFrame() {
        this.frame = document.createElement('iframe');
        this.frame.setAttribute('border', '0');
        this.frame.setAttribute('frameborder', '0');
        this.frame.setAttribute('cellspacing', '0');
        this.frame.setAttribute('style', 'position: fixed; bottom: 0; left: 0; width: 100%; height: 30%;');
        document.body.appendChild(this.frame);

        this.document = this.frame.contentDocument;
        this.window = this.frame.contentWindow;

        this.logView = this.document.createElement('ul');
        this.document.body.appendChild(this.logView);

        const css = require('./display.scss');
        const style = this.document.createElement('style');
        style.textContent = css.default;
        this.document.head.appendChild(style);
    }

    private buildHeader() {
        const fullscreen = this.document.createElement('button');
        fullscreen.innerText = 'fullscreen';
        fullscreen.addEventListener('click', () => {
            this.frame.style.height = '100%';

            fullscreen.style.display = 'none';
            unfullscreen.style.display = 'block';
        });

        const unfullscreen = this.document.createElement('button');
        unfullscreen.innerText = 'unfullscreen';
        unfullscreen.style.display = 'none';
        unfullscreen.addEventListener('click', () => {
            this.frame.style.height = '30%';

            unfullscreen.style.display = 'none';
            fullscreen.style.display = 'block';
        });

        const top = this.document.createElement('button');
        top.innerText = 'top';
        top.addEventListener('click', () => {
            this.frame.style.top = '0';
            this.frame.style.bottom = 'auto';

            top.style.display = 'none';
            bottom.style.display = 'block';
        });

        const bottom = this.document.createElement('button');
        bottom.innerText = 'bottom';
        bottom.style.display = 'none';

        bottom.addEventListener('click', () => {
            this.frame.style.top = 'auto';
            this.frame.style.bottom = '0';

            bottom.style.display = 'none';
            top.style.display = 'block';
        });

        const transparent = this.document.createElement('button');
        transparent.innerText = 'transparent';
        transparent.addEventListener('click', () => {
            this.frame.style.opacity = '0.7';

            transparent.style.display = 'none';
            opaque.style.display = 'block';
        });

        const opaque = this.document.createElement('button');
        opaque.innerText = 'opaque';
        opaque.style.display = 'none';
        opaque.addEventListener('click', () => {
            this.frame.style.opacity = '1';

            opaque.style.display = 'none';
            transparent.style.display = 'block';
        });

        const bypass = this.document.createElement('button');
        bypass.innerText = 'bypass';
        bypass.addEventListener('click', () => {
            this.frame.style.pointerEvents = 'none';
            this.frame.style.opacity = '0.5';
            header.style.display = 'none';
        });

        const header = this.document.createElement('header');
        header.appendChild(fullscreen);
        header.appendChild(unfullscreen);
        header.appendChild(top);
        header.appendChild(bottom);
        header.appendChild(transparent);
        header.appendChild(opaque);
        header.appendChild(bypass);
        this.document.body.prepend(header);
        this.header = header;
    }

    private startLogFollowing() {
        this.window.removeEventListener('scroll', this.continueLogFollowing);
        this.followLog = true;
        this.window.addEventListener('wheel', this.stopLogFollowing);
        this.window.addEventListener('touchmove', this.stopLogFollowing);
    }

    private continueLogFollowing = (() => {
        if (this.document.body.scrollHeight == this.window.scrollY + this.document.body.clientHeight) {
            this.startLogFollowing();
        }
    }).bind(this);

    private stopLogFollowing = (() => {
        if (this.document.body.scrollHeight == this.window.scrollY + this.document.body.clientHeight) {
            return;
        }

        this.followLog = false;
        this.window.removeEventListener('wheel', this.stopLogFollowing);
        this.window.removeEventListener('touchmove', this.stopLogFollowing);

        this.window.addEventListener('scroll', this.continueLogFollowing);
    }).bind(this);

    private toString(something: any): string {
        console.info(typeof something);
        switch (typeof something) {
            case 'string':
            case 'number':
            case 'number':
            case 'bigint':
                return '' + something;
            default:
                return JSON.stringify(something);
        }
    }
}
