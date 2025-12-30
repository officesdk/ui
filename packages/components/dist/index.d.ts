import React from 'react';

interface ButtonProps {
    /**
     * Button variant type
     */
    variant?: 'solid' | 'outlined' | 'text' | 'icon';
    /**
     * Button color type
     * - 'status' is only available for 'text' variant
     */
    colorType?: 'default' | 'guidance' | 'alert' | 'status';
    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Whether the button is in loading state
     */
    loading?: boolean;
    /**
     * Whether the button should take full width of its container
     */
    fullWidth?: boolean;
    /**
     * Icon to display before the button text
     */
    iconBefore?: React.ReactNode;
    /**
     * Icon to display after the button text
     */
    iconAfter?: React.ReactNode;
    /**
     * Whether the icon button should have a border (only for variant='icon')
     */
    iconBordered?: boolean;
    /**
     * Click event handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Button content
     */
    children?: React.ReactNode;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom inline styles
     */
    style?: React.CSSProperties;
}
/**
 * Button Component
 *
 * @example
 * // Basic button
 * <Button>按钮</Button>
 *
 * @example
 * // Button with icons
 * <Button iconBefore={<Icon />}>按钮</Button>
 *
 * @example
 * // Icon-only button
 * <Button variant="icon" iconBordered><Icon /></Button>
 */
declare const Button: React.FC<ButtonProps>;

