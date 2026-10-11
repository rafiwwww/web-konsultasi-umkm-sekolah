import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface DeletionSuccessScreenProps {
  onComplete: () => void;
}

export function DeletionSuccessScreen({ onComplete }: DeletionSuccessScreenProps) {
  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center animate-in fade-in zoom-in-95 duration-300">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-in zoom-in-50 duration-500">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Your account has been permanently deleted.
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8">We're sorry to see you go.</p>

        {/* Redirecting Message */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          <span>Redirecting to homepage...</span>
        </div>
      </div>
    </div>
  );
}
