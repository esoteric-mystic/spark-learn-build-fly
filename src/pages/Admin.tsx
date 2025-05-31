
import { useAuth } from "@/hooks/useAuth";
import { AdminDashboard } from "@/components/AdminDashboard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Admin = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default Admin;
