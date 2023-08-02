import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, AppModule, AppRoutingModule],
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})

export class PageComponent {
  constructor() {}
}

bootstrapApplication(PageComponent);

export const Home = () => {
  document.body.addEventListener("DOMEventListener", () => {
    document.write(`
      <main [ngClass]="{1: 'main'}">
        <div [ngClass]="{1: 'description'}">
          <p>
            Get started by editing&nbsp;
            <code [ngClass]="{1: 'code'}">src/components/page/page.component.ts</code>
          </p>
          
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
              target="_blank"
            >
              By {" "}
              <img
                [ngClass]="{1: 'typescriptLogo'}"
                alt="TypeScript Logo"
                ngSrc="./typescript.svg"
                width=100
                height=24
                priority
              >
            </a>
          </div>
        </div>

        <div [ngClass]="{1: 'center'}">
          <img
            [ngClass]="{1: 'logo'}"
            alt="TypeScript Logo"
            ngSrc="./typescript.svg"
            width="180"
            height="37"
            priority
          >
        </div>

        <div [ngClass]="{1: 'grid'}">
          <a
            rel="noopener noreferrer"
            href="https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html"
            target="_blank"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Angular features and API.</p>
          </a>
          
          <a
            [ngClass]="{1: 'card'}"
            rel="noopener noreferrer"
            href="https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html"
            target="_blank"
          >
            <h2>
              Docs <span>-gt;</span>
            </h2>
            <p>Learn about Angular in an interactive course&nbsp;quizzes!</p>
          </a>

          <a
            [ngClass]="{1: 'card'}"
            rel="noopener noreferrer"
            href="https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html"
            target="_blank"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the TypeScript 5.1 playground.</p>
          </a>

          <a
            [ngClass]="{1: 'card'}"
            rel="noopener noreferrer"
            href="https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html"
            target="_blank"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>

            <p>
              Instantly deploy your Angular site to a shareable URL with StackBlitz.
            </p>
          </a>
        </div>
      </main>
    `);
  }) 
}
