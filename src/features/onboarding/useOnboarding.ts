import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ONBOARDING_STEPS = [
    {
        id: 1,
        title: "Découvrez les favoris de vos amis",
        description: "Explorez les meilleures adresses recommandées par votre cercle proche.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Partagez vos pépites",
        description: "Une découverte incroyable ? Partagez-la instantanément avec vos amis.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Ne vous trompez plus jamais",
        description: "Fiez-vous aux goûts de ceux que vous connaissez, pas aux inconnus.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
    },
];

export function useOnboarding() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentStep < ONBOARDING_STEPS.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            handleFinish();
        }
    };

    const handleFinish = () => {
        navigate("/home");
    };

    return {
        currentStep,
        totalSteps: ONBOARDING_STEPS.length,
        stepData: ONBOARDING_STEPS[currentStep],
        handleNext,
        handleFinish,
        setCurrentStep,
    };
}