interface SpinButtonProps {
    /**
     * Current value
     */
    value?: number;
    /**
     * Default value
     */
    defaultValue?: number;
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value
     */
    max?: number;
    /**
     * Step increment/decrement
     */
    step?: number;
    /**
     * Size variant
     */
    size?: 'small' | 'large';
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * Whether to show alert state (red border)
     */
    alert?: boolean;
    /**
     * Whether to show the slider
     */
    showSlider?: boolean;
    /**
     * Number of decimal places
     */
    precision?: number;
    /**
     * Format the display value
     */
    formatter?: (value: number) => string;
    /**
     * Parse the input value
     */
    parser?: (displayValue: string) => number;
    /**
     * Callback when value changes
     */
    onChange?: (value: number | null) => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * SpinButton Component - 微调按钮
 *
 * A numeric input with increment/decrement buttons
 *
 * @example
 * <SpinButton value={35} onChange={(val) => console.log(val)} />
 */
declare const SpinButton: React.FC<SpinButtonProps>;

interface SwitchProps {
    /**
     * Whether the switch is checked
     */
    checked?: boolean;
    /**
     * Default checked state
     */
    defaultChecked?: boolean;
    /**
     * Size variant
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the switch is disabled
     */
    disabled?: boolean;
    /**
     * Callback when checked state changes
     */
    onChange?: (checked: boolean) => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Switch Component
 *
 * A toggle switch for binary states
 *
 * @example
 * <Switch checked={true} onChange={(checked) => console.log(checked)} />
 */
declare const Switch: React.FC<SwitchProps>;

interface RadioProps {
    /**
     * Whether the radio is checked
     */
    checked?: boolean;
    /**
     * Default checked state
     */
    defaultChecked?: boolean;
    /**
     * Whether the radio is disabled
     */
    disabled?: boolean;
    /**
     * Value of the radio
     */
    value?: string | number;
    /**
     * Name attribute for grouping radios
     */
    name?: string;
    /**
     * ID attribute for the radio (used with htmlFor in labels)
     */
    id?: string;
    /**
     * Callback when checked state changes
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Radio Component
 *
 * A radio button for selecting one option from a group
 *
 * @example
 * <Radio checked={true} onChange={(e) => console.log(e.target.checked)} />
 */
declare const Radio: React.FC<RadioProps>;

interface CheckboxProps {
    /**
     * Whether the checkbox is checked
     */
    checked?: boolean;
    /**
     * Default checked state
     */
    defaultChecked?: boolean;
    /**
     * Whether the checkbox is in indeterminate state
     */
    indeterminate?: boolean;
    /**
     * Whether the checkbox is disabled
     */
    disabled?: boolean;
    /**
     * Value of the checkbox
     */
    value?: string | number;
    /**
     * Name attribute for the checkbox
     */
    name?: string;
    /**
     * ID attribute for the checkbox (used with htmlFor in labels)
     */
    id?: string;
    /**
     * Callback when checked state changes
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Checkbox Component
 *
 * A checkbox for selecting multiple options
 *
 * @example
 * <Checkbox checked={true} onChange={(e) => console.log(e.target.checked)} />
 *
 * @example
 * // Indeterminate state
 * <Checkbox indeterminate={true} />
 */
declare const Checkbox: React.FC<CheckboxProps>;

interface SliderProps {
    /**
     * Current value (0-100)
     */
    value?: number;
    /**
     * Default value
     */
    defaultValue?: number;
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value
     */
    max?: number;
    /**
     * Step increment
     */
    step?: number;
    /**
     * Whether the slider is disabled
     */
    disabled?: boolean;
    /**
     * Callback when value changes
     */
    onChange?: (value: number) => void;
    /**
     * Callback when dragging starts
     */
    onDragStart?: () => void;
    /**
     * Callback when dragging ends
     */
    onDragEnd?: () => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Slider Component
 *
 * A slider for selecting a value from a range
 *
 * @example
 * <Slider value={35} onChange={(val) => console.log(val)} />
 */
declare const Slider: React.FC<SliderProps>;

interface IconProps {
    /**
     * Icon name from registry (requires IconProvider)
     */
    name?: string;
    /**
     * Image URL for icon (e.g., PNG, JPG, or external SVG)
     */
    src?: string;
    /**
     * Custom icon element (takes precedence over name and src)
     */
    children?: React.ReactNode;
    /**
     * Size of the icon (px)
     */
    size?: number | string;
    /**
     * Color of the icon (only works with SVG icons, not image src)
     */
    color?: string;
    /**
     * Alt text for image icons
     */
    alt?: string;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
    /**
     * Click handler
     */
    onClick?: (e: React.MouseEvent) => void;
}
/**
 * Icon Component
 *
 * Renders icons from multiple sources with priority: children > src > name
 *
 * @example
 * // Using with IconProvider and registry
 * <Icon name="close" size={16} />
 *
 * @example
 * // Using with image URL
 * <Icon src="/icons/custom-icon.svg" size={24} />
 *
 * @example
 * // Using with custom icon element
 * <Icon><CustomSvg /></Icon>
 *
 * @example
 * // Using with imported icon component
 * import { CloseIcon } from '@officesdk/ui/icons';
 * <Icon><CloseIcon /></Icon>
 */
declare const Icon: React.FC<IconProps>;

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type IconRegistry = Record<string, IconComponent>;
interface IconProviderProps {
    /**
     * Icon registry mapping icon names to React components
     * Import from @officesdk/ui/icons
     */
    icons: IconRegistry;
    /**
     * Children components
     */
    children: React.ReactNode;
}
/**
 * IconProvider Component
 *
 * Provides icon registry to child components via Context
 *
 * @example
 * import { IconProvider } from '@officesdk/ui';
 * import { iconRegistry } from '@officesdk/ui/icons';
 *
 * <IconProvider icons={iconRegistry}>
 *   <App />
 * </IconProvider>
 */
declare const IconProvider: React.FC<IconProviderProps>;
/**
 * Hook to access icon registry from context
 */
declare const useIconRegistry: () => IconRegistry | null;

interface ToastProps {
    /**
     * Toast variant type
     */
    variant?: 'success' | 'info' | 'error' | 'warn';
    /**
     * Toast message content
     */
    message: string;
    /**
     * Optional action button text
     */
    actionText?: string;
    /**
     * Action button click handler
     */
    onAction?: () => void;
    /**
     * Whether to show close button
     */
    closable?: boolean;
    /**
     * Close button click handler
     */
    onClose?: () => void;
    /**
     * Auto close duration in milliseconds (0 to disable)
     */
    duration?: number;
    /**
     * Custom icon (overrides default variant icon)
     */
    icon?: React.ReactNode;
    /**
     * Whether to show icon
     */
    showIcon?: boolean;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Toast Component
 *
 * A notification message component with different variants
 *
 * @example
 * <Toast variant="success" message="Operation successful!" />
 *
 * @example
 * <Toast
 *   variant="info"
 *   message="New update available"
 *   actionText="Update"
 *   onAction={() => console.log('Update clicked')}
 *   closable
 * />
 */
declare const Toast: React.FC<ToastProps>;

interface ToastContextValue {
    showToast: (props: Omit<ToastProps, 'onClose'>) => string;
    hideToast: (id: string) => void;
    success: (message: string, options?: Partial<ToastProps>) => string;
    info: (message: string, options?: Partial<ToastProps>) => string;
    error: (message: string, options?: Partial<ToastProps>) => string;
    warn: (message: string, options?: Partial<ToastProps>) => string;
}
interface ToastContainerProps {
    /**
     * Maximum number of toasts to show at once
     */
    maxCount?: number;
    /**
     * Default duration for auto-close (ms)
     */
    defaultDuration?: number;
    /**
     * Children components
     */
    children: React.ReactNode;
}
/**
 * ToastContainer Component
 *
 * Provides toast context and manages toast display
 *
 * @example
 * <ToastContainer>
 *   <App />
 * </ToastContainer>
 */
declare const ToastContainer: React.FC<ToastContainerProps>;
/**
 * Hook to access toast methods
 *
 * @example
 * const toast = useToast();
 * toast.success('Operation successful!');
 * toast.error('Something went wrong');
 */
declare const useToast: () => ToastContextValue;

interface TabItem {
    /**
     * Unique key for the tab
     */
    key: string;
    /**
     * Tab label
     */
    label: string;
    /**
     * Whether the tab is disabled
     */
    disabled?: boolean;
    /**
     * Custom icon
     */
    icon?: React.ReactNode;
}
interface TabProps {
    /**
     * Tab items
     */
    items: TabItem[];
    /**
     * Active tab key
     */
    activeKey?: string;
    /**
     * Default active tab key
     */
    defaultActiveKey?: string;
    /**
     * Tab variant
     */
    variant?: 'line' | 'card';
    /**
     * Tab size
     */
    size?: 'large';
    /**
     * Callback when tab changes
     */
    onChange?: (key: string) => void;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
}
/**
 * Tab Component
 *
 * A tab component with line and card variants
 *
 * @example
 * <Tab
 *   items={[
 *     { key: '1', label: 'Tab 1' },
 *     { key: '2', label: 'Tab 2' },
 *   ]}
 *   defaultActiveKey="1"
 * />
 */
declare const Tab: React.FC<TabProps>;

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
interface ToastConfig {
    /**
     * Maximum number of toasts to show at once
     */
    maxCount?: number;
    /**
     * Default duration for auto-close (ms)
     */
    defaultDuration?: number;
    /**
     * Toast position on screen
     */
    position?: ToastPosition;
    /**
     * Offset from edge (px)
     */
    offset?: {
        x?: number;
        y?: number;
    };
}
interface ZIndexConfig {
    /**
     * Z-index for toast notifications
     */
    toast?: number;
    /**
     * Z-index for modals
     */
    modal?: number;
    /**
     * Z-index for dropdowns
     */
    dropdown?: number;
    /**
     * Z-index for tooltips
     */
    tooltip?: number;
}
interface AnimationConfig {
    /**
     * Default animation duration (ms)
     */
    duration?: number;
    /**
     * Default easing function
     */
    easing?: string;
    /**
     * Disable all animations
     */
    disabled?: boolean;
}
interface A11yConfig {
    /**
     * Announce messages to screen readers
     */
    announceMessages?: boolean;
    /**
     * Show focus visible indicators
     */
    focusVisible?: boolean;
    /**
     * Reduce motion for users who prefer it
     */
    reduceMotion?: boolean;
}
interface I18nConfig {
    /**
     * Toast messages
     */
    toast?: {
        closeLabel?: string;
    };
    /**
     * Button messages
     */
    button?: {
        loadingText?: string;
    };
    /**
     * Common messages
     */
    common?: {
        confirm?: string;
        cancel?: string;
        ok?: string;
    };
}
interface UIConfig {
    /**
     * Theme configuration (required)
     */
    theme: any;
    /**
     * Icon registry (optional)
     */
    icons?: IconRegistry;
    /**
     * Toast configuration
     */
    toast?: ToastConfig;
    /**
     * Locale code (e.g., 'zh-CN', 'en-US')
     */
    locale?: string;
    /**
     * Internationalization configuration
     */
    i18n?: I18nConfig;
    /**
     * Z-index layer management
     */
    zIndex?: ZIndexConfig;
    /**
     * Animation configuration
     */
    animation?: AnimationConfig;
    /**
     * Accessibility configuration
     */
    a11y?: A11yConfig;
}

interface UIConfigProviderProps {
    /**
     * UI configuration
     */
    config: UIConfig;
    /**
     * Children components
     */
    children: React.ReactNode;
}
/**
 * UIConfigProvider Component
 *
 * Unified provider for all UI components and global configurations
 * Includes ThemeProvider, IconProvider, ToastContainer, and other settings
 *
 * @example
 * import { UIConfigProvider } from '@officesdk/ui';
 * import { lightTheme } from '@officesdk/ui/theme';
 * import { iconRegistry } from '@officesdk/ui/icons';
 *
 * <UIConfigProvider config={{
 *   theme: lightTheme,
 *   icons: iconRegistry,
 *   toast: {
 *     defaultDuration: 3000,
 *     maxCount: 5,
 *   },
 * }}>
 *   <App />
 * </UIConfigProvider>
 */
declare const UIConfigProvider: React.FC<UIConfigProviderProps>;
/**
 * Hook to access UI configuration
 *
 * @example
 * const config = useUIConfig();
 * console.log(config.theme);
 * console.log(config.locale);
 */
declare const useUIConfig: () => UIConfig;

/**
 * Create UI configuration with default values
 *
 * @example
 * import { createUIConfig } from '@officesdk/ui';
 * import { lightTheme } from '@officesdk/ui/theme';
 * import { iconRegistry } from '@officesdk/ui/icons';
 *
 * const config = createUIConfig({
 *   theme: lightTheme,
 *   icons: iconRegistry,
 *   toast: {
 *     defaultDuration: 3000,
 *   },
 * });
 */
declare const createUIConfig: (config: UIConfig) => UIConfig;
/**
 * Merge multiple configs (useful for extending base configs)
 */
declare const mergeUIConfig: (baseConfig: UIConfig, ...configs: Partial<UIConfig>[]) => UIConfig;

export { type A11yConfig, type AnimationConfig, Button, type ButtonProps, Checkbox, type CheckboxProps, type I18nConfig, Icon, type IconComponent, type IconProps, IconProvider, type IconProviderProps, type IconRegistry, Radio, type RadioProps, Slider, type SliderProps, SpinButton, type SpinButtonProps, Switch, type SwitchProps, Tab, type TabItem, type TabProps, Toast, type ToastConfig, ToastContainer, type ToastContainerProps, type ToastPosition, type ToastProps, type UIConfig, UIConfigProvider, type UIConfigProviderProps, type ZIndexConfig, createUIConfig, mergeUIConfig, useIconRegistry, useToast, useUIConfig };
