import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { useOnboarding, ONBOARDING_STEPS } from "./useOnboarding";
import { ArrowRight } from "lucide-react";

import Logo from "../../assets/EatsMate-Logo.jpeg";

export function OnboardingScreen() {
    const { currentStep, stepData, handleNext, setCurrentStep } = useOnboarding();

    return (
        <div className="flex flex-col h-full bg-background relative z-0">
            {/* Logo Overlay */}
            <div className="absolute top-6 left-6 z-50">
                <img src={Logo} alt="EatsMate" className="w-10 h-10 rounded-xl shadow-lg border-2 border-white/20" />
            </div>

            <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
                        <img
                            src={stepData.image}
                            alt=""
                            className="w-full h-[70%] object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-center px-8 pb-12 z-20 -mt-20">
                <div className="flex gap-2 mb-8">
                    {ONBOARDING_STEPS.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentStep(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentStep ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                                }`}
                        />
                    ))}
                </div>

                <motion.div
                    key={`text-${currentStep}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4 mb-10"
                >
                    <h1 className="text-3xl font-bold leading-tight">
                        {stepData.title}
                    </h1>
                    <p className="text-white/60 leading-relaxed text-sm">
                        {stepData.description}
                    </p>
                </motion.div>

                <Button onClick={handleNext} className="w-full text-base group">
                    {currentStep === ONBOARDING_STEPS.length - 1 ? "Commencer" : "Suivant"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
