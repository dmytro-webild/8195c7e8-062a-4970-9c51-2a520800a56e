"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Cookie, Heart, Wheat } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Why Us",
          id: "#why-us",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Brick & Butter Bakehouse"
      button={{
        text: "Order Now",
        href: "tel:+14162238916",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Artisan Bakes, Crafted with Passion"
      description="Freshly baked bread, flaky croissants, and custom cakes, made daily with the finest ingredients. Experience the taste of true craftsmanship at Brick & Butter Bakehouse."
      buttons={[
        {
          text: "View Our Menu",
          href: "#menu",
        },
        {
          text: "Call Us Now",
          href: "tel:+14162238916",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/baked-food-with-milk-bottles-corn-flakes-fig-dry-apricots-blue-wooden-plank_23-2147956785.jpg"
      imageAlt="Delicious freshly baked croissants and pastries on display"
      showBlur={true}
      textPosition="bottom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2887.jpg",
          alt: "Happy customer Sarah P.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-woman-bakery-counter-showing-his-mobile-phone_23-2148189131.jpg",
          alt: "Satisfied customer Mark T.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fresh-croissant-front-woman-holding-smart-phone-with-blank-white-screen_23-2148027954.jpg",
          alt: "Enthusiastic customer Jessica L.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sweet-pie-wooden-platter-with-letter-dices-around_114579-45056.jpg",
          alt: "Local patron David R.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-delicious-bread-concept-with-copy-space_23-2148648846.jpg",
          alt: "Regular customer Emily C.",
        },
      ]}
      avatarText="Join our 200+ happy customers!"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Story: A Taste of Tradition"
      description="Brick & Butter Bakehouse began with a simple passion for baking and a commitment to quality. We believe in crafting delightful experiences, one perfect bite at a time, using time-honored techniques and the freshest local ingredients. We're proud to be a cherished part of the North York community."
      bulletPoints={[
        {
          title: "Freshly Baked Daily",
          description: "Every item is baked from scratch each morning, ensuring unmatched freshness and flavor.",
          icon: Cookie,
        },
        {
          title: "Finest Ingredients",
          description: "We source high-quality, local ingredients to create exceptional baked goods you can trust.",
          icon: Wheat,
        },
        {
          title: "Handcrafted with Love",
          description: "Our expert bakers pour their passion into every loaf, pastry, and cake, creating art you can taste.",
          icon: Heart,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-girls-buys-buns-bakery_1157-24886.jpg"
      imageAlt="Warm and inviting interior of Brick & Butter Bakehouse"
      mediaAnimation="opacity"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Butter Croissant",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/moon-shaped-cookie-marble_114579-23423.jpg",
          imageAlt: "Golden flaky butter croissant",
        },
        {
          id: "2",
          name: "Chocolate Almond Pastry",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/waitress-holding-berries-sponge-cake_23-2147984966.jpg",
          imageAlt: "Rich chocolate almond pastry",
        },
        {
          id: "3",
          name: "Decadent Chocolate Cake",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-creamy-delicious-cakes-with-chocolate-cips-white-surface-cake-biscuit-cookie-tea-sweet-cream_140725-101387.jpg",
          imageAlt: "Luxurious chocolate layer cake",
        },
        {
          id: "4",
          name: "Artisan Sourdough Loaf",
          price: "$8.00",
          imageSrc: "http://img.b2bpic.net/free-photo/whole-grain-rustic-loaves-bread-with-white-flowers_23-2147975195.jpg",
          imageAlt: "Crusty artisan sourdough bread",
        },
        {
          id: "5",
          name: "Gourmet Chocolate Chip Cookies",
          price: "$3.00",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookies-arrangement_23-2150714467.jpg",
          imageAlt: "Warm chocolate chip cookies",
        },
        {
          id: "6",
          name: "Fresh Berry Fruit Tart",
          price: "$6.50",
          imageSrc: "http://img.b2bpic.net/free-photo/lemon-cake-icing-glaze-cupcake-table_640221-592.jpg",
          imageAlt: "Vibrant berry fruit tart",
        },
      ]}
      title="Our Delicious Offerings"
      description="Explore our wide range of freshly baked goods, from flaky croissants to decadent cakes, all made with love and perfect for any occasion."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Mass-produced, frozen dough",
          "Artificial flavors and preservatives",
          "Limited selection, generic taste",
        ],
      }}
      positiveCard={{
        items: [
          "Handcrafted from scratch daily",
          "Premium, locally sourced ingredients",
          "Unique recipes, unforgettable flavor",
        ],
      }}
      title="Why Choose Brick & Butter Bakehouse?"
      description="We stand out by committing to traditional methods, superior ingredients, and unparalleled customer service. Experience the difference quality makes."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Local Foodie",
          company: "North York",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg",
          imageAlt: "Customer Sarah J.",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Pastry Enthusiast",
          company: "Toronto",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-cafe-with-smartphone_1321-389.jpg",
          imageAlt: "Customer Michael C.",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Community Member",
          company: "North York",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-lady-holding-waffle-honey_23-2147888717.jpg",
          imageAlt: "Customer Emily R.",
        },
        {
          id: "4",
          name: "David K.",
          role: "Regular Patron",
          company: "Willowdale",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg",
          imageAlt: "Customer David K.",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Google Reviewer",
          company: "North York",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cheesecake-with-chocolate-oval-plate-woman-hands-grey-surface_140725-62339.jpg",
          imageAlt: "Customer Jessica L.",
        },
      ]}
      title="What Our Happy Customers Say"
      description="With a 4.5-star rating from over 290 reviews, our customers consistently praise our delicious offerings and friendly service. See why everyone loves Brick & Butter Bakehouse!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you offer custom cake orders?",
          content: "Yes, we specialize in custom cakes for all occasions! Please contact us at least one week in advance to discuss your design and flavor preferences.",
        },
        {
          id: "2",
          title: "What are your operating hours?",
          content: "We are open daily from 9 AM to 6 PM. Special holiday hours may apply, please check our social media for updates.",
        },
        {
          id: "3",
          title: "Do you have gluten-free or vegan options?",
          content: "We offer a selection of gluten-friendly and vegan items. Please inquire with our staff about current availability and ingredients.",
        },
        {
          id: "4",
          title: "Do you offer delivery or pickup?",
          content: "Yes, we offer both pickup and local delivery services. You can place your order online or call us directly for more details.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Have questions about our products, ordering, or anything else? Find quick answers here or feel free to contact us directly."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Craving something delicious? Get in touch with us today to place an order, inquire about custom cakes, or simply say hello! We're here to bake your day special. Visit us at 28 Finch Ave W #116, North York, ON M2N 2G7 or call us."
      buttons={[
        {
          text: "Call Us: (416) 223-8916",
          href: "tel:+14162238916",
        },
        {
          text: "Send a Message",
          href: "mailto:info@brickandbutter.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Brick & Butter Bakehouse"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
            {
              label: "Call Us",
              href: "tel:+14162238916",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Brick & Butter Bakehouse. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
