import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooTerComponent } from '../../foo-ter/foo-ter.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, FooTerComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', '/src/assets/css/style.css', '/src/assets/vendor/animate.css/animate.compat.css', '/src/assets/vendor/animate.css/animate.css', '/src/assets/vendor/animate.css/animate.min.css', '/src/assets/vendor/aos/aos.css', '/src/assets/vendor/boxicons/css/animations.css', '/src/assets/vendor/boxicons/css/boxicons.css','/src/assets/vendor/boxicons/css/boxicons.min.css','/src/assets/vendor/boxicons/css/transformations.css', '/src/assets/vendor/swiper/swiper-bundle.min.css', '/src/assets/vendor/remixicon/remixicon.css',]
})
export class LandingPageComponent {

}
