import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>
    `,
    styleUrls: ['nav-bar.scss']
})
export class NavBarComponent {

}