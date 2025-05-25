import { useState } from "react";
import { Package, Camera, Calendar, DollarSign, X } from "lucide-react";
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
  
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Produce listed:", formData);
    console.log("Uploaded files:", uploadedFiles);
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
    setUploadedFiles([]);
    setPreviews([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length > 0) {
      const newFiles = [...uploadedFiles, ...files];
      setUploadedFiles(newFiles);
      
      // Create preview URLs
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
      
      toast({
        title: "Photos uploaded!",
        description: `${files.length} photo(s) added successfully.`,
      });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    
    // Revoke the object URL to free memory
    URL.revokeObjectURL(previews[index]);
    
    setUploadedFiles(newFiles);
    setPreviews(newPreviews);
  };

  return (
    <section id="produce" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            List Your Produce
          </h2>
          <p className="text-xl text-gray-600">
            Add your fresh produce to connect with buyers in Eldoret, Kenya
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
                    placeholder="e.g., Eldoret Valley Farm"
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
                  <Label htmlFor="price">Price per Unit (Kshs)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 text-sm">Kshs</span>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      placeholder="350"
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-12"
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

              <div>
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 mb-4">Upload photos of your produce</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Choose Files
                  </Button>
                </div>
                
                {/* Image Previews */}
                {previews.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Uploaded Photos ({previews.length})
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {previews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
