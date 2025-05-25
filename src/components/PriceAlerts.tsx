
import { useState } from "react";
import { Bell, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PriceAlerts = () => {
  const [alerts] = useState([
    {
      produce: "Tomatoes",
      currentPrice: "Kshs 350/kg",
      change: "+15%",
      trend: "up",
      market: "Eldoret Central Market",
      distance: "5.2 km",
      urgent: true,
    },
    {
      produce: "Carrots",
      currentPrice: "Kshs 280/kg",
      change: "-8%",
      trend: "down",
      market: "Eldoret Farmers Plaza",
      distance: "3.8 km",
      urgent: false,
    },
    {
      produce: "Lettuce",
      currentPrice: "Kshs 420/kg",
      change: "+22%",
      trend: "up",
      market: "West Pokot Market",
      distance: "7.1 km",
      urgent: true,
    },
    {
      produce: "Onions",
      currentPrice: "Kshs 195/kg",
      change: "+5%",
      trend: "up",
      market: "Eldoret Local Co-op",
      distance: "2.3 km",
      urgent: false,
    },
  ]);

  return (
    <section id="prices" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Market Prices - Eldoret, Kenya
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with real-time pricing from nearby markets in Eldoret
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {alerts.map((alert, index) => (
            <Card key={index} className={`transition-all duration-200 hover:shadow-lg ${
              alert.urgent ? "border-l-4 border-l-red-500" : "border-l-4 border-l-green-500"
            }`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{alert.produce}</CardTitle>
                  {alert.urgent && (
                    <Badge variant="destructive" className="ml-2">
                      <Bell size={12} className="mr-1" />
                      Urgent
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="text-green-600" size={20} />
                      <span className="text-2xl font-bold">{alert.currentPrice}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${
                      alert.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {alert.trend === "up" ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      <span className="font-semibold">{alert.change}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>{alert.market}</strong> • {alert.distance}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    View Market Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceAlerts;
