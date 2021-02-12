import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { CategoryService } from 'src/app/services/category.service';
// import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css'],
})
export class AddrestaurantComponent implements OnInit {
  // @ViewChild('search')
  // public searchElementRef: ElementRef;

  // public zoom: number;
  // public latitude: number;
  // public longitude: number;
  // public latlongs: any =[];
  // public latlong: any ={};
  // public searchControl: FormControl;
  fileToUpload: File = null;
  url;
  imagePath;
  message;
  categories = new FormControl();
  categoryList: string[] = [];
  // latitude = 51.678418;
  // longitude = 7.809007;

  restaurant = {
    name: '',
    email: '',
    contact: '',
    // contactName: '',
    category: '',
    address: '',
    // openingTime: '',
    // closingTime: '',
    // orderMin: '',
    // packagingCharge: '',
    // offerminCharge: '',
    // offerPercent: '',
    status: '',
    // address: ''
  };

  category;
  //   formattedAddress;
  //   options={
  //     types: [],
  //     componentRestrictions: { country: 'IN' }
  //     }
  //   public handleAddressChange(address: any) {
  //     this.formattedAddress = address.formatted_address;
  // }
  constructor(
    private CategoryService: CategoryService,
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // this.zoom =21;
    // this.latitude =36.8282;
    // this.longitude =-98.5795;

    // this.searchControl = new FormControl();
    // this.setCurrentPosition();

    //   this.mapsAPILoader.load().then(()=> {
    //     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //       types: [],
    //       componentRestrictions: {'country': 'IN'}
    //     });

    //     autocomplete.addListener('place_changed', ()=> {
    //       this.ngZone.run(() => {
    //         const place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //         if(place.geometry === undefined || place.geometry == null){

    //           return ;
    //         }
    //         this.latlongs = [];
    //         const latlong ={
    //           latitude: place.geometry.location.lat(),
    //           longitude: place.geometry.location.lng()

    //         };

    //         this.latlongs.push(latlong);
    //         this.latitude = place.geometry.location.lat();
    //         this.longitude = place.geometry.location.lng();
    //         console.log(this.latlongs);
    //         // this.searchControl.reset();

    //       });
    //     });

    //   });

    this.CategoryService.getAll().subscribe(
      (data) => {
        this.category = data;
        console.log(data);

        for (let i = 0; i < this.category.length; i++) {
          this.categoryList.push(this.category[i].name);
        }
        console.log(this.categoryList);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.categoryList);

    // this.categoryList = this.category.subcategory;
  }
  //    setCurrentPosition() {
  //     if('geolocation' in navigator) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         this.latitude = position.coords.latitude;
  //         this.longitude = position.coords.longitude;
  //         this.zoom =8;
  //       })
  //     }
  // }
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  // }
  onFileChanged(event) {
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    console.log(files[0]);
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = event.target.files[0];
    console.log(event.target.files[0]);
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(files);
      console.log(files[0]);
      console.log(event.target.files);

      console.log(this.imagePath);
    };
  }
  saveData() {
    const data = {
      title: this.restaurant.name,
      email: this.restaurant.email,
      contact: this.restaurant.contact,
      category: this.restaurant.category,
      // contactName: this.restaurant.contactName,
      // openingTime: this.restaurant.openingTime,
      // closingTime: this.restaurant.closingTime,
      // orderMin: this.restaurant.orderMin,
      // packagingCharge: this.restaurant.packagingCharge,
      // offerminCharge: this.restaurant.offerminCharge,
      // offerPercent: this.restaurant.offerPercent,
      status: this.restaurant.status,
      // address: this.restaurant.address
    };
    const uploadData = new FormData();
    uploadData.append('title', this.restaurant.name);
    uploadData.append('email', this.restaurant.email);
    uploadData.append('contact', this.restaurant.contact);
    uploadData.append('category', this.restaurant.category);
    uploadData.append('status', this.restaurant.status);
    uploadData.append('address', this.restaurant.address);
    uploadData.append('image', this.imagePath, this.imagePath.name);
    console.log(this.imagePath, this.imagePath.name);
    this.RestaurantsService.create(uploadData).subscribe(
      (response) => {
        console.log(response);
        // this.submitted = true;
        // this.router.navigate(['/delivery-people']);
        this.router.navigate(['/restaurants']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
