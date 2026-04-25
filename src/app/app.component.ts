import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ImageAsset = {
  src: string;
  alt: string;
};

type CampaignDesign = {
  number: string;
  name: string;
  tone: string;
  src: string;
  alt: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly logoUrl = 'assets/fragments/ChatGPT Image 24 abr 2026, 08_26_23 p.m..png';

  readonly modelCards: ImageAsset[] = Array.from({ length: 12 }, (_, index) => ({
    src: `assets/generated-studio/model-card-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `Pieza editorial del modelo ${index + 1}`
  }));

  readonly modelVectors: ImageAsset[] = Array.from({ length: 12 }, (_, index) => ({
    src: `assets/generated-studio/model-vector-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `Versión gráfica del modelo ${index + 1}`
  }));

  readonly bottles: ImageAsset[] = Array.from({ length: 10 }, (_, index) => ({
    src: `assets/generated-hires/bottle-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `Frasco La PVTAS ${index + 1}`
  }));

  readonly campaignDesigns: CampaignDesign[] = [
    {
      number: '01',
      name: 'Noir Royal',
      tone: 'Lujo oscuro, corona dorada y presencia premium.',
      src: 'assets/campaign-designs/design-01-noir-royal.jpg',
      alt: 'Diseño Noir Royal para La PVTAS'
    },
    {
      number: '02',
      name: 'Neon Rush',
      tone: 'Color urbano, energía social y frascos vibrantes.',
      src: 'assets/campaign-designs/design-02-neon-rush.jpg',
      alt: 'Diseño Neon Rush para La PVTAS'
    },
    {
      number: '03',
      name: 'Golden Line',
      tone: 'Catálogo dorado con colección completa de frascos.',
      src: 'assets/campaign-designs/design-03-golden-line.jpg',
      alt: 'Diseño Golden Line para La PVTAS'
    },
    {
      number: '04',
      name: 'Urban Black',
      tone: 'Póster gráfico, calle y frasco protagonista.',
      src: 'assets/campaign-designs/design-04-urban-black.jpg',
      alt: 'Diseño Urban Black para La PVTAS'
    },
    {
      number: '05',
      name: 'Minimal Luxe',
      tone: 'Negro limpio, foco producto y marca sobria.',
      src: 'assets/campaign-designs/design-05-minimal-luxe.jpg',
      alt: 'Diseño Minimal Luxe para La PVTAS'
    },
    {
      number: '06',
      name: 'Drop Social',
      tone: 'Composición para reels, historias y lanzamiento.',
      src: 'assets/campaign-designs/design-06-drop-social.jpg',
      alt: 'Diseño Drop Social para La PVTAS'
    }
  ];
}
