import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { FotosComponent } from "./index/fotos/fotos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, FotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dog';
}
