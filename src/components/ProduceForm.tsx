
import { useState } from "react";
import { Package, Camera, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ProduceForm = () => {
  const [formData, setFormData] = useState({
    produceName: "",
    quantity: "",
    unit: "kg",
    price: "",
    harvestDate: "",
    description: "",
    location: "",
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Produce listed:", formData);
    toast({
      title: "Produce Listed!",
      description: "Your produce has been successfully listed. Buyers will be notified.",
    });
    setFormData({
      produceName: "",
      quantity: "",
      unit: "kg",
      price: "",
      harvestDate: "",
      description: "",
      location: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="produce" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            List Your Produce
          </h2>
          <p className="text-xl text-gray-600">
            Add your fresh produce to connect with buyers
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="text-green-600" size={24} />
              <span>Produce Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="produceName">Produce Name</Label>
                  <Input
                    id="produceName"
                    name="produceName"
                    placeholder="e.g., Organic Tomatoes"
                    value={formData.produceName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Farm Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g., Green Valley Farm"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="100"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="unit">Unit</Label>
                  <select
                    id="unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="kg">Kilograms</option>
                    <option value="lbs">Pounds</option>
                    <option value="boxes">Boxes</option>
                    <option value="bunches">Bunches</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="price">Price per Unit ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      placeholder="3.50"
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="harvestDate">Expected Harvest Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={16} />
                  <Input
                    id="harvestDate"
                    name="harvestDate"
                    type="date"
                    value={formData.harvestDate}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your produce quality, growing methods, organic certification, etc."
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600">Upload photos of your produce</p>
                <Button type="button" variant="outline" className="mt-2">
                  Choose Files
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
              >
                List Produce
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProduceForm;
