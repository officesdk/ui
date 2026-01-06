import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { toast } from './toastManager';

// Wrapper component for toast API demos
const ToastApiDemo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      {children}
    </div>
  );
};

const meta: Meta = {
  title: 'Components/Toast/Toast API',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Global toast API for displaying notifications without manually placing ToastContainer component.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Basic usage of toast API
 */
export const BasicUsage: Story = {
  render: () => (
    <ToastApiDemo>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
        Basic Toast API Usage
      </h2>
      <p style={{ marginBottom: '24px', color: '#666' }}>
        Use the global toast object to display notifications anywhere in your app.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => toast.success('Operation successful!')}
          style={{
            padding: '10px 16px',
            background: '#4ea44b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          toast.success()
        </button>

        <button
          onClick={() => toast.info('This is an informational message')}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          toast.info()
        </button>

        <button
          onClick={() => toast.error('An error occurred. Please try again.')}
          style={{
            padding: '10px 16px',
            background: '#e95555',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          toast.error()
        </button>

        <button
          onClick={() => toast.warn('Warning: This action cannot be undone')}
          style={{
            padding: '10px 16px',
            background: '#ebe361',
            color: '#2c3033',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          toast.warn()
        </button>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
          Code Example:
        </h3>
        <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`import { toast } from '@officesdk/design';

toast.success('Operation successful!');
toast.info('This is an informational message');
toast.error('An error occurred');
toast.warn('Warning message');`}
        </pre>
      </div>
    </ToastApiDemo>
  ),
};

/**
 * Toast with custom options
 */
export const WithOptions: Story = {
  render: () => (
    <ToastApiDemo>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
        Toast with Options
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => toast.success('File uploaded successfully', {
            description: 'File size: 2.5MB',
            duration: 5000,
          })}
          style={{
            padding: '10px 16px',
            background: '#4ea44b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          With Description
        </button>

        <button
          onClick={() => toast.info('This toast will not auto-close', {
            duration: 0,
            closable: true,
          })}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          No Auto-close (duration: 0)
        </button>

        <button
          onClick={() => toast.success('Closable toast', {
            closable: true,
            duration: 10000,
          })}
          style={{
            padding: '10px 16px',
            background: '#4ea44b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          With Close Button
        </button>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
          Code Example:
        </h3>
        <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`toast.success('File uploaded', {
  description: 'File size: 2.5MB',
  duration: 5000,
});

toast.info('No auto-close', {
  duration: 0,  // 0 = no auto-close
  closable: true,
});`}
        </pre>
      </div>
    </ToastApiDemo>
  ),
};

/**
 * Toast with action buttons
 */
export const WithActions: Story = {
  render: () => (
    <ToastApiDemo>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
        Toast with Action Buttons
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => toast.info('New update available', {
            mainButtonText: 'Update Now',
            onMainButtonClick: () => {
              console.log('Update clicked');
              alert('Starting update...');
            },
            closable: true,
          })}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          With Main Action
        </button>

        <button
          onClick={() => toast.info('Save changes before leaving?', {
            mainButtonText: 'Save',
            onMainButtonClick: () => {
              console.log('Save clicked');
              alert('Saving...');
            },
            secondaryButtonText: 'Discard',
            onSecondaryButtonClick: () => {
              console.log('Discard clicked');
              alert('Discarding changes...');
            },
            closable: true,
            duration: 0,
          })}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          With Main & Secondary Actions
        </button>

        <button
          onClick={() => toast.warn('Unsaved changes detected', {
            description: 'You have unsaved changes in the editor',
            mainButtonText: 'Save Now',
            onMainButtonClick: () => alert('Saving...'),
            secondaryButtonText: 'Review',
            onSecondaryButtonClick: () => alert('Reviewing changes...'),
            closable: true,
            duration: 0,
          })}
          style={{
            padding: '10px 16px',
            background: '#ebe361',
            color: '#2c3033',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          With Description & Actions
        </button>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
          Code Example:
        </h3>
        <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`toast.info('New update available', {
  mainButtonText: 'Update Now',
  onMainButtonClick: () => {
    console.log('Update clicked');
  },
  secondaryButtonText: 'Later',
  onSecondaryButtonClick: () => {
    console.log('Later clicked');
  },
  closable: true,
});`}
        </pre>
      </div>
    </ToastApiDemo>
  ),
};

/**
 * Manual control of toasts
 */
export const ManualControl: Story = {
  render: () => {
    let currentToastId: string | null = null;

    return (
      <ToastApiDemo>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
          Manual Toast Control
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => {
              currentToastId = toast.info('Processing...', {
                duration: 0,
              });
              console.log('Toast ID:', currentToastId);
            }}
            style={{
              padding: '10px 16px',
              background: '#5ba0e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Show Toast (No Auto-close)
          </button>

          <button
            onClick={() => {
              if (currentToastId) {
                toast.hide(currentToastId);
                currentToastId = null;
              }
            }}
            style={{
              padding: '10px 16px',
              background: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Hide Current Toast
          </button>

          <button
            onClick={() => {
              toast.success('Task 1 completed');
              setTimeout(() => toast.success('Task 2 completed'), 200);
              setTimeout(() => toast.success('Task 3 completed'), 400);
              setTimeout(() => toast.info('All tasks completed!'), 600);
            }}
            style={{
              padding: '10px 16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Show Multiple Toasts
          </button>

          <button
            onClick={() => toast.hideAll()}
            style={{
              padding: '10px 16px',
              background: '#e95555',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Hide All Toasts
          </button>
        </div>

        <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
            Code Example:
          </h3>
          <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Show and get ID
const id = toast.info('Processing...', {
  duration: 0,  // no auto-close
});

// Hide specific toast
toast.hide(id);

// Hide all toasts
toast.hideAll();

// Show multiple toasts
toast.success('Task 1');
toast.success('Task 2');
toast.success('Task 3');`}
        </pre>
        </div>
      </ToastApiDemo>
    );
  },
};

/**
 * Global configuration
 */
export const Configuration: Story = {
  render: () => (
    <ToastApiDemo>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
        Global Configuration
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => {
            toast.configure({
              placement: 'top-center',
              maxCount: 3,
              defaultDuration: 2000,
            });
            toast.success('Configuration updated!');
          }}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Configure: Top Center, Max 3, 2s Duration
        </button>

        <button
          onClick={() => {
            toast.configure({
              placement: 'bottom-right',
              maxCount: 5,
              defaultDuration: 3000,
            });
            toast.success('Configuration updated!');
          }}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Configure: Bottom Right, Max 5, 3s Duration
        </button>

        <button
          onClick={() => {
            toast.configure({
              placement: 'top-left',
              maxCount: 10,
              defaultDuration: 5000,
            });
            toast.success('Configuration updated!');
          }}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Configure: Top Left, Max 10, 5s Duration
        </button>

        <button
          onClick={() => {
            // Test max count by showing 6 toasts
            for (let i = 1; i <= 6; i++) {
              setTimeout(() => {
                toast.info(`Toast ${i}`);
              }, i * 100);
            }
          }}
          style={{
            padding: '10px 16px',
            background: '#666',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Test Max Count (Show 6 Toasts)
        </button>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
          Code Example:
        </h3>
        <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`toast.configure({
  placement: 'top-right',
  // Options:
  // - 'top-right' (default)
  // - 'top-left'
  // - 'top-center'
  // - 'bottom-right'
  // - 'bottom-left'
  // - 'bottom-center'
  
  maxCount: 5,           // max toasts shown
  defaultDuration: 3000, // ms
});`}
        </pre>
      </div>
    </ToastApiDemo>
  ),
};

/**
 * Real-world use cases
 */
export const UseCases: Story = {
  render: () => (
    <ToastApiDemo>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
        Real-world Use Cases
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => {
            const id = toast.info('Uploading file...', { duration: 0 });
            setTimeout(() => {
              toast.hide(id);
              toast.success('File uploaded successfully!', {
                description: 'document.pdf (2.5MB)',
              });
            }, 2000);
          }}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          File Upload Simulation
        </button>

        <button
          onClick={() => {
            toast.info('New version 2.0.0 available', {
              mainButtonText: 'Update Now',
              onMainButtonClick: () => {
                alert('Updating...');
              },
              secondaryButtonText: 'Later',
              closable: true,
              duration: 0,
            });
          }}
          style={{
            padding: '10px 16px',
            background: '#5ba0e7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Version Update Notification
        </button>

        <button
          onClick={() => {
            const id = toast.info('Deleting 5 items...', { duration: 0 });
            setTimeout(() => {
              toast.hide(id);
              toast.success('Successfully deleted 5 items');
            }, 1500);
          }}
          style={{
            padding: '10px 16px',
            background: '#e95555',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Batch Delete Simulation
        </button>

        <button
          onClick={() => {
            toast.warn('Session will expire in 5 minutes', {
              description: 'Please save your work',
              mainButtonText: 'Extend Session',
              onMainButtonClick: () => {
                alert('Session extended');
              },
              closable: true,
              duration: 0,
            });
          }}
          style={{
            padding: '10px 16px',
            background: '#ebe361',
            color: '#2c3033',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Session Expiry Warning
        </button>

        <button
          onClick={() => {
            const id = toast.error('Connection lost', {
              description: 'Attempting to reconnect...',
              duration: 0,
            });
            setTimeout(() => {
              toast.hide(id);
              toast.success('Connection restored');
            }, 3000);
          }}
          style={{
            padding: '10px 16px',
            background: '#e95555',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Connection Lost/Restored
        </button>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
          Code Example:
        </h3>
        <pre style={{ fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`// File upload
const uploadId = toast.info('Uploading...', { 
  duration: 0 
});
await uploadFile(file);
toast.hide(uploadId);
toast.success('Upload complete!');

// Version update
toast.info('New version available', {
  mainButtonText: 'Update',
  onMainButtonClick: () => update(),
  closable: true,
});`}
        </pre>
      </div>
    </ToastApiDemo>
  ),
};

