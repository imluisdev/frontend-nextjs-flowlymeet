// "use client"
// import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
// import { getSupabaseFrontendClient } from "@/lib/supabase/client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     LayoutDashboard,
//     Settings,
//     Users,
//     Calendar,
//     BarChart3,
//     LogOut,
//     Menu,
// } from "lucide-react"
// import { cn } from "@/lib/utils"

// export default function DashboardPage() {
//     const router = useRouter();
//     const [user, setUser] = useState<any>(null);
//     const [collapsed, setCollapsed] = useState(false);
//     const supabase = getSupabaseFrontendClient();
//     const axiosAuth = useAxiosAuth();

//     const getProtectedData = async () => {
//         const response = await axiosAuth.get('/protected');
//         console.log('Response:', response);
//         console.log('Protected data:', response.data);
//     }

//     useEffect(() => {
//         const checkSession = async () => {
//             const { data } = await supabase.auth.getSession();
//             console.log('Session:', data);

//             if (!data.session) {
//                 router.push('/auth/login');
//             } else {
//                 setUser(data.session.user);
//                 getProtectedData();
//             }
//         }
//         checkSession();
//     }, []);

//     const logout = async () => {
//         await supabase.auth.signOut();
//         router.push('/auth/login');
//     }

//     const menuItems = [
//         { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
//         { icon: Calendar, label: "Calendar", href: "/calendar" },
//         { icon: Users, label: "Users", href: "/users" },
//         { icon: BarChart3, label: "Analytics", href: "/analytics" },
//         { icon: Settings, label: "Settings", href: "/settings" },
//     ];

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className={cn(
//                 "bg-white h-full transition-all duration-300 border-r",
//                 collapsed ? "w-20" : "w-64"
//             )}>
//                 <div className="flex flex-col h-full">
//                     <div className="flex items-center justify-between p-4 border-b">
//                         {!collapsed && <h2 className="text-xl font-bold">FlowlyMeet</h2>}
//                         <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => setCollapsed(!collapsed)}
//                         >
//                             <Menu className="h-6 w-6" />
//                         </Button>
//                     </div>
//                     <nav className="flex-1 p-4">
//                         {menuItems.map((item) => (
//                             <Button
//                                 key={item.label}
//                                 variant="ghost"
//                                 className={cn(
//                                     "w-full justify-start mb-2",
//                                     collapsed ? "px-2" : "px-4"
//                                 )}
//                                 onClick={() => router.push(item.href)}
//                             >
//                                 <item.icon className="h-5 w-5 mr-2" />
//                                 {!collapsed && <span>{item.label}</span>}
//                             </Button>
//                         ))}
//                     </nav>
//                     <div className="p-4 border-t">
//                         <Button
//                             variant="ghost"
//                             className={cn(
//                                 "w-full justify-start",
//                                 collapsed ? "px-2" : "px-4"
//                             )}
//                             onClick={logout}
//                         >
//                             <LogOut className="h-5 w-5 mr-2" />
//                             {!collapsed && <span>Logout</span>}
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-8 overflow-auto">
//                 <Card className="mb-6">
//                     <CardHeader>
//                         <CardTitle>Welcome back, {user?.email}</CardTitle>
//                         <CardDescription>
//                             Here's an overview of your dashboard
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Total Users</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <p className="text-3xl font-bold">1,234</p>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Active Meetings</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <p className="text-3xl font-bold">56</p>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Total Revenue</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <p className="text-3xl font-bold">$12,345</p>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     )
// }

import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive"
import { DataTable } from "@/components/dashboard/data-table"
import { SectionCards } from "@/components/dashboard/section-cards"
import { SiteHeader } from "@/components/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

export default function Page() {
  return (
    <NavBar>
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
