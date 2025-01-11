import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useLocation, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import labfry from '../../assets/videos/labfry.mp4';
import Container from 'react-bootstrap/Container'

function Dashboard() {

  return (
    <AdminLayout>

<div className='Txt' style={{position: 'relative', width: '100%', height: '100vh'}}>
  <video autoPlay loop muted 
    style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1}}>
    <source src={ labfry } type="video/mp4"/>
  </video>
  <div className='text-wrapper' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, color: 'white', textAlign: 'center', maxWidth: '1000px', padding: '20px'}}>
    <h1 style={{fontWeight: 'bold', fontSize: '4rem', marginBottom: '2rem', letterSpacing: '1px'
    }}>Empowering Your Digital Vision</h1>
    <p style={{ fontWeight: 'bold', fontSize: '1.8rem', lineHeight: '1.6', letterSpacing: '0.5px'
    }}>Partner with Labfry Technology for seamless mobile and web app development.
      We handle the entire process, delivering innovative solutions while you focus on growing your business.</p>
  </div>
</div>

{/* /Hero Section */}

{/* About Section */}
<section id="about" className="about section">

  <div className="container">

    <div className="row gy-5">

      <div className="content col-xl-5 d-flex flex-column">
        <h3>Voluptatem dignissimos provident quasi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
        </p>
        <a href="#" className="about-btn align-self-center align-self-xl-start"><span>About us</span> <i className="bi bi-chevron-right"></i></a>
      </div>

      <div className="col-xl-7">
        <div className="row gy-4">

          <div className="col-md-6 icon-box position-relative">
            <i className="bi bi-briefcase"></i>
            <h4><a href="" className="stretched-link">Corporis voluptates sit</a></h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          {/* Icon-Box */}

          <div className="col-md-6 icon-box position-relative">
            <i className="bi bi-gem"></i>
            <h4><a href="" className="stretched-link">Ullamco laboris nisi</a></h4>
            <p>Excepteur sint occaecat cupit non proident, sunt in culpa qui officia deserunt</p>
          </div>
          {/* Icon-Box */}

          <div className="col-md-6 icon-box position-relative">
            <i className="bi bi-broadcast"></i>
            <h4><a href="" className="stretched-link">Labore consequatur</a></h4>
            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
          </div>
          {/* Icon-Box */}

          <div className="col-md-6 icon-box position-relative">
            <i className="bi bi-easel"></i>
            <h4><a href="" className="stretched-link">Beatae veritatis</a></h4>
            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
          </div>
          {/* Icon-Box */}

        </div>
      </div>

    </div>

  </div>

</section>
{/* /About Section */}

{/* Services Section */}
<section id="services" className="services section">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Services</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-xl-3 col-md-6 d-flex">
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-activity icon"></i></div>
          <h4><a href="service-details.html" className="stretched-link">Marketing</a></h4>
          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      {/* End Service Item */}

      <div className="col-xl-3 col-md-6 d-flex">
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
          <h4><a href="service-details.html" className="stretched-link">Web Development</a></h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
      </div>
      {/* End Service Item */}

      <div className="col-xl-3 col-md-6 d-flex">
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
          <h4><a href="service-details.html" className="stretched-link">Product Management</a></h4>
          <p>Excepteur sint occaecat cupit non proident, sunt in culpa qui officia</p>
        </div>
      </div>
      {/* End Service Item */}

      <div className="col-xl-3 col-md-6 d-flex">
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-broadcast icon"></i></div>
          <h4><a href="service-details.html" className="stretched-link">Graphic Design</a></h4>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>
      {/* End Service Item */}

    </div>

  </div>

</section>
{/* /Services Section */}

