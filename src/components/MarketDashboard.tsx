
import { MapPin, TrendingUp, Users, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PriceAlerts from "./PriceAlerts";
import BuyerConnect from "./BuyerConnect";
import ProduceForm from "./ProduceForm";

const MarketDashboard = () => {
  const stats = [
    {
      title: "Active Markets",
      value: "24",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Price Trends",
      value: "+12%",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Connected Buyers",
      value: "156",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Listed Produce",
      value: "89",
      icon: Package,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="pt-20 pb-8">
      {/* Hero Section */}
      <section id="dashboard" className="py-12 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Market Match Platform
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Connect small-scale farmers with local markets and buyers. Get real-time price alerts and maximize your profits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${stat.bgColor} mb-4`}>
                    <stat.icon className={stat.color} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-green-100">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Alerts Section */}
      <PriceAlerts />

      {/* Buyer Connect Section */}
      <BuyerConnect />

      {/* Produce Form Section */}
      <ProduceForm />
    </div>
  );
};

export default MarketDashboard;
