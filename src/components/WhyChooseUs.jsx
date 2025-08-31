const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Listings",
      description: "We manually verify every listing to ensure safety and authenticity for all users.",
      icon: "✅",
    },
    {
      title: "Smart Matching",
      description: "Get roommate suggestions based on budget, location & lifestyle compatibility.",
      icon: "🧠",
    },
    {
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist with your needs.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-[#E7F6FD] md:py-[100px] py-[50px] px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold text-[#0EA5E9]">Why Choose Us</h2>
        <div className="grid text-black gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
