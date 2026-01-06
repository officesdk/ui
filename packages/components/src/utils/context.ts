import type { Theme } from "@officesdk/design-theme";
import type React from "react";

const globalTheme: Theme = {} as Theme;

const registerGlobalTheme = (theme: Theme) => {
  // Replace the reference instead of mutating
  Object.assign(globalTheme, { ...globalTheme, ...theme });
};

export const getGlobalTheme = (): Theme => {
  return globalTheme;
};

// Store render function globally to avoid circular dependency
let globalRenderFunction: ((element: React.ReactElement, container: HTMLElement) => void) | null = null;

export const getGlobalRenderFunction = () => globalRenderFunction;

/**
 * Register global context
 *
 * Registers theme and render function to the global context.
 * Can be called multiple times (e.g., in tests) to update the theme.
 *
 * @param context - The context to register
 * @param context.theme - Theme configuration
 * @param context.render - Optional render function for toast (React 18+ uses createRoot, older versions use ReactDOM.render)
 */
export const registerGlobalContext = (context: {
  theme: Theme;
  render?: (element: React.ReactElement, container: HTMLElement) => void;
}) => {
  if (context.theme) {
    registerGlobalTheme(context.theme);
  }

  if (context.render) {
    globalRenderFunction = context.render;
    // Immediately set render function if toastManager is already loaded
    // This avoids race conditions
    if (typeof window !== 'undefined') {
      // Use a small timeout to ensure toastManager is loaded
      setTimeout(() => {
        import('../Toast/toastManager').then(({ toastManager }) => {
          toastManager.setRenderFunction(context.render!);
        }).catch(() => {
          // toastManager not loaded yet, will be set when it loads
        });
      }, 0);
    }
  }
};
