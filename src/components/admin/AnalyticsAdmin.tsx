
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, Package, MessageSquare, Image, TrendingUp, Calendar } from "lucide-react";

interface Stats {
  totalUsers: number;
  totalPrograms: number;
  totalProducts: number;
  totalTestimonials: number;
  totalGallery: number;
}

export const AnalyticsAdmin = () => {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalPrograms: 0,
    totalProducts: 0,
    totalTestimonials: 0,
    totalGallery: 0,
  });

  const [userGrowth, setUserGrowth] = useState<any[]>([]);
  const [contentDistribution, setContentDistribution] = useState<any[]>([]);

  useEffect(() => {
    fetchStats();
    fetchUserGrowth();
    fetchContentDistribution();
  }, []);

  const fetchStats = async () => {
    try {
      const [users, programs, products, testimonials, gallery] = await Promise.all([
        supabase.from("profiles").select("id", { count: "exact" }),
        supabase.from("programs").select("id", { count: "exact" }),
        supabase.from("products").select("id", { count: "exact" }),
        supabase.from("testimonials").select("id", { count: "exact" }),
        supabase.from("gallery").select("id", { count: "exact" }),
      ]);

      setStats({
        totalUsers: users.count || 0,
        totalPrograms: programs.count || 0,
        totalProducts: products.count || 0,
        totalTestimonials: testimonials.count || 0,
        totalGallery: gallery.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchUserGrowth = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("created_at")
      .order("created_at", { ascending: true });

    if (data) {
      const growthData = data.reduce((acc: any[], user) => {
        const month = new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        const existing = acc.find(item => item.month === month);
        if (existing) {
          existing.users += 1;
        } else {
          acc.push({ month, users: 1 });
        }
        return acc;
      }, []);

      setUserGrowth(growthData.slice(-6)); // Last 6 months
    }
  };

  const fetchContentDistribution = async () => {
    setContentDistribution([
      { name: "Programs", value: stats.totalPrograms, color: "#3b82f6" },
      { name: "Products", value: stats.totalProducts, color: "#10b981" },
      { name: "Testimonials", value: stats.totalTestimonials, color: "#f59e0b" },
      { name: "Gallery", value: stats.totalGallery, color: "#ef4444" },
    ]);
  };

  const statCards = [
    { title: "Total Users", value: stats.totalUsers, icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" },
    { title: "Programs", value: stats.totalPrograms, icon: Package, color: "text-green-600", bgColor: "bg-green-100" },
    { title: "Products", value: stats.totalProducts, icon: Package, color: "text-purple-600", bgColor: "bg-purple-100" },
    { title: "Testimonials", value: stats.totalTestimonials, icon: MessageSquare, color: "text-orange-600", bgColor: "bg-orange-100" },
    { title: "Gallery Items", value: stats.totalGallery, icon: Image, color: "text-red-600", bgColor: "bg-red-100" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              User Growth (Last 6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {contentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
