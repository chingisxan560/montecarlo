export const navList = [
  {
    id: 1,
    path: "/",
    text: "home", // 👈 Ключ должен быть с маленькой буквы
  },
  {
    id: 2,
    path: "/about",
    text: "about",
  },
  {
    id: 3,
    path: "/services",
    text: "services",
  },
  {
    id: 4,
    path: "/page",
    text: "page",
    subItems: [
      {
        id: 51,
        path: "/team",
        text: "ourTeam", // 👈 Должно соответствовать navigation.json
      },
      {
        id: 52,
        path: "/testimonial",
        text: "testimonial",
      },
    ],
  },
  {
    id: 5,
    path: "/contact",
    text: "contact",
  },
];

export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const getCarouselData = (t) => [
  {
    img: "../assets/img/carousel-1.jpg",
    title: t("discoverLuxuriousHotel"),
    subtitle: t("luxuryLiving"),
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: t("monteCarloLuxury"),
    subtitle: t("luxuryLiving"),
  },
  {
    img: "../assets/img/carousel-3.jpg",
    title: t("bestRelaxPlace"),
    subtitle: t("luxuryLiving"),
  },
];

export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Apartment",
    img: "/assets/img/room.png",
    description:
      "Enjoy luxurious rooms and apartments with top-notch facilities. Experience comfort and elegance in every detail.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    img: "/assets/img/restaurant.png",
    description:
      "Savor delicious cuisines prepared by world-class chefs. Our restaurants offer a variety of dishes to delight your taste buds.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    img: "/assets/img/spa.png",
    description:
      "Relax and rejuvenate with our exclusive spa treatments and fitness programs designed to revitalize your body and mind.",
  },
  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    img: "/assets/img/pool.png",
    description:
      "Engage in thrilling sports and gaming activities. Enjoy state-of-the-art facilities for an unforgettable experience.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    img: "/assets/img/casino.png",
    description:
      "Celebrate life's special moments with our event and party services. We make every occasion extraordinary.",
  },
  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    img: "/assets/img/sports.png",
    description:
      "Stay fit and healthy with our modern gym equipment and professional yoga classes tailored for all levels.",
  },
];

export const team = [
  {
    image: "../assets/img/jonnysins.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/jonnysins2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/jonnysins3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/jonnysins4.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        url: "/about",
        name: "About Us",
      },
      {
        url: "/contact",
        name: "Contact Us",
      },

      {
        url: "/team",
        name: "Our Team",
      },
      {
        url: "/testimonial",
        name: "Testimontal",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, Yerevan, Armenia",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+37495555552",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "montecarlo@example.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "monteCarlo@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "monteCarlo@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "montecarlo@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="p-2 fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="p-2 fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="p-2 fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room400x250.png",
    price: "$110/night",
    name: "Junior Suite",
    category: "standard",
    capacity: 2,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description1:
      "A cozy and elegant room providing comfort and sophistication.",
    info1: "A perfect option for any guest, ensuring relaxation and intimacy.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 2,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 1,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-2.jpg",
    price: "$110/night",
    name: "Executive Suite",
    category: "suite",
    capacity: 3,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description2:
      "An exclusive space with outstanding design and luxurious comfort.",
    info2: "Ideal for business trips, featuring a separate workspace.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 3,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 2,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "$110/night",
    name: "Super Deluxe",
    category: "deluxe",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description3:
      "A luxury suite with brand-new furniture and all modern conveniences.",
    info3: "Top-tier bathroom, exceptional design, and well-maintained spaces.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 3,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 2,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-4.png",
    price: "$110/night",
    name: "Super Deluxe",
    category: "deluxe",
    capacity: 3,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description4:
      "An exclusive space with outstanding design and luxurious comfort.",
    info4:
      "A room where quality and luxury come together with breathtaking views.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 3,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 2,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-5.png",
    price: "$110/night",
    name: "Panoramic Deluxe",
    category: "deluxe",
    capacity: 2,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description5: "The Panoramic Deluxe offers exceptional mountain views.",
    info5:
      "A room that fulfills all desires, featuring a large balcony and an unparalleled view.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 2,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 1,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-6.png",
    price: "$110/night",
    name: "Mountain View Suite",
    category: "deluxe",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description6: "A room offering an uninterrupted view of the mountains.",
    info6:
      "A relaxing retreat that embraces the beauty of nature with mountain vistas everywhere.",
    yellowbtn: "View Detail",
    darkbtn: "Book Now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 4,
        facility: "Bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 3,
        facility: "Bath",
      },
      { icon: <i class="fa fa-wifi text-primary me-2"></i>, facility: "WiFi" },
    ],
  },
  {
    img: "../assets/img/room-7.png",
    price: "$110/night",
    name: "Presidential Jacuzzi Suite",
    category: "deluxe",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description7:
      "Presidential Suite with a jacuzzi. A luxurious, spacious room.",
    info7: "A place of craftsmanship where the jacuzzi is everything.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 4,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 3,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
  {
    img: "../assets/img/room-8.png",
    price: "$110/night",
    name: "Royal Suite",
    category: "deluxe",
    capacity: 3,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description8:
      "A luxurious, spacious room designed for distinguished guests.",
    info8:
      "For preferred guests, this suite will be offered with a luxury set.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 3,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 2,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
  {
    img: "../assets/img/room-9.png",
    price: "$110/night",
    name: "Executive Deluxe",
    category: "deluxe",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description9: "A unique Executive Deluxe room with all premium amenities.",
    info9: "Every detail is crafted with impeccable comfort.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 4,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 2,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
  {
    img: "../assets/img/room-10.png",
    price: "$110/night",
    name: "Classic Room",
    category: "standard",
    capacity: 2,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description10:
      "Equipped with all necessary amenities for ultimate comfort and relaxation.",
    info10:
      "The Classic Room combines comfort and elegant simplicity. This room is designed for guests looking for a cozy and peaceful environment.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 2,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 1,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
  {
    img: "../assets/img/room-11.png",
    price: "$110/night",
    name: "Imperial Suite",
    category: "suite",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description11:
      "This room is designed with top-tier amenities for ultimate comfort and relaxation.",
    info11:
      "The Imperial Suite features a luxurious layout, offering the best relaxation with a dedicated floor and full service.",

    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 4,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 3,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
  {
    img: "../assets/img/room-12.png",
    price: "$110/night",
    name: "Imperial Suite",
    category: "suite",
    capacity: 4,
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description12:
      "This Imperial Suite is designed for those who appreciate luxury.",
    info12:
      "The Imperial Suite features a luxurious layout, offering the best relaxation with a dedicated floor and full service.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facilities: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 4,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-bath text-primary me-2"></i>,
        quantity: 3,
        facility: "bath",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
    ],
  },
];
