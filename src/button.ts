export class Button {
    button: HTMLButtonElement;
    init() {
        this.buildButton();
    }

    private buildButton() {
        let css = require('./button.scss').default as string;
        css = css.replace(/^button\s*{/, '').replace(/}$/, '');

        this.button = document.createElement('button');
        this.button.setAttribute('style', css);

        document.body.appendChild(this.button);
    }
}
