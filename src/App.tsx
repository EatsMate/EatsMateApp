import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { MobileLayout } from "./components/layout/MobileLayout";
import { BottomNav } from "./components/layout/BottomNav";
import { OnboardingScreen } from "./features/onboarding/OnboardingScreen";
import { MapScreen } from "./features/map/MapScreen";
import { FeedScreen } from "./features/feed/FeedScreen";
import { ProfileScreen } from "./features/profile/ProfileScreen";

function AppShell() {
  return (
    <>
      <div className="flex-1 overflow-hidden relative w-full h-full">
        <Outlet />
      </div>
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<OnboardingScreen />} />

          <Route element={<AppShell />}>
            <Route path="/home" element={<MapScreen />} />
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}

export default App;
