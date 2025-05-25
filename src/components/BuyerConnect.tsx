
import { useState } from "react";
import { Users, MapPin, Phone, Mail, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BuyerConnect = () => {
  const [buyers] = useState([
    {
      name: "Fresh Foods Wholesale",
      type: "Wholesaler",
      rating: 4.8,
      location: "Downtown District",
      distance: "4.2 km",
      specialties: ["Vegetables", "Fruits"],
      contact: {
        phone: "+1 (555) 123-4567",
        email: "orders@freshfoods.com",
      },
      activeOrders: 12,
      verified: true,
    },
    {
      name: "Green Valley Restaurant",
      type: "Restaurant",
      rating: 4.6,
      location: "Green Valley",
      distance: "6.8 km",
      specialties: ["Organic Produce", "Herbs"],
      contact: {
        phone: "+1 (555) 987-6543",
        email: "chef@greenvalley.com",
      },
      activeOrders: 5,
      verified: true,
    },
    {
      name: "Local Grocery Chain",
      type: "Retailer",
      rating: 4.4,
      location: "Multiple Locations",
      distance: "2.1 km",
      specialties: ["All Produce", "Bulk Orders"],
      contact: {
        phone: "+1 (555) 456-7890",
        email: "procurement@localgrocer.com",
      },
      activeOrders: 23,
      verified: true,
    },
  ]);

  return (
    <section id="buyers" className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect with Buyers
          </h2>
          <p className="text-xl text-gray-600">
            Find verified buyers in your area looking for fresh produce
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {buyers.map((buyer, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{buyer.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{buyer.type}</Badge>
                      {buyer.verified && (
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-500 fill-current" size={16} />
                    <span className="font-semibold">{buyer.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">{buyer.location} • {buyer.distance}</span>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {buyer.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="font-medium">{buyer.activeOrders} active orders</p>
                </div>

                <div className="space-y-2">
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    <Users size={16} className="mr-2" />
                    Connect
                  </Button>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone size={14} className="mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail size={14} className="mr-1" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerConnect;
