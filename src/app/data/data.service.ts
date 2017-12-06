import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      id: 1,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 2,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 3,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 4,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 5,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 6,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 7,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 8,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
    {
      id: 9,
      title: 'Product name',
      description: 'Helmut Lang Women\'s Side Drape Tank Satin Top - White',
      picture: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      price: 360,
      sale: 230,
      photos: [
        {
          thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-chani.jpg',
          full: '/assets/barts-chani.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/barts-tiber.jpg',
          full: '/assets/barts-tiber.jpg',
          description: 'Snowboard',
        },
        {
          thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
          full: '/assets/arc-teryx-diplomat-scarf.jpg',
          description: 'Snowboard',
        },
      ],
    },
  ];
}
