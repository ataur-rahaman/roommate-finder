const Testimonials = () => {
  const testimonials = [
    {
      name: "Nadia Hossain",
      message:
        "Thanks to this platform, I found a wonderful roommate in just 2 days! Everything was smooth and easy.",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Rafiul Islam",
      message:
        "Clean design, secure communication, and verified users. Loved how hassle-free the process was!",
      location: "Chittagong, Bangladesh",
    },
    {
      name: "Sadia Rahman",
      message:
        "I was nervous about finding someone to live with, but this website made it simple and safe.",
      location: "Rajshahi, Bangladesh",
    },
  ];

  return (
    <section className="bg-white py-[50px] md:py-[100px] px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold text-[#0EA5E9]">What Our Users Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0F9FF] p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left"
            >
              <p className="text-gray-800 mb-4">“{item.message}”</p>
              <p className="font-semibold text-[#0EA5E9]">{item.name}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
