import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type DesignService = 'Online Invitation & 3D Invitation Videos'
  | 'Bridal Mehndi & Bridal Makeup'
  | 'Decoration';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {
  services = [
    "Photography & Videography",
    "Drone Camera",
    "YouTube Live Streaming",
    "Lighting and Sound System",
    "DJ Sounds & Lighting",
    "LED Wall Streaming & Live Streaming",
    "Logo Design",
    "Online Invitation & 3D Invitation Videos",
    "Documentary Films",
    "Bridal Mehndi & Bridal Makeup",
    "Decoration",
    "Ads Shoot"
  ];

  designServices: DesignService[] = [
    "Online Invitation & 3D Invitation Videos",
    "Bridal Mehndi & Bridal Makeup",
    "Decoration"
  ];

  designs: Record<DesignService, string[]> = {
    "Online Invitation & 3D Invitation Videos": [
      'assets/images/project-8.jpg',
    ],
    "Bridal Mehndi & Bridal Makeup": [
      'assets/images/gallary-7.jpg',
    ],
    "Decoration": [
      'assets/images/gallary-3.jpg',
      'assets/images/gallary-4.jpg',
    ],
  };

  serviceFormGroup!: FormGroup;
  contactFormGroup!: FormGroup;

  selectedServices: string[] = [];
  showDesignStep = false;
  selectedDesigns: Record<string, string> = {};

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.serviceFormGroup = this._formBuilder.group({
      selectedServices: this._formBuilder.array([])
    });

    this.contactFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      eventDate: ['', Validators.required], 
      notes: ['']
    });
  }

  onServiceSelect(event: any, service: string): void {
    if (event.checked) {
      this.selectedServices.push(service);
    } else {
      const index = this.selectedServices.indexOf(service);
      if (index >= 0) this.selectedServices.splice(index, 1);
    }
    this.updateDesignStepVisibility();
  }

  updateDesignStepVisibility(): void {
    this.showDesignStep = this.selectedServices.some(service =>
      this.designServices.includes(service as DesignService)
    );
  }

  isDesignService(service: string): boolean {
    return this.designServices.includes(service as DesignService);
  }

  getDesigns(service: string): string[] {
    return this.designs[service as DesignService] || [];
  }

  onDesignSelect(service: string, design: string): void {
    this.selectedDesigns[service] = design;
  }

  submit(): void {
    const formData = {
      services: this.selectedServices,
      designs: this.selectedDesigns,
      contact: this.contactFormGroup.value
    };
    console.log('Form Submission Data:', formData);
    alert('Form Submitted Successfully!');
  }
}