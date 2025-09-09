const sampleListings =[
  {
    title: "Banff National Park",
    description: "Scenic national park with mountains, lakes, and wildlife.",
    image: "https://www.thoughtco.com/thmb/P0ph0xL8ipQ74MEwhHW1vNRKum0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ottawa-downtown-lge-56a0e5845f9b58eba4b4f44a.jpg",
    price: 2000,
    location: "Alberta",
    country: "Canada"
  },
  {
    title: "Yosemite National Park",
    description: "Famous for giant sequoia trees and stunning waterfalls.",
    image: "https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california.jpg",
    price: 2500,
    location: "California",
    country: "USA"
  },
  {
    title: "Great Barrier Reef",
    description: "World's largest coral reef system with marine biodiversity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgoaY5dubp6gP1vLAivq2pt5jzGb6N3HFiA&s",
    price: 3000,
    location: "Queensland",
    country: "Australia"
  },
  {
    title: "Machu Picchu",
    description: "Historic Incan city in the Andes Mountains.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg",
    price: 4500,
    location: "Cusco",
    country: "Peru"
  },
  {
    title: "Santorini",
    description: "Beautiful Greek island known for white buildings and blue domes.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/f6/2d/d1.jpg",
    price: 6000,
    location: "Cyclades",
    country: "Greece"
  },
  {
    title: "Tokyo City View",
    description: "Modern city with skyscrapers and traditional temples.",
    image: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2023/09/roppongi-tower-hills-tokyo-city-view-GettyImages-1340637405-770x514.jpg",
    price: 8000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Sahara Desert Camp",
    description: "Experience stargazing and camel rides in the vast desert.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDT75T7ZNgrgC-3BmHz9quQzgS0W1lL4-IA&s",
    price: 3500,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Swiss Alps Chalet",
    description: "Cozy stay with panoramic mountain views.",
    image: "https://images.squarespace-cdn.com/content/v1/5ff9bd78fcd25633938f5fd5/1702934026417-YHEXOPKD0BA6VI73YNL2/1-Chalet-evening-lit-up-looking-towards-Tasch-copy.jpg",
    price: 12000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Petra Ruins",
    description: "Ancient archaeological site carved into red sandstone cliffs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq8xQklCgz_P6O89bHTCtfQRtmssB0fAlgQ&s",
    price: 4000,
    location: "Ma'an",
    country: "Jordan"
  },
  {
    title: "Bali Beach Resort",
    description: "Relaxing beachfront stay with tropical vibes.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/a8/02/f4/anantara-uluwatu-bali.jpg",
    price: 7500,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Dubai Skyscraper View",
    description: "Luxury high-rise stay with city skyline views.",
    image: "https://travelwithkat.com/wp-content/uploads/2015/03/DSC5977_tonemapped-1620-x-1080-1080x675.jpg",
    price: 15000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Icelandic Hot Springs",
    description: "Scenic natural thermal pools with icy backdrops.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsi3N-30bQmsc-xNXeX8H0wEu1WUphUPZ7-A&s",
    price: 5500,
    location: "Reykjavík",
    country: "Iceland"
  },
  {
    title: "Paris Eiffel View",
    description: "Romantic city stay near the Eiffel Tower.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ac/72/c1/caption.jpg?w=1200&h=-1&s=1&cx=629&cy=354&chk=v1_67cd54ded702cb5ace26",
    price: 10000,
    location: "Paris",
    country: "France"
  },
  {
    title: "Cinque Terre Stay",
    description: "Colorful seaside villages with cliffside views.",
    image: "https://www.thehotelguru.com/_images/d8/73/d873dd039574d6f039251416dc02bfbe/s1180x560.jpg",
    price: 8500,
    location: "Liguria",
    country: "Italy"
  },
  {
    title: "Amazon Rainforest Lodge",
    description: "Eco-stay deep in the jungle with wildlife tours.",
    image: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622488543/shutterstock_1389268868-lodges-manausjpg1120/shutterstock_1389268868-lodges-manausjpg1120.jpg",
    price: 5000,
    location: "Manaus",
    country: "Brazil"
  },
  {
    title: "Grand Canyon Viewpoint",
    description: "Unforgettable canyon vistas and hiking trails.",
    image: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?auto=format&fit=crop&w=800&q=60",
    price: 35,
    location: "Arizona",
    country: "USA"
  },
  {
    title: "Cape Town Coastline",
    description: "Stunning ocean views with mountain backdrop.",
    image: "https://images.unsplash.com/photo-1544961482-d0d97c0d0184?auto=format&fit=crop&w=800&q=60",
    price: 65,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Hạ Long Bay Cruise",
    description: "Sail among limestone islands in emerald waters.",
    image: "https://images.unsplash.com/photo-1542973743-31867e254a5b?auto=format&fit=crop&w=800&q=60",
    price: 60,
    location: "Quảng Ninh",
    country: "Vietnam"
  },
  {
    title: "Mount Fuji Retreat",
    description: "Peaceful Japanese retreat with iconic mountain views.",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=60",
    price: 90,
    location: "Yamanashi",
    country: "Japan"
  },
  {
    title: "New York City Loft",
    description: "Trendy downtown apartment with skyline views.",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7c8ecf?auto=format&fit=crop&w=800&q=60",
    price: 140,
    location: "New York",
    country: "USA"
  }
]


module.exports = { data: sampleListings };

