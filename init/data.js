const sampleListings =[
  {
    title: "Banff National Park",
    description: "Scenic national park with mountains, lakes, and wildlife.",
    image: "https://images.unsplash.com/photo-1520962922320-2038d02bf06f?auto=format&fit=crop&w=800&q=60",
    price: 20,
    location: "Alberta",
    country: "Canada"
  },
  {
    title: "Yosemite National Park",
    description: "Famous for giant sequoia trees and stunning waterfalls.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 25,
    location: "California",
    country: "USA"
  },
  {
    title: "Great Barrier Reef",
    description: "World's largest coral reef system with marine biodiversity.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 30,
    location: "Queensland",
    country: "Australia"
  },
  {
    title: "Machu Picchu",
    description: "Historic Incan city in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=60",
    price: 45,
    location: "Cusco",
    country: "Peru"
  },
  {
    title: "Santorini",
    description: "Beautiful Greek island known for white buildings and blue domes.",
    image: "https://images.unsplash.com/photo-1501436513142-5b53c6e8d3e1?auto=format&fit=crop&w=800&q=60",
    price: 60,
    location: "Cyclades",
    country: "Greece"
  },
  {
    title: "Tokyo City View",
    description: "Modern city with skyscrapers and traditional temples.",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
    price: 80,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Sahara Desert Camp",
    description: "Experience stargazing and camel rides in the vast desert.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60",
    price: 35,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Swiss Alps Chalet",
    description: "Cozy stay with panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1607082349560-2037b2c6b405?auto=format&fit=crop&w=800&q=60",
    price: 120,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Petra Ruins",
    description: "Ancient archaeological site carved into red sandstone cliffs.",
    image: "https://images.unsplash.com/photo-1570785160838-14e9f70f37f4?auto=format&fit=crop&w=800&q=60",
    price: 40,
    location: "Ma'an",
    country: "Jordan"
  },
  {
    title: "Bali Beach Resort",
    description: "Relaxing beachfront stay with tropical vibes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 75,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Dubai Skyscraper View",
    description: "Luxury high-rise stay with city skyline views.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
    price: 150,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Icelandic Hot Springs",
    description: "Scenic natural thermal pools with icy backdrops.",
    image: "https://images.unsplash.com/photo-1549887534-3d08f6e3b63e?auto=format&fit=crop&w=800&q=60",
    price: 55,
    location: "Reykjavík",
    country: "Iceland"
  },
  {
    title: "Paris Eiffel View",
    description: "Romantic city stay near the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60",
    price: 100,
    location: "Paris",
    country: "France"
  },
  {
    title: "Cinque Terre Stay",
    description: "Colorful seaside villages with cliffside views.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    price: 85,
    location: "Liguria",
    country: "Italy"
  },
  {
    title: "Amazon Rainforest Lodge",
    description: "Eco-stay deep in the jungle with wildlife tours.",
    image: "https://images.unsplash.com/photo-1583525163665-734f6de6c6c5?auto=format&fit=crop&w=800&q=60",
    price: 50,
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

