import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

import SwiperCore, { Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent {
  // TODO: Integrate to the Contentful

  Images: Array<any> = [
    {
      mobile_placeholder: 'https://via.placeholder.com/480x480',
      alternative_text: 'Image 1',
      src: 'https://images.nightcafe.studio/jobs/Uu8d1awKlG8yweIZOKsX/Uu8d1awKlG8yweIZOKsX_6.9444x.jpg?tr=w-1600,c-at_max',
    },
    {
      mobile_placeholder: '',
      alternative_text: 'Image 2',
      src: 'https://images.nightcafe.studio/jobs/nKLZ6JMzcC1T2klMQawX/nKLZ6JMzcC1T2klMQawX_6.9444x.jpg?tr=w-1600,c-at_max',
    },
  ];
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  };
}
