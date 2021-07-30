import React from 'react';

function Header(){

   return(
<div>


   <div id="preloader-active">
      <div class="preloader d-flex align-items-center justify-content-center">
         <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
               <img src="assets/img/logo/loder.png" alt=""/>
            </div>
         </div>
      </div>
   </div>

   <header>

      <div class="header-area header-transparent">
         <div class="main-header ">
            <div class="header-bottom  header-sticky">
               <div class="container-fluid">
                  <div class="row align-items-center">

                     <div class="col-xl-2 col-lg-2">
                        <div class="logo">
                           <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                        </div>
                     </div>
                     <div class="col-xl-10 col-lg-10">
                        <div class="menu-wrapper d-flex align-items-center justify-content-end">

                           <div class="main-menu d-none d-lg-block">
                              <nav>
                                 <ul id="navigation">
                                    <li class="active" ><a href="index.html">Home</a></li>
                                    <li><a href="courses.html">Courses</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Blog</a>
                                       <ul class="submenu">
                                          <li><a href="blog.html">Blog</a></li>
                                          <li><a href="blog_details.html">Blog Details</a></li>
                                          <li><a href="elements.html">Element</a></li>
                                       </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>

                                    <li class="button-header margin-left "><a href="#" class="btn">Join</a></li>
                                    <li class="button-header"><a href="login.html" class="btn btn3">Log in</a></li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>

                     <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </header>


</div>
   );

}

export default Header;
