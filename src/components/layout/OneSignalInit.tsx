"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Intercept console.error to filter out OneSignal configuration error
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const errorMsg = args
          .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg)))
          .join(" ");
        if (
          errorMsg.includes("App not configured for web push") ||
          errorMsg.includes("OneSignal") ||
          errorMsg.includes("onesignal")
        ) {
          // Log as a warning instead of error to suppress Next.js dev error overlay
          console.warn("OneSignal (Suppressed Error):", ...args);
          return;
        }
        originalConsoleError.apply(console, args);
      };

      // Intercept unhandled promise rejections from the SDK script
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        const reason = event.reason;
        const msg = reason && reason.message ? reason.message : String(reason);
        if (msg.includes("App not configured for web push") || msg.includes("OneSignal")) {
          event.preventDefault();
          console.warn("OneSignal (Suppressed Rejection):", reason);
        }
      };

      // Intercept global error events from the SDK script
      const handleGlobalError = (event: ErrorEvent) => {
        const msg = event.message || "";
        if (msg.includes("App not configured for web push") || msg.includes("OneSignal")) {
          event.preventDefault();
          console.warn("OneSignal (Suppressed ErrorEvent):", msg);
        }
      };

      window.addEventListener("unhandledrejection", handleUnhandledRejection);
      window.addEventListener("error", handleGlobalError);

      // Use standard OneSignal initialization
      OneSignal.init({
        appId: "0a3f3b6d-6e02-4e6d-91c0-77ddaca677c7",
        allowLocalhostAsSecureOrigin: true, // Crucial for local development/testing
      })
        .then(() => {
          console.log("OneSignal successfully initialized.");

          // Automatically prompt the user for notifications
          OneSignal.Notifications.requestPermission()
            .then(() => {
              console.log("Notification permission prompt displayed/processed.");
            })
            .catch((err) => {
              console.error("Failed to request notification permission:", err);
            });

          // Cast to any to safely query properties regardless of TS definition age
          const oneSignalAny = OneSignal as any;
          if (oneSignalAny.User && oneSignalAny.User.pushSubscription) {
            const subscription = oneSignalAny.User.pushSubscription;
            console.log("OneSignal push subscription details:", {
              id: subscription.id,
              optedIn: subscription.optedIn,
            });

            // Listen to subscription state updates
            subscription.addEventListener("change", (event: any) => {
              console.log("OneSignal push subscription state changed:", {
                id: event.current.id,
                optedIn: event.current.optedIn,
              });
            });
          }
        })
        .catch((err) => {
          console.warn("OneSignal initialization failed:", err);
        });

      return () => {
        console.error = originalConsoleError;
        window.removeEventListener("unhandledrejection", handleUnhandledRejection);
        window.removeEventListener("error", handleGlobalError);
      };
    }
  }, []);

  return null;
}
