
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Program {
  id: string;
  title: string;
  description: string;
  image_url: string;
  duration: string;
  age_group: string;
  price: number;
  features: string[];
}

export const ProgramsAdmin = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    duration: "",
    age_group: "",
    price: "",
    features: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch programs",
        variant: "destructive",
      });
    } else {
      setPrograms(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const programData = {
      title: formData.title,
      description: formData.description,
      image_url: formData.image_url,
      duration: formData.duration,
      age_group: formData.age_group,
      price: parseFloat(formData.price),
      features: formData.features.split(",").map(f => f.trim()),
    };

    try {
      if (editingProgram) {
        const { error } = await supabase
          .from("programs")
          .update(programData)
          .eq("id", editingProgram.id);

        if (error) throw error;
        toast({ title: "Program updated successfully!" });
      } else {
        const { error } = await supabase
          .from("programs")
          .insert([programData]);

        if (error) throw error;
        toast({ title: "Program created successfully!" });
      }

      resetForm();
      fetchPrograms();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description || "",
      image_url: program.image_url || "",
      duration: program.duration || "",
      age_group: program.age_group || "",
      price: program.price?.toString() || "",
      features: program.features?.join(", ") || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;

    const { error } = await supabase
      .from("programs")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete program",
        variant: "destructive",
      });
    } else {
      toast({ title: "Program deleted successfully!" });
      fetchPrograms();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image_url: "",
      duration: "",
      age_group: "",
      price: "",
      features: "",
    });
    setEditingProgram(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Programs</h2>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Program
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingProgram ? "Edit Program" : "Add New Program"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 8 weeks"
                  />
                </div>
                
                <div>
                  <Label htmlFor="age_group">Age Group</Label>
                  <Input
                    id="age_group"
                    value={formData.age_group}
                    onChange={(e) => setFormData({ ...formData, age_group: e.target.value })}
                    placeholder="e.g., 8-12 years"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="299.99"
                  />
                </div>
                
                <div>
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="features">Features (comma-separated)</Label>
                <Input
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Hands-on projects, AI basics, Robot building"
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">
                  {editingProgram ? "Update" : "Create"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-2">{program.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Duration: {program.duration}</span>
                    <span>Age: {program.age_group}</span>
                    <span>Price: ${program.price}</span>
                  </div>
                  {program.features && (
                    <div className="mt-2">
                      <span className="text-sm font-medium">Features: </span>
                      <span className="text-sm text-gray-600">{program.features.join(", ")}</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(program)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(program.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
