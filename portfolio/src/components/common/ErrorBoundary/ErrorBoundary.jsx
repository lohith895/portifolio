import React, { Component } from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-3xl">
              <FaExclamationTriangle />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-100">Oops! Something went wrong.</h1>
              <p className="text-xs text-slate-400 leading-relaxed">
                An unexpected runtime error occurred. Please try refreshing the application.
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              <FaRedo className="text-xs" />
              <span>Refresh Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