{/* Stats Section */}
<section id="stats" className="stats section light-background">

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-emoji-smile"></i>
          <span purecounter-start="0" purecounter-end="232" purecounter-duration="1" className="purecounter"></span>
          <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
        </div>
      </div>
      {/* End Stats Item */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-journal-richtext"></i>
          <span purecounter-start="0" purecounter-end="521" purecounter-duration="1" className="purecounter"></span>
          <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
        </div>
      </div>
      {/* End Stats Item */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-headset"></i>
          <span purecounter-start="0" purecounter-end="1453" purecounter-duration="1" className="purecounter"></span>
          <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
        </div>
      </div>
      {/* End Stats Item */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-people"></i>
          <span purecounter-start="0" purecounter-end="32" purecounter-duration="1" className="purecounter"></span>
          <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
        </div>
      </div>
      {/* End Stats Item */}

    </div>

  </div>

</section>
{/* /Stats Section */}

{/* Call To Action Section */}
<section id="call-to-action" className="call-to-action section accent-background">

  <img src="assets/img/cta-bg.jpg" alt=""/>

  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <div className="text-center">
          <h3>Call To Action</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupit non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="#">Call To Action</a>
        </div>
      </div>
    </div>
  </div>

</section>
{/* /Call To Action Section */}

{/* Portfolio Section */}
<section id="portfolio" className="portfolio section">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Portfolio</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="isotope-layout">

      <ul className="portfolio-filters isotope-filters">
        <li filter="*" className="filter-active">All</li>
        <li filter=".filter-app">App</li>
        <li filter=".filter-product">Product</li>
        <li filter=".filter-branding">Branding</li>
        <li filter=".filter-books">Books</li>
      </ul>
      {/* End Portfolio Filters */}

      <div className="row gy-4 isotope-container">

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>App 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/app-1.jpg" title="App 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Product 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/product-1.jpg" title="Product 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Branding 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
          <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Books 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>App 2</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/app-2.jpg" title="App 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Product 2</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/product-2.jpg" title="Product 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Branding 2</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
          <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Books 2</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>App 3</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/app-3.jpg" title="App 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Product 3</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/product-3.jpg" title="Product 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Branding 3</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
          <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-info">
            <h4>Books 3</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* End Portfolio Item */}

      </div>
      {/* End Portfolio Container */}

    </div>

  </div>

</section>
{/* /Portfolio Section */}

{/* Testimonials Section */}
<section id="testimonials" className="testimonials section light-background">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Testimonials</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="swiper init-swiper">
      {/* <script type="application/json" className="swiper-config">
        {
          "loop": true,
          "speed": 600,
          "autoplay": {
            "delay": 5000
          },
          "slidesPerView": "auto",
          "pagination": {
            "el": ".swiper-pagination",
            "type": "bullets",
            "clickable": true
          },
          "breakpoints": {
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 40
            },
            "1200": {
              "slidesPerView": 3,
              "spaceBetween": 1
            }
          }
        }
      </script> */}
      <div className="swiper-wrapper">

        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>
        </div>
        {/* End testimonial item */}

        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>
        </div>
        {/* End testimonial item */}

        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>
        </div>
        {/* End testimonial item */}

        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>
        </div>
        {/* End testimonial item */}

        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>
        </div>
        {/* End testimonial item */}

      </div>
      <div className="swiper-pagination"></div>
    </div>

  </div>

</section>
{/* /Testimonials Section */}

{/* Team Section */}
<section id="team" className="team section">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Team</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="row gy-5">

      <div className="col-xl-4 col-md-6 d-flex">
        <div className="team-member">
          <div className="member-img">
            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="member-info">
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
          </div>
        </div>
      </div>
      {/* End Team Member */}

      <div className="col-xl-4 col-md-6 d-flex">
        <div className="team-member">
          <div className="member-img">
            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="member-info">
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
          </div>
        </div>
      </div>
      {/* End Team Member */}

      <div className="col-xl-4 col-md-6 d-flex">
        <div className="team-member">
          <div className="member-img">
            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="member-info">
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
            <h4>William Anderson</h4>
            <span>CTO</span>
          </div>
        </div>
      </div>
      {/* End Team Member */}

    </div>

  </div>

</section>
{/* /Team Section */}

{/* Pricing Section */}
<section id="pricing" className="pricing section">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Pricing</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-4">
        <div className="pricing-item">
          <h3>Free Plan</h3>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <ul>
            <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
            <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
            <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul>
          <a href="#" className="buy-btn">Buy Now</a>
        </div>
      </div>
      {/* End Pricing Item */}

      <div className="col-lg-4">
        <div className="pricing-item featured">
          <h3>Business Plan</h3>
          <h4><sup>$</sup>29<span> / month</span></h4>
          <ul>
            <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
            <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
            <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul>
          <a href="#" className="buy-btn">Buy Now</a>
        </div>
      </div>
      {/* End Pricing Item */}

      <div className="col-lg-4">
        <div className="pricing-item">
          <h3>Developer Plan</h3>
          <h4><sup>$</sup>49<span> / month</span></h4>
          <ul>
            <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
            <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
            <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul>
          <a href="#" className="buy-btn">Buy Now</a>
        </div>
      </div>
      {/* End Pricing Item */}

    </div>

  </div>

</section>
{/* /Pricing Section */}

{/* Faq Section */}
<section id="faq" className="faq section light-background">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Frequently Asked Questions</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="row faq-item">
      <div className="col-lg-5 d-flex">
        <i className="bi bi-question-circle"></i>
        <h4>Non consectetur a erat nam at lectus urna duis?</h4>
      </div>
      <div className="col-lg-7">
        <p>
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </p>
      </div>
    </div>
    {/* End F.A.Q Item*/}

    <div className="row faq-item">
      <div className="col-lg-5 d-flex">
        <i className="bi bi-question-circle"></i>
        <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
      </div>
      <div className="col-lg-7">
        <p>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
        </p>
      </div>
    </div>
    {/* End F.A.Q Item*/}

    <div className="row faq-item">
      <div className="col-lg-5 d-flex">
        <i className="bi bi-question-circle"></i>
        <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
      </div>
      <div className="col-lg-7">
        <p>
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
        </p>
      </div>
    </div>
    {/* End F.A.Q Item*/}

    <div className="row faq-item">
      <div className="col-lg-5 d-flex">
        <i className="bi bi-question-circle"></i>
        <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
      </div>
      <div className="col-lg-7">
        <p>
          Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
        </p>
      </div>
    </div>
    {/* End F.A.Q Item*/}

    <div className="row faq-item">
      <div className="col-lg-5 d-flex">
        <i className="bi bi-question-circle"></i>
        <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
      </div>
      <div className="col-lg-7">
        <p>
          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
        </p>
      </div>
    </div>
    {/* End F.A.Q Item*/}

  </div>

</section>
{/* /Faq Section */}

{/* Contact Section */}
<section id="contact" className="contact section">

  {/* Section Title */}
  <div className="container section-title">
    <h2>Contact</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-5">

        <div className="info-wrap">
          <div className="info-item d-flex">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          {/* End Info Item */}

          <div className="info-item d-flex">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          {/* End Info Item */}
          <div className="info-item d-flex">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
          {/* End Info Item */}

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style={{border:0; width: 100%; height: 270px;}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>

      <div className="col-lg-7">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">

            <div className="col-md-6">
              <label for="name-field" className="pb-2">Your Name</label>
              <input type="text" name="name" id="name-field" className="form-control" required=""/>
            </div>

            <div className="col-md-6">
              <label for="email-field" className="pb-2">Your Email</label>
              <input type="email" className="form-control" name="email" id="email-field" required=""/>
            </div>

            <div className="col-md-12">
              <label for="subject-field" className="pb-2">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
            </div>

            <div className="col-md-12">
              <label for="message-field" className="pb-2">Message</label>
              <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
      </div>
      {/* End Contact Form */}

    </div>

  </div>

</section>
{/* /Contact Section */}
{/* Scroll Top */}
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </AdminLayout>
  )
}
export default Dashboard
