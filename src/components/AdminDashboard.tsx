
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { ProgramsAdmin } from "./admin/ProgramsAdmin";
import { ProductsAdmin } from "./admin/ProductsAdmin";
import { TestimonialsAdmin } from "./admin/TestimonialsAdmin";
import { GalleryAdmin } from "./admin/GalleryAdmin";

export const AdminDashboard = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-24">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You don't have permission to access the admin dashboard.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="programs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>
        
        <TabsContent value="programs">
          <ProgramsAdmin />
        </TabsContent>
        
        <TabsContent value="products">
          <ProductsAdmin />
        </TabsContent>
        
        <TabsContent value="testimonials">
          <TestimonialsAdmin />
        </TabsContent>
        
        <TabsContent value="gallery">
          <GalleryAdmin />
        </TabsContent>
      </Tabs>
    </div>
  );
};
