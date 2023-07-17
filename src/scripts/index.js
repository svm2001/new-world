import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb'
import IMask from 'imask'
import { slider } from "./components/slider";
import { header } from "./components/header";
import { cityChoose } from "./components/cityChoose";
import { card } from "./components/card";
import { about } from "./components/about";
import { tabs } from "./components/tabs";
import { scrollTop } from "./components/scrollToTop";
import { ProductsCards } from "./components/productsCards";
import { catalog } from "./components/catalog";
import { PriceRangeSlider } from "./components/priceRangeSlider";
import { catalogCheckboxes } from "./components/catalogCheckboxes";
import { accordionCustom } from "./components/accordionCustom";
import { product } from "./components/product";
import Accordion from 'accordion-js';
import counter from './components/card/counter';
import validate from './validate';
import masks from './masks'
import orderStage from './components/orderStage'

document.addEventListener('DOMContentLoaded', () => {
  slider();
  header();
  cityChoose();
  card();
  about();
  scrollTop();
  ProductsCards();
  catalog();
  PriceRangeSlider();
  catalogCheckboxes();
  accordionCustom();
  product();
  counter();
  validate();
  masks();
  orderStage();

  tabs({
    tabParentSelector: '.b-header-desk-catalog',
    tabHeaderSelector: '.b-header-desk-catalog-switcher',
    tabHeaderActiveClass: 'b-header-desk-catalog-switcher--active',
    tabItemSelector: '.b-header-desk-catalog-content',
    tabItemActiveClass: 'b-header-desk-catalog-content--active',
    event: 'click'
  })

  if(document.querySelector('.product__tabs')) {
    tabs({
      tabParentSelector: '.product__tabs',
      tabHeaderSelector: '.product__tabs-nav-btn',
      tabHeaderActiveClass: 'product__tabs-nav-btn--active',
      tabItemSelector: '.product__tabs-content-item',
      tabItemActiveClass: 'product__tabs-content-item--active',
      event: 'click'
    })
  }
  // let slinky = $('.burger__catalog-body').slinky({
  //   title: true,
  // });

  if(document.querySelector('.catalog__filter-container')) {
    new Accordion('.catalog__filter-container', {
      duration: 400,
      showMultiple: true,
      openOnInit: [0, 1, 2, 3, 4, 5, 6]
    });
  }

  if(document.querySelector('#productCardSliderMain .slick-track')) {
    lightGallery(document.querySelector('#productCardSliderMain .slick-track'), {
      mode: 'lg-tube',
      cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      speed: 1000,
      thumbnail: true
    });
  }

  // if(document.querySelector('#productCardSliderAdd .slick-track')) {
  //   lightGallery(document.querySelector('#productCardSliderAdd .slick-track'), {
  //     mode: 'lg-tube',
  //     cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  //     speed: 1000,
  //     thumbnail: true
  //   });
  // }
})
