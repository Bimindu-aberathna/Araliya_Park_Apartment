import { Coffee, Home, Star } from "lucide-react";
import Card from "./Animated Card/Card";


const cardData = [ 
    {
        title: "Lifestyle Amenities",
        body:
        "Enjoy exclusive access to premium facilities including a Air conditioned rooms, rooftop garden, and community spaces.",
        icon: Coffee,
        color: "#d2a331",
        image: require("../../src/Assets/Araliya-park/coffeeTray.jpg"),
        items: ["Free high-speed Wi-Fi", "In-room coffee & tea making facilities (kettle, mugs, sachets)", "Smart TV", "Water", "Washing machine", "Fully equipped kitchenette (microwave, fridge, utensils)", "Toiletries & fresh towels", "Roof-top Balcony", "Secure parking", "Air conditioning & ceiling fan", "Nearby restaurants", "Nearby shopping malls/supermarkets", "Gas stove & cooking facilities", "Nearby Gym / fitness room (5-min short walk)", "Rooftop common area", "CCTV surveillance", "24/7 security"],

    },
    {
        title: "Premium Location",
        body:
        "Positioned in the heart of Katubedda, offering easy access to supermarkets, fitness centers, and transportation.",
        icon: Home,
        color: "#d2a331",
        image: require("../../src/Assets/Araliya-park/Card_collage.jpeg"),
        items: ["Situated in Katubedda, heart of Moratuwa city", "Walking distance to University of Moratuwa", "Close to K-Zone Katubedda shopping mall", "Easy access to Galle Road and public transport", "Nearby banks, supermarkets, and pharmacies", "Close to restaurants and street food spots", "5 minutes to Moratuwa Railway Station", "Short drive to beaches (Mount Lavinia, Panadura)", "Quick access to Colombo city", "Safe and quiet residential neighborhood", "Close to hospitals and medical centers", "Ideal for students, tourists, and business travelers","Near by fitness centers and gyms", "Easy access to public transport (bus, train)", "Nearby parks and recreational areas", "Secure parking available"],
    },
    {
        title: "Modern Design",
        body:
        "Contemporary architecture meets functional design, featuring high-end finishes and spacious layouts.",
        icon: Star,
        color: "#d2a331",
        image: require("../../src/Assets/Araliya-park/photos/modernDesign.jpg"),
        items: ["Spacious open-plan layout", "Elegant modern furniture", "Large windows & natural light", "Neutral, warm color palette", "Stylish lighting fixtures", "Wall-mounted TV", "Contemporary decor & artwork", "High-quality flooring and fittings", "Modern kitchen design (compact and functional)", "Hot water", "Air conditioning", "Wi-Fi", "Smart locks / keyless entry", "Energy-efficient appliances", "Minimalist interior with clean lines", "Cozy seating area / sofa", "Modern dining space", "Workspace with desk and chair"],
    },
    ];

function FeatureCards({ setShowModal, setModalContent, setImageModal }) {

  return (
    <section className="py-5 position-relative" style={{ marginTop: "-100px" }}>
      <div className="container">
        <div className="row g-4">
          
          
         {cardData.map((card, index) => (
          <div key={index} className="col-md-4">
            <div
              
            >
                <Card title={card.title} image={card.image} icon ={card.icon} text = {card.body} facilities={card.items} setModalContent={setModalContent} setShowModal={setShowModal} setImageModal={setImageModal} />

            </div>
          </div>
         ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
