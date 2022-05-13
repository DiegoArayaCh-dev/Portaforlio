import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SessionStorageService } from './services/SessionStorageService';
import { Spinkit } from 'ng-http-loader';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  oldActive: any;
  
  element: any;
  public spinkit = Spinkit;
  constructor(private router: Router, private session: SessionStorageService) {


this.implementTheme();







    $(window).resize(function() {
      var top_of_element = $("#footer").offset().top;
      var bottom_of_element = $("#footer").offset().top + $("#footer").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
      var element = $('.active')

      
      

      
      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      
        
       
        $("#contact").addClass("activeContact");
      
      } else {
        $("#contact").removeClass("activeContact");
       
      }
  });
    $(window).scroll(function() {
      var top_of_element = $("#footer").offset().top;
      var bottom_of_element = $("#footer").offset().top + $("#footer").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
      var element = $('.active')

      
      

      
      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      
        
       
        $("#contact").addClass("activeContact");
      
      } else {
        $("#contact").removeClass("activeContact");
       
      }
  });
    this.router.events.subscribe((event: any): void => {
      
      if (event instanceof NavigationStart) {
       
        if (event.url == '/') {
          this.oldActive = document.getElementsByClassName('active')
          this.oldActive[0].classList.remove('active')
          this.element = document.getElementById('home')!
          this.element.classList.add('active');

          document.getElementById('top')?.scrollIntoView({behavior: 'smooth'});
          
        
        } else {
          if (event.url.includes('projects')) {
            this.oldActive = document.getElementsByClassName('active')
            this.oldActive[0].classList.remove('active')
            this.element = document.getElementById('projects')!
            this.element.classList.add('active');
            document.getElementById('top')?.scrollIntoView({behavior: 'smooth'});
            
       


          } else {
            if (event.url.includes('contact')) {
              this.oldActive = document.getElementsByClassName('active')
              this.oldActive[0].classList.remove('active')
              this.element = document.getElementById('contact')!
              this.element.classList.add('active');


            } else {

            }
          }

        }









      }

    });

   
  }

  implementTheme(){


  var theme=   this.session.getTheme()
    if(theme == null){
      theme = {
        "primary":"#00b6c0",
        "fontColor":"#ffffff",
        "deep":"#272829",
        "mode": "light"
      }
      this.session.saveTheme(theme);

      let root = document.documentElement;
     
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--fontColor', theme.fontColor)
    root.style.setProperty('--deep', theme.deep)
    }else{
      let root = document.documentElement;
     
      root.style.setProperty('--primary', theme.primary)
      root.style.setProperty('--fontColor', theme.fontColor)
      root.style.setProperty('--deep', theme.deep)
    }
  }
  ngOnInit(){
   
    
   
  //   $(window).scroll(function() {    
  //     var scroll = $(window).scrollTop();
  
  //     if (scroll >= 500) {
  //         $("#contact").addClass("active");
  //     } else {
  //         $("#contact").removeClass("active");
          
  //     }
  // });
    }
  title = 'Client';
}
