import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userRole: string;
}

// Role-specific warning messages
const getRoleSpecificWarning = (role: string): string => {
  const warnings: { [key: string]: string } = {
    Admin:
      "All your data including system management records, user management history, platform configurations, and administrative logs will be permanently deleted.",
    Dosen:
      "All your data including seminar history, consultation records, student interactions, teaching materials, and schedules will be permanently deleted.",
    Siswa:
      "All your data including consultation history, seminar registrations, academic records, and learning progress will be permanently deleted.",
    UMKM:
      "All your data including financial reports, business records, consultation history, consultation requests, and business analytics will be permanently deleted.",
  };

  return warnings[role] || "All your data including profile and activity history will be permanently deleted.";
};

export function DeleteAccountModal({ isOpen, onClose, onConfirm, userRole }: DeleteAccountModalProps) {
  const [confirmText, setConfirmText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showUndoSnackbar, setShowUndoSnackbar] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setConfirmText("");
      setPassword("");
      setError("");
      setIsLoading(false);
      setShowUndoSnackbar(false);
      setCountdown(5);
    }
  }, [isOpen]);

  // Countdown timer for undo
  useEffect(() => {
    if (showUndoSnackbar && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showUndoSnackbar && countdown === 0) {
      // Execute deletion
      executeDeletion();
    }
  }, [showUndoSnackbar, countdown]);

  const handleConfirmTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmText(e.target.value);
    if (error && e.target.value === "DELETE") {
      setError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isFormValid = confirmText === "DELETE" && password.length >= 6;

  const handleDelete = () => {
    // Validate confirmation text
    if (confirmText !== "DELETE") {
      setError("Confirmation text does not match.");
      return;
    }

    // Validate password
    if (password.length < 6) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Show undo snackbar
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      setShowUndoSnackbar(true);
      setCountdown(5);
    }, 1000);
  };

  const handleUndo = () => {
    setShowUndoSnackbar(false);
    setCountdown(5);
  };

  const executeDeletion = () => {
    setShowUndoSnackbar(false);
    onConfirm();
  };

  if (!isOpen && !showUndoSnackbar) return null;

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Dark overlay with higher opacity */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-150"
            onClick={!isLoading ? onClose : undefined}
          />

          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 animate-in zoom-in-95 duration-150"
            style={{ padding: "28px" }}
          >
            {/* Red accent indicator at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 rounded-t-2xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              disabled={isLoading}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with warning icon */}
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1 pt-1">
                <h2 className="text-xl font-semibold text-red-900">Delete Your Account Permanently?</h2>
              </div>
            </div>

            {/* Warning message */}
            <div className="mb-6 space-y-3">
              <p className="text-red-800 font-medium">This action cannot be undone.</p>
              <p className="text-sm text-gray-700 leading-relaxed">{getRoleSpecificWarning(userRole)}</p>
            </div>

            {/* Confirmation input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">Type DELETE to confirm</label>
              <input
                type="text"
                value={confirmText}
                onChange={handleConfirmTextChange}
                placeholder="Type DELETE here"
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              {error && confirmText !== "DELETE" && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span className="text-xs">⚠</span> {error}
                </p>
              )}
            </div>

            {/* Password confirmation */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Your Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              {error && password.length < 6 && confirmText === "DELETE" && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span className="text-xs">⚠</span> {error}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                disabled={isLoading}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={!isFormValid || isLoading}
                className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Undo Snackbar */}
      {showUndoSnackbar && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pb-8 pointer-events-none">
          <div className="pointer-events-auto bg-gray-900 text-white rounded-lg shadow-2xl px-6 py-4 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-red-400">{countdown}</span>
              </div>
              <div>
                <p className="font-medium">Account scheduled for deletion.</p>
                <p className="text-sm text-gray-400">This action will complete in {countdown} seconds.</p>
              </div>
            </div>
            <button
              onClick={handleUndo}
              className="ml-4 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Undo
            </button>
          </div>
        </div>
      )}
    </>
  );
}