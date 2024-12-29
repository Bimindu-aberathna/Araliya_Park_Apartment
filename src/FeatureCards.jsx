import { Car, Coffee, Home, Star } from "lucide-react";
import React from "react";
import Card from "./Animated Card/Card";


const cardData = [ 
    {
        title: "Lifestyle Amenities",
        body:
        "Enjoy exclusive access to premium facilities including a Air conditioned rooms, rooftop garden, and community spaces.",
        icon: Coffee,
        color: "#d2a331",
        image: require("../src/Assets/Araliya-park/coffeeTray.jpg"),
    },
    {
        title: "Premium Location",
        body:
        "Strategically positioned in the heart of Katubedda, offering easy access to supermarkets, fitness centers, and transportation.",
        icon: Home,
        color: "#d2a331",
        image: require("../src/Assets/Araliya-park/Card_collage.jpeg"),
    },
    {
        title: "Modern Design",
        body:
        "Contemporary architecture meets functional design, featuring high-end finishes and spacious layouts.",
        icon: Star,
        color: "#d2a331",
        image: require("../src/Assets/Araliya-park/modernDesign.jpg"),
    },
    ];

function FeatureCards() {
  return (
    <section className="py-5 position-relative" style={{ marginTop: "-100px" }}>
      <div className="container">
        <div className="row g-4">
          
          
         {cardData.map((card, index) => (
          <div className="col-md-4">
            <div
              className="card border-0 shadow-lg h-100 p-4"
              style={{ borderRadius: "20px" }}
            >
                <Card title={card.title} image={card.image} icon ={card.icon} text = {card.body} />
             
            </div>
          </div>
         ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
