import { MotionConfig } from "framer-motion";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { Home } from "@/pages/Home";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper text-ink-900 dark:bg-ink-900 dark:text-paper-100">
        <Header />
        <Home />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
