import { Component } from "@angular/core";
import { HeaderComponent } from "./core/layout/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./core/layout/footer.component";
import { MarkdownPipe } from "./shared/pipes/markdown.pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {
  constructor(private MarkdownPipe: MarkdownPipe) {}
}
