import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  items: any[] = [];
  allItems: any[] = [];
  itemsNumber = 20;
  selectedImg: any;
  showDetails = false;
  lastScroll = null;


  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getImages().subscribe(response => {
      this.allItems = response.data.result.items;
      this.items = this.allItems.slice(0, this.itemsNumber);
    });
    window.addEventListener('scroll', (event) => {
      this.handelScroll(pageYOffset);
    });
  }
  handelScroll(pageYOffset) {
      if ( this.lastScroll == null || pageYOffset >  this.lastScroll) {
        this.itemsNumber = this.itemsNumber + 20;
        this.items = this.allItems.slice(0, this.itemsNumber);
      }
       this.lastScroll = pageYOffset;
  }
  imgClicked(img) {
    this.selectedImg = img;
    this.showDetails = true;
  }
  closeCliced(e) {
    this.showDetails = !e.closeDetails;
  }

}
