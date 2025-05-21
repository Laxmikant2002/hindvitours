import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/images/team/ceo.jpg',
    bio: 'With over 20 years of experience in the tourism industry, Rajesh leads our vision of making Indian tourism accessible to all.'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    image: '/images/team/operations.jpg',
    bio: 'Priya ensures smooth operations across all our routes and maintains our high standards of service quality.'
  },
  {
    name: 'Amit Patel',
    role: 'Customer Experience Head',
    image: '/images/team/customer.jpg',
    bio: 'Amit leads our customer experience initiatives, ensuring every journey exceeds expectations.'
  }
];

const stats = [
  {
    number: '10K+',
    label: 'Happy Customers',
    description: 'Satisfied travelers who have experienced our services'
  },
  {
    number: '50+',
    label: 'Popular Routes',
    description: 'Carefully curated routes covering major tourist destinations'
  },
  {
    number: '100+',
    label: 'Team Members',
    description: 'Dedicated professionals working to make your journey memorable'
  },
  {
    number: '4.8/5',
    label: 'Average Rating',
    description: 'Based on customer feedback and reviews'
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Indian Tourism"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About HindviTours
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in exploring the rich cultural heritage and natural beauty of India
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, HindviTours was born from a passion to showcase India's incredible diversity to travelers from around the world. What started as a small operation has grown into one of the most trusted names in Indian tourism.
                </p>
                <p>
                  Our mission is to make travel in India accessible, comfortable, and enriching. We believe in creating experiences that go beyond sightseeing – experiences that connect travelers with the heart and soul of India.
                </p>
                <p>
                  Today, we serve thousands of travelers annually, offering carefully curated routes that combine popular destinations with hidden gems, all while maintaining the highest standards of safety and comfort.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Our Journey"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-blue-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in every aspect of our service, from planning to execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Customer First</h3>
              <p className="text-gray-600 text-center">
                Our customers' satisfaction and safety are at the heart of everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We are committed to promoting responsible tourism and preserving India's natural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}