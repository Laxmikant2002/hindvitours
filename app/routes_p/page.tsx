import RouteCard from '../components/features/RouteCard';
import PageTransition from '../components/ui/PageTransition';

const routes = [
  {
    id: "1",
    title: "Golden Triangle Tour",
    description: "Explore the rich history and culture of Delhi, Agra, and Jaipur.",
    duration: "6 Days",
    startLocation: "Delhi",
    endLocation: "Jaipur",
    price: 35000,
    highlights: ["Taj Mahal", "Amber Fort", "Qutub Minar"],
    icon: undefined // Add a placeholder or use getRouteIcon in RouteCard
  },
  {
    id: "2",
    title: "Kerala Backwaters",
    description: "Experience the serene backwaters and lush landscapes of God's own country.",
    duration: "5 Days",
    startLocation: "Kochi",
    endLocation: "Alleppey",
    price: 28000,
    highlights: ["Houseboat Stay", "Spice Plantations", "Beaches"],
    icon: undefined
  },
  {
    id: "3",
    title: "Rajasthan Heritage",
    description: "Discover the royal heritage and desert beauty of Rajasthan.",
    duration: "7 Days",
    startLocation: "Udaipur",
    endLocation: "Jodhpur",
    price: 42000,
    highlights: ["Lake Palace", "Desert Safari", "Mehrangarh Fort"],
    icon: undefined
  },
  {
    id: "4",
    title: "Himalayan Adventure",
    description: "Experience the majestic Himalayas and spiritual essence of North India.",
    duration: "8 Days",
    startLocation: "Delhi",
    endLocation: "Rishikesh",
    price: 45000,
    highlights: ["River Rafting", "Yoga Sessions", "Temple Visits"],
    icon: undefined
  },
  {
    id: "5",
    title: "Goa Beach Holiday",
    description: "Relax on pristine beaches and enjoy the vibrant nightlife of Goa.",
    duration: "4 Days",
    startLocation: "Panjim",
    endLocation: "Panjim",
    price: 25000,
    highlights: ["Beach Activities", "Water Sports", "Portuguese Heritage"],
    icon: undefined
  }
];

export default function RoutesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Discover Our Tours</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our carefully curated selection of tours across India
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}