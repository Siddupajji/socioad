import { style } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery'
import * as AOS from 'aos';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  slide:any

  // img1 = "../../assets/tec2.jpg"
  // img2 = "../../assets/tech.png"
  // img3 = "../../assets/tech3.png"
  // images= [this.img1, this.img2, this.img3]
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor( private config: NgbCarouselConfig ) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  services
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 5
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1000,

    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 5
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  context!: CanvasRenderingContext2D;

//   imagelength = this.images.length
//  i = 0
//   time = 300
//    imagechange(){
//     if(this.i < this.imagelength-1){
//       this.i++
//     }else{
//       this.i=0
//     }
//     setTimeout('imagechange()', 1000)
//   }

  ngOnInit(): void {
      $('.counter1').each(function () {
        $(this).prop('CounterDown',0).animate({
            Counter: $(this).text()
        }, {
            duration: 15000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.counter-value').each(function () {
      $(this).prop('CounterDown',0).animate({
          Counter: $(this).text()
      }, {
          duration: 15000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });




    AOS.init();

    const xservices = document.getElementById('homeservices') as HTMLElement
    var index = 0
    let services: Array<string> = [`<span style="color:red">Social Media Marketing</span>`,
    `<span style ="color:green">Photography & Videography</span>`, `<span style="color:blue">Website Developement</span>`, `<span style="color:	#E8BEAC">App Developement</span>`, "Logo Design"]

    function changeservices(){
      xservices.innerHTML = services[index]
      index++
      if(index >= services.length){
        index=0
      }
    }
    setInterval(changeservices, 1500)


    let canvas = document.getElementById("canv") as HTMLCanvasElement
    let context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.font = "50px serif";
    context.fillStyle = "green";
    context.textAlign = "center";
    let string = "Expertise";
    let angle = Math.PI * 0.6; // in radians
    let radius = 200
    context.translate(300, 300);
    context.rotate(6 * angle / 2);

    for (let i = 0; i < string.length; i++) {

        /* It is worth noting that we are not
            rotating the text,here the whole
            context is being rotated and
            translated, and the letters are just
            filled in it. */
        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1 * radius);
        context.fillText(string[i], 0, 0);
        context.restore();
    }

  }





  animate = false

  @HostListener("scroll")
  scrollFunction() {
    if (document.body.scrollTop < 0 || document.documentElement.scrollTop > 0) {
      this.animate = true
    }
    else {
      this.animate = true
    }
  }



}


