import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
// Array of all images
images: string[] = [
  'assets/images/gallary-1.jpg',
  'assets/images/gallary-2.jpg',
  'assets/images/gallary-3.jpg',
  'assets/images/gallary-4.jpg',
  'assets/images/gallary-5.jpg',
  'assets/images/gallary-6.jpg',
  'assets/images/gallary-7.jpg',
  'assets/images/gallary-8.jpg'
];

// Start index of the visible images
startIndex: number = 0;

// Number of images visible at once
imagesPerPage: number = 4;

// Get the currently visible images
get visibleImages(): string[] {
  return this.images.slice(this.startIndex, this.startIndex + this.imagesPerPage);
}

// Show the previous set of images
prevSlide(): void {
  if (this.startIndex > 0) {
    this.startIndex--;
  }
}

// Show the next set of images
nextSlide(): void {
  if (this.startIndex + this.imagesPerPage < this.images.length) {
    this.startIndex++;
  }
}
}
